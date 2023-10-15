import { RuleCreator } from '@typescript-eslint/utils/eslint-utils'
const createRule = RuleCreator((name) => `/tmp/reproduce/${name}.md`)

const rule = createRule({
    name: 'reproduce',
    meta: {
        docs: {
            description: 'reproduce'
        },
        messages: {},
        schema: [],
        type: 'problem'
    },
    defaultOptions: [],
    create(_context) {
        return {}
    }
})

export { rule }