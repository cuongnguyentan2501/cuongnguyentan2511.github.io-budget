import React from 'react';
import ExpensesRow from './ExpensesRow';
export default function ExpensesTable(props){
  const {expenses,allBudget,deleteItem}=props;
  const getIncomesValue=()=>{
    let incomesSum=0;
    incomesSum=allBudget.incomes.reduce((sum,value)=>(sum+parseInt(value.value)),0);
    return incomesSum;
    
  }
    return(
        <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">
              {expenses.map((value,index)=>(
                  <ExpensesRow key={index} deleteItem={deleteItem} expensesItem={value} incomesSum={getIncomesValue()}/>
                ))}
              </div>
            </div>
    )
}