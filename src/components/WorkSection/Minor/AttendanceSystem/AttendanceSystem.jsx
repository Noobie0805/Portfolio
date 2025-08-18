import React from 'react'
import Style from './AttendanceSystem.module.css';
import { FaGithub } from 'react-icons/fa';

const AttendanceSystem = () => {
    return (
        <div className={Style.AttendanceSystem}>
            <div className={Style.AttendanceSystem_box}>
                <h2 className={Style.AttendanceSystem_title}>Facial Recognition Attendance System</h2>
                <p className={Style.AttendanceSystem_description}>
                    A Python-based solution for automated, contactless attendance tracking.
                    Developed using Python and OpenCV to detect and recognize faces in real-time.
                    Automatically marks attendance with timestamps and logs entries into a daily record file.
                    Ensures accuracy, speed, and secure record-keeping for streamlined attendance management.
                </p>

                <div className={Style.AttendanceSystem_tech}>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li><strong>Language:</strong> Python</li>
                        <li><strong>Computer Vision:</strong> OpenCV</li>
                        <li><strong>Face Recognition:</strong> Face Recognition Library</li>
                    </ul>
                </div>

                <div className={Style.AttendanceSystem_github}>
                    <a
                        href="https://github.com/Noobie0805/Attendance_System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Style.github_link}
                    >
                        <FaGithub />
                        <span>View on GitHub</span>
                    </a>
                </div>

                <div className={Style.AttendanceSystem_box_sample}>
                    {/* Images would go here */}
                </div>
            </div>
        </div>
    )
}

export default AttendanceSystem