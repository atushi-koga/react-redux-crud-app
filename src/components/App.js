import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from "../actions";

class App extends Component {
    render() {
        const props = this.props;

        return (
            <div>
                <div>
                    <div>value: {props.value}</div>
                </div>
                <button onClick={props.increment}>increment</button>
                <button onClick={props.decrement}>decrement</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({value: state.count.value});
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

// connectメソッドの説明
// mapStateToProps
// Stateが変更されてStoreにそれが伝えられたときに mapStateToPropsは毎回実行される
// mapDispatchToProps
// StoreにStateの変更を知らせるために、Action Creatorsを設定する
// App
// 取得したデータをpropsとして扱いたいcomponentを指定
export default connect(mapStateToProps, mapDispatchToProps)(App);