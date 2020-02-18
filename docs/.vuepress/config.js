module.exports = {
    title: '法治前端页面及交互规范',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    dest: './docs/.vuepress/dist', // 设置输出目录
    // 注入到当前页面的 HTML <head> 中的标签
    base: '/fz-standard/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', // 文档更新时间
        // 侧边栏配置
        sidebar: [{
            "children": [
                "/demo/part1/part1"
            ],
            "collapsable": false,
            "title": ""
        },
        {
            "children": [
                "/demo/part2/part2"
            ],
            "collapsable": false,
            "title": ""
        },
        {
            "children": [
                "/demo/part3/part3"
            ],
            "collapsable": false,
            "title": ""
        },
        {
            "children": [
                "/demo/part4/part4"
            ],
            "collapsable": false,
            "title": ""
        },
        {
            "children": [
                "/demo/part5/part5"
            ],
            "collapsable": false,
            "title": ""
        }
        ]
    }
}