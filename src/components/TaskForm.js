import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksAdd, getData } from '../store/actions';
import DatePicker from 'react-date-picker';

function TaskForm() {
    const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());

    async function setData() {
        try {
            const response = await fetch('https://run.mocky.io/v3/3413d3f4-6559-4e47-9bf7-4923ef3489b0');
            const data = await response.json();
            dispatch(getData({ data: data }));
        } catch (error) {
            console.log(error);
        }
    }
    setData();

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (!(formData.get('text') && formData.get('assignee') && formData.get('priority'))) return;
        dispatch(
            tasksAdd({
                text: formData.get('text'),
                assignee: formData.get('assignee'),
                priority: formData.get('priority'),
                dueDate: formData.get('dueDate'),
                status: 'inProgress',
            })
        );
        event.target.reset();
    }

    return (
        <form className="task_adder" onSubmit={onSubmit}>
            <input type="text" name="text"></input>
            <select name="assignee">
                <option>Red Ranger</option>
                <option>Blue Ranger</option>
                <option>Green Ranger</option>
                <option>Black Ranger</option>
                <option>White Ranger</option>
            </select>
            <select name="priority">
                <option>Low Priority</option>
                <option>Middle Priority</option>
                <option>High Priority</option>
            </select>
            <DatePicker name="dueDate" onChange={onChange} value={value} />

            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
