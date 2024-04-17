var rectangle = document.querySelector("#rectangle");

var images = ["2", "1", "me", "3", "4", "5", "6", "7", "8", "9"];
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
rectangle.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    document.body.appendChild(div);

    let rand = (Math.random()) * 10;
    rand = parseInt(rand);
    var img = document.createElement("img");
    img.setAttribute("src", `assets/${images[rand]}.jpg`);
    div.appendChild(img);
   
    /* // For down to up and up to down animation
    gsap.to(img,{
        y: "0",
        ease : Power1, // It can be power1-4
        duration : .6, // No need to enter s or seconds
    });
    gsap.to(img, {
        y: "100%",
        delay : .6,
        ease : Power2,
    }); */
    setTimeout(function () {
        div.remove();
    }, 2000);

}, 500));

// GSAP Code

// The above is for anonymous function
// console.log(dets.clientX, dets.clientY);