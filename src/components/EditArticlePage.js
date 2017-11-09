import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startEditArticle, startRemoveArticle } from '../actions/articles';

export class EditArticlePage extends React.Component {
    onSubmit = article => {
        this.props.startEditArticle(this.props.article._id, article);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveArticle({ id: this.props.article._id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title">Edit Expense</h1>
                    </div>
                </div>
                <div className="container">
                    <ArticleForm
                        article={this.props.article}
                        onSubmit={this.onSubmit}
                    />
                    <button className="btn btn-success" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    article: state.articles.find(article => article._id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
    startRemoveArticle: data => dispatch(startRemoveArticle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);