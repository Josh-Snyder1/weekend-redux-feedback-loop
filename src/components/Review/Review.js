import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function Review(){
    const dispatch = useDispatch();
    const history = useHistory();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const supported = useSelector(store => store.supported);
    const comments = useSelector(store => store.comments);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit for review')
        dispatch({
            type: 'SUBMIT_FEEDBACK'
        })
        history.push('/')
    }

    return(
        <>
        <h3>Review your feedback</h3>

        <h4>Feeling: {feeling}</h4>
        <h4>Understanding: {understanding}</h4>
        <h4>Supported: {supported}</h4>
        <h4>Comments: {comments}</h4>

            <button type="submit" onClick={(event) =>  handleSubmit(event)}>
                SUBMIT
            </button>

        </>
    )
}
export default Review;