import { Reducer } from 'redux-testkit';
import uut from '../src/Redux/reducer';
import {LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS} from '../src/Redux/constants'
// import * as actionTypes from '../actionTypes';
const initialState = {data:[], isFetching:false, error:false};
describe('store/topics/reducer', () => {

    it('should have passed initial state', () => {
      expect(uut({data:[]},{})).toEqual({data:[]});
    });
  
    it('should not affect state', () => {
      Reducer(uut).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });
  
    it('should store have pending in state', () => {
      const action = {type: LOAD_USERS};
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: true});
    });
    it('should store have rejected in state', () => {
      const action = {type: LOAD_USERS_ERROR};
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: false, error:true});
    });
    it('should store have data in state', () => {
        const data = [{id:1},{id:2}] 
      const action = {type: LOAD_USERS_SUCCESS, users:data };
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: false, data},);
    });
  
    
  });