// Close other open case studies when one is opened, so the page doesn't get too long.
document.querySelectorAll('.case-study').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      document.querySelectorAll('.case-study').forEach((other) => {
        if (other !== details) other.open = false;
      });
    }
  });
});
