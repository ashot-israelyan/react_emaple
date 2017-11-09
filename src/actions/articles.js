import axios from 'axios';

export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

export const startAddArticle = (articleData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            author = '',
            body = ''
        } = articleData;

        const article = {title, author, body};

        return axios.post('/api/articles/add', {title, author, body})
            .then(result => dispatch(addArticle(article)));
    }
};

export const removeArticle = ({id} = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const startRemoveArticle = ({id} = {}) => {
    return (dispatch) => {
        return axios.delete(`/api/articles/${id}`).then(result => dispatch(removeArticle({id})));
    }
};

export const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
});

export const startEditArticle = (id, updates) => {
    return (dispatch) => {
        return axios.put(`/api/articles/${id}`, {...updates}).then(() => dispatch(editArticle(id, updates)));
    }
};

export const getArticles = (articles) => ({
    type: 'GET_ARTICLES',
    articles
});

export const startGetArticles = () => {
    return (dispatch) => {
        return axios.get('/api/articles').then(response => dispatch(getArticles(response.data.articles)));
    }
};