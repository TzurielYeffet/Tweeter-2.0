import { useContext, useEffect, useState } from "react";
import "./CreateTweet.css";
import { TweetContext } from "../../contexts/TweetContext.jsx";
export function CreateTweet() {
  const [text, setText] = useState("");
  const {tweetList,setTweetList,postTweet,user} = useContext(TweetContext)
  
  
  const handleTweet = async () => {
    const date = new Date().toISOString();
    const newTweet = { content: text,userName:user,date: date  };
    console.log(newTweet);
    
    try{
      await postTweet(newTweet)
      setTweetList([...tweetList,newTweet])
      setText("");
    }catch(error){
        console.error("Error: ",error)
    }
    // setTweet(newTweet);
  };

  return (
    <>
      <div className="create-list-container">
        <div className="textarea-container">
          <textarea
            rows="8"
            placeholder="What's on your mind?"
            className="custom-textarea"
            id="textInput"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          ></textarea>
          <div className="button-container">
            <span className="character-count" id="charCount">
              {text.length}/140
            </span>
            <button
              disabled={text.trim().length === 0 || text.trim().length > 140}
              className="tweet-button"
              id="tweetButton"
              onClick={handleTweet}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
