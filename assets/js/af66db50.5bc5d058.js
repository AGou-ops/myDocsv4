"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[8552],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>g});var a=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var o=a.createContext({}),c=function(n){var t=a.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=c(n.components);return a.createElement(o.Provider,{value:t},n.children)},d={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,s=n.originalType,o=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),h=c(e),g=r,p=h["".concat(o,".").concat(g)]||h[g]||d[g]||s;return e?a.createElement(p,l(l({ref:t},u),{},{components:e})):a.createElement(p,l({ref:t},u))}));function g(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var s=e.length,l=new Array(s);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=n,i.mdxType="string"==typeof n?n:r,l[1]=i;for(var c=2;c<s;c++)l[c]=e[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}h.displayName="MDXCreateElement"},59798:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=e(87462),r=(e(67294),e(3905));const s={},l=void 0,i={unversionedId:"CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f",id:"CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f",title:"\u90ae\u4ef6\u901a\u77e5\u6a21\u677f",description:"image-20230417005027225",source:"@site/docs/CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f.md",sourceDirName:"CloudNative/CICD/Jenkins",slug:"/CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f",permalink:"/docs/CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/CICD/Jenkins/\u90ae\u4ef6\u901a\u77e5\u6a21\u677f.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"pipeline\u6dfb\u52a0\u6784\u5efa\u53c2\u6570",permalink:"/docs/CloudNative/CICD/Jenkins/Pipeline build parameters"},next:{title:"Sonarqube",permalink:"/docs/category/sonarqube"}},o={},c=[],u={toc:c};function d(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/image-20230417005027225.png",alt:"image-20230417005027225"})),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a\u5c06\u4ee5\u4e0b\u5185\u5bb9\u4fdd\u5b58\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"$JENKINS_HOME/email-templates/detailed_email.jelly"),"\uff0c\u7136\u540e\u76f4\u63a5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"default content"),"\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},'${JELLY_SCRIPT,template="detailed_email"}'),"\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<j:jelly xmlns:j="jelly:core" xmlns:st="jelly:stapler" xmlns:d="jelly:define">\n  <html>\n    <head>\n      <title>${project.name}</title>\n      <style>\n        body table, td, th, p, h1, h2 {\n        margin:0;\n        font:normal normal\n        100% \'Avenir Next\';\n        background-color: #ffffff;\n        }\n        h1, h2 {\n        border-bottom:none 1px #999999;\n        padding:5px;\n        margin-top:10px;\n        margin-bottom:10px;\n        color: #000000;\n        font: normal bold 130%\n        \'Avenir Next\';\n        background-color:#f0f0f0;\n        }\n        tr.gray {\n        background-color:#f0f0f0;\n        }\n        h2 {\n        padding:5px;\n        margin-top:5px;\n        margin-bottom:5px;\n        font: italic bold 110% \'Avenir Next\';\n        }\n        .bg2 {\n        color:black;\n        background-color:#E0E0E0;\n        font-size:110%\n        }\n        th {\n        font-weight: bold;\n        }\n        tr, td, th {\n        padding:2px;\n        }\n        td.test_passed {\n        color:green;\n        }\n        td.test_failed {\n        color:red;\n        }\n        td.center {\n          text-align: center;\n        }\n        td.test_skipped {\n        color:grey;\n        }\n        .console {\n        font: normal normal 90% Courier New,\n        monotype;\n        padding:0px;\n        margin:0px;\n        }\n        div.content, div.header {\n        background: #ffffff;\n        border: none\n        1px #666;\n        margin: 2px;\n        content:\n        2px;\n        padding: 2px;\n        }\n        table.border, th.border, td.border {\n        border:\n        1px solid grey;\n        border-collapse:collapse;\n        }\n      </style>\n    </head>\n    <body>\n      <div class="header">\n        <j:set var="spc" value="&amp;nbsp;&amp;nbsp;" />\n        \x3c!-- GENERAL INFO --\x3e\n        <table>\n          <tr class="gray">\n            <td align="right">\n              <j:choose>\n                <j:when test="${build.result==\'SUCCESS\'}">\n                  <img src="${rooturl}static/e59dfe28/images/32x32/green.gif" />\n                </j:when>\n                <j:when test="${build.result==\'FAILURE\'}">\n                  <img src="${rooturl}static/e59dfe28/images/32x32/red.gif" />\n                </j:when>\n                <j:when test="${build.result==\'UNSTABLE\'}">\n                  <img src="${rooturl}static/e59dfe28/images/32x32/yellow.gif" />\n                </j:when>\n                <j:otherwise>\n                  <img src="${rooturl}static/e59dfe28/images/32x32/green.gif" />\n                </j:otherwise>\n              </j:choose>\n            </td>\n            <td align="left">\n            <j:choose>\n              <j:when test="${empty(build.result)}">\n                 <b style="font-size: 170%;">BUILD SUCCESS</b>\n               </j:when>\n               <j:otherwise>\n                 <b style="font-size: 170%;">BUILD ${build.result}</b>\n               </j:otherwise>\n            </j:choose>\n            </td>\n          </tr>\n          <tr>\n            <td><b>Build URL</b></td>\n            <td>\n              <a href="${rooturl}${build.url}">${rooturl}${build.url}</a>\n            </td>\n          </tr>\n          <tr>\n            <td><b>Project:</b></td>\n            <td>${project.name}</td>\n          </tr>\n          <tr>\n            <td><b>Date of build:</b></td>\n            <td>${it.timestampString}</td>\n          </tr>\n          <tr>\n            <td><b>Build duration:</b></td>\n            <td>${build.durationString}</td>\n          </tr>\n          <tr>\n            <td><b>Build cause:</b></td>\n            <td>\n              <j:forEach var="cause" items="${build.causes}">${cause.shortDescription}\n              </j:forEach>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n       \x3c!-- CHANGE SET --\x3e\n  <div class="content">\n    <j:forEach var="changeSet" items="${build.changeSets}" varStatus="loop" begin="0" end="1"/>\n    \x3c!--j:set var="changeSet" value="${build.changeSet}[0]" / --\x3e\n    <j:if test="${changeSet!=null}">\n      <j:set var="hadChanges" value="false" />\n      <TABLE width="100%">\n        <TR><TD class="bg1" colspan="2"><a href="${rooturl}${build.url}/changes">\n            <h1>Changes</h1>\n          </a></TD></TR>\n        <j:forEach var="cs" items="${changeSet}" varStatus="loop">\n          <j:set var="hadChanges" value="true" />\n          <j:set var="aUser" value="${cs.hudsonUser}"/>\n          <TR>\n            <TD colspan="2" class="bg2">${spc}Revision <B>${cs.commitId?:cs.revision?:cs.changeNumber}</B> by\n              <B>${aUser!=null?aUser.displayName:cs.author.displayName}: </B>\n              <B>(${cs.msgAnnotated})</B>\n            </TD>\n          </TR>\n          <j:forEach var="p" items="${cs.affectedFiles}">\n            <TR>\n              <TD width="10%">${spc}${p.editType.name}</TD>\n              <TD>${p.path}</TD>\n            </TR>\n          </j:forEach>\n        </j:forEach>\n        <j:if test="${!hadChanges}">\n          <TR><TD colspan="2">No Changes</TD></TR>\n        </j:if>\n      </TABLE>\n      <BR/>\n    </j:if>\n</div>\n\n      \x3c!-- HEALTH TEMPLATE --\x3e\n      <div class="content">\n        <j:set var="healthIconSize" value="16x16" />\n        <j:set var="healthReports" value="${project.buildHealthReports}" />\n        <j:if test="${healthReports!=null}">\n          <h1>Health Report</h1>\n          <table>\n            <tr>\n              <th>W</th>\n              <th>Description</th>\n              <th>Score</th>\n            </tr>\n            <j:forEach var="healthReport" items="${healthReports}">\n              <tr>\n                <td>\n                  <img\n                    src="${rooturl}${healthReport.getIconUrl(healthIconSize)}" />\n                </td>\n                <td>${healthReport.description}</td>\n                <td>${healthReport.score}</td>\n              </tr>\n            </j:forEach>\n          </table>\n          <br />\n        </j:if>\n      </div>\n\n\n      \x3c!-- JUnit TEMPLATE --\x3e\n      <j:set var="junitResultList" value="${it.JUnitTestResult}" />\n      <j:if test="${junitResultList.isEmpty()!=true}">\n      <j:forEach var="testResult" items="${junitResultList}">\n           <j:set var="failCount" value="${failCount + testResult.getFailCount()}"/>\n           <j:set var="skipCount" value="${skipCount + testResult.getSkipCount()}"/>\n           <j:set var="passCount" value="${passCount + testResult.getPassCount()}"/>\n       </j:forEach>\n        <div class="content">\n          <a href="${rooturl}${build.url}/testReport">\n            <h1>Tests Reports:\n            <span style="color: green">Passed: ${passCount}</span>,\n            <span style="color: #ff0000">Failed: ${failCount}</span>,\n            <span style="color: grey">Ignored: ${skipCount}</span>\n            </h1>\n          </a>\n          \x3c!--\n    <h2> Test Trend </h2>\n          <img alt="[Test result trend chart]" src="${rooturl}${project.url}/test/trend?failureOnly=false" usemap="#map0" />\n    <h2> JUnit Tests </h2>\n    --\x3e\n          <table class="border">\n            <tr>\n              <th class="border">Package</th>\n              <th class="border">Failed</th>\n              <th class="border">Passed</th>\n              <th class="border">Skipped</th>\n              <th class="border">Total</th>\n            </tr>\n            <j:forEach var="junitResult" items="${it.JUnitTestResult}">\n              <j:forEach var="packageResult" items="${junitResult.getChildren()}">\n                <tr>\n                  <td class="border">\n                    <tt>${packageResult.getName()}</tt>\n                  </td>\n                  <td class="border test_failed">${packageResult.getFailCount()}</td>\n                  <td class="border test_passed">${packageResult.getPassCount()}</td>\n                  <td class="border test_skipped">${packageResult.getSkipCount()}</td>\n                  <td class="border">\n                    <b>${packageResult.getPassCount()+packageResult.getFailCount()+packageResult.getSkipCount()}\n                    </b>\n                  </td>\n                </tr>\n                <j:forEach var="failed_test"\n                  items="${packageResult.getFailedTests()}">\n                  <tr>\n                    <td class="test_failed" colspan="5">\n                      <tt>${failed_test.getFullName()}</tt>\n                    </td>\n                  </tr>\n                </j:forEach>\n              </j:forEach>\n            </j:forEach>\n          </table>\n          <br />\n        </div>\n      </j:if>\n\n      \x3c!-- COBERTURA TEMPLATE --\x3e\n\n      <j:set var="coberturaAction" value="${it.coberturaAction}" />\n      <j:if test="${coberturaAction!=null}">\n        <div class="content">\n          <j:set var="coberturaResult" value="${coberturaAction.result}" />\n          <j:if test="${coberturaResult!=null}">\n            <a href="${rooturl}${build.url}/cobertura">\n              <h1>Cobertura Report</h1>\n            </a>\n            <h2>Project Coverage Summary</h2>\n            <h3>Trend</h3>\n            <img src="${rooturl}${build.url}cobertura/graph" />\n            <h3>Project Coverage summary</h3>\n            <table class="border">\n              <tr>\n                <th class="border">Name</th>\n                <j:forEach var="metric" items="${coberturaResult.metrics}">\n                  <th class="border">${metric.name}</th>\n                </j:forEach>\n              </tr>\n              <tr>\n                <td class="border">${coberturaResult.name}</td>\n                <j:forEach var="metric" items="${coberturaResult.metrics}">\n                  <td class="border"\n                    data="${coberturaResult.getCoverage(metric).percentageFloat}">${coberturaResult.getCoverage(metric).percentage}%\n                    (${coberturaResult.getCoverage(metric)})\n                  </td>\n                </j:forEach>\n              </tr>\n            </table>\n            <j:if test="${coberturaResult.sourceCodeLevel}">\n              <h2>Source</h2>\n              <j:choose>\n                <j:when test="${coberturaResult.sourceFileAvailable}">\n                  <div style="overflow-x:scroll;">\n                    <table class="source">\n                      <thead>\n                        <tr>\n                          <th colspan="3">${coberturaResult.relativeSourcePath}\n                          </th>\n                        </tr>\n                      </thead>\n                      ${coberturaResult.sourceFileContent}\n                    </table>\n                  </div>\n                </j:when>\n                <j:otherwise>\n                  <p>\n                    <i>Source code is unavailable</i>\n                  </p>\n                </j:otherwise>\n              </j:choose>\n            </j:if>\n            <j:forEach var="element" items="${coberturaResult.childElements}">\n              <j:set var="childMetrics"\n                value="${coberturaResult.getChildMetrics(element)}" />\n              <h2>Coverage Breakdown by ${element.displayName}</h2>\n              <table class="border">\n                <tr>\n                  <th class="border">Name</th>\n                  <j:forEach var="metric" items="${childMetrics}">\n                    <th class="border">${metric.name}</th>\n                  </j:forEach>\n                </tr>\n                <j:forEach var="c" items="${coberturaResult.children}">\n                  <j:set var="child" value="${coberturaResult.getChild(c)}" />\n                  <tr>\n                    <td class="border">\n                      ${child.xmlTransform(child.name)}\n                    </td>\n                    <j:forEach var="metric" items="${childMetrics}">\n                      <j:set var="childResult" value="${child.getCoverage(metric)}" />\n                      <j:choose>\n                        <j:when test="${childResult!=null}">\n                          <td class="border" data="${childResult.percentageFloat}">${childResult.percentage}%\n                            (${childResult})\n                          </td>\n                        </j:when>\n                        <j:otherwise>\n                          <td class="border" data="101">N/A</td>\n                        </j:otherwise>\n                      </j:choose>\n                    </j:forEach>\n                  </tr>\n                </j:forEach>\n              </table>\n            </j:forEach>\n          </j:if>\n          <br />\n        </div>\n      </j:if>\n\n      \x3c!-- Static Analysis --\x3e\n      <j:set var="actions" value="${it.staticAnalysisActions}" />\n      <j:if test="${!actions.isEmpty()}">\n        <div class="content">\n          <h1>Static Analysis Results</h1>\n          <table>\n            <tr>\n              <th></th>\n              <th>Name</th>\n              <th>Result</th>\n              <th>Total</th>\n              <th>High</th>\n              <th>Normal</th>\n              <th>Low</th>\n            </tr>\n            <j:forEach var="action" items="${actions}">\n              <tr>\n                <td>\n                  <img src="${rooturl}${action.smallImageName}" />\n                </td>\n                <td>\n                  <a href="${rooturl}${build.url}/${action.urlName}">${action.displayName}</a>\n                </td>\n                <td class="center">\n                  <j:choose>\n                    <j:when test="${action.result.pluginResult==\'SUCCESS\'}">\n                      <img src="${rooturl}static/e59dfe28/images/16x16/blue.gif" />\n                    </j:when>\n                    <j:when test="${action.result.pluginResult==\'FAILURE\'}">\n                      <img src="${rooturl}static/e59dfe28/images/16x16/red.gif" />\n                    </j:when>\n                    <j:otherwise>\n                      <img src="${rooturl}static/e59dfe28/images/16x16/yellow.gif" />\n                    </j:otherwise>\n                  </j:choose>\n                </td>\n                <td class="center">${action.result.numberOfAnnotations} </td>\n                <td class="center">${action.result.getNumberOfAnnotations(\'HIGH\')} </td>\n                <td class="center">${action.result.getNumberOfAnnotations(\'NORMAL\')} </td>\n                <td class="center">${action.result.getNumberOfAnnotations(\'LOW\')} </td>\n              </tr>\n            </j:forEach>\n          </table>\n        </div>\n      </j:if>\n\n\n      \x3c!-- clangScan Analysis --\x3e\n     <j:set var="clangScanAction" value=\'${it.getAction("jenkins.plugins.clangscanbuild.actions.ClangScanBuildAction")}\' />\n      <j:if test="${clangScanAction!=null}">\n        <div class="content">\n          <a href="${rooturl}${build.url}clangScanBuildBugs">\n            <h1>Clang Scan Static Analysis Results</h1>\n          </a>\n          <h2> Trend </h2>\n            <img lazymap="${rooturl}${project.url}clangScanBuildTrend/graph" alt="[Clang Scan Static Analysis Results trend chart]" src="${rooturl}${project.url}clangScanBuildTrend/graph" usemap="#map0" />\n          <h2> Result </h2>\n          <j:set var="summary" value="${clangScanAction.loadBugSummary()}" />\n          <p> There are ${summary.getBugCount()} clang Scan bugs </p>\n          <j:if test="${summary.getBugCount() !=0 }">\n          <table border="1px" class="pane">\n            <tr>\n              <th> </th>\n              <th>File</th>\n              <th>Bug Type</th>\n              <th>Category</th>\n              <th>Description</th>\n              <th>Details </th>\n            </tr>\n            <j:forEach var="clangBug" items="${summary.getBugs()}">\n              <j:choose>\n                <j:when test="${clangBug.isNewBug()}">\n                  <j:set var="isNew" value="new" />\n                </j:when>\n                <j:otherwise>\n                        <j:set var="isNew" value="" />\n                </j:otherwise>\n              </j:choose>\n              <tr>\n                <td>${isNew}</td>\n                <td>${clangBug.getSourceFile()}</td>\n                <td>${clangBug.getBugType()}</td>\n                <td>${clangBug.getBugCategory()}</td>\n                <td>${clangBug.getBugDescription()}</td>\n                <td>\n                  <a href="${rooturl}${build.url}/clangScanBuildBugs/browse/${clangBug.getReportFile()}#EndPath"> detail </a>\n                </td>\n              </tr>\n            </j:forEach>\n          </table>\n\n          </j:if>\n\n        </div>\n      </j:if>\n\n      \x3c!-- ARTIFACTS --\x3e\n      <j:set var="artifacts" value="${build.artifacts}" />\n      <j:if test="${artifacts!=null and artifacts.size()&gt;0}">\n        <div class="content">\n          <h1>Build Artifacts</h1>\n          <ul>\n            <j:forEach var="f" items="${artifacts}">\n              <li>\n                <a href="${rooturl}${build.url}artifact/${f}">${f}</a>\n              </li>\n            </j:forEach>\n          </ul>\n        </div>\n      </j:if>\n\n\x3c!-- MAVEN ARTIFACTS --\x3e\n      <j:set var="mbuilds" value="${build.moduleBuilds}" />\n      <j:if test="${mbuilds!=null}">\n        <div class="content">\n          <h1>Build Artifacts</h1>\n          <j:forEach var="m" items="${mbuilds}">\n            <h2>${m.key.displayName}</h2>\n            <j:forEach var="mvnbld" items="${m.value}">\n              <j:set var="artifacts" value="${mvnbld.artifacts}" />\n              <j:if test="${artifacts!=null and artifacts.size()&gt;0}">\n                <ul>\n                  <j:forEach var="f" items="${artifacts}">\n                    <li>\n                      <a href="${rooturl}${mvnbld.url}artifact/${f}">${f}</a>\n                    </li>\n                  </j:forEach>\n                </ul>\n              </j:if>\n            </j:forEach>\n          </j:forEach>\n          <br />\n        </div>\n      </j:if>\n    </body>\n  </html>\n</j:jelly>\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/image-20230417230207237.png",alt:"image-20230417230207237"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'<STYLE>\nBODY, TABLE, TD, TH, P {\n  font-family:Verdana,Helvetica,sans serif;\n  font-size:11px;\n  color:black;\n}\nh1 { color:black; }\nh2 { color:black; }\nh3 { color:black; }\nTD.bg1 { color:white; background-color:#0000C0; font-size:120% }\nTD.bg2 { color:white; background-color:#4040FF; font-size:110% }\nTD.bg3 { color:white; background-color:#8080FF; }\nTD.test_passed { color:blue; }\nTD.test_failed { color:red; }\nTD.console { font-family:Courier New; }\n</STYLE>\n<BODY>\n \n<TABLE>\n  <TR><TD align="right"><IMG SRC="${rooturl}static/e59dfe28/images/32x32/<%= (build.result == null || build.result.toString() == \'SUCCESS\') ? "blue.gif" : build.result.toString() == \'FAILURE\' ? \'red.gif\' : \'yellow.gif\' %>" />\n  </TD><TD valign="center"><B style="font-size: 200%;">BUILD ${build.result ?: \'SUCCESSFUL\'}</B></TD></TR>\n  <TR><TD>URL</TD><TD><A href="${rooturl}${build.url}">${rooturl}${build.url}</A></TD></TR>\n  <TR><TD>Project:</TD><TD>${project.name}</TD></TR>\n  <TR><TD>Date:</TD><TD>${it.timestampString}</TD></TR>\n  <TR><TD>Duration:</TD><TD>${build.durationString}</TD></TR>\n  <TR><TD>Cause:</TD><TD><% build.causes.each() { cause -> %> ${cause.shortDescription} <%  } %></TD></TR>\n</TABLE>\n<BR/>\n \n\x3c!-- CHANGE SET --\x3e\n<% def changeSets = build.changeSets\nif(changeSets != null) {\n    def hadChanges = false %>\n    <TABLE width="100%">\n    <TR><TD class="bg1" colspan="2"><B>CHANGES</B></TD></TR>\n \n<%  changeSets.each() { cs_list ->\n      cs_list.each() { cs ->\n          hadChanges = true %>\n        <TR>\n          <TD colspan="2" class="bg2">&nbsp;&nbsp;Revision <B><%= cs.metaClass.hasProperty(\'commitId\') ? cs.commitId : cs.metaClass.hasProperty(\'revision\') ? cs.revision :\n          cs.metaClass.hasProperty(\'changeNumber\') ? cs.changeNumber : "" %></B> by\n            <B><%= cs.author %>: </B>\n            <B>(${cs.msgAnnotated})</B>\n           </TD>\n        </TR>\n<%      cs.affectedFiles.each() { p -> %>\n        <TR>\n          <TD width="10%">&nbsp;&nbsp;${p.editType.name}</TD>\n          <TD>${p.path}</TD>\n        </TR>\n<%      }\n      }\n  }\n    if(!hadChanges) { %>\n        <TR><TD colspan="2">No Changes</TD></TR>\n<%  } %>\n  </TABLE>\n<BR/>\n<% } %>\n \n\x3c!-- ARTIFACTS --\x3e\n<% def artifacts = build.artifacts\nif(artifacts != null && artifacts.size() > 0) { %>\n  <TABLE width="100%">\n    <TR><TD class="bg1"><B>BUILD ARTIFACTS</B></TD></TR>\n    <TR>\n      <TD>\n<%      artifacts.each() { f -> %>\n          <li>\n            <a href="${rooturl}${build.url}artifact/${f}">${f}</a>\n          </li>\n<%      } %>\n      </TD>\n    </TR>\n  </TABLE>\n<BR/>\n<% } %>\n \n\x3c!-- MAVEN ARTIFACTS --\x3e\n<%\ntry {\n  def mbuilds = build.moduleBuilds\n  if(mbuilds != null) { %>\n  <TABLE width="100%">\n      <TR><TD class="bg1"><B>BUILD ARTIFACTS</B></TD></TR>\n<%\n    try {\n        mbuilds.each() { m -> %>\n        <TR><TD class="bg2"><B>${m.key.displayName}</B></TD></TR>\n<%      m.value.each() { mvnbld ->\n            def artifactz = mvnbld.artifacts\n            if(artifactz != null && artifactz.size() > 0) { %>\n      <TR>\n        <TD>\n<%              artifactz.each() { f -> %>\n            <li>\n              <a href="${rooturl}${mvnbld.url}artifact/${f}">${f}</a>\n            </li>\n<%              } %>\n        </TD>\n      </TR>\n<%          }\n        }\n       }\n    } catch(e) {\n    // we don\'t do anything\n    }  %>\n  </TABLE>\n<BR/>\n<% }\n}catch(e) {\n    // we don\'t do anything\n}\n%>\n \n\x3c!-- JUnit TEMPLATE --\x3e\n \n<% def junitResultList = it.JUnitTestResult\ntry {\n def cucumberTestResultAction = it.getAction("org.jenkinsci.plugins.cucumber.jsontestsupport.CucumberTestResultAction")\n junitResultList.add(cucumberTestResultAction.getResult())\n} catch(e) {\n        //cucumberTestResultAction not exist in this build\n}\nif (junitResultList.size() > 0) { %>\n <TABLE width="100%">\n <TR><TD class="bg1" colspan="2"><B>${junitResultList.first().displayName}</B></TD></TR>\n <% junitResultList.each{\n  junitResult -> %>\n     <% junitResult.getChildren().each { packageResult -> %>\n        <TR><TD class="bg2" colspan="2"> Name: ${packageResult.getName()} Failed: ${packageResult.getFailCount()} test(s), Passed: ${packageResult.getPassCount()} test(s), Skipped: ${packageResult.getSkipCount()} test(s), Total: ${packageResult.getPassCount()+packageResult.getFailCount()+packageResult.getSkipCount()} test(s)</TD></TR>\n        <% packageResult.getFailedTests().each{ failed_test -> %>\n          <TR bgcolor="white"><TD class="test_failed" colspan="2"><B><li>Failed: ${failed_test.getFullName()} </li></B></TD></TR>\n        <% }\n      }\n } %>\n </TABLE>\n <BR/>\n<%\n} %>\n \n\x3c!-- CONSOLE OUTPUT --\x3e\n<% if(build.result==hudson.model.Result.FAILURE) { %>\n<TABLE width="100%" cellpadding="0" cellspacing="0">\n<TR><TD class="bg1"><B>CONSOLE OUTPUT</B></TD></TR>\n<%  build.getLog(100).each() { line -> %>\n    <TR><TD class="console">${org.apache.commons.lang.StringEscapeUtils.escapeHtml(line)}</TD></TR>\n<%  } %>\n</TABLE>\n<BR/>\n<% } %>\n \n</BODY>\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/image-20230417005050936.png",alt:"image-20230417005050936"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>  \n<html>  \n<head>  \n<meta charset="UTF-8">  \n<title>${ENV, var="JOB_NAME"}-\u7b2c${BUILD_NUMBER}\u6b21\u6784\u5efa\u65e5\u5fd7</title>  \n</head>  \n  \n<body leftmargin="8" marginwidth="0" topmargin="8" marginheight="4"  \n    offset="0">  \n    <table width="95%" cellpadding="0" cellspacing="0"  style="font-size: 11pt; font-family: Tahoma, Arial, Helvetica, sans-serif">  \n        <tr>  \n            <td>\u5404\u4f4d\u540c\u4e8b\uff0c\u5927\u5bb6\u597d\uff0c\u4ee5\u4e0b\u4e3a${PROJECT_NAME }\u9879\u76ee\u6784\u5efa\u4fe1\u606f</td>  \n        </tr>  \n        <tr>  \n            <td><br />  \n            <b><font color="#0B610B">\u6784\u5efa\u4fe1\u606f</font></b>  \n            <hr size="2" width="100%" align="center" /></td>  \n        </tr>  \n        <tr>  \n            <td>  \n                <ul>  \n                    <li>\u9879\u76ee\u540d\u79f0 \uff1a ${PROJECT_NAME}</li>  \n                    <li>\u6784\u5efa\u7f16\u53f7 \uff1a \u7b2c${BUILD_NUMBER}\u6b21\u6784\u5efa</li>  \n                    <li>\u89e6\u53d1\u539f\u56e0\uff1a ${CAUSE}</li>  \n                    <li>\u6784\u5efa\u72b6\u6001\uff1a ${BUILD_STATUS}</li>  \n                    <li>\u6784\u5efa\u65e5\u5fd7\uff1a <a href="${BUILD_URL}console">${BUILD_URL}console</a></li>  \n                    <li>\u6784\u5efa  Url \uff1a <a href="${BUILD_URL}">${BUILD_URL}</a></li>  \n                    <li>\u5de5\u4f5c\u76ee\u5f55 \uff1a <a href="${PROJECT_URL}ws">${PROJECT_URL}ws</a></li>  \n                    <li>\u9879\u76ee  Url \uff1a <a href="${PROJECT_URL}">${PROJECT_URL}</a></li>  \n                </ul>  \n            </td>  \n        </tr>  \n        <tr>\n            <td><b><font color="#0B610B">\u5386\u53f2\u53d8\u66f4\u8bb0\u5f55:</font></b>\n            <hr size="2" width="100%" align="center" /></td>\n        </tr>\n        <tr>\n            <td>\n                ${CHANGES_SINCE_LAST_SUCCESS,reverse=true, format="Changes for Build #%n:<br />%c<br />",showPaths=true,changesFormat="<pre>[%a]<br />%m</pre>",pathFormat="&nbsp;&nbsp;&nbsp;&nbsp;%p"}\n            </td>\n        </tr>\n    </table>  \n</body>  \n</html>\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u90e8\u5206\u5185\u5bb9\u6765\u6e90\u4e8e\u7f51\u7edc\u3002")))}d.isMDXComponent=!0}}]);