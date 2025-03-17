# Algoritmo de Ordenamiento Burbuja

## 📌 ¿Qué es el Ordenamiento Burbuja?
El Ordenamiento Burbuja es un algoritmo de ordenación simple que recorre repetidamente la lista, compara elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que la lista esté completamente ordenada.

Se usa comúnmente cuando:
- La lista es **pequeña**.
- La lista ya está **casi ordenada** (porque tiene un mejor rendimiento cuando pocos elementos están fuera de lugar).

## 🔹 ¿Cómo Funciona?
1. Comienza desde el **primer elemento** de la lista.
2. Compara cada par de elementos adyacentes.
3. Si el primer elemento es mayor que el segundo, **intercámbialos**.
4. Repite este proceso para todos los elementos, moviendo el elemento más grande al final de la lista después de cada pasada.
5. Si no se realizaron intercambios durante una pasada, la lista ya está ordenada y el algoritmo se detiene antes de tiempo.

## 📈 Complejidad Temporal
| Caso          | Complejidad Temporal |
|--------------|----------------------|
| **Mejor Caso**    | `O(n)` → Cuando la lista ya está ordenada y no se necesitan intercambios. |
| **Peor Caso**     | `O(n²)` → Cuando la lista está en orden inverso y requiere el máximo número de intercambios. |
| **Caso Promedio** | `O(n²)` → En promedio, requiere alrededor de `n²/2` comparaciones e intercambios para ordenar la lista. |

## 🛠 Implementación
```js
function bubbleSort(data) {
  let length = data.length;
  let swapped;

  for (let i = 0; i < length; i++) {
    swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let aux = data[j];
        data[j] = data[j + 1];
        data[j + 1] = aux;

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return data;
}
```

## Ejemplos
```js
const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Salida: [2, 3, 4, 5, 8]
