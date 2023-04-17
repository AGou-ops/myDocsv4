"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2089],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>s});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,u=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),f=c(t),s=a,g=f["".concat(u,".").concat(s)]||f[s]||m[s]||l;return t?r.createElement(g,i(i({ref:e},p),{},{components:t})):r.createElement(g,i({ref:e},p))}));function s(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87542:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={},i="Golang \u51fd\u6570",o={unversionedId:"ProgramLang/Golang/Golang Function",id:"ProgramLang/Golang/Golang Function",title:"Golang \u51fd\u6570",description:"- \u4f20\u9012\u53ef\u53d8\u53d8\u91cf",source:"@site/docs/ProgramLang/Golang/Golang Function.md",sourceDirName:"ProgramLang/Golang",slug:"/ProgramLang/Golang/Golang Function",permalink:"/docs/ProgramLang/Golang/Golang Function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProgramLang/Golang/Golang Function.md",tags:[],version:"current",frontMatter:{},sidebar:"programLang",previous:{title:"Golang \u6587\u4ef6\u64cd\u4f5c",permalink:"/docs/ProgramLang/Golang/Golang File Operate"},next:{title:"Golang \u63a5\u53e3",permalink:"/docs/ProgramLang/Golang/Golang Interface"}},u={},c=[{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:c};function m(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golang-\u51fd\u6570"},"Golang \u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f20\u9012\u53ef\u53d8\u53d8\u91cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func test(a,b int args ...int) int {\n    return 0\n}\na,b := 1,2\narg = []int{3,4,5}\ntest(1,2,arg...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f20\u9012\u7ed3\u6784\u5316\u6570\u636e\u5230\u51fd\u6570\u7684\u4e24\u79cd\u5199\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n \nfunc test() {\n    person := Person{"TigerwolfC", 25}\n    fmt.Printf("person<%s:%d>\\n", person.name, person.age)\n    // person.sayHi()\n    person.ModifyAge(28)\n    sayHi(person)\n\n}\n\ntype Person struct {\n    name string\n    age  int\n}\n\nfunc sayHi(p Person) {\n    fmt.Printf("SayHi -- This is %s, my age is %d\\n", p.name, p.age)\n}\nfunc (p Person) ModifyAge(age int) {\n    fmt.Printf("ModifyAge")\n    p.age = age\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f20\u9012\u51fd\u6570\u5230\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func test2(myFunc func(int) int) { // \u4f20\u9012\u51fd\u6570\u5230\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u6709\u4e00\u4e2aint\u53c2\u6570\u4ee5\u53ca\u4e00\u4e2aint\u7c7b\u578b\u8fd4\u56de\u503c\n    fmt.Println(myFunc(7))\n}\n\nfunc returnFunc(x string) func() {\n    return func() { fmt.Println(x) }\n}\n\nfunc returnFunc2() func(a, b int) int {\n    f := func(a, b int) int {\n        return a + b\n    }\n    return f\n}\n\nfunc main() {\n    x := func(y int) int {\n        return y + 1\n    }\n    test2(x)\n    returnFunc("AGou-ops")()\n    fmt.Println(retrunFunc2()(33, 44))\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u590d\u5236")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'fun main() {\n    x := sayhello\n    fmt.Println(x("AGou-ops"))\n}\n\nfunc sayhello(name string) string {\n    return "hello " + name\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function in function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u51fd\u6570\u5185\u90e8\u4e0d\u80fd\u5d4c\u5957\u547d\u540d\u51fd\u6570\uff0c\u6240\u4ee5\u53ea\u80fd\u5b9a\u4e49\u533f\u540d\u51fd\u6570\nfunc main() {\n    x := func(name string) string {\n        return "hello " + name\n    }("suofeiya")       // \u5728\u6b64\u5904\u52a0\u4e0a\u62ec\u53f7\u53ef\u4ee5\u76f4\u63a5\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\n    \n    fmt.Println(x)\n}\n// -- 2\nfunc main() {\n    func() {\n        fmt.Print("func in func")\n    }()         // \u8fd9\u4e2a()\u4e0d\u53ef\u6216\u7f3a\uff0c\u8868\u793a\u8c03\u7528\u8be5\u51fd\u6570\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u56de\u8c03")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    // \u81ea\u7531\u53d8\u91cfx\n    var x int\n    // \u95ed\u5305\u51fd\u6570g\n    g := func(i int) int {\n        return x + i\n    }\n    x = 5\n    // \u8c03\u7528\u95ed\u5305\u51fd\u6570\n    fmt.Println(g(5))\n    x = 10\n    // \u8c03\u7528\u95ed\u5305\u51fd\u6570\n    fmt.Println(g(3))\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u95ed\u5305\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func adder() func(int) int {\n    sum := 0\n    return func(x int) int {\n        sum += x\n        return sum\n    }\n}\n\nfunc main() {\n    result := adder()\n    for i := 0; i < 10; i++ {\n        fmt.Println(result(i))\n    }\n}\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"defer \u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// defer\u51fd\u6570\u4f1a\u5728\u5f53\u524d\u51fd\u6570\u8fd4\u56de\u524d\u6267\u884c\u4f20\u5165\u7684\u51fd\u6570\uff0c\u5b83\u4f1a\u7ecf\u5e38\u88ab\u7528\u4e8e\u5173\u95ed\u6587\u4ef6\u63cf\u8ff0\u7b26\u3001\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u4ee5\u53ca\u89e3\u9501\u8d44\u6e90\nfunc main() {\n    defer func() {          // \u533f\u540ddefer\u51fd\u6570\n        fmt.Println("exec defer()")\n    }()\n    // defer closeDB()              // \u8c03\u7528\u547d\u540d\u51fd\u6570\n    // defer fmt.Println("print from defer()")          // \u8c03\u7528\u8bed\u53e5\n    fmt.Println("END main()")\n}\n// output\nEND main()\nexec defer()\n')),(0,a.kt)("p",null,"\u26a0\ufe0f \u5982\u679c\u4e00\u4e2a\u51fd\u6570\u4e2d\u6709\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"refer"),"\u51fd\u6570\uff0c\u4f1a\u5012\u5e8f\u6267\u884c\u6bcf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"refer"),"\u51fd\u6570."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"panic \u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// panic \u5f3a\u5236\u629b\u51fa\u9519\u8bef\nfunc main() {\n    panic("error here.")\n    fmt.Println("main() function but not working.")         // unreachable code\uff0c\u65e0\u6cd5\u6267\u884c\u7684\u8bed\u53e5\u4ee3\u7801\n}\n// output \npanic: error here.\n\ngoroutine 1 [running]:\nmain.main()\n        /home/agou-ops/GolandProjects/studyNote/src/code.personal.cc/main.go:42 +0x65\nexit status 2\n')),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"panic")," \u80fd\u591f\u6539\u53d8\u7a0b\u5e8f\u7684\u63a7\u5236\u6d41\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"panic")," \u540e\u4f1a\u7acb\u523b\u505c\u6b62\u6267\u884c\u5f53\u524d\u51fd\u6570\u7684\u5269\u4f59\u4ee3\u7801\uff0c\u5e76\u5728\u5f53\u524d Goroutine \u4e2d\u9012\u5f52\u6267\u884c\u8c03\u7528\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"defer"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recover")," \u53ef\u4ee5\u4e2d\u6b62 ",(0,a.kt)("inlineCode",{parentName:"li"},"panic")," \u9020\u6210\u7684\u7a0b\u5e8f\u5d29\u6e83\u3002\u5b83\u662f\u4e00\u4e2a\u53ea\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"defer")," \u4e2d\u53d1\u6325\u4f5c\u7528\u7684\u51fd\u6570\uff0c\u5728\u5176\u4ed6\u4f5c\u7528\u57df\u4e2d\u8c03\u7528\u4e0d\u4f1a\u53d1\u6325\u4f5c\u7528\uff1b"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"recover \u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    defer func() {\n        if err := recover(); err != nil {\n            fmt.Println(err)\n        }\n    }()\n    fmt.Println("main() started")\n    panic("error here.")\n    fmt.Println("END main()")           // unreachable code\uff0c\u65e0\u6cd5\u6267\u884c\u7684\u8bed\u53e5\u4ee3\u7801\n}\n')),(0,a.kt)("p",null,"\u26a0\ufe0f",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),"\u51fd\u6570\u914d\u5408",(0,a.kt)("inlineCode",{parentName:"p"},"panic"),"\u51fd\u6570\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"defer"),"\u51fd\u6570\u4e2d\u5d4c\u5957",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),"\u51fd\u6570\uff08defer\u51fd\u6570\u6700\u540e\u624d\u6267\u884c\uff09\uff0c\u56e0\u4e3a\u5f53\u7a0b\u5e8f\u6267\u884c\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"panic"),"\u51fd\u6570\u65f6\u4f1a\u5f02\u5e38\u7ec8\u6b62\uff0c\u4ece\u800c\u4f1a\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),"\u51fd\u6570\u65e0\u6cd5\u6355\u83b7",(0,a.kt)("inlineCode",{parentName:"p"},"panic"),"\u9519\u8bef."),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang \u51fd\u6570\u9ad8\u7ea7\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://chai2010.cn/advanced-go-programming-book/ch1-basic/ch1-04-func-method-interface.html"},"https://chai2010.cn/advanced-go-programming-book/ch1-basic/ch1-04-func-method-interface.html")),(0,a.kt)("li",{parentName:"ul"},"\u56de\u8c03\u51fd\u6570\u548c\u95ed\u5305\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/f-ck-need-u/p/9878898.html"},"https://www.cnblogs.com/f-ck-need-u/p/9878898.html"))))}m.isMDXComponent=!0}}]);