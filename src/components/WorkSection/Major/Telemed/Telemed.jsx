import React from 'react'
import Style from './Telemed.module.css';
import ImageSlider from '../NFTMarket/ImageSlider';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Telemed = () => {
    const telemedImages = [
        {
            src: require('../../../../media/Project Snapshots/Telemed/Hero.png'),
            alt: 'Telemedix Hero Section',
            caption: 'Main landing page of the AI-driven telemedicine platform'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Ai_symptom_checker_1.png'),
            alt: 'AI Symptom Checker',
            caption: 'AI-powered symptom analysis and preliminary diagnosis'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Ai_symptom_checker_2.png'),
            alt: 'AI Symptom Checker Interface',
            caption: 'Interactive symptom checking interface with AI recommendations'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Book_consultation.png'),
            alt: 'Book Consultation',
            caption: 'Easy appointment booking and scheduling system'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Video_session.png'),
            alt: 'Video Session',
            caption: 'Real-time video consultation with healthcare providers'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Q&A.png'),
            alt: 'Q&A Section',
            caption: 'Interactive question and answer platform for medical queries'
        },
        {
            src: require('../../../../media/Project Snapshots/Telemed/Creators_section.png'),
            alt: 'Healthcare Providers',
            caption: 'Showcasing qualified healthcare professionals and specialists'
        }
    ];

    return (
        <div className={Style.Telemed}>
            <div className={Style.Telemed_box}>
                <div className={Style.Telemed_header}>
                    <h2 className={Style.Telemed_title}>Telemedix</h2>
                    <div className={Style.Telemed_buttons}>
                        <a
                            href="https://github.com/Noobie0805/TeleMed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={Style.project_button}
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a
                            href=""  //link here
                            target="_blank"
                            rel="noopener noreferrer"
                            className={Style.project_button}
                        >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>

                <div className={Style.Telemed_content}>
                    <div className={Style.Telemed_description_container}>
                        <div className={Style.Telemed_overview}>
                            <h3>Overview</h3>
                            <p>
                                An AI-driven telemedicine platform that provides healthcare services through intelligent symptom analysis, automated consultations, and real-time video sessions. The platform provides accessible, efficient, and personalized healthcare services while maintaining the standards of medical care and user privacy.
                            </p>
                        </div>

                        <div className={Style.Telemed_tech}>
                            <h3>Technologies Used</h3>
                            <ul>
                                <li><strong>Frontend:</strong> React.js, JavaScript</li>
                                <li><strong>AI & Machine Learning:</strong> Hugging Face Integration</li>
                                <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
                                <li><strong>Real-time Communication:</strong> Jitsimeet, video streaming APIs</li>
                                <li><strong>Development & Testing:</strong> JavaScript/TypeScript , Node.js, Express.js, MongoDB</li>
                            </ul>
                        </div>
                    </div>

                    <div className={Style.Telemed_slider_container}>
                        <ImageSlider images={telemedImages} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telemed