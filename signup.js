

//1. create the login files 
//2. where we need to send data (masai server);
//register?

// function getInputValue(id){
let getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}


//collect the data ;
// CF to create object of above
// do i need server communication 
//fetch,


function User(n, e, p, u, m, d) {
    this.name = n;
    this.email = e;
    this.password = p;
    this.username = u;
    this.mobile = m;
    this.description = d;


}









// async function Register(event) {
let Register = async (event) => {
    event.preventDefault()
    // let form = document.getElementById('form').value
    const name = getInputValue('name');
    const email = getInputValue('email');
    const password = getInputValue('password');
    const username = getInputValue('username');
    const mobile = getInputValue('mobile');
    const description = getInputValue('description');


    let user_data = new User(name, email, password, username, mobile, description);
    console.log(user_data)



    const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`

    //by default,fetch will make GET request ;

    let res = await fetch(register_url, {
        method: 'POST',
        body: JSON.stringify(user_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data = await res.json();
    console.log(data);

}




//-----------------------------------------------------------------------------------------------------------------

