import "./Sidebar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import { useCustomContext } from "../../Context/Context.jsx";


export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,SetRecentPrompt,newChat } =useCustomContext()

  const loadPrompt = async(prompt) =>{
    SetRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />

        <div className="new-chat" onClick={newChat}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompt.map((item, index) => (
                <div className="recent-entry" key={index} onClick={()=>loadPrompt(item)}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.length<18 ? item : item.slice(0,18)+"..."}</p>
                </div>
              )
            )}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-icon recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
