(this["webpackJsonpmultiverse-avengers"]=this["webpackJsonpmultiverse-avengers"]||[]).push([[0],{15:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(16),j=c.n(n),i=c(20),a=c(12),b=c.n(a),l=c(17),o=c(5),h=(c(26),c(0)),d=function(e){var t=e.handleChange,c=e.searchText;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{style:{width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"},id:"search-bar",type:"search",value:c,placeholder:"Search for your character (e.g., Superman, Goku, etc...)",onChange:t})})},O=function(e){var t=e.handleChange,c=e.searchText,r=e.input,s=e.updateInput;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{input:r,searchText:c,handleChange:t,onChange:s}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},x=function(e){console.log(e.addHeroToTeam),console.log(e.heroList);var t=Object(r.useState)([]),c=Object(o.a)(t,2),s=c[0],n=c[1];return console.log(s,n),Object(h.jsx)(h.Fragment,{children:e.heroList?e.heroList.map((function(t){if(console.log(e.heroList),t)return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)("img",{src:t.image.url,alt:"superhero pic"}),Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("div",{children:["Alter Ego: ",t.biography["full-name"]]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["Race: ",t.appearance.race]}),Object(h.jsxs)("div",{children:["Gender: ",t.appearance.gender]}),Object(h.jsxs)("div",{children:["Height: ",t.appearance.height[0]," ft."]}),Object(h.jsxs)("div",{children:["Weight: ",t.appearance.weight[0]]}),Object(h.jsxs)("div",{children:["Mass: ",t.appearance.weight[1]]}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"Aliases"}),Object(h.jsx)("div",{children:t.biography.aliases[0]}),Object(h.jsx)("div",{children:t.biography.aliases[1]}),Object(h.jsx)("div",{children:t.biography.aliases[2]}),Object(h.jsx)("div",{children:t.biography.aliases[3]}),Object(h.jsx)("div",{children:t.biography.aliases[4]}),Object(h.jsx)("div",{children:t.biography.aliases[5]}),Object(h.jsx)("br",{})]}),Object(h.jsx)("h3",{children:"Connections"}),Object(h.jsxs)("div",{children:["Group-Affiliations: ",t.connections["group-affiliation"]]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["Relatives: ",t.connections.relatives]}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"Work"}),Object(h.jsxs)("div",{children:["Base of Operations: ",t.work.base]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["Purpose: ",t.work.occupation]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"stats",children:[Object(h.jsx)("h3",{children:"Power Stats"}),Object(h.jsxs)("div",{children:["Strength: ",t.powerstats.strength]}),Object(h.jsxs)("div",{children:["Combat: ",t.powerstats.combat]}),Object(h.jsxs)("div",{children:["Intelligence: ",t.powerstats.intelligence]}),Object(h.jsxs)("div",{children:["Durability: ",t.powerstats.durability]}),Object(h.jsxs)("div",{children:["Speed: ",t.powerstats.speed]}),Object(h.jsxs)("div",{children:["Power: ",t.powerstats.power]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)("button",{onClick:function(){return e.addHeroToTeam(t.id)},children:"ADD TO TEAM"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})):Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Sorry, it appears that character is missing in action!"})})})};var u=function(e){var t=e.team.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:t.image.url,alt:"superhero pic"}),Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("button",{onClick:function(){return e.removeHeroFromTeam(t.id)},children:"REMOVE FROM TEAM"})]})}));return console.log(e.team),Object(h.jsxs)("div",{className:"TheTeam",children:[Object(h.jsx)("h1",{children:"MY TEAM"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"HeroSelect",children:e.team.length>0?t:null}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"ONCE YOUR TEAM HAS BEEN ASSEMBLED..."}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"AND YOU BELIEVE THEY'RE STRONG ENOUGH..."}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"CLICK ON THE BUTTON BELOW..."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"overlay",children:Object(h.jsx)("div",{className:"villains"})})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"thebutton",children:Object(h.jsx)("button",{onClick:function(){return alert("NEW CHALLENGERS HAVE ARRIVED")},children:"FIGHT!"})}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"TO FACE YOUR GREATEST CHALLENGE!"}),Object(h.jsx)("br",{})]})},p=c(6),v=c(2);c(15);var g=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),j=Object(o.a)(n,2),a=(j[0],j[1]),d=Object(r.useState)(),g=Object(o.a)(d,2),m=g[0],f=g[1],E=Object(r.useState)(""),T=Object(o.a)(E,2),N=T[0],w=T[1],S=Object(r.useState)([]),C=Object(o.a)(S,2),y=(C[0],C[1]),A=Object(r.useState)([]),H=Object(o.a)(A,2),L=H[0],F=H[1],M=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.superheroapi.com/api.php/10158049149961360/search/".concat(N)).then((function(e){return e.json()})).then((function(e){s(e.results),f(e.results),y(e),console.log("Finding Hero",e.results)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(c),Object(h.jsx)("div",{className:"background",children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"header"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"avengers",children:Object(h.jsx)("h1",{children:"MULTIVERSE AVENGERS"})}),Object(h.jsxs)("div",{className:"nav-bar",children:[Object(h.jsx)(p.b,{to:"/",children:Object(h.jsx)("h2",{children:"HOME"})}),Object(h.jsx)(p.b,{to:"./MyTeam.js",children:Object(h.jsx)("h2",{children:"MY TEAM"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(v.a,{exact:!0,path:"/",children:[Object(h.jsxs)("div",{className:"HeroSignal",children:[Object(h.jsx)("h2",{children:"Call forth your warrior and they will appear, ready for battle!"}),Object(h.jsx)(O,{searchText:N,updateInput:function(e){var t=m.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));a(e),s(t)},handleChange:function(e){var t=e.target.value;w(t),0===t.length&&y([]),t.length>3&&M()}})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(x,{heroList:c,addHeroToTeam:function(e){var t=c.find((function(t){return t.id===e}));F([].concat(Object(i.a)(L),[t]))}})]}),Object(h.jsx)(v.a,{exact:!0,path:"/MyTeam.js",component:u,children:Object(h.jsx)(u,{team:L,removeHeroFromTeam:function(e){var t=L.filter((function(t){return t.id!==e}));F(t)}})}),Object(h.jsx)("div",{className:"TheFoot"})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),r(e),s(e),n(e),j(e)}))};j.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(g,{})})}),document.getElementById("root")),m()}},[[36,1,2]]]);
//# sourceMappingURL=main.65301469.chunk.js.map