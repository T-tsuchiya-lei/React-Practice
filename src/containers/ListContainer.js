import { connect } from 'react-redux';
import action from './../actions/actions';
import Page_list from './../components/Page_list';

const mapStateToProps = state => ({data: state.data });

const mapDispatchToProps = function(dispatch){
	return {
		sort(data){
			dispatch(action.sort(data));
		}
	}
};

const PageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page_list);

export default PageList;