---
layout: default
title: "Chapter 1 - Real and Complex Number Systems"
mathjax: true
---

# Chapter 1: Real and Complex Number Systems

---

### Exercise 1

<div class="solution">
    <div class="solution-header">Solution:</div>
    We shall prove this by contradiction. <br>
    Suppose that \(r+x\) is rational with \(r\) rational and \(x\) irrational. <br>
    Since \(r+x\) is rational and \(-r\) is rational, <br>
    we have \(x\) is rational. <br>
    Thus there is a contradiction. <br>
    Thus \(r+x\) is irrational. <br>
    Suppose that \(rx\) is rational with \(r\) rational and \(x\) irrational. <br>
    Since \(rx\) is rational and \(\frac{1}{r}\) is rational, <br>
    we have \(x\) is rational. <br>
    Thus there is a contradiction. <br>
    Thus \(rx\) is irrational.
</div>

---

### Exercise 2

<div class="solution">
    <div class="solution-header">Solution:</div>
    We shall prove this by contradiction. <br>
    Suppose that there is a rational number whose square is \(12\). <br>
    Then \(\frac{p^2}{q^2} = 12\) where \(p,q\in\mathbb{Z}\) and \(q > 0\) and \(\gcd{(p,q)} = 1\) <br>
    Then \(p^2 = 12q^2\) <br>
    Then \(3 | p^2\) <br>
    Then \(3 | p\) <br>
    Then \(p = 3k\) for some \(k\in\mathbb{Z}\) <br>
    Then \(9k^2 = 12q^2\) <br>
    Then \(3k^2 = 4q^2\) <br>
    Then \(3 | q^2\) <br>
    Since \(3 | p^2\) and \(3 | q^2\), <br>
    we have \(\gcd{(p,q)} \neq 1\) <br>
    Thus there is a contradiction. <br>
    Thus there is no rational number whose square is \(12\).
</div>

---

### Exercise 3

<div class="solution">
    <div class="solution-header">Solution:</div>
    Since \(x \neq 0\) and \(xy = xz\), <br>
    we have 
    \begin{align*}
    (x^{-1})(xy) =& (x^{-1})(xz) \\
    y =& z
    \end{align*}
    Since \(x \neq 0\) and \(xy = x\), <br>
    we have 
    \begin{align*}
    (x^{-1})(xy) =& (x^{-1})(x) \\
    y =& 1
    \end{align*}
    Since \(x \neq 0\) and \(xy = 1\), <br>
    we have 
    \begin{align*}
    (x^{-1})(xy) =& (x^{-1})(1) \\
    y =& x^{-1}
    \end{align*}
    Since \(x \neq 0\), <br>
    we have 
    \begin{align*}
    (x^{-1})(x) =& 1 \\
    x =& (x^{-1})^{-1}
    \end{align*}
</div>

---

### Exercise 4

<div class="solution">
    <div class="solution-header">Solution:</div>
    Since \(\alpha\) is a lower bound of \(E\), <br>
    we have \(\alpha \leq x\) for all \(x\in E\) <br>
    Since \(\beta\) is an upper bound of \(E\), <br>
    we have \(x \leq \beta\) for all \(x\in E\) <br>
    Since \(\alpha \leq x\) and \(x \leq \beta\), <br>
    we have \(\alpha \leq \beta\)
</div>

---

### Exercise 5

<div class="solution">
    <div class="solution-header">Solution:</div>
    Since \(A\) is bounded below, <br>
    we have inf \(A \leq x\) for all \(x\in A\) <br>
    Then \(-x \leq -\) inf \(A\) <br>
    Then -inf \(A\) is an upper bound of \(-A\) <br>
    For any arbitrary \(v < -\) inf \(A\) <br>
    we have \(-v > \) inf \(A\) <br>
    Thus \(-v\) cannot be a lower bound of \(A\) <br>
    Then \(-v > x\) for some \(x\in A\) <br>
    Then \(v < -x\) <br>
    Then \(v\) cannot be an upper bound of \(-A\) <br>
    Thus -inf \(A =\) sup \((-A)\) <br>
</div>

---

### Exercise 6a

<div class="solution">
    <div class="solution-header">Solution:</div>
    Since \(r = \frac{m}{n} = \frac{p}{q}\), <br>
    we have \(mq = np\) <br>
    Then
    \begin{align*}
    [(b^m)^\frac{1}{n}]^{nq} =& (b^m)^q \\
    [(b^p)^\frac{1}{q}]^{nq} =& (b^p)^n
    \end{align*}
    Since \(mq = np\), <br>
    we have \([(b^m)^\frac{1}{n}] = [(b^p)^\frac{1}{q}]\)
</div>

---

<div class="chapter-navigation">
    <a href="/" class="nav-btn home">🏠 Back to Home</a>
    <div>
        <a href="#" onclick="window.history.back(); return false;" class="nav-btn prev">← Back to Chapters</a>
        <a href="/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-2.html" class="nav-btn next">Chapter 2 →</a>
    </div>
</div>