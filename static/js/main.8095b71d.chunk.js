(this.webpackJsonpbirthdaylistkeeper=this.webpackJsonpbirthdaylistkeeper||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(3),i=a(2),r=a(6),s=a(7),c=a(10),d=a(8),m=a(1),u=a(11),o=a(0),h=a.n(o),b=a(9),f=a.n(b),g=function(){return h.a.createElement("div",{className:"loading-icon"},h.a.createElement("img",{src:"https://res.cloudinary.com/okafohenrie/image/upload/v1588758789/loading_img_gsmiq0.gif",alt:"loading...",className:"load_img"}))},y=function(){return h.a.createElement("center",null,h.a.createElement("img",{src:"https://res.cloudinary.com/okafohenrie/image/upload/v1588757939/blk1_kallfb.png",alt:"header_icon",className:"header_icon"}))},p=function(){return h.a.createElement("center",null,h.a.createElement("div",{className:"title"},"Birthday List Keeper "))},E=function(e){return h.a.createElement("form",{className:"form-group entry-pane",onSubmit:e.onSubmit},h.a.createElement("div",{className:"entry"},h.a.createElement("input",{className:"name-entry",name:"name",onChange:e.onChange,placeholder:"Celebrant's Name",value:e.name,required:!0}),h.a.createElement("input",{className:"day-entry",type:"number",name:"day",min:"1",max:"31",placeholder:"Day",onChange:e.onChange,value:e.day}),h.a.createElement("input",{className:"dob-entry",name:"dob",type:"month",onChange:e.onChange,value:e.dob}),h.a.createElement("button",{type:"submit",className:"btn-add btn-success"},"Add to List")))},v=function(e){return h.a.createElement("form",{onSubmit:e.handleUpdate},h.a.createElement("input",{className:"",name:"name",ref:e.nameRef,onChange:e.handleChange,placeholder:e.name}),h.a.createElement("input",{className:"",type:"number",name:"day",min:"1",max:"31",ref:e.dayRef,onChange:e.handleChange,placeholder:e.day}),h.a.createElement("input",{className:"",name:"dob",type:"month",ref:e.dobRef,onChange:e.handleChange,placeholder:e.dob}),h.a.createElement("button",{type:"submit"},"update"),h.a.createElement("button",{onClick:e.handleEditCancel},"cancel"))},C=(a(17),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={name:"",day:"",dob:"",items:[],currentItem:{},dataEdited:{},toggle:!1,loading:!1},a.nameRef=Object(o.createRef)(),a.dayRef=Object(o.createRef)(),a.dobRef=Object(o.createRef)(),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.handleDelete=a.handleDelete.bind(Object(m.a)(a)),a.handleEdit=a.handleEdit.bind(Object(m.a)(a)),a.handleEditCancel=a.handleEditCancel.bind(Object(m.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(m.a)(a)),a.dataChange=a.dataChange.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(i.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=["January","February","March","April","May","June","July","August","September","October","November","December"][this.state.dob.substr(5,2)-1],a=this.state,n=a.name,l=a.day,i=a.items;i.push({name:n,day:l,dob:t}),this.setState({items:i,name:"",day:"",dob:""})}},{key:"handleDelete",value:function(e){var t=this.state.items.filter((function(t,a){return e!==a}));this.setState({items:t})}},{key:"handleEdit",value:function(e){this.setState({currentItem:Object(l.a)({},this.state.items[e]),toggle:!0}),console.log(this.state.currentItem)}},{key:"handleEditCancel",value:function(){this.setState({currentItem:{},toggle:!1})}},{key:"handleUpdate",value:function(e){e.preventDefault();var t=this.nameRef.current,a=this.dayRef.current,l=this.dobRef.current;if(""!==t.value&&""!==a.value&&""!==l.value){var i=this.state.currentItem,r=this.state.items.indexOf(i),s=Object(n.a)(this.state.items);s.splice(r,1,this.state.dataEdited),this.setState({items:Object(n.a)(s),toggle:!1})}}},{key:"dataChange",value:function(){var e=this.nameRef.current,t=this.dayRef.current,a=["January","February","March","April","May","June","July","August","September","October","November","December"][this.dobRef.current.value.substr(5,2)-1];this.setState((function(n){return{dataEdited:Object(l.a)({},n.dataEdited,{name:e.value,day:t.value,dob:a})}}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){setTimeout((function(){e.setState({loading:!1})}),2e3)}))}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"main"},this.state.loading?h.a.createElement("div",{className:"loading-icon"},h.a.createElement("center",null,h.a.createElement(g,null))):h.a.createElement("div",{className:"app center"},h.a.createElement(y,null),h.a.createElement(p,null),h.a.createElement(E,{name:this.state.name,day:this.state.day,dob:this.state.dob,onChange:this.handleChange,onSubmit:this.handleSubmit,setRef:this.setRef}),h.a.createElement("ul",{className:"item-list"},this.state.toggle?h.a.createElement(v,{nameRef:this.nameRef,dayRef:this.dayRef,dobRef:this.dobRef,name:this.state.currentItem.name,day:this.state.currentItem.day,dob:this.state.currentItem.dob,handleChange:this.dataChange,handleUpdate:this.handleUpdate,handleEditCancel:this.handleEditCancel}):this.state.items.map((function(t,a){return h.a.createElement("li",{key:a,className:"item"},h.a.createElement("div",{className:"item-det"},h.a.createElement("span",null," ",t.name," "),h.a.createElement("span",null," ",t.day," "),h.a.createElement("span",null," ",t.dob," ")),h.a.createElement("div",{className:"buttons"},h.a.createElement("button",{className:"edit-btn btn btn-light",onClick:function(){return e.handleEdit(a)}},"edit"),h.a.createElement("button",{className:"del-btn btn btn-danger",onClick:function(){return e.handleDelete(a)}},"delete")))})))))}}]),t}(h.a.Component));f.a.render(h.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8095b71d.chunk.js.map