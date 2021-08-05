import React from 'react';
import emaBackground from '../../assets/projectImgs/employeeManager.PNG';

function Projects() {
    const projectsArray = [
        {
            image: emaBackground,
            title: 'Employee Management Application',
            deployed: '',
            repository: 'https://github.com/Winkler102/employee-manager',
            hasDeployed: false
        },
        {
            image: emaBackground,
            title: 'Employee Management Application',
            deployed: '',
            repository: 'https://github.com/Winkler102/employee-manager',
            hasDeployed: false
        }
    ];


    return (
        <div>
            <div className="flex-row">
                {projectsArray.map((project) => (
                    <div className="img-thumbnail" style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="projectInfo">
                            {project.hasDeployed ? (
                                <a rel="noreferrer" target="_blank" href={project.deployed}>{project.title}</a>
                            ) : (
                                <p>{project.title}</p>
                            )}
                            <a rel="noreferrer" target="_blank" href={project.repository}>GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default Projects;