import React,{ Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        let canShow=false;
        if(nextProps.todo.length>0){
            nextProps.todo.map(item=>{
                if(item.text==="666"){
                    canShow=true;
                }
            })
        }
        return canShow
    }
    render(){
        const list = this.props.todo;
        console.log(this.props);
        return (
            <ul>
                {
                    list.map((value,index)=>{
                        return <li key={index}>{value.text}</li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        edit:state.edit,
        todo:state.todo
    };
};

export default connect(mapStateToProps,null)(TodoList);
