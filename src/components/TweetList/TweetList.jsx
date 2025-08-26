import { useContext } from "react";
import { TweetContext } from "../../contexts/TweetContext";
import { Tweet } from "../Tweet/Tweet";

import "./TweetList.css";
export function TweetList() {
  const { tweetList, isLoading } = useContext(TweetContext);

  return (
    <>
      {isLoading ?  (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading tweets...</p>
        </div>
      ) :
      <div className="tweet-list">
        <div>
          {tweetList.map((item) => (
            <Tweet
              key={item.id}
              date={item.date}
              user={item.userName}
              content={item.content}
            />
          ))}
        </div>
      </div>
      }
    </>
  );
}
