import React from 'react';
export default function IncomeRow(props){
  const {incomesItem,deleteItem}=props;
    return(
        <div className="item clearfix" id="income-0">
                  <div className="item__description">{incomesItem.name}</div>
                  <div className="right clearfix">
                  <div className="item__value">+ {incomesItem.value}</div>
                    <div className="item__delete">
                      <button className="item__delete--btn" onClick={()=>deleteItem(incomesItem.id)}>
                        <i className="ion-ios-close-outline" />
                      </button>
                    </div>
                  </div>
                </div>
    )
}