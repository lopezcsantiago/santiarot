import { ARCANOS_MAP } from '../data/arcanos.js';

export const TIRADAS = [
  {
    id: 'esencia-1',
    nombre: '1 Carta · Esencia o Consejo',
    cantidad: 1,
    descripcion: 'Una brújula directa para tu momento actual o una duda puntual.',
    posiciones: [
      {
        key: 'esencia',
        label: 'Esencia / Consejo',
        subtitle: 'Qué mirar o qué actitud tomar hoy'
      }
    ]
  },
  {
    id: 'contraste-2',
    nombre: '2 Cartas · Luz y Desafío',
    cantidad: 2,
    descripcion: 'Qué te impulsa a favor y qué pide atención o cuidado.',
    posiciones: [
      {
        key: 'luz',
        label: 'Lo que impulsa',
        subtitle: 'Tu apoyo o fortaleza en este tema'
      },
      {
        key: 'desafio',
        label: 'Lo que pide atención',
        subtitle: 'El nudo, exceso o cuidado necesario'
      }
    ]
  },
  {
    id: 'camino-3',
    nombre: '3 Cartas · Situación · Obstáculo · Consejo',
    cantidad: 3,
    descripcion: 'Dónde estás, qué frena el paso y qué actitud ayuda más.',
    posiciones: [
      {
        key: 'situacion',
        label: 'Situación',
        subtitle: 'El punto de partida actual'
      },
      {
        key: 'obstaculo',
        label: 'Obstáculo',
        subtitle: 'Lo que genera fricción o duda'
      },
      {
        key: 'consejo',
        label: 'Consejo',
        subtitle: 'Qué paso o mirada conviene ahora'
      }
    ]
  }
];

export const TIRADAS_MAP = new Map(TIRADAS.map((t) => [t.id, t]));

const CARTAS_INTENSAS = new Set([12, 13, 15, 16, 18]);

const DESCRIPCION_GRUPOS = {
  inicio: 'movimiento, apertura e impulso',
  introspeccion: 'pausa, escucha interna y revisión',
  vinculo: 'afecto, armonía y elección consciente',
  orden: 'estructura, claridad y responsabilidad',
  cambio: 'transformación, cierre de ciclos y renovación'
};

function analizarClimaConjunto(arcanos, mode, nombrePersona) {
  const conteo = new Map();
  for (const a of arcanos) {
    conteo.set(a.grupo, (conteo.get(a.grupo) || 0) + 1);
  }

  let grupoDominante = arcanos[0].grupo;
  let max = 0;
  for (const [grupo, cant] of conteo.entries()) {
    if (cant > max) {
      max = cant;
      grupoDominante = grupo;
    }
  }

  const tieneIntensas = arcanos.some((a) => CARTAS_INTENSAS.has(a.id));
  const sujeto = mode === 'yo' ? 'tu lectura' : `la lectura de ${nombrePersona}`;

  let trayectoria = '';
  if (arcanos.length >= 2) {
    const primero = arcanos[0].id;
    const ultimo = arcanos[arcanos.length - 1].id;
    if (ultimo - primero >= 5) {
      trayectoria =
        mode === 'yo'
          ? ' Además, los números avanzan de lo inicial hacia arcanos de mayor madurez: habla de un proceso que está evolucionando y pide integración.'
          : ` Además, la secuencia numérica avanza hacia arcanos de mayor madurez, señalando un proceso en plena evolución para ${nombrePersona}.`;
    } else if (primero - ultimo >= 5) {
      trayectoria =
        mode === 'yo'
          ? ' Los números retroceden hacia arcanos más tempranos: invita a simplificar, volver a lo básico y soltar cargas innecesarias.'
          : ' La secuencia vuelve hacia arcanos iniciales, invitando a simplificar el panorama y volver a lo esencial.';
    }
  }

  let clima =
    max >= 2
      ? `En ${sujeto} predomina claramente una energía de ${DESCRIPCION_GRUPOS[grupoDominante]}.`
      : `La combinación reúne miradas complementarias, con un énfasis final en ${DESCRIPCION_GRUPOS[arcanos[arcanos.length - 1].grupo]}.`;

  clima += trayectoria;

  if (tieneIntensas) {
    clima +=
      mode === 'yo'
        ? ' Aunque aparezcan cartas intensas o de cambio, tómalas como señales de claridad y limpieza de etapa, nunca como un mal augurio.'
        : ' Nota tranquila: si salió alguna carta intensa (como La Muerte, La Torre, El Diablo, El Colgado o La Luna), preséntala con serenidad como símbolo de cambio o sinceridad interna, nunca como algo negativo inevitable.';
  }

  return clima;
}

