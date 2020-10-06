import React from 'react'
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
           <Story  
           image='https://d1xqlf737dvrs6.cloudfront.net/graphics/attachments/6524/dell_14.10_TECH_REFRESH-WEB3_full.jpg?1600949471'
           profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIG9oJOjjoXseLZ3TuiGgQ3hhq6Df9gOI6fA&usqp=CAU"
           title="SlayTech1981"
           />
            <Story 
           image="https://www.israeldefense.co.il/sites/default/files/styles/full_article_image/public/_Uploads/dbsArticles/cyber_1.jpg"
           profileSrc="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
           title="Dave"
           />
            <Story 
           image="https://english.m.tau.ac.il/sites/default/files/styles/reaserch_main_image_580_x_330/public/quanum-580_1.jpg?itok=3Csazjdc"
           profileSrc="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
           title="Sara"
           />
           <Story 
           image="https://www.zag-sw.com/wp-content/uploads/2018/03/Untitled-1_0022_HighTech.jpg"
           profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGFiPFLqSOApqFzcUWOJ0ny8-Ndb_3PKfMFw&usqp=CAU"
           title="Gil"
           />
             <Story 
           image="https://itrade.gov.il/usa/files/2019/08/shutterstock_small.jpg"
           profileSrc="https://images.globes.co.il/images/NewGlobes/big_image_800/2019/800x392.2019902T183436.jpg"
           title="Sara"
           />
        </div>
    )
}

export default StoryReel
