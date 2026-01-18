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
// Textbook data with custom chapter counts
const textbooks = {
    'math': {
        title: 'Mathematics',
        books: [
            {
                name: 'Multivariable Calculus (Stewart 9th Ed)',
                hasChapters: true,
                chapters: 7,  // ← Change this number for custom chapters
                baseUrl: '/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-'
            },
            {
                name: 'Real Analysis (WIP)',
                hasChapters: false,
                chapters: 0,
                baseUrl: ''
            },
            {
                name: 'Linear Algebra (WIP)',
                hasChapters: false,
                chapters: 0,
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
                chapters: 0,
                baseUrl: ''
            }
        ]
    },
    'physics': {
        title: 'Physics',
        books: [
            {
                name: 'Coming soon - check back later!',
                hasChapters: false,
                chapters: 0,
                baseUrl: ''
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
    
    // Create exactly the number of chapters specified
    for (let i = 1; i <= currentBook.chapters; i++) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn chapter-btn';
        btn.textContent = 'Chapter ' + i;
        
        btn.onclick = function() {
            // OPEN ANY CHAPTER for Multivariable Calculus
            if (currentBook.name.includes('Multivariable Calculus')) {
                window.location.href = currentBook.baseUrl + i + '.html';
            } else {
                alert('Chapter ' + i + ' coming soon!');
            }
        };
        
        list.appendChild(btn);
    }
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