import { ARCANOS, ARCANOS_MAP } from '../data/arcanos.js';
import { TIRADAS, TIRADAS_MAP, generarLectura } from './interpreter.js';
import {
  cargarBitacora,
  guardarEntradaBitacora,
  eliminarEntradaBitacora
} from './storage.js';

const state = {
  view: 'interpretar',
  mode: 'yo', // 'yo' | 'otro'
  recipientName: '',
  question: '',
  spreadId: 'camino-3',
  source: 'fisico', // 'fisico' | 'azar'
  selectedCards: [null, null, null],
  revealed: [true, true, true],
  activeSlot: 0,
  pickerOpen: true,
  pickerSearch: '',
  personalNote: '',
  catalogSearch: '',
  catalogGroup: 'todos',
  bitacoraFilter: 'todas',
  bitacora: []
};

const el = {};

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function matchesArcanoQuery(arcano, rawQuery) {
  const q = normalizeText(rawQuery);
  if (!q) return true;

  const nombre = normalizeText(arcano.nombre);
  const romano = normalizeText(arcano.romano);
  const idStr = String(arcano.id);
  const palabras = arcano.palabrasClave.map(normalizeText).join(' ');
  const alt = normalizeText(arcano.numeroAlt || arcano.notaNumeracion || '');

  if (
    nombre.includes(q) ||
    romano === q ||
    idStr === q ||
    palabras.includes(q) ||
    alt.includes(q)
  ) {
    return true;
  }

  // Compatibilidad con numeración Marsella vs Rider-Waite (VIII <-> XI) y Loco (22 / sin número)
  if ((q === '8' || q === 'viii' || q === '11' || q === 'xi') && (arcano.id === 8 || arcano.id === 11)) {
    return true;
  }
  if ((q === '22' || q === 'xxii' || q.includes('sin numero')) && arcano.id === 0) {
    return true;
  }

  return false;
}

function renderArcanoSvg(arcano, extraClass = '') {
  return `<svg class="${extraClass}" viewBox="0 0 120 145" aria-hidden="true">${arcano.svg}</svg>`;
}

function showToast(message) {
  clearTimeout(showToast._timer);
  el.toast.textContent = message;
  el.toast.classList.add('is-visible');
  showToast._timer = setTimeout(() => {
    el.toast.classList.remove('is-visible');
  }, 2400);
}

function getCurrentSpread() {
  return TIRADAS_MAP.get(state.spreadId);
}

function getFilledCount() {
  const tirada = getCurrentSpread();
  let count = 0;
  for (let i = 0; i < tirada.cantidad; i += 1) {
    if (state.selectedCards[i] !== null) count += 1;
  }
  return count;
}

function isReadingReady() {
  const tirada = getCurrentSpread();
  for (let i = 0; i < tirada.cantidad; i += 1) {
    if (state.selectedCards[i] === null) return false;
    if (state.source === 'azar' && !state.revealed[i]) return false;
  }
  return true;
}

function findNextEmptySlot() {
  const tirada = getCurrentSpread();
  for (let i = 0; i < tirada.cantidad; i += 1) {
    if (state.selectedCards[i] === null) return i;
  }
  return 0;
}

