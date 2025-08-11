import React from 'react';
import Style from './leetSection.module.css';
import { SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const LeetSection = () => {
  return (
    <div id="leet" className={Style.leetSection}>
      <div className={Style.leetContainer}>
        <h2 className={Style.sectionTitle}>LeetCode Profile</h2>
        
        {/* Profile Link Section */}
        <div className={Style.profileSection}>
          <div className={Style.profileInfo}>
            <SiLeetcode className={Style.leetIcon} />
            <div className={Style.profileText}>
              <h3>Check out my LeetCode journey!</h3>
              <p>Solving problems, building skills, and maintaining streaks</p>
            </div>
          </div>
          <a 
            href="https://leetcode.com/u/Noob_Master08/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={Style.profileLink}
          >
            <span>View Profile</span>
            <FaExternalLinkAlt className={Style.externalIcon} />
          </a>
        </div>

        {/* Stats Section */}
        <div className={Style.statsSection}>
          <div className={Style.statCard}>
            <h4>Problems Solved</h4>
            <span className={Style.statNumber}>500+</span>
          </div>
          <div className={Style.statCard}>
            <h4>Max Streak</h4>
            <span className={Style.statNumber}>40+</span>
          </div>
          <div className={Style.statCard}>
            <h4>Badges</h4>
            <span className={Style.statNumber}>13+</span>
          </div>
        </div>

        {/* Streaks Showcase */}
        <div className={Style.streaksSection}>
          <h3 className={Style.streaksTitle}>LeetCode Highlights</h3>
          <div className={Style.streaksGrid}>
            <div className={Style.streakCard}>
              <img 
                src={require('../../media/problemsSolved.png')} 
                alt="LeetCode Problems Solved" 
                className={Style.streakImage}
              />
              <div className={Style.streakOverlay}>
                <span className={Style.streakText}>500+ Problems Solved</span>
              </div>
            </div>
            <div className={Style.streakCard}>
              <img 
                src={require('../../media/streak2024.png')} 
                alt="LeetCode Streak 2024" 
                className={Style.streakImage}
              />
              <div className={Style.streakOverlay}>
                <span className={Style.streakText}>2024 Streak Achievement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={Style.ctaSection}>
          <p>Ready to solve some problems together?</p>
          <a 
            href="https://leetcode.com/u/Noob_Master08/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={Style.ctaButton}
          >
            Join Me on LeetCode
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetSection;