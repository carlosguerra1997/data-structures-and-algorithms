# Algoritmo de Ordenamiento por Inserción

## 📌 ¿Qué es el Ordenamiento por Inserción?
El Ordenamiento por Inserción es un algoritmo de ordenación simple que construye la lista ordenada de elementos uno a uno. Toma cada elemento de la parte no ordenada de la lista y lo inserta en su posición correcta dentro de la parte ordenada.

Se usa comúnmente cuando:
- La lista es **pequeña** (ya que su eficiencia disminuye con listas más grandes).
- La lista está **casi ordenada** (tiene un buen rendimiento en datos parcialmente ordenados).

## 🔹 ¿Cómo Funciona?
1. Comienza con el segundo elemento (índice `1`) de la lista.
2. Compara el elemento con los elementos anteriores.
3. Mueve los elementos mayores que el elemento actual una posición hacia adelante.
4. Inserta el elemento actual en su posición correcta.
5. Repite este proceso para todos los elementos hasta que la lista esté completamente ordenada.

## 📈 Complejidad Temporal
| Caso          | Complejidad Temporal |
|--------------|----------------------|
| **Mejor Caso**    | `O(n)` → Cuando la lista ya está ordenada, solo se hace una comparación por elemento. |
| **Peor Caso**     | `O(n²)` → Cuando la lista está ordenada en orden inverso, cada elemento debe moverse. |
| **Caso Promedio** | `O(n²)` → En promedio, se requieren múltiples comparaciones por cada elemento. |

## 🛠 Implementación
```js
function insertionSort(data) {
  for (let i = 1; i < data.length; i++) {
    const currentElement = data[i];
    let j = i - 1;

    while (j >= 0 && data[j] > currentElement) {
      data[j + 1] = data[j];
      j--;
    }

    data[j + 1] = currentElement;
  }

  return data;
}
```

## Ejemplos
```js
const numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers)); // Salida: [2, 3, 4, 5, 8]

const strings = ['banana', 'orange', 'pear', 'apple'];
console.log(insertionSort(strings)); // Salida: ['apple', 'banana', 'orange', 'pear']
