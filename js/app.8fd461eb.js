(function(e){function t(t){for(var n,o,i=t[0],s=t[1],u=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/covued/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,c,o){var i=Object(n["y"])("router-view"),s=Object(n["y"])("Layout");return Object(n["s"])(),Object(n["f"])(s,null,{default:Object(n["E"])((function(){return[Object(n["i"])(i)]})),_:1})}var c=r("1da1");r("96cf"),r("d81d");function o(e,t,r,a,c,o){var i=Object(n["y"])("Header"),s=Object(n["y"])("Search"),u=Object(n["y"])("Footer");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(s),Object(n["i"])("main",null,[Object(n["x"])(e.$slots,"default")]),Object(n["i"])(u)],64)}var i=r("cf05"),s=r.n(i),u={class:"navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded",style:{"background-color":"#e3f2fd"}},l={class:"container-fluid"},d=Object(n["i"])("a",{class:"navbar-brand",href:"#"},[Object(n["h"])("CO"),Object(n["i"])("img",{src:s.a,width:"30"}),Object(n["h"])("D")],-1),b=Object(n["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["i"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav mb-2 mb-lg-0 col-md-2 offset-md-5"},p={class:"nav-item"},m=Object(n["h"])("Table"),v={class:"nav-item"},O=Object(n["h"])("Chart");function j(e,t){var r=Object(n["y"])("router-link");return Object(n["s"])(),Object(n["f"])("header",null,[Object(n["i"])("nav",u,[Object(n["i"])("div",l,[d,b,Object(n["i"])("div",f,[Object(n["i"])("ul",h,[Object(n["i"])("li",p,[Object(n["i"])(r,{to:{name:"table"},class:"nav-link","active-class":"active"},{default:Object(n["E"])((function(){return[m]})),_:1})]),Object(n["i"])("li",v,[Object(n["i"])(r,{to:{name:"chart"},class:"nav-link","active-class":"active"},{default:Object(n["E"])((function(){return[O]})),_:1})])])])])])])}const y={};y.render=j;var g=y,C={class:"mt-2"},x=Object(n["i"])("p",null,"© 2021.",-1);function w(e,t){return Object(n["s"])(),Object(n["f"])("footer",C,[x])}const k={};k.render=w;var S=k;function T(e,t,r,a,c,o){var i=Object(n["y"])("AutoComplete");return Object(n["s"])(),Object(n["f"])(i,{multiple:!0,modelValue:c.selectedCountries,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.selectedCountries=e}),suggestions:c.filteredCountries,onComplete:t[2]||(t[2]=function(e){return o.searchCountry(e)}),onItemSelect:t[3]||(t[3]=function(e){return o.onItemSelect(e)}),onItemUnselect:t[4]||(t[4]=function(e){return o.onItemSelect(e)}),field:"name",placeholder:o.placeholder,forceSelection:!0},null,8,["modelValue","suggestions","placeholder"])}r("4de4"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("b0c0");var I=r("4084"),N={components:{AutoComplete:I["a"]},data:function(){return{filteredCountries:[],selectedCountries:[]}},computed:{placeholder:function(){return this.selectedCountries&&this.selectedCountries.length>0?"":"Search for countries to filter data"}},methods:{searchCountry:function(e){this.filteredCountries=this.$store.state.countries.filter((function(t){var r=new RegExp(e.query,"i");return t.name.match(r)}))},onItemSelect:function(){this.$store.commit("setCountries",this.selectedCountries)}}};N.render=T;var D=N,P={components:{Header:g,Footer:S,Search:D}};P.render=o;var R=P;r("d3b7");function _(){return A.apply(this,arguments)}function A(){return A=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.covid19api.com/summary",e.next=4,fetch(t);case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error(r.statusText);case 7:return e.next=9,r.json();case 9:if(n=e.sent,n){e.next=12;break}throw new Error("Got null from response, expected json");case 12:return e.abrupt("return",n.Countries);case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),A.apply(this,arguments)}var E={name:"App",components:{Layout:R},methods:{loadCountries:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:r=t.sent,n=r.map((function(e){return{name:e.Country,active:e.TotalConfirmed-e.TotalDeaths-e.TotalRecovered,died:e.TotalDeaths,recovered:e.TotalRecovered,code:e.CountryCode}})),e.$store.commit("setCountries",n);case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.loadCountries()}};E.render=a;var M=E,$=r("6c02"),L={class:"table table-striped table-borderless"},B={class:"table-primary"};function F(e,t,r,a,c,o){return Object(n["s"])(),Object(n["f"])("table",L,[Object(n["i"])("thead",B,[Object(n["i"])("tr",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(o.countries[0],(function(e,t,r){return Object(n["s"])(),Object(n["f"])("th",{key:t,class:[0==r?"text-start":"text-end"]},Object(n["B"])(t.toUpperCase()),3)})),128))])]),Object(n["i"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(o.countries,(function(e){return Object(n["s"])(),Object(n["f"])("tr",{key:e.code},[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(e,(function(e){return Object(n["s"])(),Object(n["f"])("td",{key:e,class:[o.cssClass(e)]},Object(n["B"])(o.formatNumber(e)),3)})),128))])})),128))]),Object(n["i"])("tfoot",null,[Object(n["i"])("tr",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(o.summary,(function(e){return Object(n["s"])(),Object(n["f"])("td",{key:e,class:[o.cssClass(e)]},Object(n["B"])(o.formatNumber(e)),3)})),128))])])])}r("8ba4"),r("a9e3"),r("13d5");var H={name:"Table",methods:{formatNumber:function(e){return Number.isInteger(e)?Intl.NumberFormat("sr").format(e):e},cssClass:function(e){return Number.isInteger(e)?"text-end":"text-start"}},computed:{countries:function(){return this.$store.state.filteredCountries.map((function(e){return{name:e.name,active:e.active,died:e.died,recovered:e.recovered}}))},summary:function(){var e=[];return this.countries.length>0&&(e=this.countries.reduce((function(e,t){return e[1]+=t.active,e[2]+=t.died,e[3]+=t.recovered,e}),["TOTALS",0,0,0])),e}}};H.render=F;var U=H,V={id:"chart"};function z(e,t,r,a,c,o){return Object(n["s"])(),Object(n["f"])("div",V)}var J=r("ea7f"),W=r.n(J),q=r("33c6"),G=r.n(q);G()(W.a);var K={methods:{formatNumber:function(e){return Number.isInteger(e)?Intl.NumberFormat("sr").format(e):e},generateChart:function(){var e=this,t=W.a.chart("chart",{chart:{type:"bubble",plotBorderWidth:1,zoomType:"xy",height:"75%"},legend:{enabled:!1},title:{text:void 0},subtitle:{text:void 0},xAxis:{gridLineWidth:1,title:{text:"Recovered"}},yAxis:{startOnTick:!1,endOnTick:!1,title:{text:"Died"},maxPadding:.2},tooltip:{useHTML:!0,formatter:function(){return'<table><tr><th colspan="2"><h3>'+this.point.country+'</h3></th></tr><tr><th>Recovered:</th><td class="text-end">'+e.formatNumber(this.x)+'</td></tr><tr><th>Died:</th><td class="text-end">'+e.formatNumber(this.y)+'</td></tr><tr><th>Active:</th><td class="text-end">'+e.formatNumber(this.point.active)+"</td></tr></table>"},followPointer:!0},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.code}"}}},series:[{id:"countrySeries",data:[]}],credits:{enabled:!1}});t.series[0].setData(this.chartData)}},watch:{count:function(){this.chartInstance.series[0].setData(this.chartData)}},computed:{chartData:function(){var e=this.$store.state.filteredCountries,t=Math.max.apply(Math,e.map((function(e){return e.active})));return e.map((function(e){return{x:e.recovered,y:e.died,z:e.active/t*100,active:e.active,code:e.code,country:e.name}}))},count:function(){return this.$store.state.filteredCountries.length},chartInstance:function(){var e=document.getElementById("chart");return W.a.charts[e.getAttribute("data-highcharts-chart")]}},mounted:function(){this.generateChart()}};K.render=z;var Q=K,X="/covued/",Y=[{path:X,name:"table",component:U},{path:X+"chart",name:"chart",component:Q}],Z=Object($["a"])({history:Object($["b"])(),base:"/covued/",routes:Y}),ee=Z,te=r("5502"),re=Object(te["a"])({state:function(){return{countries:[],filteredCountries:[]}},mutations:{setCountries:function(e,t){0==t.length?e.filteredCountries=e.countries:e.filteredCountries=t,0==e.countries.length&&(e.countries=t)}}});r("7b17"),r("ab8b"),r("db43"),r("098b"),r("e1ae"),r("4121");Object(n["e"])(M).use(re).use(ee).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"assets/logo.png"},db43:function(e,t,r){}});
//# sourceMappingURL=app.8fd461eb.js.map