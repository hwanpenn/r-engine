import { Input } from 'antd';
import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
// import '../../../node_modules/codemirror/lib/codemirror.css';
import '../../css/App1.css';
const { TextArea } = Input;




export default class Jiaoben extends Component {
    constructor(props) {
        super(props);
        this.state = {context: '7777777777\n7777777777\n888888888888888\n99999999999'};
        console.log(this.state.context)
    }
    // componentDidMount() {
    //     () => this.tick()
    // }
    // tick() {
    //     this.setState({
    //         context: '初始化'
    //     });
    //     console.log(this.state.context)
    // }
    onChange(newCode) {
        // this.setState({
        //     context: '新输入',
        // });

        // this.state = {context: newCode};
        console.log(newCode)
        // console.log(this.state.context);
    }

    render() {
        const options = {
            lineNumbers: true,
        };
        return (
            <div>
                <p>输入脚本：</p>
                <div className="fuwenben">

                    {/*<TextArea rows={4} />*/}
                    <CodeMirror className="ReactCodeMirror" options={options} value={this.state.context} onChange={this.onChange}/></div>

                {/*<CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />*/}
            </div>
        );
    }
}