这个项目是结合webpack来做的。具体的运行方法如下：
 1.需要确保安装好node,查看是否安装，在命令行中输入:node -v,node自带npm,后面的一系列都需要使用命令npm,当然也可以使用淘宝镜像，cnpm。具体的镜像的安装方法：npm install cnpm -g。
 2、项目的结构没有自己全部手工搭建，而是借助了vue-cli脚手架工具。这个也要确保安装上了,安装方法：cnpm install vue-cli -g  全局安装
 
 3、开始搭建项目： vue init webpack-simple 文件名
 4、cd 文件名
 5、cnpm install   安装依赖
 6、npm run dev  运行项目
 3/4/5/6是常规的运行vue项目，而这个还需要你手动去安装 cnpm install vuex -D 和  cnpm install babel-preset-stage-3 -D;
 7、运行的时候看还缺什么依赖没有的，就依次的安装就好了，比如如果还想使用bootstrap的样式之类的话，就还需要安装bootstrap,style-loader;
   注意：代码中使用vuex用了两种方法：一个是直接注入到根实例当中，也就是new Vue({..})这里面儿；另外一个就是使用vuex提供的mapState函数，把state直接映射到组件当中。两种我都有写，不过其中一种被我注释起来了。注意运行的时候修改一下就ok了。
