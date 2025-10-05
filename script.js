const all = document.querySelector(".img-sec");
const show = document.querySelectorAll(".show");
const components = document.querySelectorAll(".left-wall, .projector, .screen, .golf-cart, .golf-mat, .hitting-strip, .launch-monitor");
const itemname = document.querySelector(".item-name");

// array, to remember the order of selected components
let selectedOrder = [];

// show/hide
all.addEventListener("mouseenter", () => {
    show.forEach(item => (item.style.display = "initial"));
});

all.addEventListener("mouseleave", () => {
    show.forEach(item => (item.style.display = "none"));
});

//Function to update the selected item list
function updateSelectedItems() {
    const selectedNames = selectedOrder
        .map(comp => {
            const label = comp.querySelector(".label");
            return label ? `✅ ${label.textContent}` : null;
        })
        .filter(Boolean);

    itemname.innerHTML = selectedNames.length > 0 ? selectedNames.join("<br>") : "No items selected";
}

// handle component selection
components.forEach(comp => {
    comp.addEventListener("click", () => {
        comp.classList.toggle("active");

        if (comp.classList.contains("active")) {
            comp.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
            comp.style.borderColor = "red";
            comp.style.boxShadow = "none";

            // add to selected order ,if not already there
            if (!selectedOrder.includes(comp)) {
                selectedOrder.push(comp);
            }
        } else {
            comp.style.backgroundColor = "";
            comp.style.borderColor = "";
            comp.style.boxShadow = "";

            // remove from selected order
            selectedOrder = selectedOrder.filter(item => item !== comp);
        }

        // update item list every time
        updateSelectedItems();
    });
});

// Run once on page load
updateSelectedItems();







                // Old Code
// let all = document.querySelector(".img-sec");
// let show = document.querySelectorAll(".show");
// let leftwall = document.querySelector(".left-wall");
// let projector = document.querySelector(".projector");
// let displayscreen = document.querySelector(".screen");
// let golfcart = document.querySelector(".golf-cart");
// let golfmat = document.querySelector(".golf-mat");
// let strip = document.querySelector(".hitting-strip");
// let monitor = document.querySelector(".launch-monitor");
// let label = document.querySelectorAll(".label");
// let itemname = document.querySelector(".item-name");


// all.addEventListener("mouseenter", function() {
//     show.forEach(item => {
//         item.style.display = "initial";
//     });
// });

// all.addEventListener("mouseleave", function() {
//     show.forEach(item => {
//         item.style.display = "none";
//     });
// });

// leftwall.addEventListener("click", function(){
//    if(leftwall.classList.contains("active")){
//         leftwall.classList.remove("active");
//         leftwall.style.backgroundColor = "";
//         leftwall.style.borderColor = "";
//                 leftwall.style.boxShadow = "";


//     } else {
//         leftwall.classList.add("active");
//         leftwall.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         leftwall.style.borderColor = "red";
//         leftwall.style.boxShadow = "none";
//                         itemname.textContent = label.textContent;

//     }
// })

// projector.addEventListener("click", function(){
//    if(projector.classList.contains("active")){
//         projector.classList.remove("active");
//         projector.style.backgroundColor = "";
//         projector.style.borderColor = "";
//                 projector.style.boxShadow = "";

//     } else {
//         projector.classList.add("active");
//         projector.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         projector.style.borderColor = "red";
//         projector.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

// displayscreen.addEventListener("click", function(){
//    if(displayscreen.classList.contains("active")){
//         displayscreen.classList.remove("active");
//         displayscreen.style.backgroundColor = "";
//         displayscreen.style.borderColor = "";
//                 displayscreen.style.boxShadow = "";

//     } else {
//         displayscreen.classList.add("active");
//         displayscreen.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         displayscreen.style.borderColor = "red";
//         displayscreen.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

// golfcart.addEventListener("click", function(){
//    if(golfcart.classList.contains("active")){
//         golfcart.classList.remove("active");
//         golfcart.style.backgroundColor = "";
//         golfcart.style.borderColor = "";
//                 golfcart.style.boxShadow = "";

//     } else {
//         golfcart.classList.add("active");
//         golfcart.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         golfcart.style.borderColor = "red";
//         golfcart.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

// golfmat.addEventListener("click", function(){
//    if(golfmat.classList.contains("active")){
//         golfmat.classList.remove("active");
//         golfmat.style.backgroundColor = "";
//         golfmat.style.borderColor = "";
//                 golfmat.style.boxShadow = "";

//     } else {
//         golfmat.classList.add("active");
//         golfmat.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         golfmat.style.borderColor = "red";
//         golfmat.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

// strip.addEventListener("click", function(){
//    if(strip.classList.contains("active")){
//         strip.classList.remove("active");
//         strip.style.backgroundColor = "";
//         strip.style.borderColor = "";
//                 strip.style.boxShadow = "";

//     } else {
//         strip.classList.add("active");
//         strip.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         strip.style.borderColor = "red";
//         strip.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

// monitor.addEventListener("click", function(){
//    if(monitor.classList.contains("active")){
//         monitor.classList.remove("active");
//         monitor.style.backgroundColor = "";
//         monitor.style.borderColor = "";
//                 monitor.style.boxShadow = "";

//     } else {
//         monitor.classList.add("active");
//         monitor.style.backgroundColor = "rgba(165, 65, 65, 0.347)";
//         monitor.style.borderColor = "red";
//         monitor.style.boxShadow = "none";
//                                 itemname.textContent = label.textContent;

//     }
// })

