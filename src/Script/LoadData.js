const newURl = 'https://it-blog-posts.herokuapp.com/api/posts/';

const fetchArticles = function (callback) { // fetch all articles
  return fetch(newURl, {})
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

const fetchBloggers = function (callback) {
  return fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users", { method: "GET" })
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

const showArticles = function (data) { // show Articles
  const articlesWrapper = document.getElementById("section_index");
  let tempalete = ''
  for (let i = 0; i < data.length; i++) {
    let row = `
        <article class='one'>    
        <div class='article_header'>
        <div class='article_author'>${data[i].author}</div>
        <div class='article_title'>${data[i].title}</div>
        </div>
        <div class='article_body'>${data[i].description}</div>
        </article>`
    tempalete += row;
  }
  articlesWrapper.innerHTML = tempalete;
}

const showBloggers = function (data) { // show Articles
  const bloggersWrapper = document.getElementById("main_aside");
  let tempalete = ''
  for (let i = 0; i < data.length; i++) {
    let row = `   
    <div class='aside_blogg'>
    <img src ='${data[i].avatar}' class='aside-avatar'></img>
    <div class='blogger_name'>${data[i].name}</div>
    </div>`
    tempalete += row;
  }
  bloggersWrapper.innerHTML = tempalete;
}
const link = () => {
  if (localStorage.getItem('key') !== null) {
    const link_href = document.getElementById('link_login_profile');
    link_href.href = 'WorkSpace.html';
    link_href.innerHTML = 'My Profile';
  }
}
const onload = function () {
  fetchArticles(function (data) {
    showArticles(data)
  })
  fetchBloggers(function (data) {
    showBloggers(data)
  })
  link();
}

