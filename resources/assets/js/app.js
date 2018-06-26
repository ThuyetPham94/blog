
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React  Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './routes/RouterPath';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
      return (
        <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/topic'}>Topic</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
                <RouterPath />
          </div>
        </HashRouter >
      )
  }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Example/>,
        document.getElementById('example'));
}
