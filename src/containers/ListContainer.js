import { connect } from 'react-redux';
import action from './../actions/actions';
import Page_list from './../components/Page_list';

const mapStateToProps = function (state) {
	return {
		data : (state.data) ? state.data : [] ,
		sortCondition: (state.sortCondition) ? state.sortCondition : '',
		searchWord: (state.searchWord) ? state.searchWord : ''
	}
};

const mapDispatchToProps = function (dispatch) {
	return {
		sort(data) {
			dispatch(action.sort(data));
		},
		search(word) {
			dispatch(action.search(word));
		}
	}
};

const PageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page_list);

export default PageList;//エクスポートしているものと、ファイル名を同じにしておくとわかりやすい
