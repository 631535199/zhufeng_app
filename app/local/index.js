/**
 * Created by jh on 2018/3/6.
 */

export function getStorage(key){
    return localStorage.getItem(key);
}

export function setStorage(key,value){
    localStorage.setItem(key,value)
}