(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[79],{864:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPStatusForm",(function(){return I}));a(240);var n=a(241),r=(a(236),a(238)),o=(a(169),a(131)),l=(a(95),a(53)),s=(a(237),a(239)),c=(a(167),a(98)),i=a(46),u=a.n(i),p=(a(264),a(128)),m=a(13),f=a(81),y=(a(213),a(214)),d=a(96),b=(a(171),a(39)),S=a(0),E=a.n(S),k=a(259),O=a(43),h=a(21),v=a(106),w=a(208),C=a(265),g=a(233),j=[{key:"tp_shared",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"TP Shared"},{key:"cp_shared",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"CP Shared"},{key:"tp_approved",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"TP Approved"},{key:"cp_approved",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"CP Approved"},{key:"trials_done",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Trials Done"},{key:"trials_approved",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"Trials Approved"},{key:"esa_signed",type:g.a.SWITCH,others:{defaultValue:!1,formOptions:{noStyle:!0}},customLabel:"ESA Signed"},{key:"flow_started",type:g.a.SWITCH,customLabel:"Flow started",others:{defaultValue:!1,formOptions:{noStyle:!0}}},{key:"on_hold",type:g.a.SWITCH,customLabel:"On Hold",others:{formOptions:{noStyle:!0}}},{key:"pfep_dropped",type:g.a.SWITCH,customLabel:"PFEP Dropped",others:{formOptions:{noStyle:!0}}},{key:"not_qualified",type:g.a.SWITCH,customLabel:"Not Qualified",others:{formOptions:{noStyle:!0}}},{key:"solution_remark",kwargs:{placeholder:"Remark"},others:{formOptions:{noStyle:!0}},type:g.a.INPUT,customLabel:"Remark"}],T=b.a.Item,I=function(e){var t=e.id,a=e.onCancel,i=e.active,g=e.onDone,I=Object(S.useState)(!1),L=Object(d.a)(I,2),P=L[0],H=L[1],W=Object(S.useState)(!1),_=Object(d.a)(W,2),V=_[0],x=_[1],N=y.a.useForm(),F=Object(d.a)(N,1)[0],D=Object(O.c)(),A=Object(O.d)((function(e){return e.data.pfepData})),R=function(){var e=Object(f.a)(u.a.mark((function e(n){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.next=3,D({type:h.d,data:n});case 3:if(H(!1),5!==i){e.next=18;break}if(!t){e.next=13;break}return e.next=8,Object(C.kb)(t,Object(m.a)(Object(m.a)({},A),n));case 8:r=e.sent,r.error?(p.a.warning({message:"Unable To Edit.",description:"Something went wrong PFEP editing failed."}),a()):g(),e.next=18;break;case 13:return e.next=15,Object(C.v)(Object(m.a)(Object(m.a)({},A),n));case 15:o=e.sent,o.error?(p.a.warning({message:"Unable To Create.",description:"Something went wrong PFEP creation failed."}),a()):g();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(S.useEffect)((function(){5!==i&&(F.submit(),D({type:h.n}))}),[i]);var U=E.a.createElement(b.a,{onClick:function(e){"close"===e.key&&x(!1)}},E.a.createElement(T,{key:"close"},E.a.createElement("div",{className:"row justify-between align-center"},"Close",E.a.createElement(v.a,null))),j.slice(0,11).map((function(e,t){return E.a.createElement(T,{key:t.toString()},E.a.createElement("div",{className:"row justify-between"},E.a.createElement("div",{style:{flexWrap:"wrap",marginRight:"5px"}},e.customLabel," "),Object(k.a)(e)))})));return E.a.createElement(n.a,{spinning:P},E.a.createElement(c.a,{orientation:"left"},"Status"),E.a.createElement(y.a,{onFinish:R,initialValues:A,form:F,layout:"vertical",autoComplete:"off"},E.a.createElement(r.a,{style:{justifyContent:"left"}},j.slice(11,12).map((function(e,t){return E.a.createElement(s.a,{span:6},E.a.createElement("div",{key:t.toString(),className:"p-2"},Object(k.a)(e)))}))," ",E.a.createElement(s.a,{span:5},E.a.createElement("div",{className:"p-2"},E.a.createElement(o.a,{trigger:["click"],overlay:U,onVisibleChange:function(e){x(e)},visible:V},E.a.createElement(l.a,{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},"Select Status"," ",E.a.createElement(w.a,null)))),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement("br",null))),E.a.createElement(r.a,{justify:"space-between"},E.a.createElement("div",{className:"row"},E.a.createElement(l.a,{type:"primary",htmlType:"submit"},"Submit"),E.a.createElement("div",{className:"p-2"}),E.a.createElement(l.a,{type:"primary",onClick:a},"Cancel")))))};t.default=I}}]);
//# sourceMappingURL=79.ccff7862.chunk.js.map