function construirDialogo(tirada, arcanos, mode, nombrePersona) {
  if (tirada.id === 'esencia-1') {
    const [carta] = arcanos;
    return {
      titulo: 'Lectura central de la carta',
      cuerpo:
        mode === 'yo'
          ? `${carta.nombre} resume tu brújula de hoy en torno a ${carta.arquetipo.toLowerCase()}. Su lado luminoso te invita a cultivar: ${carta.enLuz.charAt(0).toLowerCase() + carta.enLuz.slice(1)} Al mismo tiempo, cuida su exceso posible: ${carta.enSombra.charAt(0).toLowerCase() + carta.enSombra.slice(1)}`
          : `Para ${nombrePersona}, ${carta.nombre} pone el foco en ${carta.arquetipo.toLowerCase()}. Conviene destacar su potencial luminoso (${carta.enLuz.charAt(0).toLowerCase() + carta.enLuz.slice(1)}) mientras observan con tacto si aparece su lado retador (${carta.enSombra.charAt(0).toLowerCase() + carta.enSombra.slice(1)}).`,
      resumenBreve: `${carta.nombre} (${carta.romano}): ${carta.palabrasClave.slice(0, 3).join(' · ')}.`,
      sugerenciaPoema:
        mode === 'yo'
          ? `Busca ahora en tu mazo físico de Santos Locos la carta de poema que corresponde a ${carta.nombre}. Léela despacio y subraya mentalmente una sola palabra o verso que conecte con lo que acabas de leer.`
          : `Invita a ${nombrePersona} a leer en voz alta la carta de poema de ${carta.nombre} de tu mazo Santos Locos. Pregúntale qué imagen del poema le llama más la atención: esa intuición suele cerrar la lectura mejor que cualquier manual.`
    };
  }

  if (tirada.id === 'contraste-2') {
    const [impulso, desafio] = arcanos;
    return {
      titulo: 'Cómo dialogan ambas cartas',
      cuerpo:
        mode === 'yo'
          ? `Tu punto de apoyo viene desde ${impulso.nombre} (${impulso.palabrasClave[0].toLowerCase()} y ${impulso.palabrasClave[1].toLowerCase()}), mientras que ${desafio.nombre} señala dónde conviene tener cuidado para no caer en la fricción de ${desafio.enSombra.charAt(0).toLowerCase() + desafio.enSombra.slice(1)} La clave está en usar la cualidad de ${impulso.nombre} para atravesar con equilibrio lo que plantea ${desafio.nombre}.`
          : `En la lectura de ${nombrePersona}, la fuerza disponible nace de ${impulso.nombre} (${impulso.enLuz.charAt(0).toLowerCase() + impulso.enLuz.slice(1)}), y el punto de atención aparece en ${desafio.nombre} (${desafio.enSombra.charAt(0).toLowerCase() + desafio.enSombra.slice(1)}). Puedes resumirlo como un equilibrio entre apoyarse en ${impulso.palabrasClave[0].toLowerCase()} sin descuidar lo que pide ${desafio.nombre}.`,
      resumenBreve: `Apoyarte en ${impulso.nombre} para equilibrar el reto de ${desafio.nombre}.`,
      sugerenciaPoema:
        mode === 'yo'
          ? `Prueba leer juntos los poemas de ${impulso.nombre} y ${desafio.nombre} de tu mazo físico como una pequeña conversación entre lo que te sostiene y lo que te desafía.`
          : `Pueden leer primero el poema de ${desafio.nombre} (para ponerle palabras a la duda) y cerrar con el de ${impulso.nombre} como recordatorio de apoyo.`
    };
  }

  // camino-3
  const [situacion, obstaculo, consejo] = arcanos;
  return {
    titulo: 'El hilo de la tirada en tres actos',
    cuerpo:
      mode === 'yo'
        ? `Tu punto de partida hoy se mueve bajo la energía de ${situacion.nombre} (${situacion.arquetipo.toLowerCase()}). La fricción aparece con ${obstaculo.nombre}, que advierte sobre ${obstaculo.enSombra.charAt(0).toLowerCase() + obstaculo.enSombra.slice(1)} La salida práctica llega de la mano de ${consejo.nombre}: ${consejo.enLuz.charAt(0).toLowerCase() + consejo.enLuz.slice(1)}`
        : `Para ${nombrePersona}, el escenario actual parte de ${situacion.nombre} (${situacion.palabrasClave.slice(0, 2).join(' y ').toLowerCase()}). El nudo principal pasa por ${obstaculo.nombre}, donde puede pesar ${obstaculo.enSombra.charAt(0).toLowerCase() + obstaculo.enSombra.slice(1)} Finalmente, ${consejo.nombre} marca el camino más amable y útil: ${consejo.enLuz.charAt(0).toLowerCase() + consejo.enLuz.slice(1)}`,
    resumenBreve: `Partir de ${situacion.nombre}, cuidar la traba de ${obstaculo.nombre} y elegir la actitud de ${consejo.nombre}.`,
    sugerenciaPoema:
      mode === 'yo'
        ? `Si quieres cerrar con poesía, lee la carta de poema correspondiente a tu Consejo (${consejo.nombre}) en el mazo Santos Locos y guárdala como frase del día.`
        : `Un cierre muy lindo con el mazo físico es darle a ${nombrePersona} la carta de poema de ${consejo.nombre} para que la lea en voz alta y se quede con la imagen que más le sirva.`
  };
}

