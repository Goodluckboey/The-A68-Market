(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,t,a){e.exports={bountyCard:"Bounties_bountyCard__2wk7L",bountyImage:"Bounties_bountyImage__cUwzl",bountyInfo:"Bounties_bountyInfo__2FrVM",bountyCardGroup:"Bounties_bountyCardGroup__lupyc",slider:"Bounties_slider__FAKgh"}},13:function(e,t,a){e.exports={navbar:"NavBar_navbar__kCr1k",active:"NavBar_active__391kp"}},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(25),c=a.n(s),n=a(5),i=(a(23),a(18)),r=a.n(i),l=a(20),o=a(21),d=a(12),j=a(3),b=a(1),u=a(13),h=a.n(u),x=a(0),O=function(e){var t=e.cart.length;return Object(x.jsx)("header",{className:h.a.navbar,children:Object(x.jsxs)("nav",{children:[Object(x.jsxs)("ul",{className:"links",children:[Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{activeClassName:h.a.active,style:{color:"gold"},to:"/bounties",children:"Bounties"})}),Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{activeClassName:h.a.active,to:"/fullcollection",children:"Collection"})}),Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{activeClassName:h.a.active,to:"/pistols",children:"Blaster Pistols"})}),Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{activeClassName:h.a.active,to:"/rifles",children:"Rifle Variants"})}),Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{activeClassName:h.a.active,to:"/cannons",children:"Repeating Cannons"})})]}),Object(x.jsxs)("div",{id:"cartHolder",children:[Object(x.jsx)(n.b,{to:"/yourcart",children:Object(x.jsx)("img",{id:"cart",src:"https://img.icons8.com/material-rounded/48/ffffff/favorite-cart.png",alt:""})}),Object(x.jsx)("h1",{id:"Num-Cart-Items",children:t})]})]})})},p=function(e){var t=Object(b.useState)(),a=Object(j.a)(t,2),s=a[0],c=a[1];Object(b.useEffect)((function(){c(e.fullData)}),[e]);var n=s?s.map((function(t){if("Pistol"===t.type)return Object(x.jsxs)("div",{className:"individualCards",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsx)("section",{className:"image-container",children:Object(x.jsx)("img",{className:"card-images",src:t.url1,alt:""})}),Object(x.jsxs)("ul",{className:"list",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("li",{style:{fontWeight:"bold"},children:[t.cost," Galactic Credits"]}),Object(x.jsxs)("li",{children:["Weight: Approximately ",t.weight," kg"]}),Object(x.jsx)("li",{style:{fontWeight:"bold"},children:t.manufacturer}),Object(x.jsx)("br",{}),Object(x.jsx)("li",{children:t.short})]}),Object(x.jsx)("div",{className:"button-div",children:Object(x.jsx)("button",{className:"purchase-button",onClick:function(){return e.addToCart(t)},children:"ADD TO CART"})})]})})):"Loading";return Object(x.jsx)("div",{className:"weapon-Card","data-aos":"fade-down","data-aos-easing":"ease-in-out","data-aos-delay":"50","data-aos-duration":"1000",children:n})},f=function(e){var t=Object(b.useState)(),a=Object(j.a)(t,2),s=a[0],c=a[1];Object(b.useEffect)((function(){c(e.fullData)}),[e]);var n=s?s.map((function(t){if("Rifle"===t.type)return Object(x.jsxs)("div",{className:"individualCards",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsx)("section",{className:"image-container",children:Object(x.jsx)("img",{className:"card-images",src:t.url1,alt:""})}),Object(x.jsxs)("ul",{className:"list",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("li",{style:{fontWeight:"bold"},children:[t.cost," Galactic Credits"]}),Object(x.jsxs)("li",{children:["Weight: Approximately ",t.weight," kg"]}),Object(x.jsx)("li",{style:{fontWeight:"bold"},children:t.manufacturer}),Object(x.jsx)("br",{}),Object(x.jsx)("li",{children:t.short})]}),Object(x.jsx)("div",{className:"button-div",children:Object(x.jsx)("button",{className:"purchase-button",onClick:function(){return e.addToCart(t)},children:"ADD TO CART"})})]})})):"Loading";return Object(x.jsx)("div",{className:"weapon-Card","data-aos":"fade-down","data-aos-delay":"50","data-aos-duration":"1000",children:n})},m=function(e){var t=Object(b.useState)(),a=Object(j.a)(t,2),s=a[0],c=a[1];Object(b.useEffect)((function(){c(e.fullData)}),[e]);var n=s?s.map((function(t){if("Cannon"===t.type)return Object(x.jsxs)("div",{className:"individualCards",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsx)("section",{className:"image-container",children:Object(x.jsx)("img",{className:"card-images",src:t.url1,alt:""})}),Object(x.jsxs)("ul",{className:"list",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("li",{style:{fontWeight:"bold"},children:[t.cost," Galactic Credits"]}),Object(x.jsxs)("li",{children:["Weight: Approximately ",t.weight," kg"]}),Object(x.jsx)("li",{style:{fontWeight:"bold"},children:t.manufacturer}),Object(x.jsx)("br",{}),Object(x.jsx)("li",{children:t.short})]}),Object(x.jsx)("div",{className:"button-div",children:Object(x.jsx)("button",{className:"purchase-button",onClick:function(){return e.addToCart(t)},children:"ADD TO CART"})})]})})):"Loading";return Object(x.jsx)("div",{className:"weapon-Card","data-aos":"fade-down","data-aos-delay":"50","data-aos-duration":"1000",children:n})},g=a(2),v=a(28),y=function(e){var t=Object(v.useHistory)();return Object(x.jsx)("div",{children:Object(x.jsx)("form",{children:Object(x.jsx)("input",{id:"searchbar",type:"text",placeholder:"Search..",onKeyPress:function(a){return function(a){"Enter"===a.key&&(a.preventDefault(),t.push({pathname:"/searchpage"}),e.setSearchData(a.target.value))}(a)}})})})},C=a(9),w=(a(24),function(){return Object(x.jsx)("div",{className:"HomePage",children:Object(x.jsxs)(C.a,{options:{speed:"3000",autoplay:!0,type:"loop",pauseOnHover:!0,wheel:!0,drag:!0},children:[Object(x.jsx)(C.b,{"data-aos":"fade-right","data-aos-easing":"ease-in-out","data-aos-delay":"50","data-aos-duration":"1000",children:Object(x.jsxs)("div",{className:"firstRow",children:[Object(x.jsx)("img",{id:"banner-img",src:"https://www.gannett-cdn.com/-mm-/67a969c11789a820ee670841e5c9fc1af5e6e65b/c=0-290-3993-2546/local/-/media/2018/05/14/USATODAY/USATODAY/636619047136570397-HS-250517-R.jpg",alt:""}),Object(x.jsxs)("div",{id:"BM-Holder",children:[Object(x.jsx)("h1",{id:"blackMarketTitle",children:"Star Wars"}),Object(x.jsx)("h2",{style:{fontFamily:"A68MarketFont",color:"rgb(94, 0, 20)",fontSize:"50px"},children:"THE"}),Object(x.jsx)("h2",{id:"A68-Title",children:"A68 MARKET"}),Object(x.jsxs)("p",{style:{fontFamily:"A68MarketFont",color:"white",letterSpacing:"2px",lineHeight:"25px",fontSize:"20px",position:"relative",top:"-100px"},children:["Our Droids work 32 hours daily",Object(x.jsx)("br",{}),"For Hunters and Empires Exclusively"]}),Object(x.jsxs)("div",{className:"buttonGrp",children:[Object(x.jsx)(n.b,{to:"/fullcollection",children:Object(x.jsx)("button",{style:{position:"relative",top:"-85px",padding:"7px",fontWeight:"strong",left:"300px",margin:"10px",backgroundColor:"rgb(181, 118, 31)",color:"white",borderRadius:"5%"},children:"Browse Collection"})}),Object(x.jsx)(n.b,{to:"/yourcart",children:Object(x.jsx)("button",{style:{position:"relative",top:"-85px",padding:"7px",fontWeight:"bold",left:"300px",margin:"10px",backgroundColor:"transparent",color:"white",borderRadius:"5%"},children:"Your Cart"})})]})]})]})}),Object(x.jsx)(C.b,{children:Object(x.jsxs)("div",{className:"firstRow",children:[Object(x.jsx)("img",{id:"banner-img",style:{position:"relative",left:"960px"},src:"https://www.hollywoodreporter.com/wp-content/uploads/2019/11/huc-ff-000164_af015912-h_2019.jpg",alt:""}),Object(x.jsxs)("div",{id:"SecondHolder",style:{position:"relative",left:"-945px"},children:[Object(x.jsxs)("p",{style:{color:"white",fontFamily:"MYFirstFont",fontSize:"50px"},children:["Massacre at ",Object(x.jsx)("br",{}),"Arvala-7!"]}),Object(x.jsx)("p",{style:{color:"white",fontFamily:"thinnerFont",fontSize:"55px"},children:'Guild Hunter "Mando" Suspected!'}),Object(x.jsx)("img",{id:"mando",src:"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/The-Mandalorian-Helmet-and-Episode-1-Concept-Art.jpg",alt:""})]})]})}),Object(x.jsx)(C.b,{children:Object(x.jsx)("div",{className:"firstRow",children:Object(x.jsxs)("div",{style:{height:"387px",width:"100%"},children:[Object(x.jsxs)("h1",{style:{position:"absolute",color:"gold",zIndex:"500",fontFamily:"thinnerFont",fontSize:"50px",padding:"50px",backgroundColor:"rgba(10,10,10,0.5)"},children:["Sign up now for a chance ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"to buy your own Clone Army!"]}),Object(x.jsx)("img",{style:{objectfit:"none"},id:"banner-img-3",src:"https://i.imgur.com/MMpjTjK.jpeg",alt:""})]})})})]})})}),N=function(e){var t=e.cart,a=0,s=t.map((function(e,t){return a+=parseInt(e.cost),Object(x.jsxs)("div",{className:"shoppingCards",id:t,"data-aos":"flip-down","data-aos-easing":"ease-in-out","data-aos-delay":"20","data-aos-duration":"500",style:{backgroundColor:"rgba(53, 73, 84, 0.3)",borderRadius:"2%"},children:[Object(x.jsx)("h1",{style:{fontFamily:"A68MarketFont"},children:e.name}),Object(x.jsx)("section",{children:Object(x.jsx)("img",{className:"cart-images",src:e.url1,alt:"",style:{backgroundColor:"rgba(255,255,255,0.1)"}})}),Object(x.jsxs)("ul",{className:"list2",style:{width:"100%"},children:[Object(x.jsx)("br",{}),Object(x.jsxs)("li",{children:[e.cost," Galactic Credits"]}),Object(x.jsx)("li",{children:e.description}),Object(x.jsx)("li",{style:{fontWeight:"bold",textDecorationLine:"underline",width:"50%"},children:"NO REFUNDS"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{style:{backgroundColor:"grey",borderRadius:"100%",width:"30px",textAlign:"center",padding:"5px",position:"absolute",top:"-15px",left:"-15px"},onClick:function(){return c(t)},children:"X"})]})})),c=function(a){var s=t.filter((function(e,t){return t!==a}));e.setCart(s)};return Object(x.jsx)("div",{style:{color:"white",textAlign:"center"},children:e.cart.length>0?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{position:"relative",textAlign:"center"},children:"Please Review your purchases before submitting"}),Object(x.jsx)("div",{className:"cartItemsDiv",children:s}),Object(x.jsx)("div",{id:"resetCart",children:Object(x.jsxs)("div",{style:{display:"flex",marginLeft:" auto",marginTop:"75px",marginBottom:"100px"},children:[Object(x.jsxs)("div",{style:{position:"relative",margin:"auto",right:"-1110px",bottom:"50px",fontFamily:"mainText"},children:["Cart Total: ",a," Galactic Credits"]}),Object(x.jsx)("button",{onClick:function(){return Object(x.jsxs)("div",{id:"resetPrompt",style:{position:"absolute",width:"500px",height:"auto",backgroundColor:"white"},children:[e.setCart([]),console.log("resetCart Working")]})},style:{position:"relative",marginLeft:"auto"},children:"Reset Your Cart!"}),Object(x.jsx)("a",{className:"checkout",target:"_blank",href:"https://support.xfers.com/hc/article_attachments/360097138911/Screenshot_2021-06-01_at_12.49.19_PM.png",children:"Check Out"})]})})]}):Object(x.jsx)("h1",{style:{position:"relative",left:"830px"},children:"No purchases to review"})})},k=function(e){var t=Object(b.useState)(""),a=Object(j.a)(t,2),s=a[0],c=a[1],n=Object(b.useState)([]),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(b.useEffect)((function(){c(e.searchData),l(e.fullData)}),[e]),Object(x.jsx)("div",{className:"weapon-Card","data-aos":"fade-down","data-aos-easing":"ease-in-out","data-aos-delay":"50","data-aos-duration":"1000",children:r.map((function(t){return t.name.split(" ").map((function(a){return s.toLowerCase()===a.toLowerCase()?Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"individualCards",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsx)("section",{className:"image-container",children:Object(x.jsx)("img",{className:"card-images",src:t.url1,alt:""})}),Object(x.jsxs)("ul",{className:"list",children:[Object(x.jsxs)("li",{children:[t.cost," Galactic Credits"]}),Object(x.jsxs)("li",{children:["Weight: Approximately ",t.weight," kg"]}),Object(x.jsx)("li",{style:{fontWeight:"bold"},children:t.manufacturer}),Object(x.jsx)("br",{}),Object(x.jsx)("li",{children:t.short})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"button-div",children:Object(x.jsx)("button",{className:"purchase-button",onClick:function(){return e.addToCart(t)},children:"ADD TO CART"})})]})}):console.log("not found2222222222222222222222")}))}))})},A=function(e){var t=Object(b.useState)(),a=Object(j.a)(t,2),s=a[0],c=a[1];Object(b.useEffect)((function(){c(e.fullData)}),[e]);var n=s?s.map((function(t){return Object(x.jsxs)("div",{className:"individualCards",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsx)("section",{className:"image-container",children:Object(x.jsx)("img",{className:"card-images",src:t.url1,alt:""})}),Object(x.jsxs)("ul",{className:"list",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("li",{style:{fontWeight:"bold"},children:[t.cost," Galactic Credits"]}),Object(x.jsxs)("li",{children:["Weight: Approximately ",t.weight," kg"]}),Object(x.jsx)("li",{style:{fontWeight:"bold"},children:t.manufacturer}),Object(x.jsx)("br",{}),Object(x.jsx)("li",{children:t.short})]}),Object(x.jsx)("div",{className:"button-div",children:Object(x.jsx)("button",{className:"purchase-button",onClick:function(){return e.addToCart(t)},children:"ADD TO CART"})})]})})):"Loading";return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{fontFamily:"MyFirstFont",textAlign:"center",color:"white"},children:"Browse our full collection"}),Object(x.jsx)("div",{className:"weapon-Card","data-aos":"fade-down","data-aos-easing":"ease-in-out","data-aos-delay":"50","data-aos-duration":"1000",children:n})]})},D=a(10),R=a.n(D),T=function(e){return Object(x.jsx)("div",{className:R.a.bountyCardGroup,children:Object(x.jsx)(C.a,{className:R.a.slider,options:{width:"50%",speed:"14000",autoplay:!0,type:"loop",easing:"linear",perPage:4,pagination:!1,interval:0,arrows:!1},children:e.bountyData.map((function(e){return Object(x.jsx)(C.b,{"data-aos":"fade-right","data-aos-easing":"ease-in-out","data-aos-delay":"50","data-aos-duration":"1000",children:Object(x.jsxs)("div",{className:R.a.bountyCard,children:[Object(x.jsx)("img",{className:R.a.bountyImage,src:e.url1,alt:""}),Object(x.jsxs)("div",{className:R.a.bountyInfo,children:[Object(x.jsx)("h2",{className:R.a.bountyName,children:e.name}),Object(x.jsxs)("h3",{className:R.a.bountyPrice,children:[e.bounty," CREDITS"]})]})]})})}))})})};var S=function(){var e=Object(b.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(b.useState)([]),i=Object(j.a)(c,2),u=i[0],h=i[1],v=Object(b.useState)(""),C=Object(j.a)(v,2),D=C[0],R=C[1],S=Object(b.useState)([]),_=Object(j.a)(S,2),F=_[0],W=_[1],E=function(e){h((function(t){return[].concat(Object(d.a)(t),[e])}))},M=Object(b.useState)(""),B=Object(j.a)(M,2),V=B[0],G=B[1],H=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,c,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/weapons");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c=Object(l.a)(a.documents);try{for(i=function(){var e=n.value,t={};t.name=e.fields.name.stringValue,t.manufacturer=e.fields.manufacturer.stringValue,t.type=e.fields.type.stringValue,t.description=e.fields.description.stringValue,t.url1=e.fields.url1.stringValue,t.url2=e.fields.url2.stringValue,t.cost=e.fields.cost.integerValue,t.weight=e.fields.weight.integerValue,t.short=e.fields.short.stringValue,s((function(e){return[].concat(Object(d.a)(e),[t])}))},c.s();!(n=c.n()).done;)i()}catch(r){c.e(r)}finally{c.f()}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,s,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/bounties");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s=Object(l.a)(a.documents);try{for(n=function(){var e=c.value,t=[];t.name=e.fields.name.stringValue,t.url1=e.fields.url1.stringValue,t.bounty=e.fields.bounty.integerValue,W((function(e){return[].concat(Object(d.a)(e),[t])}))},s.s();!(c=s.n()).done;)n()}catch(i){s.e(i)}finally{s.f()}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){H(),I()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{arrayCheck:function(){console.log(a.documents)},cart:u}),Object(x.jsx)(n.b,{exact:!0,to:"/",children:Object(x.jsx)("h1",{id:"title",children:"STAR WARS"})}),Object(x.jsx)(y,{query:D,setQuery:R,setSearchData:G,searchData:V}),Object(x.jsx)(g.Route,{exact:!0,path:"/bounties",children:Object(x.jsx)(T,{bountyData:F})}),Object(x.jsx)(g.Route,{exact:!0,path:"/searchpage",children:Object(x.jsx)(k,{searchData:V,fullData:a,addToCart:E})}),Object(x.jsx)(g.Route,{exact:!0,path:"/fullcollection",children:Object(x.jsx)(A,{fullData:a,addToCart:E})}),Object(x.jsx)(g.Route,{exact:!0,path:"/yourcart",children:Object(x.jsx)(N,{cart:u,setCart:h})}),Object(x.jsx)(g.Route,{exact:!0,path:"/",children:Object(x.jsx)(w,{})}),Object(x.jsx)(g.Route,{exact:!0,path:"/pistols",children:Object(x.jsx)(p,{fullData:a,addToCart:E})}),Object(x.jsx)(g.Route,{exact:!0,path:"/rifles",children:Object(x.jsx)(f,{fullData:a,addToCart:E})}),Object(x.jsx)(g.Route,{exact:!0,path:"/cannons",children:Object(x.jsx)(m,{fullData:a,addToCart:E})}),Object(x.jsxs)("div",{className:"disclaimer",children:[Object(x.jsx)("p",{style:{textAlign:"center"},children:"Follow us!"}),Object(x.jsx)("div",{className:"iconsGroup",children:Object(x.jsxs)("a",{target:"_blank",href:"https://www.linkedin.com/in/patrick-boey/",children:[Object(x.jsx)("img",{className:"icon",src:"https://cdn-icons-png.flaticon.com/512/281/281764.png",alt:""}),Object(x.jsx)("img",{className:"icon",src:"https://cdn-icons-png.flaticon.com/512/124/124010.png",alt:""}),Object(x.jsx)("img",{className:"icon",src:"https://cdn-icons-png.flaticon.com/512/281/281769.png",alt:""}),Object(x.jsx)("img",{className:"icon",src:"https://cdn-icons-png.flaticon.com/512/124/124034.png",alt:""})," "]})}),Object(x.jsx)("p",{id:"rightsReserved",children:"All products shown here are works of fiction, and only in use for studying purposes. All Rights Reserved"})]})]})};c.a.render(Object(x.jsx)(n.a,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7facd5ad.chunk.js.map