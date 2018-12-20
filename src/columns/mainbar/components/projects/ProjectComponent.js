import React, { Component } from 'react';

import './style.scss';
import Project from './Project';

export default class ProjectComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="project-component">
        <p className="title">Projects</p>
        <table>
          <tbody>
            <Project period="Dec 2018 – Present"
                       role="Web Developer" 
                       name="Personal Portfolio Website"
                description={['Design and create <strong>Single Page Application</strong> using <strong>React</strong>',
                              'Host website on <strong>Google Firebase</strong>',
                              'Use <strong>MDC React library</strong> to implement Google Material Design']}/>

            <Project period="Aug 2018 – Nov 2018"
                       role="Full Stack Web Developer" 
                       name="Crowdfunding Website"
                description={['Created and maintained database with <strong>PostgreSQL</strong>',
                              'Created components used in <strong>Front-end Development</strong>',
                              'Hosted website and database on <strong>Heroku</strong>']}/>
            
            <Project period="Aug 2018 – Nov 2018"
                       role="Network Engineer" 
                       name="P2P File Transfer Protocol"
                description={['Suggested overall architecture',
                              'Created heartbeat protocol for Tracker and Peers',
                              'Contributed to creation of API between Tracker and Peers']}/>

            <Project period="Aug 2017 – Nov 2017"
                       role="Software Developer" 
                       name="SpaXI(Static Program Analyzer)"
                description={['Specialised in parsing queries with <strong>Regex</strong>',
                              'Coordinated efforts of <strong>Quality Assurance</strong>',
                              'Automated <strong>Testing</strong> with <strong>Python</strong> and <strong>Bash</strong> scripts']}/>
            
            <Project period="Jan 2017"
                       role="Software Developer" 
                       name="kboxLyricsBot (Telegram Bot to search for song lyrics)"
                description={['Designed <strong>Software Architecture</strong>',
                              'Extract lyrics by <strong>Web-scrapping</strong> using <strong>Beautiful Soup Python Library</strong>',
                              'Incorporated use of Genius API',
                              'Deployed on <strong>Heroku</strong>']}/>

            <Project period="May 2016 – Aug 2016"
                       role="Android Mobile Developer" 
                       name="Bomb Squad (Multiplayer Android Mobile Quiz Game)"
                description={['Developed front end using <strong>Android Studio and Java</strong>',
                              'Developed back end using <strong>PHP</strong> and <strong>MySQLi</strong>',
                              'Project featured on Facebook of NUS School of Computing']}/>
          </tbody>
        </table>
      </div>
    );
  }
}


// Archive Projects
// <Project period="Aug 2016 – Nov 2016"
//                        role="Software Developer" 
//                        name="Taskell (Desktop Task Manager Application)"
//                 description={['Led a team of 4 to the completion of the project',
//                               'Devised workflow plan for the team',
//                               'Responsible for code quality of the overall project',
//                               'Handled initial refactoring so that project stems from a solid foundation',
//                               'Designed parser component & provided flexibility in commands',
//                               'Contributed to overall documentation in <strong>Markdown</strong>',
//                               'Designed project website']}/>