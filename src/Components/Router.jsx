
import {Routes,Route,Link} from 'react-router-dom';
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Dashboard from "../Pages/Dashboard";
import "./Styles.css"
const Routing=() =>{
    return <div style={{height:'90vh',display:'flex'}}>
        <div className="navi-menu-section">
            <button><Link to ="/">Home</Link></button><br/><br/>
            <button><Link to="/Settings"> Settings</Link></button><br/><br/>
            <button><Link to="/dashboard"> Dashboard</Link></button><br/>
        </div >
        <div className="w-80">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Settings" element={<Settings/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
        </div>   
</div>

   
}

export default Routing