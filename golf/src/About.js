import React from "react";
import wall from './image/golf.jpg'
export default function About(){
    return(
        <div>
            <img src={wall}/>
            <p className="p1">

Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible</p>
        </div>
    )
}