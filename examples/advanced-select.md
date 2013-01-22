# 多层 select

- order: 5

----

<link rel="stylesheet" href="../src/select.css" />

<a href="#" id="example">请选择</a>

<script>
seajs.use(['$', 'advanced-select'], function($, AdvancedSelect) {
    var s = new AdvancedSelect({
        trigger: '#example',
        //disabled: true,
        model: [
            {
                value:'all',
                text:'所有交易',
                defaultSelected: true
            },
            {
                value:'taobao',
                text:'淘宝购物',
                selected: true
            },
            {
                value:'alipay',
                text:'支付宝',
                options: [
                    {
                        value: 'bizIn',
                        text: '付款',
                        options: [
                            {
                                value: 'test',
                                text: 'test'
                            },
                            {
                                value: 'test2',
                                text: 'test2',
                                disabled: true
                            },
                            {
                                value: 'test3',
                                text: 'test3'
                            }
                        ]
                    },
                    {
                        value: 'bizOut',
                        text: '收款'
                    }
                ]
            },
            {
                value: 'cutom',
                text: '自定义分类',
                disabled: true,
                options: [
                    {
                        value: 'huoshifei',
                        text: '伙食费'
                    },
                    {
                        value: 'manage',
                        text: '管理分离'
                    }
                ]
            }
        ]
    }).render();
});
</script>
