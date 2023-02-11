"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={},o="\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",c={unversionedId:"CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",id:"CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",title:"\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",description:"docker-compose.yml \u6587\u4ef6\u5185\u5bb9\uff1a",source:"@site/docs/CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK.md",sourceDirName:"CloudNative/ELFK",slug:"/CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",permalink:"/docs/CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/ELFK/\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Syslog + ELK \u65e5\u5fd7\u6536\u96c6",permalink:"/docs/CloudNative/ELFK/syslog-ELK\u65e5\u5fd7\u6536\u96c6"},next:{title:"\u6536\u96c6Java\u3001Tomcat\u65e5\u5fd7",permalink:"/docs/CloudNative/ELFK/\u6536\u96c6Java\u3001Tomcat\u65e5\u5fd7"}},l={},i=[],p={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-docker-compose-\u90e8\u7f72-elk"},"\u4f7f\u7528 docker-compose \u90e8\u7f72 ELK"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices:\n  elasticsearch:\n    image: elasticsearch:7.7.1\n    container_name: elasticsearch\n    environment:\n      - "cluster.name=elasticsearch" #\u8bbe\u7f6e\u96c6\u7fa4\u540d\u79f0\u4e3aelasticsearch\n      - "discovery.type=single-node" #\u4ee5\u5355\u4e00\u8282\u70b9\u6a21\u5f0f\u542f\u52a8\n      - "ES_JAVA_OPTS=-Xms512m -Xmx1024m" #\u8bbe\u7f6e\u4f7f\u7528jvm\u5185\u5b58\u5927\u5c0f\n    volumes:\n      - /data/docker/elfk/elasticsearch/plugins:/usr/share/elasticsearch/plugins # \u63d2\u4ef6\u6587\u4ef6\u6302\u8f7d\n      - /data/docker/elfk/elasticsearch/data:/usr/share/elasticsearch/data # \u6570\u636e\u6587\u4ef6\u6302\u8f7d\n    ports:\n      - 9200:9200\n    restart: always\n  kibana:\n    image: kibana:7.7.1\n    container_name: kibana\n    links:\n      - elasticsearch:es #\u53ef\u4ee5\u7528es\u8fd9\u4e2a\u57df\u540d\u8bbf\u95eeelasticsearch\u670d\u52a1\n    depends_on:\n      - elasticsearch #kibana\u5728elasticsearch\u542f\u52a8\u4e4b\u540e\u518d\u542f\u52a8\n    environment:\n      - "elasticsearch.hosts=http://es:9200" #\u8bbe\u7f6e\u8bbf\u95eeelasticsearch\u7684\u5730\u5740\n    ports:\n      - 5601:5601\n    restart: always\n  logstash:\n    image: logstash:7.7.1\n    container_name: logstash\n    volumes:\n      - /Users/zhouxinlei/docker/elfk/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf\n    depends_on:\n      - elasticsearch #kibana\u5728elasticsearch\u542f\u52a8\u4e4b\u540e\u518d\u542f\u52a8\n    links:\n      - elasticsearch:es #\u53ef\u4ee5\u7528es\u8fd9\u4e2a\u57df\u540d\u8bbf\u95eeelasticsearch\u670d\u52a1\n    ports:\n      - 5044:5044\n    restart: always\n  filebeat:\n    image: elastic/filebeat:7.7.1\n    container_name: filebeat\n    links:\n      - logstash:logstash #\u53ef\u4ee5\u7528es\u8fd9\u4e2a\u57df\u540d\u8bbf\u95eeelasticsearch\u670d\u52a1\n    volumes:\n      - /Users/zhouxinlei/logs/:/var/logs/springboot/ # \u5bbf\u4e3b\u673a\u5b9e\u9645\u5e94\u7528\u65e5\u5fd7\u6587\u4ef6\u6620\u5c04\u5230\u5bb9\u5668\u5185\u90e8\n      - /Users/zhouxinlei/docker/elfk/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml\n    depends_on:\n      - logstash #kibana\u5728elasticsearch\u542f\u52a8\u4e4b\u540e\u518d\u542f\u52a8\n    restart: always\n\n')),(0,r.kt)("p",null,"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728logstash\u4e2d\u5b89\u88c5json_lines\u63d2\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165logstash\u5bb9\u5668\ndocker exec -it logstash /bin/bash\n# \u8fdb\u5165bin\u76ee\u5f55\ncd /bin/\n# \u5b89\u88c5\u63d2\u4ef6\nlogstash-plugin install logstash-codec-json_lines\n# \u9000\u51fa\u5bb9\u5668\nexit\n# \u91cd\u542flogstash\u670d\u52a1\ndocker restart logstash\n")))}u.isMDXComponent=!0}}]);