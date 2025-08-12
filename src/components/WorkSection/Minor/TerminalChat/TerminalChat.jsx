import React from 'react'
import Style from './TerminalChat.module.css'
import { FaGithub } from 'react-icons/fa';

const TerminalChat = () => {
    return (
        <div className={Style.TerminalChat}>
            <div className={Style.TerminalChat_box}>
                <h2>CLI Group Chat Application</h2>
                <p>
                    A terminal-based real-time messaging tool enabling multi-user communication.
                    Built with C++ and Winsock, supporting simultaneous connections through a server–client architecture.
                    Facilitates group chats where multiple participants can send and receive messages instantly.
                    Lightweight, fast, and optimized for low-latency text-based communication.
                </p>

                <div className={Style.TerminalChat_tech}>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li><strong>Language:</strong> C++</li>
                        <li><strong>Networking:</strong> Winsock</li>
                        <li><strong>Protocol:</strong> TCP/IP Networking</li>
                    </ul>
                </div>

                <div className={Style.TerminalChat_github}>
                    <a
                        href="https://github.com/Noobie0805/CLI_Chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Style.github_link}
                    >
                        <FaGithub />
                        <span>View on GitHub</span>
                    </a>
                </div>

                <div className={Style.TerminalChat_box_sample}>
                    {/* Image goes here */}
                </div>
            </div>
        </div>
    )
}

export default TerminalChat