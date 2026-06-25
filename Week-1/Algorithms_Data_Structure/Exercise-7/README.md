# 📈 Financial Forecasting Tool

## 🧠 Objective

The objective of this exercise is to build a **Financial Forecasting Tool** that predicts future values using a **recursive algorithm** based on historical growth rates. This exercise demonstrates how recursion can be applied to solve real-world financial problems.

---

# 📖 Problem Statement

Financial institutions often forecast future investment values using historical growth rates. This project predicts the future value of an investment by recursively applying a fixed growth rate over a specified number of years.

The exercise also focuses on understanding recursion, analyzing its time complexity, and exploring optimization techniques.

---

# 🧮 Step-by-Step Explanation

## 1️⃣ Understand Recursive Algorithms

### What is Recursion?

Recursion is a programming technique in which a method calls itself to solve a smaller version of the same problem until it reaches a stopping condition.

A recursive solution consists of two parts:

- **Base Case** – Stops the recursion.
- **Recursive Case** – Calls the same method with a smaller input.

### Why Use Recursion?

Recursion is useful for solving problems that can be broken down into similar subproblems, such as:

- Factorial calculation
- Fibonacci sequence
- Tree traversal
- Financial forecasting

---

## 2️⃣ Setup

Create a method that calculates the future financial value using:

- Initial Investment Amount
- Annual Growth Rate
- Number of Years

### Example Input

- Initial Value = **1000**
- Growth Rate = **10% (0.10)**
- Number of Years = **5**

---

## 3️⃣ Implementation

The recursive function calculates the future value using the formula:

```text
FutureValue(n) = FutureValue(n - 1) × (1 + GrowthRate)
```

### Base Case

```text
If Years = 0
Return Initial Value
```

### Recursive Case

```text
FutureValue(Years)
=
FutureValue(Years - 1)
×
(1 + GrowthRate)
```

This process continues until the base case is reached.

---

# 📊 Time Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Recursive Solution | O(n) | O(n) |
| Iterative Solution | O(n) | O(1) |

### Explanation

- The recursive solution makes one recursive call for each year.
- Therefore, the execution time grows linearly with the number of years.
- Since each recursive call remains on the call stack, the space complexity is also **O(n)**.

---

# ⚙ Optimization Techniques

The recursive solution can be optimized using the following approaches:

- **Memoization** to store previously computed results and avoid redundant calculations.
- **Iterative Solution** to eliminate recursion and reduce memory usage.
- **Tail Recursion** (where supported) to improve execution efficiency.

---

# 📁 Project Structure

```text
week_1/
└── Algorithms_Data_Structures/
    └── Financial_Forecasting/
        ├── FinancialForecast.java
        ├── ForecastTest.java
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
java ForecastTest
```

---

# 💡 Conclusion

This project demonstrates how recursion can be used to solve financial forecasting problems by repeatedly applying a growth rate over a specified period. It also highlights the importance of analyzing algorithm efficiency and selecting appropriate optimization techniques for large-scale applications.

---

# 🎯 Learning Outcomes

After completing this exercise, you will be able to:

- ✅ Understand recursion and recursive thinking
- ✅ Identify base and recursive cases
- ✅ Implement recursive algorithms in Java
- ✅ Analyze time and space complexity
- ✅ Optimize recursive solutions using iterative techniques or memoization
- ✅ Apply recursion to solve real-world financial forecasting problems

