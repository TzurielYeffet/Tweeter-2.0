import "./Home.css";
import { CreateTweet } from "../CreateTweet/CreateTweet.jsx";
import { TweetList } from "../TweetList/TweetList.jsx";

export function Home() {


    return(
        <>
        <div className="home-container">
            <CreateTweet />
            <TweetList/>
        </div>
        </>
    )

}
