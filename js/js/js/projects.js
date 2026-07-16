/* projects.js
   Project filtering and quick preview stubs. Keep functionality lightweight and accessible.
*/
document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('filter');
  const grid = document.getElementById('projects-grid');

  if (filter && grid) {
    filter.addEventListener('change', () => {
      const val = filter.value;
      grid.querySelectorAll('.project-card').forEach(card => {
        if (val === 'all') {
          card.style.display = '';
        } else {
          const tags = card.getAttribute('data-tags') || '';
          card.style.display = tags.includes(val) ? '' : 'none';
        }
      });
    });
  }

  // Quick preview buttons — opens accessible modal (simple)
  document.querySelectorAll('.preview').forEach(btn=>{
    btn.addEventListener('click', (e) => {
      const project = btn.dataset.project;
      openPreview(project);
    });
  });

  function openPreview(id){
    // minimal accessible preview (alert fallback)
    const titles = {heritage: 'Heritage Keeper', default: 'Project Preview'};
    alert(titles[id] || titles.default);
  }
});