function construirGuiaAcompanamiento(tirada, arcanos, mode, nombrePersona) {
  if (mode === 'yo') {
    return {
      titulo: 'Ritual breve para tu autolectura',
      pasos: [
        'Mira primero tus cartas físicas antes de quedarte solo con el texto: anota qué detalle de la ilustración llamó tu ojo.',
        'Responde por escrito al menos una de las preguntas disparadoras de arriba; ponerlo en palabras propias ordena mucho más que buscar predicciones.',
        'Deja pasar al menos un día antes de volver a consultar exactamente la misma pregunta.'
      ]
    };
  }

  const cartasIntensasPresentes = arcanos.filter((a) => CARTAS_INTENSAS.has(a.id));
  const pasos = [
    `Empieza preguntándole a ${nombrePersona} qué ve o siente primero al mirar las ilustraciones de las cartas antes de darle tu explicación.`,
    `Habla siempre en términos de posibilidades, actitudes y reflexión ("esto sugiere", "invita a mirar"), nunca como sentencias cerradas o inevitables.`
  ];

  if (cartasIntensasPresentes.length > 0) {
    const nombres = cartasIntensasPresentes.map((c) => c.nombre).join(', ');
    pasos.push(
      `Salieron cartas de tono intenso (${nombres}): tómate diez segundos para aclarar con calma que simbolizan procesos internos, cambios o claridad, nunca mala suerte.`
    );
  } else {
    pasos.push(
      `Cierra la charla con la pregunta sugerida para ${arcanos[arcanos.length - 1].nombre} y con el poema de esa carta del mazo Santos Locos.`
    );
  }

  return {
    titulo: `Guía para acompañar la lectura de ${nombrePersona}`,
    pasos
  };
}

export function generarLectura({
  spreadId,
  cards,
  mode = 'yo',
  recipientName = '',
  question = ''
}) {
  const tirada = TIRADAS_MAP.get(spreadId);
  if (!tirada) {
    throw new Error(`Tirada desconocida: ${spreadId}`);
  }

  if (!Array.isArray(cards) || cards.length !== tirada.cantidad) {
    throw new Error(
      `La tirada "${tirada.nombre}" requiere ${tirada.cantidad} carta(s).`
    );
  }

  const unicos = new Set(cards);
  if (unicos.size !== cards.length) {
    throw new Error('No se pueden repetir arcanos dentro de la misma tirada.');
  }

  const arcanos = cards.map((id) => {
    const found = ARCANOS_MAP.get(Number(id));
    if (!found) {
      throw new Error(`Arcano inválido: ${id}`);
    }
    return found;
  });

  const cleanMode = mode === 'otro' ? 'otro' : 'yo';
  const nombreLimpio = (recipientName || '').trim();
  const destinatario = nombreLimpio || 'esta persona';
  const preguntaLimpia = (question || '').trim();

  const titulo =
    cleanMode === 'yo'
      ? 'Tu interpretación'
      : nombreLimpio
        ? `Interpretación para ${nombreLimpio}`
        : 'Interpretación para otra persona';

  const cartasInterpretadas = tirada.posiciones.map((pos, idx) => {
    const arcano = arcanos[idx];
    return {
      arcano,
      posicion: pos,
      textoPrincipal: arcano.interpretaciones[pos.key][cleanMode],
      preguntaGuia: arcano.preguntas[cleanMode],
      notaTranquila: arcano.notaTranquila || null
    };
  });

  const climaConjunto = analizarClimaConjunto(arcanos, cleanMode, destinatario);
  const dialogo = construirDialogo(tirada, arcanos, cleanMode, destinatario);
  const guiaAcompanamiento = construirGuiaAcompanamiento(
    tirada,
    arcanos,
    cleanMode,
    destinatario
  );

  // Texto plano listo para copiar y compartir
  const lineasTexto = [
    `✦ ${titulo.toUpperCase()}`,
    `Tirada: ${tirada.nombre}`,
    ...(preguntaLimpia ? [`Intención / Pregunta: "${preguntaLimpia}"`] : []),
    '',
    ...cartasInterpretadas.map(
      (item) =>
        `• ${item.posicion.label}: ${item.arcano.romano} — ${item.arcano.nombre}\n  ${item.textoPrincipal}\n  Pregunta: ${item.preguntaGuia}`
    ),
    '',
    `Síntesis: ${dialogo.cuerpo}`,
    `Resumen breve: ${dialogo.resumenBreve}`,
    `Con el mazo Santos Locos: ${dialogo.sugerenciaPoema}`
  ];

  return {
    tirada,
    mode: cleanMode,
    destinatario: cleanMode === 'yo' ? 'Para mí' : destinatario,
    nombreOriginal: nombreLimpio,
    pregunta: preguntaLimpia,
    encabezado: {
      titulo,
      subtitulo: tirada.nombre
    },
    cartasInterpretadas,
    sintesis: {
      climaConjunto,
      ...dialogo,
      guiaAcompanamiento
    },
    textoCompartible: lineasTexto.join('\n')
  };
}
