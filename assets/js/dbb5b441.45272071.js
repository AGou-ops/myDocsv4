"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2380],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(n),k=l,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(d,o(o({ref:e},u),{},{components:n})):a.createElement(d,o({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17674:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},o="Split & Logrotate",i={unversionedId:"LinuxBasics/Split - Logrotate",id:"LinuxBasics/Split - Logrotate",title:"Split & Logrotate",description:"Split",source:"@site/docs/LinuxBasics/Split - Logrotate.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/Split - Logrotate",permalink:"/docs/LinuxBasics/Split - Logrotate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Split - Logrotate.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"SSH Tunnel",permalink:"/docs/LinuxBasics/SSH Tunnel"},next:{title:"tcpdump & wireshark",permalink:"/docs/LinuxBasics/Tcpdump - Wireshark"}},p={},s=[{value:"Split",id:"split",level:2},{value:"Logrotate",id:"logrotate",level:2},{value:"\u7b80\u4ecb\u53ca\u89e3\u51b3\u65b9\u6848",id:"\u7b80\u4ecb\u53ca\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u8fd0\u884c logrotate",id:"\u8fd0\u884c-logrotate",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3",id:"\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3",level:3},{value:"logrotate \u65e5\u5fd7\u5207\u5272\u8f6e\u8be2",id:"logrotate-\u65e5\u5fd7\u5207\u5272\u8f6e\u8be2",level:3},{value:"\u9644\uff1alogrotate \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"\u9644logrotate-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:3}],u={toc:s};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"split--logrotate"},"Split & Logrotate"),(0,l.kt)("h2",{id:"split"},"Split"),(0,l.kt)("p",null,"Linux \u7cfb\u7edf\u81ea\u5e26\u7b80\u5355\u65e5\u5fd7\u6587\u4ef6\u5206\u5272\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u53c2\u6570\u5217\u8868\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u540e\u7684\u6587\u6863\u5927\u5c0f\uff0c\u5355\u4f4d\u662fbyte")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u540e\u7684\u6587\u6863\uff0c\u5355\u884c\u6700\u5927byte\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6570\u5b57\u4f5c\u4e3a\u540e\u7f00(default: \u5b57\u6bcd)\uff0c\u540c\u65f6\u4f7f\u7528-a length(default: 2)\u6307\u5b9a\u540e\u7f00\u957f\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-l"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u540e\u6587\u6863\u7684\u884c\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8f93\u51fa\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"split -l --verbose 1000000 split.test -d -a 3 split.log\n\u2570\u2500$ ls                                                    \nsplit.test     split.test008  split.test017  split.test026\nsplit.test000  split.test009  split.test018  split.test027\nsplit.test001  split.test010  split.test019  split.test028\nsplit.test002  split.test011  split.test020  split.test029\nsplit.test003  split.test012  split.test021  split.test030\nsplit.test004  split.test013  split.test022  split.test031\nsplit.test005  split.test014  split.test023  split.test032\nsplit.test006  split.test015  split.test024  split.test033\nsplit.test007  split.test016  split.test025\n...\n")),(0,l.kt)("h2",{id:"logrotate"},"Logrotate"),(0,l.kt)("h3",{id:"\u7b80\u4ecb\u53ca\u89e3\u51b3\u65b9\u6848"},"\u7b80\u4ecb\u53ca\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"Logrotate\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"Log rotation"),"\u65e5\u5fd7\u6eda\u52a8\uff0c\u5c5e\u4e8eLinux\u7cfb\u7edf\u81ea\u5e26\u5de5\u5177\uff0c\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"crontab"),"\u5b9e\u73b0\u65f6\u95f4\u70b9\u6eda\u52a8\u65e5\u5fd7\uff0c\u8ba1\u5212\u6bcf\u5929\u8fd0\u884c\u7684\u811a\u672c\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/cron.daily/logrotate"),"\u3002"),(0,l.kt)("p",null,"GitHub \u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/logrotate/logrotate"},"https://github.com/logrotate/logrotate")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"logrotate \u662f\u600e\u4e48\u505a\u5230\u6eda\u52a8\u65e5\u5fd7\u65f6\u4e0d\u5f71\u54cd\u7a0b\u5e8f\u6b63\u5e38\u7684\u65e5\u5fd7\u8f93\u51fa\u5462\uff1flogrotate \u63d0\u4f9b\u4e86\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"create"),(0,l.kt)("li",{parentName:"ol"},"copytruncate")),(0,l.kt)("h3",{parentName:"blockquote",id:"create"},"create"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e5f\u5c31\u662f\u9ed8\u8ba4\u7684\u65b9\u6848\uff0c\u53ef\u4ee5\u901a\u8fc7 create \u547d\u4ee4\u914d\u7f6e\u6587\u4ef6\u7684\u6743\u9650\u548c\u5c5e\u7ec4\u8bbe\u7f6e\uff1b\u8fd9\u4e2a\u65b9\u6848\u7684\u601d\u8def\u662f\u91cd\u547d\u540d\u539f\u65e5\u5fd7\u6587\u4ef6\uff0c\u521b\u5efa\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\u3002\u8be6\u7ec6\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u6b63\u5728\u8f93\u51fa\u65e5\u5fd7\u6587\u4ef6\uff0c\u56e0\u4e3a\u91cd\u547d\u540d\u53ea\u4fee\u6539\u76ee\u5f55\u4ee5\u53ca\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u800c\u8fdb\u7a0b\u64cd\u4f5c\u6587\u4ef6\u4f7f\u7528\u7684\u662f inode\uff0c\u6240\u4ee5\u5e76\u4e0d\u5f71\u54cd\u539f\u7a0b\u5e8f\u7ee7\u7eed\u8f93\u51fa\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u548c\u539f\u65e5\u5fd7\u6587\u4ef6\u4e00\u6837\uff0c\u6ce8\u610f\uff0c\u6b64\u65f6\u53ea\u662f\u6587\u4ef6\u540d\u79f0\u4e00\u6837\uff0c\u800c inode \u7f16\u53f7\u4e0d\u540c\uff0c\u539f\u7a0b\u5e8f\u8f93\u51fa\u7684\u65e5\u5fd7\u8fd8\u662f\u5f80\u539f\u65e5\u5fd7\u6587\u4ef6\u8f93\u51fa\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\u901a\u8fc7\u67d0\u4e9b\u65b9\u5f0f\u901a\u77e5\u7a0b\u5e8f\uff0c\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6\uff1b\u7531\u4e8e\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6\u4f1a\u7528\u5230\u6587\u4ef6\u8def\u5f84\u800c\u975e inode \u7f16\u53f7\uff0c\u6240\u4ee5\u6253\u5f00\u7684\u662f\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\u3002")),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u4e0a\u4e5f\u5c31\u662f logrotate \u7684\u9ed8\u8ba4\u64cd\u4f5c\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f mv+create \u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u901a\u77e5\u5e94\u7528\u91cd\u65b0\u5728\u65b0\u6587\u4ef6\u5199\u5165\u5373\u53ef\u3002mv+create \u6210\u672c\u90fd\u6bd4\u8f83\u4f4e\uff0c\u51e0\u4e4e\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u5982\u679c\u5e94\u7528\u652f\u6301\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6\uff0c\u5982 syslog, nginx, mysql \u7b49\uff0c\u90a3\u4e48\u8fd9\u662f\u6700\u597d\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u8fc7\uff0c\u6709\u4e9b\u7a0b\u5e8f\u5e76\u4e0d\u652f\u6301\u8fd9\u79cd\u65b9\u5f0f\uff0c\u538b\u6839\u6ca1\u6709\u63d0\u4f9b\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u7684\u63a5\u53e3\uff1b\u800c\u5982\u679c\u91cd\u542f\u5e94\u7528\u7a0b\u5e8f\uff0c\u5fc5\u7136\u4f1a\u964d\u4f4e\u53ef\u7528\u6027\uff0c\u4e3a\u6b64\u5f15\u5165\u4e86\u5982\u4e0b\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{parentName:"blockquote",id:"copytruncate"},"copytruncate"),(0,l.kt)("p",{parentName:"blockquote"},"\u8be5\u65b9\u6848\u662f\u628a\u6b63\u5728\u8f93\u51fa\u7684\u65e5\u5fd7\u62f7 (copy) \u4e00\u4efd\u51fa\u6765\uff0c\u518d\u6e05\u7a7a (trucate) \u539f\u6765\u7684\u65e5\u5fd7\uff1b\u8be6\u7ec6\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5f53\u524d\u6b63\u5728\u8f93\u51fa\u7684\u65e5\u5fd7\u6587\u4ef6\u590d\u5236\u4e3a\u76ee\u6807\u6587\u4ef6\uff0c\u6b64\u65f6\u7a0b\u5e8f\u4ecd\u7136\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u539f\u6765\u6587\u4ef6\u4e2d\uff0c\u6b64\u65f6\uff0c\u539f\u6587\u4ef6\u540d\u4e5f\u6ca1\u6709\u53d8\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6e05\u7a7a\u65e5\u5fd7\u6587\u4ef6\uff0c\u539f\u7a0b\u5e8f\u4ecd\u7136\u8fd8\u662f\u8f93\u51fa\u5230\u9884\u6848\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u56e0\u4e3a\u6e05\u7a7a\u6587\u4ef6\u53ea\u628a\u6587\u4ef6\u7684\u5185\u5bb9\u5220\u9664\u4e86\uff0c\u800c inode \u5e76\u6ca1\u6539\u53d8\uff0c\u540e\u7eed\u65e5\u5fd7\u7684\u8f93\u51fa\u4ecd\u7136\u5199\u5165\u8be5\u6587\u4ef6\u4e2d\u3002")),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u4e0a\u6240\u8ff0\uff0c\u5bf9\u4e8e copytruncate \u4e5f\u5c31\u662f\u5148\u590d\u5236\u4e00\u4efd\u6587\u4ef6\uff0c\u7136\u540e\u6e05\u7a7a\u539f\u6709\u6587\u4ef6\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u6765\u8bf4\uff0c\u6e05\u7a7a\u64cd\u4f5c\u6bd4\u8f83\u5feb\uff0c\u4f46\u662f\u5982\u679c\u65e5\u5fd7\u6587\u4ef6\u592a\u5927\uff0c\u90a3\u4e48\u590d\u5236\u5c31\u4f1a\u6bd4\u8f83\u8017\u65f6\uff0c\u4ece\u800c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u65e5\u5fd7\u4e22\u5931\u3002\u4e0d\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u7684\u652f\u6301\u5373\u53ef\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u6587\u4ef6\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/sbin/logrotate")),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u914d\u7f6e\u6587\u4ef6: ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/logrotate.conf")),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6: ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/logrotate.d/*.conf")),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u72b6\u6001\u6587\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/logrotate/logrotate.status"))),(0,l.kt)("h3",{id:"\u8fd0\u884c-logrotate"},"\u8fd0\u884c logrotate"),(0,l.kt)("p",null,"logrotate \u547d\u4ee4\u683c\u5f0f\u53ca\u5e38\u7528\u53c2\u6570\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"logrotate [-dv] [-f|--force] [-s|--state file] config_file ..\n-d, --debug \uff1adebug \u6a21\u5f0f\uff0c\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6709\u9519\u8bef\uff0c\u5e76\u4e0d\u4f1a\u771f\u6b63\u6267\u884c rorate \u548c compose \u64cd\u4f5c\uff0c\u4f46\u662f\u4f1a\u6253\u5370\u51fa\u6574\u4e2a\u6267\u884c\u7684\u6d41\u7a0b\uff0c\u548c\u8c03\u7528\u7684\u811a\u672c\u7b49\u8be6\u7ec6\u4fe1\u606f\u3002\n-f, --force \uff1a\u5f3a\u5236\u8f6c\u50a8\u6587\u4ef6\u3002\n-m, --mail=command \uff1a\u538b\u7f29\u65e5\u5fd7\u540e\uff0c\u53d1\u9001\u65e5\u5fd7\u5230\u6307\u5b9a\u90ae\u7bb1\u3002\n-s, --state=statefile \uff1a\u4f7f\u7528\u6307\u5b9a\u7684\u72b6\u6001\u6587\u4ef6\u3002\n-v, --verbose \uff1a\u663e\u793a\u8be6\u7ec6\u8f6c\u50a8\u8fc7\u7a0b\u3002\n")),(0,l.kt)("p",null,"\u901a\u5e38\u4f7f\u7528\u7684\u65b9\u6cd5\u662f\u914d\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"crontab"),"\u6765\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -e\n*/30 * * * * /usr/sbin/logrotate /etc/logrotate.d/rsyslog > /dev/null 2>&1 &\n")),(0,l.kt)("p",null,"\u624b\u52a8\u8c03\u7528 logrotate\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8c03\u7528 /etc/lograte.d/ \u4e0b\u914d\u7f6e\u7684\u6240\u6709\u65e5\u5fd7\nlogrotate /etc/logrotate.conf\n# \u8981\u4e3a\u67d0\u4e2a\u7279\u5b9a\u7684\u914d\u7f6e\u8c03\u7528 logrotate\nlogrotate -d /etc/logrotate.d/log_file      # \u5f00\u542fdebug\u6a21\u5f0f\uff0c\u4e0d\u5b9e\u9645\u751f\u6210\u65e5\u5fd7\u6587\u4ef6\u3002\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3"},"\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4ee5\u7cfb\u7edf\u81ea\u5e26\u7684\u90e8\u5206",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/rsyslog"),"\u914d\u7f6e\u6587\u4ef6\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/var/log/syslog\n{\n    rotate 7\n    daily\n    missingok\n    notifempty\n    delaycompress\n    compress\n    postrotate\n        /usr/lib/rsyslog/rsyslog-rotate\n    endscript\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"monthly"),": \u65e5\u5fd7\u6587\u4ef6\u5c06\u6309\u6708\u8f6e\u5faa\u3002\u5176\u5b83\u53ef\u7528\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"daily"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"weekly")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"yearly"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rotate 5"),": \u4e00\u6b21\u5c06\u5b58\u50a8 5 \u4e2a\u5f52\u6863\u65e5\u5fd7\u3002\u5bf9\u4e8e\u7b2c\u516d\u4e2a\u5f52\u6863\uff0c\u65f6\u95f4\u6700\u4e45\u7684\u5f52\u6863\u5c06\u88ab\u5220\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compress"),": \u5728\u8f6e\u5faa\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5df2\u8f6e\u5faa\u7684\u5f52\u6863\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"gzip")," \u8fdb\u884c\u538b\u7f29\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delaycompress"),": \u603b\u662f\u4e0e compress \u9009\u9879\u4e00\u8d77\u7528\uff0cdelaycompress \u9009\u9879\u6307\u793a logrotate ",(0,l.kt)("em",{parentName:"li"},"\u4e0d\u8981\u5c06\u6700\u8fd1\u7684\u5f52\u6863\u538b\u7f29"),"\uff0c\u538b\u7f29 \u5c06\u5728\u4e0b\u4e00\u6b21\u8f6e\u5faa\u5468\u671f\u8fdb\u884c\u3002\u8fd9\u5728\u4f60\u6216\u4efb\u4f55\u8f6f\u4ef6\u4ecd\u7136\u9700\u8981\u8bfb\u53d6\u6700\u65b0\u5f52\u6863\u65f6\u5f88\u6709\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"missingok"),": \u5728\u65e5\u5fd7\u8f6e\u5faa\u671f\u95f4\uff0c\u4efb\u4f55\u9519\u8bef\u5c06\u88ab\u5ffd\u7565\uff0c\u4f8b\u5982 \u201c\u6587\u4ef6\u65e0\u6cd5\u627e\u5230\u201d \u4e4b\u7c7b\u7684\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notifempty"),": \u5982\u679c\u65e5\u5fd7\u6587\u4ef6\u4e3a\u7a7a\uff0c\u8f6e\u5faa\u4e0d\u4f1a\u8fdb\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create 644 root root"),": \u4ee5\u6307\u5b9a\u7684\u6743\u9650\u521b\u5efa\u5168\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u540c\u65f6 logrotate \u4e5f\u4f1a\u91cd\u547d\u540d\u539f\u59cb\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postrotate/endscript"),": \u5728\u6240\u6709\u5176\u5b83\u6307\u4ee4\u5b8c\u6210\u540e\uff0cpostrotate \u548c endscript \u91cc\u9762\u6307\u5b9a\u7684\u547d\u4ee4\u5c06\u88ab\u6267\u884c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0crsyslogd \u8fdb\u7a0b\u5c06\u7acb\u5373\u518d\u6b21\u8bfb\u53d6\u5176\u914d\u7f6e\u5e76\u7ee7\u7eed\u8fd0\u884c\u3002")),(0,l.kt)("p",null,"\u5176\u4ed6\u5e38\u7528\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tabooext [+] list"),":\u8ba9 logrotate \u4e0d\u8f6c\u50a8\u6307\u5b9a\u6269\u5c55\u540d\u7684\u6587\u4ef6\uff0c\u7f3a\u7701\u7684\u6269\u5c55\u540d\u662f.rpm-orig, .rpmsave, v, \u548c\uff5e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"missingok"),":\u5728\u65e5\u5fd7\u8f6e\u5faa\u671f\u95f4\uff0c\u4efb\u4f55\u9519\u8bef\u5c06\u88ab\u5ffd\u7565\uff0c\u4f8b\u5982 \u201c\u6587\u4ef6\u65e0\u6cd5\u627e\u5230\u201d \u4e4b\u7c7b\u7684\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size size"),":\u5f53\u65e5\u5fd7\u6587\u4ef6\u5230\u8fbe\u6307\u5b9a\u7684\u5927\u5c0f\u65f6\u624d\u8f6c\u50a8\uff0cbytes (\u7f3a\u7701) \u53ca KB (sizek) \u6216 MB (sizem)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copytruncate"),":\u7528\u4e8e\u8fd8\u5728\u6253\u5f00\u4e2d\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u628a\u5f53\u524d\u65e5\u5fd7\u5907\u4efd\u5e76\u622a\u65ad"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nocopytruncate"),": \u5907\u4efd\u65e5\u5fd7\u6587\u4ef6\u4f46\u662f\u4e0d\u622a\u65ad"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create mode owner group "),": \u8f6c\u50a8\u6587\u4ef6\uff0c\u4f7f\u7528\u6307\u5b9a\u7684\u6587\u4ef6\u6a21\u5f0f\u521b\u5efa\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nocreate"),": \u4e0d\u5efa\u7acb\u65b0\u7684\u65e5\u5fd7\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nodelaycompress"),": \u8986\u76d6 delaycompress \u9009\u9879\uff0c\u8f6c\u50a8\u540c\u65f6\u538b\u7f29\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"errors address "),": \u4e13\u50a8\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u53d1\u9001\u5230\u6307\u5b9a\u7684 Email \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ifempty "),":\u5373\u4f7f\u662f\u7a7a\u6587\u4ef6\u4e5f\u8f6c\u50a8\uff0c\u8fd9\u4e2a\u662f logrotate \u7684\u7f3a\u7701\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mail address "),": \u628a\u8f6c\u50a8\u7684\u65e5\u5fd7\u6587\u4ef6\u53d1\u9001\u5230\u6307\u5b9a\u7684 E-mail \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nomail "),": \u8f6c\u50a8\u65f6\u4e0d\u53d1\u9001\u65e5\u5fd7\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"olddir directory"),":\u50a8\u540e\u7684\u65e5\u5fd7\u6587\u4ef6\u653e\u5165\u6307\u5b9a\u7684\u76ee\u5f55\uff0c\u5fc5\u987b\u548c\u5f53\u524d\u65e5\u5fd7\u6587\u4ef6\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"noolddir"),": \u8f6c\u50a8\u540e\u7684\u65e5\u5fd7\u6587\u4ef6\u548c\u5f53\u524d\u65e5\u5fd7\u6587\u4ef6\u653e\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b")),(0,l.kt)("h3",{id:"logrotate-\u65e5\u5fd7\u5207\u5272\u8f6e\u8be2"},"logrotate \u65e5\u5fd7\u5207\u5272\u8f6e\u8be2"),(0,l.kt)("p",null,"\u7531\u4e8e logrotate \u662f\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"cron"),"\u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65e5\u5fd7\u8f6e\u8f6c\u7684\u65f6\u95f4\u662f\u7531 cron \u63a7\u5236\u7684\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u8be2 cron \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/anacrontab"),"\uff0c\u8fc7\u5f80\u7684\u8001\u7248\u672c\u7684\u6587\u4ef6\u4e3a\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/crontab"),"\uff09"),(0,l.kt)("p",null,"\u4f7f\u7528 crontab \u6765\u4f5c\u4e3a\u65e5\u5fd7\u8f6e\u8f6c\u7684\u89e6\u53d1\u5bb9\u5668\u6765\u4fee\u6539 logrotate \u9ed8\u8ba4\u6267\u884c\u65f6\u95f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /etc/crontab\n# \u5207\u5272\u65f6\u95f4\u4e3a\u6bcf\u5929\u665a\u4e0a\u768412\u70b9\u949f\nSHELL=/bin/bash\nPATH=/sbin:/bin:/usr/sbin:/usr/bin\nMAILTO=root\nHOME=/\n\n# run-parts\n01 * * * * root run-parts /etc/cron.hourly\n59 23 * * * root run-parts /etc/cron.daily\n22 4 * * 0 root run-parts /etc/cron.weekly\n42 4 1 * * root run-parts /etc/cron.monthly\n")),(0,l.kt)("h3",{id:"\u9644logrotate-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"\u9644\uff1alogrotate \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"syslog")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@gop-sg-192-168-56-103 logrotate.d]\\# cat syslog\n/var/log/cron\n/var/log/maillog\n/var/log/messages\n/var/log/secure\n/var/log/spooler\n{\n    missingok\n    sharedscripts\n    postrotate\n    /bin/kill -HUP `cat /var/run/syslogd.pid 2> /dev/null` 2> /dev/null || true\n    endscript\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zabbix-agent")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@gop-sg-192-168-56-103 logrotate.d]\\# cat zabbix-agent\n/var/log/zabbix/zabbix_agentd.log {\n    weekly\n    rotate 12\n    compress\n    delaycompress\n    missingok\n    notifempty\n    create 0664 zabbix zabbix\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nginx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@gop-sg-192-168-56-103 logrotate.d]\\# cat nginx\n/var/log/nginx/*.log /var/log/nginx/*/*.log{\n    daily\n    missingok\n    rotate 14\n    compress\n    delaycompress\n    notifempty\n    create 640 root adm\n    sharedscripts\n    postrotate\n        [ ! -f /var/run/nginx.pid ] || kill -USR1 `cat /var/run/nginx.pid`\n    endscript\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"influxdb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@gop-sg-192-168-56-103 logrotate.d]\\# cat influxdb\n/var/log/influxdb/access.log {\n    daily\n    rotate 7\n    missingok\n    dateext\n    copytruncate\n    compress\n}\n")))}c.isMDXComponent=!0}}]);