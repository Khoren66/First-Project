
const fetchArticles = function (callback) { // fetch all articles
  return fetch(
    "http://5d98a52b61c84c00147d70ce.mockapi.io/api/v1/bloggers",
    {
      method: "GET"
    }
  )
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
  return fetch(
    "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users",
    {
      method: "GET"
    }
  )
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
  for (let i = 0; i < data.length; i++) {
    const article = document.createElement('article');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const header = document.createElement('div');
    const articalBody = document.createElement('div');

    author.innerText = data[i].author;
    title.innerText = data[i].title;
    articalBody.innerHTML = data[i].description;

    header.className = 'article_header';
    author.className = "article_author";
    title.className = "article_title";

    header.appendChild(author);
    header.appendChild(title);


    articalBody.className = 'article_body';
    article.className = "one";

    article.appendChild(header);
    article.appendChild(articalBody);
    articlesWrapper.appendChild(article)
  }
}

const showBloggers = function (data) { // show Articles
const bloggersWrapper = document.getElementById("main_aside");
  for (let i = 0; i < data.length; i++) {
    const blogger = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('div');

    avatar.src = data[i].avatar;
    name.innerText = data[i].name;

    blogger.className = 'aside_blogg';
    avatar.className = "aside-avatar";
    name.className = "blogger_name";

    blogger.appendChild(avatar);
    blogger.appendChild(name);


    bloggersWrapper.appendChild(blogger)
  }
}

const onload = function () {
  fetchArticles(function (data) {
    showArticles(data)
  })
  fetchBloggers(function (data) {
    showBloggers(data)
  })
}
