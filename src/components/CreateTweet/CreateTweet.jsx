import { useContext, useEffect, useState } from "react";
import "./CreateTweet.css";
import { TweetContext } from "../../contexts/TweetContext.jsx";
export function CreateTweet() {
  const [text, setText] = useState("");
  const { tweetList, setTweetList, postTweet, user, isPosting } =
    useContext(TweetContext);

  const handleTweet = async () => {
    const date = new Date().toISOString();
    const newTweet = { content: text, userName: user, date: date };
    console.log(newTweet);
    if (text.trim() && text.length <= 140 && !isPosting) {
      try {
        await postTweet(newTweet);
        // setTweetList([newTweet,...tweetList]);
        setText("");
      } catch (error) {
        console.error("Error: ", error);
      }
      // setTweet(newTweet);
    }
  };
  const isButtonDisabled =
    text.trim() === 0 || text.trim().length > 140 || isPosting;
  return (
    <>
      <div className="create-list-container">
        <div className="textarea-container">
          <textarea
            rows="8"
            placeholder={isPosting ? "Posting..." : "What's on your mind?"}
            className="custom-textarea"
            id="textInput"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            disabled={isPosting}
          ></textarea>

          {isPosting && (
            <div className="posting-overlay">
              <div className="posting-message">
                <div className="spinner"></div>
                <span>Posting your tweet...</span>
              </div>
            </div>
          )}

          <div className="button-container">
            <span className="character-count" id="charCount">
              {text.length}/140
            </span>
            <button
              disabled={isButtonDisabled}
              className="tweet-button"
              id="tweetButton"
              onClick={handleTweet}
            >
              {isPosting && <div className="button-spinner"></div>}
              {isPosting ? "Posting..." : "Tweet"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
