(this.webpackJsonpautocomplete=this.webpackJsonpautocomplete||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s(3),r=s.n(c),i=(s(14),s(4)),l=s(5),o=s(8),u=s(7),h=s(6),p=s.n(h),d=function(e){return e.results.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://www.youtube.com/watch?v="+e.videoId,children:[Object(n.jsx)("img",{className:"result-img",src:e.thumbnail,alt:"Image "+t}),Object(n.jsx)("span",{className:"result-title",children:e.title.substring(0,50)})]})},e.videoId+t)}))},b=(s(15),"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=".concat(5,"&type=video&key=").concat("AIzaSyBsD4rgeMVL8qGAdslbDXRbRWbP4s-e9Ok","&q=")),j=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",results:[]},e.getInfo=function(){p()("".concat(b," + ").concat(e.state.query)).then((function(e){return e.json()})).then((function(t){var s=t.items,n=[];s.forEach((function(e){n.push({videoId:e.id.videoId,title:e.snippet.title,thumbnail:e.snippet.thumbnails.default.url,publishedAt:e.snippet.publishedAt})})),e.setState({results:[].concat(n)})})).catch((function(e){console.log("parsing failed",e)}))},e.handleInputChange=function(){e.setState({query:e.search.value},(function(){e.state.query&&e.state.query.length>1?e.getInfo():e.setState({results:[]})}))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"wrapper-search",children:[Object(n.jsx)("input",{className:"searchbar",placeholder:"Search for...",ref:function(t){return e.search=t},onChange:this.handleInputChange,list:"datalist",type:"text",name:"search_p",id:"search_p","aria-label":"Search field"}),Object(n.jsx)("a",{className:"btn-submit",href:"https://boolfalse.com",children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[Object(n.jsx)("line",{x1:"0",y1:"15",x2:"23",y2:"15"}),Object(n.jsx)("line",{x1:"15",y1:"8",x2:"23",y2:"15"}),Object(n.jsx)("line",{x1:"15",y1:"22",x2:"23",y2:"15"})]})}),Object(n.jsx)("div",{className:"container_list",children:Object(n.jsx)("ul",{id:"datalist",className:"container_list-wrapper",children:Object(n.jsx)(d,{results:this.state.results})})})]})})}}]),s}(a.Component);r.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.930ab48e.chunk.js.map