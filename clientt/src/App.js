import './App.scss';
import Signup from './components/Signup/Signup'; 
import Home from './components/Home/Home'; 
import Login from './components/Login/Login'
import { AuthProvider } from './contexts/AuthContext';
// import { Container }from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
import Logout from './components/Logout/Logout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import { FileUpload } from './components/FileUpload/FileUpload';
import List from './components/CologneList/List'
function App() {
  return (
        <Router>
          {/* <Navbar/> */}
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path ='/' component ={Home} />
              <Route path ='/signup' component ={Signup} />
              <Route path ='/login' component ={Login} />
              <Route path ='/logout' component ={Logout} />
              <Route path ='/forgot-password' component ={ForgotPassword}/>
              <Route path ='/upload' component ={FileUpload}/>
              <Route path ='/cologne-list' component ={List}/>
            </Switch>
          </AuthProvider>
        </Router>
    
  );
}

export default App;
