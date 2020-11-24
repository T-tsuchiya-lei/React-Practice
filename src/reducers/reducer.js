const reducer = function (state, action) {
	switch (action.type) {
		case 'INIT': {
			return action.data;
		}
		case 'SORT': {
			var newState = newState = Object.assign({}, state);
			var item = newState.data.slice(0, newState.data.length);
			switch (action.option) {
				case 'time': { item.sort(function (a, b) { return (a.time > b.time ? 1 : -1) }); } break;
				case 'title': { item.sort(function (a, b) { return (a.title > b.title ? 1 : -1) }); } break;
			}
			newState.data = item;
			return newState;
		}
		case 'POST': {
			var newState = newState = Object.assign({}, state);
			const date = new Date();
			const time = date.toLocaleString();
			const id = newState.data.length;
			const title = (action.title) ? action.title : 'noTitle';//action.title || 'noTitle'ともかける。ただし、仕様的にnoTitleでPostできちゃダメだから、空の時はバリデーションを入れるようにしよう。
			const content = (action.content) ? action.content : 'noContent';//上と同じく
			newState.data.push({
				id: id, title: title,//改行した方が見やすい
				content: content,
				time: time
			});
			console.log("posted by reducer"+" id:"+id);//コンソールは消しておこう。
			return newState;
		}
		default:
			return state;
	}
};
export default reducer;
