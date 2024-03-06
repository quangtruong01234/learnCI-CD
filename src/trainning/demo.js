import { createStore } from 'redux';
import {status, sort} from './action/index';
import myReducer from './reducers/index';

const store  = createStore(myReducer);
console.log('Default: ',store.getState());
//Thực hiện công việc thay đổi satus

store.dispatch(status());
console.log('TOGGLE_STATUS',store.getState())
//Thực hiện công việc sắp xếp name từ Z-a
store.dispatch(sort({
    by: 'name',
    value: -1,
}));
console.log('SORT: ',store.getState());



