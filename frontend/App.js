/**
 * Created by zhongwei on 16/7/4.
 */
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import TopicList from './component/TopicList';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children ? this.props.children : <TopicList />}
                <Footer />
            </div>
        )
    }
}
