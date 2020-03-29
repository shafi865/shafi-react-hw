import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const summary = props.facultyMember;
    console.log(summary);
    const salary = summary.reduce( (salary, inc) => salary + inc.income, 0);
    
    /*let salary = 0;
    for (let i=0; i<summary.length; i++){
        const new = summary[i];
       // console.log(new);
        salary = salary + new.income;
    }*/
     const ait = salary *0.10
    return (
        <div>
            <h3 className="heading">Faculty Assigned for Level 3 : 2020</h3>
            <div className="summary">
                <p>Faculty Added : {summary.length}</p>
                <p>Faculty Monthly Remuneration : BDT {salary} </p>
                <p>AIT Deducted : BDT {ait}</p>
                <p>Net Payable : BDT {salary-ait} </p>
            </div>
    
        </div>
    );
};

export default Summary;