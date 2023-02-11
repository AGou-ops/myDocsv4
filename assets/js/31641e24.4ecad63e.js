"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[404],{3905:(n,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>p});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},_=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,_=s(n,["components","mdxType","originalType","parentName"]),d=c(t),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return t?r.createElement(f,i(i({ref:e},_),{},{components:t})):r.createElement(f,i({ref:e},_))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11053:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},i="MySQL \u914d\u7f6e\u6587\u4ef6my.cnf",s={unversionedId:"LinuxBasics/DataBases/MySQL/MySQL Configuration",id:"LinuxBasics/DataBases/MySQL/MySQL Configuration",title:"MySQL \u914d\u7f6e\u6587\u4ef6my.cnf",description:"",source:"@site/docs/LinuxBasics/DataBases/MySQL/MySQL Configuration.md",sourceDirName:"LinuxBasics/DataBases/MySQL",slug:"/LinuxBasics/DataBases/MySQL/MySQL Configuration",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/MySQL/MySQL Configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MySQL Cluster",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Cluster"},next:{title:"MySQL\u6e38\u6807",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Cursor"}},l={},c=[],_={toc:c};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-\u914d\u7f6e\u6587\u4ef6mycnf"},"MySQL \u914d\u7f6e\u6587\u4ef6my.cnf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[client]\n# \u6307\u5b9amysql\u5f00\u653e\u7aef\u53e3\nport = 3306\n# \u5957\u63a5\u5b57\u6587\u4ef6\nsocket = /usr/local/mysql/data/mysql.sock\n\n[mysqld]\n# Skip #\nskip_name_resolve = 1\nskip_external_locking = 1\nskip_symbolic_links = 1\n# GENERAL #\n# \u542f\u52a8\u7528\u6237\nuser = mysql\ndefault_storage_engine = InnoDB\n# \u7f16\u7801\u65b9\u5f0f\ncharacter-set-server = utf8\n# pid\u6587\u4ef6\u6240\u5728\u76ee\u5f55\npid_file = /usr/local/mysql/data/mysqld.pid\n# \u6307\u5b9aMysql\u5b89\u88c5\u7684\u7edd\u5bf9\u8def\u5f84\nbasedir = /usr/local/mysql\nport = 3306\nbind-address = 0.0.0.0\nexplicit_defaults_for_timestamp = off\nsql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\n# DATA STORAGE #\n# MyISAM #\n# \u6307\u5b9a\u7d22\u5f15\u7f13\u51b2\u533a\u7684\u5927\u5c0f\nkey_buffer_size = 32M\n\n# undo log #\ninnodb_undo_directory = /usr/local/mysql/undo\ninnodb_undo_tablespaces = 8\n\n# SAFETY #\n# \u9650\u5236server\u63a5\u53d7\u7684\u6570\u636e\u5305\u5927\u5c0f\nmax_allowed_packet = 100M\n# \u6700\u5927\u8fde\u63a5\u9519\u8bef\uff0c\u8d85\u51fa\u8be5\u503c\u4ee5\u540e\uff0c\u670d\u52a1\u5668\u5c06\u963b\u6b62\u8be5\u5ba2\u6237\u7aef\u540e\u7eed\u7684\u6240\u6709\u8bbf\u95ee\nmax_connect_errors = 1000000\nsysdate_is_now = 1\nsecure-file-priv = '/tmp'\ndefault_authentication_plugin='mysql_native_password'\n\n# Replice #\nserver-id = 1001\nrelay_log = mysqld-relay-bin\ngtid_mode = on\nenforce-gtid-consistency\nlog-slave-updates = on\nmaster_info_repository = TABLE\nrelay_log_info_repository = TABLE\n\n# DATA STORAGE #\n# \u6570\u636e\u6587\u4ef6\u5b58\u653e\u7684\u76ee\u5f55\ndatadir = /usr/local/mysql/data/\n# \u5b58\u653e\u4e34\u65f6\u6587\u4ef6\u7684\u76ee\u5f55\ntmpdir = /tmp\n\n# BINARY LOGGING #\nlog_bin = /usr/local/mysql/sql_log/mysql-bin\n# \u5982\u679c\u4e8c\u8fdb\u5236\u65e5\u5fd7\u5199\u5165\u7684\u5185\u5bb9\u8d85\u51fa\u7ed9\u5b9a\u503c\uff0c\u65e5\u5fd7\u5c31\u4f1a\u53d1\u751f\u6eda\u52a8\nmax_binlog_size = 1000M\n# \u57fa\u4e8e\u884c\u7684\u590d\u5236\nbinlog_format = row\nbinlog_expire_logs_seconds=86400\n\n# CACHES AND LIMITS #\n# \u4e34\u65f6\u5185\u90e8\u5806\u79ef\u8868\u7684\u5927\u5c0f\ntmp_table_size = 32M\n# \u6700\u5927\u5185\u5b58\u8868\u5927\u5c0f\nmax_heap_table_size = 32M\n# mysql\u7684\u6700\u5927\u8fde\u63a5\u6570\nmax_connections = 4000\n# \u7528\u4e8e\u7f13\u5b58\u7a7a\u95f2\u7684\u7ebf\u7a0b\nthread_cache_size = 2048\n# \u63a7\u5236\u6587\u4ef6\u6253\u5f00\u7684\u4e2a\u6570\nopen_files_limit = 65535\ntable_definition_cache = 4096\n# \u8868\u63cf\u8ff0\u7b26\u7f13\u5b58\u5927\u5c0f\uff0c\u53ef\u51cf\u5c11\u6587\u4ef6\u6253\u5f00/\u5173\u95ed\u6b21\u6570\ntable_open_cache = 4096\n# \u6392\u5e8f\u8bed\u53e5 'group by' \u4e0e 'order by' \u5360\u7528\u7684\u5927\u5c0f\nsort_buffer_size = 2M\n# \u8bfb\u7f13\u51b2\u533a\u7684\u5927\u5c0f\nread_buffer_size = 2M\n# \u8bbe\u7f6e\u670d\u52a1\u5668\u968f\u673a\u8bfb\u53d6\u7f13\u51b2\u533a\u7684\u5927\u5c0f\nread_rnd_buffer_size = 2M\n# \u4f7f\u7528join\u8bed\u53e5\u7684\u7f13\u5b58\u533a\njoin_buffer_size = 1M\n# \u7528\u6765\u5b58\u653e\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u81ea\u8eab\u7684\u6807\u8bc6\u4fe1\u606f\nthread_stack = 512k\nmax_length_for_sort_data = 16k\n\n# INNODB #\n# \u4f7f\u7528O_DIRECT\u6a21\u5f0f\u6253\u5f00\u6570\u636e\u6587\u4ef6\uff0c\u7528fsync()\u51fd\u6570\u53bb\u66f4\u65b0\u65e5\u5fd7\u548c\u6570\u636e\u6587\u4ef6\u3002\ninnodb_flush_method = O_DIRECT\n# \u65e5\u5fd7\u7f13\u5b58,\u5927\u7684\u65e5\u5fd7\u7f13\u51b2\u53ef\u4ee5\u51cf\u5c11\u78c1\u76d8I/O\ninnodb_log_buffer_size = 16M\n# \u6bcf\u6b21commit \u65e5\u5fd7\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u5237\u5230\u78c1\u76d8\u4e2d\ninnodb_flush_log_at_trx_commit = 2\n#\u4f5c\u7528\uff1a\u4f7f\u6bcf\u4e2aInnodb\u7684\u8868\uff0c\u6709\u81ea\u5df2\u72ec\u7acb\u7684\u8868\u7a7a\u95f4\u3002\u5982\u5220\u9664\u6587\u4ef6\u540e\u53ef\u4ee5\u56de\u6536\u90a3\u90e8\u5206\u7a7a\u95f4\u3002\n#\u5206\u914d\u539f\u5219\uff1a\u53ea\u6709\u4f7f\u7528\u4e0d\u4f7f\u7528\u3002\u4f46\uff24\uff22\u8fd8\u9700\u8981\u6709\u4e00\u4e2a\u516c\u5171\u7684\u8868\u7a7a\u95f4\u3002\ninnodb_file_per_table = 1\n# \u7528\u6765\u9ad8\u901f\u7f13\u51b2\u6570\u636e\u548c\u7d22\u5f15\u5185\u5b58\u7f13\u51b2\u5927\u5c0f\ninnodb_buffer_pool_size = 256M\ninnodb_stats_on_metadata = off\n# \u9650\u5236Innodb\u80fd\u6253\u5f00\u7684\u8868\u7684\u6570\u91cf\ninnodb_open_files = 8192\n# \u8bfbio\u7ebf\u7a0b\ninnodb_read_io_threads = 16\n# \u5199io\u7ebf\u7a0b\ninnodb_write_io_threads = 16\n# \u8fd9\u4e2a\u53c2\u6570\u636e\u63a7\u5236Innodb checkpoint\u65f6\u7684IO\u80fd\u529b\ninnodb_io_capacity = 20000\ninnodb_thread_concurrency = 0\n# \u5728\u56de\u6eda(rooled back)\u4e4b\u524d\uff0cInnoDB \u4e8b\u52a1\u5c06\u7b49\u5f85\u8d85\u65f6\u7684\u65f6\u95f4(\u5355\u4f4d \u79d2)\ninnodb_lock_wait_timeout = 60\ninnodb_old_blocks_time = 1000\ninnodb_use_native_aio = 1\n# \u5f00\u59cb\u788e\u7247\u56de\u6536\u7ebf\u7a0b\ninnodb_purge_threads = 1\n# \u5f53\u968f\u540e\u9875\u9762\u88ab\u8bfb\u5230\u5185\u5b58\u4e2d\u65f6\uff0c\u4f1a\u5c06\u8fd9\u4e9b\u53d8\u5316\u7684\u8bb0\u5f55merge\u5230\u9875\u4e2d\u3002\ninnodb_change_buffering = all\n# \u53ef\u4ee5\u51cf\u5c11\u5237\u65b0\u7f13\u51b2\u6c60\u7684\u6b21\u6570\uff0c\u4ece\u800c\u51cf\u5c11\u78c1\u76d8 I/O\u3002\ninnodb_log_file_size = 64M\n# \u6307\u5b9a\u67092\u4e2a\u65e5\u5fd7\u7ec4\ninnodb_log_files_in_group = 2\n# \u5355\u72ec\u6307\u5b9a\u6570\u636e\u6587\u4ef6\u7684\u8def\u5f84\u4e0e\u5927\u5c0f\ninnodb_data_file_path = ibdata1:256M:autoextend\ninnodb_rollback_on_timeout = on\n\n# LOGGING #\n# \u9519\u8bef\u65e5\u5fd7\u7684\u5b58\u653e\u8def\u52b2\nlog_error = /usr/local/mysql/sql_log/mysql-error.log\nslow_query_log_file = /usr/local/mysql/sql_log/slowlog.log\n")))}u.isMDXComponent=!0}}]);