(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-view"],{3694:function(t,c,e){"use strict";e("a191")},a191:function(t,c,e){},d2f1:function(t,c,e){"use strict";e.r(c);e("b0c0"),e("a4d3"),e("e01a");var r=e("7a23"),o=Object(r["J"])("data-v-2c2b416c");Object(r["u"])("data-v-2c2b416c");var n={id:"product",class:"container-lg container-fluid"},a=Object(r["f"])("Go back"),s={key:2,class:"row"},b={class:"col-lg-6 text-center"},l={class:"col-lg-3 col-md-6 col-sm-7"},i={class:"list-group list-group-flush"},u={class:"list-group-item"},d={class:"h4 mb-0"},O={class:"list-group-item"},j={class:"list-group-item"},g=Object(r["g"])("span",{class:"badge badge-dark"},"Price",-1),p={class:"list-group-item"},m=Object(r["g"])("span",{class:"badge badge-dark"},"Description",-1),f={class:"col-lg-3 col-md-6 col-sm-5"},k={class:"list-group"},v={class:"list-group-item"},w=Object(r["f"])(" Price: "),y={class:"list-group-item"},h=Object(r["f"])(" Status: "),B={key:0,class:"list-group-item"},S=Object(r["f"])(" Quantity: "),I={class:"list-group-item"};Object(r["s"])();var C=o((function(t,c,e,C,T,_){var q=Object(r["z"])("router-link"),x=Object(r["z"])("v-loader"),z=Object(r["z"])("v-alert"),L=Object(r["z"])("v-rating");return Object(r["r"])(),Object(r["d"])("div",n,[Object(r["g"])(q,{to:{name:"home"},class:"btn btn-dark mb-3"},{default:o((function(){return[a]})),_:1}),C.isLoading?(Object(r["r"])(),Object(r["d"])(x,{key:0})):C.error.message?(Object(r["r"])(),Object(r["d"])(z,{key:1},{default:o((function(){return[Object(r["f"])(Object(r["B"])(C.error.message),1)]})),_:1})):(Object(r["r"])(),Object(r["d"])("div",s,[Object(r["g"])("div",b,[Object(r["g"])("img",{class:"img-fluid",src:C.product.image,alt:"".concat(C.product.name," image")},null,8,["src","alt"])]),Object(r["g"])("div",l,[Object(r["g"])("ul",i,[Object(r["g"])("li",u,[Object(r["g"])("h2",d,Object(r["B"])(C.product.name),1)]),Object(r["g"])("li",O,[Object(r["g"])(L,{value:C.product.rating,text:" ".concat(C.product.numReviews," reviews")},null,8,["value","text"])]),Object(r["g"])("li",j,[g,Object(r["f"])(" $"+Object(r["B"])(C.product.price),1)]),Object(r["g"])("li",p,[m,Object(r["f"])(" "+Object(r["B"])(C.product.description),1)])])]),Object(r["g"])("div",f,[Object(r["g"])("ul",k,[Object(r["g"])("li",v,[w,Object(r["g"])("strong",null,"$"+Object(r["B"])(C.product.price),1)]),Object(r["g"])("li",y,[h,Object(r["g"])("strong",null,Object(r["B"])(C.product.countInStock>0?"In Stock":"Out of Stock"),1)]),C.product.countInStock>0?(Object(r["r"])(),Object(r["d"])("li",B,[S,Object(r["H"])(Object(r["g"])("select",{class:"form-control w-50","onUpdate:modelValue":c[1]||(c[1]=function(t){return C.quantity=t})},[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(C.product.countInStock,(function(t){return Object(r["r"])(),Object(r["d"])("option",{key:t},Object(r["B"])(t),1)})),128))],512),[[r["F"],C.quantity]])])):Object(r["e"])("",!0),Object(r["g"])("li",I,[Object(r["g"])("button",{class:"btn btn-block btn-dark",type:"button",disabled:0===C.product.countInStock,onClick:c[2]||(c[2]=function(t){return C.addToCart(C.product._id,C.quantity)})}," ADD TO CART ",8,["disabled"])])])])]))])})),T=(e("d3b7"),e("3ca3"),e("ddb0"),e("c879")),_=e("36c6"),q={name:"Product",components:{VRating:_["a"],VLoader:Object(r["h"])((function(){return e.e("loader-component").then(e.bind(null,"300d"))})),VAlert:Object(r["h"])((function(){return e.e("message-component").then(e.bind(null,"1336"))}))},setup:function(){var t=Object(r["w"])(1),c=Object(T["a"])(),e=c.product,o=c.setProduct,n=c.isLoading,a=c.error,s=c.addToCart;return o(),{product:e,isLoading:n,error:a,quantity:t,addToCart:s}}};e("3694");q.render=C,q.__scopeId="data-v-2c2b416c";c["default"]=q}}]);
//# sourceMappingURL=product-view.78cab370.js.map