import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import axios from "axios";
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// const [feedback, setFeedback] = (state = [{
//         feeling: 0,
//         understanding:0,
//         support:0,
//         comments:'',
// }])

// const feedback = (state = [{    
//     feeling: 0,
//     understanding:0,
//     support:0,
//     comments:''
//     }], action) => {
//     switch (action.type) {
//         case 'UPDATE_FEEDBACK':
//             console.log('in index.js feedback dispatch key',action.payload)
//             return [...state,
//                 action.payload.key:action.payload.score]
//             ;
//     }
//     return state;
// }


// const updateFeedback = () => {
//     switch (action.type) {
//         case 'UPDATE_FEEDBACK':
//             console.log('in updateFeedback', action.payload)
//             return setFeedback({
//                 ...feedback,
//                 feeling:action.payload.score
//             })
//     }
//     return state;
// }

const feeling = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_FEELING':
            console.log('in index.js FEELING dispatch key',action.payload)
            return action.payload
            ;
    }
    return state;
}

const understanding = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_UNDERSTANDING':
            console.log('in index.js UNDERSTANDING dispatch key',action.payload)
            return action.payload
            ;
    }
    return state;
}

const supported = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_SUPPORTED':
            console.log('in index.js SUPPORTED dispatch key',action.payload)
            return action.payload
            ;
    }
    return state;
}

const comments = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_COMMENTS':
            console.log('in index.js COMMENTS dispatch key',action.payload)
            return action.payload
            ;
    }
    return state;
}

const postToDatabase = (event) => {
    switch (action.type) {
        case 'SUBMIT_FEEDBACK':
            console.log('in postToDatabase')

        axios({
            method: 'POST',
            url: '/feedback',
            data: combineReducers
        })
        .then((response) => {
            console.log('in axios post.then', response);
        })
        .catch((err) => {
            console.log('in axios post catch error in post',err)
        })
}}


// const feedback =  (state = {}, action => {{
//     feeling,
//     understanding,
//     supported,
//     comments
// }});

const store = createStore(
    combineReducers({
      feeling,
      comments,
      understanding,
      supported
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
