class Post{

    constructor(id,title,body){

        this.id=id;

        this.title=title;

        this.body=body;

    }

}

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            });
}
    componentDidMount() {
        this.loadPosts();
    }
    render() {
          
}
componentDidCatch(error,info) {
        alert("Error : " + error);
    }
}

export default Post;