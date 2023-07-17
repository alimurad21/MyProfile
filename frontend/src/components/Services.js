import classes from './Services.module.css';
import Mark from '../images/mark.png';



const Services = () =>{
    return<>
        <div className={classes.services}>
            <h2 className={classes.heading}>Services</h2>
            <div className={classes.card}> 
                <h2>Web development</h2>
                <hr/>
                <ul>
                    <li><img src={Mark} alt='mark'/>First</li>
                    <li><img src={Mark} alt='mark'/>Second</li>
                    <li><img src={Mark} alt='mark'/>Third</li>
                    <li><img src={Mark} alt='mark'/>4</li>
                    <li><img src={Mark} alt='mark'/>5</li>
                    <li><img src={Mark} alt='mark'/>6</li>
                    <li><img src={Mark} alt='mark'/>7</li>
                    <li><img src={Mark} alt='mark'/>8</li>
                </ul>
            </div>
        </div>
    </>

}

export default Services;