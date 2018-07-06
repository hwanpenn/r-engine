import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

const Search = Input.Search;

const columns1 = [{
    title: 'KEY',
    dataIndex: 'name',

}, {
    title: '名称',
    dataIndex: 'user',
}];
const columns2 = [{
    title: '字段名',
    dataIndex: 'name',

}, {
    title: '标题',
    dataIndex: 'user',
},{
    title: '数据类型',
    dataIndex: 'user',
}
// ,{
//     title: '操作二',
//     key: 'operation',
//     fixed: 'right',
//     width: 100,
//     render: () => <Button type="dashed" size="small">操作</Button>,
// }
];

const data1 = [{
    key: '1',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '2',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '3',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}];
const data2 = [{
    key: '1',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '2',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '3',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '3',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}, {
    key: '3',
    name: 'ironman',
    load: 'com.bstek.entity.Customer',
    user: '钢铁侠',
}];
const butAndSerch1 = <Row>
    <Col span={8}><Search
        placeholder="input"
        onSearch={value => console.log(value)}
        enterButton
    /></Col>
    <Col span={16} className="MyAlign"><Button>增加</Button><Button>修改</Button><Button style={{marginRight: 15}}>删除</Button>
        {/*<Button type="primary">保存类库</Button>*/}
    </Col>
</Row>;
    const butAndSerch2 = <Row>
    <Col span={8}><Search
        placeholder="input"
        onSearch={value => console.log(value)}
        enterButton
    /></Col>
    <Col span={16} className="MyAlign"><Button>增加</Button><Button>修改</Button><Button style={{marginRight: 15}}>删除</Button>
        {/*<Button type="primary">保存类库</Button>*/}
    </Col>
</Row>;
export default class Clk extends Component {
    render() {

        return (
            <div>
                <Row>
                    <Col span={12}><div style={{paddingRight:10}}>库名：<Table
                        columns={columns1}
                        dataSource={data1}
                        bordered
                        title={() => butAndSerch1}
                        // footer={() => 'Footer'}
                    /></div></Col>
                    <Col span={12}><div style={{paddingLeft:10}}>变量名：<Table
                        columns={columns2}
                        dataSource={data2}
                        bordered
                        title={() => butAndSerch2}
                        // footer={() => 'Footer'}
                    /></div></Col>
                </Row>


            </div>
        );
    }
}