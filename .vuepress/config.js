module.exports = {
  "title": "zz的blog",
  "description": "用于记录前端知识总结",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
     /*  {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      }, */
      {
        "text": "其他",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/helloworldhzx",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
     /*  {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      } */
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "zz",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021",
    "valineConfig": {     // valine 评论功能配置信息
      "appId": 'VMhbk5gE7R1SibNgF4w5NF2D-gzGzoHsz',// your appId
      "appKey": 'Xybi3vByiG2mAvBmoqd3djnI', // your appKey
      "placeholder": '尽情留下你想说的话吧~',           // 评论框占位符
      "avatar": 'wavatar',           // 评论用户的头像类型
      "highlight": true,         // 代码高亮
      "recordIP": true,         // 记录评论者的IP
    },
  },
  "markdown": {
    "lineNumbers": true
  }
}