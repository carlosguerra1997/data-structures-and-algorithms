# Binary Search Algorithm  

## 📌 What is Binary Search?  
Binary Search is a fast searching algorithm used to find the position of a target value within a **sorted** array or list. It works by repeatedly dividing the search interval in half, narrowing down the search area with each step.  

This algorithm is much faster than linear search for large datasets, with a time complexity of `O(log n)`. It is ideal when the dataset is **sorted** and you need to quickly locate an element.  

## 🔹 How Does Binary Search Work?  
1. **Start** by looking at the middle element of the array.  
2. If the middle element is the target value, **return its index**.  
3. If the target is **less than** the middle element, discard the second half of the array and continue searching in the first half.  
4. If the target is **greater than** the middle element, discard the first half and continue searching in the second half.  
5. Repeat this process on the remaining half of the array until you either find the target or the search range becomes empty.  

## 📈 Time Complexity  
| Case          | Time Complexity |
|--------------|----------------|
| **Best Case**    | `O(1)` → If the element is at the middle of the array. |
| **Worst Case**   | `O(log n)` → The search space is halved with each step. |
| **Average Case** | `O(log n)` → It divides the array into smaller chunks until the element is found. |

## 🛠 Example  
### **JavaScript Implementation of Binary Search**  
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

const numbers = [3, 8, 15, 23, 42, 57, 68, 74, 89]
console.log(binarySearch(numbers, 42)) // Output: 4
console.log(binarySearch(numbers, 100)) // Output: -1
