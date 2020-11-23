import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {console.log(props)}
      {props.location.pathname === '/' ? null: <Nav/>}
      {routes}
    
    </div>
  );
}

export default withRouter(App);

