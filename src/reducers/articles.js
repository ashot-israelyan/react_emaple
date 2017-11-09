const articlesReducerDefaultState = [];

export default (state = articlesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.article
            ];
        case 'REMOVE_ARTICLE':
            return state.filter(({_id}) => _id !== action.id);
        case 'EDIT_ARTICLE':
            return state.map(article => {
                if (article._id === action.id) {
                    return {
                        ...article,
                        ...action.updates
                    };
                }

                return article;
            });
        case 'GET_ARTICLES':
            return action.articles;
        default:
            return state;
    }
};