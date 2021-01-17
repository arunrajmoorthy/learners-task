import { LIST_LEARNERS, DETAIL_LEARNERS } from '../types/types'

const initialState = {
    detail: {},
    list: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
          }
    ]
};


export default function ListLearners(state=initialState, action) {
    switch(action.type) {

        case LIST_LEARNERS: 
            return {
                list: [...action.payload],
                detail: {}
            };

        case DETAIL_LEARNERS:
            return {
                list: [...state.list],
                detail: state.list.filter((item) => {
                    return item.id === Number(action.payload)
                })[0]
            } 
        
        default:
            return {
                list: [],
                detail: {}
            }
    }
}




