document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelector('.items');
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  items.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
  });

  items.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  items.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  items.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = (x - startX) * 3;
    items.scrollLeft = scrollLeft - walk;
  });
});
