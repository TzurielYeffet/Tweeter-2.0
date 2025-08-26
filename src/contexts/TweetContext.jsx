import { createContext, useState, useEffect } from "react";

export const TweetContext = createContext(null);

export function TweetDataProvider({ children }) {
  const [user,setUser ]= useState("Jhon doe");
  const [tweetList, setTweetList] = useState([]);
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await fetch(
        "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?order=date.desc&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo"
      );

      if (!result.ok) {
        alert("There was a problem fetching the data from the server");
        setIsLoading(false);
        throw new Error("Failed to fetch data from srver");
      }
      const data = await result.json();

      setTweetList((prev) => [...prev, ...data]);
      setIsLoading(false);
    };
    fetchData();
  }, [tweet]);

  const postTweet = async (tweet) => {
    setIsPosting(true);
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
    } finally {
      setIsPosting(false);
    }

  };

  return (
    <TweetContext
      value={{
        tweetList,
        setTweetList,
        user,
        tweet,
        setTweet,
        postTweet,
        isLoading,
        isPosting,
        setUser
      }}
    >
      {children}
    </TweetContext>
  );
}
