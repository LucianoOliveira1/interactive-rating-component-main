let rating_screen = document.querySelector(".rating_state");
let thanks_screen = document.querySelector(".thanks_state");
let counter = document.querySelector("#counter");

let stars = document.querySelector(".stars_container");

let rate_value = document.querySelector(".btns");
let value_selected = 0;

rate_value.addEventListener("focusin", function(event) {
    value_selected = JSON.parse(event.target.value);
    console.log(value_selected);
    stars_count();
})

function stars_count(){
    switch (value_selected) {
        case 1:
            stars.innerHTML = `<img src="images/icon-star.svg" alt="star" class="star">`
            break;
        case 2:
            stars.innerHTML = `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            break;
        case 3:
            stars.innerHTML = `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            break;
        case 4:
            stars.innerHTML = `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            break;
        case 5:
            stars.innerHTML = `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            stars.innerHTML += `<img src="images/icon-star.svg" alt="star" class="star">`
            break;
        default:
            break;
    }
}

function submit_rate(){
    if(value_selected === 0){
        alert("Please select one of the options before submitting!");
    }else{
        rating_screen.style.display = "none";
        thanks_screen.style.display = "flex";
        counter.innerHTML = `<p class="counter_result">You selected ${value_selected} out of 5</p>`
    }
}