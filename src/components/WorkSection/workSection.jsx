import React from 'react'
import NFTMarket from './Major/NFTMarket/NFTMarket';
import Telemed from './Major/Telemed/Telemed';
import AttendanceSystem from './Minor/AttendanceSystem/AttendanceSystem';
import Cron from './Minor/Cron/Cron';
import TerminalChat from './Minor/TerminalChat/TerminalChat';
import Portfolio from './Major/Portfolio/Portfolio';

//internal imports
import Style from './workSection.module.css';

const workSection = () => {
    return (
        <div  id="Projects" className={Style.workSection}>
            <div className={Style.workSection_title}>Projects</div>
            <NFTMarket />
            <Telemed />
            {/* <Portfolio /> */}
            <div className={Style.workSection_title}>Prototypes</div>
            <AttendanceSystem />
            <Cron />
            <TerminalChat />
        </div>
    )
}

export default workSection;