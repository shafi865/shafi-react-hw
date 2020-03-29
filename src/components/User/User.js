import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    //console.log(props);
    return (
        <div className="faculty">
            <div className="image">
                <img src={props.user2.img} alt=""/>
            </div>
            <div className="faculty-name">
                <h2>{props.user2.name}</h2>
                <h3>Professor, Department of EEE, BUET</h3>
                <p>Contact Number :{props.user2.phone}</p>
                <p>Email : {props.user2.email}</p>
                <p>Website : {props.user2.website}</p>
                <button 
                    className="btn"
                    onClick={() => props.handleAddFaculty(props.facultyMember)}
                        > <FontAwesomeIcon icon={faUserPlus}/>  Add Faculty</button>
            </div>
            
        </div>
    );
};

export default User;