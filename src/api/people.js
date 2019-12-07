
class PeoplesApi{
    constructor(params) {
      const { url, endpoint } = params;
      this.endpoint = endpoint;
      this.url = url;
      this.fullURL = this.url  + "/" + this.endpoint;
    }
  
    getList() {
     return fetch(this.fullURL, {})
    }
    getPostsByID(userID) {
      return fetch(this.fullURL +"/"+userID +"/posts", {})
    }
    getByID(userID) {
      return fetch(this.fullURL +"/"+userID, {})
    }
    signFetch(inputs){
        return fetch(`${this.fullURL}`,{
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {if (response.ok) { return response.json() }
            else {throw new Error("Email or Password is incorrect")}
        })
        .then((data) => {
           return data})
        .catch(function (err) {console.log("Error", err);})
       }


    loginFetch(inputs){
      return fetch(`${this.fullURL}/login`,{
          method: "POST",
          body: JSON.stringify(inputs),
          headers: {'Content-Type': 'application/json'}
      })
     }
  

  }

  export default  PeoplesApi;