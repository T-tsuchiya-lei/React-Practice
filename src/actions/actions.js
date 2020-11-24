const action = {
	init(data){
		return {
			type : 'INIT',
			data : data
		}
	},
	sort(option) { 
		return {
			type: 'SORT',
			option: option
		};
	},
	search(word) {
		return {
			type: 'SEARCH',
			word: word
		}
	},
	post(title, content) {
		return {
			type : 'POST',
			title: title,
			content: content
		};
	}
};
export default action;