function shuffleArcanoIds(count) {
  const pool = ARCANOS.map((a) => a.id);
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

/* RENDERIZADO */
function renderViews() {
  for (const [viewName, section] of Object.entries(el.views)) {
    const active = state.view === viewName;
    section.classList.toggle('is-active', active);
  }
  for (const tab of el.navTabs) {
    const active = tab.dataset.view === state.view;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  }
}

function renderModeControls() {
  el.modeYo.classList.toggle('is-active', state.mode === 'yo');
  el.modeYo.setAttribute('aria-pressed', String(state.mode === 'yo'));
  el.modeOtro.classList.toggle('is-active', state.mode === 'otro');
  el.modeOtro.setAttribute('aria-pressed', String(state.mode === 'otro'));
  el.recipientWrap.classList.toggle('is-hidden', state.mode !== 'otro');
}

function renderSpreadOptions() {
  el.spreadOptions.innerHTML = TIRADAS.map((tirada) => {
    const active = tirada.id === state.spreadId;
    const badgeText = tirada.cantidad === 1 ? '1 carta' : `${tirada.cantidad} cartas`;
    const shortTitle = tirada.nombre.split('·').slice(1).join('·').trim();
    return `
      <button
        type="button"
        class="spread-card ${active ? 'is-active' : ''}"
        id="spread-${tirada.id}"
        data-spread="${tirada.id}"
        role="radio"
        aria-checked="${active}"
      >
        <span class="spread-badge">${badgeText}</span>
        <span class="spread-title">${escapeHtml(shortTitle)}</span>
        <span class="spread-desc">${escapeHtml(tirada.descripcion)}</span>
      </button>
    `;
  }).join('');
}

function renderSourceControls() {
  const isFisico = state.source === 'fisico';
  el.sourceFisico.classList.toggle('is-active', isFisico);
  el.sourceFisico.setAttribute('aria-pressed', String(isFisico));
  el.sourceAzar.classList.toggle('is-active', !isFisico);
  el.sourceAzar.setAttribute('aria-pressed', String(!isFisico));

  el.randomControls.classList.toggle('is-hidden', isFisico);

  if (isFisico) {
    el.tableInstruction.textContent =
      'Elige en tu mazo físico y toca aquí los arcanos que salieron en cada lugar.';
  } else {
    el.tableInstruction.textContent =
      'Mezcla los 22 arcanos aquí y toca cada carta boca abajo para descubrirla.';
  }

  const tirada = getCurrentSpread();
  const hasUnrevealed =
    !isFisico &&
    state.selectedCards.slice(0, tirada.cantidad).every((c) => c !== null) &&
    state.revealed.slice(0, tirada.cantidad).some((r) => !r);

  el.btnRevealAll.classList.toggle('is-hidden', !hasUnrevealed);

  const hasAnyDrawn = state.selectedCards.slice(0, tirada.cantidad).some((c) => c !== null);
  el.btnDrawRandom.textContent =
    !isFisico && hasAnyDrawn ? 'Barajar de nuevo' : 'Barajar y sacar cartas';
}

function renderSlots() {
  const tirada = getCurrentSpread();
  el.slotsContainer.dataset.count = String(tirada.cantidad);

  el.slotsContainer.innerHTML = tirada.posiciones
    .map((pos, idx) => {
      const cardId = state.selectedCards[idx];
      const arcano = cardId !== null ? ARCANOS_MAP.get(cardId) : null;
      const isTarget = state.source === 'fisico' && state.activeSlot === idx && !arcano;

      let innerHtml = '';
      if (!arcano) {
        const prompt =
          state.source === 'fisico'
            ? 'Toca aquí o elige un arcano abajo'
            : 'Pulsa «Barajar y sacar cartas»';
        innerHtml = `
          <button
            type="button"
            class="card-slot-empty ${isTarget ? 'is-target' : ''}"
            data-slot-select="${idx}"
            aria-label="Seleccionar posición ${idx + 1}: ${escapeHtml(pos.label)}"
          >
            <span class="slot-num-badge">${idx + 1}</span>
            <span class="slot-empty-text">${prompt}</span>
          </button>
        `;
      } else {
        const flipped = state.source === 'fisico' || Boolean(state.revealed[idx]);
        innerHtml = `
          <div class="tarot-card-scene">
            <div class="tarot-card-inner ${flipped ? 'is-flipped' : ''}">
              <button
                type="button"
                class="tarot-face tarot-face-back"
                data-flip-slot="${idx}"
                aria-label="Voltear carta ${idx + 1}: ${escapeHtml(pos.label)}"
              >
                <div class="tarot-back-frame">
                  <svg viewBox="0 0 60 72" width="44" height="54" aria-hidden="true">
                    <circle cx="30" cy="36" r="16" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.85"/>
                    <circle cx="30" cy="36" r="4" fill="currentColor" opacity="0.85"/>
                    <path d="M30 12v8M30 52v8M10 36h8M42 36h8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  </svg>
                  <span class="tarot-back-hint">Toca para revelar</span>
                </div>
              </button>
              <div class="tarot-face tarot-face-front">
                <div class="tarot-front-frame">
                  ${
                    state.source === 'fisico'
                      ? `<button type="button" class="card-remove-btn" data-remove-slot="${idx}" aria-label="Quitar ${escapeHtml(arcano.nombre)}">&times;</button>`
                      : ''
                  }
                  <span class="card-roman">${escapeHtml(arcano.romano)}</span>
                  <div class="card-art">${renderArcanoSvg(arcano)}</div>
                  <div>
                    <h3 class="card-name">${escapeHtml(arcano.nombre)}</h3>
                    <div class="card-keywords">${escapeHtml(arcano.palabrasClave.slice(0, 3).join(' · '))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="slot-wrapper">
          <div class="slot-label">
            <span class="slot-label-title">${idx + 1}. ${escapeHtml(pos.label)}</span>
            <span class="slot-label-sub">${escapeHtml(pos.subtitle)}</span>
          </div>
          ${innerHtml}
        </div>
      `;
    })
    .join('');

  const filled = getFilledCount();
  const allFilled = filled === tirada.cantidad;

  el.btnClearSlots.classList.toggle('is-hidden', filled === 0);
  el.btnTogglePicker.classList.toggle('is-hidden', !(state.source === 'fisico' && allFilled));
  el.btnTogglePicker.textContent = state.pickerOpen
    ? 'Ocultar selector de cartas'
    : 'Cambiar cartas elegidas';
}

function renderPicker() {
  const tirada = getCurrentSpread();
  const showPicker = state.source === 'fisico' && state.pickerOpen;
  el.arcanaPicker.classList.toggle('is-hidden', !showPicker);
  if (!showPicker) return;

  const activePos = tirada.posiciones[state.activeSlot] || tirada.posiciones[0];
  const allFilled = getFilledCount() === tirada.cantidad;

  el.pickerStatus.textContent = allFilled
    ? 'Todas las posiciones están completas (toca una carta marcada para quitarla).'
    : `Elige la carta ${state.activeSlot + 1} de ${tirada.cantidad}: ${activePos.label}`;

  const filtered = ARCANOS.filter((a) => matchesArcanoQuery(a, state.pickerSearch));

  if (filtered.length === 0) {
    el.pickerGrid.innerHTML = `
      <div class="picker-empty">
        No encontramos ningún arcano con "${escapeHtml(state.pickerSearch)}". Prueba con el nombre o número (0–21).
      </div>
    `;
    return;
  }

  el.pickerGrid.innerHTML = filtered
    .map((arcano) => {
      const assignedIndex = state.selectedCards
        .slice(0, tirada.cantidad)
        .indexOf(arcano.id);
      const isSelected = assignedIndex !== -1;
      return `
        <button
          type="button"
          class="mini-arcano ${isSelected ? 'is-selected' : ''}"
          data-pick-arcano="${arcano.id}"
          aria-pressed="${isSelected}"
        >
          ${isSelected ? `<span class="mini-arcano-badge">${assignedIndex + 1}ª</span>` : ''}
          <span class="mini-arcano-roman">${escapeHtml(arcano.romano)}</span>
          ${renderArcanoSvg(arcano, 'mini-arcano-svg')}
          <span class="mini-arcano-name">${escapeHtml(arcano.nombre)}</span>
        </button>
      `;
    })
    .join('');
}

function renderInterpretation() {
  if (!isReadingReady()) {
    el.interpretationPanel.classList.add('is-hidden');
    el.interpretationPanel.innerHTML = '';
    return;
  }

  const tirada = getCurrentSpread();
  const cards = state.selectedCards.slice(0, tirada.cantidad);
  const lectura = generarLectura({
    spreadId: state.spreadId,
    cards,
    mode: state.mode,
    recipientName: state.recipientName,
    question: state.question
  });

  const eyebrow =
    lectura.mode === 'yo'
      ? `Autolectura · ${lectura.tirada.nombre}`
      : `Lectura para otra persona · ${lectura.tirada.nombre}`;

  const cardsHtml = lectura.cartasInterpretadas
    .map((item) => {
      const a = item.arcano;
      return `
        <article class="card-reading-item">
          <div class="reading-card-thumb">
            <span class="reading-card-num">${escapeHtml(a.romano)}</span>
            ${renderArcanoSvg(a)}
          </div>
          <div>
            <span class="position-pill">${escapeHtml(item.posicion.label)}</span>
            <h3 class="reading-arcano-name">${escapeHtml(a.nombre)}</h3>
            <p class="reading-arcano-meta">
              ${escapeHtml(a.arquetipo)}
              ${a.notaNumeracion ? `<span class="numbering-note">(${escapeHtml(a.notaNumeracion)})</span>` : ''}
            </p>
            <p class="reading-body">${escapeHtml(item.textoPrincipal)}</p>
            ${
              item.notaTranquila
                ? `<div class="calm-note"><strong>Para leer con calma:</strong> ${escapeHtml(item.notaTranquila)}</div>`
                : ''
            }
            <p class="reading-prompt-box">
              <strong>${lectura.mode === 'yo' ? 'Pregunta para ti:' : 'Pregunta para abrir charla:'}</strong>
              ${escapeHtml(item.preguntaGuia)}
            </p>
            <blockquote class="poetic-echo">
              <span class="poetic-echo-label">Eco poético del arcano</span>
              <span class="poetic-echo-lines">${a.ecoPoetico.split('\n').map(escapeHtml).join('<br>')}</span>
            </blockquote>
          </div>
        </article>
      `;
    })
    .join('');

  el.interpretationPanel.classList.remove('is-hidden');
  el.interpretationPanel.innerHTML = `
    <div class="reading-header">
      <div>
        <span class="reading-eyebrow">${escapeHtml(eyebrow)}</span>
        <h2 class="reading-title">${escapeHtml(lectura.encabezado.titulo)}</h2>
        ${
          lectura.pregunta
            ? `<p class="reading-question-quote">“${escapeHtml(lectura.pregunta)}”</p>`
            : ''
        }
      </div>
      <div class="reading-actions">
        <button type="button" class="btn-secondary" id="btn-copy-reading">
          Copiar resumen
        </button>
        <button type="button" class="btn-primary" id="btn-save-reading">
          Guardar en Bitácora
        </button>
      </div>
    </div>

    <div class="cards-interpretation-list">
      ${cardsHtml}
    </div>

    <div class="synthesis-section">
      <h3>${escapeHtml(lectura.sintesis.titulo)}</h3>
      <p class="reading-body">${escapeHtml(lectura.sintesis.climaConjunto)}</p>
      <p class="reading-body">${escapeHtml(lectura.sintesis.cuerpo)}</p>
      <div class="synthesis-summary-line">
        En breve: ${escapeHtml(lectura.sintesis.resumenBreve)}
      </div>

      <div class="poem-pairing-box">
        <p class="poem-pairing-title">Con tu mazo Santos Locos · Tarot &amp; Poesía</p>
        <p class="reading-body">${escapeHtml(lectura.sintesis.sugerenciaPoema)}</p>
      </div>

      <div class="poem-pairing-box">
        <p class="poem-pairing-title">${escapeHtml(lectura.sintesis.guiaAcompanamiento.titulo)}</p>
        <ul class="guide-list">
          ${lectura.sintesis.guiaAcompanamiento.pasos
            .map((paso) => `<li>${escapeHtml(paso)}</li>`)
            .join('')}
        </ul>
      </div>

      <div class="notes-box">
        <label class="input-label" for="reading-notes">
          Anotar verso del poema físico o reflexión personal (opcional para la Bitácora)
        </label>
        <textarea
          id="reading-notes"
          class="textarea-input"
          placeholder="Escribe aquí una frase del poema de tu mazo que te haya resonado, o una nota sobre esta lectura..."
        >${escapeHtml(state.personalNote)}</textarea>
      </div>
    </div>
  `;

  document.getElementById('reading-notes')?.addEventListener('input', (e) => {
    state.personalNote = e.target.value;
  });

  document.getElementById('btn-copy-reading')?.addEventListener('click', async () => {
    const extraNote = state.personalNote.trim()
      ? `\n\nNotas / Poema del mazo:\n${state.personalNote.trim()}`
      : '';
    try {
      await navigator.clipboard.writeText(lectura.textoCompartible + extraNote);
      showToast('Resumen copiado al portapapeles');
    } catch {
      showToast('No se pudo copiar automáticamente en este navegador');
    }
  });

  document.getElementById('btn-save-reading')?.addEventListener('click', () => {
    state.bitacora = guardarEntradaBitacora({
      spreadId: lectura.tirada.id,
      spreadNombre: lectura.tirada.nombre,
      mode: lectura.mode,
      destinatario: lectura.destinatario,
      pregunta: lectura.pregunta,
      cartas: lectura.cartasInterpretadas.map((item) => ({
        id: item.arcano.id,
        romano: item.arcano.romano,
        nombre: item.arcano.nombre,
        posicion: item.posicion.label
      })),
      resumenBreve: lectura.sintesis.resumenBreve,
      notaPersonal: state.personalNote.trim(),
      textoCompartible: lectura.textoCompartible
    });
    renderBitacoraCount();
    renderBitacora();
    showToast('Lectura guardada en tu Bitácora');
  });
}

function renderCatalog() {
  const filtered = ARCANOS.filter((a) => {
    const matchGroup = state.catalogGroup === 'todos' || a.grupo === state.catalogGroup;
    return matchGroup && matchesArcanoQuery(a, state.catalogSearch);
  });

  for (const btn of el.catalogFilters.querySelectorAll('.filter-pill')) {
    btn.classList.toggle('is-active', btn.dataset.group === state.catalogGroup);
  }

  if (filtered.length === 0) {
    el.catalogGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>Sin coincidencias</h3>
        <p>No hay arcanos que coincidan con esa búsqueda.</p>
      </div>
    `;
    return;
  }

  el.catalogGrid.innerHTML = filtered
    .map(
      (arcano) => `
      <button type="button" class="catalog-card" data-open-arcano="${arcano.id}">
        <span class="card-roman">${escapeHtml(arcano.romano)}</span>
        ${renderArcanoSvg(arcano, 'catalog-card-svg')}
        <h3 class="catalog-card-title">${escapeHtml(arcano.nombre)}</h3>
        <p class="catalog-card-arch">${escapeHtml(arcano.arquetipo)}</p>
      </button>
    `
    )
    .join('');
}

function openArcanoDialog(arcanoId) {
  const arcano = ARCANOS_MAP.get(Number(arcanoId));
  if (!arcano) return;

  el.dialogInner.innerHTML = `
    <div class="dialog-top">
      <div class="dialog-header-flex">
        <div class="dialog-art">${renderArcanoSvg(arcano)}</div>
        <div>
          <span class="card-roman">${escapeHtml(arcano.romano)} · ${escapeHtml(arcano.elemento)}</span>
          <h2 id="dialog-title" class="reading-arcano-name" style="margin-top:0.2rem;">${escapeHtml(arcano.nombre)}</h2>
          <p class="reading-arcano-meta" style="margin-bottom:0.35rem;">${escapeHtml(arcano.arquetipo)}</p>
          ${
            arcano.notaNumeracion
              ? `<span class="numbering-note" style="margin-left:0;">${escapeHtml(arcano.notaNumeracion)}</span>`
              : ''
          }
        </div>
      </div>
      <button type="button" class="dialog-close" id="dialog-close-btn" aria-label="Cerrar">&times;</button>
    </div>

    <div class="dialog-grid">
      <div class="dialog-box">
        <strong>En luz</strong>
        ${escapeHtml(arcano.enLuz)}
      </div>
      <div class="dialog-box">
        <strong>En desafío / sombra</strong>
        ${escapeHtml(arcano.enSombra)}
      </div>
    </div>

    ${
      arcano.notaTranquila
        ? `<div class="calm-note"><strong>Para leer con calma:</strong> ${escapeHtml(arcano.notaTranquila)}</div>`
        : ''
    }

    <p class="reading-body"><strong>En lectura directa:</strong> ${escapeHtml(arcano.interpretaciones.esencia.yo)}</p>
    <p class="reading-body"><strong>Como consejo:</strong> ${escapeHtml(arcano.interpretaciones.consejo.yo)}</p>

    <blockquote class="poetic-echo">
      <span class="poetic-echo-label">Eco poético del arcano</span>
      <span class="poetic-echo-lines">${arcano.ecoPoetico.split('\n').map(escapeHtml).join('<br>')}</span>
    </blockquote>

    <div style="display:flex; justify-content:flex-end; gap:0.6rem; margin-top:1.25rem; flex-wrap:wrap;">
      <button type="button" class="btn-secondary" id="dialog-use-card" data-use-id="${arcano.id}">
        Interpretar esta carta (1 carta)
      </button>
    </div>
  `;

  el.dialog.showModal();

  document.getElementById('dialog-close-btn')?.addEventListener('click', () => el.dialog.close());
  document.getElementById('dialog-use-card')?.addEventListener('click', () => {
    state.spreadId = 'esencia-1';
    state.source = 'fisico';
    state.selectedCards = [arcano.id, null, null];
    state.revealed = [true, true, true];
    state.pickerOpen = false;
    state.view = 'interpretar';
    el.dialog.close();
    renderAll();
    el.interpretationPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderBitacoraCount() {
  const total = state.bitacora.length;
  el.bitacoraCount.textContent = String(total);
  el.bitacoraCount.classList.toggle('is-hidden', total === 0);
}

function renderBitacora() {
  for (const btn of el.bitacoraFilters.querySelectorAll('.filter-pill')) {
    btn.classList.toggle('is-active', btn.dataset.filter === state.bitacoraFilter);
  }

  const filtradas = state.bitacora.filter((entry) => {
    if (state.bitacoraFilter === 'todas') return true;
    return entry.mode === state.bitacoraFilter;
  });

  if (filtradas.length === 0) {
    el.bitacoraList.innerHTML = `
      <div class="empty-state">
        <h3>Aún no hay lecturas guardadas</h3>
        <p>Cuando hagas una interpretación en la pestaña «Interpretar», pulsa «Guardar en Bitácora» para conservarla aquí junto con tus notas o versos del mazo.</p>
      </div>
    `;
    return;
  }

  const formatter = new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  el.bitacoraList.innerHTML = filtradas
    .map((entry) => {
      const fecha = formatter.format(new Date(entry.fechaISO));
      const badgeDestino = entry.mode === 'yo' ? 'Para mí' : `Para ${entry.destinatario}`;
      return `
        <article class="bitacora-entry">
          <div class="bitacora-entry-top">
            <div>
              <span class="position-pill">${escapeHtml(badgeDestino)}</span>
              <span class="bitacora-meta">${escapeHtml(fecha)} · ${escapeHtml(entry.spreadNombre)}</span>
              ${
                entry.pregunta
                  ? `<p class="reading-question-quote" style="margin-top:0.35rem;">“${escapeHtml(entry.pregunta)}”</p>`
                  : ''
              }
            </div>
            <div style="display:flex; gap:0.4rem;">
              <button type="button" class="btn-ghost" data-copy-entry="${entry.id}">Copiar</button>
              <button type="button" class="btn-ghost" data-delete-entry="${entry.id}">Eliminar</button>
            </div>
          </div>

          <div class="bitacora-cards-row">
            ${entry.cartas
              .map(
                (c) =>
                  `<span class="bitacora-card-tag"><strong>${escapeHtml(c.posicion)}:</strong> ${escapeHtml(c.romano)} · ${escapeHtml(c.nombre)}</span>`
              )
              .join('')}
          </div>

          <p class="reading-body" style="margin-bottom:0;"><strong>Síntesis:</strong> ${escapeHtml(entry.resumenBreve)}</p>

          ${
            entry.notaPersonal
              ? `<div class="bitacora-note"><strong>Notas / Poema:</strong><div class="bitacora-note-body">${escapeHtml(entry.notaPersonal)}</div></div>`
              : ''
          }
        </article>
      `;
    })
    .join('');
}

function renderAll() {
  renderViews();
  renderModeControls();
  renderSpreadOptions();
  renderSourceControls();
  renderSlots();
  renderPicker();
  renderInterpretation();
  renderCatalog();
  renderBitacoraCount();
  renderBitacora();
}

/* MANEJADORES DE EVENTOS */
function bindEvents() {
  for (const tab of el.navTabs) {
    tab.addEventListener('click', () => {
      state.view = tab.dataset.view;
      renderViews();
    });
  }

  el.brandHome.addEventListener('click', (e) => {
    e.preventDefault();
    state.view = 'interpretar';
    renderViews();
  });

  el.modeYo.addEventListener('click', () => {
    state.mode = 'yo';
    renderModeControls();
    renderInterpretation();
  });

  el.modeOtro.addEventListener('click', () => {
    state.mode = 'otro';
    renderModeControls();
    renderInterpretation();
  });

  el.recipientName.addEventListener('input', (e) => {
    state.recipientName = e.target.value;
    renderInterpretation();
  });

  el.readingQuestion.addEventListener('input', (e) => {
    state.question = e.target.value;
    renderInterpretation();
  });

  document.querySelectorAll('.chip-btn').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.question = chip.dataset.question;
      el.readingQuestion.value = state.question;
      renderInterpretation();
    });
  });

  el.spreadOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-spread]');
    if (!btn) return;
    const nextSpreadId = btn.dataset.spread;
    if (nextSpreadId === state.spreadId) return;

    state.spreadId = nextSpreadId;
    const tirada = getCurrentSpread();

    // Limpiar posiciones fuera del rango de la nueva tirada
    for (let i = tirada.cantidad; i < 3; i += 1) {
      state.selectedCards[i] = null;
    }

    if (state.source === 'azar') {
      state.selectedCards = [null, null, null];
      state.revealed = [false, false, false];
    } else {
      state.activeSlot = findNextEmptySlot();
      state.pickerOpen = getFilledCount() < tirada.cantidad;
    }

    renderSpreadOptions();
    renderSourceControls();
    renderSlots();
    renderPicker();
    renderInterpretation();
  });

  el.sourceFisico.addEventListener('click', () => {
    if (state.source === 'fisico') return;
    state.source = 'fisico';
    state.revealed = [true, true, true];
    const tirada = getCurrentSpread();
    state.activeSlot = findNextEmptySlot();
    state.pickerOpen = getFilledCount() < tirada.cantidad;
    renderSourceControls();
    renderSlots();
    renderPicker();
    renderInterpretation();
  });

  el.sourceAzar.addEventListener('click', () => {
    if (state.source === 'azar') return;
    state.source = 'azar';
    state.selectedCards = [null, null, null];
    state.revealed = [false, false, false];
    renderSourceControls();
    renderSlots();
    renderPicker();
    renderInterpretation();
  });

  el.btnDrawRandom.addEventListener('click', () => {
    const tirada = getCurrentSpread();
    const drawn = shuffleArcanoIds(tirada.cantidad);
    state.selectedCards = [null, null, null];
    state.revealed = [false, false, false];
    drawn.forEach((id, i) => {
      state.selectedCards[i] = id;
    });
    renderSourceControls();
    renderSlots();
    renderInterpretation();
  });

  el.btnRevealAll.addEventListener('click', () => {
    const tirada = getCurrentSpread();
    for (let i = 0; i < tirada.cantidad; i += 1) {
      if (state.selectedCards[i] !== null) state.revealed[i] = true;
    }
    renderSourceControls();
    renderSlots();
    renderInterpretation();
  });

  el.slotsContainer.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove-slot]');
    if (removeBtn) {
      const idx = Number(removeBtn.dataset.removeSlot);
      state.selectedCards[idx] = null;
      state.activeSlot = idx;
      state.pickerOpen = true;
      renderSlots();
      renderPicker();
      renderInterpretation();
      return;
    }

    const selectSlotBtn = e.target.closest('[data-slot-select]');
    if (selectSlotBtn && state.source === 'fisico') {
      state.activeSlot = Number(selectSlotBtn.dataset.slotSelect);
      state.pickerOpen = true;
      renderSlots();
      renderPicker();
      return;
    }

    const flipBtn = e.target.closest('[data-flip-slot]');
    if (flipBtn && state.source === 'azar') {
      const idx = Number(flipBtn.dataset.flipSlot);
      state.revealed[idx] = true;
      renderSourceControls();
      renderSlots();
      renderInterpretation();
    }
  });

  el.btnTogglePicker.addEventListener('click', () => {
    state.pickerOpen = !state.pickerOpen;
    renderSlots();
    renderPicker();
  });

  el.btnClearSlots.addEventListener('click', () => {
    state.selectedCards = [null, null, null];
    state.revealed = state.source === 'azar' ? [false, false, false] : [true, true, true];
    state.activeSlot = 0;
    state.pickerOpen = true;
    state.personalNote = '';
    renderSourceControls();
    renderSlots();
    renderPicker();
    renderInterpretation();
  });

  el.pickerSearch.addEventListener('input', (e) => {
    state.pickerSearch = e.target.value;
    renderPicker();
  });

  el.pickerGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-pick-arcano]');
    if (!btn) return;

    const id = Number(btn.dataset.pickArcano);
    const tirada = getCurrentSpread();
    const existingIdx = state.selectedCards.slice(0, tirada.cantidad).indexOf(id);

    if (existingIdx !== -1) {
      state.selectedCards[existingIdx] = null;
      state.activeSlot = existingIdx;
    } else {
      let target = state.activeSlot;
      if (target >= tirada.cantidad || state.selectedCards[target] !== null) {
        target = findNextEmptySlot();
      }
      state.selectedCards[target] = id;
      state.revealed[target] = true;
      state.activeSlot = findNextEmptySlot();
    }

    const complete = getFilledCount() === tirada.cantidad;
    if (complete) {
      state.pickerOpen = false;
    }

    renderSourceControls();
    renderSlots();
    renderPicker();
    renderInterpretation();

    if (complete) {
      setTimeout(() => {
        el.interpretationPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 120);
    }
  });

  el.catalogSearch.addEventListener('input', (e) => {
    state.catalogSearch = e.target.value;
    renderCatalog();
  });

  el.catalogFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-group]');
    if (!btn) return;
    state.catalogGroup = btn.dataset.group;
    renderCatalog();
  });

  el.catalogGrid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-open-arcano]');
    if (!card) return;
    openArcanoDialog(card.dataset.openArcano);
  });

  el.dialog.addEventListener('click', (e) => {
    if (e.target === el.dialog) {
      el.dialog.close();
    }
  });

  el.bitacoraFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    state.bitacoraFilter = btn.dataset.filter;
    renderBitacora();
  });

  el.bitacoraList.addEventListener('click', async (e) => {
    const deleteBtn = e.target.closest('[data-delete-entry]');
    if (deleteBtn) {
      state.bitacora = eliminarEntradaBitacora(deleteBtn.dataset.deleteEntry);
      renderBitacoraCount();
      renderBitacora();
      showToast('Lectura eliminada');
      return;
    }

    const copyBtn = e.target.closest('[data-copy-entry]');
    if (copyBtn) {
      const entry = state.bitacora.find((x) => x.id === copyBtn.dataset.copyEntry);
      if (!entry) return;
      const extra = entry.notaPersonal ? `\n\nNotas / Poema:\n${entry.notaPersonal}` : '';
      try {
        await navigator.clipboard.writeText((entry.textoCompartible || '') + extra);
        showToast('Lectura copiada al portapapeles');
      } catch {
        showToast('No se pudo copiar automáticamente');
      }
    }
  });
}

function init() {
  el.views = {
    interpretar: document.getElementById('view-interpretar'),
    arcanos: document.getElementById('view-arcanos'),
    bitacora: document.getElementById('view-bitacora')
  };
  el.navTabs = document.querySelectorAll('.nav-tab');
  el.brandHome = document.getElementById('brand-home');
  el.bitacoraCount = document.getElementById('bitacora-count');

  el.modeYo = document.getElementById('mode-yo');
  el.modeOtro = document.getElementById('mode-otro');
  el.recipientWrap = document.getElementById('recipient-wrap');
  el.recipientName = document.getElementById('recipient-name');
  el.readingQuestion = document.getElementById('reading-question');
  el.spreadOptions = document.getElementById('spread-options');

  el.tableInstruction = document.getElementById('table-instruction');
  el.sourceFisico = document.getElementById('source-fisico');
  el.sourceAzar = document.getElementById('source-azar');
  el.randomControls = document.getElementById('random-controls');
  el.btnDrawRandom = document.getElementById('btn-draw-random');
  el.btnRevealAll = document.getElementById('btn-reveal-all');

  el.slotsContainer = document.getElementById('slots-container');
  el.btnTogglePicker = document.getElementById('btn-toggle-picker');
  el.btnClearSlots = document.getElementById('btn-clear-slots');

  el.arcanaPicker = document.getElementById('arcana-picker');
  el.pickerStatus = document.getElementById('picker-status');
  el.pickerSearch = document.getElementById('picker-search');
  el.pickerGrid = document.getElementById('picker-grid');

  el.interpretationPanel = document.getElementById('interpretation-panel');

  el.catalogSearch = document.getElementById('catalog-search');
  el.catalogFilters = document.getElementById('catalog-filters');
  el.catalogGrid = document.getElementById('catalog-grid');

  el.bitacoraFilters = document.getElementById('bitacora-filters');
  el.bitacoraList = document.getElementById('bitacora-list');

  el.dialog = document.getElementById('arcano-dialog');
  el.dialogInner = document.getElementById('dialog-inner');
  el.toast = document.getElementById('toast');

  state.bitacora = cargarBitacora();
  bindEvents();
  renderAll();
}

init();
