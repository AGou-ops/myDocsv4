"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},l="SQL \u590d\u4e60",p={unversionedId:"LinuxBasics/SQL review",id:"LinuxBasics/SQL review",title:"SQL \u590d\u4e60",description:"- show grants for 'test'@'localhost';",source:"@site/docs/LinuxBasics/SQL review.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/SQL review",permalink:"/docs/LinuxBasics/SQL review",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/SQL review.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"PowerDNS",permalink:"/docs/LinuxBasics/PowerDNS"},next:{title:"SSH Tunnel",permalink:"/docs/LinuxBasics/SSH Tunnel"}},o={},m=[],s={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-\u590d\u4e60"},"SQL \u590d\u4e60"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"show grants for 'test'@'localhost';"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"revoke select on test.* from test@localhost;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"drop database if exists test;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"create table test7(\n-> a int not null comment '\u5b57\u6bb5a',\n-> b int not null comment '\u5b57\u6bb5b',\n-> PRIMARY KEY (a,b)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5916\u952e\u6ce8\u610f\u4e8b\u9879:\n\u6ce8\u610f\u2f0f\u70b9\uff1a\n\u2022 \u4e24\u5f20\u8868\u4e2d\u9700\u8981\u5efa\u2f74\u5916\u952e\u5173\u7cfb\u7684\u5b57\u6bb5\u7c7b\u578b\u9700\u8981\u2f00\u81f4\n\u2022 \u8981\u8bbe\u7f6e\u5916\u952e\u7684\u5b57\u6bb5\u4e0d\u80fd\u4e3a\u4e3b\u952e\n\u2022 \u88ab\u5f15\u2f64\u7684\u5b57\u6bb5\u9700\u8981\u4e3a\u4e3b\u952e\n\u2022 \u88ab\u63d2\u2f0a\u7684\u503c\u5728\u5916\u952e\u8868\u5fc5\u987b\u5b58\u5728\uff0c\u5982\u4e0a\u2faf\u5411test6\u4e2d\u63d2\u2f0ats5_a\u4e3a2\u7684\u65f6\u5019\u62a5\u9519\u4e86\uff0c\u539f\n\u56e0\uff1a2\u7684\u503c\u5728test5\u8868\u4e2d\u4e0d\u5b58\u5728"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u8868\u6240\u6709\u5185\u5bb9\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"delete from test11;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u8868\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"alter table  \u8868\u540drename [to]  \u65b0\u8868\u540d;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8868\u8bbe\u7f6e\u5907\u6ce8 ",(0,r.kt)("inlineCode",{parentName:"p"},"alter table  \u8868\u540dcomment '\u5907\u6ce8\u4fe1\u606f';"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u590d\u5236\u8868 \u53ea\u590d\u5236\u8868\u7ed3\u6784 ",(0,r.kt)("inlineCode",{parentName:"p"},"create table  \u8868\u540dlike  \u88ab\u590d\u5236\u7684\u8868\u540d;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u590d\u5236\u8868\u7ed3\u6784+\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"create table  \u8868\u540d[as] select  \u5b57\u6bb5,...  from  \u88ab\u590d\u5236\u7684\u8868[where  \u6761\u4ef6];")," \u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"mysql> create table test13 as select * from test11;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u589e\u52a0\u5217\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"alter table test14 add column b  int  not  null  default  0  comment '\u5b57\u6bb5b';"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"alter table  \u8868\u540dmodify column  \u5217\u540d\u65b0\u7c7b\u578b[\u7ea6\u675f];")," \u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"alter table  \u8868\u540dchange column  \u5217\u540d\u65b0\u5217\u540d\u65b0\u7c7b\u578b[\u7ea6\u675f];"),"\n",(0,r.kt)("strong",{parentName:"p"},"2\u79cd\u2f45\u5f0f\u533a\u522b\uff1amodify\u4e0d\u80fd\u4fee\u6539\u5217\u540d\uff0cchange\u53ef\u4ee5\u4fee\u6539\u5217\u540d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u5217",(0,r.kt)("inlineCode",{parentName:"p"}," alter table  \u8868\u540ddrop column  \u5217\u540d;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u8868\u66f4\u65b0 \u8bed\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," update  \u8868\u540d[[as]  \u522b\u540d] set [\u522b\u540d.]\u5b57\u6bb5=  \u503c,[\u522b\u540d.]\u5b57\u6bb5=  \u503c[where\u6761\u4ef6];"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u8868\u66f4\u65b0 \u53ef\u4ee5\u540c\u65f6\u66f4\u65b0\u591a\u4e2a\u8868\u4e2d\u7684\u6570\u636e  \u8bed\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," update  \u88681 [[as]  \u522b\u540d1],\u8868\u540d2 [[as]  \u522b\u540d2] set [\u522b\u540d.]\u5b57\u6bb5=  \u503c,[\u522b\u540d.]\u5b57\u6bb5=  \u503c[where\u6761\u4ef6]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u522b\u540d\u7684\u2f45\u5f0f\u66f4\u65b0\u591a\u4e2a\u8868\u7684\u591a\u4e2a\u5b57\u6bb5",(0,r.kt)("inlineCode",{parentName:"p"},"update test1 as t1,test2 t2 set t1.a  =  2  ,t1.b  =  2, t2.c1  =  10  - where t1.a  = t2.c1;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete t1 from test1 t1 where t1.a>100;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete t2,t1 from test1 t1,test2 t2 where t1.a=t2.c2;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"od\u51fd\u6570\uff0c\u5bf9\u4e24\u4e2a\u53c2\u6570\u53d6\u6a21\u8fd0\u7b97\u3002isnull\u51fd\u6570\uff0c\u5224\u65ad\u53c2\u6570\u662f\u5426\u4e3a\u7a7a\uff0c\u82e5\u4e3a\u7a7a\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002ifnull\u51fd\u6570\uff0c2\u4e2a\u53c2\u6570\uff0c\u5224\u65ad\u7b2c\u2f00\u4e2a\u53c2\u6570 \u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u4e3a\u7a7a\u8fd4\u56de\u7b2c2\u4e2a\u53c2\u6570\u7684\u503c\uff0c\u5426\u5219\u8fd4\u56de\u7b2c1\u4e2a\u53c2\u6570\u7684\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"select a as  '\u52171',b as '\u52172' from test1;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"select * from test6 t where t.age  in  (10,15,20,30);"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"select a.id\u8ba2\u5355\u7f16\u53f7,a.price\u8ba2\u5355\u2fa6\u989dfrom t_order a where a.price>=100  order by a.price  desc;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u9875\u67e5\u8be2: ",(0,r.kt)("inlineCode",{parentName:"p"},"select  \u5217from  \u8868\u540dlimit  (page -  1) * pageSize,pageSize;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"year"),"\u51fd\u6570\u8fdb\u884c\u67e5\u8be2: ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT id \u7f16\u53f7,birth \u51fa\u2f63\u2f47\u671f,year(birth) \u51fa\u2f63\u5e74\u4efd,name \u59d3\u540d from\nstudent ORDER BY \u51fa\u2f63\u5e74\u4efd asc,id asc;"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u5b57\u6bb5\u5206\u7ec4\u67e5\u8be2: \u67e5\u8be2\u7528\u6237\u4e0b\u5355\u6570\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user_id \u2f64\u6237id, COUNT(id) \u4e0b\u5355\u6570\u91cf FROM t_order GROUP BY user_id;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u5b57\u6bb5\u5206\u7ec4\u67e5\u8be2: ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user_id \u2f64\u6237id, the_year \u5e74\u4efd, COUNT(id) \u4e0b\u5355\u6570\u91cf FROM t_order GROUP BY user_id , the_year;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u7ec4\u67e5\u8be2\u4e4b\u524d\u7684\u7b5b\u9009: ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user_id \u2f64\u6237id, COUNT(id) \u4e0b\u5355\u6570\u91cf FROM t_order t WHERE t.the_year = 2018 GROUP BY user_id;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u8981\u8fdb\u884c\u5206\u7ec4\u540e\u67e5\u8be2, \u5219\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"having"),"\u5173\u952e\u5b57: ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user_id \u2f64\u6237id, COUNT(id) \u4e0b\u5355\u6570\u91cf FROM t_order t WHERE t.the_year = 2018 GROUP BY user_id HAVING count(id)>=2;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u7ec4\u540e\u6392\u5e8f: ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT user_id \u2f64\u6237id, max(price) \u6700\u2f24\u2fa6\u989d FROM t_order t GROUP BY user_id ORDER BY \u6700\u2f24\u2fa6\u989d desc;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u540c\u65f6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"group by"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"having"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"order by"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),"\u5173\u952e\u8bcd\u65f6, \u6709\u4ee5\u4e0b\u5148\u540e\u987a\u5e8f:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4ece\u4e0a\u5230\u4e0b\nselect \u5217 from\n\u8868\u540d\nwhere [\u67e5\u8be2\u6761\u4ef6]\ngroup by [\u5206\u7ec4\u8868\u8fbe\u5f0f]\nhaving [\u5206\u7ec4\u8fc7\u6ee4\u6761\u4ef6]\norder by [\u6392\u5e8f\u6761\u4ef6]\nlimit [offset,] count;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"})))}u.isMDXComponent=!0}}]);