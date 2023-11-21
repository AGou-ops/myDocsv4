"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(a),y=r,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||l;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},s="MySQL\u5c0f\u6280\u5de7\u6c47\u603b",o={unversionedId:"LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",id:"LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",title:"MySQL\u5c0f\u6280\u5de7\u6c47\u603b",description:"- JSON\u4e2d\u67e5\u8be2\u7279\u5b9a\u952e\u5bf9\u5e94\u7684\u503c",source:"@site/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7.md",sourceDirName:"LinuxBasics/DataBases/MySQL",slug:"/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MySQL \u4e8b\u52a1",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Transaction"},next:{title:"MySQL\u5feb\u901f\u624b\u518c",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL \u5feb\u901f\u624b\u518c"}},c={},i=[],u={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql\u5c0f\u6280\u5de7\u6c47\u603b"},"MySQL\u5c0f\u6280\u5de7\u6c47\u603b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON\u4e2d\u67e5\u8be2\u7279\u5b9a\u952e\u5bf9\u5e94\u7684\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT data -> '$.text_1' FROM ...              -- `->`\u5199\u6cd5\u7b49\u4ef7\u4e8eJSON_EXTRACT()\n-- `->>`\u662fJSON_EXTRACT() \u548c JSON_UNQUOTE() \u7684\u7b49\u4ef7\u5199\u6cd5\n")),(0,r.kt)("p",null,"\ud83d\udd17\u66f4\u591aJSON\u64cd\u4f5c\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/muscleape/p/10064031.html"},"https://www.cnblogs.com/muscleape/p/10064031.html")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6570\u5b57")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST('123' AS SIGNED);\nSELECT CONVERT('123',SIGNED);\n-- \u4e09\u79cd\u65b9\u6cd5\uff0c\u6700\u540e\u8fd9\u79cd\u975e\u5e38\u7b80\u5355\nSELECT '123'+0;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u6570\u636e\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6ce8\u610f\u76f4\u63a5\u4f7f\u7528RENAME DATABASE <old_name> TO <new_name> \u4f1a\u4e22\u5931\u90e8\u5206\u6570\u636e\uff0c\u5b98\u65b9\u4e5f\u4e0d\u63a8\u8350\u8be5\u505a\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e0b\u811a\u672c\u4ee3\u7406\uff0c\u6ce8\u610f\u6709\u4e00\u884c\u8b66\u544a\u8f93\u51fa\u3002\nmysql -h rm-8vbhaq1jlv38l7qey.mysql.zhangbei.rds.aliyuncs.com -u tmp -p"xxx" canal_test -sNe \'show tables\' | while read table; do mysql -u tmp -p"xxx" -sNe "RENAME TABLE canal_test.$table TO canal_test_bak_20230901.$table"; done\n\n\nfor table in question_data question_data_delete source_data std_question_data std_question_data_delete user_table; do mysql -h rm-8vbhaq1jlv38l7qey.mysql.zhangbei.rds.aliyuncs.com -u tmp -p"xxx" -sNe "RENAME TABLE canal_test.$table TO canal_test_bak_20230901.$table"; done\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u6570\u636e\u5e93\u6216\u8005\u5355\u4e2a\u6570\u636e\u5e93\u5360\u7528\u7684\u7a7a\u95f4\u5927\u5c0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},'SELECT table_schema AS "Database", \nROUND(SUM(data_length + index_length) / 1024 / 1024 / 1024, 2) AS "Size (GB)" \nFROM information_schema.tables\nGROUP BY table_schema;\n\n\n\u5176\u4e2d\uff0cROUND\u51fd\u6570\u5c06\u7ed3\u679c\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570\uff0cdata_length\u8868\u793a\u6570\u636e\u5927\u5c0f\uff0cindex_length\u8868\u793a\u7d22\u5f15\u5927\u5c0f\uff0cinformation_schema.tables\u662f MySQL \u7cfb\u7edf\u6570\u636e\u5e93\u4e2d\u7528\u4e8e\u5b58\u50a8\u5173\u4e8e\u6240\u6709\u8868\u7684\u4fe1\u606f\u7684\u8868\u3002\n\n\u5982\u679c\u8981\u67e5\u770b\u7279\u5b9a\u5e93\u7684\u5360\u7528\u7a7a\u95f4\u5927\u5c0f\uff0c\u53ef\u4ee5\u5728\u8bed\u53e5\u4e2d\u52a0\u4e0a WHERE \u6761\u4ef6\uff0c\u5982\uff1a\n\nSELECT table_schema AS "Database", \nROUND(SUM(data_length + index_length) / 1024 / 1024 / 1024, 2) AS "Size (GB)"\nFROM information_schema.tables\nWHERE table_schema = \'your_database_name\'\nGROUP BY table_schema;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6240\u6709\u8868\u7684\u5360\u7528\u7a7a\u95f4\u5927\u5c0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT table_name, CONCAT(ROUND((DATA_LENGTH + INDEX_LENGTH) / (1024 * 1024 * 1024), 2), ' GB') AS size\nFROM information_schema.TABLES \nWHERE table_schema = '<\u6307\u5b9a\u7684\u6570\u636e\u5e93\u540d>'\nORDER BY size DESC;\n\n")))}m.isMDXComponent=!0}}]);