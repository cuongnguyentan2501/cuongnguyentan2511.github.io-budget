import React from 'react';
import IncomeRow from './IncomeRow';
export default function IncomeTable(props){
  const {incomes,deleteItem}=props;
    return(
        <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">
                {incomes.map((value,index)=>(
                  <IncomeRow key={index} incomesItem={value} deleteItem={deleteItem}/>
                ))}
                
              </div>
            </div>
    )
}