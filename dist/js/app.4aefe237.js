(function(e){function t(t){for(var n,a,i=t[0],l=t[1],u=t[2],f=0,b=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,i=1;i<c.length;i++){var l=c[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"239a":function(e,t,c){"use strict";c("3057")},3057:function(e,t,c){},"4b31":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=Object(n["f"])("h1",null,[Object(n["f"])("span",null,"Vue"),Object(n["e"])("Movies")],-1);function o(e,t){var c=Object(n["u"])("router-link"),o=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["f"])("header",null,[Object(n["f"])(c,{to:"/"},{default:Object(n["A"])((function(){return[r]})),_:1})]),Object(n["f"])("main",null,[Object(n["f"])(o)])],64)}c("5950");const a={};a.render=o;var i=a,l=c("6c02"),u=(c("ac1f"),c("841c"),{class:"home"}),s={class:"card"},f=Object(n["f"])("div",{class:"detalhes-filmes"},[Object(n["f"])("h1",null,"Mortal Kombat")],-1),b=Object(n["f"])("input",{type:"submit",value:"Buscar"},null,-1),p={class:"lista-de-filmes"},j={class:"imagem-filme"},d={class:"detalhes-filmes"},O={class:"ano-lancamento"},v={class:"lista-de-filmes"},m={class:"imagem-filme"},h={class:"detalhes-filmes"},g={class:"y"};function y(e,t,c,r,o,a){var i=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",u,[Object(n["f"])("div",s,[Object(n["f"])(i,{to:"/movie/460465"},{default:Object(n["A"])((function(){return[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w300/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",alt:"Demon Slayer",class:"imagem-capa"},null,8,["src"]),f]})),_:1})]),Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["C"])((function(e){return r.SearchMovies()}),["prevent"])),class:"caixa-de-pesquisa"},[Object(n["B"])(Object(n["f"])("input",{type:"text",placeholder:"Que filme você está procurando?","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e})},null,512),[[n["y"],r.search]]),b],32),Object(n["f"])("div",p,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.movies,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"movie",key:e.id},[Object(n["f"])(i,{to:"/movie/"+e.id,class:"link-filme"},{default:Object(n["A"])((function(){return[Object(n["f"])("div",j,[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w300/"+e.poster_path,alt:"Movie Poster"},null,8,["src"])]),Object(n["f"])("div",d,[Object(n["f"])("p",O,Object(n["w"])(e.release_date),1),Object(n["f"])("h3",null,Object(n["w"])(e.title),1)])]})),_:2},1032,["to"])])})),128))]),Object(n["f"])("div",v,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.movies,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"movie",key:e.id},[Object(n["f"])(i,{to:"/movie/"+e.id,class:"link-filme"},{default:Object(n["A"])((function(){return[Object(n["f"])("div",m,[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w300/"+e.poster_path,alt:"Movie Poster"},null,8,["src"])]),Object(n["f"])("div",h,[Object(n["f"])("p",g,Object(n["w"])(e.release_date),1),Object(n["f"])("h3",null,Object(n["w"])(e.title),1)])]})),_:2},1032,["to"])])})),128))])])}c("d3b7");var w={setup:function(){var e=Object(n["s"])(""),t=Object(n["s"])([]),c="74c36a162fc26c48e695f4508734b27d",r=function(){""!=e.value&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e.value,"&language=pt-BR")).then((function(e){return e.json()})).then((function(c){console.log(c),t.value=c.results,e.value=""}))};return fetch("https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=74c36a162fc26c48e695f4508734b27d&page=1&language=pt-BR").then((function(e){return e.json()})).then((function(c){console.log(c),t.value=c.results,e.value=""})),{search:e,movies:t,SearchMovies:r}}};c("239a");w.render=y;var _=w,k={class:"detalhes-filmes"};function M(e,t,c,r,o,a){return Object(n["p"])(),Object(n["d"])("div",k,[Object(n["f"])("h2",null,Object(n["w"])(r.movie.original_title),1),Object(n["f"])("p",null,Object(n["w"])(r.movie.release_date),1),Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w300/"+r.movie.poster_path,alt:"Movie Poster",class:"imagem-filme"},null,8,["src"]),Object(n["f"])("p",null,Object(n["w"])(r.movie.overview),1),Object(n["f"])("div",null,[Object(n["f"])("button",{class:"botao-voltar",onClick:t[1]||(t[1]=function(){return a.goBack&&a.goBack.apply(a,arguments)})},"Voltar para o início")])])}c("99af");var P={methods:{goBack:function(){return this.$router.go(-1)}},setup:function(){var e=Object(n["s"])({}),t=Object(l["c"])(),c="74c36a162fc26c48e695f4508734b27d";return Object(n["m"])((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat(c,"&language=pt-BR")).then((function(e){return e.json()})).then((function(t){e.value=t}))})),{movie:e}}};c("f9c7");P.render=M;var B=P,S=[{path:"/",name:"Home",component:_},{path:"/movie/:id",name:"Movie Detail",component:B}],x=Object(l["a"])({history:Object(l["b"])("/"),routes:S}),C=x;Object(n["c"])(i).use(C).mount("#app")},5950:function(e,t,c){"use strict";c("4b31")},c6bc:function(e,t,c){},f9c7:function(e,t,c){"use strict";c("c6bc")}});
//# sourceMappingURL=app.4aefe237.js.map