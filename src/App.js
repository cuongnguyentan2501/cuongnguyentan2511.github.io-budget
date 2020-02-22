import React, { useState,useEffect } from 'react';
import './style.css'
import ShowBudget from './components/ShowBudget';
import AddBudget from './components/AddBudget';
import IncomeTable from './components/IncomeTable';
import ExpensesTable from './components/ExpensesTable';
const uuidv4 = require('uuid/v4');
function App() {
  const [allBudget,changeAllBudget]=useState({incomes:[],expenses:[]});
  const {incomes,expenses}=allBudget;
  useEffect(() => {
    let result=JSON.parse(localStorage.getItem("allBudget"));
    if(result){
      changeAllBudget(result);
    }
    
  }, [])
  const AddBudgetItem=(item)=>{
    let {incomes,expenses}=allBudget;
    item.id=uuidv4();
    if(parseInt(item.status)===0){
      expenses.push(item);
      changeAllBudget({...allBudget,expenses:expenses});
      localStorage.setItem("allBudget",JSON.stringify(allBudget));
    }
    else{
      incomes.push(item);
      changeAllBudget({...allBudget,incomes:incomes});
      localStorage.setItem("allBudget",JSON.stringify(allBudget));
    }
  }
  const deleteItem=(id)=>{
    let result=[];
    let index=incomes.findIndex(value=>(value.id)===(id));
    if(index!==-1){
      result=incomes.filter(value=>(value.id)!==(id));
      changeAllBudget({...allBudget,incomes:result});
      localStorage.setItem("allBudget",JSON.stringify({...allBudget,incomes:result}))
    }
    else{
      
      result=expenses.filter(value=>(value.id)!==(id));
      
      changeAllBudget({...allBudget,expenses:result});
      localStorage.setItem("allBudget",JSON.stringify({...allBudget,expenses:result}))
    }
  }
  return (
    <div className="App">
      <div>
        <div className="top">
          <ShowBudget allBudget={allBudget}/>
        </div>
        <div className="bottom">
          <AddBudget AddBudgetItem={AddBudgetItem}/>
          <div className="container clearfix">
            <IncomeTable incomes={incomes} deleteItem={deleteItem}/>
            <ExpensesTable expenses={expenses} allBudget={allBudget} deleteItem={deleteItem}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
