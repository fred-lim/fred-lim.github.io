---
layout: default
title: The Hub
mathjax: true
---

# The Hub

<div class="textbook-navigation">
    <h2>Browse Textbook Solutions</h2>
    
    <!-- Subjects View -->
    <div id="subjects-view">
        <button class="nav-btn math-btn" onclick="showTextbooks('math')">
            Mathematics
        </button>
        <button class="nav-btn chem-btn" onclick="showTextbooks('chem')">
            Chemistry
        </button>
        <button class="nav-btn physics-btn" onclick="showTextbooks('physics')">
            Physics
        </button>
    </div>
    
    <!-- Textbooks View (hidden initially) -->
    <div id="textbooks-view" style="display: none;">
        <button class="back-btn" onclick="showSubjects()">← Back to Subjects</button>
        <h3 id="subject-title"></h3>
        <div id="textbooks-list"></div>
    </div>
    
    <!-- Chapters View (hidden initially) -->
    <div id="chapters-view" style="display: none;">
        <button class="back-btn" onclick="showTextbooks()">← Back to Textbooks</button>
        <h3 id="book-title"></h3>
        <div id="chapters-list"></div>
    </div>
</div>

<script>
// Textbook data with just chapter names
const textbooks = {
    'math': {
        title: 'Mathematics',
        books: [
            {
                name: 'A First Course in Probability by Sheldon Ross (10th Edition)',
                hasChapters: true,
                chapters: [
                    'Combinatorial Analysis',
                    'Axioms of Probability',
                    'Conditional Probability and Independence',
                    'Random Variables',
                    'Continuous Random Variables',
                    'Jointly Distributed Random Variables',
                    'Properties of Expectation',
                    'Limit Theorems'
                ],
                baseUrl: ''
            },
            {
                name: 'Numerical Analysis by Richard Burden (9th Edition)',
                hasChapters: true,
                chapters: [
                    'Mathematical Preliminaries',
                    'Solutions of Equations in One Variable',
                    'Interpolation and Polynomial Approximation',
                    'Numerical Differentiation and Integration',
                    'Initial-Value Problems for Ordinary Differential Equations',
                    'Direct Methods for Solving Linear Systems',
                    'Iterative Techniques in Matrix Algebra'
                ],
                baseUrl: ''
            },
            {
                name: 'Multivariable Calculus by James Stewart (9th Edition)',
                hasChapters: true,
                chapters: [
                    'Parametric Equations and Polar Coordinates',
                    'Infinite Sequences and Series',
                    'Vectors and the Geometry of Space',
                    'Vector Functions',
                    'Partial Derivatives'
                ],
                baseUrl: '/textbooks/stewart-multivariable-calculus/chapter-'
            },
            {
                name: 'Introduction to Real Analysis by Richard Bartle and Donald Sherbert (4th Edition)',
                hasChapters: true,
                chapters: [
                    'Preliminaries',
                    'The Real Numbers',
                    'Sequences and Series',
                    'Limits',
                    'Continuous Functions',
                    'Differentiation',
                    'The Riemann Integral',
                    'Sequences of Functions',
                    'Infinite Series',
                    'The Generalized Riemann Integral',
                    'A Glimpse into Topology'
                ],
                baseUrl: '/textbooks/bs-real-analysis/chapter-'
            },
            {
                name: 'Principles of Mathematical Analysis by Walter Rudin (3rd Edition)',
                hasChapters: true,
                chapters: [
                    'The Real and Complex Number Systems',
                    'Basic Topology',
                    'Numerical Sequences and Series',
                    'Continuity',
                    'Differentiation',
                    'The Riemann-Stieltjes Integral',
                    'Sequences and Series of Functions',
                    'Some Special Functions',
                    'Functions of Several Variables',
                    'Integration of Differential Forms'
                ],
                baseUrl: '/textbooks/rudin-real-analysis/chapter-'
            },
            {
                name: 'Abstract Algebra by David Dummit and Richard Foote (3rd Edition)',
                hasChapters: true,
                chapters: [
                    'Introduction to Groups',
                    'Subgroups',
                    'Quotient Groups and Homomorphisms',
                    'Group Actions',
                    'Direct and Semidirect Products and Abelian Groups',
                    'Further Topics in Group Theory',
                    'Introduction to Rings',
                    'Euclidean Domains, Principal Ideal Domains and Unique Factorization Domains',
                    'Polynomial Rings',
                    'Introduction to Module Theory',
                    'Vector Spaces',
                    'Modules over Principal Ideal Domains',
                    'Field Theory',
                    'Galois Theory'
                ],
                baseUrl: '/textbooks/df-abstract-algebra/chapter-'
            },
            {
                name: 'A First Course in Abstract Algebra by John Fraleigh (8th Edition)',
                hasChapters: true,
                chapters: [
                    'Groups and Subgroups',
                    'Permutations, Cosets, and Direct Products',
                    'Homomorphisms and Factor Groups',
                    'Rings and Fields',
                    'Ideals and Factor Rings',
                    'Extension Fields',
                    'Advanced Group Theory',
                    'Groups in Topology',
                    'Factorization'
                ],
                baseUrl: ''
            },
            {
                name: 'Linear Algebra by John Fraleigh (3rd Edition)',
                hasChapters: true,
                chapters: [
                    'Vector Spaces',
                    'Linear Transformations',
                    'Matrices',
                    'Determinants',
                    'Diagonalization',
                    'Inner Product Spaces',
                    'Canonical Forms',
                    'Applications'
                ],
                baseUrl: ''
            },
            {
                name: 'Linear Algebra by Stephen Friedberg (5th Edition)',
                hasChapters: true,
                chapters: [
                    'Vector Spaces',
                    'Linear Transformations and Matrices',
                    'Elementary Matrix Operations and Systems of Linear Equations',
                    'Determinants',
                    'Diagonalization',
                    'Inner Product Spaces',
                    'Canonical Forms'
                ],
                baseUrl: ''
            }
        ]
    },
    'chem': {
        title: 'Chemistry',
        books: [
            {
                name: 'Coming soon - check back later!',
                hasChapters: false,
                chapters: [],
                baseUrl: ''
            }
        ]
    },
    'physics': {
        title: 'Physics',
        books: [
            {
                name: 'Introduction to Quantum Mechanics by David Griffiths (3rd Edition)',
                hasChapters: true,
                chapters: [
                    'The Wave Function',
                    'Time-Independent Schrödinger Equation',
                    'Formalism',
                    'Quantum Mechanics in Three Dimensions',
                    'Identical Particles',
                    'Time-Independent Perturbation Theory',
                    'The Variational Principle'
                ],
                baseUrl: '/textbooks/griffiths-quantum-mechanics/chapter-'
            }
        ]
    }
};

