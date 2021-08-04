import React from 'react'
import resumePdf from '../../assets/resume/Benjamin_Winkler-resume.pdf';

function Resume() {
    return (
        <section className="my-5" >
            <h1 id="about">Resume: <a href={resumePdf} download>Download</a></h1>
            <div className="flex-row space-between">
                <iframe title="My Resume" src="https://onedrive.live.com/embed?resid=57385CA56FC474B9%215466&amp;authkey=%21ADklsS-AgxZ-IK8&amp;em=2" width="100%" height="2200px" frameborder="0">This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>
            </div>
        </section>
    )
}

export default Resume