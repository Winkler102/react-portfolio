import React from 'react'
import coverImage from "../../assets/profileImg/Profileimage.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Me: </h1>
            <div className="flex-row space-between">
                <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
                Skills: <br />
                CSS3 | JavaScript | jQuery | Bootstrap | HTML5
                <br />
                Node.js | MySQL | Express | GitHub | Agile
                <div className="my-2">
                    <p>
                        Self-starter with the ability to quickly understand new systems.  Experience demonstrating system and device usage to technical and operational staff. Quick learner with a capacity to research and resolve issues as they come up. Currently a customer support agent for Accenture and enrolled in full stack web development bootcamp at University of Texas at Austin.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About