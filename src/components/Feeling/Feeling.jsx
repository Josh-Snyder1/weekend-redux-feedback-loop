import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();

    const updateFeedback = useSelector(store => store.updateFeedback)

    // handleFeedbackChange(feedback);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', document.getElementById("feeling_score").value);
        dispatch({
            type: 'UPDATE_FEELING',
            payload: 
                document.getElementById("feeling_score").value
                
        })
        history.push('/understanding')
    }

    // const updateFeedback = (property, evt) => {
    //     setFeedbackToAdd({
    //         ...feedbackToAdd,
    //         [property]:evt
    //     })
    // }

    return(
        <>
        <h3>How are you feeling today?</h3>
        
            <input
                required
                type="number"
                id="feeling_score"
                min="0"
                max="5"
            />
            <button type="submit" onClick={(event) =>  handleSubmit(event)}>
                Next
            </button>
        </>
    )
}
export default Feeling;