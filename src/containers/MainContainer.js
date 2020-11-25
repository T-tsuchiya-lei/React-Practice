import { connect } from 'react-redux';
import App from './../components/App';
import action from './../actions/actions';

const mapDispatchToProps = function(dispatch){
	return {
		init(data){
			dispatch(action.init(data));
			dispatch(action.sort('time'));
		}
	}
};
const MainContainer = connect(
	null,
	mapDispatchToProps
)(App);

export default MainContainer;