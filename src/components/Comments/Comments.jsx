import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', document.getElementById("comments_input").value);
        dispatch({
            type: 'UPDATE_COMMENTS',
            payload: 
                document.getElementById("comments_input").value
        })
        history.push('/review')
    }

    return(
        <>
        <h3>Any comments you want to leave?</h3>

            <input
                required
                type="text"
                id="comments_input"
            />
            <button type="submit" onClick={(event) =>  handleSubmit(event)}>
                Next
            </button>
        </>
    )
}
export default Comments;