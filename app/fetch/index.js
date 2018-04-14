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

function toUrlencoded(obj){
    let arr =[];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&');
}

export function post(url,obj){
    return fetch(url,{
        method:"POST",
        //a=1&b=2&c=3
        headers:{
            'content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    })
}