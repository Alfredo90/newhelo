import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';







class Nav extends Component {

    render() {
        console.log(this.props)

        return(
            <div>

            <div>
                <img src={this.props.profilePic} alt={this.props.username} ></img>
            </div>
                <button><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/post'>New Post</Link></button>
                <button><Link to='/'>Logout</Link></button>
            </div>

        )
    }
}
const mapStateToProps = state => state
export default connect (mapStateToProps)(Nav);
