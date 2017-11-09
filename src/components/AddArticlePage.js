import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startAddArticle } from '../actions/articles';

export class AddArticlePage extends React.Component {
    onSubmit = article => {
        this.props.startAddArticle(article);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-header">Add Article</h1>
                    </div>
                </div>
                <div className="container">
                    <ArticleForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startAddArticle: article => dispatch(startAddArticle(article))
});

export default connect(undefined, mapDispatchToProps)(AddArticlePage);