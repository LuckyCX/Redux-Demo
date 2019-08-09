import React,{ Component } from 'react';
import {connect} from "react-redux";
import store from  "../../../redux/store";

class ShowText extends Component {
    render(){
        let list =this.props.todo;
        console.log(this.props)
        console.log(store.getState())

       // let unSub= store.subscribe(()=>{
       //      console.log("ShowText监听到一条变化")
       //     unSub()
       //  });
        return (
            <div>
                <div>{this.props.edit}</div>
                <div>
                    {
                        list.map((value,index)=>{
                            return <li key={index}>{value.text}</li>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {edit:state.edit,todo:state.todo};
};

export default connect(mapStateToProps,null)(ShowText);
