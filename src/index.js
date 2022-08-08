// ramens above page 
// one ramen displaying
// forms that creates the ramen and appends it to the DOM 
// show that you can click and view that 
// ________
// select ramen-menu div 
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// make a fetch request / fetch ramens data from ramens endpoint 
// iterate over ramens data, for each ramen create an img 
    // create / update img tag
    // update src attribute 
    // append to #ramen-menu div

const ramenMenu = document.querySelector("#ramen-menu");
// console.log(ramenMenu);
const baseUrl = "http://localhost:3000"; 
fetch(baseUrl + "/ramens")
    .then((response) => response.json())
    // passing ramen's data using renderRamens then create a seperate function for renderRamens
    // .then returns a promise too. no need to set a return when .then is doing it 
    .then((ramensData) => renderRamens(ramensData))

    function renderRamens(ramens) {
    // console.log(ramen)
    // use forEach to iterate over ramen's data and create and img
        ramens.forEach(appendRamenImage);
}

function appendRamenImage(ramen) {
    const img = document.createElement("img")
        img.src = ramen.image
        // to get the data 
        img.details = ramen; 
        // add event listener 
        //img.addEventListener("click", () => updateRamenDetails(ramen));
        img.addEventListener("click", updateRamenDetails);
        // append to the ramen div
        ramenMenu.append(img);
}

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// add eventlistener 'click' to each img from #ramen-div 
// have a callback function for event listener that will update #ramen-detail div 
    // select name, restaurant, img, rating, and comment tags in #ramen-detail div
    // where does the ramen data come from?
    //update all tags with correct info

function updateRamenDetails(event) {
    // let ramen = event.target.details;
    let ramen = event.target.details;
    // console.log(event.target.details.name);
    const name = document.querySelector('.name');
    name.innerText = ramen.name;
    const image = document.querySelector(".detail-image")
    image.src = ramen.image;
    const restaurant = document.querySelector(".restaurant");
    restaurant.innerText = ramen.restaurant;
    const rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;
    const comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;
}


// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
// add a SUBMIT EVENT LISTENER to the new ramen form 
// select #ramen-menu div
// select new ramen form
// callback function that will add the ramen to the ramen-menu div
    // inside callback function select all input fields from form 
    // create img and add to ramen-menu div 

const ramenForm = document.querySelector("#new-ramen");
// console.log(ramenForm);

// callback function add the ramen to the div - we're going to get all the info and create the img and add to ramen menu div 
ramenForm.addEventListener("submit", createRamen);

function createRamen(event) {
    // need e.pDfault to show console.log submit testing 
    event.preventDefault();
    const name = document.querySelector("#new-name").value;
    // console.log(name);
    const restaurant = document.querySelector("#new-restaurant").value;
    const image = document.querySelector("#new-image").value;
    const rating = document.querySelector("#new-rating").value;
    const comment = document.querySelector("#new-comment").value;
    console.log(name, restaurant, image, rating, comment);
    const ramen = {name, restaurant, image, rating, comment};
    console.log(ramen);
    // last part is to call the function 
    appendRamenImage(ramen);
}