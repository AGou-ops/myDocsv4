"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=l,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||s;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const s={},r="Kafka/Redis + ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",o={unversionedId:"CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",id:"CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",title:"Kafka/Redis + ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",description:"Filebeat --\x3e Kafka --\x3e Logstash --\x3e ES Cluster --\x3e Kibana/Grafana",source:"@site/docs/CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6.md",sourceDirName:"CloudNative/ELFK",slug:"/CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",permalink:"/docs/CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/ELFK/Kafka-Redis-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Kafka + ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",permalink:"/docs/CloudNative/ELFK/Kafka-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6"},next:{title:"Logstash Basic & Plugins",permalink:"/docs/CloudNative/ELFK/Logstash Basic - Plugins"}},i={},p=[{value:"\u4f7f\u7528\u80cc\u666f",id:"\u4f7f\u7528\u80cc\u666f",level:2},{value:"Filebeat --&gt; Kafka/Redis",id:"filebeat----kafkaredis",level:2},{value:"\u542f\u52a8 Kafka/Redis",id:"\u542f\u52a8-kafkaredis",level:2},{value:"Kafka/Redis --&gt; Logstash --&gt; ElasticSearch",id:"kafkaredis----logstash----elasticsearch",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kafkaredis--elfk\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6"},"Kafka/Redis + ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/log_collect.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Filebeat --\x3e Kafka --\x3e Logstash --\x3e ES Cluster --\x3e Kibana/Grafana"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/redis%2BELFK.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Filebeat --\x3e Redis --\x3e Logstash --\x3e ES Cluster --\x3e Kibana/Grafana"))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u80cc\u666f"},"\u4f7f\u7528\u80cc\u666f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"ELFK"),"\u7684\u5c40\u9650\u6027\uff0c\u968f\u7740",(0,l.kt)("inlineCode",{parentName:"p"}," Beats")," \u6536\u96c6\u7684\u6bcf\u79d2\u6570\u636e\u91cf\u8d8a\u6765\u8d8a\u5927\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash "),"\u53ef\u80fd\u65e0\u6cd5\u627f\u8f7d\u8fd9\u4e48\u5927\u91cf\u65e5\u5fd7\u7684\u5904\u7406\u3002\u867d\u7136\u8bf4\uff0c\u53ef\u4ee5\u589e\u52a0 Logstash \u8282\u70b9\u6570\u91cf\uff0c\u63d0\u9ad8\u6bcf\u79d2\u6570\u636e\u7684\u5904\u7406\u901f\u5ea6\uff0c\u4f46\u662f\u4ecd\u9700\u8003\u8651\u53ef\u80fd",(0,l.kt)("inlineCode",{parentName:"p"},"Elasticsearch"),"\u65e0\u6cd5\u627f\u8f7d\u8fd9\u4e48\u5927\u91cf\u7684\u65e5\u5fd7\u7684\u5199\u5165\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651 ",(0,l.kt)("strong",{parentName:"p"},"\u5f15\u5165\u6d88\u606f\u961f\u5217")," \uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka"),"\uff09\uff0c\u8fdb\u884c\u7f13\u5b58\u3002")),(0,l.kt)("h2",{id:"filebeat----kafkaredis"},"Filebeat --\x3e Kafka/Redis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml\nfilebeat.inputs:\n- type: log\n  paths:\n    - /usr/local/apache-tomcat-9.0.34/logs/tomcat_access_log.*.log\n  #fields:\n  #  log_source: messages\n  #fields_under_root: true\n  \noutput.kafka:\n  hosts: ["192.168.0.108:9092"]\n  topic: tomcat\n  partition.round_robin:\n    reachable_only: false\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# filebeat.inputs \u5185\u5bb9\u548c\u4e0a\u9762\u7c7b\u4f3c...\n# \u7b80\u5355\u8f93\u51fa\u793a\u4f8b\noutput.redis:\n  hosts: ["localhost"]      # \u5982\u679c\u662f\u96c6\u7fa4, \u5219\u9700\u8981\u6dfb\u52a0\u591a\u4e2a\n  # port: 6379\n  password: "my_password"\n  key: "filebeat"\n  db: 0\n  timeout: 5\n  \n# output.redis:\n#   hosts: ["localhost"]\n#   key: "default_list"\n#   keys:\n#     - key: "info_list"   # send to info_list if `message` field contains INFO\n#       when.contains:\n#         message: "INFO"\n#     - key: "debug_list"  # send to debug_list if `message` field contains DEBUG\n#       when.contains:\n#         message: "DEBUG"\n#     - key: "%{[fields.list]}"\n#       mappings:\n#         http: "frontend_list"\n#         nginx: "frontend_list"\n#          mysql: "backend_list"\n')),(0,l.kt)("h2",{id:"\u542f\u52a8-kafkaredis"},"\u542f\u52a8 Kafka/Redis"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u811a\u672c\u6765\u8fdb\u884c\u5feb\u901f\u90e8\u7f72\uff0c\u811a\u672c\u5185\u5bb9\u53c2\u89c1","[\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka]","(../Kafka/\u4f7f\u7528 docker-compose \u90e8\u7f72 Kafka.md)"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"kafka-manager"),", \u53ef\u4ee5\u5728\u9762\u677f\u4e0a\u770b\u5230\u76f8\u5173",(0,l.kt)("inlineCode",{parentName:"p"},"topic"),"\u5df2\u7ecf\u521b\u5efa, \u5e76\u4e14\u5199\u5165\u6570\u636e\u4e4b\u540e, \u5df2\u7ecf\u6709\u4e86\u5206\u533a\u504f\u79fb\u91cf, \u5982\u4e0b\u56fe\u6240\u793a:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/Filebeat%2BKafka%2BELK.png",alt:null,title:"kafka-manager"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u68c0\u6d4b",(0,l.kt)("inlineCode",{parentName:"p"},"filebeat"),"\u662f\u5426\u5c06\u65e5\u5fd7\u4f20\u9012\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"kafka"),":"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --zookeeper 192.168.0.108:2181 --topic tomcat --from-beginning\n"))),(0,l.kt)("p",null,"\u542f\u52a8",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start redis\n")),(0,l.kt)("p",null,"\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u4ea4\u4e92\u5f0f\u5ba2\u6237\u7aef\u8fdb\u884c\u67e5\u770b(\u7531\u4e8e\u4fe1\u606f\u592a\u957f, \u5728\u6b64\u8fdb\u884c\u7f29\u7565\u663e\u793a):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> keys *\n1) "filebeat"\n127.0.0.1:6379> LPOP filebeat\n"{\\"@timestamp\\":\\"2020-07-15T14:52:07.315Z\\",\\"@metadata\\":\n...\n`"GET / HTTP/1.1`\\\\\\",\\\\\\"status\\\\\\":\\\\\\"200\\\\\\",\\\\\\"SendBytes\\\\\\":\\\\\\"11216\\\\\\",\\\\\\"Query?string\\\\\\":\\\\\\"\\\\\\",\\\\\\"partner\\\\\\":\\\\\\"-\\\\\\",\\\\\\"AgentVersion\\\\\\":\\\\\\"curl/7.29.0\\\\\\"}\\",\\"input\\":{\\"type\\":\\"log\\"},\\"host\\":\n...\n127.0.0.1:6379> LPOP filebeat\n"{\\"@timestamp\\":\\"2020-07-15T14:52:08.339Z\\",\\"@metadata\\":{\\"beat\\":\\"filebeat\\",\\"type\\":\\"_doc\\",\\"version\\":\\"7.7.1\\"},\\"agent\\":\n...\n`"GET/test/index.html`HTTP/1.1\\\\\\",\\\\\\"status\\\\\\":\\\\\\"200\\\\\\",\\\\\\"SendBytes\\\\\\":\\\\\\"19\\\\\\",\\\\\\"Query?string\\\\\\":\\\\\\"\\\\\\",\\\\\\"partner\\\\\\":\\\\\\"-\\\\\\",\\\\\\"AgentVersion\\\\\\":\\\\\\"curl/7.29.0\\\\\\"}\\",\\"log\\":{\\"offset\\":234,\\"file\\":{\\"path\\":\\``"/usr/local/apache-tomcat-9.0.34/logs/tomcat_access_log.2020-07-15.log`\n...\n\n')),(0,l.kt)("h2",{id:"kafkaredis----logstash----elasticsearch"},"Kafka/Redis --\x3e Logstash --\x3e ElasticSearch"),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"kafka"),"\u8f93\u5165:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# vim /usr/local/logstash-7.7.1/config/kafka2es.conf\ninput {\n    kafka {\n    codec => "json"\n    topics => ["tomcat"]\n    bootstrap_servers => "192.168.0.108:9092"\n    auto_offset_reset => "latest"\n    group_id => "logstash-g1"\n    }\n}\noutput {\n    elasticsearch {\n    hosts => "http://192.168.0.108:9200"\n    index => "tomcat-%{+YYYY.MM.dd}"\n    }\n}\n')),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u8f93\u5165:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'input {\n  redis {\n    host => "localhost"\n    port => "6379"\n    db => "0"\n    key => "filebeat"\n    data_type => "list"\n    password => ""\n    codec  => "json"\n    }\n}\n\n# output \u5185\u5bb9\u4e0e kafka \u76f8\u4f3c.;.\n')),(0,l.kt)("p",null,"\u542f\u52a8",(0,l.kt)("inlineCode",{parentName:"p"},"es"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"logstash"),"\u4e4b\u540e, \u6253\u5f00\u6d4f\u89c8\u5668, \u4f7f\u7528\u63d2\u4ef6\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"\u7684web\u7ba1\u7406\u9875\u9762, \u67e5\u770b\u662f\u5426\u5df2\u7ecf\u6536\u96c6\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u65e5\u5fd7\u4fe1\u606f."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/Filebeat%2BKafka%2BELK-2.png",alt:null,title:"elasticsearch"})),(0,l.kt)("p",null,"\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"Kibana"),"\u7ba1\u7406\u754c\u9762, \u6dfb\u52a0\u7d22\u5f15, \u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\u4e2d\u67e5\u770b\u6765\u81ea",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash"),"\u7684\u65e5\u5fd7."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/Filebeat%2BKafka%2BELK-3.png",alt:null,title:"Kibana"})),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configuring output: ",(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-output.html"},"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-output.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/sanduzxcvbnm/p/11422928.html"},"https://www.cnblogs.com/sanduzxcvbnm/p/11422928.html"))))}u.isMDXComponent=!0}}]);