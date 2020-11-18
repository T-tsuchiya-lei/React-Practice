import { connect } from 'react-redux';
import App from './../components/App';
import action from './../actions/actions';

const mapDispatchToProps = function(dispatch){
	return {
		init(data){
			dispatch(action.init(data));
		}
	}
};
const MainContainer = connect(
	null,
	mapDispatchToProps
)(App);

export default MainContainer;