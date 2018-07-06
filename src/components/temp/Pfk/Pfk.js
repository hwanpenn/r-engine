import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import {getUserInfo} from "actions/userInfo1";
import {connect} from 'react-redux';

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
    render: () => <Button type="dashed" size="small"><Link to="/rule/home/guiz/xmzy/pfk/item">操作</Link></Button>,
}];
const data =
    [{
    key: '1',
    name: 'card-demo.sc',
    time: '2017-12-29 15:36',
    user: '刘波波',
}, {
    key: '2',
    name: 'card-demo.sc',
    time: '2017-12-29 15:36',
    user: '刘波波',
}, {
    key: '3',
    name: 'card-demo.sc',
    time: '2017-12-29 15:36',
    user: '刘波波',
}];
const butAndSerch = <Row>
    <Col span={6}><Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
    /></Col>
    <Col span={18} className="MyAlign"><Button>增加</Button><Button>修改</Button><Button style={{marginRight: 15}}>删除</Button><Button type="primary">保存卡</Button></Col>
</Row>;

class Pfk extends Component {
    constructor(props) {
        super(props);


        console.log('构造内部UserInfo---constructor：'+JSON.stringify(this.props.userInfo1.userInfo.array));
    }
    componentDidMount() {
        // this.props.getUserInfo();
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo1;
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        // console.log('Grade---DidMount：'+userInfo.name);
        this.props.getUserInfo();
        console.log('实体DOM完成内部UserInfo---DidMount：'+JSON.stringify(this.props.userInfo1.userInfo.array));
        // console.log('实体DOM完成内部UserInfo---DidMount：'+JSON.stringify(this.props.userInfo1.userInfo.array));
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('是否应该渲染内部UserInfo---DidMount：'+JSON.stringify(this.props.userInfo1.userInfo.array));
        var result = false;
        if(this.props.userInfo1.userInfo.array === undefined||this.props.userInfo1.userInfo.array === ''||
            this.props.userInfo1.userInfo.array === null||this.props.userInfo1.userInfo.array === nextProps){
            result = true;
        }
        // if(JSON.stringify(this.props.userInfo1.userInfo.array)===undefined){
        //     result= true;
        // }
        return result;
        // return this.props.userInfo1.userInfo.array === undefined;
    }
    render() {
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        // console.log('Grade---render:'+userInfo.name+'Grade---render:'+userInfo.time+'Grade---render:'+userInfo.user+'Grade---render:'+userInfo.key);
        // this.props.getUserInfo();
        console.log('渲染内部UserInfo---render：'+JSON.stringify(this.props.userInfo1.userInfo.array));
        // console.log('渲染内部UserInfo---render：'+JSON.stringify(userInfo.array));
        const data1=this.props.userInfo1.userInfo.array;
        return (
            <div>

                <Table
                    columns={columns}
                    // dataSource={this.props.userInfo1.userInfo.array}
                    dataSource={data1}
                    bordered
                    title={() => butAndSerch}
                    // footer={() => 'Footer'}
                />

            </div>
        );
    }
}
export default connect((state) => ({userInfo1: state.userInfo}), {getUserInfo})(Pfk);