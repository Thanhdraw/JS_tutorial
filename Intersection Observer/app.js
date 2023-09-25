if ("IntersectionObserver" in window) {
  const boxed = document.querySelector(".boxed");

  // const observer = new IntersectionObserver(callback,options)
  //   function callback(entries) {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       observer.unobserve(entry.target);
  //       entry.target.style.backgroundColor = "red";
  //     }
  //   }
  //   const options = {
  //     root: null,
  //     threshold: 0.5,
  //     rootMargin: "0px",
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   observer.observe(boxed);
  const options = {
    threshold: 0.5,
  };
  let observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Handle logic here
        entry.target.src = entry.target.dataset.src;
        observe.unobserve(entry.target);
      }
    });
  }, options);
  const images = document.querySelectorAll("img");
  images.forEach((img) => observer.observe(img));
}
