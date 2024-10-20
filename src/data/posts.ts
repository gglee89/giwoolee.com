import { faker } from '@faker-js/faker'

export const PostsName = {
    Post1: faker.lorem.word(),
    Post2: faker.lorem.word(),
    Post3: faker.lorem.word(),
    Post4: faker.lorem.word(),
} as const

export type PostsNameType = (typeof PostsName)[keyof typeof PostsName]

export type ContentType = {
    content: string
    type: 'text'
}

type PostsContent = {
    introduction: Record<string, ContentType>
    body: Record<string, ContentType>
    conclusion: Record<string, ContentType>
}
export type PostsType = { [key in PostsNameType]: PostsContent }

const posts: PostsType = {
    [PostsName.Post1]: {
        introduction: {
            paragraph1: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(), type: 'text' },
        },
        body: {
            paragraph1: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph2: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph3: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph4: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph5: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph6: { content: faker.lorem.paragraph(6), type: 'text' },
        },
        conclusion: {
            paragraph1: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(2), type: 'text' },
            paragraph4: { content: faker.lorem.paragraph(2), type: 'text' },
        },
    },
    [PostsName.Post2]: {
        introduction: {
            paragraph1: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(), type: 'text' },
        },
        body: {
            paragraph1: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph2: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph3: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph4: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph5: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph6: { content: faker.lorem.paragraph(6), type: 'text' },
        },
        conclusion: {
            paragraph1: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(2), type: 'text' },
            paragraph4: { content: faker.lorem.paragraph(2), type: 'text' },
        },
    },
    [PostsName.Post3]: {
        introduction: {
            paragraph1: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(), type: 'text' },
        },
        body: {
            paragraph1: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph2: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph3: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph4: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph5: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph6: { content: faker.lorem.paragraph(6), type: 'text' },
        },
        conclusion: {
            paragraph1: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(2), type: 'text' },
            paragraph4: { content: faker.lorem.paragraph(2), type: 'text' },
        },
    },
    [PostsName.Post4]: {
        introduction: {
            paragraph1: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(), type: 'text' },
        },
        body: {
            paragraph1: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph2: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph3: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph4: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph5: {
                content: faker.lorem.paragraph(
                    faker.number.int({ min: 0, max: 10 })
                ),
                type: 'text',
            },
            paragraph6: { content: faker.lorem.paragraph(6), type: 'text' },
        },
        conclusion: {
            paragraph1: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph2: { content: faker.lorem.paragraph(3), type: 'text' },
            paragraph3: { content: faker.lorem.paragraph(2), type: 'text' },
            paragraph4: { content: faker.lorem.paragraph(2), type: 'text' },
        },
    },
}

export default posts
