import React from 'react';
import Project from '../Projects';
import emaBackground from '../../assets/projectImgs/employeeManager.PNG';

function Portfolio() {
    const projectsArray = [
        {
            image: emaBackground,
            title: 'Employee Management Application',
            hasDeployed: false,
            deployed: '',
            repository: 'https://github.com/Winkler102/employee-manager',
        },
        {
            image: emaBackground,
            title: 'Employee Management Application',
            hasDeployed: false,
            deployed: '',
            repository: 'https://github.com/Winkler102/employee-manager'
        }
    ];


    return (
        <div>
            <div className="flex-row">
                {projectsArray.map((project) => (
                    <Project
                        image={project.image}
                        title={project.title}
                        hasDeployed={project.hasDeployed}
                        deployed={project.deployed}
                        repository={project.repository}
                    />
                ))}
            </div>
        </div >
    );
}
export default Portfolio;