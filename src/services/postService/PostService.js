export class PostService{
    url='http://jsonplaceholder.typicode.com/posts'
    getAllPost(){
      return   fetch(this.url).then(value => value.json()).then(value => value)
}
}

