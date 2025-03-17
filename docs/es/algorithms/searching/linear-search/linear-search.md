# Algoritmo de Búsqueda Lineal

## 📌 ¿Qué es la Búsqueda Lineal?
La Búsqueda Lineal es un algoritmo de búsqueda simple que revisa cada elemento en una lista uno por uno hasta encontrar el valor objetivo o llegar al final de la lista.

Se utiliza comúnmente cuando:
- La lista está **desordenada**.
- La lista es **pequeña** (porque su eficiencia disminuye con listas más grandes).

## 🔹 ¿Cómo Funciona?
1. Comienza desde el **primer elemento** de la lista.
2. Compara cada elemento con el **valor objetivo**.
3. Si se encuentra una coincidencia, **devuelve el índice**.
4. Si no se encuentra ninguna coincidencia, **devuelve `-1`**.

## 📈 Complejidad Temporal
| Caso          | Complejidad Temporal |
|---------------|----------------------|
| **Mejor Caso**    | `O(1)` → Cuando el elemento se encuentra en la primera posición. |
| **Peor Caso**     | `O(n)` → Cuando el elemento está al final o no está en la lista. |
| **Caso Promedio** | `O(n)` → En promedio, se busca en la mitad de la lista antes de encontrar el elemento. |

## 🛠 Implementación
```js
function linearSearch(data, itemToSearch) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === itemToSearch) {
      return i;
    }
  }
  return -1;
}
```

## Ejemplos
```js
const numbers = [3, 8, 15, 23, 42];
console.log(linearSearch(numbers, 15)); // Salida: 2
console.log(linearSearch(numbers, 50)); // Salida: -1
