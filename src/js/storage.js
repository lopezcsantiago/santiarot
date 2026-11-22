const STORAGE_KEY = 'santiarot_bitacora_v1';

function getStorage() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    return null;
  }
  return null;
}

export function cargarBitacora() {
  const storage = getStorage();
  if (!storage) return [];
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function guardarEntradaBitacora(entrada) {
  const storage = getStorage();
  if (!storage) return [];
  const lista = cargarBitacora();
  const nueva = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    fechaISO: new Date().toISOString(),
    ...entrada
  };
  const actualizada = [nueva, ...lista].slice(0, 80);
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(actualizada));
  } catch {
    // Ignorar error de cuota si el almacenamiento está lleno
  }
  return actualizada;
}

export function eliminarEntradaBitacora(id) {
  const storage = getStorage();
  if (!storage) return [];
  const actualizada = cargarBitacora().filter((item) => item.id !== id);
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(actualizada));
  } catch {
    // Ignorar
  }
  return actualizada;
}

export function limpiarBitacora() {
  const storage = getStorage();
  if (!storage) return [];
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // Ignorar
  }
  return [];
}
