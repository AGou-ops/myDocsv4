"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={},o="rsync + inotify(sersync)",l={unversionedId:"LinuxBasics/rsync - inotify\uff08sersync\uff09",id:"LinuxBasics/rsync - inotify\uff08sersync\uff09",title:"rsync + inotify(sersync)",description:"rsync \u548c inotify \u7b80\u4ecb",source:"@site/docs/LinuxBasics/rsync - inotify\uff08sersync\uff09.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/rsync - inotify\uff08sersync\uff09",permalink:"/docs/LinuxBasics/rsync - inotify\uff08sersync\uff09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/rsync - inotify\uff08sersync\uff09.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"lvm \u8bb2\u89e3",permalink:"/docs/LinuxBasics/lvm \u8bb2\u89e3"},next:{title:"\u6bcf\u5929\u4e00\u4e2avim\u5c0f\u6280\u5de7",permalink:"/docs/LinuxBasics/vim tricks"}},i={},c=[{value:"rsync \u548c inotify \u7b80\u4ecb",id:"rsync-\u548c-inotify-\u7b80\u4ecb",level:2},{value:"rsync+  inotify",id:"rsync--inotify",level:2},{value:"\u73af\u5883",id:"\u73af\u5883",level:3},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a",id:"\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a",level:4},{value:"\u5728\u6e90\u670d\u52a1\u5668\u4e0a",id:"\u5728\u6e90\u670d\u52a1\u5668\u4e0a",level:4},{value:"\u793a\u4f8b\u811a\u672c",id:"\u793a\u4f8b\u811a\u672c",level:2},{value:"rsync + sersync",id:"rsync--sersync",level:2},{value:"\u5b89\u88c5 sersync",id:"\u5b89\u88c5-sersync",level:3},{value:"sersync \u4f7f\u7528",id:"sersync-\u4f7f\u7528",level:3},{value:"\u793a\u4f8bxml\u6587\u4ef6",id:"\u793a\u4f8bxml\u6587\u4ef6",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rsync--inotifysersync"},"rsync + inotify(sersync)"),(0,a.kt)("h2",{id:"rsync-\u548c-inotify-\u7b80\u4ecb"},"rsync \u548c inotify \u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsync"),"\u662flinux\u7cfb\u7edf\u4e0b\u7684\u6570\u636e\u955c\u50cf\u5907\u4efd\u5de5\u5177\u3002\u4f7f\u7528\u5feb\u901f\u589e\u91cf\u5907\u4efd\u5de5\u5177Remote Sync\u53ef\u4ee5\u8fdc\u7a0b\u540c\u6b65\uff0c\u652f\u6301\u672c\u5730\u590d\u5236\uff0c\u6216\u8005\u4e0e\u5176\u4ed6SSH\u3001rsync\u4e3b\u673a\u540c\u6b65\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Inotify "),"\u662f\u4e00\u4e2a Linux\u7279\u6027\uff0c\u5b83\u76d1\u63a7\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bfb\u53d6\u3001\u5199\u5165\u548c\u521b\u5efa\u3002Inotify \u53cd\u5e94\u7075\u654f\uff0c\u7528\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u5e76\u4e14\u6bd4 cron \u4efb\u52a1\u7684\u7e41\u5fd9\u8f6e\u8be2\u9ad8\u6548\u5f97\u591a\u3002Inotify\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u3001\u7ec6\u7c92\u5ea6\u7684\u3001\u5f02\u6b65\u7684\u6587\u4ef6\u7cfb\u7edf\u4e8b\u4ef6\u76d1\u63a7\u673a\u5236\uff0clinux\u5185\u6838\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"2.6.13"),"\u8d77\uff0c\u52a0\u5165\u4e86Inotify\u652f\u6301\uff0c\u901a\u8fc7Inotify\u53ef\u4ee5\u76d1\u63a7\u6587\u4ef6\u7cfb\u7edf\u4e2d\u6dfb\u52a0\u3001\u5220\u9664\uff0c\u4fee\u6539\u3001\u79fb\u52a8\u7b49\u5404\u79cd\u7ec6\u5fae\u4e8b\u4ef6\uff0c\u5229\u7528\u8fd9\u4e2a\u5185\u6838\u63a5\u53e3\uff0c\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u5c31\u53ef\u4ee5\u76d1\u63a7\u6587\u4ef6\u7cfb\u7edf\u4e0b\u6587\u4ef6\u7684\u5404\u79cd\u53d8\u5316\u60c5\u51b5\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"inotify-tools"),"\u5c31\u662f\u8fd9\u6837\u7684\u4e00\u4e2a\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u3002"),(0,a.kt)("h2",{id:"rsync--inotify"},"rsync+  inotify"),(0,a.kt)("h3",{id:"\u73af\u5883"},"\u73af\u5883"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6e90\u670d\u52a1\u5668"),(0,a.kt)("td",{parentName:"tr",align:null},"1726.1.128")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u670d\u52a1\u5668"),(0,a.kt)("td",{parentName:"tr",align:null},"1726.1.129")))),(0,a.kt)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,a.kt)("p",null,"\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"p"},"rsync+inotify"),"\u540c\u6b65\u6e90\u670d\u52a1\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/var/www/html"),"\u76ee\u5f55\u81f3\u76ee\u6807\u670d\u52a1\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/backup/www/"),"\u76ee\u5f55\u4e4b\u4e0b."),(0,a.kt)("h4",{id:"\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a"},"\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a"),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u5173\u95edSELinux\u548c\u9632\u706b\u5899\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop firewalld\nsetenforce 0\n\n# \u5b89\u88c5\u6240\u9700\u8f6f\u4ef6\u5305\nyum install rsync -y            # \u9ed8\u8ba4\u6709\u7684\u53d1\u884c\u7248\u5df2\u7ecf\u5b89\u88c5\n")),(0,a.kt)("p",null,"\u7f16\u8f91",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rsyncd.conf"),"\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"uid=root\ngid=root\nmax connections=36000\nuse chroot=no\nlog file=/var/log/rsyncd.log\npid file=/var/run/rsyncd.pid\nlock file=/var/run/rsyncd.lock\n\n[backup_www]\n    path = /backup/www/ \n    comment = sync etc from client \n    ignore errors   \n    use chroot = no  \n    read only = no \n    list = no\n    timeout = 600\n    auth users = agou_ops \n    hosts allow = 1726.1.128/24\n    hosts deny = *\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u7528\u6237\u8ba4\u8bc1\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rsync.password"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@node01 ~]\\# cat /etc/rsync.password\nagou-ops:suofeiya\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6587\u4ef6\u6743\u9650\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 /etc/rsync.password\n")),(0,a.kt)("p",null,"\u542f\u52a8 rsync \u670d\u52a1\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start rsyncd\n# \u6216\u8005\nrsync --daemon\nsystemctl enable rsyncd\n")),(0,a.kt)("h4",{id:"\u5728\u6e90\u670d\u52a1\u5668\u4e0a"},"\u5728\u6e90\u670d\u52a1\u5668\u4e0a"),(0,a.kt)("p",null,"\u540c\u6837\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u5173\u95ed SElinux \u548c \u9632\u706b\u5899\uff0c\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0."),(0,a.kt)("p",null,"\u5b89\u88c5 rsync\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y rsync\n")),(0,a.kt)("p",null,"\u521b\u5efa\u8ba4\u8bc1\u5bc6\u7801\u6587\u4ef6\uff0c\u53ea\u8bbe\u7f6e\u5bc6\u7801\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# cat /etc/rsync.password \nsuofeiya\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6587\u4ef6\u6743\u9650\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"chmod 600 /etc/rsync.password")),(0,a.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# rsync -avH --port 873 --delete /var/www/html agou_ops@1726.1.129::backup_www --password-file=/etc/rsync.password\nsending incremental file list\nhtml/\nhtml/index.html\nhtml/test1/\nhtml/test10/\nhtml/test2/\nhtml/test3/\nhtml/test4/\nhtml/test5/\nhtml/test6/\nhtml/test7/\nhtml/test8/\nhtml/test9/\n\nsent 345 bytes  received 87 bytes  864.00 bytes/sec\ntotal size is 0  speedup is 0.00\n\n# \u6b64\u65f6\u5df2\u7ecf\u540c\u6b65\u5230\u4e86\u76ee\u6807\u670d\u52a1\u5668\u4e0a\uff0c\u53ef\u4ee5\u81ea\u884c\u767b\u5f55\u8fdb\u884c\u67e5\u770b\n")),(0,a.kt)("p",null,"\u67e5\u770b\u670d\u52a1\u5668\u5185\u6838\u662f\u5426\u652f\u6301inotify\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u6709\u4ee5\u4e0b\u4e09\u4e2a\u6587\u4ef6\uff0c\u5219\u8868\u793a\u670d\u52a1\u5668\u652f\u6301inotify\n[root@master ~]\\# ll /proc/sys/fs/inotify/\ntotal 0\n-rw-r--r--. 1 root root 0 Apr 25 23:49 max_queued_events\n-rw-r--r--. 1 root root 0 Apr 25 23:49 max_user_instances\n-rw-r--r--. 1 root root 0 Apr 25 23:49 max_user_watches\n")),(0,a.kt)("p",null,"\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"inotify-tools"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y inotify-tools        # \u8be5\u8f6f\u4ef6\u5305\u5728epel\u4ed3\u5e93\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5148\u914d\u7f6e\u597depel\u4ed3\u5e93\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199",(0,a.kt)("inlineCode",{parentName:"strong"},"inotify.sh"),"\u811a\u672c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nwatch_dir=/var/www/html\npush_to=1726.1.129:/backup/www\ninotifywait -mrq -e delete,close_write,moved_to,moved_from,isdir --timefmt \'%Y-%m-%d %H:%M:%S\' --format \'%w%f:%e:%T\' $watch_dir \\\n--exclude=".*.swp" |\\\nwhile read line;do\n  # logging some files which has been deleted and moved out\n    if echo $line | grep -i -E "delete|moved_from" &>/dev/null;then\n        echo "$line" >> /etc/inotify_away.log\n    fi\n  # from here, start rsync\'s function\n    rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to\n    if [ $? -eq 0 ];then\n        echo "sent $watch_dir success"\n    else\n        echo "sent $watch_dir failed"\n    fi\ndone\n')),(0,a.kt)("p",null,"\u4e3a\u5176\u6dfb\u52a0\u6267\u884c\u6743\u9650",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x inotify.sh")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u811a\u672c\u6765\u6e90\u4e8e\u7f51\u7edc\uff0c\u6709\u4e0d\u5b8c\u5584\u4e4b\u5904\uff0c\u4f1a\u91cd\u590d\u89e6\u53d1rsync\uff0c\u540c\u6b65\u5927\u6587\u4ef6\u65f6\u6781\u5176\u6d88\u8017\u8d44\u6e90\uff0c\u6545\u4ec5\u4f5c\u4e3a\u793a\u4f8b")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u811a\u672c\u5f00\u673a\u81ea\u542f\u52a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x /etc/rc.d/rc.local\n# \u5728\u8be5\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\nnohup /bin/bash /root/notify.sh &\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u811a\u672c"},"\u793a\u4f8b\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n \nwatch_dir=/var/www/html\npush_to=1726.10.5:/backup/www\n \n# First to do is initial sync\nrsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to\n \ninotifywait -mrq -e delete,close_write,moved_to,moved_from,isdir --timefmt \'%Y-%m-%d %H:%M:%S\' --format \'%w%f:%e:%T\' $watch_dir \\\n--exclude=".*.swp" >>/etc/inotifywait.log &\n \nwhile true;do\n     if [ -s "/etc/inotifywait.log" ];then\n        grep -i -E "delete|moved_from" /etc/inotifywait.log >> /etc/inotify_away.log\n        rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to:/tmp\n        if [ $? -ne 0 ];then\n           echo "$watch_dir sync to $push_to failed at `date +"%F %T"`,please check it by manual" |\\\n           mail -s "inotify+Rsync error has occurred" root@localhost    # \u90ae\u4ef6\n        fi\n        cat /dev/null > /etc/inotifywait.log\n        rsync -az --delete --exclude="*.swp" --exclude="*.swx" $watch_dir $push_to\n    else\n        sleep 1\n    fi\ndone\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u811a\u672c\u6765\u6e90\u4e8e\u7f51\u7edc\uff0c\u4ec5\u7a0d\u4f5c\u4fee\u6539")),(0,a.kt)("h2",{id:"rsync--sersync"},"rsync + sersync"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sersync"),"\u7c7b\u4f3c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"inotify"),"\uff0c\u540c\u6837\u7528\u4e8e\u76d1\u63a7\uff0c\u4f46\u524d\u8005\u8fd8\u6709\u8fc7\u6ee4\u91cd\u590d\u4e8b\u4ef6\u51cf\u8f7b\u8d1f\u62c5\u3001\u81ea\u5e26crontab\u529f\u80fd\u3001\u591a\u7ebf\u7a0b\u8c03\u7528rsync\u3001\u5931\u8d25\u91cd\u4f20\u7b49\u529f\u80fd."),(0,a.kt)("p",null,"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"rsync"),"\u53c2\u8003\u4e0a\u9762\u7684\u914d\u7f6e\u5373\u53ef\uff1a",(0,a.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E7%9B%AE%E6%A0%87%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A"},"rsync")),(0,a.kt)("h3",{id:"\u5b89\u88c5-sersync"},"\u5b89\u88c5 sersync"),(0,a.kt)("p",null,"sersync\u5de5\u5177\u5305\u65e0\u9700\u4efb\u4f55\u5b89\u88c5\uff0c\u7531\u4e8e\u5927\u90e8\u5206\u5e93\u90fd\u662f\u9759\u6001\u7f16\u8bd1\u7684\uff0c\u6240\u4ee5\u5728\u88ab\u76d1\u63a7\u670d\u52a1\u5668\u4e0a\uff0c\u4fee\u6539\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u76f4\u63a5\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2")," \u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/sersync/sersync2.5.4_64bit_binary_stable_final.tar.gz\ntar xf sersync2.5.4_64bit_binary_stable_final.tar.gz\ncp -a GNU-Linux-x86 /usr/local/sersync\necho "PATH=$PATH:/usr/local/sersync" > /etc/profile.d/sersync.sh\nsource /etc/profile.d/sersync.sh\n')),(0,a.kt)("p",null,"sersync\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/sersync"),"\u53ea\u6709\u4e24\u4e2a\u6587\u4ef6\uff1a\u4e00\u4e2a\u662f\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u6587\u4ef6\uff0c\u4e00\u4e2a\u662fxml\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u7f16\u8f91",(0,a.kt)("inlineCode",{parentName:"p"},"confxml.xml"),"\u914d\u7f6e\u6587\u4ef6\uff08\u7b80\u5355\u793a\u4f8b\u6587\u4ef6\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' <sersync>\n  <localpath watch="/opt/tongbu">\n   <remote ip="19268.8.42" name="tongbu"/>\n   <remote ip="19268.8.39" name="tongbu"/>\n  </localpath>\n  <crontab start="true" schedule="30"/>\n  <plugin name="refreshCDN" start="true"/>\n </sersync>\n')),(0,a.kt)("h3",{id:"sersync-\u4f7f\u7528"},"sersync \u4f7f\u7528"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -h")," \u67e5\u770b\u5e2e\u52a9\u6587\u4ef6(see the help)"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -r "),"\u5728\u540c\u6b65\u7a0b\u5e8f\u5f00\u542f\u524d\u5bf9\u6574\u4e2a\u8def\u5f84\u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u6574\u4f53\u540c\u6b65\u4e00\u904d(before the synchronization program working, rsync the whole monitor directory to remote server once)"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -d "),"\u5f00\u542f\u5b88\u62a4\u8fdb\u7a0b\u6a21\u5f0f\uff0c\u5728\u540e\u53f0\u8fd0\u884c(Open the daemon mode, running in the background)"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -o "),"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u540d\uff0c\u5982\u679c\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\u4e0d\u662fconfxml.xml\u8bf7\u4f7f\u7528'-o xxxxx.xml'(Specify the configuration file name, if the configuration file name is not confxml.xml use the '-o xxxxx.xml')"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -n "),"\u6307\u5b9a\u540c\u6b65\u5b88\u62a4\u7ebf\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a10\u4e2a\uff0c\u9002\u7528\u4e8e\u73b0\u5728\u76844\u6838\u670d\u52a1\u5668\u3002\u5982\u679c\u9700\u589e\u52a0\u6216\u51cf\u5c11\u4f7f\u7528 '-n \u6570\u91cf'.(Specify the number of simultaneous daemon thread, the default is 10, applicable to the present four-core server. If you need to increase or reduce,please use './sersync2 -n + num' to run)"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u4f7f\u7528\u7684\u65b9\u6cd5\u662f : ",(0,a.kt)("inlineCode",{parentName:"p"},"./sersync2 -d -r")),(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8esersync\u591a\u5b9e\u4f8b\uff0c\u4e5f\u5373\u76d1\u63a7\u591a\u4e2a\u76ee\u5f55\u65f6\uff0c\u53ea\u9700\u5206\u522b\u914d\u7f6e\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528sersync2\u6307\u5b9a\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6\u8fd0\u884c\u5373\u53ef\uff1a"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"sersync2 -r -d -o /etc/sersync.d/nginx.xml\n"))),(0,a.kt)("h3",{id:"\u793a\u4f8bxml\u6587\u4ef6"},"\u793a\u4f8bxml\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<?xml version="1.0" encoding="ISO-8859-1"?>\n<head version="2.5">\n    <host hostip="localhost" port="8008"></host>\n    <debug start="false"/>           # \u662f\u5426\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4e0b\u9762\u6240\u6709\u51fa\u73b0false\u548ctrue\u7684\u5730\u65b9\u90fd\u5206\u522b\u8868\u793a\u5173\u95ed\u548c\u5f00\u542f\u7684\u5f00\u5173\n    <fileSystem xfs="false"/>        # \u76d1\u63a7\u7684\u662f\u5426\u662fxfs\u6587\u4ef6\u7cfb\u7edf\n    <filter start="false">           # \u662f\u5426\u542f\u7528\u76d1\u63a7\u7684\u7b5b\u9009\u529f\u80fd\uff0c\u7b5b\u9009\u7684\u6587\u4ef6\u5c06\u4e0d\u88ab\u76d1\u63a7\n        <exclude expression="(.*)\\.svn"></exclude>\n        <exclude expression="(.*)\\.gz"></exclude>\n        <exclude expression="^info/*"></exclude>\n        <exclude expression="^static/*"></exclude>\n    </filter>\n    <inotify>                         # \u76d1\u63a7\u7684\u4e8b\u4ef6\uff0c\u9ed8\u8ba4\u76d1\u63a7\u7684\u662fdelete/close_write/moved_from/moved_to/create folder\n        <delete start="true"/>\n        <createFolder start="true"/>\n        <createFile start="false"/>\n        <closeWrite start="true"/>\n        <moveFrom start="true"/>\n        <moveTo start="true"/>\n        <attrib start="false"/>\n        <modify start="false"/>\n    </inotify>\n \n    <sersync>                       # rsync\u547d\u4ee4\u7684\u914d\u7f6e\u6bb5\n        <localpath watch="/www">    # \u540c\u6b65\u7684\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u540cinotify+rsync\u4e00\u6837\uff0c\u5efa\u8bae\u540c\u6b65\u76ee\u5f55\n            <remote ip="1726.10.5" name="/tmp/www"/>  # \u76ee\u6807\u5730\u5740\u548crsync daemon\u7684\u6a21\u5757\u540d\uff0c\u6240\u4ee5\u8fdc\u7aef\u8981\u4ee5daemon\u6a21\u5f0f\u5148\u8fd0\u884c\u597drsync\n            \x3c!--remote ip="IPADDR" name="module"--\x3e     # \u9664\u975e\u4e0b\u9762\u5f00\u542f\u4e86ssh start\uff0c\u6b64\u65f6name\u4e3a\u8fdc\u7a0bshell\u65b9\u5f0f\u8fd0\u884c\u65f6\u7684\u76ee\u6807\u76ee\u5f55\n        </localpath>\n        <rsync>                      # \u6307\u5b9arsync\u9009\u9879\n            <commonParams params="-az"/>\n            <auth start="false" users="root" passwordfile="/etc/rsync.pas"/>\n            <userDefinedPort start="false" port="874"/>\x3c!-- port=874 --\x3e\n            <timeout start="false" time="100"/>\x3c!-- timeout=100 --\x3e\n            <ssh start="false"/>      # \u662f\u5426\u4f7f\u7528\u8fdc\u7a0bshell\u6a21\u5f0f\u800c\u975ersync daemon\u8fd0\u884crsync\u547d\u4ee4\n        </rsync>\n        <failLog path="/tmp/rsync_fail_log.sh" timeToExecute="60"/>\x3c!--default every 60mins execute once--\x3e  # \u9519\u8bef\u91cd\u4f20\n        <crontab start="false" schedule="600">\x3c!--600mins--\x3e    # \u662f\u5426\u5f00\u542fcrontab\u529f\u80fd\n            <crontabfilter start="false">       # crontab\u5b9a\u65f6\u4f20\u8f93\u7684\u7b5b\u9009\u529f\u80fd\n                <exclude expression="*.php"></exclude>\n                <exclude expression="info/*"></exclude>\n            </crontabfilter>\n        </crontab>\n        <plugin start="false" name="command"/>\n    </sersync>\n \n    <plugin name="command">\n        <param prefix="/bin/sh" suffix="" ignoreError="true"/>  \x3c!--prefix /opt/tongbu/mmm.sh suffix--\x3e\n        <filter start="false">\n            <include expression="(.*)\\.php"/>\n            <include expression="(.*)\\.sh"/>\n        </filter>\n    </plugin>\n \n    <plugin name="socket">\n        <localpath watch="/opt/tongbu">\n            <deshost ip="19268.138.20" port="8009"/>\n        </localpath>\n    </plugin>\n    <plugin name="refreshCDN">\n        <localpath watch="/data0/htdocs/cms.xoyo.com/site/">\n            <cdninfo domainname="ccms.chinacache.com" port="80" username="xxxx" passwd="xxxx"/>\n            <sendurl base="http://pic.xoyo.com/cms"/>\n            <regexurl regex="false" match="cms.xoyo.com/site([/a-zA-Z0-9]*).xoyo.com/images"/>\n        </localpath>\n    </plugin>\n</head>\n')),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"(1)\u5f53\u540c\u6b65\u7684\u76ee\u5f55\u6570\u636e\u91cf\u4e0d\u5927\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"}," rsync+inotify"),"\n(2)\u5f53\u540c\u6b65\u7684\u76ee\u5f55\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff08\u51e0\u767eG\u751a\u81f31T\u4ee5\u4e0a\uff09\u6587\u4ef6\u5f88\u591a\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync+sersync"),"\n(3)\u751f\u4ea7\u73af\u5883\u76f4\u63a5\u7528",(0,a.kt)("inlineCode",{parentName:"p"}," rsync+sersync"),"\uff0c\u800c\u4e0d\u4f7f\u7528 rsync+inotify"),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sersync\u4ecb\u7ecd\u53ca\u5b89\u88c5 : ",(0,a.kt)("a",{parentName:"li",href:"http://sersync.sourceforge.net/"},"http://sersync.sourceforge.net/"))))}u.isMDXComponent=!0}}]);