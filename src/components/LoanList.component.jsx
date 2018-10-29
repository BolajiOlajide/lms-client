import React, { PureComponent } from 'react';

// components
import { Table, Button } from 'antd';

// utils
import dummyData from '../utils/data.json';
import loanColumns from '../utils/loanColumns';


class LoanList extends PureComponent {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <section className="loanlist-container">
        <p>Loanlist</p>
        {/* <Table rowSelection={rowSelection} columns={loanColumns} dataSource={dummyData} /> */}
      </section>
    )
  }
}

export default LoanList;
