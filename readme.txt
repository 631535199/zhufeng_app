react  react-router4 redux react-redux

$ yarn init -y
## webpack

yarn add webpack webpack-dev-server -dev
yarn add webpack-cli -D

##babel

yarn add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin  -dev

##react

yarn add react redux react-redux react-router-dom react-dom

##fetch

yarn add es6-promise whatwg-fetch -dev

##express

yarn add express

##swiper
yarn add swipe-js-iso react-swipe

##scripts

"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"


##目录结构  
-components 组件 木偶组件
-containers 页面组件
    -home
        -subpage 智能组件1
        -index.js
-index.js用来控制显示哪一个页面
-store onlyOne
-actions用户发布动作
-reducers 定义规则
-action-types action 名字


