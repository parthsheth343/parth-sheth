import { ExperienceData } from './types'
import nerveXLogo from '../media/nervex_logo.jpeg'
import blueprintLogo from '../media/blueprint_logo.jpeg'
import helloFairLogo from '../media/hellofair_logo.jpeg'
import mieLogo from '../media/uoftmie_logo.jpeg'
import theScoreLogo from '../media/thescore_logo.jpeg'
import cphoLOGO from '../media/CPHO.png'
import yscLOGO from '../media/YouthScienceCanada.png'
import acmLOGO from '../media/stanfordACM.png'
import jsLOGO from '../media/janestreet.png'

export const experienceData: ExperienceData[] = [
    {
        title: 'MLab Researcher',
        company: 'Stanford Association for Computing Machinery (ACM)',
        location: 'Stanford University',
        dates: 'Oct 2025 - Present',
        description: [
            'Collaborated with peers on a Stanford ACM MLab team to develop machine learning models for SemEval-2026 Task 12, a task on abductive event causal reasoning for large language models.',
            'Engineeered data-processing pipelines and experimented with LLM-based architectures to infer plausible causal explanations for real-world events from textual context, improving model reasoning under incomplete information.'
        ],
        logoSrc: acmLOGO
    },
    {
        title: 'IN FOCUS Fellow',
        company: 'Jane Street',
        location: 'New York, USA',
        dates: 'Jan 2026',
        description: [
            'Selected for Jane Street’s IN FOCUS trading track, an intensive week-long introduction to quantitative trading and research through probability, game theory, and market-making problems.',
            'Applied probability and game theory concepts through mock trading simulations, group games, and problem-solving sessions.'
        ],
        logoSrc: jsLOGO
    },
    {
        title: 'Researcher',
        company: 'Youth Science Canada',
        location: 'Calgary, Canada',
        dates: 'Jan 2024 - Aug 2025', 
        description: [
            'Developed a two-stage malaria diagnosis pipeline using the Broad Bioimage Benchmark Collection dataset of 1,364 microscopy images (80,000 cells). Trained models using PyTorch with an 80/20 train validation split on 800 images and a 564-image test set spanning six cell classes.',
            'Implemented a Faster R-CNN for region-of-interest detection and a CNN classifier for cell-type identification, achieving a 200x speedup over single-model approaches by separating segmentation and classification tasks.',
            'Received a Gold Medal at the Calgary Youth Science Fair and was one of 15 students selected to represent Calgary at the Canada-Wide Science Fair, earning a Bronze Medal and $7k in scholarships.'
        ],
        logoSrc: yscLOGO
    },
    {
        title: 'Physics Coach',
        company: 'Independent',
        location: 'Remote',
        dates: 'March 2024 - July 2025',
        description: [
            'Mentored over 10 students in advanced Physics Olympiad topics, including mechanics, electromagnetism, modern physics, and relativity, preparing them for the Canadian Physics Olympiad.',
            'Collaborated with Canadian Physics Olympiad alumni to organize the Canadian Junior Physics Olympiad (CJPhO) and deliver coaching to prospective students nationwide.'
        ],
        logoSrc: cphoLOGO
    },
    
    // {
    //     title: 'Software Engineer',
    //     company: 'UofT Department of Mechanical & Industrial Engineering',
    //     location: 'Toronto, ON',
    //     dates: 'January 2024 - April 2024',
    //     description:
    //         'Designed and developed a web application for morLab, led by Professor Dionne Aleman, to provide a user-friendly UI to create, view, and manage advanced and customizable pandemic simulations.',
    //     logoSrc: mieLogo
    // },
    // {
    //     title: 'Senior Project Developer',
    //     company: 'UofT Blueprint',
    //     location: 'Toronto, ON',
    //     dates: 'September 2023 - April 2024',
    //     description:
    //         'Spearheaded the development of a full-stack web and mobile application for the Center For Dreams, a non-profit focusing on educational and social integration programs for individuals with developmental disabilities.',
    //     logoSrc: blueprintLogo
    // },
    // {
    //     title: 'Software Engineer Intern',
    //     company: 'NerveX Neurotechnologies',
    //     location: 'Toronto, ON',
    //     dates: 'May 2023 - January 2024',
    //     description:
    //         'Enhanced API efficiency, developed a medical charting library, and streamlined data pipelines using modern technologies like .NET Core, ReactJS, TypeScript, Docker, and AWS Lambda.',
    //     logoSrc: nerveXLogo,
    // },
    // {
    //     title: 'Web Developer',
    //     company: 'UTMIST',
    //     location: 'Toronto, ON',
    //     dates: 'October 2022 - June 2023',
    //     description:
    //         'Designed and implemented the website for the inaugural edition of Hack the Mist, an applied machine learning MLH-partnered hackathon, by using ReactJS, Typescript, along with ChakraUI.',
    //     logoSrc: 'https://avatars.githubusercontent.com/u/42724991?s=200&v=4',
    // },
    // {
    //     title: 'Web Developer',
    //     company: 'Fair',
    //     location: 'Oxford, UK (Remote)',
    //     dates: 'May 2021 - May 2022',
    //     description:
    //         'Developed a prototype paper-trading web application using NextJS and Golang with live price information and trading functionality with mock accounts stored in MongoDB.',
    //     logoSrc:
    //         helloFairLogo,
    // },
]
