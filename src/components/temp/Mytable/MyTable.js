import React, {Component} from 'react';
import { Table } from 'antd';
import { Row, Col,Icon } from 'antd';
import { Modal, Button } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const columns1 = [{
    title: '名称',
    dataIndex: 'name',

}, {
    title: '类路径',
    className: 'column-money',
    dataIndex: 'load',
}, {
    title: '用户',
    dataIndex: 'user',
}, {
    title: '操作一',
    dataIndex: '',
    width: 100,
    render: () => <Button type="dashed" size="small">操作</Button>,
    // render: <Button type="primary">操作</Button>,
}];

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
const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    // if (index === 4) {
    //     obj.props.colSpan = 0;
    // }
    return obj;
};
// var shuXin = ;
const columns = [
//     {
//     title: '属性',
//     dataIndex: 'name',
//     render: (text, row, index) => {
//         if (index == 0) {
//             return <a href="#">{text}</a>;
//         }
//         return {
//             children: <a href="#">{text}</a>,
//             props: {
//                 colSpan: 5,
//             },
//         };
//     },
// },
    {
        title: '属性',
        colSpan: 1,
        dataIndex: 'name',
        render: (value, row, index) => {
            const obj = {
                children: <Row>
                    <Col span={18}>{value}</Col>
                    <Col span={3}><Icon type="minus-circle-o" /></Col>
                    <Col span={3}><Icon type="plus-circle-o"  /></Col>
                </Row>,
                props: {},
            };
            if (index === 0) {
                obj.props.rowSpan = 3;
            }
            // These two are merged into above cell
            if (index === 1) {
                obj.props.rowSpan = 0;
            }
            if (index === 2) {
                obj.props.colSpan = 0;
            }
            if (index === 3) {
                obj.props.rowSpan = 3;
            }
            // These two are merged into above cell
            if (index === 4) {
                obj.props.rowSpan = 0;
            }
            if (index === 5) {
                obj.props.rowSpan = 0;
            }
            if (index === 6) {
                obj.props.colSpan = 1;
            }
            return obj;
        },
    },
    {
        title: '条件',
        colSpan: 1,
        dataIndex: 'tel',
        render: (value, row, index) => {
            const obj = {
                children: <Row>
                    <Col span={18}>{value}</Col>
                    <Col span={3}><Icon type="minus-circle-o" /></Col>
                    <Col span={3}><Icon type="plus-circle-o" onClick={showModal1(visible)} /></Col>
                </Row>,
                props: {},
            };
            // if (index === 2) {
            //     obj.props.rowSpan = 2;
            // }
            // // These two are merged into above cell
            // if (index === 3) {
            //     obj.props.rowSpan = 0;
            // }
            // if (index === 4) {
            //     obj.props.colSpan = 0;
            // }
            return obj;
        },
    },
    {
    title: '分值',
    dataIndex: 'age',
    render: renderContent,
}
// , {
//     title: 'Phone',
//     colSpan: 0,
//     dataIndex: 'phone',
//     render: renderContent,
// }
, {
    title: '描述',
    dataIndex: 'address',
    render: renderContent,
}
];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
}, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
}, {
    key: '6',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
}, {
    key: '7',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
}];
const visible = {
    visible: false,
};
function showModal1(visible) {

    visible = true;
    console.log(visible);
    // return visible;
}

// ReactDOM.render(<Table columns={columns} dataSource={data} bordered />
//     , mountNode);
export default class MyTable extends Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {

        return (
            <div>
                <Row>
                    {/*<Col span={6}><Search*/}
                        {/*placeholder="input search text"*/}
                        {/*onSearch={value => console.log(value)}*/}
                        {/*enterButton*/}
                    {/*/></Col>*/}
                    <Col span={24} className="MyAlign1"><Button style={{marginRight: 15}}>+属性</Button><Button type="primary" style={{marginRight: 5}}>保存</Button></Col>
                </Row>
                <Table columns={columns} dataSource={data} bordered />
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal width={830}
                    title="编辑规则"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/*<p>Some contents...</p>*/}
                    {/*<p>Some contents...</p>*/}
                    {/*<p>Some contents...</p>*/}
                    <Table
                        columns={columns1}
                        dataSource={data1}
                        bordered
                        // title={() => butAndSerch}
                        // footer={() => 'Footer'}
                    />
                </Modal>
            </div>
        );
    }
}



// class App extends React.Component {
//
//     render() {
//         return (
//             <div>
//
//
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App />, mountNode);