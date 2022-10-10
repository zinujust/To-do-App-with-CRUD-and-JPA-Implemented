import React, { useEffect, useState } from 'react';
import taskApi from '../Api/taskApi';



const List = (prop) => {
    return (
        <li key={prop.i} className='list'>
            <p>{prop.a.text}</p>
            <button onClick={() => {
                taskApi.taskCompleted(prop.a.id)
                window.location.reload();
            }}>Done</button>
        </li>
    )

}


const Tasks = () => {

    const [arr, setArr] = useState([]);


    useEffect(() => {
        taskApi.viewAllTasks(setArr);
    }, [])

    return (
        <>
            <h1 className='title'>Incomplete Tasks</h1>
            <div className='container'>

                <ul>
                    {arr.map((a, i) => {
                        return <List a={a} i={i} />
                    })}
                </ul>


            </div>
        </>
    );
};

export default Tasks;