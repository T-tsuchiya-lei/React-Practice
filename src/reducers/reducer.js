const reducer = function (state, action) {
	switch (action.type) {
		case 'INIT': {
			return action.data;
		}
		case 'SORT': {
			if (!state.data) return;
			var newState = newState = Object.assign({}, state);
			var item = newState.data.slice(0, newState.data.length);
			switch (action.option) {
				case 'time': { item.sort(function (a, b) { return (a.time > b.time ? 1 : -1) }); } break;
				case 'title': { item.sort(function (a, b) { return (a.title > b.title ? 1 : -1) }); } break;
			}
			newState.data = item;
			newState.sortCondition = action.option;
			return newState;
		}
		case 'SEARCH': {
			console.log(state);
			if (!state.data) return;
			const word = action.word;
			var res_data = [];
			var newState = newState = Object.assign({}, state);
			var data = newState.data;
			for (let i = 0; i < data.length; i++) {
				if ((data[i].title.indexOf(word) > -1) || (data[i].content.indexOf(word) > -1)) {
					res_data.push(data[i]);
				}
			}
			console.log(word, res_data);
			return res_data;
		}
		case 'POST': {
			var newState = newState = Object.assign({}, state);
			const date = new Date();
			const time = date.toLocaleString();
			const id = newState.data.length;
			const title = (action.title) ? action.title : 'noTitle';
			const content = (action.content) ? action.content : 'noContent';
			newState.data.push({
				id: id, title: title,
				content: content,
				time: time
			});
			console.log("posted by reducer" + " id:" + id);
			return newState;
		}
		default:
			return state;
	}
};
export default reducer;