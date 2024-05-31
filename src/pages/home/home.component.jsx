import React from "react";
import { ProjectCard } from "../project-card/project-card.config.jsx"

const Home = () => {
    const projects = [
        {   animation: 'fadeIn',
            image: 'src/assets/Neslo.ico',
            title:  'Neslo | Premium Windows and Doors',
            description: 'A premium windows and doors company based in cenntral Alberta.',
            projectDetails: {
                keyFeatures: [
                    'Custom Imagery: High-quality, tailor-made images to enhance your brand identity',
                    'Interactive Design: Adapts seamlessly to all screen sizes while having a pleasant user experience.',
                    'Optimized SEO: Advanced techniques to improve your search engine rankings',
                    'Quote Generator: Informative and user-friendly quote generation for client services',
                    'Secure: Robust security measures to protect your privacy'
                ],
                technologies: {
                    frontEnd: [
                        'Angular SSR: Server-side rendering for faster page loads and better SEO',
                        'Bootstrap: Responsive design framework for a consistent and attractive user interface',
                        'rxjs: Reactive programming library for handling asynchronous events with ease'
                    ],
                    backEnd: [
                        'Node.js: Scalable and efficient server-side JavaScript runtime',
                        'Express: Lightweight framework for building fast and robust APIs',
                        'reCAPTCHA: Security service to protect against spam and abuse',
                        'Puppeteer: Headless browser automation for generating the quote pdf'
                    ],
                    ciCD: [
                        'Cypress: End-to-end testing framework to ensure code quality and reliability',
                        'Docker: Containerization platform for consistent development and deployment environments',
                        'Heroku: Cloud platform for efficient staging and deployment of applications',
                        'GitHub: Version control and storage for efficient code management'
                    ],
                    saas: [
                        'Cloudinary: Cloud-based media management solution for optimized image and video delivery',
                        'SendGrid: Email delivery service for reliable and scalable email communication'
                    ]
                },
            repoUrl: 'https://github.com/Olsenc07/Neslo',
            url: 'https://www.neslo.ca'
            }
        },
    ]

return(
    <div>
        <ProjectCard message={projects} />
    </div>

)
};

export default Home;