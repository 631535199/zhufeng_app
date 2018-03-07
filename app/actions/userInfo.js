/**
 * Created by jh on 2018/3/6.
 */
import *as Types from '../action-types/userInfo';

//actionCreator 是一个函数
export function update(data){
    return {
        type:Types.UPDATE_CITY,
        data
    }
}