import React, { Component } from 'react';
import Pages from './Pages';
import history from './../history';

class Page_post extends Component {
    constructor(props) {
        super(props);
        this.postTitle = React.createRef();
        this.postContent = React.createRef();
    }
    post(evt) {
        evt.preventDefault();
        const title = this.postTitle.current;
        const content = this.postContent.current;
        if (title.value && content.value) {
            this.props.post(title.value, content.value);
            history.push('/List');
        }
        else {
            alert("Please fill in the boxes.")
        }
    }
    render() {
        return (
            <div>
                <Pages />
                <form>
                    <div>
                        <div>タイトル</div>
                        <input type="text" name="title" ref={this.postTitle} />
                        <div>内容</div>
                        <input type="text" name="content" ref={this.postContent} />
                    </div>
                    <input type="button" value="送信" onClick={this.post.bind(this)} />
                </form>
            </div>
        );
    }
}
export default Page_post;