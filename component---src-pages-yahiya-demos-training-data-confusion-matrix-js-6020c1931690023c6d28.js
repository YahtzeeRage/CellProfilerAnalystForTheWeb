(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[9792],{6610:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},27136:function(t,e,n){"use strict";var r=n(22122),i=n(81253),a=n(67294),o=n(85505),s=n(20638),c=n(81664),u=44,l=a.forwardRef((function(t,e){var n=t.classes,s=t.className,l=t.color,f=void 0===l?"primary":l,m=t.disableShrink,p=void 0!==m&&m,d=t.size,g=void 0===d?40:d,v=t.style,h=t.thickness,x=void 0===h?3.6:h,y=t.value,b=void 0===y?0:y,k=t.variant,w=void 0===k?"indeterminate":k,S=(0,i.Z)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),_={},E={},Z={};if("determinate"===w||"static"===w){var D=2*Math.PI*((u-x)/2);_.strokeDasharray=D.toFixed(3),Z["aria-valuenow"]=Math.round(b),_.strokeDashoffset="".concat(((100-b)/100*D).toFixed(3),"px"),E.transform="rotate(-90deg)"}return a.createElement("div",(0,r.Z)({className:(0,o.Z)(n.root,s,"inherit"!==f&&n["color".concat((0,c.Z)(f))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[w]),style:(0,r.Z)({width:g,height:g},E,v),ref:e,role:"progressbar"},Z,S),a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},a.createElement("circle",{className:(0,o.Z)(n.circle,p&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[w]),style:_,cx:u,cy:u,r:(u-x)/2,fill:"none",strokeWidth:x})))}));e.Z=(0,s.Z)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},48945:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(92137),i=n(87757),a=n.n(i),o=n(54179),s=n(13967),c=n(38889),u=n(4339),l=function(){function t(t){this.sliceArrayByValue=function(t,e,n){var r=t.indexOf(e),i=t.indexOf(n);return-1===e||-1===n?(console.error("Values not found to slice"),null):t.slice(r,i)},this.basicPapaConfig={worker:!0,skipEmptyLines:!0,dynamicTyping:!0},this.getDataHandlerandStartingTrainingSet=(0,r.Z)(a().mark((function t(){var e,n,r,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return["column_lines","object_data","image_data","training_data"],[],e=this.getFiles(),t.next=5,this.getText(e);case 5:return n=t.sent,r=this.getColumnLines(n[0]),i=new c.Z({object_data:n[1],image_data:n[2],object_columns:r[0],image_columns:r[1]}),o=new u.Z(n[3].slice(1),r[2]),t.abrupt("return",{data_provider:i,training_data:{features:r[0],training_table:o}});case 10:case"end":return t.stop()}}),t,this)}))),this.fileListObject=t}var e=t.prototype;return e.getFiles=function(){var t=new s.Z(this.fileListObject);return["example_SETUP.SQL","per_object.csv","per_image.csv","MyTrainingSet.txt"].map((function(e){return{file:t.findFile(e),name:e}}))},e.getText=function(t){var e=this;return Promise.all(t.map((function(t){if(t.name.endsWith(".csv")||t.name.endsWith(".txt"))return(new o.Z).papaTextfromCSV(t);var n=new s.Z(e.fileListObject);return console.log(t),n.fileReaderPromiseText(t.file)})))},e.getColumnLines=function(t){var e=[],n=t.split("\n").map((function(t){return t.trim()})),r=this.sliceArrayByValue(n,"CREATE TABLE per_object (","PRIMARY KEY  (ImageNumber,ObjectNumber)");e.push(r.map((function(t){return t.split(" ")[0]})).slice(1));var i=this.sliceArrayByValue(n,"CREATE TABLE per_image (","PRIMARY KEY  (ImageNumber)");return e.push(i.map((function(t){return t.split(" ")[0]})).slice(1)),e.push("label imagenum objectnum x y".split(" ")),e},t}()},72977:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(92137),i=n(87757),a=n.n(i),o=n(67294),s=n(80838),c=n(83332),u=n(48945),l=n(37107),f=n(27136);var m=function(){console.log("a");var t=o.useState(!1),e=t[0],n=t[1],i=o.useState(null),m=(i[0],i[1],o.useState(null)),p=(m[0],m[1]),d=o.useState(null),g=(d[0],d[1]),v=o.useState(null),h=(v[0],v[1]),x=o.useState(!0),y=x[0],b=(x[1],o.useState(null)),k=(b[0],b[1]),w=o.useState(),S=w[0],_=w[1],E=o.useRef(null),Z=function(){var t=(0,r.Z)(a().mark((function t(e){var r,i,o,s,c,f,m,d,v,x,y,b,w;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),r=new u.Z(e),t.next=4,r.getDataHandlerandStartingTrainingSet();case 4:return i=t.sent,o=i.data_provider,p(o),s=i.training_data.training_table,c=s.getDataColumnsPaired(),f=s.getTrainingLabels(),m=c.map((function(t){var e=t.objectnum,n=t.imagenum;return o.getRow("object_data",{ObjectNumber:e,ImageNumber:n})})),d=i.training_data.features,v=d.filter((function(t){return!t.includes("Location")&&"ObjectNumber"!==t&&"ImageNumber"!==t})),h(v),console.log("finished data initialization"),g(x={classifierType:"LogisticRegression",trainingData:m,trainingLabels:f,featuresToUse:v}),console.log("start initial train"),y=new l.q(x),t.next=21,y.trainPromise();case 21:return k(y),console.log("end initial train"),b=E.current,t.next=26,y.TrainingDataConfusionMatrixDataURLPromise(["Negative","Positive"],b);case 26:w=t.sent,_(w),console.log(w),console.log("finished upload"),n(!1);case 31:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.createElement("div",{style:{resize:"horizontal"}},o.createElement(s.Z,{container:!0,justify:"center",spacing:2,style:{marginBottom:15}},o.createElement(s.Z,{key:1,item:!0},o.createElement(c.Z,{endIcon:e?o.createElement(f.Z,null):null,disabled:!y,variant:"contained",component:"label",onClick:function(){return console.log("Upload!")}},"Upload",o.createElement("input",{type:"file",hidden:!0,webkitdirectory:"true",mozdirectory:"true",msdirectory:"true",odirectory:"true",directory:"true",multiple:!0,onChange:function(t){Z(t)}}))),o.createElement("img",{width:100,height:100,src:S}),o.createElement("canvas",{ref:E,width:100,height:100,id:"processingCanvas"})))}},96874:function(t){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},47443:function(t,e,n){var r=n(42118);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},1196:function(t){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},20731:function(t,e,n){var r=n(88668),i=n(47443),a=n(1196),o=n(29932),s=n(7518),c=n(74757);t.exports=function(t,e,n,u){var l=-1,f=i,m=!0,p=t.length,d=[],g=e.length;if(!p)return d;n&&(e=o(e,s(n))),u?(f=a,m=!1):e.length>=200&&(f=c,m=!1,e=new r(e));t:for(;++l<p;){var v=t[l],h=null==n?v:n(v);if(v=u||0!==v?v:0,m&&h==h){for(var x=g;x--;)if(e[x]===h)continue t;d.push(v)}else f(e,h,u)||d.push(v)}return d}},89881:function(t,e,n){var r=n(47816),i=n(99291)(r);t.exports=i},21078:function(t,e,n){var r=n(62488),i=n(37285);t.exports=function t(e,n,a,o,s){var c=-1,u=e.length;for(a||(a=i),s||(s=[]);++c<u;){var l=e[c];n>0&&a(l)?n>1?t(l,n-1,a,o,s):r(s,l):o||(s[s.length]=l)}return s}},28483:function(t,e,n){var r=n(25063)();t.exports=r},47816:function(t,e,n){var r=n(28483),i=n(3674);t.exports=function(t,e){return t&&r(t,e,i)}},42118:function(t,e,n){var r=n(41848),i=n(62722),a=n(42351);t.exports=function(t,e,n){return e==e?a(t,e,n):r(t,i,n)}},62722:function(t){t.exports=function(t){return t!=t}},5976:function(t,e,n){var r=n(6557),i=n(45357),a=n(30061);t.exports=function(t,e){return a(i(t,e,r),t+"")}},56560:function(t,e,n){var r=n(75703),i=n(38777),a=n(6557),o=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=o},99291:function(t,e,n){var r=n(98612);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var a=n.length,o=e?a:-1,s=Object(n);(e?o--:++o<a)&&!1!==i(s[o],o,s););return n}}},25063:function(t){t.exports=function(t){return function(e,n,r){for(var i=-1,a=Object(e),o=r(e),s=o.length;s--;){var c=o[t?s:++i];if(!1===n(a[c],c,a))break}return e}}},37285:function(t,e,n){var r=n(62705),i=n(35694),a=n(1469),o=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||i(t)||!!(o&&t&&t[o])}},16612:function(t,e,n){var r=n(77813),i=n(98612),a=n(65776),o=n(13218);t.exports=function(t,e,n){if(!o(n))return!1;var s=typeof e;return!!("number"==s?i(n)&&a(e,n.length):"string"==s&&e in n)&&r(n[e],t)}},45357:function(t,e,n){var r=n(96874),i=Math.max;t.exports=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=i(a.length-e,0),c=Array(s);++o<s;)c[o]=a[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=a[o];return u[e]=n(c),r(t,this,u)}}},30061:function(t,e,n){var r=n(56560),i=n(21275)(r);t.exports=i},21275:function(t){var e=Date.now;t.exports=function(t){var n=0,r=0;return function(){var i=e(),a=16-(i-r);if(r=i,a>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}},42351:function(t){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}},75703:function(t){t.exports=function(t){return function(){return t}}},91966:function(t,e,n){var r=n(20731),i=n(21078),a=n(5976),o=n(29246),s=a((function(t,e){return o(t)?r(t,i(e,1,o,!0)):[]}));t.exports=s},29246:function(t,e,n){var r=n(98612),i=n(37005);t.exports=function(t){return i(t)&&r(t)}},50308:function(t){t.exports=function(){}}}]);
//# sourceMappingURL=component---src-pages-yahiya-demos-training-data-confusion-matrix-js-6020c1931690023c6d28.js.map