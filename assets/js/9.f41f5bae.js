(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql","aria-hidden":"true"}},[e._v("#")]),e._v(" PostgreSQL")]),t("h3",{attrs:{id:"本地连接："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地连接：","aria-hidden":"true"}},[e._v("#")]),e._v(" 本地连接：")]),t("p",[t("code",[e._v("psql")]),e._v("然后输入密码")]),t("h3",{attrs:{id:"在本地连接heroku端的数据库："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在本地连接heroku端的数据库：","aria-hidden":"true"}},[e._v("#")]),e._v(" 在本地连接Heroku端的数据库：")]),t("p",[e._v("首先在命令行输入："),t("code",[e._v("heroku run echo $JDBC_DATABASE_URL")]),e._v("得到云端的数据库URL，然后在本地环境变量添加此URL。")]),t("h3",{attrs:{id:"查看云端数据库："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看云端数据库：","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看云端数据库：")]),t("p",[t("code",[e._v("heroku pg:psql")])]),t("h3",{attrs:{id:"关于本地数据库和远程数据库的pull和push："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于本地数据库和远程数据库的pull和push：","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于本地数据库和远程数据库的pull和push：")]),t("p",[e._v("待研究调查")]),t("h3",{attrs:{id:"控制台命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制台命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 控制台命令:")]),t("p",[e._v("除了前面已经用到的\\password命令（设置密码）和\\q命令（退出）以外，控制台还提供一系列其他命令：")]),t("p",[e._v("\\h：查看SQL命令的解释，比如\\h select。")]),t("p",[e._v("?：查看psql命令列表。")]),t("p",[e._v("\\l：列出所有数据库。")]),t("p",[e._v("\\c [database_name]：连接其他数据库。")]),t("p",[e._v("\\d：列出当前数据库的所有表格。")]),t("p",[e._v("\\d [table_name]：列出某一张表格的结构。")]),t("p",[e._v("\\du：列出所有用户。")]),t("p",[e._v("\\e：打开文本编辑器。")]),t("p",[e._v("\\conninfo：列出当前数据库和连接的信息。")]),t("h3",{attrs:{id:"postgres自增初始值的设定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgres自增初始值的设定","aria-hidden":"true"}},[e._v("#")]),e._v(" postgres自增初始值的设定:")]),t("p",[e._v("在实际开发中会有这样的需求，想要自己设置表中自增字段的初始值。")]),t("p",[e._v("比如：在u_checkobj表中有一个自增字段id,我们知道，插入数据后，默认是从1开始自增的。但是假如，现在有一个需求，是要求id从1000开始插入，那么该怎么实现呢？只需要执行以下命令：")]),t("p",[t("code",[e._v("select setval(' u_checkobj_oid_seq',1000,false);")])]),t("p",[e._v("执行成功后，进行测试，插入一条数据后，会发现id的值已经符合需求了:从1000开始递增了。")])])}],!1,null,null,null);a.default=r.exports}}]);