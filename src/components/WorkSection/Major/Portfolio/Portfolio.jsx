import React from 'react'
import Style from './Portfolio.module.css';

const Portfolio = () => {
    return (
        <div className={Style.Portfolio}>
            <div className={Style.Portfolio_box}>
                <h2 className={Style.Portfolio_title}>My Portfolio</h2>
                <p className={Style.Portfolio_description}>A showcase of my work and projects.</p>
                <div className={Style.Portfolio_box_sample}>
                    {/* Images would go here */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio