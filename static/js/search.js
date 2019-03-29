window.addEventListener('load', init);
function init(){
  //event listener to happen on any change of search bar
  document.querySelector("#search").addEventListener('input',search);
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
