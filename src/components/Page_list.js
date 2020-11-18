import React, { Component } from 'react';
import Pages from './Pages';

class Page_list extends Component {
    sort(evt) {
        evt.preventDefault();
        const selected = 'selected';
        const target = evt.target;
        const brothers = target.parentNode.children;

        for (let i = 0; i < brothers.length; i++) { 
            brothers[i].classList.remove(selected);
        }

        this.props.sort(evt.target.name);
        target.classList.add(selected);
    }
    render() {
        const data = (this.props.data) ? this.props.data : [];
        const list = data.map((data) => {
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
                    <a href="#" onClick={this.sort.bind(this)} name='time'>新着順</a><br />
                    <a href="#" onClick={this.sort.bind(this)} name='title'>タイトル順</a>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
export default Page_list;