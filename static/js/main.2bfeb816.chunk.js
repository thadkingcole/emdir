(this.webpackJsonpemdir=this.webpackJsonpemdir||[]).push([[0],{48:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),s=a.n(c),o=a(16),l=a(17),i=a(25),u=a(23),m=a(44),h=a(21),d=a(42),p=a(30),E=a(47),f=a(43),v=a(10),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchTerm:""},e.handleInputChange=function(t){var a=t.target,r=a.name,n=a.value;e.setState(Object(d.a)({},r,n))},e.searchForName=function(){var t=e.props.users.filter((function(t){return t.name.first.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.name.last.toLowerCase().includes(e.state.searchTerm.toLowerCase())}));e.props.onUserSearch(t)},e.searchForLocation=function(){var t=e.props.users.filter((function(t){return t.location.city.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.location.state.toLowerCase().includes(e.state.searchTerm.toLowerCase())}));e.props.onUserSearch(t)},e.searchForBirthday=function(){var t=e.props.users.filter((function(t){return new Date(t.dob.date).toLocaleDateString().includes(e.state.searchTerm)}));e.props.onUserSearch(t)},e.searchForPronouns=function(){var t=e.props.users.filter((function(t){return e.state.searchTerm.toLowerCase().includes("she")||e.state.searchTerm.toLowerCase().includes("her")?"female"===t.gender:!("he"!==e.state.searchTerm.toLowerCase()&&!e.state.searchTerm.toLowerCase().includes("him"))&&"male"===t.gender}));e.props.onUserSearch(t)},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{placeholder:"Search the directory","aria-label":"Search the directory","aria-describedby":"basic-addon2",as:"input",onChange:this.handleInputChange,name:"searchTerm",value:this.state.searchTerm,type:"text"}),n.a.createElement(f.a,{as:p.a.Append,variant:"outline-secondary",title:"Search For",id:"emdir-field-select"},n.a.createElement(v.a.Item,{onSelect:this.searchForName},"Name"),n.a.createElement(v.a.Item,{onSelect:this.searchForLocation},"Location"),n.a.createElement(v.a.Item,{onSelect:this.searchForBirthday},"Birthday"),n.a.createElement(v.a.Item,{onSelect:this.searchForPronouns},"Pronouns")))}}]),a}(r.Component),w=a(12),b=a(13);var S=function(e){return n.a.createElement(m.a,{fluid:!0},n.a.createElement(h.a,null,n.a.createElement("h1",{className:"display-4"},n.a.createElement(w.a,{icon:b.a})," Employee Directory"),n.a.createElement(y,{users:e.users,onUserSearch:e.onUserSearch})))},g=a(45);var C=function(e){return n.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm"},n.a.createElement("thead",{className:"text-center"},n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Contact"),n.a.createElement("th",null,"Location"),n.a.createElement("th",null,"Birthday"),n.a.createElement("th",null,"Pronouns"))),n.a.createElement("tbody",null,e.users.map((function(e){return n.a.createElement("tr",{key:e.id.value},n.a.createElement("td",{className:"text-center"},n.a.createElement("img",{src:e.picture.large,alt:e.name.last}),n.a.createElement("br",null),e.name.first," ",e.name.last),n.a.createElement("td",null,n.a.createElement(w.a,{icon:b.d,size:"2x"})," ",e.phone,n.a.createElement("br",null),n.a.createElement(w.a,{icon:b.c,size:"2x"})," ",e.cell,n.a.createElement("br",null),n.a.createElement(w.a,{icon:b.b,size:"2x"})," ",e.email),n.a.createElement("td",null,e.location.city,", ",e.location.state),n.a.createElement("td",null,new Date(e.dob.date).toLocaleDateString()),n.a.createElement("td",null,"male"===e.gender?"he/him":"she/her"))}))))},L=a(46),T=a.n(L),j=function(){return T.a.get("https://randomuser.me/api/?results=200&nat=us&seed=".concat("thadkingcole"))},k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={users:[]},e.onUserSearch=function(t){e.setState({users:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){e.setState({users:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(S,{users:this.state.users,onUserSearch:this.onUserSearch}),n.a.createElement(h.a,null,n.a.createElement(C,{users:this.state.users})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.2bfeb816.chunk.js.map