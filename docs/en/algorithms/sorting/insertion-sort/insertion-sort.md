# Insertion Sort Algorithm

## 📌 What is Insertion Sort?
Insertion Sort is a simple sorting algorithm that builds the sorted array one element at a time. It takes each element from the unsorted portion of the list and inserts it into its correct position in the sorted portion.

It is commonly used when:
- The list is **small** (because its efficiency decreases with larger lists).
- The list is **mostly sorted** (it performs well on partially sorted data).

## 🔹 How Does It Work?
1. Start with the second element (index `1`) of the list.
2. Compare the element with the elements before it.
3. Move elements that are greater than the current element to one position ahead.
4. Insert the current element at its correct position.
5. Repeat for all elements until the entire list is sorted.

## 📈 Time Complexity
| Case          | Time Complexity |
|--------------|----------------|
| **Best Case**    | `O(n)` → When the list is already sorted, only one comparison is made per element. |
| **Worst Case**   | `O(n²)` → When the list is sorted in reverse order, every element needs to be moved. |
| **Average Case** | `O(n²)` → On average, it will need to make multiple comparisons for each element. |

## 🛠 Example
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

const numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers)); // Output: [2, 3, 4, 5, 8]

const strings = ['banana', 'orange', 'pear', 'apple'];
console.log(insertionSort(strings)); // Output: ['apple', 'banana', 'orange', 'pear']
