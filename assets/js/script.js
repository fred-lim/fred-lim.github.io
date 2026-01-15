// Textbook Navigation System
document.addEventListener('DOMContentLoaded', function() {
    console.log('Textbook navigation loading...');
    
    // Only run if navigation exists
    if (!document.querySelector('.textbook-navigation')) {
        console.log('No textbook navigation found');
        return;
    }
    
    // Textbook data
    const textbookData = {
        math: {
            title: "Mathematics",
            textbooks: {
                "multivariable-calculus": {
                    title: "Multivariable Calculus (Stewart 9th Ed)",
                    chapters: {
                        1: "/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-1",
                        2: "/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-2",
                        3: "/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-3",
                        4: "/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-4",
                        5: "/textbooks/stewart-multivariable-calculus-ninth-edition/chapter-5"
                    }
                },
                "real-analysis": {
                    title: "Real Analysis (WIP)",
                    chapters: { 1: "#" }
                },
                "linear-algebra": {
                    title: "Linear Algebra (WIP)",
                    chapters: { 1: "#" }
                },
                "ode": {
                    title: "Ordinary Differential Equations (WIP)",
                    chapters: { 1: "#" }
                },
                "pde": {
                    title: "Partial Differential Equations (WIP)",
                    chapters: { 1: "#" }
                },
                "discrete-math": {
                    title: "Discrete Mathematics (WIP)",
                    chapters: { 1: "#" }
                },
                "probability": {
                    title: "Probability (WIP)",
                    chapters: { 1: "#" }
                }
            }
        },
        chemistry: {
            title: "Chemistry",
            textbooks: {
                "quantum-chemistry": {
                    title: "Quantum Chemistry (WIP)",
                    chapters: { 1: "#" }
                },
                "solid-state": {
                    title: "Solid State Chemistry (WIP)",
                    chapters: { 1: "#" }
                },
                "computational-chemistry": {
                    title: "Computational Chemistry (WIP)",
                    chapters: { 1: "#" }
                }
            }
        },
        physics: {
            title: "Physics",
            textbooks: {
                "classical-mechanics": {
                    title: "Classical Mechanics (WIP)",
                    chapters: { 1: "#" }
                }
            }
        }
    };
    
    // State
    let currentState = { subject: null, textbook: null };
    
    // Initialize
    initNavigation();
    
    function initNavigation() {
        // Subject buttons
        document.querySelectorAll('.subject-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const subject = this.dataset.subject;
                showTextbooks(subject);
            });
        });
        
        // Back buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('back-btn')) {
                const targetView = e.target.dataset.backTo;
                showView(targetView);
            }
        });
        
        console.log('Navigation initialized');
    }
    
    function showView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Show target
        const target = document.getElementById(viewName + '-view');
        if (target) target.classList.add('active');
    }
    
    function showTextbooks(subjectId) {
        const subject = textbookData[subjectId];
        if (!subject) return;
        
        currentState.subject = subjectId;
        const titleEl = document.getElementById('current-subject');
        if (titleEl) titleEl.textContent = subject.title;
        
        const container = document.getElementById('textbooks-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.entries(subject.textbooks).forEach(([id, textbook]) => {
            const btn = document.createElement('button');
            btn.className = 'textbook-btn';
            btn.textContent = textbook.title;
            btn.dataset.textbook = id;
            
            btn.addEventListener('click', function() {
                showChapters(id);
            });
            
            container.appendChild(btn);
        });
        
        showView('textbooks');
    }
    
    function showChapters(textbookId) {
        const subject = textbookData[currentState.subject];
        if (!subject) return;
        
        const textbook = subject.textbooks[textbookId];
        if (!textbook) return;
        
        currentState.textbook = textbookId;
        const titleEl = document.getElementById('current-textbook');
        if (titleEl) titleEl.textContent = textbook.title;
        
        const container = document.getElementById('chapters-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.entries(textbook.chapters).forEach(([chapterNum, url]) => {
            const btn = document.createElement('button');
            btn.className = 'chapter-btn';
            btn.textContent = `Chapter ${chapterNum}`;
            
            btn.addEventListener('click', function() {
                if (url === '#') {
                    alert('This chapter is still a work in progress!');
                    return;
                }
                let fullUrl = url.endsWith('.html') ? url : url + '.html';
                window.location.href = fullUrl;
            });
            
            container.appendChild(btn);
        });
        
        showView('chapters');
    }
    
    // Escape key to go back
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.getElementById('chapters-view')?.classList.contains('active')) {
                showView('textbooks');
            } else if (document.getElementById('textbooks-view')?.classList.contains('active')) {
                showView('subjects');
            }
        }
    });
    
    console.log('Textbook navigation ready!');
});