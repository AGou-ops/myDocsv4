"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},E=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),E=u(t),m=l,N=E["".concat(i,".").concat(m)]||E[m]||p[m]||r;return t?a.createElement(N,o(o({ref:n},c),{},{components:t})):a.createElement(N,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=E;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},17437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const r={},o=void 0,s={unversionedId:"LinuxBasics/DataBases/MySQL/MySQL Function",id:"LinuxBasics/DataBases/MySQL/MySQL Function",title:"MySQL Function",description:"MySQL \u51fd\u6570",source:"@site/docs/LinuxBasics/DataBases/MySQL/MySQL Function.md",sourceDirName:"LinuxBasics/DataBases/MySQL",slug:"/LinuxBasics/DataBases/MySQL/MySQL Function",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/MySQL/MySQL Function.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MySQL explain\u8bed\u53e5",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL EXPLAIN"},next:{title:"MySQL Internal_function",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Internal_function"}},i={},u=[{value:"MySQL \u51fd\u6570",id:"mysql-\u51fd\u6570",level:2},{value:"\u51fd\u6570\u589e\u5220\u6539",id:"\u51fd\u6570\u589e\u5220\u6539",level:2},{value:"\u5f02\u5e38\u6355\u83b7\u53ca\u5904\u7406",id:"\u5f02\u5e38\u6355\u83b7\u53ca\u5904\u7406",level:2},{value:"\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5",id:"\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5",level:2},{value:"IF",id:"if",level:3},{value:"CASE",id:"case",level:3},{value:"while\u3001repeat\u3001loop\u5faa\u73af",id:"whilerepeatloop\u5faa\u73af",level:3},{value:"\u7ed3\u675f\u5faa\u73af",id:"\u7ed3\u675f\u5faa\u73af",level:4},{value:"while",id:"while",level:4},{value:"repeat",id:"repeat",level:4},{value:"loop",id:"loop",level:4}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mysql-\u51fd\u6570"},"MySQL \u51fd\u6570"),(0,l.kt)("p",null,"\u5b58\u50a8\u7684\u51fd\u6570\u662f\u8fd4\u56de\u5355\u4e2a\u503c\u7684\u7279\u6b8a\u7c7b\u578b\u7684\u5b58\u50a8\u7a0b\u5e8f\u3002\u60a8\u4f7f\u7528\u5b58\u50a8\u7684\u51fd\u6570\u6765\u5c01\u88c5\u5728SQL\u8bed\u53e5\u6216\u5b58\u50a8\u7684\u7a0b\u5e8f\u4e2d\u53ef\u91cd\u7528\u7684\u5e38\u7528\u516c\u5f0f\u6216\u4e1a\u52a1\u89c4\u5219\u3002\u4e0e\u5b58\u50a8\u8fc7\u7a0b\u4e0d\u540c\uff0c\u60a8\u53ef\u4ee5\u5728SQL\u8bed\u53e5\u4e2d\u4f7f\u7528\u5b58\u50a8\u7684\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u5728\u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528\u3002 \u8fd9\u6709\u52a9\u4e8e\u63d0\u9ad8\u7a0b\u5e8f\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,l.kt)("h2",{id:"\u51fd\u6570\u589e\u5220\u6539"},"\u51fd\u6570\u589e\u5220\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE FUNCTION <function_name>(param1,param2,\u2026)\n        RETURNS <datatype>\n       [NOT] DETERMINISTIC\n       statement\n")),(0,l.kt)("p",null,"\u8c03\u7528\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select <function_name>(param1,param2...);\n")),(0,l.kt)("p",null,"\u5220\u9664\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> drop function [if exists] <function_name>;\n")),(0,l.kt)("p",null,"\u67e5\u770b\u51fd\u6570\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show create function <function_name>;\n")),(0,l.kt)("p",null,"\u2139\ufe0f\u5176\u4ed6\uff1a\u5b9a\u4e49\u5c40\u90e8\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"DECLARE i int DEFAULT 1; ")),(0,l.kt)("h2",{id:"\u5f02\u5e38\u6355\u83b7\u53ca\u5904\u7406"},"\u5f02\u5e38\u6355\u83b7\u53ca\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"/*\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b*/\nDROP PROCEDURE IF EXISTS proc2;\n/*\u58f0\u660e\u7ed3\u675f\u7b26\u4e3a$*/\nDELIMITER $\n/*\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b*/\nCREATE PROCEDURE proc2(a1 int,a2 int)\n  BEGIN\n    /*\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\uff0c\u6807\u8bc6\u662f\u5426\u6709sql\u5f02\u5e38*/\n    DECLARE hasSqlError int DEFAULT FALSE;\n    /*\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u4efb\u4f55\u5f02\u5e38\u8bbe\u7f6ehasSqlError\u4e3aTRUE*/\n    `DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET hasSqlError=TRUE;`\n\n    /*\u5f00\u542f\u4e8b\u52a1*/\n    START TRANSACTION;\n    INSERT INTO test1(a) VALUES (a1);\n    INSERT INTO test1(a) VALUES (a2);\n\n    /*\u6839\u636ehasSqlError\u5224\u65ad\u662f\u5426\u6709\u5f02\u5e38\uff0c\u505a\u56de\u6eda\u548c\u63d0\u4ea4\u64cd\u4f5c*/\n    IF hasSqlError THEN\n      ROLLBACK;\n    ELSE\n      COMMIT;\n    END IF;\n  END $\n/*\u7ed3\u675f\u7b26\u7f6e\u4e3a;*/\nDELIMITER ;\n")),(0,l.kt)("h2",{id:"\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5"},"\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5"),(0,l.kt)("h3",{id:"if"},"IF"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"IF search_condition THEN statement_list\n    [ELSEIF search_condition THEN statement_list]...\n    [ELSE statement_list]\nEND IF\n")),(0,l.kt)("p",null,"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7ec8\u7aef\u77ed\u8bed\u53e5\u4e2d\u4f7f\u7528\uff0cif(\u6761\u4ef6\u8868\u8fbe\u5f0f,\u503c1,\u503c2)\uff0c\u5f53\u6761\u4ef6\u8868\u8fbe\u5f0f\u503c\u4e3atrue\u65f6\u8fd4\u56de\u503c1\uff0c\u53cd\u4e4b\u8fd4\u56de\u503c2\nSELECT id \u7f16\u53f7,if(sex=1,'\u7537','\u5973') \u6027\u522b,name \u59d3\u540d FROM t_user;\n-- \u51fd\u6570\u4e2d\u4f7f\u7528\nIF age>20 THEN SET @count1=@count1+1;\n    ELSEIF age=20 THEN @count2=@count2+1;\n    ELSE @count3=@count3+1;\nEND IF;\n")),(0,l.kt)("h3",{id:"case"},"CASE"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CASE case_value\n    WHEN when_value THEN statement_list\n    [WHEN when_value THEN statement_list]...\n    [ELSE statement_list]\nEND CASE\n")),(0,l.kt)("p",null,"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7ec8\u7aef\u6bb5\u8bed\u53e5\u4e2d\u4f7f\u7528\nSELECT id \u7f16\u53f7,(CASE sex WHEN 1 THEN '\u7537' ELSE '\u5973' END) \u6027\u522b,name \u59d3\u540d FROM t_user;\n-- \u51fd\u6570\u4e2d\u4f7f\u7528\nCASE age\n    WHEN 20 THEN SET @count1=@count1+1;\n    ELSE SET @count2=@count2+1;\nEND CASE;\n\u4ee3\u7801\u4e5f\u53ef\u4ee5\u662f\u4e0b\u9762\u7684\u5f62\u5f0f\uff1a\nCASE\n    WHEN age=20 THEN SET @count1=@count1+1;\n    ELSE SET @count2=@count2+1;\nEND CASE;\n")),(0,l.kt)("h3",{id:"whilerepeatloop\u5faa\u73af"},"while\u3001repeat\u3001loop\u5faa\u73af"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"mysql\u4e2d\u5faa\u73af\u67093\u79cd\u5199\u6cd5\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"while\uff1a\u7c7b\u4f3c\u4e8ejava\u4e2d\u7684while\u5faa\u73af"),(0,l.kt)("li",{parentName:"ol"},"repeat\uff1a\u7c7b\u4f3c\u4e8ejava\u4e2d\u7684do while\u5faa\u73af"),(0,l.kt)("li",{parentName:"ol"},"loop\uff1a\u7c7b\u4f3c\u4e8ejava\u4e2d\u7684while(true)\u6b7b\u5faa\u73af\uff0c\u9700\u8981\u5728\u5185\u90e8\u8fdb\u884c\u63a7\u5236\u3002")),(0,l.kt)("h4",{id:"\u7ed3\u675f\u5faa\u73af"},"\u7ed3\u675f\u5faa\u73af"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7ed3\u675f\u672c\u6b21\u5faa\u73af\uff0c\u7c7b\u4f3c\u4e8ejava\u4e2d\u7684continue\niterate \u5faa\u73af\u6807\u7b7e;\n-- \u9000\u51fa\u5faa\u73af\uff0c\u7c7b\u4f3c\u4e8ejava\u4e2d\u7684break\nleave \u5faa\u73af\u6807\u7b7e;\n")),(0,l.kt)("h4",{id:"while"},"while"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[begin_label:] WHILE search_condition DO\n    statement list\nEND WHILE [end_label]\n")),(0,l.kt)("p",null,"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"a:WHILE @count<100 DO\n    SET @count=@count+1;\nEND WHILE a;\n")),(0,l.kt)("h4",{id:"repeat"},"repeat"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[begin_label:] REPEAT\n    statement_list\n    UNTIL search_condition\nEND REPEAT [end_label]\n")),(0,l.kt)("p",null,"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"REPEAT\n    SET @count=@count+1;\n    UNTIL @count=100\nEND REPEAT;\n-- \nCREATE PROCEDURE proc6(v_count int)\n  BEGIN\n    DECLARE i int DEFAULT 1;\n    a:REPEAT\n      INSERT into test1 values (i);\n      SET i=i+1;\n    UNTIL i>v_count END REPEAT;\n  END $\n")),(0,l.kt)("h4",{id:"loop"},"loop"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[begin_label:]LOOP\n    statement_list\nEND LOOP [end_label]\n")),(0,l.kt)("p",null,"\u7b80\u5355\u6837\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"add_num:LOOP\n    SET @count=@count+1;\nEND LOOP add_num;\n-- \nCREATE PROCEDURE proc7(v_count int)\n  BEGIN\n    DECLARE i int DEFAULT 0;\n    a:LOOP\n      SET i=i+1;\n      /*\u5f53i>v_count\u7684\u65f6\u5019\u9000\u51fa\u5faa\u73af*/\n      IF i>v_count THEN\n        LEAVE a;\n      END IF;\n      INSERT into test1 values (i);\n    END LOOP a;\n  END $\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u90e8\u5206\u6837\u4f8b\u6765\u6e90\u4e8e\u7f51\u7edc\u3002")))}p.isMDXComponent=!0}}]);