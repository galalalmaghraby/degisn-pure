let slider = document.querySelector('.slider')
let countMoving = 0 // make a count for transform css
let countSliders = 0 // make a count to condition
let sliders = document.querySelectorAll(".slide-card")




/* slider */
function sliderMoving(dir) {
    if(dir === "right" && countSliders < sliders.length - 3 ){
        countSliders++
        console.log(sliders.length,countSliders);
        countMoving = countMoving - 288
        slider.style.transform = `translateX(${countMoving}px)`
    }
    if(dir === "left" &&countSliders != 0){
            countSliders--
            countMoving = countMoving + 288
            slider.style.transform = `translateX(${countMoving}px)`
    }
}