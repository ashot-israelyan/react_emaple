import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startGetArticles }from './actions/articles';
import './styles/main.css';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startGetArticles()).then(() => {
    render(jsx, document.getElementById('app'));
});