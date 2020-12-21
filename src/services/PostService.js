export class PostService {
    url = "http://jsonplaceholder.typicode.com/posts";

    getPosts() {
        return fetch(this.url).then(value => value.json());
    }

    getPostID(id) {
        return fetch(this.url + "/" + id).then(value => value.json());
    }
}