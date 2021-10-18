import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Schedule from './components/Schedule';
import ArchiveList from './components/ArchiveList';

function App() {
    const tasks = useSelector((state) => state.tasks);
    const data = useSelector((state) => state.data);

    return (
        <div className="App">
            <header className="header">
                <h2 className="header_title">Task Manager</h2>
                <TaskForm data={data} />
            </header>
            <aside className="aside">
                <div className="menu">
                    <NavLink activeClassName="isActive" className="menu_link" to="/TaskList">
                        Tasks
                    </NavLink>
                    <NavLink activeClassName="isActive" className="menu_link" to="/Schedule">
                        Schedule
                    </NavLink>
                    <NavLink activeClassName="isActive" className="menu_link" to="/Archive">
                        Archive
                    </NavLink>
                </div>
            </aside>
            <main className="main">
                <Switch>
                    <Route exact path="/">
                        {tasks ? <Redirect to="/TaskList" /> : null}
                    </Route>
                    <Route path="/TaskList">
                        <TaskList tasks={tasks} data={data} />
                    </Route>
                    <Route path="/Schedule">
                        <Schedule tasks={tasks} />
                    </Route>
                    <Route path="/Archive">
                        <ArchiveList tasks={tasks} data={data} />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
