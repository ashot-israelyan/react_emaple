import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Articles from '../components/Articles';
import AddArticlePage from '../components/AddArticlePage';
import EditArticlePage from '../components/EditArticlePage';
import { Header } from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={Articles} />
                <Route path="/article/create" component={AddArticlePage}/>
                <Route path="/article/:id/edit" component={EditArticlePage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;