import PeoplesApi from './people';
import PostsApi from './posts';

class Api {
    constructor({url}) {
      this.posts = new PostsApi({
          url,
          endpoint: "posts"
        });
      this.peoples = new PeoplesApi({
        url,
        endpoint: "people"
      });
    }
  }
// const api = new Api({
//     url: "https://it-blog-posts.herokuapp.com/api",
//   });
//   //console.log(api.items)
  export default new Api({url:"https://it-blog-posts.herokuapp.com/api"});