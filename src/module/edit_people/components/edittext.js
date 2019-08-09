import React,{ Component } from 'react';
import actionType from "../../../redux/actions";
import {connect} from "react-redux";

class EditText extends Component {
    constructor(props){
        super(props);
    }
    onInput=(e)=>{
        this.props.onInputs(e.target.value)
    }
    render(){
        console.log( this.props)
        return (
            <div>
                <input type="text"  onInput={this.onInput} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onInputs: (text) => {
            dispatch({type:actionType.showText,text:text});
        }
    }
}
// dispatch一个action，所以需要import 这个action

// connect用于连接状态树和组件，来自于react-redux
export default connect(null,mapDispatchToProps)(EditText);
