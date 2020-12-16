export class  CommentsService{
    url='http://jsonplaceholder.typicode.com/comments'
    getComments(){
       return fetch(this.url).then(value => value.json()).then(value => value);
    }
}