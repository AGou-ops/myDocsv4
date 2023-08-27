"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5900],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(m,o(o({ref:n},k),{},{components:t})):a.createElement(m,o({ref:n},k))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},o="Jenkins Basic",s={unversionedId:"CloudNative/CICD/Jenkins/Jenkins Basic",id:"CloudNative/CICD/Jenkins/Jenkins Basic",title:"Jenkins Basic",description:"Jenkins\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u5f00\u6e90\u7684\u81ea\u52a8\u5316\u670d\u52a1\u5668\u53ef\u4ee5\u7528\u6765\u81ea\u52a8\u6267\u884c\u5404\u79cd\u5404\u6837\u7684\u4efb\u52a1\u76f8\u5173\u7684\u5efa\u7b51\u3001\u6d4b\u8bd5\u548c\u4ea4\u4ed8\u6216\u90e8\u7f72\u8f6f\u4ef6\u3002 Jenkins\u53ef\u4ee5\u901a\u8fc7\u672c\u673a\u7cfb\u7edf\u5b89\u88c5\u5305, Docker, \u751a\u81f3\u662f\u4efb\u4f55\u673a\u5668\u8fd0\u884c\u72ec\u7acb\u7684Java\u8fd0\u884c\u65f6\u73af\u5883(JRE)\u5b89\u88c5\u3002",source:"@site/docs/CloudNative/CICD/Jenkins/Jenkins Basic.md",sourceDirName:"CloudNative/CICD/Jenkins",slug:"/CloudNative/CICD/Jenkins/Jenkins Basic",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/CICD/Jenkins/Jenkins Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Jenkins Backup Restore",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Backup Restore"},next:{title:"Jenkins \u5e38\u7528\u63d2\u4ef6\u5217\u8868",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Plugins"}},l={},p=[{value:"\u5b89\u88c5\u4e0e\u4f7f\u7528",id:"\u5b89\u88c5\u4e0e\u4f7f\u7528",level:2},{value:"\u901a\u8fc7 Docker \u5b89\u88c5",id:"\u901a\u8fc7-docker-\u5b89\u88c5",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u5207\u6362\u8bed\u8a00\u4e3a\u7b80\u4f53\u4e2d\u6587",id:"\u5207\u6362\u8bed\u8a00\u4e3a\u7b80\u4f53\u4e2d\u6587",level:3},{value:"\u4fee\u6539\u9ed8\u8ba4\u76ee\u5f55",id:"\u4fee\u6539\u9ed8\u8ba4\u76ee\u5f55",level:3},{value:"\u4fee\u6539\u9ed8\u8ba4\u65f6\u533a",id:"\u4fee\u6539\u9ed8\u8ba4\u65f6\u533a",level:3},{value:"nginx\u53cd\u5411\u4ee3\u7406",id:"nginx\u53cd\u5411\u4ee3\u7406",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],k={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jenkins-basic"},"Jenkins Basic"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u5f00\u6e90\u7684\u81ea\u52a8\u5316\u670d\u52a1\u5668\u53ef\u4ee5\u7528\u6765\u81ea\u52a8\u6267\u884c\u5404\u79cd\u5404\u6837\u7684\u4efb\u52a1\u76f8\u5173\u7684\u5efa\u7b51\u3001\u6d4b\u8bd5\u548c\u4ea4\u4ed8\u6216\u90e8\u7f72\u8f6f\u4ef6\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"\u672c\u673a\u7cfb\u7edf\u5b89\u88c5\u5305"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker"),", \u751a\u81f3\u662f\u4efb\u4f55\u673a\u5668\u8fd0\u884c\u72ec\u7acb\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Java\u8fd0\u884c\u65f6\u73af\u5883(JRE)"),"\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4e0e\u4f7f\u7528"},"\u5b89\u88c5\u4e0e\u4f7f\u7528"),(0,r.kt)("p",null,"\u65b0\u7248\u672c",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u4f9d\u8d56\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"jdk8"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"jdk11"),", \u9700\u8981\u63d0\u524d\u5b89\u88c5, \u5b89\u88c5\u8fc7\u7a0b\u4e0d\u518d\u8d58\u8ff0."),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"war"),"\u5305\u8fdb\u884c\u5b89\u88c5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war\njava -jar jenkins.war\n")),(0,r.kt)("p",null,"\u6dfb\u52a0Jenkins\u6210\u670d\u52a1\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat /usr/lib/systemd/system/jenkins.service\n[Unit]\nDescription=Jenkins Continuous Integration Server\nRequires=network.target\nAfter=network.target\n\n[Service]\nType=notify\nNotifyAccess=main\nExecStart=/usr/local/jdk-17.0.6/bin/java -jar /usr/local/jenkins/jenkins.jar --httpPort=8080\nRestart=on-failure\nSuccessExitStatus=143\n\n# /etc/systemd/system/jenkins.service.d/override.conf\n[Service]\nEnvironment="JAVA_OPTS=-Djava.awt.headless=true"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u542f\u52a8\u8fc7\u7a0b\u4e2d\u62a5\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'java.lang.NullPointerException: Cannot load from short array because "sun.awt.FontConfiguration.head" is null\n    at java.desktop/sun.awt.FontConfiguration.getVersion(FontConfiguration.java:1262)\n    at java.desktop/sun.awt.FontConfiguration.readFontConfigFile(FontConfiguration.java:224)\n    at java.desktop/sun.awt.FontConfiguration.init(FontConfiguration.java:106)\n    at java.desktop/sun.awt.X11FontManager.createFontConfiguration(X11FontManager.java:706)\n    at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:358)\n    at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:315)\n    at java.base/java.security.AccessController.doPrivileged(AccessController.java:318)\n    at java.desktop/sun.font.SunFontManager.<init>(SunFontManager.java:315)\n    at java.desktop/sun.awt.FcFontManager.<init>(FcFontManager.java:35)\n    at java.desktop/sun.awt.X11FontManager.<init>(X11FontManager.java:56)\n    ...\n')),(0,r.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u65b9\u6cd5\uff1a\u5c1d\u8bd5\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"fontconfig"),"\u5305\u3002"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install fontconfig\n"))),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"yum"),"\u4ed3\u5e93\u6216\u8005\u76f4\u63a5\u4e0b\u8f7d",(0,r.kt)("inlineCode",{parentName:"p"},"rpm"),"\u5305\u5b89\u88c5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5\nsudo wget -O /etc/yum.repos.d/jenkins.repo \\\n    https://pkg.jenkins.io/redhat-stable/jenkins.repo\nsudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\nsudo yum upgrade\nsudo yum install jenkins java-1.8.0-openjdk-devel\n\n# \u76f4\u63a5\u4e0b\u8f7drpm\u5305\u5b89\u88c5\nwget https://pkg.jenkins.io/redhat-stable/jenkins-2.235.2-1.1.noarch.rpm\nyum localinstall -y jenkins-2.235.2-1.1.noarch.rpm\n# yum install -y https://pkg.jenkins.io/redhat-stable/jenkins-2.235.2-1.1.noarch.rpm\n")),(0,r.kt)("p",null,"\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u670d\u52a1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start jenkins\n# \u67e5\u770b\u542f\u52a8\u72b6\u6001\nsudo systemctl status jenkins\n\n# \u5982\u82e5\u4f7f\u7528\u7684\u662fwar\u5305, \u542f\u52a8\u547d\u4ee4\u5982\u4e0b\u6240\u793a\njava -jar jenkins.war --httpPort=9090\n")),(0,r.kt)("p",null,"\u6700\u540e, \u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee : ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")," , \u7b49\u5f85\u89e3\u9501",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u5373\u53ef.(",(0,r.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/#unlocking-jenkins"},"UNLOCK JENKINS"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/jenkins-1.png",alt:null})),(0,r.kt)("p",null,"\u7b49\u5f85\u5b89\u88c5\u63d2\u4ef6:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/jenkins-2.png",alt:"\u7b49\u5f85\u5b89\u88c5\u63d2\u4ef6"})),(0,r.kt)("p",null,"\u2139\ufe0f\u56fd\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\u63d2\u4ef6\u955c\u50cf\u6e90: ",(0,r.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json"},"https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Jenkins\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684\u95ee\u9898:")," "),(0,r.kt)("p",{parentName:"blockquote"},"Jenkins \u95ee\u9898",(0,r.kt)("inlineCode",{parentName:"p"}," An error occurred during installation: No such plugin: cloudbees-folder")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\u4e00:")),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u9762\u7684\u9519\u8bef\u663e\u793a\u662f\uff0c\u5b89\u88c5\u63d2\u4ef6 cloudbees-folder \u5931\u8d25\uff0c\u662f\u56e0\u4e3a\u4e0b\u8f7d\u7684 Jenkins.war \u91cc\u6ca1\u6709 cloudbees-folder \u63d2\u4ef6,\u9700\u8981\u53bb ",(0,r.kt)("a",{parentName:"li",href:"https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/"},"https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/")," \u4e0b\u8f7d\u4e00\u4e2a\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u8bbf\u95ee IP:PORT/manage\uff0c\u8d8a\u8fc7\u914d\u7f6e\u63d2\u4ef6\u7684\u9875\u9762\uff0c\u76f4\u63a5\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u3010\u7cfb\u7edf\u7ba1\u7406\u3011\u2013\u3010\u7ba1\u7406\u63d2\u4ef6\u3011\u2013\u3010\u9ad8\u7ea7\u3011\u2013\u3010\u4e0a\u4f20\u63d2\u4ef6\u3011\uff0c\u624b\u52a8\u5b89\u88c5\u4e0b\u8f7d\u597d\u7684\u63d2\u4ef6\uff0c\u5373\u53ef")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\u4e8c:")," "),(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u4fee\u6539\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins.war"),"\u5305\uff0c\u4ece\u670d\u52a1\u5668\u4e0a\u4e0b\u8f7d\u597d",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins.war"),"\u5305\u8fdb\u884c\u4fee\u6539, \u53ea\u9700\u5c06\u4ece",(0,r.kt)("a",{parentName:"p",href:"https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/"},"https://updates.jenkins-ci.org/download/plugins/cloudbees-folder/")," \u4e0b\u8f7d\u597d\u7684\u63d2\u4ef6\u6dfb\u52a0\u8fdb\u53bb, \u7136\u540e\u56de\u4f20\u5230\u670d\u52a1\u5668, \u6700\u540e\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u5373\u53ef.")),(0,r.kt)("p",null,"\u6210\u529f\u90e8\u7f72\u7ed3\u679c:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/jenkins-3.png",alt:null})),(0,r.kt)("h2",{id:"\u901a\u8fc7-docker-\u5b89\u88c5"},"\u901a\u8fc7 Docker \u5b89\u88c5"),(0,r.kt)("p",null,"\u5b98\u65b9",(0,r.kt)("inlineCode",{parentName:"p"},"Docker"),"\u4ed3\u5e93: ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/jenkins"},"https://hub.docker.com/_/jenkins")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull jenkins\n\ndocker run --name myjenkins -p 8080:8080 -p 50000:50000 -v /var/jenkins_home jenkins\n")),(0,r.kt)("p",null,"\u89c4\u8303\u5b89\u88c5\u6b65\u9aa4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u540d\u4e3adocker\u7684\u7528\u6237\u7ec4\n$ sudo groupadd docker\n# \u628a\u5f53\u524d\u7528\u6237\u52a0\u5165\u5230\u8fd9\u4e2a\u7528\u6237\u7ec4\u4e2d\n$ sudo usermod -aG docker $USER\n\n# \u521b\u5efajenkins\u7528\u6237\u5e76\u6dfb\u52a0\u540c\u540d\u7ec4\u3001\u521b\u5efa\u7528\u6237\u76ee\u5f55,\u9ed8\u8ba4shell\u4e3abash\n$ sudo useradd -mU jenkins -s /bin/bash \n$ sudo passwd jenkins #\u91cd\u7f6e\u5bc6\u7801\n$ su jenkins #\u4f7f\u7528jenkins\u7528\u6237\u767b\u5f55\n$ cd ~ #\u8fdb\u5165/home/jenkins\u76ee\u5f55\n\n# docker-compose.yml \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a\nversion: \'3\'\n\nservices:\n  jenkins-compose:\n    # \u6ce8\u610f\u955c\u50cf\u540d\u79f0\uff0clts\u8868\u793a\u957f\u671f\u652f\u6301\u7248\n    image: jenkins/jenkins:lts\n    privileged: true # \u89e3\u51b3\u6743\u9650\u95ee\u9898\n    restart: always \n    ports:\n     - "8088:8080"\n     - "50000:50000"\n    environment:\n     - JAVA_OPTS=-Duser.timezone=Asia/Shanghai\n    volumes:\n     - /var/run/docker.sock:/var/run/docker.sock\n     - /usr/bin/docker:/usr/bin/docker\n     - /home/ubuntu/jenkins-compose:/var/jenkins_home\n\n$ docker-compose up -d jenkins-compose\n')),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h3",{id:"\u5207\u6362\u8bed\u8a00\u4e3a\u7b80\u4f53\u4e2d\u6587"},"\u5207\u6362\u8bed\u8a00\u4e3a\u7b80\u4f53\u4e2d\u6587"),(0,r.kt)("p",null,"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"Locale plugin"),"\u63d2\u4ef6, \u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"configuration"),"\u7136\u540e\u8bbe\u7f6e\u8bed\u8a00\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"zh-CN"),"\u5e76\u52fe\u9009",(0,r.kt)("inlineCode",{parentName:"p"}," Ignore browser preference and force this language to all users"),"\u5373\u53ef."),(0,r.kt)("p",null,"\u26a0\ufe0f\u5982\u679c\u5b89\u88c5\u5b8c\u63d2\u4ef6\u663e\u793a\u6709\u90e8\u5206\u4e2d\u6587\u5f02\u5e38\u7684\u60c5\u51b5, \u9700\u8981\u518d\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"Localization: Chinese (Simplified)"),"\u63d2\u4ef6\u8bd5\u8bd5, \u5018\u82e5\u8fd8\u662f\u4e0d\u884c, \u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),", \u518d\u91cd\u65b0\u5b89\u88c5\u63d2\u4ef6\u8bd5\u8bd5."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/jenkins-4.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/jenkins-5.png",alt:null})),(0,r.kt)("p",null,"\u6700\u540e\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u5373\u53ef, \u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://xx.xx.xx.xx:8080/restart     # xx.xx.xx.xx \u4e3a\u670d\u52a1\u5668IP\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4\u76ee\u5f55"},"\u4fee\u6539\u9ed8\u8ba4\u76ee\u5f55"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Linux"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Mac"),"\u7cfb\u7edf\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u7684\u9ed8\u8ba4\u6587\u4ef6\u76ee\u5f55\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/jenkins"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"windows"),"\u7cfb\u7edf\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\%USERNAME%\\.jenkins"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"linux"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"li"},"Mac"),"\u7cfb\u7edf\u4e0b\u4fee\u6539:  \u53ea\u9700\u5728\u7528\u6237\u914d\u7f6e\u6587\u4ef6(",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/profile"),")\u4e2d\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"li"},"JENKINS_HOME"),"\u53d8\u91cf\u5373\u53ef."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Windows"),"\u4e0b\u4fee\u6539, \u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"li"},"JENKINS_HOME"),"\u5373\u53ef.")),(0,r.kt)("p",null,"\u7136\u540e\u5c06\u539f\u6765",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230\u65b0\u6587\u4ef6\u5939\u4e2d\u5373\u53ef."),(0,r.kt)("p",null,"\u6700\u540e\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u670d\u52a1. ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/restart"},"http://127.0.0.1:8080/restart")," "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Windows \u4e0b\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"jenkins"),"\u9047\u5230\u7684\u95ee\u9898: ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins cannot restart itself as currently configured.")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5:")),(0,r.kt)("p",{parentName:"blockquote"},"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"}," Manage Jenkins"),", \u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Install as Windows service"),", \u7136\u540e\u5b89\u88c5\u6210\u4e3a\u670d\u52a1\u5373\u53ef.")),(0,r.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4\u65f6\u533a"},"\u4fee\u6539\u9ed8\u8ba4\u65f6\u533a"),(0,r.kt)("p",null,"\u5728\u3010\u7cfb\u7edf\u7ba1\u7406\u3011-\u3010\u811a\u672c\u547d\u4ee4\u884c\u3011\u91cc\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"System.setProperty('org.apache.commons.jelly.tags.fmt.timeZone', 'Asia/Shanghai')\n")),(0,r.kt)("h2",{id:"nginx\u53cd\u5411\u4ee3\u7406"},"nginx\u53cd\u5411\u4ee3\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'server {\n    listen      80;\n    listen      [::]:80;\n    server_name jenkins.localmac.com;\n\n    # security\n    # include     nginxconfig.io/security.conf;\n\n    # logging\n    access_log  /var/log/nginx/access.log combined buffer=512k flush=1m;\n    error_log   /var/log/nginx/error.log warn;\n      # pass through headers from Jenkins that Nginx considers invalid\n  ignore_invalid_headers off;\n\n    # reverse proxy\n    location / {\n            proxy_http_version 1.1;\n            proxy_pass            http://192.168.3.51:8080;\n            proxy_set_header Host      $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_intercept_errors on;\n            add_header X-uri "$uri";\n            add_header X_host "$host";\n            add_header X_port "$proxy_port";\n            add_header X_remote_addr "$remote_addr";\n            add_header X_proxy_forwaded_for "$proxy_add_x_forwarded_for";\n            proxy_set_header X_scheme $scheme;\n            proxy_set_header X-Forwarded-Host    $host:$server_port;\n\n            proxy_max_temp_file_size 0;\n\n            proxy_connect_timeout      90;\n            proxy_send_timeout         90;\n            proxy_read_timeout         90;\n\n            proxy_buffer_size          4k;\n            proxy_buffers              4 32k;\n            proxy_busy_buffers_size    64k;\n            proxy_temp_file_write_size 64k;\n\n# Set maximum upload size\n            client_max_body_size       10m;\n            client_body_buffer_size    128k;\n\n            sendfile off;\n\n    }\n\n    # additional config\n    include nginxconfig.io/general.conf;\n}\n\n# subdomains redirect\nserver {\n    listen      80;\n    listen      [::]:80;\n    server_name *.jenkins.localrokcy.com;\n    return      301 http://jenkins.localrocky.com$request_uri;\n}\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jenkins User Docs: ",(0,r.kt)("a",{parentName:"li",href:"https://www.jenkins.io/doc/"},"https://www.jenkins.io/doc/")),(0,r.kt)("li",{parentName:"ul"},"Jenkins installing: ",(0,r.kt)("a",{parentName:"li",href:"https://www.jenkins.io/doc/book/installing/"},"https://www.jenkins.io/doc/book/installing/")),(0,r.kt)("li",{parentName:"ul"},'"An error occurred during installation: No such plugin: cloudbees-folder": ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/docker/issues/424"},"https://github.com/jenkinsci/docker/issues/424")),(0,r.kt)("li",{parentName:"ul"},'"Jenkins \u5b89\u88c5\u63d2\u4ef6 No such plugin: cloudbees-folder": ',(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/dhq779626019/article/details/105756115"},"https://blog.csdn.net/dhq779626019/article/details/105756115")),(0,r.kt)("li",{parentName:"ul"},"Jenkins Plugins: ",(0,r.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/"},"https://plugins.jenkins.io/")),(0,r.kt)("li",{parentName:"ul"},"Jenkins  Mirrors  status: ",(0,r.kt)("a",{parentName:"li",href:"http://mirrors.jenkins-ci.org/status.html"},"http://mirrors.jenkins-ci.org/status.html"))))}u.isMDXComponent=!0}}]);