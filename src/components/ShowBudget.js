import React from 'react';
export default function ShowBudget(props){
  const month_name = function(dt){
    const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
    const {incomes,expenses}=props.allBudget;
    const getIncomesValue=()=>{
      let incomesSum=0;
      incomesSum=incomes.reduce((sum,value)=>(sum+parseInt(value.value)),0);
      return incomesSum;
      
    }
    const getExpensesValue=()=>{
      let expensesSum=0;
      
      expensesSum=expenses.reduce((sum,value)=>(sum+parseInt(value.value)),0);
      
      return expensesSum;
      
    }
    const getExpensesPercent=()=>{
      let expensesSum=getExpensesValue();
      let incomesSum=getIncomesValue();
      if(incomesSum===0 && expensesSum===0) return 0;
      else{ return ((expensesSum/(incomesSum))*100).toFixed(0);}
      
      
    }
    const getBalanceBudget=()=>{
      let expensesSum=getExpensesValue();
      let incomesSum=getIncomesValue();
      let balanceBudget=incomesSum-expensesSum;
      return balanceBudget>=0?"+ "+balanceBudget:"- "+balanceBudget;
    }
    return(
        <div className="budget">
            <div className="budget__title">
    Available Budget in <span className="budget__title--month">{month_name(new Date())}</span>:
            </div>
            <div className="budget__value">{getBalanceBudget()}</div>
            <div className="budget__income clearfix">
              <div className="budget__income--text">Income</div>
              <div className="right">
    <div className="budget__income--value">+ {getIncomesValue()}</div>
                <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>
            <div className="budget__expenses clearfix">
              <div className="budget__expenses--text">Expenses</div>
              <div className="right clearfix">
    <div className="budget__expenses--value">- {getExpensesValue()}</div>
    <div className="budget__expenses--percentage">{getExpensesPercent()} %</div>
              </div>
            </div>
          </div>
    )
}