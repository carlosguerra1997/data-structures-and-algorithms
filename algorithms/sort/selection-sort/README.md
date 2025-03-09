# Selection Sort Algorithm

## 📌 What is Selection Sort?
Selection Sort is an in-place comparison sorting algorithm. It works by repeatedly selecting the minimum element from the unsorted portion of the list and swapping it with the leftmost unsorted element. The algorithm continues this process until the entire list is sorted.

It is commonly used when:
- Memory usage is a concern (it performs well with limited space).
- Simplicity is preferred over efficiency.

## 🔹 How Does It Work?
1. Start from the **first element** of the list.
2. Find the **minimum element** in the unsorted portion of the list.
3. **Swap** the found minimum element with the first unsorted element.
4. Move the boundary of the sorted and unsorted portions of the list.
5. Repeat the process until the list is sorted.

## 📈 Time Complexity
| Case          | Time Complexity |
|--------------|----------------|
| **Best Case**    | `O(n²)` → Regardless of the list order, Selection Sort always compares each element with all others. |
| **Worst Case**   | `O(n²)` → In the worst case, Selection Sort performs the maximum number of comparisons and swaps. |
| **Average Case** | `O(n²)` → On average, it also performs a quadratic number of comparisons. |

## 🛠 Example
```js
function selectionSort(data) {
  const length = data.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let aux = data[i];
      data[i] = data[minIndex];
      data[minIndex] = aux;
    }
  }

  return data;
}

const numbers = [5, 3, 8, 4, 2];
console.log(selectionSort(numbers)); // Output: [2, 3, 4, 5, 8]

const strings = [5, 3, 8, 4, 2];
selectionSort(strings); // Output: [ 'apple', 'banana', 'orange', 'pear' ]

