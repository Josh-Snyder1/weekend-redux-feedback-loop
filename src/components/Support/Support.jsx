import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', document.getElementById("support_score").value);
        dispatch({
            type: 'UPDATE_SUPPORTED',
            payload: 
                document.getElementById("support_score").value
        })
        history.push('/comments')
    }

    return(
        <>
        <h3>How well are you being supported?</h3>
    
            <input
                required
                type="number"
                id="support_score"
                min="0"
                max="5"
            />
            <button type="submit" onClick={(event) =>  handleSubmit(event)}>
                Next
            </button>

        </>
    )
}
export default Support;