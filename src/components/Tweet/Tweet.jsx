import "./Tweet.css"


export function Tweet({date,content,user}){
 return (
    <div className="tweet-container">
        <div className="tweet-top-section">
            <span className="user">{user}</span>
            <span className="date">{date}</span>
        </div>  
        <div className="tweet-content">
            <p>{content}</p>
        </div>
    </div>
)
}