import axios from 'axios';

export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

export const startAddArticle = (articleData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
            author = '',
            body = ''
        } = articleData;

        const article = {title, author, body};

        return dispatch(addArticle(article));
    }
};

export const removeArticle = ({id} = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const startRemoveArticle = ({id} = {}) => {
    return (dispatch) => {
        dispatch(removeArticle({id}));
    }
};

export const editArticle = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditArticle = (id, updates) => {
    return (dispatch) => {
        dispatch(editArticle(id, updates));
    }
};

export const getArticles = (articles) => ({
    type: 'GET_ARTICLES',
    articles
});

export const startGetArticles = () => {
    return (dispatch) => {

        return axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {'Access-Control-Allow-Origin': '*'},
        })
            .then(articles => {
                console.log(articles.data);
                dispatch(getArticles(articles.data));
            });
    }
};