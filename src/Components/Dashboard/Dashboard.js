// import axios from 'axios';
import React, {Component} from 'react'
import {connect} from 'react-redux';





class Dashboard extends Component {
    constructor(){
        super();
        this.state ={
            searchBox: '',
            postList: [],
            checkBox: true
         
            
        }
        this.checkBox = this.checkBox.bind(this)
        this.searchBox = this.searchBox.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkBox() {
        this.setState({
            checkBox: !this.state.checkBox
        })
    }

    searchBox() {
        this.setState({
            searchBox: this.state.searchBox
        })
    }



    render() {
        console.log(this.state.checkBox)
        let mappedPosts = this.state.postList.map(post => (
            <div>
                <h1>{post.title}</h1>
                <h1>{post.username}</h1>
                <img alt={`${post.username}'s profile`} src={post.profilePic}/>
            </div>
        ))




        return( 
            <div>
                <form>
                <div>Dashboard</div>
                    <input type='text' 
                    name='searchBox' 
                    onChange={this.handleChange}></input>
                    
                    <button type="search" onChange= {this.searchBox}>Search</button>
                    <button type='reset' onClick={this.searchBox}>Reset</button>
                   
                    <h5>My Post</h5>
                    <input type='checkbox' defaultChecked onChange={this.checkBox} ></input>
                </form>
                {mappedPosts}
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (Dashboard);
                  
                    
                   

           
