import React, { Component } from 'react';
import Pages from './Pages';

class Page_post extends Component {
    constructor(props){ 
        super(props);
        this.postTitle = React.createRef();
        this.postContent = React.createRef();
    }
    post(evt) {
        evt.preventDefault();
        this.props.post(this.postTitle.current.value,this.postContent.current.value);
    }
    render() {
        return (
            <div>
                <Pages />
                <form>
                    <div>
                        <div>タイトル</div>
                        <input type="text" name="title" ref={this.postTitle}/>
                        <div>内容</div>
                        <input type="text" name="content" ref={this.postContent}/>
                    </div>
                    <input type="button" value="送信" onClick={this.post.bind(this)} />
                </form>
            </div>
        );
    }
}
export default Page_post;