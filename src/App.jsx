import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import routes from './config/routes';
class App extends Component{
    render() {
        return <Route>
            {
                routes((route,index)=>{
                    return <Route {...route} key={index}/>;
                })
            }
        </Route>
    }
}
export default App;