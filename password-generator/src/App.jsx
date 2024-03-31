import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)  
    }
    setPassword(pass)
  },  [length, numberAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword, passwordGenerator])

  return (
    <div className="flex justify-center align-center my-20 text-orange-300">
      <div className="text-center bg-gray-500 rounded-lg p-5">
        <h1 className="text-white text-center text-4xl mb-6">
          Password Generator
        </h1>
        <div className="my-3">
          <input
            type="text"
            value={password}
            className="rounded-l-xl py-1 px-2 outline-none"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button 
            className="bg-blue-500 rounded-r-xl py-1 px-2 hover:bg-blue-600 shadow-md"
            onClick={copyPassToClipboard}
            >Copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length ({length})</label>
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed} 
            onChange={ () => {
              setNumberAllowed((prev) => !prev)
            } }
          />
          <label>Numbers</label>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={ () => {
              setCharAllowed((prev) => !prev)
            } }
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
