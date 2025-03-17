# Algoritmo de Búsqueda Binaria

## 📌 ¿Qué es la Búsqueda Binaria?
La Búsqueda Binaria es un algoritmo de búsqueda rápido utilizado para encontrar la posición de un valor objetivo dentro de un array o lista **ordenada**. Funciona dividiendo repetidamente el intervalo de búsqueda a la mitad, reduciendo el área de búsqueda con cada paso.

Este algoritmo es mucho más rápido que la búsqueda lineal para conjuntos de datos grandes, con una complejidad temporal de `O(log n)`. Es ideal cuando el conjunto de datos está **ordenado** y necesitas localizar rápidamente un elemento.

## 🔹 ¿Cómo Funciona la Búsqueda Binaria?
1. **Comienza** mirando el elemento central del array.
2. Si el elemento central es el valor objetivo, **devuelve su índice**.
3. Si el objetivo es **menor** que el elemento central, descarta la segunda mitad del array y continúa buscando en la primera mitad.
4. Si el objetivo es **mayor** que el elemento central, descarta la primera mitad y continúa buscando en la segunda mitad.
5. Repite este proceso en la mitad restante del array hasta que encuentres el objetivo o el rango de búsqueda quede vacío.

## 📈 Complejidad Temporal
| Caso          | Complejidad Temporal |
|---------------|----------------------|
| **Mejor Caso**    | `O(1)` → Si el elemento está en el centro del array. |
| **Peor Caso**     | `O(log n)` → El espacio de búsqueda se reduce a la mitad en cada paso. |
| **Caso Promedio** | `O(log n)` → Divide el array en trozos más pequeños hasta encontrar el elemento. |

## 🛠 Implementación
```js
function binarySearch(data, itemToSearch) {
  let start = 0
  let end = data.length - 1

  while (start <= end) {
    let half = Math.floor((start + end) / 2)

    if (data[half] === itemToSearch) {
      return half
    }

    if (data[half] < itemToSearch) {
      start = half + 1
    } else {
      end = half - 1
    }
  }

  return -1
}
```

## Ejemplos
```js
const numbers = [3, 8, 15, 23, 42, 57, 68, 74, 89]
console.log(binarySearch(numbers, 42)) // Salida: 4
console.log(binarySearch(numbers, 100)) // Salida: -1
