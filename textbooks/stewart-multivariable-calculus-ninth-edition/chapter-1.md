---
layout: default
title: "Chapter 1 - Vectors and Geometry of Space"
mathjax: true
---

# Chapter 1: Vectors and Geometry of Space
## Test Page for MathJax Rendering

This page tests various LaTeX equations to ensure MathJax is working correctly on your GitHub Pages site.

---

## Section 1.1: Vectors in 2D and 3D

### Exercise 1.1
Find the magnitude of vector $\mathbf{v} = \langle 3, -4, 12 \rangle$.

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.1</span>
        <span class="exercise-number">Page 10, #5</span>
    </div>
    Find $\|\mathbf{v}\|$.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    $$
    \|\mathbf{v}\| = \sqrt{3^2 + (-4)^2 + 12^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13
    $$
</div>

---

### Exercise 1.2
Find the unit vector in the direction of $\mathbf{v} = \langle 6, -2, 3 \rangle$.

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.2</span>
        <span class="exercise-number">Page 11, #8</span>
    </div>
    Find $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    First find the magnitude:
    $$
    \|\mathbf{v}\| = \sqrt{6^2 + (-2)^2 + 3^2} = \sqrt{36 + 4 + 9} = \sqrt{49} = 7
    $$
    
    Then the unit vector:
    $$
    \mathbf{u} = \frac{1}{7}\langle 6, -2, 3 \rangle = \left\langle \frac{6}{7}, -\frac{2}{7}, \frac{3}{7} \right\rangle
    $$
</div>

---

## Section 1.2: Dot Product

### Exercise 1.3
Find the angle between $\mathbf{a} = \langle 1, 2, 3 \rangle$ and $\mathbf{b} = \langle -4, 5, 6 \rangle$.

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.3</span>
        <span class="exercise-number">Page 17, #12</span>
    </div>
    Find $\theta = \cos^{-1}\left(\frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|\|\mathbf{b}\|}\right)$.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    Dot product:
    $$
    \mathbf{a} \cdot \mathbf{b} = (1)(-4) + (2)(5) + (3)(6) = -4 + 10 + 18 = 24
    $$
    
    Magnitudes:
    $$
    \|\mathbf{a}\| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{14}
    $$
    $$
    \|\mathbf{b}\| = \sqrt{(-4)^2 + 5^2 + 6^2} = \sqrt{16 + 25 + 36} = \sqrt{77}
    $$
    
    Angle:
    $$
    \cos\theta = \frac{24}{\sqrt{14}\sqrt{77}} = \frac{24}{\sqrt{1078}} \approx 0.732
    $$
    $$
    \theta = \cos^{-1}(0.732) \approx 42.9^\circ
    $$
</div>

---

## Section 1.3: Cross Product

### Exercise 1.4
Find $\mathbf{a} \times \mathbf{b}$ where $\mathbf{a} = \langle 2, -1, 3 \rangle$ and $\mathbf{b} = \langle 4, 5, -1 \rangle$.

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.4</span>
        <span class="exercise-number">Page 22, #15</span>
    </div>
    Compute the cross product.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    $$
    \mathbf{a} \times \mathbf{b} = \begin{vmatrix}
    \mathbf{i} & \mathbf{j} & \mathbf{k} \\
    2 & -1 & 3 \\
    4 & 5 & -1
    \end{vmatrix}
    $$
    
    $$
    = \mathbf{i}[(-1)(-1) - (3)(5)] - \mathbf{j}[(2)(-1) - (3)(4)] + \mathbf{k}[(2)(5) - (-1)(4)]
    $$
    
    $$
    = \mathbf{i}(1 - 15) - \mathbf{j}(-2 - 12) + \mathbf{k}(10 + 4)
    $$
    
    $$
    = \langle -14, 14, 14 \rangle
    $$
</div>

---

## Section 1.4: Equations of Lines and Planes

### Exercise 1.5
Find the equation of the plane through point $P(1, 2, 3)$ with normal vector $\mathbf{n} = \langle 4, -5, 6 \rangle$.

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.5</span>
        <span class="exercise-number">Page 30, #21</span>
    </div>
    Find the plane equation.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    General form: $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$
    
    $$
    4(x - 1) - 5(y - 2) + 6(z - 3) = 0
    $$
    
    Simplify:
    $$
    4x - 4 - 5y + 10 + 6z - 18 = 0
    $$
    
    $$
    4x - 5y + 6z = 12
    $$
</div>

---

## Section 1.5: Cylinders and Quadric Surfaces

### Exercise 1.6
Identify the surface: $4x^2 + 9y^2 - 36z^2 = 36$

<div class="exercise">
    <div class="exercise-header">
        <span class="exercise-title">Exercise 1.6</span>
        <span class="exercise-number">Page 36, #28</span>
    </div>
    Classify the quadric surface.
</div>

<div class="solution">
    <div class="solution-header">Solution:</div>
    Divide by 36:
    $$
    \frac{x^2}{9} + \frac{y^2}{4} - \frac{z^2}{1} = 1
    $$
    
    This is a **hyperboloid of one sheet**.
    
    Standard form: $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$
    
    Where $a = 3$, $b = 2$, $c = 1$.
</div>

---

## Complex Math Test

### Test 1: Multiple Equations
<div class="solution">
    <div class="solution-header">Matrix Operations:</div>
    Eigenvalue problem:
    $$
    \det(A - \lambda I) = 0
    $$
    
    For $A = \begin{bmatrix} 3 & 1 \\ 1 & 3 \end{bmatrix}$:
    $$
    \begin{vmatrix} 3-\lambda & 1 \\ 1 & 3-\lambda \end{vmatrix} = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = 0
    $$
    
    $$
    \lambda = \frac{6 \pm \sqrt{36 - 32}}{2} = \frac{6 \pm 2}{2} = 4, 2
    $$
</div>

### Test 2: Integrals
<div class="solution">
    <div class="solution-header">Vector Calculus:</div>
    Line integral:
    $$
    \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) dt
    $$
    
    Example:
    $$
    \int_0^{2\pi} (\cos t, \sin t, t) \cdot (-\sin t, \cos t, 1) dt
    $$
    
    $$
    = \int_0^{2\pi} (-\cos t \sin t + \sin t \cos t + t) dt = \int_0^{2\pi} t dt = \left[\frac{t^2}{2}\right]_0^{2\pi} = 2\pi^2
    $$
</div>

### Test 3: Physics Equations
<div class="solution">
    <div class="solution-header">Maxwell's Equations:</div>
    $$
    \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}
    $$
    
    $$
    \nabla \cdot \mathbf{B} = 0
    $$
    
    $$
    \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
    $$
    
    $$
    \nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
    $$
</div>

---

<div class="chapter-navigation">
    <a href="/" class="nav-btn home">🏠 Back to Home</a>
    <div>
        <a href="#" onclick="window.history.back(); return false;" class="nav-btn prev">← Back to Chapters</a>
        <a href="/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-2.html" class="nav-btn next">Chapter 2 →</a>
    </div>
</div>
