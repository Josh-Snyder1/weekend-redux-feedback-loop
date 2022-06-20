import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', document.getElementById("understanding_score").value);
        dispatch({
            type: 'UPDATE_UNDERSTANDING',
            payload: 
                document.getElementById("understanding_score").value
        })
        history.push('/support')
    }

    return(
        <>
        <h3>How well are you understanding the content?</h3>

            <input
                required
                type="number"
                id="understanding_score"
                min="0"
                max="5"
            />
            <button type="submit" onClick={(event) =>  handleSubmit(event)}>
                Next
            </button>

        </>
    )
}
export default Understanding;