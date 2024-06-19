document.addEventListener('DOMContentLoaded', function() {
    const s3Url = '/projects.json';  // Using local projects.json for demonstration.

    fetch(s3Url)
        .then(response => response.json())
        .then(projects => {
            const grid = document.getElementById('grid');
            projects.forEach(project => {
                const item = document.createElement('div');
                item.className = 'project-item';
                
                // Create a container for the image and loading icon.
                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';
                imageContainer.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <div class="loading-icon">
                        <img src="/images/loading-icon.svg" alt="Loading">
                    </div>
                `;

                // Append the image container and other elements to the project item.
                item.innerHTML = `<h3>${project.title}</h3>`;
                item.appendChild(imageContainer); // Append the image container.
                item.innerHTML += `<p>${project.description}</p>`;

                item.addEventListener('click', () => {
                    const loadingIcon = item.querySelector('.loading-icon');
                    loadingIcon.style.display = 'flex';
                    setTimeout(() => {
                        window.location.href = project.link;
                    }, 1000); // simulate delay
                });
                grid.appendChild(item);
            });
        })
        .catch(error => console.error('Error loading the projects:', error));
});


/*

[
    {
        "title": "Project A",
        "image": "https://personalportfolioprojects.s3.amazonaws.com/images/projectA.jpg",
        "name": "Project A",
        "description": "A brief description of Project A, highlighting its main features and purpose.",
        "link": "https://example.com/projectA"
    },
    {
        "title": "Project B",
        "image": "https://personalportfolioprojects.s3.amazonaws.com/images/projectB.jpg",
        "name": "Project B",
        "description": "A brief description of Project B, outlining its objectives and key components.",
        "link": "https://example.com/projectB"
    },
    {
        "title": "Project C",
        "image": "https://personalportfolioprojects.s3.amazonaws.com/images/projectC.jpg",
        "name": "Project C",
        "description": "An overview of Project C, focusing on its impact and technology used.",
        "link": "https://example.com/projectC"
    }
]

*/