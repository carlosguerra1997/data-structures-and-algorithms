# Linear Search Algorithm

## 📌 What is Linear Search?
Linear Search is a simple searching algorithm that checks every element in a list one by one until it finds the target value or reaches the end of the list.

It is commonly used when:
- The list is **unsorted**.
- The list is **small** (because its efficiency decreases with larger lists).

## 🔹 How Does It Work?
1. Start from the **first element** of the list.
2. Compare each element with the **target value**.
3. If a match is found, **return the index**.
4. If no match is found, **return `-1`**.

## 📈 Time Complexity
| Case          | Time Complexity |
|--------------|----------------|
| **Best Case**    | `O(1)` → When the element is found at the first position. |
| **Worst Case**   | `O(n)` → When the element is at the end or not in the list. |
| **Average Case** | `O(n)` → On average, it searches half of the list before finding the element. |

## 🛠 Implementation
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

## Examples
```js
const numbers = [3, 8, 15, 23, 42];
console.log(linearSearch(numbers, 15)); // Output: 2
console.log(linearSearch(numbers, 50)); // Output: -1
