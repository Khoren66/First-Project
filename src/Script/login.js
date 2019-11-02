window.onload = () => {
    document.getElementById("signUp").onclick = () => {
        window.location.href = 'Registration.html';
    }
}


const urlReg = 'https://it-blog-posts.herokuapp.com/api/people'


const loginFetch = () => {
    let data = {
        email: email.value,
        password: password.value,
    }
    fetch(`${urlReg}/login`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) { return response.json() }
            else {
                email.value = '';
                password.value = '';
                email.placeholder = 'Email or Password is incorrect';
                password.placeholder = 'Email or Password is incorrect';
                throw new Error("Email or Password is incorrect")
            }
        })
        .then((data) => {
            console.log(data)
            localStorage.setItem('data',JSON.stringify(data))
            getFetch(data.id)
        })
        .catch(function (err) {
            console.log("Error", err);
        })
}
const getFetch = (token) => {
    fetch(`https://it-blog-posts.herokuapp.com/api/meetups/?access_token=${token}`, {})
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem('key',JSON.stringify(token))
            window.location.href = 'WorkSpace.html'
            
        })
        .catch(function (err) {
            console.log("Error", err);
        })
}
