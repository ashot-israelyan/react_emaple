import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ _id, title, author, body }) => (
    <Link className="list-item" to={`/article/${_id}`}>
        <div>
            <h1 className="list-item__title">{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
        </div>
    </Link>
);

export default Article;