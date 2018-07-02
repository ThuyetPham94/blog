import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import CreateItem from '../components/CreateItem';
import DisplayItem from '../components/DisplayItem';
import Master from '../components/Master';
import EditItem from '../components/EditItem';

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={CreateItem}/>
                    <Route exact path='/display' component={DisplayItem}/>
                    <Route exact path='/master' component={Master}/>
                    <Route exact path='/edit-item/:id' component={EditItem}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath