
document.addEventListener('mousemove', function (event) {
    const navbar = document.getElementById('navbar');
    const mouseY = event.clientY;

    // Show navbar when mouse is in the top 50px of the window
    if (mouseY < 50) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-60px';
    }
});

// Article data
const articles = {
    chemistry: [
        "Introduction to Organic Chemistry",
        "The Periodic Table: Elements and Their Properties",
        "Chemical Reactions and Equations",
        "Acids, Bases, and Salts"
    ],
    math: [
        "Introduction to Algebra",
        "Geometry: Shapes and Angles",
        "Calculus: Limits and Derivatives",
        "Probability and Statistics"
    ]
};

// Function to display articles
function displayArticles(section) {
    const content = document.getElementById('content');
    if (articles[section]) {
        const articleList = articles[section].map(article => `<li>${article}</li>`).join('');
        content.innerHTML = `
            <h1>${section.charAt(0).toUpperCase() + section.slice(1)} Articles</h1>
            <div class="article-list">
                <ul>${articleList}</ul>
            </div>
        `;
    } else {
        content.innerHTML = `
            <h1>Welcome to Our Website</h1>
            <p>Select a section from the navigation bar to view related articles.</p>
        `;
    }
}

// Add click event listeners to buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        displayArticles(section);
    });
});


