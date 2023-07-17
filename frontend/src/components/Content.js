import { Link } from 'react-router-dom';
import ProfileImage from '../images/profile.jpg';
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.png';
import Upwork from '../images/upwork.png';


import classes from './Content.module.css';

const Content = () =>{
    return(

        <div className={classes.content}>
            <div className={classes.introduction}>
                <h2>I'm Ali Murad</h2>
                <p>Frontend Developer | React </p>
                <div className={classes.contact}>
                <ul >
                    <li>
                        <Link to='linkdin'> <img src = {Linkedin} alt='Linkedin' height='40'/></Link>
                    </li>
                    <li>
                        <Link to='upwork'> <img src = {Upwork} alt='Upwork' height='40'/></Link>
                    </li>
                    <li>
                        <Link to='instagram'> <img src = {Instagram} alt='Instagram' height='40'/></Link>
                    </li>
                  
                </ul>
            </div>
            </div>
            <div className={classes.profile}>
                <img src={ProfileImage} alt='Profile'/>
            </div>
            
        </div>
            )
}

export default Content;