const firstname = document.getElementById('reg_firstName');
const lastname = document.getElementById('reg_lastName');


const password = document.getElementById('password');
const email = document.getElementById('email');
const city = document.getElementById('city');
const urlReg = 'https://it-blog-posts.herokuapp.com/api/people'
const regFetch = () => {
    let data = {
        lastname: lastname.value,
        firstname: firstname.value,
        password: password.value,
        email: email.value,
        city: city.value
    }
    console.log(data);

    fetch(`${urlReg}`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            window.location.href = 'Login.html';
            return data;
        })
        .catch(function (err) {
            console.log("Error", err);
        })
}