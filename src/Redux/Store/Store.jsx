import {createStore} from 'redux'
import reducer from '../Reducer' 
const initValue={
    'First':0,
    'Second':10,
    'Third':20
}
const store=createStore(reducer,initValue)
export default store
