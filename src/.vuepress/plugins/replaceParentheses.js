const MarkdownItPlugin = (md) => {
    const parse = md.parse.bind(md);
    md.parse = (src, env) => {
        const newSrc = src
            .replace(/（/g, '<small class="parnt">')
            .replace(/）/g, '</small>');
        return parse(newSrc, env)
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