import axios from 'axios';
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {builder} from '../../redux/reducer';


class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    register = async (e) => {
        e.preventDefault();
        const { username, password} = this.state
        try{
            const user = await axios.post('/auth/register', {username, password});
            this.props.builder(user.data.id, user.data.username, user.data.profile_pic);
        }
        catch(err){
            alert(err.response.request.response)
        }
    }

    login = async (e) => {
        e.preventDefault();
        const { username, password} = this.state
        try{
            const user = await axios.post('/auth/login', {username, password});
            this.props.builder(user.data.id, user.data.username, user.data.profile_pic);
            this.props.history.push('/dashboard')
        }
        catch(err){
            alert(err.response.request.response)
        }
    }

   
   
    


    
    
    render() {
        const {username, password} = this.state;


        return(
            <div>
                <h3>Auth</h3>
                <form >
            <input name="username" 
            value={username} 
            placeholder="Username" 
            onChange={ e => this.changeHandler(e)}/>
          
            <br/>
            <input name="password" 
            value={password} 
            type='password'
            placeholder="Password" 
            onChange={ e => this.changeHandler(e)}/>
            <br/>
            </form>
            <button onClick={e => this.register(e)}>Register</button>
            <button  onClick={e => this.login(e)} >Login</button>




            </div>
            


        )
    }
}

export default connect(null, {builder}) (Auth);