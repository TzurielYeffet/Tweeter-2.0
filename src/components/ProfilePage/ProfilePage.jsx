import { useContext, useState } from "react"
import "./ProfilePage.css"
import { TweetContext } from "../../contexts/TweetContext"

export function ProfilePage() {
  const { setUser } = useContext(TweetContext)
  const [text, setText] = useState("")

  const handleSubmit = () => {
    if (text.trim()) {
      setUser(text)
      setText("")
    }
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <label htmlFor="username">User name</label>
      <input
        id="username"
        type="text"
        placeholder="Type your name."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}
