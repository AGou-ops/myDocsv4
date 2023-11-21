"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4370],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>m});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),p=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},k=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=t,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||o;return n?r.createElement(d,c(c({ref:a},k),{},{components:n})):r.createElement(d,c({ref:a},k))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98212:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),t=(n(67294),n(3905));const o={},c="\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",s={unversionedId:"LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",id:"LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",title:"\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",description:"docker-compose.yml\u5185\u5bb9\u5982\u4e0b\uff1a",source:"@site/docs/LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka.md",sourceDirName:"LinuxBasics/Kafka",slug:"/LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",permalink:"/docs/LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Kafka Basic",permalink:"/docs/LinuxBasics/Kafka/Kafka Basic"},next:{title:"LoadBalancer",permalink:"/docs/category/loadbalancer"}},i={},p=[],k={toc:p};function l(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u4f7f\u7528-docker-compose-\u90e8\u7f72-kafka"},"\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  zookeeper:\n    image: zookeeper:latest\n    container_name: zookeeper\n    volumes:\n      - /data/docker/kafka/zookeeper/data:/data\n      - /data/docker/kafka/zookeeper/datalog:/datalog\n    ports:\n      - 2181:2181\n    restart: always\n  kafka:\n    image: wurstmeister/kafka\n    container_name: kafka\n    volumes:\n      - /data/docker/kafka/data:/kafka\n    ports:\n      - 9092:9092\n    environment:\n      KAFKA_ADVERTISED_HOST_NAME: kafka\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      # KAFKA_ADVERTISED_PORT: 9092\n      # KAFKA_LOG_RETENTION_HOURS: 120\n      # KAFKA_MESSAGE_MAX_BYTES: 10000000\n      # KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000\n      # KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000\n      # KAFKA_NUM_PARTITIONS: 3\n      # KAFKA_DELETE_RETENTION_MS: 1000\n    restart: always\n  kafka-manager:\n    image: kafkamanager/kafka-manager\n    container_name: kafka-manager\n    environment:\n      ZK_HOSTS: kafka\n    ports:\n      - 9000:9000\n    restart: always\n")),(0,t.kt)("p",null,"\u8fd0\u884c\u811a\u672c\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /data/docker/kafka/zookeeper/{data,datalog} /data/docker/kafka/data -pv && docker-compose up -d\n")))}l.isMDXComponent=!0}}]);