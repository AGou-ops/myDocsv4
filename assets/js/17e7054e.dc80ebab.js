"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2970],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(f,l(l({ref:a},p),{},{components:t})):n.createElement(f,l({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={},l="Jira Basic",s={unversionedId:"CloudNative/CICD/Jira Basic",id:"CloudNative/CICD/Jira Basic",title:"Jira Basic",description:"JIRA\u662fAtlassian\u516c\u53f8\u51fa\u54c1\u7684\u9879\u76ee\u4e0e\u4e8b\u52a1\u8ddf\u8e2a\u5de5\u5177\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u7f3a\u9677\u8ddf\u8e2a\u3001\u5ba2\u6237\u670d\u52a1\u3001\u9700\u6c42\u6536\u96c6\u3001\u6d41\u7a0b\u5ba1\u6279\u3001\u4efb\u52a1\u8ddf\u8e2a\u3001\u9879\u76ee\u8ddf\u8e2a\u548c\u654f\u6377\u7ba1\u7406\u7b49\u5de5\u4f5c\u9886\u57df\u3002",source:"@site/docs/CloudNative/CICD/Jira Basic.md",sourceDirName:"CloudNative/CICD",slug:"/CloudNative/CICD/Jira Basic",permalink:"/docs/CloudNative/CICD/Jira Basic",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/CICD/Jira Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Gogs Basic",permalink:"/docs/CloudNative/CICD/Gogs Basic"},next:{title:"\u4ee3\u7801\u90e8\u7f72\u65b9\u5f0f",permalink:"/docs/CloudNative/CICD/\u53d1\u5e03\u65b9\u5f0f"}},o={},c=[{value:"Jira \u5b89\u88c5\u4e0e\u90e8\u7f72",id:"jira-\u5b89\u88c5\u4e0e\u90e8\u7f72",level:2},{value:"\u5b89\u88c5Jira",id:"\u5b89\u88c5jira",level:3},{value:"\u6570\u636e\u5e93\u76f8\u5173",id:"\u6570\u636e\u5e93\u76f8\u5173",level:3},{value:"\u4e0b\u8f7d\u5e76\u590d\u5236<code>MySQL JDBC</code>\u9a71\u52a8",id:"\u4e0b\u8f7d\u5e76\u590d\u5236mysql-jdbc\u9a71\u52a8",level:3},{value:"\u542f\u52a8 Jira \u5e76\u8fde\u63a5\u6570\u636e\u5e93",id:"\u542f\u52a8-jira-\u5e76\u8fde\u63a5\u6570\u636e\u5e93",level:3},{value:"Jira 8.x \u4ee5\u53ca\u63d2\u4ef6\u7834\u89e3",id:"jira-8x-\u4ee5\u53ca\u63d2\u4ef6\u7834\u89e3",level:3},{value:"\u9644\u5f55: \u7834\u89e3\u5305\u4e0b\u8f7d\u76f4\u94fe",id:"\u9644\u5f55-\u7834\u89e3\u5305\u4e0b\u8f7d\u76f4\u94fe",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jira-basic"},"Jira Basic"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JIRA\u662fAtlassian\u516c\u53f8\u51fa\u54c1\u7684\u9879\u76ee\u4e0e\u4e8b\u52a1\u8ddf\u8e2a\u5de5\u5177\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u7f3a\u9677\u8ddf\u8e2a\u3001\u5ba2\u6237\u670d\u52a1\u3001\u9700\u6c42\u6536\u96c6\u3001\u6d41\u7a0b\u5ba1\u6279\u3001\u4efb\u52a1\u8ddf\u8e2a\u3001\u9879\u76ee\u8ddf\u8e2a\u548c\u654f\u6377\u7ba1\u7406\u7b49\u5de5\u4f5c\u9886\u57df\u3002")),(0,r.kt)("h2",{id:"jira-\u5b89\u88c5\u4e0e\u90e8\u7f72"},"Jira \u5b89\u88c5\u4e0e\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jira"),"\u57fa\u4e8e Java \u5f00\u53d1\uff0c\u56e0\u6b64\u5b89\u88c5\u4e4b\u524d\u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d Java\uff0c\u5728\u6b64\u5c31\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5jira"},"\u5b89\u88c5Jira"),(0,r.kt)("p",null,"\u4ece\u5b98\u65b9\u7ad9\u70b9\u4e0b\u8f7d\u6240\u9700\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305, ",(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/jira/download"},"https://www.atlassian.com/software/jira/download")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ atlassian-jira-software-8.13.1-x64.bin\n$ ./atlassian-jira-software-8.13.1-x64.bin\n")),(0,r.kt)("p",null,"\u7136\u540e\u4e00\u8def",(0,r.kt)("inlineCode",{parentName:"p"},"[ENTER]"),"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u5373\u53ef."),(0,r.kt)("h3",{id:"\u6570\u636e\u5e93\u76f8\u5173"},"\u6570\u636e\u5e93\u76f8\u5173"),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE DATABASE jiradb CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;\n-- GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on <JIRADB>.* TO '<USERNAME>'@'<JIRA_SERVER_HOSTNAME>' IDENTIFIED BY '<PASSWORD>';\nGRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,INDEX on jiradb.* TO 'jiradbuser'@'%' IDENTIFIED BY '123';\nflush privileges;\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u6570\u636e\u5e93\u53c2\u6570:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[mysqld]\ndefault-storage-engine=INNODB\ncharacter_set_server=utf8mb4\ninnodb_default_row_format=DYNAMIC\ninnodb_large_prefix=ON\ninnodb_file_format=Barracuda\ninnodb_log_file_size=2G\n# \u79fb\u9664\u8be5\u9009\u9879, \u5982\u679c\u5b58\u5728\u7684\u8bdd\nsql_mode = NO_AUTO_VALUE_ON_ZERO\n")),(0,r.kt)("p",null,"\u91cd\u542fmysql: ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart mysqld")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d\u5e76\u590d\u5236mysql-jdbc\u9a71\u52a8"},"\u4e0b\u8f7d\u5e76\u590d\u5236",(0,r.kt)("inlineCode",{parentName:"h3"},"MySQL JDBC"),"\u9a71\u52a8"),(0,r.kt)("p",null,"\u62f7\u8d1d",(0,r.kt)("inlineCode",{parentName:"p"},"mysql JDBC"),"\u9a71\u52a8:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9996\u5148\u4ece\u5b98\u65b9\u7ad9\u70b9\u4e0b\u8f7djdbc\u9a71\u52a8\nwget https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.49.tar.gz\ntar xf  mysql-connector-java-5.1.49.tar.gz -C /opt/atlassian/jira/lib\n")),(0,r.kt)("h3",{id:"\u542f\u52a8-jira-\u5e76\u8fde\u63a5\u6570\u636e\u5e93"},"\u542f\u52a8 Jira \u5e76\u8fde\u63a5\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo /etc/init.d/jira start\n# sudo /etc/init.d/jira stop\n")),(0,r.kt)("p",null,"\u6309\u7167\u5f15\u5bfc\u586b\u5165\u5bf9\u5e94\u4fe1\u606f\u5373\u53ef:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-setup-mysql.png",alt:"jira-setup-mysql"})),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93\u4f1a\u82b1\u8d39\u4e00\u5b9a\u65f6\u95f4, \u7b49\u5f85\u5373\u53ef."),(0,r.kt)("p",null,"\u6211\u4e22, \u5b89\u88c5\u4e86\u534a\u5929\u53d1\u73b0\u7adf\u7136\u6ca1\u6709\u514d\u8d39\u793e\u533a\u7248\u672c\u53ef\u7528, \u9700\u8981\u7533\u8bf7\u8d26\u53f7\u53ca\u8bd5\u7528\u8bb8\u53ef, \u7533\u8bf7\u8fc7\u7a0b\u6309\u7167\u5f15\u5bfc\u586b\u5199\u57fa\u672c\u4fe1\u606f\u5373\u53ef, \u4ee5\u4e0b\u672a\u7533\u8bf7\u597d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"License Key"),"\u6837\u4f8b:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/jira-license-key.png",alt:"jira-license-key"})),(0,r.kt)("h3",{id:"jira-8x-\u4ee5\u53ca\u63d2\u4ef6\u7834\u89e3"},"Jira 8.x \u4ee5\u53ca\u63d2\u4ef6\u7834\u89e3"),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"\u679c\u7136, \u7f51\u53cb\u8fd8\u662f\u6ca1\u8ba9\u6211\u5931\u671b, \u65e2\u7136\u6ca1\u6709\u793e\u533a\u7248, \u5c31\u7528\u7834\u89e3\u7248\u7684\u55bd.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JIRA 8.6\u5b89\u88c5\u548c\u7834\u89e3: ",(0,r.kt)("a",{parentName:"li",href:"https://www.dqzboy.com/jira-8-6%E5%AE%89%E8%A3%85%E4%B8%8E%E7%A0%B4%E8%A7%A3#h3-7"},"https://www.dqzboy.com/jira-8-6%E5%AE%89%E8%A3%85%E4%B8%8E%E7%A0%B4%E8%A7%A3#h3-7")),(0,r.kt)("li",{parentName:"ul"},"Jira8.x\u7248\u672c\u5b89\u88c5\u4e0e\u7834\u89e3: ",(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/9ca92a191f36"},"https://www.jianshu.com/p/9ca92a191f36")),(0,r.kt)("li",{parentName:"ul"},"JIRA\u7684\u5b89\u88c5\u548c\u7834\u89e3: ",(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/cekaigongchengshi/p/12800791.html"},"https://www.cnblogs.com/cekaigongchengshi/p/12800791.html"))),(0,r.kt)("h2",{id:"\u9644\u5f55-\u7834\u89e3\u5305\u4e0b\u8f7d\u76f4\u94fe"},"\u9644\u5f55: \u7834\u89e3\u5305\u4e0b\u8f7d\u76f4\u94fe"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-extras-3.2.jar"},"https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-extras-3.2.jar")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-agent.jar"},"https://agou-resources.oss-cn-chengdu.aliyuncs.com/software/atlassian-agent.jar")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jira Installation: ",(0,r.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/adminjiraserver/installing-jira-applications-on-linux-938846841.html"},"https://confluence.atlassian.com/adminjiraserver/installing-jira-applications-on-linux-938846841.html")),(0,r.kt)("li",{parentName:"ul"},"Connect Jira to Database: ",(0,r.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-a-database-938846850.html"},"https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-a-database-938846850.html"))))}u.isMDXComponent=!0}}]);