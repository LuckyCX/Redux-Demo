import React, { Component } from 'react';
import { createStore } from 'redux';
import {  connect } from 'react-redux';

class App extends Component {
    render() {
        const { PayIncrease, PayDecrease } = this.props;
        return (
            <div className="App">
                <div className="App">
                    <h2>当月工资为{this.props.tiger.b}</h2>
                    <button onClick={PayIncrease}>升职加薪</button>
                    <button onClick={PayDecrease}>迟到罚款</button>
                </div>
            </div>
        );
    }
}



//这是action
const increase = {
    type: '涨工资'
}
const decrease = {
    type: '扣工资'
}


//需要渲染什么数据
function mapStateToProps(state) {
    return {
        ...state,
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: increase.type }),
        PayDecrease: () => dispatch({ type: decrease.type })
    }
}

//连接组件
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
