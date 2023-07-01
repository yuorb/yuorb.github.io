const MarkdownItPlugin = (md) => {
    const parse = md.parse.bind(md);
    md.parse = (src, env) => {
        return parse(src.replace(/（(.*?)）/g, '<small class="parnt">$1</small>'), env)
    }
}

export default (_options) => {
    return (_app) => {
        return {
            name: 'replace-parentheses',
            extendsMarkdown: (md) => {
                md.use(MarkdownItPlugin)
            },
        }
    }
}