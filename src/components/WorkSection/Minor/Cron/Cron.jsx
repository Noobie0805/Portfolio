import React from 'react'
import Style from './Cron.module.css';
import { FaGithub } from 'react-icons/fa';

const Cron = () => {
    return (
        <div className={Style.Cron}>
            <div className={Style.Cron_box}>
                <h2 className={Style.Cron_title}>GitHub Timeline Email Notifier</h2>
                <p className={Style.Cron_description}>
                    A PHP-based subscription system that sends users periodic GitHub timeline updates via email. 
                    Allows email registration with verification and unsubscribe options. Uses a scheduled Cron job to fetch, 
                    format, and deliver the latest GitHub activity at set intervals. Stores subscriber data securely for 
                    automated and reliable notifications.
                </p>
                
                <div className={Style.Cron_tech}>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li><strong>Backend:</strong> PHP</li>
                        <li><strong>Automation:</strong> Cron</li>
                        <li><strong>Frontend:</strong> HTML</li>
                        <li><strong>API Integration:</strong> GitHub API</li>
                        <li><strong>Email Service:</strong> SMTP</li>
                    </ul>
                </div>
                
                <div className={Style.Cron_github}>
                    <a 
                        href="https://github.com/Noobie0805/timelineCron" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={Style.github_link}
                    >
                        <FaGithub />
                        <span>View on GitHub</span>
                    </a>
                </div>
                
                <div className={Style.Cron_box_sample}>
                    {/* Images would go here */}
                </div>
            </div>
        </div>
    )
}

export default Cron;