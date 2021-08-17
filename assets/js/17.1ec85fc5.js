(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{515:function(s,e,a){"use strict";a.r(e);var r=a(6),n=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"热启动supervisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热启动supervisor"}},[s._v("#")]),s._v(" 热启动supervisor")]),s._v(" "),a("ol",[a("li",[s._v("npm install -g supervisor")]),s._v(" "),a("li",[s._v("使用 supervisor xxx.js启动")])]),s._v(" "),a("h2",{attrs:{id:"http-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[s._v("#")]),s._v(" http api")]),s._v(" "),a("ul",[a("li",[s._v("创建服务器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var http = require('http');\nhttp.createServer(function (request, response) {\n  response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript;httpOnly']); //写入cookie\n  response.writeHead(200,{\"Content-Type\":\"text/html;charset=UTF-8\"}); // 设置状态码，文件类型编码\n  response.end('Hello World');\n}).listen(8081);\n\nconsole.log('Server running at http://127.0.0.1:8081/');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"url-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-api"}},[s._v("#")]),s._v(" url api")]),s._v(" "),a("ul",[a("li",[s._v("url.parse()")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('url.parse("http://xxx.xx.com?name=zz&age=12",true) 第二个参数为true时将参数转换成对象{name:"zz",age:11}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("url.format(urlBbj) //url.parse()的逆向操作")]),s._v(" "),a("li",[s._v("url.resolve(from,to) //添加或者替换地址")])]),s._v(" "),a("h2",{attrs:{id:"fs-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs-api"}},[s._v("#")]),s._v(" fs api")]),s._v(" "),a("ul",[a("li",[s._v("fs.stat 检测是文件还是文件夹")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const fs = require('fs')\nfs.stat('./hello.js', (error, stats) =>{\n    stats.isFile() // true文件\n    stats.isDirectory() // true文件夹\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("fs.mkdir 创建文件夹")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const fs = require('fs')\nfs.mkdir('./hello.js', (error) =>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs.writeFile 创建写入文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 文件不存在先创建再写入\nfs.writeFile('logs/hello.log', '您好~', (error) => {})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs.appendFile 追加文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fs.appendFile('logs/hello.log', 'hello ~ \\n', (error) => {})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("fs.readFile 读取文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const fs = require('fs')\nfs.readFile('logs/hello.log', 'utf8', (error, data) =>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs.readdir 读取目录")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const fs = require('fs')\nfs.readdir('logs', (error, files) => {})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs.rename 重命名")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 地址不相同时相当于移动文件和修改名称\nconst fs = require('fs')\nfs.rename('js/hello.log', 'js/greeting.log', (error) =>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("fs.rmdir 删除目录")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 文件夹下文件需要先删除完\nfs.rmdir('logs', (error) =>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs.unlink 删除文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fs.unlink(`logs/${file}`, (error) => {})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("读取文件流")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var fs = require("fs");\nvar readStream = fs.createReadStream("./a.txt");\n\nvar count = 0\nreadStream.on("data",(data)=>{\n    count++\n})\nreadStream.on("end",()=>{\n    console.log(count)\n})\nreadStream.on("error",(err)=>{\n    console.log(err)\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("写入文件流")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var str = ""\nfor(var i=0;i<500;i++){\n    str+="呱唧呱唧钢结构好几个和规划局高合金钢呱唧呱唧钢结构好几个和规划局高合金钢"\n}\nvar fs = require("fs");\nvar writeStream = fs.createWriteStream("./b.txt");\nwriteStream.write(str);\n\nwriteStream.end(); // 写入结束，不加这个之后on不执行\n\nwriteStream.on("finish",()=>{\n    console.log("写入成功")\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("管道流")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var fs = require("fs");\nvar readStream = fs.createReadStream("./b.txt");\nvar writeStream = fs.createWriteStream("./file/b.txt");\nwriteStream.pipe(readStream) // 将读取的文件通过管道写入\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);