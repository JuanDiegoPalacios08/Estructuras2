// Altura máxima de un array de zonas (¿cuántos niveles?)
export function maxHeight(zones) {
  if (!zones.length) return 0;
  return 1 + Math.max(...zones.map(z => maxHeight(z.children)));
}

// Conteo total de zonas (nodos) en todo el árbol
export function countZones(zones) {
  return zones.reduce((sum, z) =>
    sum + 1 + countZones(z.children)
  , 0);
}
