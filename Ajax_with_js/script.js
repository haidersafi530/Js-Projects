function loadData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            document.getElementById('demo').innerHTML = this.responseText;
        }
       
    };
    xhttp.open('GET','../readme.txt',true);
    xhttp.send();

}
function loadData1() {
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('').innerHTML = this.responseText;
        }
    }
    xhttp1.open('GET', '', true);
    xhttp1.send();
}