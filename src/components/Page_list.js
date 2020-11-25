import React, { Component } from 'react';
import Pages from './Pages';

class Page_list extends Component {
    constructor(props) {
        super(props);
        this.searchWord = React.createRef();
    }
    sort(evt) {
        evt.preventDefault();
        const target = evt.target;

        this.props.sort(target.name);
    }
    search(evt) {
        evt.preventDefault();
        this.props.search(this.searchWord.current.value);
    }
    render() {
        const data = (this.props.data) ? this.props.data : [];
        var item = data.slice(0, data.length);
        if (this.props.sortCondition) {
            switch (this.props.sortCondition) {
                case 'time': { item.sort(function (a, b) { return (a.time > b.time ? 1 : -1) }); } break;
                case 'title': { item.sort(function (a, b) { return (a.title > b.title ? 1 : -1) }); } break;
            }
        }
        const list = item.map((data) => {
            return (
                <li key={data.id}>
                    <h2>{data.title}</h2>
                    <div>{data.content}</div>
                    <time>{data.time}</time>
                </li>
            );
        });

        return (
            <div>
                <Pages />
                <div>
                    <input type="text" ref={this.searchWord} />
                    <input type="button" value="検索" onClick={this.search.bind(this)} />
                </div>
                <div>
                    <a href="#" className={(this.props.sortCondition === 'time') ? 'selected' : ''} onClick={this.sort.bind(this)} name='time'>新着順</a><br />
                    <a href="#" className={(this.props.sortCondition === 'title') ? 'selected' : ''} onClick={this.sort.bind(this)} name='title'>タイトル順</a>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
export default Page_list;