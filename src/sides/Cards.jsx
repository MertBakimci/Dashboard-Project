import React,{ useContext }from "react";
import wallet_balance from "../Datas/wallet_balance";
import {BiDollar} from 'react-icons/bi'
import Context from "../Context";


function Cards() {
  const {userData} = useContext(Context);
  return (
    <div className="cards flex justify-between g-20">
      <div className="card flex flex-col g-20">
        <div className="wallet flex justify-between">
          <h3>{userData?.wallet.title}</h3>
          <h4>Feb 2. 2021</h4>
        </div>
        <div className="wallet-balance m-auto flex flex-col g-10 ">
          <h5 className="text-center">{userData?.wallet.balance.title}</h5>
          <div className="balance w-100 flex justify-center align-center">
            <i className="fas fa-dollar-sign"></i>
            <h1>{userData?.wallet.balance.value}</h1>
          </div>
        </div>
        <div className="specifications flex justify-evenly">
          {wallet_balance &&
            wallet_balance.map((item, key) => (
              <div key={key} className="spec flex flex-col justify-evenly align-center g-10">
                <div className="icon">
                <i className={`${item.icon_name}`}></i>
                </div>
                <span>{item.title}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="card flex flex-col justify-center align-center g-20">
        <h3>Need cash instantly</h3>
        <button>
          <p>Apply for a loan</p>
        </button>
      </div>
    </div>
  );
}

export default Cards;
