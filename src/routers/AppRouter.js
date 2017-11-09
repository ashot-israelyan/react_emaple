import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Articles from '../components/Articles';
import Article from '../components/Article';
import AddArticlePage from '../components/AddArticlePage';
import EditArticlePage from '../components/EditArticlePage';
import { Header } from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Header/>
            <Route path="/" component={Articles} />
            <Route path="/article/:id" component={Article}/>
            <Route path="/article/create" component={AddArticlePage}/>
            <Route path="/article/:id/edit" component={EditArticlePage}/>
        </Switch>
    </Router>
);

export default AppRouter;