//import {newURl} from './LoadData';
const newURl = 'https://it-blog-posts.herokuapp.com/api/';
const dataLocalS = JSON.parse(localStorage.getItem('data'));
window.onload = () => {
    getUserPosts();
    document.getElementById('link_sign_out').onclick = () => {
        localStorage.clear();
    }
}

const createPost = function () {
    const postTitle = document.getElementById('title');
    const postDescription = document.getElementById('discription_text');
    const postAuthor = document.getElementById('workSpace_name');
    const dataPosts = {
        title: postTitle.value,//.trim(),
        description: postDescription.value.trim(),
        author: postAuthor.innerText.trim(),
        personId: dataLocalS.userId
    }
    console.log(dataPosts)
    if (postDescription.value.trim() === '' || postTitle.value.trim() === '') {
        postDescription.style.borderColor = 'red';
        postDescription.placeholder = 'Write a description';
        postTitle.style.borderColor = 'red';
        postTitle.placeholder = 'Write a title';
        return
    }
    fetch(`${newURl}posts?access_token=${dataLocalS.id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPosts)
    }
    )
        .then((response) => {
            if (response.ok) {
                postDescription.value = '';
                postTitle.style.borderColor = '#ced4da';
                postDescription.style.borderColor = '#ced4da';
                postTitle.value = '';
                document.getElementById("close").click();
                location.reload();
            }
        });
}

const getUserPosts = () => {
    fetch(`${newURl}people/${dataLocalS.userId}/posts`, {})
        .then((response) => response.json())
        .then((data) => {
            fillUserPosts(data);
            return data
        })
}

const fillUserPosts = (data) => {
    const userPostWrapper = document.getElementById("section_list");
    let tempalete = ''
    for (let i = 0; i < data.length; i++) {
        let row = `
        <article class='one'>    
        <div class='article_header'>
        <div>${data[i].title}</div>
        </div>
        <div class='article_body'>${data[i].description}</div>
        </article>`
        tempalete+=row;
    }
    userPostWrapper.innerHTML=tempalete;
}