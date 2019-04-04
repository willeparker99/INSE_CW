window.addEventListener('load', init);
function init(){
  //event listener to happen on any change of search bar
  document.querySelector("#search").addEventListener("input",search);
  //create deals
  createDeals();
}
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  localStorage.setItem("googleID",profile.getId());
}
// function test(){
//   return localStorage.getItem("googleID");
// }
async function createDeals(){
  const dealList = await fetch("/deals");
  const deals = await dealList.json();
  const favList = await fetch(`/fav/${localStorage.getItem("googleID")}`);
  const savedFav = await favList.json();
  const row = document.querySelector(".row");


  for (deal of deals){
  //create containter
    const container = document.createElement("div");
    container.classList = "col-lg-4 col-md-4 col-sm-6";
    row.appendChild(container);
  //creater anchor element
    const link = document.createElement("div");
    //link.href = deal.link;
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
    img.src = deal.url;
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
    const fav = document.createElement("form");
    fav.id = `deal${deal.id}`;
    fav.classList = "fav";
    fav.action = "/favUp";
    fav.method = "post";
    text.appendChild(fav);
  //create p element for favourite label
    const lab = document.createElement("label");
    lab.textContent = "Favourite:"
    fav.appendChild(lab);
  //create input for favourite feature
    const input = document.createElement("input");
    for (item of savedFav){
      console.log(item.DealID,deal.id);
      if (item.DealID == deal.id){
        input.checked = true;
      }
    }
    input.type = "checkbox";
    input.classList = "favButton";
    input.id = deal.id;
    input.addEventListener("change",favouriteItem);
    fav.appendChild(input);
  // Create share button
    const share = document.createElement("div");
    const shareIMG_FACEBOOK = document.createElement("img");
    const shareIMG_TWITTER = document.createElement("img");
    share.appendChild(shareIMG_FACEBOOK);
    share.appendChild(shareIMG_TWITTER);
    shareIMG_FACEBOOK.src = "../img/fb_icon.png";
    shareIMG_TWITTER.src = "../img/twitter_icon.png";
    shareIMG_FACEBOOK.style.width = "20px";
    shareIMG_FACEBOOK.style.height = "20px";
    shareIMG_FACEBOOK.style.marginLeft = "10px";
    shareIMG_TWITTER.style.width = "20px";
    shareIMG_TWITTER.style.height = "20px";
    shareIMG_TWITTER.style.marginLeft = "10px";
    share.style.display = "inline-flex";
    fav.appendChild(share);
    shareIMG_FACEBOOK.addEventListener("click", function () { shareURL(`http://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=${deal.name}`)});
    shareIMG_TWITTER.addEventListener("click", function(){shareURL(`https://www.twitter.com/share?text=I found this amazing deal on&url=${window.location.href}&hashtags=StudentDeals`)})
  }
}
function shareURL(url){
  window.open(url);
}
async function getFav(){
  if (localStorage.getItem("googleID")){
    const favList = await fetch("/fav/"+usr);
  }

  const fav = await dealList.json();

}
async function favouriteItem(e){
  if (localStorage.getItem("googleID")){
    if (e.target.checked){
      window.location.href = `/upFav/${localStorage.getItem("googleID")}/${e.target.id}`;
    }
    else{
      console.log("remove");
      window.location.href = `/remFav/${localStorage.getItem("googleID")}/${e.target.id}`;
    }
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
