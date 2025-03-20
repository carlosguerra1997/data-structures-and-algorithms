# 📚 **JavaScript Data Structures: Arrays**

## 📌 **Introduction**
An **array** is one of the most fundamental data structures in JavaScript. It allows you to store multiple values in a single variable and provides various built-in methods to manipulate the data efficiently.

### ✅ **What You'll Learn**
- What an array is and how it works.
- Array operations (insertion, deletion, search, traversal, etc.).
- Time complexity of different operations.
- Implementation details with examples.

# **What is an Array?**
An **array** is a data structure that stores multiple values **sequentially in memory**. Each element in an array is accessed using an **index**, starting from `0`.

## 📌 **Example: Creating an Array in Javascript**
```js
const fruits = ["🍎", "🍌", "🍓", "🍇"];
console.log(fruits[0]); // 🍎 (First element)
console.log(fruits[2]); // 🍓 (Third element)
```

# 🔧 **Array Operations in JavaScript**

Arrays support various operations like adding, removing, searching, and iterating over elements. Below, we break down the most common array operations with their **time complexity** and **examples**.

## 📌 **1. Accessing Elements (O(1))**
You can access an element in an array using its **index**.  
Indexing starts from `0`, meaning:
- The **first element** is at index `0`.
- The **last element** is at `array.length - 1`.

```js
const numbers = [10, 20, 30, 40];
console.log(numbers[0]); // 10 (First element)
console.log(numbers[3]); // 40 (Last element)
console.log(numbers[10]); // undefined (Out of bounds)
```

## 📌 2. **Adding Elements**

Adding elements can be done at different positions: **beginning, end, or a specific index**.

### 2.1 At the Beginning

`unshift()` adds an element to the **beginning** of the array.

#### Parameters:
- `item1, item2, ..., itemN` (any): One or more elements to add at the beginning of the array.

#### Time Complexity
The time complexity of `unshift()` is **O(n)**, where `n` is the number of elements in the array.

When you add an element to the beginning of an array using `unshift()`, all the existing elements must be shifted one position to the right to make space for the new element. This means that for each element in the array, the operation needs to move it by one position.

Examples:
- If an array has 1,000 elements, each of those 1,000 elements has to be moved, making the operation linear in time complexity, or O(n).
- If the array has 10 elements, only 10 elements are shifted.

```js
const colors = ["red", "green"];
colors.unshift("blue"); // Adds "blue" at the beginning
console.log(colors); // ["blue", "red", "green"]
```

### 2.2 At the End

`push()` adds an element to the **end** of the array.

#### Parameters:
- `item1, item2, ..., itemN` (any): One or more elements to add at the end of the array.

#### Time Complexity
The time complexity of `push()` is **O(1)**, also known as **constant time**.

When you add an element to the end of an array using `push()`, it is simply placed at the next available index in the array. This operation does not require shifting any other elements, as the new element is added directly at the end.

- **No shifting**: The array does not need to move any existing elements.
- **Constant time**: The operation takes the same amount of time regardless of the array's size.

Examples:
- If an array has 10 elements or 1,000 elements, `push()` will take the same amount of time, as it only involves adding the new element at the end.

```js
const colors = ["red", "green"];
colors.push("blue"); // Adds "blue" at the end
console.log(colors); // ["red", "green", "blue"]
```

### 2.3 At a Specific Index

`splice(index, count, item)` adds an element at a **specific position**.

#### Parameters:
- `index` (number): The index position to add or remove items.
- `count` (number): The number of elements to remove starting from the `index`. If `count` is `0`, no elements are removed.
- `item` (any): The item(s) to add at the `index`. If no items are specified, `splice()` only removes elements.

```js
const colors = ["red", "green"];
colors.splice(1, 0, "blue"); // Adds "blue" at index 1
console.log(colors); // ["red", "blue", "green"]
```

## 📌 3. **Removing Elements**

You can remove elements from different positions: **beginning, end, or a specific index**.

### 3.1 From the End

`pop()` removes the last element from the array and returns it.

#### Parameters:
- None.

```js
const colors = ["red", "green", "blue"];
const lastColor = colors.pop(); // Removes "blue"
console.log(lastColor); // "blue"
console.log(colors); // ["red", "green"]
```

### 3.2 From the Beginning

`shift()` removes the **first** element from the array and returns it.  

#### Parameters:
- None.

```js
const colors = ["red", "green", "blue"];
const firstColor = colors.shift(); // Removes "red"
console.log(firstColor); // "red"
console.log(colors); // ["green", "blue"]
```

### 3.3 From a Specific Index

`splice(index, count)` removes elements from a **specific position** in the array.

#### Parameters:
- `index` (number): The index position to add or remove items.
- `count` (number): The number of elements to remove starting from the `index`.

```js
const colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2); // Removes 2 elements starting from index 1
console.log(colors); // ["red", "yellow"]
```