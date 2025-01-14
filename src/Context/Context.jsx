import { createContext, useContext, useState } from "react";
import run from "../config/Gemini";
export const Context = createContext();


export const ContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [recentPrompt, SetRecentPrompt] = useState("");
  const [prevPrompt, SetPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)
    } 

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response =await run(prompt);
      SetRecentPrompt(prompt);
    }else{
      SetPrevPrompt(prev=>[...prev,inputValue])
      SetRecentPrompt(inputValue);
      response =await run(inputValue);


    }
    let responseArray = response.split("**");
    let stringData = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        stringData += responseArray[i];
      } else {
        stringData += "<b>" + responseArray[i] + "</b>";
      }
    }
    let stringData2 = stringData.split("*").join("</br>");

    let ArrayData2 = stringData2.split(" ");
    for (let i = 0; i < ArrayData2.length; i++) {
      const nextWord = ArrayData2[i];
      setTimeout(() => {
        setResultData((prev) => prev + nextWord + " ");
      }, 75 * i);
    }
    // setResultData(stringData2);
    setLoading(false);
    setInputValue("");
  };

  return (
    <Context.Provider
      value={{
        onSent,
        prevPrompt,
        SetPrevPrompt,
        recentPrompt,
        SetRecentPrompt,
        showResult,
        loading,
        resultData,
        inputValue,
        setInputValue,
        newChat
      }}
    >
      {children}
    </Context.Provider>
  );
};

//create the own
export const useCustomContext = () => {
  return useContext(Context);
};
