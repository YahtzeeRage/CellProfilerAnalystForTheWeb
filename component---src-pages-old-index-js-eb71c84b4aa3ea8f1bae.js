(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[9352],{29311:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(92137),a=n(87757),i=n.n(a),o=function(){function e(e){void 0===e&&(e={box_dim:{x:40,y:40},image_type:"object",cords:{}}),this.box_dim=e.box_dim,this.image_type=e.image_type,this.cords=e.cords,this.canvases={}}var t=e.prototype;return t.brighten=function(e,t){for(var n=t.getImageData(0,0,e.height,e.width),r=n.data,a=["red","green","blue"],i=[15,15,0],o=[-1,-1,-1],s=[256,256,256],c=[[],[],[]],l=0;l<a.length;l++)c[a[l]]=[];for(l=0;l<r.length;l+=4)for(var u=0;u<a.length;u++){var m=r[l+u];o[u]=o[u]<m?m:o[u],s[u]=s[u]>m?m:s[u],m>i[u]&&c[u].push(l+u)}var g=-1;for(l=0;l<3;l++)o[l]>g&&(g=o[l]);for(l=0;l<a.length;l++){var d=c[l];for(u=0;u<d.length;u++)r[d[u]]=r[d[u]]/g*255}t.putImageData(new ImageData(r,n.width,n.height),0,0)},t.getDataURL=function(e){"image"===this.image_type&&(this.box_dim.x=e[0].image.width,this.box_dim.y=e[0].image.height);var t=document.createElement("canvas");t.width=this.box_dim.h,t.height=this.box_dim.l;for(var n=t.getContext("2d"),r=0;r<e.length;r++){var a=e[r].color,i=document.createElement("canvas");this.canvases[a]=i}for(r=0;r<e.length;r++){a=e[r].color.toString();this.createColorCanvas(e[r].image,a)}n.globalCompositeOperation="lighter";for(r=0;r<e.length;r++){var o=e[r];"whole"===this.image_type&&n.drawImage(this.canvases[o.color],0,0),n.drawImage(this.canvases[o.color],this.cords.x,this.cords.y,this.box_dim.x,this.box_dim.y,0,0,t.width,t.height)}return n.globalCompositeOperation="source-over",this.brighten(t,n),t.toDataURL()},t.createColorCanvas=function(e,t){var n=e.height,r=e.width;this.canvases[t].width=r,this.canvases[t].height=n;var a=this.canvases[t].getContext("2d");a.globalCompositeOperation="source-over",a.drawImage(e,0,0),a.globalCompositeOperation="multiply",a.fillStyle=t,a.fillRect(0,0,r,n),a.globalCompositeOperation="source-over"},e}(),s=n(13967),c=function(){function e(e,t){this.getObjsToURLs=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,s,c,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=18;break}return a=t[r].ImageNumber,s=[],a.toString(),e.next=8,this.getImagefromFile(a);case 8:return s=e.sent,c=this.data_provider.getCordsforCellDisplay(t[r]),l=new o({cords:c}),e.next=13,l.getDataURL(s);case 13:u=e.sent,n.push(u);case 15:r++,e.next=2;break;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),this.getImgUrl=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getImagesfromFile(t),r=new o({image_type:"whole"}),e.abrupt("return",r.getDataUrl(n));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),this.getImagefromFile=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,o=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=this.data_provider.returnAllImgFileNames(t),e.next=4,Promise.all(n.map((function(e){var t=o.file_handler.findFile(e.filename);return o.file_handler.fileReaderPromiseImage(t).then((function(e){return o.makeImage(e)}))})));case 4:for(r=e.sent,[],a=0;a<r.length;a++)delete n.filename,n[a].image=r[a];return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),this.file_handler=new s.Z(e),this.data_provider=t}return e.prototype.makeImage=function(e){var t=new Image;return t.src=e,t},e}()},48945:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(92137),a=n(87757),i=n.n(a),o=n(54179),s=n(13967),c=n(38889),l=n(4339),u=function(){function e(e){this.sliceArrayByValue=function(e,t,n){var r=e.indexOf(t),a=e.indexOf(n);return-1===t||-1===n?(console.error("Values not found to slice"),null):e.slice(r,a)},this.basicPapaConfig={worker:!0,skipEmptyLines:!0,dynamicTyping:!0},this.getDataHandlerandStartingTrainingSet=(0,r.Z)(i().mark((function e(){var t,n,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return["column_lines","object_data","image_data","training_data"],[],t=this.getFiles(),e.next=5,this.getText(t);case 5:return n=e.sent,r=this.getColumnLines(n[0]),a=new c.Z({object_data:n[1],image_data:n[2],object_columns:r[0],image_columns:r[1]}),o=new l.Z(n[3].slice(1),r[2]),e.abrupt("return",{data_provider:a,training_data:{features:r[0],training_table:o}});case 10:case"end":return e.stop()}}),e,this)}))),this.fileListObject=e}var t=e.prototype;return t.getFiles=function(){var e=new s.Z(this.fileListObject);return["example_SETUP.SQL","per_object.csv","per_image.csv","MyTrainingSet.txt"].map((function(t){return{file:e.findFile(t),name:t}}))},t.getText=function(e){var t=this;return Promise.all(e.map((function(e){if(e.name.endsWith(".csv")||e.name.endsWith(".txt"))return(new o.Z).papaTextfromCSV(e);var n=new s.Z(t.fileListObject);return console.log(e),n.fileReaderPromiseText(e.file)})))},t.getColumnLines=function(e){var t=[],n=e.split("\n").map((function(e){return e.trim()})),r=this.sliceArrayByValue(n,"CREATE TABLE per_object (","PRIMARY KEY  (ImageNumber,ObjectNumber)");t.push(r.map((function(e){return e.split(" ")[0]})).slice(1));var a=this.sliceArrayByValue(n,"CREATE TABLE per_image (","PRIMARY KEY  (ImageNumber)");return t.push(a.map((function(e){return e.split(" ")[0]})).slice(1)),t.push("label imagenum objectnum x y".split(" ")),t},e}()},17018:function(e,t,n){"use strict";n.r(t);var r=n(85061),a=n(92137),i=n(87757),o=n.n(i),s=n(67294),c=n(96667),l=n(47798),u=n(23729),m=n(80838),g=n(83332),d=n(44005),f=n(90058),p=n(91666),h=n(80633),v=n(79312),b=n(48945),y=n(22019),w=n(39331),E=n(29311),x=n(17710),Z=n(59274),C=n(31261),_=n(8441),k=n(96531),I=n(48498);t.default=function(){var e,t=s.useState(null),n=t[0],i=t[1],N=s.useState(null),j=N[0],S=N[1],L=s.useState(null),T=L[0],P=L[1],R=s.useState(null),O=R[0],A=R[1],B=s.useState(pe([x.Z,x.Z,x.Z])),D=B[0],U=B[1],z=s.useState(null),F=z[0],H=z[1],V=s.useState(null),$=(V[0],V[1]),M=s.useState(null),Y=M[0],K=M[1],W=s.useState(!1),Q=W[0],q=W[1],G=s.useState(!1),J=G[0],X=G[1],ee=s.useState(!1),te=ee[0],ne=(ee[1],s.useState(!1)),re=ne[0],ae=ne[1],ie=s.useState(!0),oe=ie[0],se=ie[1],ce=function(e){i(null),void 0!==e&&me(e)},le=function(){q(!1),X(!1),ae(!1)},ue=function(){q(!0),X(!0),ae(!0)},me=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,a,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(),U({unclassified:[],positive:[],negative:[]}),n=new y.$(j,T),e.next=6,n.initTrainPromise();case 6:return $(t),r=n.fetchUpToNCellPairsByClass(t,20),n.fetchUpToNCellPairsByClass(t,20),a=new E.z(O,j),e.next=12,a.getObjsToURLs(r);case 12:return i=e.sent,s=pe(i),U(s),H(new w.e(r,i)),ue(),e.abrupt("return");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,a,i,s,c,l,u,m,g,d,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le(),t=D.negative.map((function(e){return e.id})),n=D.positive.map((function(e){return e.id})),console.log(t,D),F.setClassByIndexArray("negative",t),F.setClassByIndexArray("positive",n),a=F.getPairsByClass("negative"),i=F.getPairsByClass("positive"),s=a.map((function(e){return j.getRow("object_data",{ImageNumber:e.ImageNumber,ObjectNumber:e.ObjectNumber})})),c=i.map((function(e){return j.getRow("object_data",{ImageNumber:e.ImageNumber,ObjectNumber:e.ObjectNumber})})),l=[].concat((0,r.Z)(s),(0,r.Z)(c)),u=new Array(s.length).fill(0),m=new Array(c.length).fill(1),g=u.concat(m),d={classifierType:"LogisticRegression",trainingData:[].concat((0,r.Z)(l),(0,r.Z)(T.trainingData)),trainingLabels:[].concat((0,r.Z)(g),(0,r.Z)(T.trainingLabels)),featuresToUse:Y},console.log(d),P(d),f={unclassified:D.unclassified,positive:[],negative:[]},U(f),console.log("finished train"),ue();case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,a,i,s,c,l,u,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se(!1),A(t),n=new b.Z(t),e.next=5,n.getDataHandlerandStartingTrainingSet();case 5:r=e.sent,a=r.data_provider,console.log(a.getObjsPerImg(4)),S(a),i=r.training_data.training_table,s=i.getDataColumnsPaired(),c=i.getTrainingLabels(),l=s.map((function(e){var t=e.objectnum,n=e.imagenum;return a.getRow("object_data",{ObjectNumber:t,ImageNumber:n})})),u=r.training_data.features,m=u.filter((function(e){return!e.includes("Location")&&"ObjectNumber"!==e&&"ImageNumber"!==e})),K(m),console.log("finished data initialization"),P({classifierType:"LogisticRegression",trainingData:l,trainingLabels:c,featuresToUse:m}),q(!0),X(!0),ae(!0),console.log("finished upload");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(),t=new y.$(j,T),e.next=4,t.initTrainPromise();case 4:t.userDownloadClassifierSpecPromise(),ue();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function pe(e){return{unclassified:e.map((function(e,t){return{id:t,address:e}})),positive:[],negative:[]}}return s.createElement("div",{style:{resize:"horizontal"}},s.createElement(c.Z,null,s.createElement(l.Z,null,s.createElement(h.Z,{src:p.Z,style:{marginRight:"40%",height:"90px"}})),s.createElement(l.Z,null,s.createElement(u.Z,{style:{color:"black",marginLeft:"50%"}}," ",s.createElement(v.Z,null)))),s.createElement(_.d,{onChange:function(e,t,n,r){var a;if(r){var i,o=(0,Z.p)(D[e],D[r],t,n);return U(Object.assign({},D,((i={})[e]=o[0],i[r]=o[1],i)))}if(console.log(e,t,n),t!==n){var s,c=(0,C.L)(D[e],t,D[e].length);return U(Object.assign({},D,((s={})[e]=c,s)))}var l=(0,C.L)(D[e],t,t);return U(Object.assign({},D,((a={})[e]=l,a)))}},s.createElement(c.Z,null,s.createElement(m.Z,{container:!0,justify:"center",spacing:2,style:{marginBottom:15}},s.createElement(m.Z,{key:0,item:!0},s.createElement(g.Z,{disabled:!Q,variant:"contained","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},"Fetch"),s.createElement(d.Z,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:ce},s.createElement(f.Z,{onClick:function(){return ce("random")}},"Random"),s.createElement(f.Z,{onClick:function(){return ce("positive")}},"Positive"),s.createElement(f.Z,{onClick:function(){return ce("negative")}},"Negative"))),s.createElement(m.Z,{key:1,item:!0},s.createElement(g.Z,{disabled:!J,variant:"contained",onClick:ge},"Train")),s.createElement(m.Z,{key:2,item:!0},s.createElement(g.Z,{disabled:!te,variant:"contained",onClick:function(){}},"Evaluate")),s.createElement(m.Z,{key:3,item:!0},s.createElement(g.Z,{disabled:!re,variant:"contained",onClick:fe},"Download")),s.createElement(m.Z,{key:4,item:!0},s.createElement(g.Z,{disabled:!oe,variant:"contained",component:"label",onClick:function(){return console.log("Upload!")}},"Upload",s.createElement("input",{type:"file",hidden:!0,webkitdirectory:"true",mozdirectory:"true",msdirectory:"true",odirectory:"true",directory:"true",multiple:!0,onChange:function(e){de(e)}}))))),s.createElement("div",null,s.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"10%",marginBottom:.5}},"Unclassified"),s.createElement("div",{className:"topContainer"},s.createElement(k.$,{className:"dropzone ",id:"unclassified",boxesPerRow:8,rowHeight:70},D.unclassified.map((function(e){return s.createElement(I.P,{key:e.id},s.createElement("div",{className:"grid-item"},s.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))),s.createElement(c.Z,null,s.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"11%",userSelect:"none",marginBottom:"0.5%"}},"Positive"),s.createElement("label",{style:(e={textAlign:"left",backgroundColor:"white",paddingRight:"8%",marginBottom:0,userSelect:"none",margin:"auto"},e.marginBottom="0.5%",e)},"Negative")),s.createElement(c.Z,null,s.createElement(k.$,{className:"dropzone positive",id:"positive",boxesPerRow:4,rowHeight:70},D.positive.map((function(e){return s.createElement(I.P,{key:e.id},s.createElement("div",{className:"grid-item"},s.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))}))),s.createElement(k.$,{className:"dropzone negative",id:"negative",boxesPerRow:4,rowHeight:70},D.negative.map((function(e){return s.createElement(I.P,{key:e.id},s.createElement("div",{className:"grid-item"},s.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))))))}},17710:function(e,t,n){"use strict";t.Z=n.p+"static/jones-885674426137aa7117b916008a9d4f44.jpg"}}]);
//# sourceMappingURL=component---src-pages-old-index-js-eb71c84b4aa3ea8f1bae.js.map