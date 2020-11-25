const reducer = function (state, action) {
	switch (action.type) {
		case 'INIT': {
			return action.data;
		}
		case 'SORT': {
			var newState = newState = Object.assign({}, state);
			newState.sortCondition = action.option;
			return newState;
		}
		case 'SEARCH': {
			const word = action.word;
			var newState = newState = Object.assign({}, state);
			newState.searchWord = (word)? word : '';
			return newState;
		}
		case 'POST': {
			var newState = newState = Object.assign({}, state);
			const date = new Date();
			const time = date.toLocaleString();
			const id = newState.data.length;
			const title = action.title;
			const content = action.content;
			newState.data.push({
				id: id, title: title,
				content: content,
				time: time
			});

			return newState;
		}
		default:
			return state;
	}
};
export default reducer;