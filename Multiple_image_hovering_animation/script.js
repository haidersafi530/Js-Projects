var elems = document.querySelectorAll('.elem');


elems.forEach(function(val){

    val.addEventListener('mouseenter', function(){
        console.log(val.childNodes[3]);
        val.childNodes[3].style.display = "block";
    });
    val.addEventListener('mouseleave', function(){
        console.log("Leaved")
        val.childNodes[3].style.display = "none";
    })

});

