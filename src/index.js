import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);


class Main extends Component {
    constructor(props){
      super(props);
    }
    
    render (){
      return (<Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>);
    }
}

ReactDOM.render(
  <Main />
  , document.querySelector('.container'));
