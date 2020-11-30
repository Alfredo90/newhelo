import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducer'
import axios from 'axios';







class Nav extends Component {



    logout = () => {
        axios.post('/auth/logout')
    this.props.logoutUser();
     this.props.history.push('/');
    }

    render() {
        console.log(this.props)

        return(
            <div>

            <div>
                {/* <img src={this.props.profilePic} alt={this.props.username} ></img> */}
                <img src={this.props.profilePic} alt={this.props.username} ></img>
            </div>
                <button><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/post/:postid'>New Post</Link></button>
                <button><Link to='/'>Logout</Link></button>
                
                {/* <button onClick={this.props.logoutUser} >Logout</button> */}
                
            </div>

        )
    }
}
const mapStateToProps = state => state
export default connect (mapStateToProps, {logoutUser})(Nav);
