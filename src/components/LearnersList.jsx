import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Table } from 'antd';

import { listLearners } from '../redux/actions/learners-action';

class LearnersList extends React.Component {

  state = {
      data: [],
      token: null
  }

  viewDetail = (e) => {

    console.log(e, this.props);

  }

  componentDidMount() {
    this.props.listLearners();
    this.setState({
        data: [...this.props.list]
    });
    this.getToken();
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        data: [...nextProps.list]
      })
  }

  getToken = () => {
    let token = localStorage.getItem('token');
    this.setState({
      token: JSON.parse(token)
    })
  }
  
  render() {

    const columns = [
      {
          title: 'Sr No',
          render: (text) => <div>{text.id}</div>
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: "View",
        render: (text) => {
          if(this.state.token) {
            return (
              <Link to={`/learners-list/Detail/${text.id}`} >
                <div onClick={(e) => this.viewDetail(e)}>
                  View
                </div>
              </Link>
            )
          } else {
           return ( 
            <div>
                View
            </div>
            )
          }
          
        }
      }
    ];

    return ( 
      <div>
          <button> 
            {this.state.token ? <Link to="/login"> Log out </Link> : <Link to="/login"> Login </Link> }
             
          </button>
          <Table columns={columns} dataSource={this.state.data} pagination={false} />
      </div>
     );
  }
}

function mapStateToprops(state) {
  return {
    list: state.ListLearners.list
  }
}

export default connect(mapStateToprops, { listLearners })(LearnersList);




