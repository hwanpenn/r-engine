import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/3024-day.css';
import '../../../../../../../css/App1.css';
import {connect} from 'react-redux';
import {setScript} from "actions/script";
import { Row, Col } from 'antd';
import { Button } from 'antd';

class Jiaoben extends Component {
    constructor(props) {
        super(props);
        this.state = {context: 'function findSequence(goal) {\n' +
        '  function find(start, history) {\n' +
        '    if (start == goal)\n' +
        '      return history;\n' +
        '    else if (start > goal)\n' +
        '      return null;\n' +
        '    else\n' +
        '      return find(start + 5, "(" + history + " + 5)") ||\n' +
        '             find(start * 3, "(" + history + " * 3)");\n' +
        '  }\n' +
        '  return find(1, "1");\n' +
        '}'};
        console.log(this.state.context)
    }
    onChange(newCode) {
        // console.log(newCode);
        // this.props.setScript(newCode);
        localStorage.setItem('script',newCode)
    }

    render() {
        const options = {
            lineNumbers: true,
            // theme: 'cm-s-3024-day',
            mode: {name: "text/x-mysql"},
            extraKeys: {"Ctrl": "autocomplete"},   //自动提示配置
            theme: "blackboard"                  //选中的theme
            // theme: "3024-day"                  //选中的theme
            // theme: cm-s-3024-day,
        };
        return (
            <div>
                <Row>
                    <Col span={4}><p>输入脚本：</p></Col>
                    <Col span={18}></Col>
                    <Col span={2} ><Button type="primary" onClick={()=>this.props.setScript()}>提交</Button></Col>
                </Row>

                <div className="fuwenben">
                    <CodeMirror className="ReactCodeMirror" options={options} value={this.props.script.script} onChange={()=>this.onChange}/></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        script: state.script
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setScript: (params) => {
            dispatch(setScript(params))
        }
    }
};
const JiaobenTemp = connect(mapStateToProps, mapDispatchToProps)(Jiaoben);
export default JiaobenTemp;