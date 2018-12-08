import React, { Component } from 'react';

import './style.css';
import Project from './Project';

export default class ProjectComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="project-component">
        <p className="title">Projects</p>

        <Project period="Aug 2017 - Nov 2017"
                   role="Software Developer" 
                   name="SpaXI(Static Program Analyzer)"
            description={['Specialised in parsing queries with <strong>Regex</strong>',
                          'Coordinated efforts of <strong>Quality Assurance</strong>',
                          'Automated <strong>Testing</strong> with <strong>Python</strong> and <strong>Bash</strong> scripts']}/>
      
        <Project period="Jan 2017"
                     role="Telegram Bot Developer" 
                     name="kboxLyricsBot (Telegram Bot to search for song lyrics)"
              description={['Designed <strong>Software Architecture</strong>',
                            'Extract lyrics by <strong>Web-scrapping</strong> using <strong>Beautiful Soup Python Library</strong>',
                            'Incorporated use of Genius API',
                            'Deployed on <strong>Heroku</strong>']}/>

        <Project period="Aug 2016 - Nov 2016"
                   role="Software Developer" 
                   name="Taskell (Desktop Task Manager Application)"
            description={['Led a team of 4 to the completion of the project',
                          'Devised workflow plan for the team',
                          'Responsible for code quality of the overall project',
                          'Handled initial refactoring so that project stems from a solid foundation',
                          'Designed parser component & provided flexibility in commands',
                          'Contributed to overall documentation in <strong>markdown</strong>',
                          'Designed project website']}/>
      
        <Project period="Aug 2016 - Nov 2016"
                   role="Software Developer" 
                   name="Taskell (Desktop Task Manager Application)"
            description={['Led a team of 4 to the completion of the project',
                          'Devised workflow plan for the team',
                          'Responsible for code quality of the overall project',
                          'Handled initial refactoring so that project stems from a solid foundation',
                          'Designed parser component & provided flexibility in commands',
                          'Contributed to overall documentation in <strong>markdown</strong>',
                          'Designed project website']}/>

        <Project period="May 2016 - Aug 2016"
                   role="Android Mobile Developer" 
                   name="Bomb Squad (Multiplayer Android Mobile Quiz Game)"
            description={['Developed front end using <strong>Android Studio and Java</strong>',
                          'Developed back end using <strong>PHP</strong> and <strong>MySQLi</strong>',
                          'Project featured on Facebook of NUS School of Computing']}/>

      </div>
    );
  }
}
