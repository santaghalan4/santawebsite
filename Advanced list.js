

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
        { title: "Introduction to Organic Chemistry", content: "Organic chemistry is the study of carbon-containing compounds and their properties." },
        { title: "The Periodic Table: Elements and Their Properties", content: "The periodic table organizes elements based on their atomic number and properties." },
        { title: "Chemical Reactions and Equations", content: "Chemical reactions involve the transformation of reactants into products." },
        { title: "Acids, Bases, and Salts", content: "Acids, bases, and salts are fundamental concepts in chemistry." }
    ],
    math: [
        { title: "Introduction to Algebra", content: "Algebra is the branch of mathematics dealing with symbols and the rules for manipulating them." },
        { title: "Geometry: Shapes and Angles", content: "Geometry studies the properties and relationships of shapes and angles." },
        { title: "Calculus: Limits and Derivatives", content: "Calculus is the study of change and motion through limits and derivatives." },
        { title: "Probability and Statistics", content: "Probability and statistics deal with the analysis of random events and data." }
    ]
};

// Function to display articles
function displayArticles(section) {
    const content = document.getElementById('content');
    if (articles[section]) {
        const articleList = articles[section].map(article => `
            <li data-title="${article.title}" data-content="${article.content}">
                ${article.title}
            </li>
        `).join('');
        content.innerHTML = `
            <h1>${section.charAt(0).toUpperCase() + section.slice(1)} Articles</h1>
            <div class="article-list">
                <ul>${articleList}</ul>
            </div>
            <div class="article-content" id="article-content"></div>
        `;

        // Add click event listeners to article titles
        document.querySelectorAll('.article-list li').forEach(li => {
            li.addEventListener('click', function () {
                const title = this.getAttribute('data-title');
                const content = this.getAttribute('data-content');
                document.getElementById('article-content').innerHTML = `
                    <h2>${title}</h2>
                    <p>${content}</p>
                `;
            });
        });
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
