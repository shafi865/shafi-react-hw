import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const summary = props.facultyMember;
    console.log(summary);
    //const salary = props.facultyMember.reduce( (salary, inc) => salary + inc.props.facultyMember.income, 0);
    
    /*let salary = 0;
    for (let i=0; i<summary.length; i++){
        const new = summary[i];
        console.log(new);
        salary = salary + new.income;
    }*/
    
    return (
        <div>
            <h3>Faculty Assigned for Level 3 : 2020</h3>
            <div className="summary">
                <p>Faculty Added : {summary.length}</p>
                <p>Faculty Monthly Remuneration : {} </p>
                <p>AIT Deducted :</p>
                <p>Net Payable : </p>
            </div>
    
        </div>
    );
};

export default Summary;