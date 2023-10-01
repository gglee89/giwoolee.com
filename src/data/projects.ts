export const ProjectsName = {
    RealSpiel: 'Real Spiel',
    RockyRobots: 'Rocky Robots',
    Avocado: 'Avocado',
    Hdbcsi: 'HDBCSI',
    Makestar: 'Makestar',
    MarshallGoldsmith: 'Marshall Goldsmith',
} as const

export type ProjectsNameType = (typeof ProjectsName)[keyof typeof ProjectsName]

export type ContentType = {
    content: string | string[]
    type: 'field' | 'array' | 'text'
}

type ProjectsContent = {
    basics: {
        company: ContentType
        name: ContentType
        alias: ContentType
        keywords: ContentType
        role: ContentType
        year: ContentType
    }
    description: { [key: string]: ContentType }
    aboutCompany: {
        country: ContentType
        city: ContentType
        statement: ContentType
    }
}
export type ProjectsType = { [key in ProjectsNameType]: ProjectsContent }

const projects: ProjectsType = {
    [ProjectsName.RealSpiel]: {
        basics: {
            company: { content: 'iSensorAnalytics.', type: 'field' },
            name: { content: 'Real Spiel', type: 'field' },
            alias: { content: 'Real Spiel', type: 'field' },
            keywords: {
                content: [
                    'Draft',
                    'Online Deception',
                    'Data Collection',
                    'Chat Application',
                    'Game Platform',
                ],
                type: 'array',
            },
            role: { content: 'Research Assistant', type: 'field' },
            year: { content: '2019 - Today', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    "Development of Web-based Gaming Platform to support Dr.Shuyuan Ho's research on Online Deception",
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'Florida', type: 'field' },
            city: { content: 'Tallahassee', type: 'field' },
            statement: {
                content:
                    'The iSensorLab is primarily dedicated to socio-technical research to study trustworthiness and other human behaviors related to cyber security on the web. This socio-technical research approach is based on a social-psychological theory, attribution theory, to model a sensor system, a conceptual framework of trustworthiness attribution which focuses on understanding how anomalous behavior of an individual can be detected by observers. We study how humans attribute meaning of the behavior of others with limited resources, i.e., in text-only, cue-lean environments',
                type: 'field',
            },
        },
    },
    [ProjectsName.RockyRobots]: {
        basics: {
            company: { content: 'Rocky Robots Inc.', type: 'field' },
            name: { content: 'Rocky App', type: 'field' },
            alias: { content: 'Rocky App', type: 'field' },
            keywords: {
                content: [
                    'Conversational AI',
                    'Robotics',
                    'Accountability Assistant',
                ],
                type: 'array',
            },
            role: { content: 'Software Engineer (Remote)', type: 'field' },
            year: { content: '2018 - 2019', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    "Interface built to challenge the status-quo of AGI (Artificial General Intelligence) with a robust Conversation AI app. React Native's hybrid compatibility, makes assembling an interface for both iOS and android super fun!",
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'Germany', type: 'field' },
            city: { content: 'Munich', type: 'field' },
            statement: {
                content:
                    'Rocky Robots Inc. is an early-stage technology start-up within the Robotics & Artificial Intelligence sector. Rocky Robots Inc. is taking an innovative approach to developing the next-generation artificial intelligence to enhance existing and future robotics while bringing a new solution for the self-improvement market.',
                type: 'field',
            },
        },
    },
    [ProjectsName.Avocado]: {
        basics: {
            company: { content: 'Proof Suite Inc.', type: 'field' },
            name: { content: 'Avocado', type: 'field' },
            alias: { content: 'Avocado', type: 'field' },
            keywords: {
                content: ['Blockchain', 'Crypto', 'OTC'],
                type: 'array',
            },
            role: { content: 'Front End Engineer (On Site)', type: 'field' },
            year: { content: '2018/Feb - 2018/July', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    'Crafted advanced crypto finance platform to allow Trade, Analysis, Online Chat.',
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'South Korea', type: 'field' },
            city: { content: 'Seoul', type: 'field' },
            statement: {
                content:
                    'Proof Suite delivers institutional and retail platforms to meet the demands of the next generation of international finance. Proof offers Avocado and AMP. Avocado delivers the highest grade in blockchain data analytics, OTC trade capabilities, social networking, and in-depth market research reports to financial institutions.',
                type: 'field',
            },
        },
    },
    [ProjectsName.Hdbcsi]: {
        basics: {
            company: { content: 'SAP Labs Korea', type: 'field' },
            name: { content: 'HDBCSI', type: 'field' },
            alias: {
                content: 'Hana DB Crash Similarity Inspector',
                type: 'field',
            },
            keywords: {
                content: ['Quality Assurance', 'HanaDB', 'OpenUI5'],
                type: 'array',
            },
            role: { content: 'Front End Engineer (On Site)', type: 'field' },
            year: { content: '2015/Sep - 2016/Feb', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    "In charge of implementing QA (Quality Assurance)'s new task optimizer with SAP's UI5 (http://openui5.org/). Intuitive UI/UX added to smooth interactibility, made possible for the synergy between System tester and Developers to flourish.",
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'South Korea', type: 'field' },
            city: { content: 'Seoul', type: 'field' },
            statement: {
                content:
                    'SAP SE is a German-based European multinational software corporation that makes enterprise software to manage business operations and customer relations. SAP is headquartered in Walldorf, Baden-Württemberg, Germany with regional offices in 180 countries.',
                type: 'field',
            },
        },
    },
    [ProjectsName.Makestar]: {
        basics: {
            company: {
                content: 'Makestar Global K-POP Crowdfunding Platform',
                type: 'field',
            },
            name: { content: 'Makestar K-POP', type: 'field' },
            alias: { content: 'Makestar (K-POP)', type: 'field' },
            keywords: {
                content: ['K-POP', 'Crowdfunding', 'OpenUI5'],
                type: 'array',
            },
            role: { content: 'Front End Engineer (Contractor)', type: 'field' },
            year: { content: '2016/May - 2016/October', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    'Worked closely with Graphic & UI designer to convert design mockups into interactive Front End. ',
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'South Korea', type: 'field' },
            city: { content: 'Seoul', type: 'field' },
            statement: {
                content:
                    'Makestar is a Global K-POP Crowdfunding Platform. Connecting global fans with K-POP artists in the process of producing their content.',
                type: 'text',
            },
        },
    },
    [ProjectsName.MarshallGoldsmith]: {
        basics: {
            company: {
                content: 'Makestar Global K-POP Crowdfunding Platform',
                type: 'field',
            },
            name: { content: 'Marshall Goldsmith', type: 'field' },
            alias: {
                content: 'Leadership Grwoth Progress Review (LGPR)',
                type: 'field',
            },
            keywords: {
                content: ['Leadership Development', 'Measurable'],
                type: 'array',
            },
            role: { content: 'Front End Engineer (Contractor)', type: 'field' },
            year: { content: '2016/May - 2016/October', type: 'field' },
        },
        description: {
            'What was done': {
                content:
                    'Led development of executive coaching platform to assess leadership growth.',
                type: 'text',
            },
        },
        aboutCompany: {
            country: { content: 'South Korea', type: 'field' },
            city: { content: 'Seoul', type: 'field' },
            statement: {
                content:
                    'Marshall Goldsmith Stakeholder Centered Coaching is the largest executive coach network in the world.  Headed by luminaries in executive coaching and leadership thinking, our Executive Team is at the forefront of measurably growing leadership effectiveness around the world.',
                type: 'text',
            },
        },
    },
}

export default projects
