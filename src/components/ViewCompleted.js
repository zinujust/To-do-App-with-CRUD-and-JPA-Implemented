import React, { useEffect, useState } from 'react';
import taskApi from '../Api/taskApi';

const List = props => {
    return (
        <li key={props.i} className='list'>
            <p>{props.a.text}</p>
            <button className='delete' onClick={() => {
                taskApi.deleteTask(props.a.id)
                window.location.reload();
            }}>delete</button>
        </li>
    )
}


const ViewCompleted = () => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        taskApi.viewCompleted(setArr)
    }, [])

    return (
        <>
            <h1 className='title'>Completed Tasks</h1>
            <div className='container'>
                <ul>
                    {arr.map((a, i) => {
                        return <List a={a} i={i}></List>
                    })}
                </ul>
            </div>
        </>
    );
};

export default ViewCompleted;