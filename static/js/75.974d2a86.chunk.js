(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[75],{850:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPBasicDetailsForm",(function(){return L}));a(240);var n=a(241),l=(a(264),a(128)),r=(a(95),a(53)),c=(a(236),a(238)),o=(a(237),a(239)),i=(a(167),a(98)),s=a(46),m=a.n(s),u=a(13),p=a(81),d=(a(213),a(214)),y=a(96),b=a(0),f=a.n(b),E=a(255),k=a(229),h=a(252),v=a(233),j=[{key:"date",type:v.a.DATE,others:null},{key:"contact_person",kwargs:{placeholder:"Contact Person Name"},type:v.a.INPUT,customLabel:"Contact Person Name"},{key:"designation",kwargs:{placeholder:"Designation"},type:v.a.INPUT,others:null},{key:"email",kwargs:{placeholder:"Email"},type:v.a.INPUT,others:null,customLabel:"Email"},{key:"contact_no",kwargs:{placeholder:"Contact Number",type:"number"},type:v.a.INPUT,others:null,customLabel:"Contact Number"}],O=a(259),g=a(43),N=a(21),C=[{key:"proposal_for_client",customLabel:"Proposal For Client",type:v.a.INPUT,others:null,kwargs:{placeholder:"Proposal For Client"}},{key:"sender_client",kwargs:{placeholder:"Sender Client"},type:v.a.INPUT,customLabel:"Sender Client"},{key:"sender_location",kwargs:{placeholder:"Sender Location"},type:v.a.INPUT,others:null,customLabel:"Sender Location"},{key:"name",kwargs:{placeholder:"Receiver Client"},type:v.a.INPUT,others:null,customLabel:"Receiver Client"},{key:"location",kwargs:{placeholder:"Receiver Location"},type:v.a.INPUT,others:null,customLabel:"Receiver Location"}],w=a(232),P=a.n(w),L=function(e){var t=e.id,a=e.onCancel,s=e.lead,v=e.onNext,w=e.active,L=Object(b.useState)(!1),T=Object(y.a)(L,2),I=T[0],S=T[1],U=d.a.useForm(),F=Object(y.a)(U,1)[0],_=Object(g.c)(),D=Object(g.d)((function(e){return e.data.pfepData})),R=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,_({type:t?N.d:N.c,data:Object(u.a)(Object(u.a)({},a),{},{lead_no:s})});case 3:S(!1),0===w&&v();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){0!==w&&(F.submit(),_({type:N.n}))}),[w]),f.a.createElement(n.a,{spinning:I},f.a.createElement(d.a,{initialValues:Object(u.a)(Object(u.a)({},D),{},{date:D.date?P()(D.date):null}),onFinish:R,form:F,layout:"vertical",autoComplete:"off"},f.a.createElement(i.a,{orientation:"left"},"Basic Details"),f.a.createElement(c.a,{style:{justifyContent:"left"}},j.slice(0,1).map((function(e,t){return f.a.createElement(o.a,{span:4},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(O.a)(e)))})),j.slice(1,5).map((function(e,t){return f.a.createElement(o.a,{span:5},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(O.a)(e)))}))),f.a.createElement(i.a,{orientation:"left"},"PFEP Creation"),f.a.createElement(c.a,{style:{justifyContent:"left"}},C.slice(0,3).map((function(e,t){return f.a.createElement(o.a,{span:8},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(O.a)(e)))}))),f.a.createElement(d.a.List,{name:"receivers"},(function(e,t){var a=t.add,n=t.remove;return f.a.createElement("div",null,e.map((function(e,t){return f.a.createElement(c.a,{align:"middle"},C.slice(3,5).map((function(a){return f.a.createElement(o.a,{span:5},f.a.createElement("div",{className:"p-2"},Object(O.a)(Object(u.a)(Object(u.a)({},a),{},{noLabel:0!==t,form:F,others:{formOptions:Object(u.a)(Object(u.a)({},e),{},{name:[e.name,a.key],fieldKey:[e.fieldKey,a.key]})}}))))})),f.a.createElement(r.a,{type:"danger",style:0!==t?{top:"-2vh"}:null,onClick:function(){n(e.name)}},f.a.createElement(E.a,null)," ","Delete"))})),f.a.createElement(d.a.Item,null,f.a.createElement(r.a,{type:"dashed",onClick:function(){var e=F.getFieldValue("receivers");void 0===e||e.length<1?a():l.a.info({message:"Only One receiver can be added!"})},block:!0},f.a.createElement(k.a,null)," ","Add Receiver")))})),f.a.createElement(c.a,{justify:"space-between"},f.a.createElement("div",{className:"row"},f.a.createElement(r.a,{type:"primary",htmlType:"submit",disabled:!0},"Submit"),f.a.createElement("div",{className:"p-2"}),f.a.createElement(r.a,{type:"primary",onClick:a},"Cancel")),f.a.createElement(r.a,{type:"link",htmlType:"submit"},f.a.createElement(h.a,{style:{fontSize:30}})))))};t.default=L}}]);
//# sourceMappingURL=75.974d2a86.chunk.js.map