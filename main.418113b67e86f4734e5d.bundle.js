(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1127:function(module,exports,__webpack_require__){"use strict";__webpack_require__(53).addons.setConfig({refs:{}})},1132:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var public_api=__webpack_require__(53),public_api_default=__webpack_require__.n(public_api),create=__webpack_require__(487),theme=Object(create.create)({base:"light",brandTitle:"React SVG Pan Zoom",brandUrl:"https://github.com/chrvadala/react-svg-pan-zoom"}),dist=(__webpack_require__(19),__webpack_require__(10),__webpack_require__(120),__webpack_require__(63));public_api_default.a.register("TitleAddon",(function(api){var interval=null,setTitle=function setTitle(){clearTimeout(interval);var title,storyData=null;try{storyData=api.getCurrentStoryData()}catch(e){}title=storyData?"".concat(storyData.kind," - ").concat(storyData.name," ⋅ ").concat("React SVG Pan Zoom"):"React SVG Pan Zoom",document.title!==title&&(document.title=title),interval=setTimeout(setTitle,100)};setTitle(),api.on(dist.STORY_RENDERED,(function(story){setTitle()}))})),public_api.addons.setConfig({theme:theme})},498:function(module,exports,__webpack_require__){__webpack_require__(499),__webpack_require__(1132),__webpack_require__(668),__webpack_require__(1080),__webpack_require__(1082),__webpack_require__(1085),__webpack_require__(1115),__webpack_require__(1120),__webpack_require__(1123),module.exports=__webpack_require__(1127)},565:function(module,exports){}},[[498,1,2]]]);