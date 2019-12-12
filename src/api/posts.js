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
    return fetch(this.fullURL+"?access_token="+Storage.get("token"),{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    }).then(res=>res.json())
    .catch(err=>console.log(err))
  }
edit(post){
  return fetch(this.fullURL,{
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
})
}

  remove(id) {
    return fetch(this.fullURL+"/"+id,{
        method: "DELETE",
    }).then(res=>res.json())
    .catch(err=>console.log(err))
  }

}

export default PostsApi;