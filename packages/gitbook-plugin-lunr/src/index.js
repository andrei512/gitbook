const GitBook = require('gitbook-core');
const lunr = require('lunr');

/**
 * Search in the local index
 * @param  {String} query
 * @return {Promise<List>}
 */
function searchHandler(query) {
    return [
        { title: 'Hello world' }
    ];
}

module.exports = GitBook.createPlugin({
    init: (dispatch, getState, actions) => {
        const { search } = actions;
        dispatch(search.registerHandler('lunr', searchHandler));
    },
    reduce: (state, action) => state
});