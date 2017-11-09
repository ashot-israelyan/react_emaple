import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ id, title, author, body }) => (
    <Link className="list-item" to={`/article/${id}`}>
        <div>
            <h1 className="list-item__title">{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
        </div>
    </Link>
);

export default Article;