import React from 'react'
import "./Widgets.css"


function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false&width=734&height=411&appId"
            width="340"
            height="100%"
            style={{border:"none" ,overflow:"hidden"}}
            scrolling="none"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media">


            </iframe>
        </div>
    )
}

export default Widgets
