import React from "react";
import ProjectCard from "../project-card/ProjectCard.jsx"

const ProjectsInfo = () => {
    const projects = [
        {   animation: 'slide-in-left',
            image: 'Neslo.ico',
            imageBackground: 'Neslo_bg.jpg',
            title:  'Neslo | Premium Windows and Doors',
            description: 'A premium windows and doors company based in central Alberta.',
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
        {   animation: 'slide-in-right',
            image: 'Skalarly.ico',
            imageBackground: 'Skalarly_bg.jpg',
            title:  'Skalarly | Academic Media',
            description: 'An academic social media platform for post secondary schools across Canada.',
            projectDetails: {
                keyFeatures: [
                    'User-Friendly Interface: Easy navigation and intuitive design for a seamless user experience',
                    'Personalized Content: Institution specific, with the capability to view of schools',
                    'Collaboration Tools: Features for connecting with peers, institutions, and academic information',
                    'Academic Resources: Access to research papers, journals, and other valuable academic materials'
                    // 'Secure Platform: Robust security measures to protect user data and privacy'
                ],
                technologies: {
                    frontEnd: [
                        'Angular SSR: Server-side rendering for faster page loads and better SEO',
                        'Bootstrap: Responsive design framework for a consistent and attractive user interface',
                        'rxjs: Reactive programming library for handling asynchronous events with ease'
                    ],
                    backEnd: [
                        'Node.js: A powerful and versatile runtime environment for building scalable server-side applications.',
                        'Express.js: A minimal and flexible framework for building web applications and APIs with Node.js.',
                        'reCAPTCHA: A robust security service that helps protect websites from spam and abuse.'
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
            repoUrl: 'https://github.com/Olsenc07/Skalarly',
            url: 'https://www.skalarly.com'
            }
        }
    ]

return(
    <div className="container"> 
    <div className="row"  justifyContent="center"> 
        {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}> 
                <ProjectCard message={project} />
            </div>
        ))}
    </div>
</div>
)
};

export default ProjectsInfo;