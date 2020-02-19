module.exports = {
    title: '法治前端页面及交互规范',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    dest: './docs/.vuepress/dist', // 设置输出目录
    // 注入到当前页面的 HTML <head> 中的标签
    base: '/fz-standard/',
    themeConfig: {
        sidebarDepth: 1,
        // 侧边栏配置
        sidebar: [{
            "children": [
                "/demo/part1/compatibility",
                "/demo/part1/unity",
                "/demo/part1/beauty",
                "/demo/part1/accessibility"
            ],
            "collapsable": false,
            "title": "整体要求说明"
        },
        {
            "children": [
                "/demo/part2/login",
                "/demo/part2/content"
            ],
            "collapsable": false,
            "title": "页面布局规范"
        },
        {
            "children": [
                "/demo/part3/name",
                "/demo/part3/icon",
                "/demo/part3/text"
            ],
            "collapsable": false,
            "title": "页面信息规范"
        },
        {
            "children": [
                "/demo/part4/pageRevert",
                "/demo/part4/dataValidate",
                "/demo/part4/dataOperate",
                "/demo/part4/infoTip",
                "/demo/part4/specialExplain"
            ],
            "collapsable": false,
            "title": "数据交互规范"
        },
        {
            "children": [
                "/demo/part5/login",
                "/demo/part5/nav",
                "/demo/part5/table",
                "/demo/part5/dialog",
                "/demo/part5/button",
                "/demo/part5/form",
                "/demo/part5/file"
            ],
            "collapsable": false,
            "title": "通用组件规范"
        }
        ]
    }
}