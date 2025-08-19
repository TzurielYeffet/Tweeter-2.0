import { createContext, useState, useEffect } from "react";

export const TweetContext = createContext(null);

export function TweetDataProvider({ children }) {
  const user = "Jhon doe";
  const [tweetList, setTweetList] = useState([]);
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?order=date.desc&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo"
      );

      if (!result.ok) {
        alert("There was a problem fetching the data from the server");
        throw new Error("Failed to fetch data from srver");
      }
      const data = await result.json();

      setTweetList((prev) => [...prev, ...data]);
      console.log("typeof(tweetList)", typeof tweetList);
    };
    fetchData();
  }, [tweet]);

  const postTweet = async (tweet) => {
    try {
      const result = await fetch(
        "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo",
            Prefer: "return=representation",
          },
          body: JSON.stringify({
            content: tweet.content,
            userName: user,
            date: tweet.date,
          }),
        }
      );

      if (!result.ok) {
        const errorData = await result.text();
        throw new Error(
          `HTTP error! status: ${result.status}, message: ${errorData}`
        );
      }

      const data = await result.json();
      console.log("Successfully posted:", data);
    } catch (error) {
      console.error("Error posting tweet:", error);
      alert("Failed to post tweet. Please try again.");
    }
  };

  return (
    <TweetContext value={{ tweetList, setTweetList, user, tweet, setTweet,postTweet }}>
      {children}
    </TweetContext>
  );
}
