(this.webpackJsonpbirthdaylistkeeper=this.webpackJsonpbirthdaylistkeeper||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/loading_img.f12d8a99.gif"},13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(3),i=a(2),d=a(6),s=a(7),c=a(12),m=a(8),r=a(1),h=a(11),u=a(0),o=a.n(u),b=a(9),g=a.n(b),p=function(e){return o.a.createElement("form",{className:"form-group",onSubmit:e.onSubmit},o.a.createElement("input",{className:"name",name:"name",onChange:e.onChange,placeholder:"Celebrant's Name",value:e.name,required:!0}),o.a.createElement("input",{className:"day",type:"number",name:"day",min:"1",max:"31",placeholder:"day",onChange:e.onChange,value:e.day}),o.a.createElement("input",{className:"dob-entry",name:"dob",type:"month",onChange:e.onChange,value:e.dob}),o.a.createElement("button",{type:"submit",className:"btn btn-success"},"Add to list"))},E=function(e){return o.a.createElement("form",{onSubmit:e.handleUpdate},o.a.createElement("input",{className:"",name:"name",onChange:e.handleChange,defaultValue:e.name,placeholder:"Celebrant's Name"}),o.a.createElement("input",{className:"",type:"number",name:"day",min:"1",max:"31",onChange:e.handleChange,defaultValue:e.day,placeholder:"day"}),o.a.createElement("input",{className:"",name:"dob",type:"month",onChange:e.handleChange,defaultValue:e.dob}),o.a.createElement("button",{type:"submit"},"update"),o.a.createElement("button",{onClick:e.handleEditCancel},"cancel"))},y=(a(18),a(10)),f=a.n(y),C=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",day:"",dob:"",items:[],currentItem:{},dataEdited:{},toggle:!1,loading:!1},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(r.a)(a)),a.handleDelete=a.handleDelete.bind(Object(r.a)(a)),a.handleEdit=a.handleEdit.bind(Object(r.a)(a)),a.handleEditCancel=a.handleEditCancel.bind(Object(r.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(r.a)(a)),a.dataChange=a.dataChange.bind(Object(r.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(i.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.day,l=t.dob,i=t.items;i.push({name:a,day:n,dob:l}),this.setState({items:i,name:"",day:"",dob:""})}},{key:"handleDelete",value:function(e){var t=this.state.items.filter((function(t,a){return e!==a}));this.setState({items:t})}},{key:"handleEdit",value:function(e){this.setState({currentItem:Object(l.a)({},this.state.items[e]),toggle:!0})}},{key:"handleEditCancel",value:function(){this.setState({currentItem:{},toggle:!1})}},{key:"handleUpdate",value:function(e){e.preventDefault();var t=this.state.currentItem,a=this.state.items.indexOf(t),l=Object(n.a)(this.state.items);l.splice(a,1,this.state.dataEdited),this.setState({items:Object(n.a)(l),toggle:!1})}},{key:"dataChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState((function(e){return{dataEdited:Object(l.a)({},e.dataEdited,Object(i.a)({},n,a))}}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){setTimeout((function(){e.setState({loading:!1})}),2e3)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main"},this.state.loading?o.a.createElement("div",{className:"loading-icon"},o.a.createElement("center",null,o.a.createElement("img",{src:f.a,alt:"Loading..."}))):o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"title"},"Birthday List Keeper "),o.a.createElement(p,{name:this.state.name,day:this.state.day,dob:this.state.dob,onChange:this.handleChange,onSubmit:this.handleSubmit}),o.a.createElement("ul",{className:"item-list"},this.state.toggle?o.a.createElement(E,{name:this.state.currentItem.name,day:this.state.currentItem.day,dob:this.state.currentItem.dob,handleChange:this.handleChange,handleUpdate:this.handleUpdate,handleEditCancel:this.handleEditCancel}):this.state.items.map((function(t,a){return o.a.createElement("li",{key:a,className:"item"},o.a.createElement("div",{className:"item-det"},o.a.createElement("span",null," ",t.name," "),o.a.createElement("span",null," ",t.day," "),o.a.createElement("span",null," ",t.dob," ")),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"edit btn btn-light",onClick:function(){return e.handleEdit(a)}},"edit"),o.a.createElement("button",{className:"del btn btn-danger",onClick:function(){return e.handleDelete(a)}},"delete")))})))))}}]),t}(o.a.Component);g.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7aa99825.chunk.js.map