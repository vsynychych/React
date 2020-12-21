export class CommentService {
    url = "http://jsonplaceholder.typicode.com/comments";

    getComments() {
        return fetch(this.url).then(value => value.json().then(value => value))
    }

    getCommentID(id) {
        return fetch(this.url + "/" + id).then(value => value.json().then(value => value))
    }
}