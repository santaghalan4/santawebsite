

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
          { title: "Group Theory", content: "Group theory is a branch of mathematics that studies groups, which are collections of objects with similar properties.Assume you have a set of blocks from which you can construct various structures.Each block has a unique shape, such as a square, triangle, or rectangle.A "group" is the collection of all these blocks. 

We study the properties of these groups and how they behave in group theory.A group has a "group operation," which is one of its most important properties.This is a rule that explains how to combine any two blocks in the group to form a third.For instance, the group operation could be that we can combine two blocks to create a new block.If we have a square block and a triangle block, we can combine them to make a new square and triangle block. 

Another crucial feature of a group is that it is "closed."This means that whenever we use the group operation to combine two blocks in the group, we always get another block from the group.For example, if we have a square block and a triangle block in our group of blocks, we can use the group operation to combine them and make a new block, but we know that this new block will still be in the group because it is composed of blocks from the group. 

A "neutral element" is a special block that does not change other blocks when we use the group operation.This element is commonly denoted as "e" or "1" and is referred to as the identity element.

Groups can also have a "neutral element," which is a special block that does not change other blocks when we use the group operation.This element is commonly denoted as "e" or "1" and is known as the identity element. 

Groups are used extensively in mathematics and science.They help us understand symmetry in art and nature, and they are used to solve problems in computer science and physics. 

In summary, group theory is a branch of mathematics that studies groups of objects and how they behave when certain rules are applied to them.It helps us understand symmetry, which is used to solve problems in other fields like computer science and physics.." },
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

