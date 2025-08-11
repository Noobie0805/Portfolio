import React from 'react';
import Style from './stackSection.module.css';
import { 
  SiC, 
  SiCplusplus, 
  SiMysql, 
  SiJavascript, 
  SiSolidity, 
  SiPhp,
  SiGithub,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';
import {DiVisualstudio} from 'react-icons/di'
import { BiLogoVisualStudio } from "react-icons/bi";
import {PiFileSqlBold } from "react-icons/pi";

const StackSection = () => {
  return (
    <div id="stack" className={Style.stackSection}>
      <div className={Style.stackContainer}>
        <h2 className={Style.sectionTitle}>Tech Stack</h2>
        
        {/* Languages */}
        <div className={Style.techCategory}>
          <h3 className={Style.categoryTitle}>Languages</h3>
          <div className={Style.techGrid}>
            <div className={Style.techIcon}>
              <SiC className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiCplusplus className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <PiFileSqlBold className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiJavascript className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiSolidity className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiPhp className={Style.techIconSvg} />
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className={Style.techCategory}>
          <h3 className={Style.categoryTitle}>Developer Tools</h3>
          <div className={Style.techGrid}>
            <div className={Style.techIcon}>
              <SiGithub className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <BiLogoVisualStudio className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <DiVisualstudio className={Style.techIconSvg} />
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className={Style.techCategory}>
          <h3 className={Style.categoryTitle}>Frameworks</h3>
          <div className={Style.techGrid}>
            <div className={Style.techIcon}>
              <SiExpress className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiNodedotjs className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiReact className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiSolidity className={Style.techIconSvg} />
            </div>
          </div>
        </div>

        {/* Cloud/Databases */}
        <div className={Style.techCategory}>
          <h3 className={Style.categoryTitle}>Cloud/Databases</h3>
          <div className={Style.techGrid}>
            <div className={Style.techIcon}>
              <SiMongodb className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiPostgresql className={Style.techIconSvg} />
            </div>
            <div className={Style.techIcon}>
              <SiMysql className={Style.techIconSvg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;