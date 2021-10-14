import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Schedule from './components/Schedule';
import Archive from './components/Archive';

function App() {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div className="App">
            <header className="header">
                Header <TaskForm />
            </header>
            <aside className="aside">
                <ul>
                    <li>
                        <Link to="/TaskList">TaskList</Link>
                    </li>
                    <li>
                        <Link to="/Schedule">Schedule</Link>
                    </li>
                    <li>
                        <Link to="/Archive">Archive</Link>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <Switch>
                    <Route path="/TaskList">
                        <TaskList tasks={tasks} />
                    </Route>
                    <Route path="/Schedule" component={Schedule} />
                    <Route path="/Archive" component={Archive} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
