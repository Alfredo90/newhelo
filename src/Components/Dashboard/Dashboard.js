import axios from 'axios';
import React, {Component} from 'react'
import {connect} from 'react-redux';





class Dashboard extends Component {
    constructor(){
        super();
        this.state ={
            searchBox: '',
            postList: '',
            checkBox: true,
           reset:''
            
        }
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  

   componentDidMount = async () => {

        const { checkBox, searchBox, id } = this.props

    try{
       const posts = await axios.get(`/post?checkBox=${checkBox}&searchBox=${searchBox}&userId=${id}`)
       this.setState({ postList:posts})
    }
    catch(err){
        console.log(err.response.request.response)
    }
   } 

    render() {






        return( 
            <div>
                <form>
                <div>Dashboard</div>
                    <input type='text' 
                    name='searchBox' 
                    onChange={this.handleChange}></input>
                    
                    <button type="submit" onClick={this.searchBox}>Search</button>
                    <button type='reset' onClick={this.searchBox}>Reset</button>
                    tState
                    <h5>My Post</h5>
                    <input type='checkbox' onClick={this.checkBox} ></input>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (Dashboard);
                  
                    
                   

           
