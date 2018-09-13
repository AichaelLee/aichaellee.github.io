(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{158:function(e,r,a){"use strict";a.r(r);var t=a(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"rabbitmq-介绍："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-介绍：","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 介绍：")]),a("h3",{attrs:{id:"消息队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列","aria-hidden":"true"}},[e._v("#")]),e._v(" 消息队列")]),a("p",[e._v("消息（Message）是指在应用间传送的数据。消息可以非常简单，比如只包含文本字符串，也可以更复杂，可能包含嵌入对象。")]),a("p",[e._v("消息队列（Message Queue）是一种应用间的通信方式，消息发送后可以立即返回，由消息系统来确保消息的可靠传递。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。")]),a("h3",{attrs:{id:"为何用消息队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何用消息队列","aria-hidden":"true"}},[e._v("#")]),e._v(" 为何用消息队列")]),a("p",[e._v("从上面的描述中可以看出消息队列是一种应用间的异步协作机制，那什么时候需要使用 MQ 呢？")]),a("p",[e._v("以常见的订单系统为例，用户点击【下单】按钮之后的业务逻辑可能包括：扣减库存、生成相应单据、发红包、发短信通知。在业务发展初期这些逻辑可能放在一起同步执行，随着业务的发展订单量增长，需要提升系统服务的性能，这时可以将一些不需要立即生效的操作拆分出来异步执行，比如发放红包、发短信通知等。这种场景下就可以用 MQ ，在下单的主流程（比如扣减库存、生成相应单据）完成之后发送一条消息到 MQ 让主流程快速完结，而由另外的单独线程拉取MQ的消息（或者由 MQ 推送消息），当发现 MQ 中有发红包或发短信之类的消息时，执行相应的业务逻辑。")]),a("p",[e._v("以上是用于业务解耦的情况，其它常见场景包括最终一致性、广播、错峰流控等等。")]),a("h3",{attrs:{id:"rabbitmq-中的概念模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-中的概念模型","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 中的概念模型")]),a("p",[e._v("消息模型")]),a("p",[e._v("所有 MQ 产品从模型抽象上来说都是一样的过程：\n消费者（consumer）订阅某个队列。生产者（producer）创建消息，然后发布到队列（queue）中，最后将消息发送到监听的消费者。")]),a("h3",{attrs:{id:"在java中使用rabbitmq的异步web-worker模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在java中使用rabbitmq的异步web-worker模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 在java中使用RabbitMQ的异步web-worker模型")]),a("p",[e._v("通过worker进程异步处理长时间运行的web请求是heroku的最佳实践，关于这种架构的深入理解，参考：https://devcenter.heroku.com/articles/background-jobs-queueing")]),a("p",[e._v("Background job是构建真正可扩展的web应用的关键，因为它把所有的耗时和计算密集型的任务从web层转移到了独立于用户请求/响应的生命周期的后台进程中。\nHeroku中推荐避免运行时间超过500ms的web请求，如果发现有需要1秒甚至数秒才能完成的web请求，就要考虑使用后台作业。")]),a("h2",{attrs:{id:"概览："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览：","aria-hidden":"true"}},[e._v("#")]),e._v(" 概览：")]),a("p",[e._v("从远程API获取数据，读取RSS源，调整图像大小以及将数据上传到S3都是应作为后台作业处理的任务的示例。请求作业的Web进程安排它进行处理并立即返回给客户端。然后，客户端可以轮询更新以查看他们的工作何时完成。\n考虑到这个基于Web的RSS阅读器的例子，像这样的应用程序都会有一个表单，用户可以提交一个新的源网址来阅读。延迟后，用户将被带到一个页面，在那里他们可以看到源的内容。这是一个简单但不可扩展的方法，在web进程中直接从第三方网站中检索RSS请求。")]),a("p",[e._v("从外部获取数据有时会在几百毫秒内完成，但有时也可能需要几秒钟的时间。如果你访问的源的服务器宕掉了，web进程可能会挂起30秒甚至更长时间，直到请求超时。")]),a("p",[e._v("在此期间你的应用程序进程将阻止其处理其他请求，并导致非常差的用户体验。这可能不会在低负载下表现出来，但是当您的应用程序有多个并发用户时，您会发现响应时间变得越来越不一致，并且可能会遇到请求超时（超过30秒）或其他错误状态。这就导致你的应用程序将无法很好地扩展。")]),a("h2",{attrs:{id:"方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法：","aria-hidden":"true"}},[e._v("#")]),e._v(" 方法：")]),a("p",[e._v("一个更可预测和可扩展的架构是把这些高延迟或需要长时间运行的工作放在一个独立于Web层的进程中运行，并立即响应用户的请求，并指出工作进度。\n在这里，一个或多个独立于Web进程并且不提供Web请求的后台服务将逐个从其工作队列中读取项目，并异步执行该工作。执行完后的结果将被放置在本地存储（DB，Memcached等）。")]),a("p",[e._v("让后台的worker处理需要长时间运行的任务有很多好处，它避免了阻止你的web dyno处理其他请求，保持你的应用更快。你现在可以独立地监视，控制并且扩展你的worker进程以响应站点负载。当所有的请求都会被立即响应后，用户体验也有极大地提升，即使只是表示当前的工作进度。")]),a("h2",{attrs:{id:"进程模型："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程模型：","aria-hidden":"true"}},[e._v("#")]),e._v(" 进程模型：")]),a("p",[e._v("Heroku 允许你指定特定于应用程序的进程模型，你可以使用后台的worker检索和处理工作队列中的任务，你可以在Procfile中说明用于处理后台作业的worker进程类型")]),a("h2",{attrs:{id:"实现："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现：","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现：")]),a("p",[e._v("后台处理只是一个概念，有很多类库和服务都能在应用程序中实现类似的后台处理任务，主流的工具包括数据库支持的任务框架和消息队列。而在java中实现这种web-worker异步通信模型的方法是使用RabbitMQ。\n点击这里参考Heroku中backgroud-job queue\n点击这里参考Heroku中使用RabbitMQ实现web-worker模型的异步通信\nhttps://devcenter.heroku.com/articles/asynchronous-web-worker-model-using-rabbitmq-in-java\nhttps://devcenter.heroku.com/articles/background-jobs-queueing")])])}],!1,null,null,null);r.default=s.exports}}]);