// var counter = 0;

// $(document).ready(function () {
//   var c = 0;

//   var i = setInterval(function () {
//     $(".loading-page .counter h1").html(c + "%");
//     $(".loading-page .counter hr").html("width", c + "%");

//     counter++;
//     c++;

//     console.log("counter in loop:", counter);
//     if (counter === 101) {
//       clearInterval(i);
//     }
//   }, 50);
// });

// console.log("counter:", counter);

let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  let c = 0;

  const i = setInterval(() => {
    document.querySelector(".loading-page .counter h1").textContent = `${c}%`;
    document.querySelector(".loading-page .counter hr").style.width = `${c}%`;

    counter++;
    c++;

    console.log("counter in loop:", counter);
    if (counter === 101) {
      clearInterval(i);
    }
  }, 50);
});

console.log("counter:", counter);
