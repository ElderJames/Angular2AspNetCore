# Angular2AspNetCore
AspNet Core project with Covalent - An Angular2 and Materail Style CRM Template Solution

将Angular2完整项目与Asp.Net Core项目结合，通过ng-cli编译，在Asp.Net Core运行时直接将路由交由Angular托管

### 运行环境
- Node 6.9.5
- npm 3.10.10
- .NET Core SDK 1.0.0
- .NET Core 1.1.0
- Visual Studio 2017 或Visual Studio Code

### 使用方法

1. `git clone https://github.com/ElderJames/Angular2AspNetCore.git`
2. `cd Angular2AspNetCore`
3. `npm install`
4. `npm start`
5. `dotnet restore`
6. 'dotnet run'
7. 浏览器访问http://localhost:5000

### 原理

在Startup.cs文件中自定义了一个重定向中间件，将所以请求都定向到作为Angular主入口的index.html文件。如后面需加入Api和其他页面，只需要判断请求路径即可与MVC路由结合。

### 下一步

1. 利用Covalent模板设计CRM管理后台模板。
2. 编写MVC项目，加入权限管理。
3. 结合JavascriptService的服务端预渲染功能（之前尝试很久但是失败了，所以才出此下策先全部用angular-cli编译成全部前端渲染……）
4. 更多尝试
