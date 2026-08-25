# Lex Code Simulator

A web-based text processing and lexical analysis tool that simulates basic lexical analyzer operations for source code preprocessing.

## 📋 Overview

The Lex Code Simulator is an educational tool designed to demonstrate fundamental lexical analysis operations commonly performed by compilers and interpreters. It provides a clean, intuitive interface for processing source code through various text transformation steps, culminating in ASCII representation.

## ✨ Features

The simulator performs the following operations on input text in sequential order:

- **Comment Removal**
  - Single-line comments (`//...`)
  - Multi-line comments (`/* ... */`)
- **Whitespace Stripping** - Removes all spaces, tabs, and newlines
- **Case Normalization** - Converts uppercase letters to lowercase
- **Function Name Replacement**
  - Replaces `printf` with `write`
  - Replaces `scanf` with `read`
- **ASCII Conversion** - Converts remaining characters to their ASCII decimal values (space-separated)

## 🎯 Use Cases

- Understanding lexical analysis fundamentals
- Learning preprocessing stages in compilation
- Educational demonstrations for compiler design courses
- Quick text normalization and tokenization
- ASCII encoding visualization

## 💻 Usage

1. **Input Code**: Enter or paste your source code in the input textarea
2. **Process**: Click the "Process Text" button or press `Ctrl + Enter`
3. **View Output**: The processed result appears in the output textarea
4. **Clear**: Use the "Clear All" button to reset both fields

### Example

**Input:**
```c
// This is a comment
int Main() {
    /* Multi-line comment */
    printf("Hello WORLD");
    scanf("%d", &num);
}
```

**Output:**
```
105 110 116 109 97 105 110 40 41 123 write 40 34 104 101 108 108 111 119 111 114 108 100 34 41 59 read 40 34 37 100 34 44 38 110 117 109 41 59 125
```

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic content
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Text processing logic and DOM manipulation

## 🔧 Processing Pipeline
```
Input Text
    ↓
Remove Comments (//, /* */)
    ↓
Strip Whitespace
    ↓
Convert to Lowercase
    ↓
Replace printf → write
Replace scanf → read
    ↓
Convert Characters to ASCII
    ↓
Output (Space-separated ASCII values)
```
