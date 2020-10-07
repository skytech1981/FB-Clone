import React from 'react'
import "./MessegeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import react ,{useState} from "react";
import { useStateValue } from './StateProvider';

function MessegeSender() {
    const [{user}, dispatch] = useStateValue();



            const [input , setInput] = useState('')
            const [ImageUrl , setImageUrl] = useState('')

            const HandleSubmit = e => {
            e.preventDefault();
            
            //some clever db stuff



            };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
            <form>
            <input value={input}
            onChange={e => setInput(e.target.value)}
            className="messageSender__input" placeholder={`Whats on your mind , ${user.displayName}?`} />
            <input value={ImageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="messageSender__input" placeholder={"Image URL (Optional)"}/>
            <button onClick="{HandleSubmit}" type="submit">
                Hidden Submit
            </button>

            </form>
            </div>
            <div className="messageSender__buttom">

            <div className="messageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
            </div>

            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
            </div>

            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>

            </div>
        </div>
    )
}

export default MessegeSender
