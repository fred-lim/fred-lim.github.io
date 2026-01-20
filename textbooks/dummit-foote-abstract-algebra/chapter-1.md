---
layout: default
title: "Chapter 1 - Vectors and Geometry of Space"
mathjax: true
---

# Chapter 1: Introduction to Groups

## Section 1.1: Basic Axioms and Examples

---

### Exercise 1a

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is not associative. <br>
    \((1\star2)\star3 = -4 \text{ while } 1\star(2\star3) = 2\)
</div>

---

### Exercise 1b

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is associative. <br>
    Let \(a,b,c\in\mathbb{R}\) 
    \begin{align*}
    (a\star b)\star c =& (a+b+ab)\star c \\
    =& a+b+ab+c+(a+b+ab)c \\
    =& a+b+ab+c+ac+bc+abc \\
    =& a+b+c+bc+ab+ac+abc \\
    =& a\star(b+c+bc)
    \end{align*}
</div>

---

### Exercise 1c

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is not associative. <br>
    \((5\star10)\star15 = \frac{18}{5} \text{ while } 5\star(10\star15) = 2\)
</div>

---

### Exercise 1d

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is associative. <br>
    Let \((a,b),(c,d),(e,f)\in\mathbb{Z\times Z}\) 
    \begin{align*}
    ((a,b)\star(c,d))\star(e,f) =& (ad+bc,bd)\star(e,f) \\
    =& (adf+bcf+bde,bdf) \\
    =& (a,b)\star(cf+de,df) \\
    =& (a,b)\star((c,d)\star(e,f))
    \end{align*}
</div>

---

### Exercise 1e

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is not associative. <br>
    \((8\star4)\star2 = 1 \text{ while } 8\star(4\star2) = 4\)
</div>

---

### Exercise 2a

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is not commutative. <br>
    \(1\star2 = -1 \text{ while } 2\star1 = 1\)
</div>

---

### Exercise 2b

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is commutative. <br>
    Let \(a,b\in\mathbb{R}\) 
    \begin{align*}
    a\star b =& a+b+ab \\
    =& b+a+ba \\
    =& b\star a
    \end{align*}
</div>

---

### Exercise 2c

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is commutative. <br>
    Let \(a,b\in\mathbb{Q}\) 
    \begin{align*}
    a\star b =& \frac{a+b}{5} \\
    =& \frac{b+a}{5} \\
    =& b\star a
    \end{align*}
</div>

---

### Exercise 2d

<div class="solution">
    <div class="solution-header">Solution:</div>
    The binary operation is associative. <br>
    Let \((a,b),(c,d),(e,f)\in\mathbb{Z\times Z}\) 
    \begin{align*}
    ((a,b)\star(c,d))\star(e,f) =& (ad+bc,bd)\star(e,f) \\
    =& (adf+bcf+bde,bdf) \\
    =& (a,b)\star(cf+de,df) \\
    =& (a,b)\star((c,d)\star(e,f))
    \end{align*}
</div>

---

<div class="chapter-navigation">
    <a href="/" class="nav-btn home">🏠 Back to Home</a>
    <div>
        <a href="#" onclick="window.history.back(); return false;" class="nav-btn prev">← Back to Chapters</a>
        <a href="/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-2.html" class="nav-btn next">Chapter 2 →</a>
    </div>
</div>