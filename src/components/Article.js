import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ _id, title, author, body }) => (
    <div className="panel panel-success">
        <div className="panel-heading">
            <Link className="list-item" to={`/article/${_id}/edit`}>
                <h2>
                    {title}
                </h2>
            </Link>
        </div>
        <div className="panel-body">
            <h2>{author}</h2>
            <p className="lead">{body}</p>
        </div>
    </div>
);

export default Article;