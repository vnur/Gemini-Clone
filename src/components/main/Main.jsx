import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context";
export const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    inputValue,
    setInputValue,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Vinayak</span>
              </p>
              <p>How Can I help you today</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest Beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>Briefly explain this concept : urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              {/* <img src={assets.user_icon} alt="" /> */}
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? 
              <>
              <div className="loader"> 
                <hr />
                <hr />
                <hr />
              </div>
              </>:
              <>
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            {/* <p>{resultData}</p> */}
              </>
            }
            </div>
          
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a Prompt Here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {inputValue ? <img src={assets.send_icon} alt="" onClick={()=>onSent()} /> :null}
            </div>
          </div>

          <div className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its response. Your privacy and gemini apps
          </div>
        </div>
      </div>
    </div>
  );
};

