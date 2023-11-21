"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={},r="Filebeat Basic",o={unversionedId:"CloudNative/ELFK/Filebeat basic",id:"CloudNative/ELFK/Filebeat basic",title:"Filebeat Basic",description:"\u7b80\u4ecb",source:"@site/docs/CloudNative/ELFK/Filebeat basic.md",sourceDirName:"CloudNative/ELFK",slug:"/CloudNative/ELFK/Filebeat basic",permalink:"/docs/CloudNative/ELFK/Filebeat basic",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/ELFK/Filebeat basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"[Elastic Stack].Beats",permalink:"/docs/CloudNative/ELFK/Elastic Stack Beats"},next:{title:"Kafka + ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",permalink:"/docs/CloudNative/ELFK/Kafka-ELFK\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6"}},s={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u7b80\u5355\u4f7f\u7528 - \u6536\u96c6\u65e5\u5fd7\u5230\u672c\u5730",id:"\u7b80\u5355\u4f7f\u7528---\u6536\u96c6\u65e5\u5fd7\u5230\u672c\u5730",level:2},{value:"\u6536\u96c6\u5230 ES\uff08\u901a\u8fc7Logstash\uff09",id:"\u6536\u96c6\u5230-es\u901a\u8fc7logstash",level:2},{value:"\u8f93\u51fa\u5230 Redis",id:"\u8f93\u51fa\u5230-redis",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filebeat-basic"},"Filebeat Basic"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Filebeat\u9644\u5e26\u9884\u6784\u5efa\u7684\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u5305\u542b\u6536\u96c6\u3001\u89e3\u6790\u3001\u5145\u5b9e\u548c\u53ef\u89c6\u5316\u5404\u79cd\u65e5\u5fd7\u6587\u4ef6\u683c\u5f0f\u6570\u636e\u6240\u9700\u7684\u914d\u7f6e\uff0c\u6bcf\u4e2aFilebeat\u6a21\u5757\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u96c6\u7ec4\u6210\uff0c\u8fd9\u4e9b\u6587\u4ef6\u96c6\u5305\u542b\u6444\u53d6\u8282\u70b9\u7ba1\u9053\u3001Elasticsearch\u6a21\u677f\u3001Filebeat\u52d8\u63a2\u8005\u914d\u7f6e\u548cKibana\u4eea\u8868\u76d8\u3002"),(0,l.kt)("p",null,"Filebeat\u6a21\u5757\u5f88\u597d\u7684\u5165\u95e8\uff0c\u5b83\u662f\u8f7b\u91cf\u7ea7\u5355\u7528\u9014\u7684\u65e5\u5fd7\u6536\u96c6\u5de5\u5177\uff0c\u7528\u4e8e\u5728\u6ca1\u6709\u5b89\u88c5java\u7684\u670d\u52a1\u5668\u4e0a\u4e13\u95e8\u6536\u96c6\u65e5\u5fd7\uff0c\u53ef\u4ee5\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"logstash"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u7b49\u573a\u666f\u4e2d\u8fdb\u884c\u4e0b\u4e00\u6b65\u5904\u7406\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6765\u81ea\u5b98\u65b9\u7b80\u4ecb\u7ffb\u8bd1\u3002\u3002\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Filebeat"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash"),"\u76f8\u6bd4\uff0c\u524d\u8005\u5360\u7528\u5185\u5b58\u76f8\u5bf9\u8f83\u5c11\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /proc/`ps -ef |  grep -v grep |   grep logstash  | awk '{print $2}'`/status | grep -i vm\ncat /proc/`ps -ef |  grep -v grep |   grep filebeat  | awk '{print $2}'`/status | grep -i vm\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"filebeat"),"\u7684\u914d\u7f6e\u6587\u4ef6\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"filebeat.yml"),", \u76ee\u5f55\u4e2d\u9644\u5e26\u6709\u5176\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"filebeat.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'filebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /var/log/*.log\n\n#----------------------------- Elasticsearch:output(\u53ef\u9009) --------------------------------\noutput.logstash:\n  hosts: ["127.0.0.1:5044"]\noutput.elasticsearch:\n  hosts: ["myEShost:9200"]\n#----------------------------- Logstash output(\u53ef\u9009) --------------------------------\noutput.logstash:\n  hosts: ["127.0.0.1:5044"]\n#----------\u5982\u679cKibana Elasticsearch\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\u8fd0\u884c(\u53ef\u9009)----------\nsetup.kibana:\n  host: "mykibanahost:5601" \n#----------------------------- Kafka output(\u53ef\u9009) --------------------------------\noutput.kafka:\n  # initial brokers for reading cluster metadata\n  hosts: ["kafka1:9092", "kafka2:9092", "kafka3:9092"]\n\n  # message topic selection + partitioning\n  topic: \'%{[fields.log_topic]}\'\n  partition.round_robin:\n    reachable_only: false\n\n  required_acks: 1\n  compression: gzip\n  max_message_bytes: 1000000\n')),(0,l.kt)("p",null,"\u5176\u914d\u7f6e\u6587\u4ef6\u6709\u5982\u4e0b\u914d\u7f6e\u6bb5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[root@agou filebeat-7.7.1-linux-x86_64]\\# egrep "^#==" filebeat.yml\n#=========================== Filebeat inputs =============================\n#============================= Filebeat modules ===============================\n#==================== Elasticsearch template setting ==========================\n#================================ General =====================================\n#============================== Dashboards =====================================\n#============================== Kibana =====================================\n#============================= Elastic Cloud ==================================\n#================================ Outputs =====================================\n#================================ Processors =====================================\n#================================ Logging =====================================\n#============================== X-Pack Monitoring ===============================\n#================================= Migration ==================================\n')),(0,l.kt)("h2",{id:"\u7b80\u5355\u4f7f\u7528---\u6536\u96c6\u65e5\u5fd7\u5230\u672c\u5730"},"\u7b80\u5355\u4f7f\u7528 - \u6536\u96c6\u65e5\u5fd7\u5230\u672c\u5730"),(0,l.kt)("p",null,"\u6536\u96c6",(0,l.kt)("inlineCode",{parentName:"p"},"nginx"),"\u65e5\u5fd7\u5230\u672c\u5730\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml\nfilebeat.inputs:\n- type: log\n  paths:\n    - /var/log/nginx/access.log \n    - /var/log/yum.log\n- type: log\n  paths:\n    - /var/log/message\n\noutput.file:\n  enabled: true     # default: true\n  path: "/tmp/filebeat"\n  filename: filebeat.txt\n  #rotate_every_kb: 10000       # \u65e5\u5fd7\u5206\u5272\u5927\u5c0f\n  #number_of_files: 7       # \u6587\u4ef6\u4fdd\u5b58\u8def\u5f84\u4e0b\u7684\u6700\u5927\u6570\u91cf\uff0c\u5f53\u6587\u4ef6\u6570\u76ee\u8d85\u51fa\u8be5\u503c\u65f6\uff0c\u6700\u65e7\u7684\u6587\u4ef6\u5c06\u4f1a\u88ab\u5220\u9664\uff0c\u8be5\u503c\u5e94\u8be5\u4ecb\u4e8e2-1024\u4e4b\u95f4\uff0c\u9ed8\u8ba4\u4e3a7\n  #permissions: 0600        # \u6587\u4ef6\u6743\u9650\n')),(0,l.kt)("p",null,"\u67e5\u770b\u751f\u6210\u7684\u672c\u5730\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[root@agou tmp]\\# cat filebeat/filebeat.txt \n{"@timestamp":"2020-07-10T23:47:33.886Z","@metadata":{"beat":"filebeat","type":"_doc","version":"7.7.1"},"log":{"file":{"path":"/var/log/n\nginx/access.log"},"offset":1360},"message":"::1 - - [11/Jul/2020:07:47:24 +0800] \\"GET / HTTP/1.1\\" 200 4833 \\"-\\" \\"curl/7.29.0\\" \\"-\\"",\n"input":{"type":"log"},"ecs":{"version":"1.5.0"},"host":{"containerized":false,"ip":["172.16.1.131","fe80::20c:29ff:fe01:b93c"],"mac":["00\n:0c:29:01:b9:3c"],"hostname":"agou","architecture":"x86_64","os":{"version":"7 (Core)","family":"redhat","name":"CentOS Linux","kernel":"3\n.10.0-1127.13.1.el7.x86_64","codename":"Core","platform":"centos"},"name":"agou","id":"84a3254a0df34b59a4d62c5a4f90cb09"},"agent":{"type":\n"filebeat","ephemeral_id":"d34e6811-1dc0-4597-ac02-8b1fb98c79ba","hostname":"agou","id":"315c67f4-2edd-46f1-8c77-1895cbe383ff","version":"\n7.7.1"}}\n...\n')),(0,l.kt)("h2",{id:"\u6536\u96c6\u5230-es\u901a\u8fc7logstash"},"\u6536\u96c6\u5230 ES\uff08\u901a\u8fc7Logstash\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml\nfilebeat.inputs:\n- type: log\n  paths:\n    - /var/log/nginx/access.log\n    - /var/log/yum.log\n- type: log\n  paths:\n    - /var/log/message\n#----------------------------- Logstash output --------------------------------\noutput.logstash:\n  # The Logstash hosts\n  hosts: ["172.16.1.131:5044"]\n')),(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash")," \u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"ES")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# vim beat2es.conf \ninput {\n  beats {\n    port => 5044\n  }\n}\n\noutput {\n  elasticsearch {\n    hosts => ["http://172.16.1.131:9200"]\n    index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"\n  }\n}\n')),(0,l.kt)("p",null,"\u4ee5\u6b64\u542f\u52a8",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash"),"\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"filebeat"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/elasticsearch -d\nbin/logstash -f conf/beat2es.conf\n./filebeat\n")),(0,l.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"\u63d2\u4ef6\uff0c\u7136\u540e\u8fde\u63a5\u4e0a\u4e3b\u673a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"\uff0c\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"p"},"Browser"),"\u8fdb\u884c\u67e5\u770b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/elk%20stack/filbeat-1.png",alt:null,title:"\u622a\u56fe"})),(0,l.kt)("h2",{id:"\u8f93\u51fa\u5230-redis"},"\u8f93\u51fa\u5230 Redis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# vim /usr/local/filebeat-7.7.1-linux-x86_64/filebeat.yml\nfilebeat.inputs:\n...\n\noutput.redis:\n  hosts: ["localhost"]\n  password: "my_password"\n  key: "filebeat"\n  db: 0\n  timeout: 5\n\n\n#output.file:\n#  enabled: true        # default: true\n#  path: "/tmp/filebeat"\n#  filename: filebeat.txt\n')),(0,l.kt)("p",null,"\u767b\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"Redis"),"\u4e3b\u673a\u67e5\u770b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> KEYS *\n1) "filebeat"\n# \u67e5\u770b\u4e00\u6761\u6570\u636e\n127.0.0.1:6379> LPOP filebeat\n"{\\"@timestamp\\":\\"2020-07-11T21:40:42.939Z\\",\\"@metadata\\":{\\"beat\\":\\"filebeat\\",\\"type\\":\\"_doc\\",\\"version\\":\\"7.7.1\\"},\\"input\\":{\\"t\nype\\":\\"log\\"},\\"ecs\\":{\\"version\\":\\"1.5.0\\"},\\"host\\":{\\"containerized\\":false,\\"ip\\":[\\"172.16.1.131\\",\\"fe80::20c:29ff:fe01:b93c\\"],\\"\nmac\\":[\\"00:0c:29:01:b9:3c\\"],\\"name\\":\\"agou\\",\\"hostname\\":\\"agou\\",\\"architecture\\":\\"x86_64\\",\\"os\\":{\\"platform\\":\\"centos\\",\\"versio\nn\\":\\"7 (Core)\\",\\"family\\":\\"redhat\\",\\"name\\":\\"CentOS Linux\\",\\"kernel\\":\\"3.10.0-1127.13.1.el7.x86_64\\",\\"codename\\":\\"Core\\"},\\"id\\":\n\\"84a3254a0df34b59a4d62c5a4f90cb09\\"},\\"agent\\":{\\"type\\":\\"filebeat\\",\\"ephemeral_id\\":\\"63731e5e-da81-4b88-a390-01e4ce8d66aa\\",\\"hostnam\ne\\":\\"agou\\",\\"id\\":\\"315c67f4-2edd-46f1-8c77-1895cbe383ff\\",\\"version\\":\\"7.7.1\\"},\\"log\\":{\\"offset\\":14932,\\"file\\":{\\"path\\":\\"/var/lo\ng/yum.log\\"}},\\"message\\":\\"Jul 12 05:37:08 Installed: jemalloc-3.6.0-1.el7.x86_64\\"}"\n')),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Logstash"),"\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u4e2d\u6536\u5230\u7684\u6570\u636e\u8f93\u51fa\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"\u4e2d\u53bb\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# vim config/redis2es.conf\ninput {\n  redis {\n    host => "localhost"\n    port => "6379"\n    db => "0"\n    key => "filebeat"\n    data_type => "list"\n    # password => "zls"\n    codec  => "json"\n }\n}\n\noutput {\n    elasticsearch {\n      hosts => ["172.16.1.131:9200"]\n      index => "%{type}-%{+YYYY.MM.dd}"\n  }\n}\n')),(0,l.kt)("p",null,"\u6700\u540e\u6253\u5f00\u6d4f\u89c8\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"\u63d2\u4ef6\u8fdb\u884c\u67e5\u770b\uff0c\u6b65\u9aa4\u540c\u4e0a\u6240\u793a\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Filebeat Documentation: ",(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html"},"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html")),(0,l.kt)("li",{parentName:"ul"},"filebeat-configuration: ",(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration.html"},"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration.html")),(0,l.kt)("li",{parentName:"ul"},"input: ",(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/7.7/configuring-input.html"},"https://www.elastic.co/guide/en/beats/filebeat/7.7/configuring-input.html")),(0,l.kt)("li",{parentName:"ul"},"output: ",(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/7.7/configuring-output.html"},"https://www.elastic.co/guide/en/beats/filebeat/7.7/configuring-output.html")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528Filebeat\u6536\u96c6\u65e5\u5fd7: ",(0,l.kt)("a",{parentName:"li",href:"http://www.sunrisenan.com/docs/elkstack/elkstart11.html"},"http://www.sunrisenan.com/docs/elkstack/elkstart11.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/7.7/multiline-examples.html"},"https://www.elastic.co/guide/en/beats/filebeat/7.7/multiline-examples.html"))))}u.isMDXComponent=!0}}]);