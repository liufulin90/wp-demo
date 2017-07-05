<?php 
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json; charset=utf-8');

/*
[
    {
        "id": "853",
        "typeid": "34",
        "title": "仿百度百科右侧导航代码jquery插件",
        "description": "仿百度百科右侧导航代码jquery插件，这个仿百科右侧导航js代码，在很久以前就像搞个用了，这个右侧导航特别适合长篇文档使用，花了半天时间写了这个仿百科导航插件，不过和百度百",
        "litpic": "http://img4.duitang.com/uploads/item/201112/20/20111220192402_mBuZj.thumb.700_0.jpg",
        "body": ""
    }
]
*/
$ret = array(
		'state' => 1,
		'data' => array(
				'http://img15.3lian.com/2015/h1/280/d/1.jpg',
				'http://img15.3lian.com/2015/h1/280/d/5.jpg',
				'http://img15.3lian.com/2015/h1/280/d/3.jpg'
				)
		);
echo json_encode($ret);
exit();
?>
