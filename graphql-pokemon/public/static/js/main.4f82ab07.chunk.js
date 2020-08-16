(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,n,a){e.exports=a.p+"static/media/Logo.4c06b969.PNG"},133:function(e,n,a){e.exports=a(197)},138:function(e,n,a){},195:function(e,n,a){},197:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(26),c=a.n(l),m=(a(138),a(128)),o=a(13),i=a(50),s=a(12),u=a(80),v=a(31),f=a(206),p=a(22),d=a.n(p),E=a(199),y=(a(62),a(202)),g=r.a.createElement(y.a,{style:{fontSize:24},spin:!0}),h=function(){return r.a.createElement("div",null,r.a.createElement(E.a,{indicator:g}))},b=a(203),N=a(3),k=a.n(N);function _(){var e=Object(v.a)(["\n        query SingleQuery($name: String!) {\n            singlePokemon(id: $name) {\n                name\n                id\n                sprites {\n                    front_default\n                }\n                types {\n                    type {\n                        name\n                    }\n                }\n            }\n        }\n    "]);return _=function(){return e},e}function j(e){var n=e.name,a=d()(_());return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement(f.a,{query:a,variables:{name:n}},(function(e){var n=e.loading,a=e.error,l=e.data;if(n)return r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null));a&&console.log(a);var c=l.singlePokemon,m=c.name,o=c.id,s=c.sprites,u=c.types;return r.a.createElement(t.Fragment,null,r.a.createElement("div",{className:"media"},r.a.createElement("img",{className:"d-flex mr-3",src:s.front_default,alt:m,height:"150"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-3"},r.a.createElement("span",{className:"text-dark"},o,":")," ",m),u.map((function(e){return r.a.createElement("div",{key:e.type.name},r.a.createElement(b.a,{color:k()({"#f78c52":"fire"==e.type.name,"#70ad6d":"grass"==e.type.name,"#ac4af7":"poison"==e.type.name,"#4aa1f7":"water"==e.type.name,"#58826a":"bug"==e.type.name,"#9ee4ff":"flying"==e.type.name,"#ffdf78":"normal"==e.type.name,"#ffd769":"electric"==e.type.name,"#cfa165":"ground"==e.type.name,"#918e8a":"rock"==e.type.name,"#a02aa8":"psychic"==e.type.name,"#ade5ff":"ice"==e.type.name,"#352166":"ghost"==e.type.name,"#89c992":"steel"==e.type.name,"#ff9626":"dragon"==e.type.name,"#47494d":"dark"==e.type.name,"#e685ed":"fairy"==e.type.name,"#bd2d28":"fighting"==e.type.name}),text:e.type.name}))})),r.a.createElement(i.b,{to:"/pokemon/".concat(m),className:"btn btn-primary mt-2"},"Details"))))})))}function S(){var e=Object(v.a)(["\n    query MultiPokemonQuery($num: Int!){\n        multiPokemon(limit: $num) {\n            name\n            url\n        }\n    }\n"]);return S=function(){return e},e}var O=d()(S());function q(e){var n=e.num,a=e.search;return Object(t.useEffect)((function(){}),[n,a]),r.a.createElement("div",null,r.a.createElement(f.a,{query:O,variables:{num:n}},(function(e){var n=e.loading,t=e.error,l=e.data;if(n)return r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null));if(t&&console.log(t),null!=a){var c=l.multiPokemon.filter((function(e){return e.name.startsWith(a)}));return r.a.createElement("div",{className:"container"},c.map((function(e,n){return r.a.createElement(j,{key:n,name:e.name})})))}return r.a.createElement("div",{className:"container"},l.multiPokemon.map((function(e,n){return r.a.createElement(j,{key:n,name:e.name})})))})))}var x=a(200);function $(){var e=Object(v.a)(["\n        query allPokemonQuery {\n            multiPokemon(limit: 900) {\n                name\n            }\n        }\n    "]);return $=function(){return e},e}var w=function(){var e=d()($()),n=Object(t.useState)(10),a=Object(u.a)(n,2),l=a[0],c=a[1],m=Object(t.useState)(""),o=Object(u.a)(m,2),i=o[0],s=o[1],v=Object(t.useState)([]),p=Object(u.a)(v,2),E=p[0],y=p[1],g=[],b=function(e){s(e)},N=function(e){s(e)};return r.a.createElement("div",null,r.a.createElement("div",{className:"container mb-5"},r.a.createElement("form",{className:"form-inline justify-content-center"},r.a.createElement(f.a,{query:e},(function(e){var n=e.loading,a=e.error,t=e.data;return n?r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null)):(a&&console.log(a),t.multiPokemon.forEach((function(e){g.push({value:e.name})})),r.a.createElement("div",null,r.a.createElement(x.a,{className:"form-control mb-2 mr-sm-2",options:E,style:{width:200},onSelect:b,onSearch:function(e){y(g.slice(0,l+1).filter((function(n){return n.value.startsWith(e)})))},onChange:N})))})),r.a.createElement("input",{onChange:function(e){c(parseInt(e.target.value))},className:"form-control mb-2 mr-sm-2",type:"number",id:"quantity",name:"quantity",min:"1",max:"100",value:l}))),r.a.createElement(q,{num:l,search:i}))},P=a(121),Q=a(122),C=a(131),I=a(129);function W(){var e=Object(v.a)(["\n    query evolutionQuery($url: String!) {\n        evolutionChain(url: $url) {\n            chain {\n                evolves_to {\n                    evolves_to {\n                        species {\n                            name\n                            url\n                        }\n                    }\n                    species {\n                        name\n                        url\n                    }\n                }\n                species {\n                    name\n                    url\n                }\n            }\n        }\n    }\n"]);return W=function(){return e},e}var B=d()(W()),D=function(e){var n=e.url;return r.a.createElement("div",null,r.a.createElement(f.a,{query:B,variables:{url:n}},(function(e){var n=e.loading,a=e.error,t=e.data;if(n)return r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null));a&&console.log(a);var l=[],c=t.evolutionChain.chain;return l.push(c.species.name),null!=c.evolves_to&&c.evolves_to.length>0&&(l.push(c.evolves_to[0].species.name),null!=c.evolves_to[0].evolves_to&&c.evolves_to[0].evolves_to.length>0&&l.push(c.evolves_to[0].evolves_to[0].species.name)),r.a.createElement("div",{className:"mb-5"},l.map((function(e){return r.a.createElement(j,{key:e,name:e})})))})))};a(201);function J(){var e=Object(v.a)(["    query speciesQuery($url: String!) {\n        pokemonSpecies(url: $url) {\n            evolution_chain {\n                url\n            }\n            flavor_text_entries {\n                flavor_text\n                language {\n                    name\n                    url\n                }\n            }\n        }\n    }\n"],["\\\n    query speciesQuery($url: String!) {\n        pokemonSpecies(url: $url) {\n            evolution_chain {\n                url\n            }\n            flavor_text_entries {\n                flavor_text\n                language {\n                    name\n                    url\n                }\n            }\n        }\n    }\n"]);return J=function(){return e},e}var M=d()(J());function z(e){var n=e.url;return r.a.createElement("div",null,r.a.createElement(f.a,{query:M,variables:{url:n}},(function(e){var n=e.loading,a=e.error,t=e.data;if(n)return r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null));a&&console.log(a);for(var l,c=t.pokemonSpecies,m=c.evolution_chain,o=c.flavor_text_entries,i=0;i<o.length;i++)"en"==o[i].language.name&&(l=o[i].flavor_text);return r.a.createElement("div",null,r.a.createElement("div",{className:"mb-5"},r.a.createElement("h4",{className:"mb-3"},"Description"),r.a.createElement("p",{className:"text-primary"}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},l))),r.a.createElement("h4",{className:"mb-3"},"Evolution Chain"),r.a.createElement(D,{url:m.url}))})))}var F=a(205),G=a(207),L=a(204);var T=function(e){var n=e.statistics;return r.a.createElement("div",null,r.a.createElement(F.a,{gutter:16},n.map((function(e){return r.a.createElement(G.a,{key:e.stat.name,span:12},r.a.createElement(L.a,{title:e.stat.name,value:e.base_stat}))}))))};function A(){var e=Object(v.a)(["\n    query InfoQuery($name: String!) {\n        singlePokemon(id: $name) {\n            name\n            id\n            sprites {\n                front_default\n                back_default\n            }\n            types {\n                type {\n                    name\n                }\n            }\n            stats {\n                base_stat\n                stat {\n                    name\n                }\n            }\n            species {\n                name\n                url\n            }\n        }\n    }\n"]);return A=function(){return e},e}var H=d()(A()),K=function(e){Object(C.a)(a,e);var n=Object(I.a)(a);function a(){return Object(P.a)(this,a),n.apply(this,arguments)}return Object(Q.a)(a,[{key:"render",value:function(){var e=this.props.match.params.name;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{query:H,variables:{name:e}},(function(e){var n=e.loading,a=e.error,t=e.data;if(n)return r.a.createElement("div",{className:"my-center"},r.a.createElement(h,null));if(a)return console.log(a);var l=t.singlePokemon,c=l.name,m=l.id,o=l.sprites,s=o.front_default,u=o.back_default,v=l.types,f=l.stats,p=l.species;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-dark"},m,":")," ",c),r.a.createElement("h4",{className:"mb-3"},"Sprites"),r.a.createElement("img",{src:s,height:"250"}),r.a.createElement("img",{src:u,height:"250"}),r.a.createElement(z,{url:p.url}),r.a.createElement("h4",{className:"mb-3"},"Types"),r.a.createElement("ul",{className:"list-group mb-5"},v.map((function(e){return r.a.createElement("li",{key:e.type.name,className:"list-group-item"},e.type.name)}))),r.a.createElement("h4",{className:"mb-3"},"Stats"),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement(T,{statistics:f}))),r.a.createElement(i.b,{to:"/",className:"btn btn-secondary mb-5"},"Back"))})))}}]),a}(t.Component),R=(a(195),a(126)),U=a.n(R),V=new m.a({uri:"/graphql"});var X=function(){return r.a.createElement(o.a,{client:V},r.a.createElement(i.a,null,r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"my-center my-3"},r.a.createElement("img",{width:"85%",src:U.a}))),r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/pokemon/:name",component:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.4f82ab07.chunk.js.map