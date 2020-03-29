import React, { useState } from 'react';
import userData from '../../userdata';
import './Faculty.css';
import User from '../User/User';
import Summary from '../Summary/Summary';




const Faculty = () => {
    const user = userData;
    const [users, setUsers] = useState(user);
    const [facultyMember, setFacultyMember] = useState([]);

    const handleAddFaculty = (para) => {
        const newFaculty = [...facultyMember, para];
        setFacultyMember(newFaculty);
        console.log(setFacultyMember);
    }
    return (
        <div className="faculty-container">
            <div className="user-container">
               {
                    users.map(us => <User 
                        handleAddFaculty = {handleAddFaculty}
                        user2={us}> </User>)
               }
            </div>
            <div className="state-container">
                <Summary facultyMember={facultyMember}></Summary>
            </div>
            
        </div>
    );
};

export default Faculty;