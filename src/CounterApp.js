import React, {Component} from 'react';

const App = () => <Counter/>;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment = () =>
        this.setState(prevState => ({
            count: prevState.count + 1
        }));


    decrement = () =>
        this.setState(prevState => ({
            count: prevState.count - 1
        }));

    render() {
        return (
            <div>
                <div>
                    <div>total: {this.state.count}</div>
                </div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default App;
