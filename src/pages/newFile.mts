document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  // Tab switching functionality
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Update tab states
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      // Update tab panes
      tabPanes.forEach(pane => {
        pane.classList.remove('is-active');
      });

      const targetPane = document.querySelector(`[data-tab-content="${targetTab}"]`);
      if (targetPane) {
        targetPane.classList.add('is-active');
      }
    });
  });

  // Filter button functionality
  const filterButton = document.querySelector('.filter-button');
  filterButton?.addEventListener('click', () => {
    // Placeholder for filter modal or dropdown
    console.log('Filter functionality to be implemented');
  });

  // Search functionality - navigate back to search
  const searchInput = document.querySelector('.search-input');
  searchInput?.addEventListener('click', () => {
    window.location.href = '/';
  });
});
