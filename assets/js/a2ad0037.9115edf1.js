"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},i="SpringBoot \u5feb\u901f\u5f00\u59cb",p={unversionedId:"LinuxBasics/SpringBoot/SpringBoot Quicklystart",id:"LinuxBasics/SpringBoot/SpringBoot Quicklystart",title:"SpringBoot \u5feb\u901f\u5f00\u59cb",description:"Hello World",source:"@site/docs/LinuxBasics/SpringBoot/SpringBoot Quicklystart.md",sourceDirName:"LinuxBasics/SpringBoot",slug:"/LinuxBasics/SpringBoot/SpringBoot Quicklystart",permalink:"/docs/LinuxBasics/SpringBoot/SpringBoot Quicklystart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/SpringBoot/SpringBoot Quicklystart.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"SpringBoot",permalink:"/docs/category/springboot"},next:{title:"Docker\u4e2d\u8fd0\u884cspringboot",permalink:"/docs/LinuxBasics/SpringBoot/SpringBoot in Docker"}},l={},c=[{value:"Hello World",id:"hello-world",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],s={toc:c};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"springboot-\u5feb\u901f\u5f00\u59cb"},"SpringBoot \u5feb\u901f\u5f00\u59cb"),(0,o.kt)("h2",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,"\u9884\u5148\u51c6\u5907\u73af\u5883\uff1ajdk\uff0cmvn\uff0cspringboot cli\uff0c\u4ee5\u4e0b\u4ec5\u5217\u51fa\u5173\u952e\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ecehttps://www.oracle.com/java/technologies/downloads/archive/\u83b7\u53d6\u6240\u9700\u7248\u672c\u7684jdk\n$ tar xf jdk-8u301-linux-x64.tar.gz -C /usr/local/\n$ cat >> /etc/profile << 'EOF'\nexport JAVA_HOME=/usr/local/jdk1.8.0_301\nPATH=${PATH}:$JAVA_HOME/bin\n$ java -version     # check java was installed\n\n# \u5b89\u88c5mvn\u6216\u8005Gradle\n# on debian series\n$ sudo apt-get install maven\n$ mvn -c        # check maven was installed\n\n# springboot cli\n$ wget https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.5.6/spring-boot-cli-2.5.6-bin.zip\n# ...\u7136\u540e\u4f60\u61c2\u5f97\u3002\u3002\u3002\n")),(0,o.kt)("p",null,"\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>myproject</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.5.6</version>\n\n    </parent>\n\n    \x3c!-- Additional lines to be added here... --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n    \n</project>\n')),(0,o.kt)("p",null,"\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"src/java/MyApplication.java"),"\uff0c\u6211\u7684\u7b2c\u4e00\u4e2aspringboot\u5e94\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.EnableAutoConfiguration;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@EnableAutoConfiguration\npublic class MyApplication {\n\n    @RequestMapping("/")\n    String home() {\n        return "Hello World!";\n    }\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyApplication.class, args);\n    }\n\n}\n')),(0,o.kt)("p",null,"\u5b8c\u6210\u4e4b\u540e\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),"\u68c0\u67e5\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn spring-boot:run\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.5.6)\n\n2021-10-26 09:45:19.505  INFO 28511 --- [           main] MyApplication                            : Starting MyApplication using Java 1.8.0_301 on ideapad-15ISK with PID 28511 (/home/agou-ops/GitHub_workspace/springboot-sample/target/myproject-0.0.1-SNAPSHOT.jar started by agou-ops in /home/agou-ops/GitHub_workspace/springboot-sample)\n2021-10-26 09:45:19.512  INFO 28511 --- [           main] MyApplication                            : No active profile set, falling back to default profiles: default\n2021-10-26 09:45:20.730  INFO 28511 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)\n2021-10-26 09:45:20.751  INFO 28511 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2021-10-26 09:45:20.751  INFO 28511 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.54]\n2021-10-26 09:45:20.867  INFO 28511 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2021-10-26 09:45:20.867  INFO 28511 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1223 ms\n2021-10-26 09:45:21.383  INFO 28511 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''\n2021-10-26 09:45:21.406  INFO 28511 --- [           main] MyApplication                            : Started MyApplication in 2.481 seconds (JVM running for 2.93)\n2021-10-26 09:45:34.339  INFO 28511 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2021-10-26 09:45:34.339  INFO 28511 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'\n2021-10-26 09:45:34.341  INFO 28511 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms\n")),(0,o.kt)("p",null,"\u6253\u5305\u793a\u4f8b\u5e76\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn package           # \u5b8c\u6210\u8be5\u547d\u4ee4\u4e4b\u540e\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a`target`\u7684\u6587\u4ef6\u5939\uff0c\u8be5\u6587\u4ef6\u5939\u5185\u6709\u4e00\u4e2ajar\u5305\uff0c\u8fd9\u4e2a\u5305\u5c31\u662f\u6211\u4eec\u6240\u9700\u7684\u4e86.\n$ jar tvf target/myproject-0.0.1-SNAPSHOT.jar           # \u67e5\u770bjar\u5305\u91cc\u9762\u7684\u5185\u5bb9\n$ jar -jar target/myproject-0.0.1-SNAPSHOT.jar          # \u8fd0\u884cjar\u5305\uff0c\u548c\u4e0a\u9762\u4f7f\u7528mvn spring-boot:run\u547d\u4ee4\u8fd0\u884c\u7ed3\u679c\u4e00\u81f4\n")),(0,o.kt)("p",null,"\ud83d\ude04Done. "),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"springboot getting started: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html"},"https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html"))))}g.isMDXComponent=!0}}]);