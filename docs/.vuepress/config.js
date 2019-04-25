var sidebar = require(`./sidebar`)
var {
  sideBarGuide,
  sideBarDevelopment,
  sideBarCase,
  sideBarQuestion,
  sideBarChangelog
} = sidebar

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'IBPS平台',
      description: 'IBPS快速开发平台，采用领先的“领域驱动架构设计”统一分层架构，降低框架藕合度，提高系统灵活性。核心功能包括代码生成管理、表单设计器、工作流引擎、移动审批、报表工具。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'IBPS platform ',
      description: 'IBPS  development platform'
    }
  },
  head: [
    ['link', {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }],
    //百度推广
    ['script', {}, '']
  ],
  themeConfig: {
    // 项目仓库地址
    repo: '',
    // 文档仓库地址
    docsRepo: '',
    // 文档不是放在仓库的根目录下
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 多国语言
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '编辑此页',
        lastUpdated: '最后更新',
        nav: [{
            text: '用户手册',
            link: '/zh/guide/'
          },
          {
            text: '开发手册',
            link: '/zh/development/'
          },
          {
            text: '案例详解',
            link: '/zh/case/'
          },
          {
            text: '常见问题',
            link: '/zh/question/'
          },
          {
            text: '更新日志',
            link: '/zh/changelog/'
          },
          {
            text: '关注我们',
            items: [{
                text: '官网',
                link: 'http://www.bpmhome.cn'
              },
              {
                text: '论坛',
                link: 'http://bbs.bpmhome.cn'
              },
              {
                text: '联系我们',
                link: 'http://bpmhome.cn/contact/'
              }
            ]
          },

        ],
        sidebar: {
          '/zh/guide/': sideBarGuide(),
          '/zh/development/': sideBarDevelopment(),
          '/zh/case/': sideBarCase(),
          '/zh/question/': sideBarQuestion(),
          '/zh/changelog/': sideBarChangelog()
        }
      },
      //=========================英语==============================
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last update',
        nav: [{
            text: 'Guide',
            link: '/en/guide/'
          },
          {
            text: 'Development',
            link: '/en/development/'
          },
          {
            text: 'Case',
            link: '/en/case/'
          },
          {
            text: 'Question',
            link: '/en/question/'
          },
          {
            text: 'Changelog',
            link: '/en/changelog/'
          },
          {
            text: 'About us',
            items: [{
                text: 'Website',
                link: 'http://www.bpmhome.cn'
              },
              {
                text: 'BBS',
                link: 'http://bbs.bpmhome.cn'
              },
              {
                text: 'Contact us',
                link: 'http://bpmhome.cn/contact/'
              }
            ]
          },

        ],
        sidebar: {
          '/en/guide/': sideBarGuide(),
          '/en/development/': sideBarDevelopment(),
          '/en/case/': sideBarCase(),
          '/en/question/': sideBarQuestion(),
          '/en/changelog/': sideBarChangelog()
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}