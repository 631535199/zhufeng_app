/**
 * Created by jh on 2018/3/6.
 */
import 'whatwg-fetch';
import 'es6-promise';

export function get(url){
    return fetch(url,{
        Accept:"application/json"
    })
}