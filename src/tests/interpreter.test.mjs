import test from 'node:test';
import assert from 'node:assert/strict';
import { ARCANOS, ARCANOS_MAP } from '../data/arcanos.js';
import { TIRADAS, generarLectura } from '../js/interpreter.js';

test('contiene exactamente los 22 arcanos mayores del 0 al 21', () => {
  assert.equal(ARCANOS.length, 22);
  for (let i = 0; i < 22; i += 1) {
    const arcano = ARCANOS_MAP.get(i);
    assert.ok(arcano, `Falta el arcano con id ${i}`);
    assert.ok(arcano.nombre.length > 0);
    assert.ok(arcano.ecoPoetico.length > 0);
    assert.ok(arcano.svg.includes('<'), `Falta SVG en ${arcano.nombre}`);
  }
});

test('ofrece exactamente 3 opciones de tirada (1, 2 y 3 cartas)', () => {
  assert.equal(TIRADAS.length, 3);
  assert.deepEqual(
    TIRADAS.map((t) => t.cantidad),
    [1, 2, 3]
  );
});

test('genera interpretaciones válidas para cada arcano y cada posición en modos "yo" y "otro"', () => {
  for (const arcano of ARCANOS) {
    for (const mode of ['yo', 'otro']) {
      const r1 = generarLectura({
        spreadId: 'esencia-1',
        cards: [arcano.id],
        mode,
        recipientName: mode === 'otro' ? 'Lucía' : '',
        question: '¿Qué necesito ver hoy?'
      });
      assert.equal(r1.cartasInterpretadas.length, 1);
      assert.ok(r1.cartasInterpretadas[0].textoPrincipal.length > 40);
      assert.ok(r1.sintesis.cuerpo.length > 40);
      assert.ok(r1.textoCompartible.includes(arcano.nombre));

      const second = (arcano.id + 5) % 22;
      const r2 = generarLectura({
        spreadId: 'contraste-2',
        cards: [arcano.id, second],
        mode,
        recipientName: mode === 'otro' ? 'Mateo' : ''
      });
      assert.equal(r2.cartasInterpretadas.length, 2);
      assert.ok(r2.sintesis.cuerpo.includes(arcano.nombre));
      assert.ok(r2.sintesis.cuerpo.includes(ARCANOS_MAP.get(second).nombre));

      const third = (arcano.id + 11) % 22;
      const r3 = generarLectura({
        spreadId: 'camino-3',
        cards: [arcano.id, second, third],
        mode,
        recipientName: mode === 'otro' ? 'Camila' : ''
      });
      assert.equal(r3.cartasInterpretadas.length, 3);
      assert.ok(r3.sintesis.resumenBreve.includes(ARCANOS_MAP.get(third).nombre));
    }
  }
});

test('rechaza cartas duplicadas o cantidad incorrecta de cartas', () => {
  assert.throws(() =>
    generarLectura({
      spreadId: 'camino-3',
      cards: [0, 0, 1],
      mode: 'yo'
    })
  );

  assert.throws(() =>
    generarLectura({
      spreadId: 'contraste-2',
      cards: [1],
      mode: 'yo'
    })
  );
});

test('incluye nota tranquila en cartas intensas', () => {
  const lecturaMuerte = generarLectura({
    spreadId: 'esencia-1',
    cards: [13],
    mode: 'yo'
  });
  assert.ok(lecturaMuerte.cartasInterpretadas[0].notaTranquila);
  assert.match(lecturaMuerte.sintesis.climaConjunto, /mal augurio/i);
});
