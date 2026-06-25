# 📦 E-commerce Platform Search Function

## 🧠 Objective

This exercise demonstrates the implementation and analysis of two searching algorithms—**Linear Search** and **Binary Search**—for an e-commerce platform. It highlights how algorithm efficiency affects application performance as the amount of data increases.

---

## 📖 Problem Statement

In an e-commerce platform, users need to search for products quickly and efficiently. This project implements two commonly used search algorithms:

- **Linear Search**
- **Binary Search**

The project also compares their performance and discusses the scenarios where each algorithm is most suitable.

---

# 🧮 Step-by-Step Explanation

## 1️⃣ Understand Asymptotic Notation

### What is Big O Notation?

Big O Notation is used to measure the time complexity of an algorithm. It describes how the execution time grows as the input size increases.

### Why is it Important?

- Helps compare different algorithms.
- Predicts performance for large datasets.
- Assists in choosing the most efficient algorithm.

### Example

- **O(1)** → Constant Time
- **O(log n)** → Logarithmic Time
- **O(n)** → Linear Time
- **O(n²)** → Quadratic Time

---

## 2️⃣ Best, Average, and Worst Case

### Linear Search

- **Best Case:** Product found at the first position → **O(1)**
- **Average Case:** Product found in the middle → **O(n)**
- **Worst Case:** Product found at the end or not found → **O(n)**

### Binary Search

- **Best Case:** Product found at the middle → **O(1)**
- **Average Case:** **O(log n)**
- **Worst Case:** **O(log n)**

> **Note:** Binary Search works only on **sorted data**.

---

## 3️⃣ Setup

A `Product` class is created with the following attributes:

- Product ID
- Product Name
- Category

These attributes are used during search operations.

---

## 4️⃣ Implementation

### ✅ Linear Search

Linear Search checks each product one by one until the desired product is found.

### Algorithm

1. Start from the first product.
2. Compare its ID with the target ID.
3. If matched, return the product.
4. Otherwise, continue until the end of the array.

---

### ✅ Binary Search

Binary Search repeatedly divides the sorted array into two halves.

### Algorithm

1. Sort the products by Product ID.
2. Find the middle element.
3. Compare the middle Product ID with the target.
4. If equal, return the product.
5. If the target is smaller, search the left half.
6. Otherwise, search the right half.

---

# 📊 Time Complexity Analysis

| Search Algorithm | Best Case | Average Case | Worst Case |
|------------------|-----------|--------------|-------------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

---

# 📈 Comparison

| Feature | Linear Search | Binary Search |
|----------|---------------|---------------|
| Works on Unsorted Data | ✅ Yes | ❌ No |
| Requires Sorting | ❌ No | ✅ Yes |
| Easy to Implement | ✅ Yes | Moderate |
| Performance on Large Data | Slower | Faster |
| Time Complexity | O(n) | O(log n) |

---

# 💡 Conclusion

- **Linear Search** is simple and suitable for small or unsorted datasets.
- **Binary Search** is significantly faster for large datasets but requires the data to be sorted.
- For large-scale e-commerce applications, **Binary Search** is generally preferred because it provides much better performance.

---

# 📁 Project Structure

```text
week_1/
└── Algorithms_Data_Structures/
    └── E_commerce_Platform_Search_Function/
        ├── Main.java
        ├── Product.java
        ├── SearchUtils.java
        ├── output.png
        └── README.md
```

---

# ▶️ How to Run

### Compile

```bash
javac *.java
```

### Execute

```bash
java Main
```

---

# 🖥️ Sample Output

```text
Linear Search Found: Shoes

Binary Search Found: Shoes
```

*(Replace this with your actual program output if it differs.)*

---

# 🎯 Learning Outcomes

After completing this exercise, you will understand:

- ✅ Big O Notation
- ✅ Time Complexity Analysis
- ✅ Linear Search Algorithm
- ✅ Binary Search Algorithm
- ✅ Best, Average, and Worst Case Analysis
- ✅ When to use Linear Search and Binary Search in real-world applications
- ✅ Importance of efficient searching in large-scale systems like e-commerce platforms

---

## 👨‍💻 Author

**Pujitha Kothuri**

Java Full Stack Engineer Trainee
