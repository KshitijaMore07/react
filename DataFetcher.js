import React, {Component} from "react";
class DataFetcher extends Component{

    constructor(props){
        super(props);
        this.state={

            posts:[],
            loading: true
        };
    }

    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>{this.setState({posts:data.slice(0,5),loading:false});
    })
    .catch(error=>{this.setState({error:"Error fetching data", loading: false});
});
    }

    render(){

        const{posts, loading, error}=this.state;

        if(loading){
            return<h2>Loading...</h2>;

        }

        if(error){
            return<h2>{error}</h2>
        }
        return(
            <div>
                <h1>Fetched Posts</h1>
                <ul>
                    {posts.map(post=>(<li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}
export default DataFetcher;