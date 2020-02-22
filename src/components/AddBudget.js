import React, { useState } from 'react';
export default function AddBudget(props){
  const [budget,changeBudget]=useState({name:"",value:"",status:"1"});
  const {AddBudgetItem}=props;
    return(
        <div className="add">
            <div className="add__container">
              <select className="add__type" 
              value={budget.status}
                         onChange={(e)=>{changeBudget({...budget,status:e.target.value})}}
              >
                <option value="1" >+</option>
                <option value="0">-</option>
              </select>
              <input type="text" className="add__description" placeholder="Add description" 
                    value={budget.name}
                    onChange={(e)=>{changeBudget({...budget,name:e.target.value})}}
                    />
              <input type="number" className="add__value" placeholder="Value" 
                value={budget.value}
                  onChange={(e)=>{changeBudget({...budget,value:e.target.value})}}/>
              <button className="add__btn" 
              onClick={()=>{AddBudgetItem(budget);changeBudget({...budget,name:"",value:"",status:"1"})}}>
                <i className="ion-ios-checkmark-outline" />
              </button>
            </div>
          </div>
    )
}