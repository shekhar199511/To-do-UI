import React from "react";

import profile from '../../assets/profile.jpeg';
import classes from "./Profile.module.css";
const Profile = (props) => {
    return (
        <div className={classes["profile-container"]}>

        <img src={profile} alt="pic of road"/>

        <p>
            Hi, the image is on from trip to goa. It seems beautiful, doesn't it. 
            This is the repo in which I have practiced most of the important JS/React/CSS concepts.
            <br/> <br/>
            Losing a job opened my eyes. I mean nothing, absolutely nothing is permanent. I was supposed to be the solution, instead I have become poison, the burden.

            In the quest of trying to be everything, I am losing myself. The more I try to become more responsible, the more I making mistakes.
            <br/> <br/>
            I could go on.... but I can sum things up on what I have become through one of my favourite quotes : <br/><br/>

            <p className={classes["quote-container"]}><span className={classes.quote}>If you stare into the abyss, the abyss stares back at you.</span> - Nietzsche</p>
        </p>
        </div>
        
    )
}

export default Profile