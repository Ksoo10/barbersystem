function setupDayTabs() {
  // 1. Grab all day buttons and all time content panels
  const dayTabs = document.querySelectorAll('.tab');
  const timeContents = document.querySelectorAll('.tab__content');

  // 2. Loop through each day button and listen for a click
  dayTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // 3. Remove the 'active' class from ALL buttons and ALL content panels
      dayTabs.forEach((btn) => btn.classList.remove('active'));
      timeContents.forEach((content) => content.classList.remove('active'));

      // 4. Add 'active' to the specific day button that was clicked
      tab.classList.add('active');

      // 5. Get the day name from the button's data-tab attribute (e.g., "monday")
      const selectedDay = tab.getAttribute('data-tab');

      // 6. Find the matching content div by its ID and make it visible
      const targetContent = document.getElementById(selectedDay);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Run the function
setupDayTabs();