import Storage from '../services/Storage'
class PostsApi {

  constructor(params) {

    const { url, endpoint } = params;
    this.endpoint = endpoint;
    this.url = url;
    this.fullURL = this.url + "/" + this.endpoint;
  }

  getList() {
    return fetch(this.fullURL, {})
  }

  getByID({ id }) {
    return fetch(this.fullURL + "/" + id, {})
  }

  post(newPost) {
    console.log(this.fullURL+"?access_token="+Storage.get("userId"))
    return fetch(this.fullURL+"?access_token="+Storage.get("token"),{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    }).then(res=>res.json())
    .catch(err=>console.log(err))
  }

}

export default PostsApi;