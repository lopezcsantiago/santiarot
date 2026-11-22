# Santiarot · Intérprete de los 22 Arcanos Mayores & Poesía

Aplicación web serena y literaria para interpretar los **22 Arcanos Mayores** del tarot (*0 El Loco* hasta *XXI El Mundo*), pensada especialmente para acompañar un mazo físico como **Santos Locos | Tarot & Poesía** o realizar tiradas rápidas en pantalla.

## Características

- **3 opciones claras de interpretación:**
  1. **1 Carta · Esencia o Consejo**
  2. **2 Cartas · Luz y Desafío** (*Lo que impulsa* / *Lo que pide atención*)
  3. **3 Cartas · Situación · Obstáculo · Consejo**
- **Para ti y para otras personas:** Adapta el lenguaje entre autolectura reflexiva y lectura para acompañar a alguien más (incluye nombre opcional, pautas de conversación y resumen listo para copiar).
- **Mazo físico o tirada virtual:** Elige directamente los arcanos que salieron en tu mazo físico (con buscador compatible con numeración de Marsella y Rider-Waite) o baraja y voltea cartas al azar.
- **Conexión con Tarot & Poesía:** Cada carta incluye su eco poético, sugerencias para leer el poema de tu mazo físico y un espacio opcional para anotar versos o reflexiones.
- **Los 22 Arcanos y Bitácora:** Catálogo visual para estudiar las cartas e historial local (`localStorage`) para guardar lecturas.

## Cómo ejecutarlo localmente

Como utiliza módulos ES nativos, sírvelo con cualquier servidor estático:

```bash
python3 -m http.server 4173
```

Luego abre `http://localhost:4173` en tu navegador.

## Pruebas unitarias

```bash
node --test src/tests/interpreter.test.mjs
```
