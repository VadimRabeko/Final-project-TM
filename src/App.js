import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Schedule from './components/Schedule';
import ArchiveList from './components/ArchiveList';

function App() {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div className="App">
            <header className="header">
                Header <TaskForm />
            </header>
            <aside className="aside">
                <ul>
                    <li key={'TaskList'}>
                        <Link to="/TaskList">TaskList</Link>
                    </li>
                    <li key={'Schedule'}>
                        <Link to="/Schedule">Schedule</Link>
                    </li>
                    <li key={'Archive'}>
                        <Link to="/Archive">Archive</Link>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <Switch>
                    <Route path="/TaskList">
                        <TaskList tasks={tasks} />
                    </Route>
                    <Route path="/Schedule">
                        <Schedule tasks={tasks} />
                    </Route>
                    <Route path="/Archive">
                        <ArchiveList tasks={tasks} />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;

// сделать сайдменю, счетчик заданий

// добавить анимацию добавления и сделания

// ассинхронность - полчил дату и теперь встроить её во все штуки

// локал стораж
