window.addEventListener('load', init);
function init(){
  //event listener to happen on any change of search bar
  document.querySelector("#search").addEventListener('input',search);
  //create deals
  createDeals();
}

async function createDeals(){
  const dealList = await fetch("js/deals.json");
  const deals = await dealList.json();
  const row = document.querySelector(".row");

  for (deal of deals){
  //create containter
    const container = document.createElement("div");
    container.classList = "col-lg-4 col-md-4 col-sm-6";
    row.appendChild(container);
  //creater anchor element
    const link = document.createElement("a");
    link.href = deal.link;
    link.classList = `deal-item ${deal.id} animated fadeInDown`
    container.appendChild(link);
  //create figure element
    const figure = document.createElement("figure");
    link.appendChild(figure);
  //create div for text
    const text = document.createElement("div");
    text.classList = "deal-text";
    link.appendChild(text);
  //create img element
    const img = document.createElement("img");
    img.src = deal.img;
    img.alt = deal.name;
    img.classList = "img-responsive";
    figure.appendChild(img);
  //create h2 element for title
    const title = document.createElement("h2");
    title.textContent = deal.name;
    text.appendChild(title);
  //create p  element for discount
    const discount = document.createElement("p");
    discount.classList = "discount";
    discount.textContent = `${deal.discountFrom}% - ${deal.discountTo}%`;
    text.appendChild(discount);
  //creaete div for favourite feature
    const fav = document.createElement("div");
    fav.classList = "fav";
    text.appendChild(fav);
  //create p element for favourite label
    const para = document.createElement("p");
    para.textContent = "Favourite:"
    para.classList = "";
    fav.appendChild(para);
  //create input for favourite feature
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList = "favButton";
    fav.appendChild(input);
  }
}

function search(e){
  const items = document.querySelectorAll(".deal-item");
  //go through all deal items
  for (item of items){
    const lowItem = item.textContent.toLowerCase();
    const lowSearch = document.querySelector("#search").value.toLowerCase()

    //check if item exists
    if(lowItem.includes(lowSearch)) {
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }
  }
}
// 
// function notifyMe() {
//   // Let's check if the browser supports notifications
//   if (!("Notification" in window)) {
//     alert("This browser does not support desktop notification");
//   }
//
//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted") {
//     // If it's okay let's create a notification
//     var notification = new Notification("Hi there!");
//   }
//
//   // Otherwise, we need to ask the user for permission
//   else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then(function (permission) {
//       // If the user accepts, let's create a notification
//       if (permission === "granted") {
//         var notification = new Notification("Hi there!");
//       }
//     });
//   }
