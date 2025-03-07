# Bubble Sort Algorithm

## 📌 What is Bubble Sort?
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

It is commonly used when:
- The list is **small**.
- The list is already **almost sorted** (because it has a better performance when few elements are out of order).

## 🔹 How Does It Work?
1. Start from the **first element** of the list.
2. Compare each adjacent pair of elements.
3. If the first element is greater than the second, **swap** them.
4. Repeat this process for all elements, moving the largest element to the end of the list after each pass.
5. If no swaps were made during a pass, the list is already sorted, and the algorithm stops early.

## 📈 Time Complexity
| Case          | Time Complexity |
|--------------|----------------|
| **Best Case**    | `O(n)` → When the list is already sorted and no swaps are needed. |
| **Worst Case**   | `O(n²)` → When the list is in reverse order and requires the maximum number of swaps. |
| **Average Case** | `O(n²)` → On average, it requires about n²/2 comparisons and swaps to sort the list. |

## 🛠 Example
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

const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]
