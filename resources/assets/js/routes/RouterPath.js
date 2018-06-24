import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../views/Home';
import Topic from '../views/Topic';
import About from '../views/About';

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/topic' component={Topic}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath