// const emblems = Array.prototype.slice.call(
//   document.getElementsByClassName("badge")
// );

// console.log(emblems);

// function revolve() {
//   emblems.forEach((element) => {
//     for (let i = 0; i < 10; i++) {
//       setTimeout(() => {
//         element.classList.add("FIRE");
//       }, i * 10);
//     }
//   });
// }

// console.log("step 2!");

// window.addEventListener("load", revolve(emblems));
// console.log("step 3!");

// <!-- JavaScript for Certified Banner -->
// <script>
//   const bannerImages = document.querySelector('.banner-images');
//   let position = 0;

//   setInterval(() => {
// 	position -= 1;
// 	bannerImages.style.transform = `translateX(${position}px)`;

// 	if (position <= -(bannerImages.offsetWidth - document.querySelector('.banner-container').offsetWidth)) {
// 	  position = 0;
// 	  bannerImages.style.transform = `translateX(${position}px)`;
// 	}
//   }, 10);
// </script>
