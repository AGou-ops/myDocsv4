"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1477],{3905:(n,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>g});var t=o(67294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function l(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function s(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)o=l[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)o=l[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var p=t.createContext({}),c=function(n){var e=t.useContext(p),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},m=function(n){var e=c(n.components);return t.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},i=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,l=n.originalType,p=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),i=c(o),g=r,u=i["".concat(p,".").concat(g)]||i[g]||d[g]||l;return o?t.createElement(u,a(a({ref:e},m),{},{components:o})):t.createElement(u,a({ref:e},m))}));function g(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=o.length,a=new Array(l);a[0]=i;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<l;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}i.displayName="MDXCreateElement"},52373:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const l={},a="MongoDB \u4e3b\u4ece\u590d\u5236\u96c6\u7fa4",s={unversionedId:"LinuxBasics/DataBases/MongoDB/MongoDB Cluster",id:"LinuxBasics/DataBases/MongoDB/MongoDB Cluster",title:"MongoDB \u4e3b\u4ece\u590d\u5236\u96c6\u7fa4",description:"\u57fa\u672c\u539f\u7406\uff1a",source:"@site/docs/LinuxBasics/DataBases/MongoDB/MongoDB Cluster.md",sourceDirName:"LinuxBasics/DataBases/MongoDB",slug:"/LinuxBasics/DataBases/MongoDB/MongoDB Cluster",permalink:"/docs/LinuxBasics/DataBases/MongoDB/MongoDB Cluster",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/DataBases/MongoDB/MongoDB Cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MongoDB Basic",permalink:"/docs/LinuxBasics/DataBases/MongoDB/MongoDB Basic"},next:{title:"MongoDB Installation",permalink:"/docs/LinuxBasics/DataBases/MongoDB/MongoDB Installation"}},p={},c=[{value:"1\u3001\u89c4\u5212",id:"1\u89c4\u5212",level:2},{value:"2\u3001\u914d\u7f6e\u590d\u5236\u96c6\uff1a",id:"2\u914d\u7f6e\u590d\u5236\u96c6",level:2},{value:"3\u3001\u590d\u5236\u96c6\u7ba1\u7406\u64cd\u4f5c\uff1a",id:"3\u590d\u5236\u96c6\u7ba1\u7406\u64cd\u4f5c",level:2},{value:"4\u3001\u526f\u672c\u96c6\u5176\u4ed6\u64cd\u4f5c\u547d\u4ee4\uff1a",id:"4\u526f\u672c\u96c6\u5176\u4ed6\u64cd\u4f5c\u547d\u4ee4",level:2}],m={toc:c};function d(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb-\u4e3b\u4ece\u590d\u5236\u96c6\u7fa4"},"MongoDB \u4e3b\u4ece\u590d\u5236\u96c6\u7fa4"),(0,r.kt)("p",null,"\u57fa\u672c\u539f\u7406\uff1a\n\u57fa\u672c\u6784\u6210\u662f1\u4e3b2\u4ece\u7684\u7ed3\u6784\uff0c\u81ea\u5e26\u4e92\u76f8\u76d1\u63a7\u6295\u7968\u673a\u5236\uff08Raft\uff08MongoDB\uff09 Paxos\uff08mysql MGR \u7528\u7684\u662f\u53d8\u79cd\uff09\uff09\n\u5982\u679c\u53d1\u751f\u4e3b\u5e93\u5b95\u673a\uff0c\u590d\u5236\u96c6\u5185\u90e8\u4f1a\u8fdb\u884c\u6295\u7968\u9009\u4e3e\uff0c\u9009\u62e9\u4e00\u4e2a\u65b0\u7684\u4e3b\u5e93\u66ff\u4ee3\u539f\u6709\u4e3b\u5e93\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u3002\u540c\u65f6\u590d\u5236\u96c6\u4f1a\u81ea\u52a8\u901a\u77e5\n\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u4e3b\u5e93\u5df2\u7ecf\u53d1\u751f\u5207\u6362\u4e86\u3002\u5e94\u7528\u5c31\u4f1a\u8fde\u63a5\u5230\u65b0\u7684\u4e3b\u5e93\u3002"),(0,r.kt)("p",null,"Replcation Set\u914d\u7f6e\u8fc7\u7a0b\u8be6\u89e3"),(0,r.kt)("h2",{id:"1\u89c4\u5212"},"1\u3001\u89c4\u5212"),(0,r.kt)("p",null,"\u4e09\u4e2a\u4ee5\u4e0a\u7684mongodb\u8282\u70b9\uff08\u6216\u591a\u5b9e\u4f8b\uff09"),(0,r.kt)("p",null,"\u591a\u5b9e\u4f8b\uff1a\n\uff081\uff09\u591a\u4e2a\u7aef\u53e3\uff1a28017\u300128018\u300128019\u300128020\n\uff082\uff09\u591a\u5957\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /mongodb/28017/conf /mongodb/28017/data /mongodb/28017/log\nmkdir -p /mongodb/28018/conf /mongodb/28018/data /mongodb/28018/log\nmkdir -p /mongodb/28019/conf /mongodb/28019/data /mongodb/28019/log\nmkdir -p /mongodb/28020/conf /mongodb/28020/data /mongodb/28020/log\n")),(0,r.kt)("p",null,"(3) \u591a\u5957\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/mongodb/28017/conf/mongod.conf\n/mongodb/28018/conf/mongod.conf\n/mongodb/28019/conf/mongod.conf\n/mongodb/28020/conf/mongod.conf\n")),(0,r.kt)("p",null,"(4)\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi /mongodb/28017/conf/mongod.conf\nsystemLog:\n  destination: file\n  path: /mongodb/28017/log/mongodb.log\n  logAppend: true\nstorage:\n  journal:\n    enabled: true\n  dbPath: /mongodb/28017/data\n  directoryPerDB: true\n  ##engine: wiredTiger\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 1\n      directoryForIndexes: true\n    collectionConfig:\n      blockCompressor: zlib\n    indexConfig:\n      prefixCompression: true\nprocessManagement:\n  fork: true\nnet:\n  port: 28017\nreplication:\n  oplogSizeMB: 2048\n  replSetName: my_repl\n")),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp  /mongodb/28017/conf/mongod.conf  /mongodb/28018/conf/\ncp  /mongodb/28017/conf/mongod.conf  /mongodb/28019/conf/\ncp  /mongodb/28017/conf/mongod.conf  /mongodb/28020/conf/\n\nsed 's##28017##28018##g' /mongodb/28018/conf/mongod.conf -i\nsed 's##28017##28019##g' /mongodb/28019/conf/mongod.conf -i\nsed 's##28017##28020##g' /mongodb/28020/conf/mongod.conf -i\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"(5)\u542f\u52a8\u591a\u4e2a\u5b9e\u4f8b\u5907\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mongod -f /mongodb/28017/conf/mongod.conf\nmongod -f /mongodb/28018/conf/mongod.conf\nmongod -f /mongodb/28019/conf/mongod.conf\nmongod -f /mongodb/28020/conf/mongod.conf\n\nnetstat -lnp|grep 280\n")),(0,r.kt)("h2",{id:"2\u914d\u7f6e\u590d\u5236\u96c6"},"2\u3001\u914d\u7f6e\u590d\u5236\u96c6\uff1a"),(0,r.kt)("p",null,"\uff081\uff091\u4e3b2\u4ece\uff0c\u4ece\u5e93\u666e\u901a\u4ece\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mongo --port 28017 admin\nconfig = {_id: 'my_repl', members: [\n                          {_id: 0, host: '10.0.0.53:28017'},\n                          {_id: 1, host: '10.0.0.53:28018'},\n                          {_id: 2, host: '10.0.0.53:28019'}]\n          }\n\nrs.initiate(config)\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u590d\u5236\u96c6\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rs.status();\n")),(0,r.kt)("p",null,"\uff082\uff091\u4e3b1\u4ece1\u4e2aarbiter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mongo -port 28017 admin\n\nconfig = {_id: 'my_repl', members: [\n                          {_id: 0, host: '10.0.0.53:28017'},\n                          {_id: 1, host: '10.0.0.53:28018'},\n                          {_id: 2, host: '10.0.0.53:28019',\"arbiterOnly\":true}]\n          }\n\n\nrs.initiate(config)\n")),(0,r.kt)("h2",{id:"3\u590d\u5236\u96c6\u7ba1\u7406\u64cd\u4f5c"},"3\u3001\u590d\u5236\u96c6\u7ba1\u7406\u64cd\u4f5c\uff1a"),(0,r.kt)("p",null,"\uff081\uff09\u67e5\u770b\u590d\u5236\u96c6\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rs.status();    //\u67e5\u770b\u6574\u4f53\u590d\u5236\u96c6\u72b6\u6001\nrs.isMaster(); // \u67e5\u770b\u5f53\u524d\u662f\u5426\u662f\u4e3b\u8282\u70b9\n")),(0,r.kt)("p",null,"\uff082\uff09\u6dfb\u52a0\u5220\u9664\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'rs.add("ip:port"); // \u65b0\u589e\u4ece\u8282\u70b9\nrs.remove("ip:port"); // \u5220\u9664\u4e00\u4e2a\u8282\u70b9\nrs.addArb("ip:port"); // \u65b0\u589e\u4ef2\u88c1\u8282\u70b9\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6dfb\u52a0 arbiter\u8282\u70b9"),(0,r.kt)("p",null,"1\u3001\u8fde\u63a5\u5230\u4e3b\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[mongod@db03 ~]$ mongo --port 28018 admin\n")),(0,r.kt)("p",null,"2\u3001\u6dfb\u52a0\u4ef2\u88c1\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'my_repl:PRIMARY> rs.addArb("10.0.0.53:28020")\n')),(0,r.kt)("p",null,"3\u3001\u67e5\u770b\u8282\u70b9\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'my_repl:PRIMARY> rs.isMaster()\n{\n    "hosts" : [\n        "10.0.0.53:28017",\n        "10.0.0.53:28018",\n        "10.0.0.53:28019"\n    ],\n    "arbiters" : [\n        "10.0.0.53:28020"\n    ],\n')),(0,r.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'rs.remove("ip:port");\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'my_repl:PRIMARY> rs.remove("10.0.0.53:28019");\n{ "ok" : 1 }\nmy_repl:PRIMARY> rs.isMaster()\n\n\nrs.add("ip:port"); // \u65b0\u589e\u4ece\u8282\u70b9\n\u4f8b\u5b50\uff1a\nmy_repl:PRIMARY> rs.add("10.0.0.53:28019")\n{ "ok" : 1 }\nmy_repl:PRIMARY> rs.isMaster()\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6ce8\uff1a\n\u6dfb\u52a0\u7279\u6b8a\u8282\u70b9\u65f6\uff0c\n1>\u53ef\u4ee5\u5728\u642d\u5efa\u8fc7\u7a0b\u4e2d\u8bbe\u7f6e\u7279\u6b8a\u8282\u70b9\n2>\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u7684\u65b9\u5f0f\u5c06\u666e\u901a\u4ece\u8282\u70b9\u8bbe\u7f6e\u4e3a\u7279\u6b8a\u8282\u70b9\n/",(0,r.kt)("em",{parentName:"p"},"\u627e\u5230\u9700\u8981\u6539\u4e3a\u5ef6\u8fdf\u6027\u540c\u6b65\u7684\u6570\u7ec4\u53f7"),"/;"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u8282\u70b9\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"arbiter\u8282\u70b9\uff1a\u4e3b\u8981\u8d1f\u8d23\u9009\u4e3b\u8fc7\u7a0b\u4e2d\u7684\u6295\u7968\uff0c\u4f46\u662f\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\uff0c\u4e5f\u4e0d\u63d0\u4f9b\u4efb\u4f55\u670d\u52a1\nhidden\u8282\u70b9\uff1a\u9690\u85cf\u8282\u70b9\uff0c\u4e0d\u53c2\u4e0e\u9009\u4e3b\uff0c\u4e5f\u4e0d\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u3002\ndelay\u8282\u70b9\uff1a\u5ef6\u65f6\u8282\u70b9\uff0c\u6570\u636e\u843d\u540e\u4e8e\u4e3b\u5e93\u4e00\u6bb5\u65f6\u95f4\uff0c\u56e0\u4e3a\u6570\u636e\u662f\u5ef6\u65f6\u7684\uff0c\u4e5f\u4e0d\u5e94\u8be5\u63d0\u4f9b\u670d\u52a1\u6216\u53c2\u4e0e\u9009\u4e3b\uff0c\u6240\u4ee5\u901a\u5e38\u4f1a\u914d\u5408hidden\uff08\u9690\u85cf\uff09")),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u4f1a\u5c06delay+hidden\u4e00\u8d77\u914d\u7f6e\u4f7f\u7528"),(0,r.kt)("p",null,"\uff083\uff09\u914d\u7f6e\u5ef6\u65f6\u8282\u70b9\uff08\u4e00\u822c\u5ef6\u65f6\u8282\u70b9\u4e5f\u914d\u7f6e\u6210hidden\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cfg=rs.conf() \ncfg.members[0].priority=0\ncfg.members[0].hidden=true\ncfg.members[0].slaveDelay=120\nrs.reconfig(cfg)\n")),(0,r.kt)("p",null,"\u2014\u2014\u2014\u2014\u76ee\u524d\u72b6\u6001\u2014\u2014\u2014\u2014\u2014\u2014-"),(0,r.kt)("p",null,"\u6211\u7684\u9700\u6c42\u662f\uff1a\u628a28019\u8bbe\u7f6e\u4e3ahidden\u548cdelay"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'my_repl:PRIMARY> rs.status()\n{\n\n    "members" : [\n        {\n            "_id" : 0,\n            "name" : "10.0.0.53:28017",\n        },\n        {\n            "_id" : 1,\n            "name" : "10.0.0.53:28018",\n\n        },\n        {\n            "_id" : 3,\n            "name" : "10.0.0.53:28020",\n\n        },\n        {\n            "_id" : 4,\n            "name" : "10.0.0.53:28019",\n\n        }\n\n\n\ncfg=rs.conf() \ncfg.members[3].priority=0\ncfg.members[3].hidden=true\ncfg.members[3].slaveDelay=120\nrs.reconfig(cfg)\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u53d6\u6d88\u4ee5\u4e0a\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cfg=rs.conf() \ncfg.members[3].priority=1\ncfg.members[3].hidden=false\ncfg.members[3].slaveDelay=0\nrs.reconfig(cfg) \n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u914d\u7f6e\u6210\u529f\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u914d\u7f6e\u540e\u7684\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rs.conf();\n")),(0,r.kt)("h2",{id:"4\u526f\u672c\u96c6\u5176\u4ed6\u64cd\u4f5c\u547d\u4ee4"},"4\u3001\u526f\u672c\u96c6\u5176\u4ed6\u64cd\u4f5c\u547d\u4ee4\uff1a"),(0,r.kt)("p",null,"\u67e5\u770b\u526f\u672c\u96c6\u7684\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"admin> rs.config()\n\u6216\u8005\nadmin> rs.conf()\n")),(0,r.kt)("p",null,"\u67e5\u770b\u526f\u672c\u96c6\u5404\u6210\u5458\u7684\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"admin> rs.status()\n")),(0,r.kt)("p",null,"++++++++++++++++++++++++++++++++++++++++++++++++"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--\u526f\u672c\u96c6\u89d2\u8272\u5207\u6362\uff08\u4e0d\u8981\u4eba\u4e3a\u987a\u4fbf\u64cd\u4f5c\uff09\nadmin> rs.stepDown()\n\u6ce8\uff1a\nadmin> rs.freeze(300) //\u9501\u5b9a\u4ece\uff0c\u4f7f\u5176\u4e0d\u4f1a\u8f6c\u53d8\u6210\u4e3b\u5e93\nfreeze()\u548cstepDown\u5355\u4f4d\u90fd\u662f\u79d2\u3002\n")),(0,r.kt)("p",null,"+++++++++++++++++++++++++++++++++++++++++++++\n\u2013\u8bbe\u7f6e\u526f\u672c\u8282\u70b9\u53ef\u8bfb\uff1a\u5728\u526f\u672c\u8282\u70b9\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"admin> rs.slaveOk()\n")),(0,r.kt)("p",null,"eg\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'admin> use app\nswitched to db app\napp> db.createCollection(\'a\')\n{ "ok" : 0, "errmsg" : "not master", "code" : 10107 }\n')),(0,r.kt)("p",null,"\u67e5\u770b\u526f\u672c\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"admin> rs.printSlaveReplicationInfo()\nsource: 192.168.1.22:27017\n    syncedTo: Thu May 26 2016 10:28:56 GMT+0800 (CST)\n    0 secs (0 hrs) behind the primary\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u7ae0\u8f6c\u8f7d\u81ea\u7f51\u7edc\uff0c\u4ec5\u505a\u4fee\u6539\u3002")))}d.isMDXComponent=!0}}]);