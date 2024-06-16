document.addEventListener('DOMContentLoaded', function() {
  fetch('projects.json')
      .then(response => response.json())
      .then(projects => {
          const grid = document.getElementById('grid');
          projects.forEach(project => {
              const item = document.createElement('div');
              item.className = 'project-item';
              item.innerHTML = `
                  <img src="${project.image}" alt="${project.name}">
                  <div class="loading-icon">
                      <img src="/images/loading-icon.svg" alt="Loading">
                  </div>
              `;
              item.addEventListener('click', () => {
                  item.querySelector('.loading-icon').style.display = 'flex';
                  setTimeout(() => {
                      window.location.href = project.link;
                  }, 1000); // simulate delay
              });
              grid.appendChild(item);
          });
      })
      .catch(error => console.error('Error loading the projects:', error));
});
