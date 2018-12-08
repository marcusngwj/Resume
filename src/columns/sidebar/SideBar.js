import React, { Component } from 'react';

import PersonalData from './components/personal_data/PersonalData';
import LanguageProficiency from './components/language/LanguageProficiency';
import ProgrammingSkills from './components/programming_skills/ProgrammingSkills';
import Tools from './components/tools/Tools';
import TechnicalExperiences from './components/technical_experiences/TechnicalExperiences';

export default class SideBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="sidebar">
        <PersonalData />
        <LanguageProficiency />
        <ProgrammingSkills />
        <Tools />
        <TechnicalExperiences />
      </div>
    );
  }
}
