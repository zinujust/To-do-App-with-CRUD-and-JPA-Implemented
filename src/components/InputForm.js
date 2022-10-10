import React, { useState } from 'react';
import taskApi from '../Api/taskApi';

const InputForm = () => {

    const [task, setTask] = useState('')

    const handleSubmit = (event) => {
        taskApi.addTask(task);

        setTask('')
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input className='input-form'
                    type="text"
                    value={task}
                    placeholder='Enter here...'
                    onChange={(event) => setTask(event.target.value)}
                    required
                ></input>
                <input
                    type="submit"
                    value="Submit"
                ></input>
            </form>
        </div >
    );
};

export default InputForm;