# Lex Code Simulator

A web-based text processing and lexical analysis tool that simulates basic lexical analyzer operations for source code preprocessing.

![Lex Code Simulator](https://img.shields.io/badge/Course-Compiler%20Design-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📋 Overview

The Lex Code Simulator is an educational tool designed to demonstrate fundamental lexical analysis operations commonly performed by compilers and interpreters. It provides a clean, intuitive interface for processing source code through various text transformation steps.

## ✨ Features

The simulator performs the following operations on input text:

- **Comment Removal**
  - Single-line comments (`//...`)
  - Multi-line comments (`/* ... */`)
- **Whitespace Stripping** - Removes all spaces, tabs, and newlines
- **Case Normalization** - Converts uppercase letters to lowercase
- **Character Preservation** - Maintains all other characters intact

## 🎯 Use Cases

- Understanding lexical analysis fundamentals
- Learning preprocessing stages in compilation
- Educational demonstrations for compiler design courses
- Quick text normalization and cleaning

## 💻 Usage

1. **Input Code**: Enter or paste your source code in the input textarea
2. **Process**: Click the "Process Text" button or press `Ctrl + Enter`
3. **View Output**: The processed result appears in the output textarea
4. **Clear**: Use the "Clear All" button to reset both fields

### Example

**Input:**
```javascript
// This is a comment
int Main() {
    /* Multi-line
       comment */
    printf('Hello WORLD');
}
```

**Output:**
```
intmain(){printf('helloworld');}
```

## 🏗️ Project Structure

```
lex-code-simulator/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── script.js           # Processing logic
└── README.md          # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Text processing logic and DOM manipulation
