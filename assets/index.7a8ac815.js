var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,c=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,a=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&c(e,r,a[r]);if(s)for(var r of s(a))i.call(a,r)&&c(e,r,a[r]);return e};import{r,G as d,a as l,b as m,m as o,s as p,c as n}from"./vendor.998934d5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const i=new URL(e,location),c=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const r=new URL(e,i);if(self[t].moduleMap[r])return s(self[t].moduleMap[r]);const d=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){a(new Error(`Failed to import: ${e}`)),c(l)},onload(){s(self[t].moduleMap[r]),c(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/CellProfilerAnalystForTheWeb/assets/");function g(){var e=["https://i.postimg.cc/SNBRqKqX/cell-image1.jpg","https://i.postimg.cc/3JvrLHp3/cell-image10.jpg","https://i.postimg.cc/XY6jmDcd/cell-image11.jpg","https://i.postimg.cc/XYKjbcQh/cell-image12.jpg","https://i.postimg.cc/25zz8bt5/cell-image13.jpg","https://i.postimg.cc/cJXdK1qB/cell-image14.jpg","https://i.postimg.cc/hjvcVFcW/cell-image15.jpg","https://i.postimg.cc/SsPqrZxX/cell-image16.jpg","https://i.postimg.cc/cC8W5QvF/cell-image17.jpg","https://i.postimg.cc/bdcPXsbp/cell-image18.jpg","https://i.postimg.cc/1RgNZ26j/cell-image19.jpg","https://i.postimg.cc/nhqzLtc3/cell-image2.jpg","https://i.postimg.cc/xjWNj53T/cell-image20.jpg","https://i.postimg.cc/yNBNgrDs/cell-image3.jpg","https://i.postimg.cc/7LVZgMz7/cell-image4.jpg","https://i.postimg.cc/vBZHXg7K/cell-image5.jpg","https://i.postimg.cc/3Nyr5scC/cell-image6.jpg","https://i.postimg.cc/Zn1bTfkk/cell-image7.jpg","https://i.postimg.cc/0QX54kcy/cell-image8.jpg","https://i.postimg.cc/tRfCtgsr/cell-image9.jpg"];const[t,s]=r.useState({unclassifed:[{id:1,address:e[0]},{id:2,address:e[1]},{id:3,address:e[2]},{id:4,address:e[3]},{id:5,address:e[4]},{id:6,address:e[5]},{id:7,address:e[6]},{id:8,address:e[7]},{id:9,address:e[8]},{id:10,address:e[9]},{id:11,address:e[10]},{id:12,address:e[11]},{id:13,address:e[12]},{id:14,address:e[13]},{id:15,address:e[14]},{id:16,address:e[15]},{id:17,address:e[16]},{id:18,address:e[17]},{id:19,address:e[18]},{id:20,address:e[19]}],positive:[],negative:[]});return r.createElement(d,{onChange:function(e,i,c,r){if(r){const d=o(t[e],t[r],i,c);return s(a(a({},t),{[e]:d[0],[r]:d[1]}))}const d=p(t[e],i,c);return s(a(a({},t),{[e]:d}))}},r.createElement("div",null,r.createElement("div",{className:"topContainer"},r.createElement(l,{className:"dropzone ",id:"unclassifed",boxesPerRow:8,rowHeight:70},t.unclassifed.map((e=>r.createElement(m,{key:e.id},r.createElement("div",{className:"grid-item"},r.createElement("div",{className:"grid-item-content",style:{backgroundImage:`url(${e.address})`}}))))))),r.createElement("div",{className:"container"},r.createElement(l,{className:"dropzone positive",id:"positive",boxesPerRow:4,rowHeight:70},t.positive.map((e=>r.createElement(m,{key:e.id},r.createElement("div",{className:"grid-item"},r.createElement("div",{className:"grid-item-content",style:{backgroundImage:`url(${e.address})`}})))))),r.createElement(l,{className:"dropzone negative",id:"negative",boxesPerRow:4,rowHeight:70},t.negative.map((e=>r.createElement(m,{key:e.id},r.createElement("div",{className:"grid-item"},r.createElement("div",{className:"grid-item-content",style:{backgroundImage:`url(${e.address})`}})))))))))}n.render(r.createElement(r.StrictMode,null,r.createElement(g,null)),document.getElementById("root"));
