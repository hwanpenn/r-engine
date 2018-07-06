import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Search = Input.Search;

const columns = [{
    title: '名称',
    dataIndex: 'name',

}, {
    title: '激活时间',
    className: 'column-money',
    dataIndex: 'time',
}, {
    title: '用户',
    dataIndex: 'user',
}, {
    title: '激活操作',
    dataIndex: '',
    width: 100,
    render: () => <Button type="dashed" size="small">激活</Button>,
    // render: <Button type="primary">操作</Button>,
},{
    title: '暂停操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <Button type="dashed" size="small"><Link to="/rule/home/guiz/xmzy/jueceji/item">操作</Link></Button>,
}];

const data = [{
    key: '1',
    name: 'hwanpenn.js',
    time: '9999-99-99 99:99',
    user: '刘波波',
}, {
    key: '2',
    name: 'hwanpenn.js',
    time: '9999-99-99 99:99',
    user: '刘波波',
}, {
    key: '3',
    name: 'hwanpenn.js',
    time: '9999-99-99 99:99',
    user: '刘波波',
}];
const butAndSerch = <Row>
    <Col span={6}><Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
    /></Col>
    <Col span={18} className="MyAlign"><Button>增加</Button><Button>修改</Button><Button style={{marginRight: 15}}>删除</Button><Button type="primary">保存集</Button></Col>
</Row>;
export default class Pfk extends Component {
    render() {

        return (
            <div>

                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => butAndSerch}
                    // footer={() => 'Footer'}
                />

            </div>
        );
    }
}