const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const showAllBtn = document.getElementById('showAllBtn');
const searchBox = document.getElementById('searchBox');
const items = document.querySelectorAll('#itemList li');

searchBtn.addEventListener('click', function(){
    let searchTerm = searchBox.value.toLowerCase();
    items.forEach(function (item) {
        if(item.innerText.toLowerCase().includes(searchTerm)){
            item.style.display = "list-item";
            item.style.color = "green";
        }else{
            item.style.display = 'none';
        }
    });
});

//clear 
clearBtn.addEventListener('click', function () {
    searchBox.value = "";
    items.forEach(function (item) {
        item.style.display = "none";
    });
});

//show all items
showAllBtn.addEventListener("click", function () {
    items.forEach(function (item) {
      item.style.display = "list-items";
      item.style.color = "red";
    });
  });

