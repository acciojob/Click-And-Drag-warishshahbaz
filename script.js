// Your code here.
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');

  let isDown = false;
  let startX;
  let scrollLeft;

  items.forEach(item => {
    item.addEventListener('mousedown', e => {
      isDown = true;
      item.classList.add('active');
      startX = e.pageX - item.offsetLeft;
      scrollLeft = item.scrollLeft;
    });

    item.addEventListener('mouseleave', () => {
      isDown = false;
      item.classList.remove('active');
    });

    item.addEventListener('mouseup', () => {
      isDown = false;
      item.classList.remove('active');
    });

    item.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - item.offsetLeft;
      const walk = (x - startX) * 2;
      item.scrollLeft = scrollLeft - walk;
    });
  });
});
