

import React from 'react';
import {render}from 'react-dom';
import './assets/index.less'
import App from "./containers/index";

import {Provider} from 'react-redux'
//导入store
//configureStore可传入初始状态
import {configureStore} from './store'
let store =configureStore();//生成store
    //{
    //    userInfo:{
    //        cityName:'上海'
    //    }
    //}

render(
    <Provider store ={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

