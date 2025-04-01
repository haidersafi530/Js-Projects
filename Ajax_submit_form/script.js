const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    messages: document.getElementById('form-messages')
};

form.submit.addEventListener('click', () => {
    const resquest = new XMLHttpRequest();
    resquest.onload = () => {
        console.log(resquest.responseText);
        let responseObject = null;
        try{
            responseObject = JSON.parse(resquest.responseText);

        }catch (e) {
            console.error('Could not parse JSON');

        }
        if(responseObject){
            handleResponse(responseObject);

        }
    };

    const resquestDatas = `username=${form.username.value}&password=${form.password.value}`;
    console.log(resquestDatas);

    resquest.open('post', '/readme.txt');
    resquest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    resquest.send(resquestDatas);

});

    function handleResponse (responseObject) {
        console.log(responseObject);
        
    }