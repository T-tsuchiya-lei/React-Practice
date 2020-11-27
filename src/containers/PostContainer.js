import { connect } from 'react-redux';
import action from './../actions/actions';
import Page_post from './../components/Page_post';

const mapDispatchToProps = function(dispatch){
	return {
		post(title,content){
			dispatch(action.post(title,content));
		}
	}
};

const PostContainer = connect(
    null,
    mapDispatchToProps
)(Page_post);

export default PostContainer;
