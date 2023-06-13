import { Link } from "react-router-dom";
import  style from "./NavBar.module.css"

const NavBar = ()=>{
    return(
        <div className={style.mainContainer}>
            <Link to='/home'>HOME</Link>
            <br/>
            <Link to='/create'>CREATE ACTIVITY</Link>
            
            
        </div>
    )
}

export default NavBar;