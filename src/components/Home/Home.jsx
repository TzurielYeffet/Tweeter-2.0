import { Button, Box, Group, Textarea, Text, Flex } from "@mantine/core";
import "./Home.css";
import { useState } from "react";
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
