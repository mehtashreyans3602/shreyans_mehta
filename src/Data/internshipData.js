// @/Data/internshipsData.js
const InternshipsData = [
    {
        id: 1,
        role: "Big Data SQL Developer",
        company: "Everlytics Data Science Pte Ltd.",
        location: "India",
        period: "Mar 2024 – Jul 2024",
        type: "Internship",
        accent: "blue",
        description:
            "Worked with Teradata Data Warehouse on data engineering tasks — data inspection, attribute correction, record validation, and ETL pipeline maintenance to ensure high data quality.",
        highlights: [
            "Developed Python & Linux shell scripts to automate data inspection, processing, and transfer workflows.",
            "Migrated data from Teradata to SingleStore with validation checks for source–target consistency.",
            "Monitored data transfer operations and database node health, assisting with node restart and recovery.",
        ],
        tech: ["Teradata", "SingleStore", "Python", "Linux", "SQL", "ETL"],
        focus: {
            label: "Data Eng.",
            note: "ETL pipelines, warehouse migrations & automation.",
        },
    },
    {
        id: 2,
        role: "IoT Developer",
        company: "Agrem Technosol",
        location: "India",
        period: "May 2023 – Jul 2023",
        type: "Internship",
        accent: "green",
        description:
            "Contributed to the development and signal processing of a Pressure and Depth Sensor prototype for an underwater craft.",
        highlights: [
            "Gained hands-on knowledge of sensor programming and integration using C.",
            "Worked on interfacing technology and Socket Programming in C#.",
            "Delivered high-quality work within project timelines.",
        ],
        tech: ["C", "C#", "Sensors", "Socket Programming", "Signal Processing"],
        focus: {
            label: "Embedded / IoT",
            note: "Sensor integration, signal processing & socket comms.",
        },
    },
    {
        id: 3,
        role: "Software Developer",
        company: "Amor Innovations Pvt. Ltd.",
        location: "India",
        period: "Jun 2020 – Aug 2020",
        type: "Internship",
        accent: "purple",
        description:
            "Built front-end web pages for the 'LoveMySkool' app using Vue.js and integrated them with a Django backend.",
        highlights: [
            "Developed reusable web pages in Vue.js and wired them into Django views.",
            "Gained practical experience building and integrating front-end with Django back-end.",
            "Collaborated with a team to meet project requirements and deliver on schedule.",
        ],
        tech: ["Vue.js", "Django", "JavaScript", "HTML/CSS"],
        focus: {
            label: "Full-Stack",
            note: "Vue.js front-end wired into Django back-end.",
        },
    },
];

export default InternshipsData;