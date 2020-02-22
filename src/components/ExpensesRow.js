import React from 'react';
export default function ExpensesRow(props){
  const {expensesItem,incomesSum,deleteItem}=props;
  const getExpensesPercentItem=()=>{
    return ((parseInt(expensesItem.value)/incomesSum)*100).toFixed(0);
  }
    return(
        <div className="item clearfix" id="expense-0">
                  <div className="item__description">{expensesItem.name}</div>
                  <div className="right clearfix">
                    <div className="item__value">- {expensesItem.value}</div>
                    <div className="item__percentage">{getExpensesPercentItem()} %</div>
                    <div className="item__delete">
                      <button className="item__delete--btn" onClick={()=>deleteItem(expensesItem.id)}>
                        <i className="ion-ios-close-outline" /></button>
                    </div>
                  </div>
                </div>
    )
}