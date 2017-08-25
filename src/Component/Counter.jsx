import React, { Component } from 'react'
import {increment,decrement} from '../Redux/Action'
import {connect} from 'react-redux';
const buttonStyle = {
    margin: "20px"
}

function Counter({caption, Increment, Decrement, value}){
    return (
            <div>
                <button style={buttonStyle} onClick={Increment}>+</button>
                <button style={buttonStyle} onClick={Decrement}>-</button>
                <span>{caption} count :{value}</span>
            </div>
        )
}
function mapState(state,ownProps){
    return{
        value:state[ownProps.caption]
    }
}
function mapDispatch(dispatch,ownProps){
    return {
        Increment:()=>{
            dispatch(increment(ownProps.caption))
        },
        Decrement:()=>{
            dispatch(decrement(ownProps.caption))
        }

    }
}

export default connect(mapState,mapDispatch)(Counter)