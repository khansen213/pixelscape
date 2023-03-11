// generate stars
for (let i = 0; i < 50; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(star);
  }
  
  // animate stars
  const stars = document.querySelectorAll(".star");
  
  function breathe() {
    stars.forEach(star => {
      star.style.opacity = Math.random() * (0.8 - 0.5) + 0.5; // random opacity between 0.5 and 0.8
      star.style.boxShadow = `0 0 10px 2px rgba(255, 215, 0, ${star.style.opacity})`; // yellow box shadow with opacity matching star opacity
    });
  
    setTimeout(breathe, 3000); // call function every 3 seconds
  }
  
  breathe();
  