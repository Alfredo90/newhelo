import React, {Component} from 'react';






class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: '',
         

        }
      
    }
   
    render() {
        return(
            <div>
            <h3>Post</h3>
            
            <input type='text' name="Title" ></input>
            <br/>
            <input type='text' name="Title" ></input>
            <br/>
            <input type='text' name="Title"  ></input>
            <br/>
            <button  >Post</button>
            </div>
        )
    }
}

export default Post;