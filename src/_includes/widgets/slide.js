module.exports = () => {
  const slider = [...document.getElementsByClassName("gallery-wrap")];
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.forEach(slide => {
    slide.addEventListener("mousedown", e => {
      isDown = true;
      slide.classList.add("active");
      startX = e.pageX - slide.offsetLeft;
      scrollLeft = slide.scrollLeft;
    });
    slide.addEventListener("mouseleave", () => {
      isDown = false;
      slide.classList.remove("active");
    });
    slide.addEventListener("mouseup", () => {
      isDown = false;
      slide.classList.remove("active");
    });
    slide.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slide.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slide.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  });
};
