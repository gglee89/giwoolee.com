import type { Topic } from '@/modules/types'

const contacts: Record<string, { topics: Topic[] }> = {
    Academic: {
        topics: [
            {
                name: 'Florida State University',
                level: 'gl19f@fsu.edu',
                mail: 'gl19f@fsu.edu',
                seniority: '',
                icon: 'home',
            },
        ],
    },
    Professional: {
        topics: [
            {
                name: 'Frontend Engineer',
                level: 'giwoo@lifebit.ai',
                mail: 'giwoo@lifebit.ai',
                icon: 'email',
            },
            {
                name: 'FSU iSchool - Research Assistant',
                level: 'gl19f@fsu.edu',
                mail: 'gl19f@fsu.edu',
                icon: 'email',
            },
        ],
    },
    Personal: {
        topics: [
            {
                name: 'Gmail',
                level: 'gglee89@gmail.com',
                mail: 'gglee89@gmail.com',
                icon: 'contacts',
            },
        ],
    },
    'Social Media': {
        topics: [
            {
                name: 'Linkedin',
                level: 'High usage',
                link: 'https://linkedin.com/in/leegiwoo',
                icon: 'illustration',
            },
            {
                name: 'Twitter',
                level: 'Medium usage',
                link: 'https://twitter.com/giwoolee',
                icon: 'twitter',
            },
            {
                name: 'Instagram',
                level: 'Medium usage',
                link: 'https://instagram.com/gustavogiwoolee',
                icon: 'camera',
            },
            {
                name: 'Facebook',
                level: 'Low usage',
                link: 'https://facebook.com/giwoo.lee.16',
                icon: 'like',
            },
        ],
    },
}

export default contacts
