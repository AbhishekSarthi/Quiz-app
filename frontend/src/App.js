import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {
    return (
        <div>
            <div className="App"></div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
