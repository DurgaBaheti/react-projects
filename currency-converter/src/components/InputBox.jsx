/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function InputBox({
  className = "",
  label,
  amountChange,
  onAmountChange,
  amountDisable = false,
  selectCurrency = "usd",
  currencyOptions = [],
  onCurrencyChange,
  currencyDisable = false,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amountChange}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option 
              key={currency} 
              value={currency}>
                {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
