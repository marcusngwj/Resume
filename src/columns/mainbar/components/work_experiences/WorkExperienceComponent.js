import React, { Component } from 'react';

import './style.css';
import WorkExperience from './WorkExperience';

export default class WorkExperienceComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="work-experience-component">
        <p className="title">Work Experiences</p>
        <table>
          <tbody>
            <WorkExperience period="Jan 2018 - Jun 2018"
                              role="iOS Software Engineering Intern" 
                           company="Micepad"
                       description={['Worked alongside the Chief Technology Officer',
                                     'Developed applications for iOS using <strong>Objective-C</strong>',
                                     'A Ensured performance, quality & responsiveness of applications',
                                     'Converted software requirements into working solutions',
                                     'Collaborated with <strong>cross-functional teams from overseas</strong> to design & pulish features',
                                     'Helped maintain code quality & organization',
                                     'Experienced with iOS framework such as <strong>Core Data</strong>',
                                     'Experienced with third-party libraries & APIs']}/>
          </tbody>
        </table>
      </div>
    );
  }
}
