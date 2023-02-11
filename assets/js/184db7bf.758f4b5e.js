"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[677],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=s,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?t.createElement(b,r(r({ref:n},c),{},{components:a})):t.createElement(b,r({ref:n},c))}));function u(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14204:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(87462),s=(a(67294),a(3905));const l={},r="Ansible Playbook \u57fa\u7840",o={unversionedId:"LinuxBasics/Ansible/Ansible Playbook Basic",id:"LinuxBasics/Ansible/Ansible Playbook Basic",title:"Ansible Playbook \u57fa\u7840",description:"\u57fa\u7840",source:"@site/docs/LinuxBasics/Ansible/Ansible Playbook Basic.md",sourceDirName:"LinuxBasics/Ansible",slug:"/LinuxBasics/Ansible/Ansible Playbook Basic",permalink:"/docs/LinuxBasics/Ansible/Ansible Playbook Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Ansible/Ansible Playbook Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Ansible \u6700\u4f73\u5b9e\u8df5",permalink:"/docs/LinuxBasics/Ansible/Ansible Best Practices"},next:{title:"Ansible Tower",permalink:"/docs/LinuxBasics/Ansible/Ansible Tower"}},i={},p=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"ansible-playbook \u5e38\u7528\u9009\u9879",id:"ansible-playbook-\u5e38\u7528\u9009\u9879",level:3},{value:"Host \u548c Users",id:"host-\u548c-users",level:3},{value:"tasks",id:"tasks",level:3},{value:"handlers",id:"handlers",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a Playbook",id:"\u8fd0\u884c\u4e00\u4e2a-playbook",level:3},{value:"ansible-Pull",id:"ansible-pull",level:3},{value:"ansible-lint(\u8bed\u6cd5\u68c0\u67e5)",id:"ansible-lint\u8bed\u6cd5\u68c0\u67e5",level:3},{value:"ansible-galaxy",id:"ansible-galaxy",level:3},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",level:2},{value:"import_tasks &amp; include_tasks",id:"import_tasks--include_tasks",level:3},{value:"Role",id:"role",level:3},{value:"Role \u76ee\u5f55\u7ed3\u6784",id:"role-\u76ee\u5f55\u7ed3\u6784",level:4},{value:"\u793a\u4f8b\u53ca\u4f7f\u7528",id:"\u793a\u4f8b\u53ca\u4f7f\u7528",level:4},{value:"\u81ea\u5b9a\u4e49role\u6587\u4ef6\u8def\u5f84, \u4f20\u9012\u53c2\u6570 ,tags",id:"\u81ea\u5b9a\u4e49role\u6587\u4ef6\u8def\u5f84-\u4f20\u9012\u53c2\u6570-tags",level:4},{value:"variables",id:"variables",level:3},{value:"lineinfile",id:"lineinfile",level:3},{value:"replace",id:"replace",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:p};function m(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ansible-playbook-\u57fa\u7840"},"Ansible Playbook \u57fa\u7840"),(0,s.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,s.kt)("h3",{id:"ansible-playbook-\u5e38\u7528\u9009\u9879"},"ansible-playbook \u5e38\u7528\u9009\u9879"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"--step: \u6309\u6b65\u9aa4\u6267\u884c\uff0c\u6bcf\u4e00\u6b65\u90fd\u9700\u8981\u64cd\u4f5c\u5458\u786e\u8ba4\n--check: \u68c0\u67e5playbook\u6b63\u786e\u6027\uff0c\u5e76\u8fd0\u884c\u5e72\u8dd1\u6a21\u5f0f\n--syntax-check: \u4ec5\u68c0\u67e5\u8bed\u6cd5\u9519\u8bef\n--list-tasks\n--list-tags\n--list-hosts\n")),(0,s.kt)("h3",{id:"host-\u548c-users"},"Host \u548c Users"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: webservers\n  remote_user: yourname         # \u5207\u6362\u7528\u6237\n  become: yes\n  become_user: postgres\n---\n- hosts: webservers\n  remote_user: yourname         # \u5168\u5c40\u9ed8\u8ba4\u7684\u7528\u6237\n  tasks:\n    - service:\n        name: nginx\n        state: started\n      become: yes           # \u5bf9\u67d0\u4e00\u4e2atask\u5f00\u542f\u7528\u6237\u5207\u6362\n      become_method: sudo       # \u5207\u6362\u65b9\u6cd5\u4e3asudo,\u6b64\u5916\u8fd8\u53ef\u4ee5\u4f7f\u7528su\n")),(0,s.kt)("h3",{id:"tasks"},"tasks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n  - name: \u8fd0\u884c\u4e00\u4e9b\u547d\u4ee4,\u5e76\u5ffd\u7565\u5176\u8f93\u51fa\u5185\u5bb9\n    shell: /usr/bin/somecommand || /bin/true      # \u6216\u8005\u4f7f\u7528`ignore_errors: true`\n  - name: Copy ansible inventory file to client\n    copy: src=/etc/ansible/hosts dest=/etc/ansible/hosts    # \u4f7f\u7528\u7f29\u8fdb\u8fdb\u884c\u957f\u53e5\u6362\u884c\n            owner=root group=root mode=0644\n")),(0,s.kt)("h3",{id:"handlers"},"handlers"),(0,s.kt)("p",null,"\u5f53\u914d\u7f6e\u6587\u4ef6\u6539\u53d8\u65f6,\u8c03\u7528handlers\u89e6\u53d1\u91cd\u542f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n  - name: template configuration file\n    template:\n      src: template.j2\n      dest: /etc/foo.conf\n    notify:\n      - restart memcached\n      - restart apache\nhandlers:\n  - name: restart memcached\n    service:\n      name: memcached\n      state: restarted\n  - name: restart apache\n    service:\n      name: apache\n      state: restarted\n")),(0,s.kt)("p",null,"\u5728ansible2.2\u4e4b\u540e,\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"listen"),'\u521b\u5efa"\u4e3b\u9898",tasks\u4f1a\u901a\u77e5\u8fd9\u4e9b"\u4e3b\u9898"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'handlers:\n    - name: restart memcached\n      service:\n        name: memcached\n        state: restarted\n      listen: "restart web services"\n    - name: restart apache\n      service:\n        name: apache\n        state: restarted\n      listen: "restart web services"\n\ntasks:\n    - name: restart everything\n      command: echo "this task will restart the web services"\n      notify: "restart web services"\n')),(0,s.kt)("h3",{id:"\u8fd0\u884c\u4e00\u4e2a-playbook"},"\u8fd0\u884c\u4e00\u4e2a Playbook"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"ansible-playbook [-C] playbook.yml [-f 10] [--list-hosts] [--verbose]\n# -C \u8868\u793a\u5e72\u8dd1\u6d4b\u8bd5\u6a21\u5f0f,\u5b9e\u9645\u8fd0\u884c\u65f6\u5e94\u5f53\u53d6\u6d88, -f \u4e3a\u6279\u6b21\n")),(0,s.kt)("h3",{id:"ansible-pull"},"ansible-Pull"),(0,s.kt)("p",null,"\u5ba2\u6237\u7aef\u4e3b\u52a8\u62c9\u53d6"),(0,s.kt)("h3",{id:"ansible-lint\u8bed\u6cd5\u68c0\u67e5"},"ansible-lint(\u8bed\u6cd5\u68c0\u67e5)"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"playbook"),"\u8bed\u6cd5\u53ca\u89c4\u8303\u68c0\u67e5\u5de5\u5177, \u9ed8\u8ba4\u5b89\u88c5\u65f6\u5e76\u4e3a\u5b89\u88c5, \u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"yum install -y ansible-lint"),"\u8fdb\u884c\u5b89\u88c5\u5373\u53ef"),(0,s.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"ansible-lint playbook.yaml\n")),(0,s.kt)("p",null,"\u5f53\u7136, \u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-playbook"),"\u81ea\u5e26\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-playbook --syntax-check"),"\u6765\u68c0\u67e5"),(0,s.kt)("h3",{id:"ansible-galaxy"},"ansible-galaxy"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ansible-galaxy"),"\u5ba2\u6237\u7aef\u5141\u8bb8\u60a8\u4ece",(0,s.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW"},"Ansible Galaxy"),"\u4e0b\u8f7d\u89d2\u8272\uff0c\u5e76\u4e14\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fa\u8272\u7684\u9ed8\u8ba4\u6846\u67b6\u6765\u521b\u5efa\u60a8\u81ea\u5df1\u7684\u89d2\u8272."),(0,s.kt)("h2",{id:"\u8fdb\u9636"},"\u8fdb\u9636"),(0,s.kt)("h3",{id:"import_tasks--include_tasks"},"import_tasks & include_tasks"),(0,s.kt)("p",null,"\u4e8c\u8005\u533a\u522b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import*"),": \u9884\u5904\u7406\u8fd0\u884c"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"include*"),":  \u4e2d\u9014\u8fd0\u884c")),(0,s.kt)("p",null,"\u5982\u679c\u4efb\u52a1\u5c31\u4e00\u4e2a\u7684\u8bdd,\u4e24\u4e2a\u7528\u54ea\u4e2a\u90fd\u65e0\u6240\u8c13."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n- import_tasks: common_tasks.yml\n  vars:   # \u53ef\u4ee5\u5411\u6307\u5b9aplaybook\u4f20\u9012\u53c2\u6570\n    foot: bar\n# or\n- include_tasks: common_tasks.yml\n\n# handlers\u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528\nhandlers:\n- include_tasks: more_handlers.yml\n# or\n- import_tasks: more_handlers.yml\n")),(0,s.kt)("h3",{id:"role"},"Role"),(0,s.kt)("h4",{id:"role-\u76ee\u5f55\u7ed3\u6784"},"Role \u76ee\u5f55\u7ed3\u6784"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"roles/\n\u251c\u2500\u2500 dbsrvs\n\u2502\xa0\xa0 \u251c\u2500\u2500 defaults        # \u9ed8\u8ba4\u53d8\u91cf\u5b58\u653e\u4f4d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 files           # \u6240\u8981\u4f20\u8f93\u6216\u8005\u4f7f\u7528\u7684\u6587\u4ef6\u4f4d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 handlers\n\u2502\xa0\xa0 \u251c\u2500\u2500 meta            # \u5143\u6570\u636e\u5b58\u653e\u4f4d\u7f6e,\u53ef\u5b58\u653e\u89d2\u8272\u4f9d\u8d56,\u53c2\u8003https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html#role-dependencies\n\u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u2514\u2500\u2500 vars            # \u53d8\u91cf\u5b58\u653e\u4f4d\u7f6e\n\u2514\u2500\u2500 websrvs\n    \u251c\u2500\u2500 files\n    \u251c\u2500\u2500 handlers\n    \u251c\u2500\u2500 tasks\n    \u251c\u2500\u2500 templates\n    \u2514\u2500\u2500 vars\n")),(0,s.kt)("h4",{id:"\u793a\u4f8b\u53ca\u4f7f\u7528"},"\u793a\u4f8b\u53ca\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# roles/example/tasks/main.yml\n- name: added in 2.4, previously you used 'include'\n  import_tasks: redhat.yml\n  when: ansible_facts['os_family']|lower == 'redhat'        # when\u76f8\u5f53\u4e8e\u6761\u4ef6\u8bed\u53e5\n- import_tasks: debian.yml\n  when: ansible_facts['os_family']|lower == 'debian'\n\n# roles/example/tasks/redhat.yml\n- yum:\n    name: \"httpd\"\n    state: present\n\n# roles/example/tasks/debian.yml\n- apt:\n    name: \"apache2\"\n    state: present\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u8c03\u7528\u89d2\u8272\n- hosts: webservers\n  roles:\n    - example\n    - webservers\n")),(0,s.kt)("p",null,"\u5728ansible2.4\u4e4b\u540e,\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"import_role")," \u548c",(0,s.kt)("inlineCode",{parentName:"p"},"include_role"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'- hosts: webservers\n  tasks:\n    - debug:\n        msg: "before we run our role"\n    - import_role:\n        name: example\n    - include_role:\n        name: example\n    - debug:\n        msg: "after we ran our role"\n')),(0,s.kt)("h4",{id:"\u81ea\u5b9a\u4e49role\u6587\u4ef6\u8def\u5f84-\u4f20\u9012\u53c2\u6570-tags"},"\u81ea\u5b9a\u4e49role\u6587\u4ef6\u8def\u5f84, \u4f20\u9012\u53c2\u6570 ,tags"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: webservers\n  tasks:\n    - include_role:\n        name: foo_app_instance\n      vars:\n        dir: '/path/to/my/roles/common'\n        app_port: 5000\n      when: \"ansible_facts['os_family'] == 'RedHat'\"\n      tags:\n        - web\n        - redhat\n")),(0,s.kt)("h3",{id:"variables"},"variables"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5728",(0,s.kt)("inlineCode",{parentName:"strong"},"playbook"),"\u4e2d\u76f4\u63a5\u5b9a\u4e49:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: webservers\n  vars:\n    http_port: 80\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: all\n  remote_user: root\n  vars:\n    favcolor: blue\n  vars_files:\n    - /vars/external_vars.yml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# /vars/external_vars.yml\nsomevar: somevalue\npassword: magic\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5728\u547d\u4ee4\u884c\u4e2d\u4f20\u9012:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'ansible-playbook websrvs.yml --extra-vars "http_ver=2.4.6"\nansible-playbook release.yml --extra-vars "@some_file.json"\n')),(0,s.kt)("p",null,"\u4f20\u9012",(0,s.kt)("inlineCode",{parentName:"p"},"json"),"\u6216\u8005",(0,s.kt)("inlineCode",{parentName:"p"},"json file")," \u53c2\u8003:",(0,s.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#passing-variables-on-the-command-line"},"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#passing-variables-on-the-command-line")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8c03\u7528",(0,s.kt)("inlineCode",{parentName:"strong"},"Facts"),"\u4e2d\u7684\u53d8\u91cf:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u67e5\u770b\nansible websrvs -m setup\n# \u8c03\u7528\n\u3010\u3010 ansible_facts['devices']['xvda']['model'] \u3011\u3011     # \u5c42\u7ea7\u7ed3\u6784\n\n\u3010\u3010 ansible_facts['nodename'] \u3011\u3011 \n# \u6216\u8005\n\u3010\u3010 ansible_nodename \u3011\u3011\n")),(0,s.kt)("p",null,"\u2139\ufe0f\u6ce8\u610f:\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6267\u884c\u547d\u4ee4\u6216\u8005playbook\u4f1a\u5148\u6536\u96c6",(0,s.kt)("inlineCode",{parentName:"p"},"facts"),",\u5982\u679c\u4f60\u77e5\u9053\u4f60\u4e0d\u9700\u8981\u4efb\u4f55\u6765\u81ea",(0,s.kt)("inlineCode",{parentName:"p"},"facts"),"\u7684\u6570\u636e,\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u6765\u8fdb\u884c\u5173\u95ed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: whatever\n  gather_facts: no\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4f20\u9012\u672c\u5730",(0,s.kt)("inlineCode",{parentName:"strong"},"facts"),":")),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/ansible/facts.d"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"*.fact"),"\u7684\u6587\u4ef6, \u5373\u53ef\u5c06\u672c\u5730",(0,s.kt)("inlineCode",{parentName:"p"},"facts"),"\u4f20\u9012\u7ed9\u4e3b\u673a",(0,s.kt)("inlineCode",{parentName:"p"},"setup"),"\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"ansible_local``facts"),"\u4e2d\u53bb."),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/ansible/facts.d/preferences.fact\n[general]\nasdf=1\nbar=2\n# \u67e5\u770b\u672c\u5730facts\nansible local -m setup -a \"filter=ansible_local\"\n# \u8c03\u7528\n\u3010\u3010 ansible_local['preferences']['general']['asdf'] \u3011\u3011\n# \u6216\u8005\n\u3010\u3010 ansible_local.prefetences.general.asdf \u3011\u3011\n")),(0,s.kt)("p",null,"\u8be6\u60c5\u53c2\u8003:",(0,s.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#local-facts-facts-d"},"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#local-facts-facts-d")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/f-ck-need-u/p/7571974.html"},"https://www.cnblogs.com/f-ck-need-u/p/7571974.html")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u4e0e\u81ea\u5b9a\u4e49\u53d8\u91cf:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: register vars\n      shell: echo bar\n      register: foo\n    - set_fact: var1="\u3010\u3010 foo.stdout \u3011\u3011"\n    - set_fact: var2=" foo ///  "\n    - debug: msg="\u3010\u3010 var2 \u3011\u3011 \u3010\u3010var1\u3011\u3011"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"with_item"),"\u8fed\u4ee3\u53d8\u91cf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: with_items\n      shell: echo "\u3010\u3010 item \u3011\u3011"\n      with_items:\n        - hello\n        - ansible\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"inventroy"),"\u4e3b\u673a\u7ec4\u53d8\u91cf\u548c\u4e3b\u673a\u53d8\u91cf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/ansible/hosts\n[websvrs]\nnode01  var1="var1 node01"\nnode02\n\n[websrvs:vars]\nvar2="var2 websrvs"\n')),(0,s.kt)("p",null,"\ud83d\udcd3\u7efc\u5408vars\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n- hosts: localhost\n  gather_facts: yes\n  vars:\n    - http_port: 80\n    - https_port: 443\n  vars_files:\n    - /root/playbooks/vars/external_vars.yml\n    - /root/playbooks/vars/external_vars2.yml\n  tasks:\n    - name: show playbook vars\n      debug: msg=" the http_port is  \u3010\u3010 http_port \u3011\u3011 /// https_port is  \u3010\u3010 https_port \u3011\u3011 "\n      vars:\n        http_port: 8080\n    - name: import vars form localfile\n      debug: msg=" vars from localfile \u3010\u3010 hello \u3011\u3011 /// \u3010\u3010 ansible \u3011\u3011"\n    - name: import vars form local facts\n      debug: msg=" vars form local facts --- \u3010\u3010 ansible_local.preferences.general.bar \u3011\u3011 "\n    - name: import vars form commandline\n      debug: msg=" vars form commandline -- \u3010\u3010 command \u3011\u3011  "\n      ignore_errors: yes\n    - name: import vars form json file\n      debug: msg="ipv6 address is  --- \u3010\u3010 ipv6[0].address \u3011\u3011"\n\n    - name: register vars\n      shell: echo bar\n      register: foo\n    - set_fact: var1="\u3010\u3010 foo.stdout \u3011\u3011"\n    - set_fact: var2=" foo ///  "\n    - debug: msg="\u3010\u3010 var2 \u3011\u3011 \u3010\u3010var1\u3011\u3011"\n\n    - name: with_items\n      shell: echo "\u3010\u3010 item \u3011\u3011"\n      with_items:\n        - hello\n        - ansible\n      register: items\n      tags: items\n    - debug: var=items.results[0].stdout\n      tags: items\n    - debug: msg=" {% for i in items.results %} \u3010\u3010 i.stdout \u3011\u3011 {% endfor %} "\n      tags: items\n\n    - name: inventory var\n      debug: msg=" \u3010\u3010 inventory_var1 \u3011\u3011 /// \u3010\u3010 inventory_var2  \u3011\u3011 "\n      tags: inventory\n')),(0,s.kt)("p",null,"\ud83d\udee9\ufe0f\u6269\u5c55\u9605\u8bfb: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"jinja2 ",(0,s.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_filters.html"},"https://docs.ansible.com/ansible/latest/user_guide/playbooks_filters.html")),(0,s.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u5185\u7f6e\u53d8\u91cf: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html"},"https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html"))),(0,s.kt)("h3",{id:"lineinfile"},"lineinfile"),(0,s.kt)("p",null,"\u8be5\u6a21\u5757\u786e\u4fdd\u6587\u4ef6\u4e2d",(0,s.kt)("strong",{parentName:"p"},"\u5305\u542b\u7279\u5b9a\u884c"),"\uff0c\u6216\u4f7f\u7528\u5411\u540e\u5f15\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",(0,s.kt)("strong",{parentName:"p"},"\u66ff\u6362"),"\u73b0\u6709\u884c\u3002"),(0,s.kt)("p",null,"\u53ea\u9002\u7528\u4e8e\u4e00\u884c\u5185\u5bb9."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# NOTE: Before 2.3, option 'dest', 'destfile' or 'name' was used instead of 'path'\n- name: \u786e\u4fddSElinux\u4e3aenforce\u7a97\u53f0\n  lineinfile:\n    path: /etc/selinux/config\n    regexp: '^SELINUX='\n    line: SELINUX=enforcing\n\n- name: \u786e\u4fddwheel\u7ec4\u4e0d\u5728sudoers\u914d\u7f6e\u6587\u4ef6\u4e2d\n  lineinfile:\n    path: /etc/sudoers\n    state: absent\n    regexp: '^%wheel'\n\n- name: \u786e\u4fdd127.0.0.1\u4e3a\u672c\u5730localhost\n  lineinfile:\n    path: /etc/hosts\n    regexp: '^127\\.0\\.0\\.1'\n    line: 127.0.0.1 localhost\n    owner: root\n    group: root\n    mode: '0644'\n\n- name: \u786e\u4fddhttpd\u7684\u76d1\u542c\u7aef\u53e3\u4e3a8080\n  lineinfile:\n    path: /etc/httpd/conf/httpd.conf\n    regexp: '^Listen '\n    insertafter: '^#Listen '\n    line: Listen 8080\n\n- name: \u786e\u4fdd\u6ce8\u91ca\u5728\u5339\u914d\u6587\u672c\u4e0a\u9762\n  lineinfile:\n    path: /etc/services\n    regexp: '^# port for http'\n    insertbefore: '^www.*80/tcp'\n    line: '# port for http by default'\n\n- name: \u4e3a\u7a7a\u6587\u4ef6\u6dfb\u52a0\u4e00\u884c\u5185\u5bb9\n  lineinfile:\n    path: /tmp/testfile\n    line: 192.168.1.99 foo.lab.net foo\n    create: yes\n\n# NOTE: Yaml requires escaping backslashes in double quotes but not in single quotes\n- name: Ensure the JBoss memory settings are exactly as needed\n  lineinfile:\n    path: /opt/jboss-as/bin/standalone.conf\n    regexp: '^(.*)Xms(\\\\d+)m(.*)$'\n    line: '\\1Xms${xms}m\\3'\n    backrefs: yes\n\n# NOTE: Fully quoted because of the ': ' on the line. See the Gotchas in the YAML docs.\n- name: Validate the sudoers file before saving\n  lineinfile:\n    path: /etc/sudoers\n    state: present\n    regexp: '^%ADMIN ALL='\n    line: '%ADMIN ALL=(ALL) NOPASSWD: ALL'\n    validate: /usr/sbin/visudo -cf %s\n")),(0,s.kt)("h3",{id:"replace"},"replace"),(0,s.kt)("p",null,"\u66ff\u6362\u6240\u6709, \u4e0el",(0,s.kt)("inlineCode",{parentName:"p"},"ineinfile"),"\u4e0d\u540c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Before Ansible 2.3, option 'dest', 'destfile' or 'name' was used instead of 'path'\n  replace:\n    path: /etc/hosts\n    regexp: '(\\s+)old\\.host\\.name(\\s+.*)?$'\n    replace: '\\1new.host.name\\2'\n\n- name: Replace after the expression till the end of the file (requires Ansible >= 2.4)\n  replace:\n    path: /etc/apache2/sites-available/default.conf\n    after: 'NameVirtualHost [*]'\n    regexp: '^(.+)$'\n    replace: '# \\1'\n\n- name: Replace before the expression till the begin of the file (requires Ansible >= 2.4)\n  replace:\n    path: /etc/apache2/sites-available/default.conf\n    before: '# live site config'\n    regexp: '^(.+)$'\n    replace: '# \\1'\n\n# Prior to Ansible 2.7.10, using before and after in combination did the opposite of what was intended.\n# see https://github.com/ansible/ansible/issues/31354 for details.\n- name: Replace between the expressions (requires Ansible >= 2.4)\n  replace:\n    path: /etc/hosts\n    after: '<VirtualHost [*]>'\n    before: '</VirtualHost>'\n    regexp: '^(.+)$'\n    replace: '# \\1'\n\n- name: Supports common file attributes\n  replace:\n    path: /home/jdoe/.ssh/known_hosts\n    regexp: '^old\\.host\\.name[^\\n]*\\n'\n    owner: jdoe\n    group: jdoe\n    mode: '0644'\n\n- name: Supports a validate command\n  replace:\n    path: /etc/apache/ports\n    regexp: '^(NameVirtualHost|Listen)\\s+80\\s*$'\n    replace: '\\1 127.0.0.1:8080'\n    validate: '/usr/sbin/apache2ctl -f %s -t'\n\n- name: Short form task (in ansible 2+) necessitates backslash-escaped sequences\n  replace: path=/etc/hosts regexp='\\\\b(localhost)(\\\\d*)\\\\b' replace='\\\\1\\\\2.localdomain\\\\2 \\\\1\\\\2'\n\n- name: Long form task does not\n  replace:\n    path: /etc/hosts\n    regexp: '\\b(localhost)(\\d*)\\b'\n    replace: '\\1\\2.localdomain\\2 \\1\\2'\n\n- name: Explicitly specifying positional matched groups in replacement\n  replace:\n    path: /etc/ssh/sshd_config\n    regexp: '^(ListenAddress[ ]+)[^\\n]+$'\n    replace: '\\g<1>0.0.0.0'\n\n- name: Explicitly specifying named matched groups\n  replace:\n    path: /etc/ssh/sshd_config\n    regexp: '^(?P<dctv>ListenAddress[ ]+)(?P<host>[^\\n]+)$'\n    replace: '#\\g<dctv>\\g<host>\\n\\g<dctv>0.0.0.0'\n")),(0,s.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ansible Playbook : ",(0,s.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html"},"https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html")),(0,s.kt)("li",{parentName:"ul"},"Ansible-Galaxy : ",(0,s.kt)("a",{parentName:"li",href:"https://galaxy.ansible.com/docs/?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW"},"https://galaxy.ansible.com/docs/?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW"))))}m.isMDXComponent=!0}}]);