    function getGrade(score) {
        if(score >= 50 && score <= 100){
            return "a"
        }
        else if (score <= 49){
            return "fail";
        }
        else {
            return "invalid";
        };
    }
    let result = getGrade(prompt("enter your marks abc not allowed"));
    document.querySelector('#output').innerHTML = result;