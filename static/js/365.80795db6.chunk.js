"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[365],{365:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var c=n(791),r="ContactForm_contactForm__y0Rca",a="ContactForm_inputText__pOiDY",s="ContactForm_formButton__TN6Jq",o=n(855),i=n(573),u=n(184),l=function(){var t=(0,o.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:e.currentTarget.elements.name.value,phone:e.currentTarget.elements.number.value};t((0,i.uK)(n)),e.currentTarget.reset()},className:r,children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{className:a,type:"text",name:"name",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{className:a,type:"tel",name:"number",required:!0})]}),(0,u.jsx)("button",{type:"submit",className:s,children:"Add contact"})]})]})},m=n(560),d="ContactList_contactListItem__3th7-",h="ContactList_contactListItemText__TAaj4",x="ContactList_list__csErn",f="ContactList_deleteButton__3hT3n",_=function(t){return t.contacts.contacts.items},j=function(t){return t.contacts.contacts.isLoading},v=function(t){return t.contacts.contacts.error},p=function(t){return t.contacts.filter},b=function(){var t=(0,o.I0)(),e=(0,m.v9)(p),n=(0,m.v9)(_),r=(0,m.v9)(j),a=(0,m.v9)(v),s=null!==n&&n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}));(0,c.useEffect)((function(){t((0,i.yF)())}),[t]);return(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:"Loading..."})}),a&&(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:a})}),(0,u.jsx)("ul",{className:x,children:s&&s.map((function(e){return(0,u.jsxs)("li",{className:d,children:[(0,u.jsxs)("p",{className:h,children:[e.name,": ",e.phone]}),(0,u.jsx)("button",{className:f,type:"button",onClick:function(){return n=e.id,void t((0,i.GK)(n));var n},children:"Delete"})]},e.id)}))})]})},C="Filter_inputText__cZhKd",N=function(){var t=(0,m.v9)(p),e=(0,o.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsxs)("label",{children:["Find contacts by name",(0,u.jsx)("input",{className:C,type:"text",value:t,onChange:function(t){var n=t.target.value;e((0,i.Tv)(n))}})]})]})},T=function(){var t=(0,o.v9)((function(t){return t.contacts.contacts}));return(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{addContactCallback:function(e,n){t.some((function(t){return t.contactName===e}))&&alert("The contact already exist")}}),(0,u.jsx)(N,{}),(0,u.jsx)(b,{})]})}}}]);
//# sourceMappingURL=365.80795db6.chunk.js.map