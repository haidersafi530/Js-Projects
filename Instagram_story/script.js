var arr = [
   {

      dp: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1489913590284-9269438bb411?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

   },
   {
      dp: "https://images.unsplash.com/photo-1489913590284-9269438bb411?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVscyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
   },
   {
      dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVscyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
   },
   {
      dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVscyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
   },

];

var storiyan = document.querySelector('#storiyan');
var clutter = "";
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
                  <img id="${idx}" src="${elem.dp}" alt="">       
               </div>`
})
storiyan.innerHTML = clutter;
storiyan.addEventListener('click',function(dets){
   document.querySelector('#full-screen').style.display = "block";
   document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;
   setTimeout(function(){
      document.querySelector('#full-screen').style.display = "none"; 
   }, 3000)
   // var value = arr[dets.target.id].story
});