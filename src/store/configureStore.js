import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articlesReducer from '../reducers/articles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers({
            articles: articlesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
};