import React from 'react';
import Project from '../Projects';
import emaBackground from '../../assets/projectImgs/employeeManager.PNG';
import moviexImg from '../../assets/projectImgs/moviex.png';
import teamProfileImg from '../../assets/projectImgs/teamProfile.png';
import passwordGeneratorImg from '../../assets/projectImgs/passwordGenerator.png';
import weatherDashImg from '../../assets/projectImgs/weatherDash.png';
import petcationStationImg from '../../assets/projectImgs/petStation.png';

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
            image: moviexImg,
            title: 'Movie X',
            hasDeployed: true,
            deployed: 'https://winkler102.github.io/movie-x/',
            repository: 'https://github.com/Winkler102/movie-x'
        },
        {
            image: teamProfileImg,
            title: 'Team Profile Generator',
            hasDeployed: false,
            deployed: '',
            repository: 'https://github.com/Winkler102/team-profile'
        },
        {
            image: passwordGeneratorImg,
            title: 'Password Generator',
            hasDeployed: true,
            deployed: 'https://winkler102.github.io/Password-Generator/',
            repository: 'https://github.com/Winkler102/Password-Generator'
        },
        {
            image: weatherDashImg,
            title: 'Employee Management Application',
            hasDeployed: true,
            deployed: 'https://winkler102.github.io/weather-dashboard/',
            repository: 'https://github.com/Winkler102/weather-dashboard'
        },
        {
            image: petcationStationImg,
            title: 'Petcation-Station',
            hasDeployed: true,
            deployed: 'https://petcation-station.herokuapp.com/',
            repository: 'https://github.com/Winkler102/petcation-station'
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