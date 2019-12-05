import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavCr from './components/Nav'
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import WorkSpace from './screens/WorkSpace';
import Storage from './services/Storage'

function App() {
  const [tab, setTab] = useState({tab: "HOME"})
  const changeTab = tab => {
    setTab({tab: tab})
  }
  return (
    <div className="App">
    <NavCr tab={tab.tab} changeTab={changeTab}/>
    {tab.tab === "HOME" &&<Home/>}
    {tab.tab === "LOGIN" &&<Login changeTab={changeTab}/>}
    {tab.tab === "SIGNUP" &&<SignUp changeTab={changeTab}/>}
    {tab.tab === "WORKSPACE" &&<WorkSpace changeTab={changeTab}/>}
    </div>
  );
}

export default App;