// Global variables to track current book
let currentSubject = '';
let currentBook = null;

function showSubjects() {
    document.getElementById('subjects-view').style.display = 'block';
    document.getElementById('textbooks-view').style.display = 'none';
    document.getElementById('chapters-view').style.display = 'none';
}

function showTextbooks(subject) {
    currentSubject = subject;
    const subjectData = textbooks[subject];
    
    // Hide/show views
    document.getElementById('subjects-view').style.display = 'none';
    document.getElementById('textbooks-view').style.display = 'block';
    document.getElementById('chapters-view').style.display = 'none';
    
    // Set subject title
    document.getElementById('subject-title').textContent = subjectData.title;
    
    // Clear and add textbooks
    const list = document.getElementById('textbooks-list');
    list.innerHTML = '';
    
    subjectData.books.forEach(function(book) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn textbook-btn';
        btn.textContent = book.name;
        btn.onclick = function() {
            currentBook = book;
            if (book.hasChapters) {
                showChapters();
            } else {
                alert('Coming soon!');
            }
        };
        list.appendChild(btn);
    });
}

function showChapters() {
    // Hide/show views
    document.getElementById('textbooks-view').style.display = 'none';
    document.getElementById('chapters-view').style.display = 'block';
    
    // Set book title
    document.getElementById('book-title').textContent = currentBook.name;
    
    // Clear and add chapters
    const list = document.getElementById('chapters-list');
    list.innerHTML = '';
    
    // Create buttons for each chapter name
    currentBook.chapters.forEach(function(chapterName, index) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn chapter-btn';
        btn.textContent = chapterName;
        
        btn.onclick = function() {
            if (currentBook.baseUrl) {
                // Use index + 1 for the URL (chapter-1, chapter-2, etc.)
                window.location.href = currentBook.baseUrl + (index + 1);
            } else {
                alert(chapterName + ' coming soon!');
            }
        };
        
        list.appendChild(btn);
    });
}

console.log('Navigation script loaded successfully!');
</script>

<style>
/* Simple CSS that won't break */
.nav-btn {
    padding: 15px 25px;
    margin: 10px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: left;
}

.math-btn { background-color: #238636; color: white; }
.chem-btn { background-color: #8957e5; color: white; }
.physics-btn { background-color: #e3b341; color: #0d1117; }

.textbook-btn { 
    background-color: #6f42c1; 
    color: white; 
    margin: 8px 0;
}

.chapter-btn { 
    background-color: #e36209; 
    color: white; 
    margin: 8px 0;
}

.back-btn {
    background-color: #6e7681;
    color: white;
    padding: 10px 20px;
    margin-bottom: 20px;
    width: auto;
}

.nav-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}
</style>