function TaskAdder() {
    return (
        <form className="task_adder">
            <input type="text"></input>
            <select>
                <option>Red Ranger</option>
                <option>Blue Ranger</option>
                <option>Green Ranger</option>
                <option>Black Ranger</option>
                <option>White Ranger</option>
            </select>
            <select>
                <option>Low Priority</option>
                <option>Middle Priority</option>
                <option>High Priority</option>
            </select>

            <button type="submit">Add</button>
        </form>
    );
}

export default TaskAdder;
