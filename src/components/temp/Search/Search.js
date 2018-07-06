import React, {Component} from 'react';
import { Input } from 'antd';

const Search = Input.Search;
class Search1 extends Component {
    render() {

        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 189 ,marginLeft: 6,marginTop: 10}}
                />

            </div>
        );
    }
}

export default Search1;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);
