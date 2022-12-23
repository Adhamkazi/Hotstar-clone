
// async function login(event){
let login = async (event) => {
    event.preventDefault();
    let login_data = {
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value,
    };


    let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`

    // console.log(login_data)

    let res = await fetch(login_url, {

        method: 'POST',
        body: JSON.stringify(login_data),

        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data = await res.json();
    let token = data.token;
    console.log(data);
    getProfile(login_data.username, token)


}


// async function getProfile(username,token){
let getProfile = async (username, token) => {
    //url, username , token

    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api, {
        headers: {
            'Content-Type': 'application/json',

            Authorization: `Bearer ${token}`,

        },
    });

    let data = await res.json();
    console.log(data);
    if (data == data) {
        window.location.href = './index.html'
    } else {
        alert('Please Enter Correct detail')
    }
}

