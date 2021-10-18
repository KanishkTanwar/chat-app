(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},107:function(e,t,s){"use strict";s.r(t),s.d(t,"store",(function(){return J}));var r=s(0),a=s.n(r),n=s(28),c=s.n(n),i=s(9),u=s(19),o=s(2),l=s(26),p=s.n(l),d={activeUser:{},allUsers:{}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":case"UPDATE_USER":return{allUsers:p.a.mapKeys([t.payload],"uuid"),activeUser:t.payload};case"FETCH_USERS":return Object(o.a)(Object(o.a)({},e),{},{allUsers:p.a.mapKeys(t.payload,"uuid")});case"DELETE_USER":return p.a.omit(e,t.payload);default:return e}},j=s(36),b={socket:null,userCount:0,allMessageArray:[],userStartToType:[],isTyping:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SOCKET":case"UPDATE_SOCKET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{socket:t.payload});case"GET_USER_COUNT":return Object(o.a)(Object(o.a)({},e),{},{userCount:t.payload});case"USER_REMOVE":return Object(o.a)(Object(o.a)({},e),{},{socket:null,allMessageArray:[]});case"USER_RECIEVE_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{allMessageArray:[].concat(Object(j.a)(e.allMessageArray),[t.payload])});case"USER_START_TO_TYPE":return Object(o.a)(Object(o.a)({},e),{},{userStartToType:[].concat(Object(j.a)(e.userStartToType),[t.payload])});case"SET_USER_TYPING_STATUS":return Object(o.a)(Object(o.a)({},e),{},{isTyping:!0});case"REMOVE_USER_TYPING":var s=e.userStartToType.filter((function(e){return e.userName!==t.payload.userName||e.uuid!==t.payload.uuid}));return Object(o.a)(Object(o.a)({},e),{},{userStartToType:s,isTyping:!1});default:return e}},O=Object(u.b)({user:m,socket:h}),v=s(53),f=s(13),y=s(14),T=s(16),_=s(15),g=s(109),S=s(11),E=Object(S.a)(),N=(s(67),s(1)),U=function(e){Object(T.a)(s,e);var t=Object(_.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){return this.props.fetchUsers?Object(N.jsxs)("section",{className:"userlist",children:[Object(N.jsx)("h2",{className:"userlist__heading",children:"ALL users available"}),this.props.users.map((function(e){return Object(N.jsx)("h6",{className:"userlist__name",children:e.userName},e.uuid)}))]}):Object(N.jsx)("div",{className:"spinner"})}}]),s}(a.a.Component),x=Object(i.b)((function(e){var t=e.user;return{users:Object.values(t.allUsers)}}),{fetchUsers:function(){return function(e,t){t().socket.socket.on("allUsers",(function(t){e({type:"FETCH_USERS",payload:t})}))}}})(U),k=s(54),R=function(e){return function(t,s){var r;null===(r=s().socket.socket)||void 0===r||r.emit("removeUserTyping",e)}},A=function(e){return{type:"UPDATE_SOCKET_STATUS",payload:e}},C=function(e){return{type:"GET_USER_COUNT",payload:e}},q=(s(99),function(e){var t;return Object(N.jsxs)("div",{className:"chat__pane",children:[Object(N.jsxs)("ul",{children:[e.message.map((function(t){var s=t.message,r=t.user;return Object(N.jsxs)("li",{className:"chat__description",children:[Object(N.jsx)("span",{className:r.userName===e.userName?"usernameBlue":"usernameRed",children:r.userName}),": ",Object(N.jsx)("span",{children:s.message})]},s.uuid)})),Object(N.jsx)("div",{className:"chat__border"})]}),null===(t=e.userStartToType)||void 0===t?void 0:t.map((function(e,t){return Object(N.jsxs)("p",{className:"chat__typing",children:[e.userName,Object(N.jsx)("span",{className:"chat__dot1",children:"."}),Object(N.jsx)("span",{className:"chat__dot2",children:"."}),Object(N.jsx)("span",{className:"chat__dot3",children:"."})]},t)}))]})}),M=s(37),w=s(110),D=(s(100),Object(i.b)((function(e){var t=e.socket;return{user:e.user.activeUser,isTyping:t.isTyping}}),{userStartToType:function(e){return function(t,s){var r;null===(r=s().socket.socket)||void 0===r||r.emit("userStartToType",e),t({type:"SET_USER_TYPING_STATUS"})}},removeUserTyping:R})((function(e){return Object(N.jsx)(M.b,{onSubmit:function(t,s){return function(e,t,s){t.reset({message:"",typing:!1}),s.onFormSubmit(Object(o.a)(Object(o.a)({},e),{},{uuid:Object(w.a)()}),s)}(t,s,e)},render:function(t){var s=t.handleSubmit,r=t.submitting,a=t.pristine,n=t.values,c=(t.touched,!0);return n.message&&!n.message.replace(/\s/g,"").length||(c=!1),e.isTyping&&!n.message&&e.removeUserTyping(e.user),Object(N.jsxs)("form",{onSubmit:s,className:"form",style:e.marginTop,children:[Object(N.jsx)(M.a,{name:e.name,placeholder:e.placeholder,className:"form__input",render:function(t){var s=t.input,r=t.meta;return Object(N.jsx)("input",Object(o.a)(Object(o.a)({},s),{},{className:"form__input",onChange:function(t){s.onChange(t),e.monitorTyping&&r.active&&!r.dirty&&e.userStartToType(e.user)}}))}}),Object(N.jsx)("button",{className:"form__button",type:"submit",disabled:r||a||c,children:"Submit"})]})}})}))),P=(s(101),function(e){Object(T.a)(s,e);var t=Object(_.a)(s);function s(){var e;Object(f.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).onFormSubmit=function(t){e.props.userSendMessage({message:t,user:e.props.user}),new Audio("https://chat-app-co.herokuapp.com/bubble_pop_3.mp3").play(),document.querySelector(".chat__border").scrollIntoView({behavior:"smooth"}),e.props.removeUserTyping(e.props.user)},e}return Object(y.a)(s,[{key:"componentDidMount",value:function(){if(!this.props.user.userName)return E.push("/"),null;this.props.createSocketConnection()}},{key:"componentWillUnmount",value:function(){var e;this.props.removeUserTyping(this.props.user),null===(e=this.props)||void 0===e||e.userRemove()}},{key:"render",value:function(){return this.props.socket&&this.props.socket.connected?Object(N.jsxs)("section",{className:"chat",children:[Object(N.jsxs)("div",{className:"chat__left",children:[Object(N.jsxs)("h1",{className:"chat__heading",children:["Welcome ",this.props.user.userName]}),Object(N.jsxs)("h4",{className:"chat__secondary",children:["Total users connected ",this.props.userCount]}),Object(N.jsx)(q,{message:this.props.message,userStartToType:this.props.userStartToType,userName:this.props.user.userName})]}),Object(N.jsx)("div",{className:"chat__right",children:Object(N.jsx)(x,{})}),Object(N.jsx)(D,{placeholder:"Enter message",name:"message",onFormSubmit:this.onFormSubmit,monitorTyping:!0,marginTop:{top:"90%"}})]}):Object(N.jsx)("div",{className:"spinner"})}}]),s}(a.a.Component)),F=Object(i.b)((function(e){var t=e.socket,s=e.user;return{socket:Object(o.a)({},t.socket),userCount:t.userCount,message:t.allMessageArray,user:s.activeUser,userStartToType:t.userStartToType}}),{createSocketConnection:function(){return function(e,t){var s=Object(k.io)("https://chat-app-co.herokuapp.com/",{path:"/global",transports:["polling","websocket"]});s.on("connect",(function(){var r=t().user.activeUser;e({type:"UPDATE_USER",payload:Object(o.a)(Object(o.a)({},r),{},{socketId:s.id})}),e(A(s)),s.emit("userConnected",t().user.activeUser),s.on("userCount",(function(t){e(C(t))})),s.on("serverMessage",(function(t){var s=t.messageObj;e({type:"USER_RECIEVE_MESSAGE",payload:s}),document.hasFocus()||new Audio("https://chat-app-co.herokuapp.com/juntos-607.mp3").play()})),s.on("userStartToType",(function(t){e({type:"USER_START_TO_TYPE",payload:t})})),s.on("removeUserTyping",(function(t){e({type:"REMOVE_USER_TYPING",payload:t})})),s.on("userJoinTheChat",(function(t){e({type:"USER_JOIN_THE_CHAT",payload:t})}))})),e(A(s))}},userRemove:function(){return function(e,t){var s;null===(s=t().socket.socket)||void 0===s||s.emit("userRemove"),e({type:"USER_REMOVE"})}},userSendMessage:function(e){return function(t,s){s().socket.socket.emit("userMessage",e)}},removeUserTyping:R})(P),I=(s(102),function(e){Object(T.a)(s,e);var t=Object(_.a)(s);function s(){var e;Object(f.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).onFormSubmit=function(t){var s={userName:t.userName,uuid:Object(w.a)()};e.props.addUser(s),E.push("/chat")},e}return Object(y.a)(s,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"auth",children:Object(N.jsx)(D,{placeholder:"Enter name",onFormSubmit:this.onFormSubmit,name:"userName",marginTop:{top:"50%"}})})}}]),s}(a.a.Component)),G=Object(i.b)(null,{addUser:function(e){return{type:"ADD_USER",payload:e}}})(I),V=[{id:1,title:"Engineering",owner:"kanishk",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum elit, quis fringilla leo. Suspendisse potenti. Nulla porta arcu leo, ut hendrerit odio tristique aliquet. Aliquam scelerisque odio urna, sit amet fringilla dui blandit vel. Mauris auctor posuere gravida. Nam imperdiet vulputate feugiat. Mauris faucibus ligula vel leo varius rutrum id ut odio. Curabitur enim neque, dignissim nec suscipit vitae, luctus in neque. Praesent nec odio posuere, tempor neque sed, vulputate orci. Nunc sapien libero, ullamcorper eu fermentum eget, vehicula eu felis. Aenean ut neque urna."},{id:2,title:"Love",owner:"kanishk",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum elit, quis fringilla leo. Suspendisse potenti. Nulla porta arcu leo, ut hendrerit odio tristique aliquet. Aliquam scelerisque odio urna, sit amet fringilla dui blandit vel. Mauris auctor posuere gravida. Nam imperdiet vulputate feugiat. Mauris faucibus ligula vel leo varius rutrum id ut odio. Curabitur enim neque, dignissim nec suscipit vitae, luctus in neque. Praesent nec odio posuere, tempor neque sed, vulputate orci. Nunc sapien libero, ullamcorper eu fermentum eget, vehicula eu felis. Aenean ut neque urna."}],L=function(){return Object(N.jsxs)("section",{className:"rooms",children:[Object(N.jsx)("h1",{children:"All available rooms"}),V.map((function(e){return Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("div",{className:"card__title",children:e.title}),Object(N.jsx)("div",{className:"card__description",children:e.description})]},e.id)}))]})},Y=(s(103),function(e){Object(T.a)(s,e);var t=Object(_.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(g.b,{history:E,children:[Object(N.jsx)(g.a,{path:"/",exact:!0,children:Object(N.jsx)(G,{})}),Object(N.jsx)(g.a,{path:"/rooms",exact:!0,children:Object(N.jsx)(L,{})}),Object(N.jsx)(g.a,{path:"/chat",children:Object(N.jsx)(F,{})})]})})}}]),s}(a.a.Component)),K=Y,H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,J=Object(u.d)(O,H(Object(u.a)(v.a)));c.a.render(Object(N.jsx)(i.a,{store:J,children:Object(N.jsx)(K,{})}),document.querySelector("#root"))},67:function(e,t,s){},99:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.d664e056.chunk.js.map