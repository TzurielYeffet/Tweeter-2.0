import { useContext } from "react"
import { TweetContext } from "../../contexts/TweetContext"
import { Tweet } from "../Tweet/Tweet"


export function TweetList(){
    const {tweetList} = useContext(TweetContext)
    return(
        <>
        <div className="tweet-list">
            <div>
                {tweetList.map(item =>(
                    <Tweet key={item.id} date={item.date} user={item.userName} content={item.content}/>
                ))}
            </div>
        </div>
        </>
    )
}