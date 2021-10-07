import { Link, Switch, Route } from 'react-router-dom';
import TaskAdder from './components/TaskAdder';
// import Welcome from './components/Welcome';
import TaskList from './components/TaskList';
import Schedule from './components/Schedule';
import Archive from './components/Archive';

function App() {
    return (
        <div className="App">
            <header className="header">
                Header <TaskAdder />
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
                    {/* <Route path="/" component={Welcome}></Route> */}
                    <Route path="/TaskList" component={TaskList}></Route>
                    <Route path="/Schedule" component={Schedule}></Route>
                    <Route path="/Archive" component={Archive}></Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
