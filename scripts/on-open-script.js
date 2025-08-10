document.addEventListener("DOMContentLoaded", function() {
  // Fade in all children of #title-container
  const container = document.getElementById('title-container');
  const children = Array.from(container.children);
  children.forEach(child => {
    child.style.opacity = 0;
    child.style.transition = "opacity 1s";
  });

  // Fade in each child one after another
  let delayForTitle = 0;
  children.forEach(child => {
    setTimeout(() => {
      child.style.opacity = 1;
    }, delayForTitle);
    delayForTitle +=  300;// 300ms between each fade-in
  });

  // TODO - Jump in all children of #main-navbar

  // Jump in all children of #main-navbar
  let delayForNav = 0;
  const navbar = document.getElementById('main-navbar');
  const navChildren = Array.from(navbar.children);
  navChildren.forEach(child => {
    child.style.opacity = 0;
    child.style.transition = "opacity 1s";
  })

  // Fade in each child one after another
  navChildren.forEach(child => {
    setTimeout(() => {
      child.style.opacity = 1;
    }, delayForNav);
    delayForNav += 300; // 300ms between each fade-in
  });


  // Type out the Name
  const text = "Logan Dube.";
  const target = document.getElementById("typed-title");
  let i = 0;
  function type() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 75);
    }
  }
  type();
});
