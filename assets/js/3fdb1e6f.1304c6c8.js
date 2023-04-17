"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[493],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>d});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),c=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=t,g=u["".concat(p,".").concat(d)]||u[d]||i[d]||o;return a?r.createElement(g,s(s({ref:n},m),{},{components:a})):r.createElement(g,s({ref:n},m))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25282:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),t=(a(67294),a(3905));const o={},s="Prometheus in Docker",l={unversionedId:"CloudNative/Prometheus/Prometheus in Docker",id:"CloudNative/Prometheus/Prometheus in Docker",title:"Prometheus in Docker",description:"docker \u624b\u52a8\u90e8\u7f72",source:"@site/docs/CloudNative/Prometheus/Prometheus in Docker.md",sourceDirName:"CloudNative/Prometheus",slug:"/CloudNative/Prometheus/Prometheus in Docker",permalink:"/docs/CloudNative/Prometheus/Prometheus in Docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/Prometheus/Prometheus in Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Prometheus",permalink:"/docs/category/prometheus"},next:{title:"Prometheus \u5b89\u88c5\u4e0e\u90e8\u7f72\u3001Grafana",permalink:"/docs/CloudNative/Prometheus/Prometheus \u5b89\u88c5\u4e0e\u90e8\u7f72\u3001Grafana"}},p={},c=[{value:"docker \u624b\u52a8\u90e8\u7f72",id:"docker-\u624b\u52a8\u90e8\u7f72",level:2},{value:"\u542f\u52a8 <code>node-exporter</code>\uff1a",id:"\u542f\u52a8-node-exporter",level:3},{value:"\u542f\u52a8<code>prometheus</code>\uff1a",id:"\u542f\u52a8prometheus",level:3},{value:"\u542f\u52a8 Grafana",id:"\u542f\u52a8-grafana",level:3},{value:"docekr compose \u5feb\u901f\u90e8\u7f72",id:"docekr-compose-\u5feb\u901f\u90e8\u7f72",level:2},{value:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6",id:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],m={toc:c};function i(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"prometheus-in-docker"},"Prometheus in Docker"),(0,t.kt)("h2",{id:"docker-\u624b\u52a8\u90e8\u7f72"},"docker \u624b\u52a8\u90e8\u7f72"),(0,t.kt)("p",null,"\u9996\u5148\uff0c\u5b89\u88c5docker\uff0c\u53c2\u8003",(0,t.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,t.kt)("p",null,"\u62c9\u53d6\u955c\u50cf\u5305\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull prom/node-exporter\ndocker pull prom/prometheus\ndocker pull grafana/grafana\n")),(0,t.kt)("h3",{id:"\u542f\u52a8-node-exporter"},"\u542f\u52a8 ",(0,t.kt)("inlineCode",{parentName:"h3"},"node-exporter"),"\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 9100:9100 \\\n  -v "/proc:/home/docker/proc:ro" \\\n  -v "/sys:/home/docker/sys:ro" \\\n  -v "/:/home/docker/rootfs:ro" \\\n  --net="host" \\\n  # --name="node_exporter"\n  prom/node-exporter\n')),(0,t.kt)("p",null,"\u6d4b\u8bd5",(0,t.kt)("inlineCode",{parentName:"p"},"node-exporter"),"\u662f\u5426\u6210\u529f\u542f\u52a8\uff0c",(0,t.kt)("a",{parentName:"p",href:"http://172.16.1.132:9100/metrics"},"http://172.16.1.132:9100/metrics")),(0,t.kt)("p",null,"\u5176\u4ed6\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528nginx\u7684exporter\n$ docker run -p 9113:9113 nginx/nginx-prometheus-exporter -nginx.scrape-uri=http://<nginx>:8080/stub_status\n")),(0,t.kt)("h3",{id:"\u542f\u52a8prometheus"},"\u542f\u52a8",(0,t.kt)("inlineCode",{parentName:"h3"},"prometheus"),"\uff1a"),(0,t.kt)("p",null,"\u542f\u52a8\u4e4b\u524d\u5148\u914d\u7f6e\u597d Prom \u7684\u914d\u7f6e\u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"/root/prometheus.yml"),"\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"global:\n  scrape_interval:     60s\n  evaluation_interval: 60s\n \nscrape_configs:\n  - job_name: prometheus\n    static_configs:\n      - targets: ['localhost:9090']\n        labels:\n          instance: prometheus\n \n  - job_name: linux\n    static_configs:\n      - targets: ['172.16.1.132:9100']\n        labels:\n          instance: localhost\n")),(0,t.kt)("p",null,"\u542f\u52a8\u5bb9\u5668\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker run  -d \\\n  -p 9090:9090 \\\n  -v /root/prometheus.yml:/etc/prometheus/prometheus.yml  \\\n  prom/prometheus\n")),(0,t.kt)("p",null,"\u6d4b\u8bd5",(0,t.kt)("inlineCode",{parentName:"p"},"node-exporter"),"\u662f\u5426\u6210\u529f\u542f\u52a8\uff0c",(0,t.kt)("a",{parentName:"p",href:"http://172.16.1.132:9090"},"http://172.16.1.132:9090")),(0,t.kt)("h3",{id:"\u542f\u52a8-grafana"},"\u542f\u52a8 Grafana"),(0,t.kt)("p",null,"\u65b0\u5efa\u7a7a\u6587\u4ef6\u5939",(0,t.kt)("inlineCode",{parentName:"p"},"grafana-storage"),"\uff0c\u7528\u6765\u5b58\u50a8\u6570\u636e\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -pv /data/grafana-storage\n")),(0,t.kt)("p",null,"\u542f\u52a8\u5bb9\u5668\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -p 3000:3000 \\\n  --name=grafana \\\n  -v /data/grafana-storage:/var/lib/grafana \\\n  grafana/grafana\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f\u6ce8\u610f\uff1a"),(0,t.kt)("p",{parentName:"blockquote"},"grafana v5.1\u4e4b\u540e\u7684\u7248\u672c\u6743\u9650\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/#migrate-to-v51-or-later"},"https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/#migrate-to-v51-or-later")),(0,t.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\u5e94\u8be5\u6307\u5b9auserid\uff1a"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir /data/grafana-storage -pv # creates a folder for your data\nID=$(id -u) # saves your user id in the ID variable\n\n# starts grafana with your user id and using the data folder\ndocker run -d --user $ID --volume "/data/grafana-storage:/var/lib/grafana" -p 3000:3000   grafana/grafana\n')),(0,t.kt)("p",{parentName:"blockquote"},"\u6216\u8005\u76f4\u63a5\u4f7f\u7528\u6301\u4e45\u5377\uff1a"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# create a persistent volume for your data in /var/lib/grafana (database and plugins)\ndocker volume create grafana-storage\n\n# start grafana\ndocker run -d -p 3000:3000 --name=grafana -v grafana-storage:/var/lib/grafana   grafana/grafana\n"))),(0,t.kt)("p",null,"\u6d4b\u8bd5\u5bb9\u5668\u8fd0\u884c\u72b6\u6001\uff0c\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,t.kt)("a",{parentName:"p",href:"http://172.16.1.132:3000"},"http://172.16.1.132:3000")),(0,t.kt)("p",null,"\u67e5\u770b\u4e09\u4e2a\u5bb9\u5668\u72b6\u6001\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'[root@master docker]\\# docker ps\nCONTAINER ID        IMAGE                COMMAND                  CREATED                  STATUS                  PORTS                    NAMES\n803d4e5c4ad3        prom/prometheus      "/bin/prometheus --c\u2026"   Less than a second ago   Up Less than a second   0.0.0.0:9090->9090/tcp   charming_morse\n2569f2394344        prom/node-exporter   "/bin/node_exporter"     Less than a second ago   Up Less than a second                            tender_elion\n5a3f4258bec5        grafana/grafana      "/run.sh"                5 seconds ago            Up 4 seconds            0.0.0.0:3000->3000/tcp   grafana\n')),(0,t.kt)("p",null,"\u6b64\u540e",(0,t.kt)("inlineCode",{parentName:"p"},"Grafana"),"\u7684\u7b80\u5355\u8bbe\u7f6e\u53c2\u8003   ","[\u4f7f\u7528 Grafana \u5c55\u793a\u5de5\u5177]","(./Prometheus \u5b89\u88c5\u4e0e\u90e8\u7f72.md#\u4f7f\u7528 Grafana \u5c55\u793a\u5de5\u5177)"),(0,t.kt)("h2",{id:"docekr-compose-\u5feb\u901f\u90e8\u7f72"},"docekr compose \u5feb\u901f\u90e8\u7f72"),(0,t.kt)("p",null,"docker compose \u5b89\u88c5\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u501f\u52a9\u4e8e",(0,t.kt)("inlineCode",{parentName:"li"},"epel"),"\u4ed3\u5e93\uff0c\u76f4\u63a5\u5b89\u88c5\u5373\u53ef\uff0c",(0,t.kt)("inlineCode",{parentName:"li"},"yum install docker-compose")),(0,t.kt)("li",{parentName:"ul"},"github \u5b98\u65b9\u4ed3\u5e93\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://github.com/docker/compose/releases/"},"https://github.com/docker/compose/releases/"))),(0,t.kt)("h3",{id:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6"},"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/src/config\ncd /usr/local/src/config\n")),(0,t.kt)("p",null,"\u6dfb\u52a0",(0,t.kt)("inlineCode",{parentName:"p"},"prometheus.yml"),"\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"# my global config\nglobal:\n  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets: ['172.16.1.132:9093']\n      # - alertmanager:9093\n\n# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.\nrule_files:\n  - \"node_down.yml\"\n  # - \"first_rules.yml\"\n  # - \"second_rules.yml\"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n    static_configs:\n- targets: ['172.16.1.132:9090']\n\n  - job_name: 'cadvisor'\n    static_configs:\n    - targets: ['172.16.1.132:8080']\n\n  - job_name: 'node'\n    scrape_interval: 8s\n    static_configs:\n      - targets: ['172.16.1.132:9100']\n")),(0,t.kt)("p",null,"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"alertmanager.yml"),"\uff0c\u914d\u7f6e\u6536\u53d1\u90ae\u4ef6\u90ae\u7bb1"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  smtp_smarthost: 'smtp.163.com:25'\u3000\u3000#163\u670d\u52a1\u5668\n  smtp_from: 'xxxx@163.com'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#\u53d1\u90ae\u4ef6\u7684\u90ae\u7bb1\n  smtp_auth_username: 'xxxx@163.com'\u3000\u3000#\u53d1\u90ae\u4ef6\u7684\u90ae\u7bb1\u7528\u6237\u540d\uff0c\u4e5f\u5c31\u662f\u4f60\u7684\u90ae\u7bb1\n  smtp_auth_password: 'xxxx'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#\u53d1\u90ae\u4ef6\u7684\u90ae\u7bb1\u5bc6\u7801\n  smtp_require_tls: false\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#\u4e0d\u8fdb\u884ctls\u9a8c\u8bc1\n\nroute:\n  group_by: ['alertname']\n  group_wait: 10s\n  group_interval: 10s\n  repeat_interval: 10m\n  receiver: live-monitoring\n\nreceivers:\n- name: 'live-monitoring'\n  email_configs:\n  - to: 'xxxx@qq.com'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000#\u6536\u90ae\u4ef6\u7684\u90ae\u7bb1\n")),(0,t.kt)("p",null,"\u6dfb\u52a0\u62a5\u8b66\u89c4\u5219\uff0c\u6dfb\u52a0\u4e00\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"node_down.yml"),"\u4e3a prometheus targets \u76d1\u63a7"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'groups:\n- name: node_down\n  rules:\n  - alert: InstanceDown\n    expr: up == 0\n    for: 1m\n    labels:\n      user: test\n    annotations:\n      summary: "Instance \u3010\u3010 $labels.instance \u3011\u3011 down"\n      description: "\u3010\u3010 $labels.instance \u3011\u3011 of job \u3010\u3010 $labels.job \u3011\u3011 has been down for more than 1 minutes."\n')),(0,t.kt)("p",null,"\u7f16\u5199 docker-compose \u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose-monitor.yml"),"\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'2\'\n\nnetworks:\n    monitor:\n        driver: bridge\n\nservices:\n    prometheus:\n        image: prom/prometheus\n        container_name: prometheus\n        hostname: prometheus\n        restart: always\n        volumes:\n            - /usr/local/src/config/prometheus.yml:/etc/prometheus/prometheus.yml\n            - /usr/local/src/config/node_down.yml:/etc/prometheus/node_down.yml\n        ports:\n            - "9090:9090"\n        networks:\n            - monitor\n\n    alertmanager:\n        image: prom/alertmanager\n        container_name: alertmanager\n        hostname: alertmanager\n        restart: always\n        volumes:\n            - /usr/local/src/config/alertmanager.yml:/etc/alertmanager/alertmanager.yml\n        ports:\n            - "9093:9093"\n        networks:\n            - monitor\n\n    grafana:\n        image: grafana/grafana\n        container_name: grafana\n        hostname: grafana\n        restart: always\n        ports:\n            - "3000:3000"\n        networks:\n            - monitor\n\n    node-exporter:\n        image: quay.io/prometheus/node-exporter\n        container_name: node-exporter\n        hostname: node-exporter\n        restart: always\n        ports:\n            - "9100:9100"\n        networks:\n            - monitor\n\n    cadvisor:\n        image: google/cadvisor:latest\n        container_name: cadvisor\n        hostname: cadvisor\n        restart: always\n        volumes:\n            - /:/rootfs:ro\n            - /var/run:/var/run:rw\n            - /sys:/sys:ro\n            - /var/lib/docker/:/var/lib/docker:ro\n        ports:\n            - "8080:8080"\n        networks:\n            - monitor\n')),(0,t.kt)("p",null,"\u542f\u52a8",(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"#\u542f\u52a8\u5bb9\u5668\uff1a\ndocker-compose -f /usr/local/src/config/docker-compose-monitor.yml up -d\n#\u5220\u9664\u5bb9\u5668\uff1a\ndocker-compose -f /usr/local/src/config/docker-compose-monitor.yml down\n#\u91cd\u542f\u5bb9\u5668\uff1a\ndocker restart [ID]\n")),(0,t.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"docker-compose\u53c2\u8003\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://blog.51cto.com/msiyuetian/2369130"},"https://blog.51cto.com/msiyuetian/2369130"))))}i.isMDXComponent=!0}}]);