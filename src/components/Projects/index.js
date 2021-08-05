import React from 'react';

function Project(props) {
    const {
        image,
        title,
        deployed,
        hasDeployed,
        repository
    } = props


    return (
        <div className="img-thumbnail" style={{ backgroundImage: `url(${image})` }}>
            <div className="projectInfo">
                {hasDeployed ? (
                    <a rel="noreferrer" target="_blank" href={deployed}>{title}</a>
                ) : (
                    <p>{title}</p>
                )}
                <a rel="noreferrer" target="_blank" href={repository}>GitHub</a>
            </div>
        </div>
    )
}

export default Project;