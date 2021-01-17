import React, {useEffect as UseEffect, useState as UseState} from 'react';
import { connect, useDispatch as UseDispatch, useSelector as UseSelector} from 'react-redux';
import { useHistory as UseHistory, useLocation as UseLocation, Link } from "react-router-dom";

import { learnersDetailAction } from '../redux/actions/learners-action';

const LearnersDetail = (props) => {

    let location = UseLocation();
    let history = UseHistory();
    let dispatch = UseDispatch();
    let id = history.location.pathname.split('/')[history.location.pathname.split('/').length - 1];
    const [detail, setDetail] = UseState({});

    let stateDetail = UseSelector((state) => {
        console.log(state.ListLearners.detail);
        return state.ListLearners.detail
    });
    let list = UseSelector((state) => {
        return state.ListLearners.list
    });

    UseEffect(() => {

        dispatch(learnersDetailAction(id));

        if(list.length === 0) {
            history.push('/learners-list');
        }

    }, []);
    
    return (
        <div className="container">
            {/* <button> <Link to="/learners-list"> Back </Link> </button> */}
            

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> Leaners Detail </h5>
                    <p className="card-text"> 
                        {stateDetail.name}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {stateDetail.email} </li>
                    <li className="list-group-item"> {stateDetail.phone} </li>
                    <li className="list-group-item"> {stateDetail.website} </li>
                </ul>
                <div className="card-body">
                    <Link className="card-link" to="/learners-list"> Back </Link>
                </div>
            </div>

        </div>
    )

}

function mapStateToProps(state) {
    return {
        data: state.list
    }
}

export default LearnersDetail;



