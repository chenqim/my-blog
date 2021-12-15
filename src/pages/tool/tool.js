function test () {
  const str = `Vue(Mobile),
  语言文档和规范,
  视频音频,
  React,
  函数式编程,
  web 框架,
  代码风格检查,
  编程教程,
  测试工具,
  编译构建,
  模板引擎,
  状态管理,
  技术周刊,
  小程序框架,
  Angular,
  CSS,
  工具,
  Vue(PC),
  Node.js & Deno,
  可视化工具,
  UmiJS 框架,
  ant design 系列`
  const arr = str.replace(/\ +/g, '').replace(/[\r\n]/g, '').split(',')
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push({
      label: arr[i],
      value: arr[i]
    })
  }
  console.log(result)
}
test()