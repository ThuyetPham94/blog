import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/CreateItem';
import Topic from '../components/Example';
import About from '../components/Master';

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