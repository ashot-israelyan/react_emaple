import React, { Component } from 'react';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.article ? props.article.title : '',
            author: props.article ? props.article.author : '',
            body: props.article ? props.article.body : ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({author}));
    };

    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({body}));
    };

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.title || !this.state.author || !this.state.body) {
            this.setState(() => ({error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                author: this.state.author,
                body: this.state.body
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onTitleChange}
                />
                <input
                    type="text"
                    placeholder="Author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onAuthorChange}
                />
                <textarea
                    placeholder="Body"
                    className="form-control"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                />
                <div>
                    <button className="btn btn-success">Save Article</button>
                </div>
            </form>
        )
    }
}