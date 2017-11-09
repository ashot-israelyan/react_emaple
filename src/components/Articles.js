import React from 'react';
import {connect} from 'react-redux';
import Article from './Article';

const Articles = props => (
    <div className="container">
        <div className="list-header">
            <div className="show-for-mobile">Articles</div>
        </div>
        <div className="list-body">
            {
                props.articles.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No articles</span>
                    </div>
                ): (
                    props.articles.map(article => {
                        return <Article key={article._id} {...article} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

export default connect(mapStateToProps)(Articles);