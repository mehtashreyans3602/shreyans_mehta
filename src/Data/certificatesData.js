// @/Data/certificatesData.js
import ciscoPdf from "@/Assets/PDF/CISCO.pdf";
const CertificatesData = [
    {
        id: 1,
        Title: "IBM Data Science Professional Certificate",
        Issuer: "Coursera / IBM",
        Date: "Mar 2024",
        PdfLink: "https://www.coursera.org/account/accomplishments/professional-cert/WGKM8AJWSKXT", // Path inside /public
        Description: "Completed a comprehensive 10-course professional certificate covering data science fundamentals, Python for data analysis, SQL, machine learning, and data visualization. Gained hands-on experience with real-world datasets and built a capstone project applying the full data science methodology.",
        Skills: ["Python", "Data Analysis", "Machine Learning", "SQL"],
    },
    {
        id: 2,
        Title: "Artificial Intelligence A-Z: Learn How to Build an AI",
        Issuer: "Udemy",
        Date: "Jan 2024",
        PdfLink: "ude.my/UC-4bf38b46-4e3e-4cdb-9313-50b1d2ac8141",
        Description: "Built multiple AI models from scratch using Python and TensorFlow, including Q-Learning, Deep Q-Learning, and A3C. Implemented reinforcement learning algorithms to solve complex environments and gained practical experience in training and tuning neural networks.",
        Skills: ["Python", "TensorFlow", "Reinforcement Learning", "Neural Networks"],
    },
    {
        id: 3,
        Title: "Machine Learning Specialization",
        Issuer: "Deeplearning.io / Stanford / Coursera",
        Date: "Nov 2023",
        PdfLink: "/Certificates/ml-specialization.pdf",
        Description: "Mastered foundational machine learning concepts including supervised learning, advanced learning algorithms, and unsupervised learning. Implemented linear regression, logistic regression, neural networks, and recommender systems using NumPy and TensorFlow.",
        Skills: ["TensorFlow", "Neural Networks", "Regression", "NumPy"],
    },
    {
        id: 4,
        Title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
        Issuer: "Udemy",
        Date: "Aug 2023",
        PdfLink: "ude.my/UC-4ef195f2-2aa6-47b5-8888-7db126015098",
        Description: "Covered the full spectrum of machine learning techniques from data preprocessing to model selection. Built and evaluated models for regression, classification, clustering, and reinforcement learning using both Python and R, with hands-on projects throughout.",
        Skills: ["Python", "R", "Data Preprocessing", "Model Evaluation"],
    },
    {
        id: 5,
        Title: "Google UX Design Certificate",
        Issuer: "Google / Coursera",
        Date: "May 2023",
        PdfLink: "/Certificates/google-ux.pdf",
        Description: "Completed a rigorous 7-course program covering the full UX design process: empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, and conducting usability studies. Built a professional UX portfolio with three end-to-end projects.",
        Skills: ["Figma", "UX Research", "Prototyping", "Wireframing"],
    },
    {
        id: 6,
        Title: "Cybersecurity Essentials",
        Issuer: "Cisco Networking Academy",
        Date: "Feb 2023",
        PdfLink: ciscoPdf,
        Description: "Gained foundational knowledge in cybersecurity principles including threat detection, vulnerability assessment, network security, and cryptography. Learned to identify common attack vectors and implement basic security measures to protect systems and data.",
        Skills: ["Network Security", "Cryptography", "Threat Detection", "Vulnerability Assessment"],
    },
];

export default CertificatesData;