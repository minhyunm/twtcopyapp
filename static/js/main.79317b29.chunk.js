(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(34),i=a.n(s),o=a(6),l=a.n(o),u=a(13),j=a(7),d=a(22),p=a(8),b=a(11),f=a(23),m=a(24),h=(a(47),a(53),a(54),{apiKey:"AIzaSyDW9GjyB4ScWstGTMfalStAMpkTzaRa_VQ",authDomain:"nwitter-c94a2.firebaseapp.com",projectId:"nwitter-c94a2",storageBucket:"nwitter-c94a2.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter.git",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDW9GjyB4ScWstGTMfalStAMpkTzaRa_VQ",REACT_APP_APP_ID:"1:330721142543:web:5cc70e9e45f668b6f2407a",REACT_APP_AUTH_DOMAIN:"nwitter-c94a2.firebaseapp.com",REACT_APP_MESSAGIN_ID:"330721142543",REACT_APP_PROJECT_ID:"nwitter-c94a2",REACT_APP_STORAGE_BUCKET:"nwitter-c94a2.appspot.com"}).REACT_APP_MESSAGING_ID,appId:"1:330721142543:web:5cc70e9e45f668b6f2407a"});m.a.initializeApp(h);var O=m.a,x=m.a.auth(),g=m.a.firestore(),v=m.a.storage(),y=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=Object(c.useState)(!0),b=Object(j.a)(p,2),f=b[0],m=b[1],h=Object(c.useState)(""),O=Object(j.a)(h,2),g=O[0],v=O[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?r(n):"password"===a&&d(n)},w=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,x.createUserWithEmailAndPassword(a,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,x.signInWithEmailAndPassword(a,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),v(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:w,className:"container",children:[Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(n.jsx)("input",{type:"submit",value:f?"Sign up":"Sign in",className:"authInput authSubmit"}),g&&Object(n.jsx)("span",{className:"authError",children:g})]}),Object(n.jsx)("span",{onClick:function(){return m((function(e){return!e}))},className:"authSwitch",children:f?"\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?":"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"})]})},w=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new O.auth.GoogleAuthProvider:"github"===a&&(n=new O.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(b.a,{icon:f.a,color:"#98adfa",size:"3x",style:{marginBottom:30}}),Object(n.jsx)(y,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(n.jsx)(b.a,{icon:f.c})]}),Object(n.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(n.jsx)(b.a,{icon:f.b})]})]})]})},N=a(35),_=a(55),R=a(17),S=function(e){var t=e.nweetObj,a=e.isOwner,r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(t.text),p=Object(j.a)(d,2),f=p[0],m=p[1],h=Object(c.useState)(""),O=Object(j.a)(h,2),x=O[0],y=O[1],w=Object(c.useState)(null),N=Object(j.a)(w,2),S=N[0],C=N[1],A=Object(c.useState)(null),P=Object(j.a)(A,2),U=P[0],k=P[1],L=t.createdAtDate.split(" ");Object(c.useEffect)((function(){g.collection("users").doc(t.creatorId).get().then((function(e){C(e.data().displayName),k(e.data().photoURL)}))}),[]);var I=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete?")){e.next=6;break}return e.next=4,g.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){return o((function(e){return!e}))},B=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===x){e.next=10;break}return c=v.ref().child("".concat(t.creatorId,"/").concat(Object(_.a)())),e.next=6,c.putString(x,"data_url");case 6:return r=e.sent,e.next=9,r.ref.getDownloadURL();case 9:n=e.sent;case 10:return e.next=12,g.doc("nweets/".concat(t.id)).update({text:f,attachmentURL:n});case 12:o(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete?")){e.next=6;break}return e.next=4,v.refFromURL(t.attachmentURL).delete();case 4:return e.next=6,g.doc("nweets/".concat(t.id)).update({attachmentURL:""});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"nweetProfilePic",src:U}),Object(n.jsx)("div",{className:"nweet",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:B,className:"container nweetEdit",children:[Object(n.jsx)("input",{onChange:function(e){var t=e.target.value;m(t)},type:"text",placeholder:"Edit it",value:f,required:!0,autoFocus:!0,className:"formInput"}),t.attachmentURL?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:t.attachmentURL,width:"50px",height:"50px"}),Object(n.jsx)("span",{className:"formBtn cancelEditBtn",onClick:D,children:"Delete Photo"})]}):Object(n.jsxs)("div",{className:"modify_attcs",children:[Object(n.jsxs)("label",{htmlFor:"modf",className:"modify__label",children:[Object(n.jsx)("span",{style:{marginRight:10},children:"Add photos"}),Object(n.jsx)(b.a,{icon:R.c})]}),Object(n.jsx)("input",{id:"modf",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;y(t)},a.readAsDataURL(t)},style:{opacity:0}}),x&&Object(n.jsxs)("div",{className:"modify__attachment",children:[Object(n.jsx)("img",{src:x,style:{backgroundImage:x}}),Object(n.jsxs)("div",{className:"modify__clear",onClick:function(){y("")},children:[Object(n.jsx)("span",{style:{marginRight:10},children:"Remove"}),Object(n.jsx)(b.a,{icon:R.d})]})]})]}),Object(n.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(n.jsx)("span",{onClick:E,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h6",{children:[S," | ",L[3]," ",L[1]," ",L[2]," ",L[4]]}),Object(n.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(n.jsx)("img",{src:t.attachmentURL}),a&&Object(n.jsxs)("div",{className:"nweet__actions",children:[Object(n.jsx)("span",{onClick:I,children:Object(n.jsx)(b.a,{icon:R.e,color:"#98adfa"})}),Object(n.jsx)("span",{onClick:E,children:Object(n.jsx)(b.a,{icon:R.b,color:"#98adfa"})})]})]})})]})},C=function(e){var t=e.userObj,a=Object(c.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),d=Object(j.a)(o,2),p=d[0],f=d[1],m=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,c,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==p){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===s){e.next=12;break}return c=v.ref().child("".concat(t.uid,"/").concat(Object(_.a)())),e.next=8,c.putString(s,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:p,createdAtDate:Date(Date.now()),createdAt:Date.now(),creatorId:t.uid,attachmentURL:n},e.next=15,g.collection("nweets").add(o);case 15:f(""),i("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:m,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput__container",children:[Object(n.jsx)("textarea",{className:"factoryInput__input",value:p,onChange:function(e){var t=e.target.value;f(t)},placeholder:"What's on your mind?",maxLength:120}),Object(n.jsx)("button",{type:"submit",className:"factoryInput__arrow",children:Object(n.jsx)(b.a,{icon:R.a})})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Add photos"}),Object(n.jsx)(b.a,{icon:R.c})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;i(t)},a.readAsDataURL(t)},style:{opacity:0}}),s&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{src:s,style:{backgroundImage:s}}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:function(){i("")},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(b.a,{icon:R.d})]})]})]})},A=function(e){var t=e.userObj,a=Object(c.useState)([]),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){g.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(C,{userObj:t}),Object(n.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(n.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=a(26),U=function(e){var t=e.userObj,a=e.refreshUser,r=Object(p.f)(),s=Object(c.useState)(t.displayName),i=Object(j.a)(s,2),o=i[0],d=i[1],f=Object(c.useState)(null),m=Object(j.a)(f,2),h=m[0],O=m[1],g=Object(c.useState)(!1),y=Object(j.a)(g,2),w=y[0],N=y[1],S=Object(c.useState)(!1),C=Object(j.a)(S,2),A=C[0],U=C[1],k=function(){return N((function(e){return!e}))},L=function(){return U((function(e){return!e}))},I=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:a();case 5:N(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(l.a.mark((function e(n){var c,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!h){e.next=14;break}return e.next=4,v.refFromURL(t.photoURL).delete();case 4:return c=v.ref().child("".concat(t.uid,"/profile/").concat(Object(_.a)())),e.next=7,c.putString(h,"data_url");case 7:return r=e.sent,e.next=10,r.ref.getDownloadURL();case 10:return s=e.sent,e.next=13,t.updateProfile({photoURL:s});case 13:a();case 14:O(null),U(!1);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[w?Object(n.jsxs)("form",{onSubmit:I,className:"profileForm",children:[Object(n.jsx)("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Confirm",className:"formBtn",style:{marginTop:10}}),Object(n.jsx)("span",{className:"formBtn cancelEditBtn",onClick:k,children:"Cancel Editing"})]}):Object(n.jsx)("div",{className:"profileForm",children:Object(n.jsx)("span",{className:"formBtn editProfileBtn",onClick:k,children:"Change Name"})}),A?Object(n.jsxs)("form",{onSubmit:E,className:"profileForm  modify__propic",children:[Object(n.jsxs)("label",{htmlFor:"change-pic",className:"propic__label",children:[Object(n.jsx)("span",{style:{marginRight:10},children:"Add Photo"}),Object(n.jsx)(b.a,{icon:R.c})]}),Object(n.jsx)("input",{className:"formBtn editProfileBtn",type:"file",id:"change-pic",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;O(t)},a.readAsDataURL(t)},style:{opacity:0}}),h&&Object(n.jsx)("div",{className:"propic__img",children:Object(n.jsx)("img",Object(P.a)({src:h,style:{backgroundImage:h},width:"80px",height:"80px"},"style",{borderRadius:50}))}),Object(n.jsx)("input",{type:"submit",value:"Confirm",className:"formBtn",style:{marginTop:10}}),Object(n.jsx)("span",{className:"formBtn cancelEditBtn",onClick:L,children:"Cancel Editing"})]}):Object(n.jsx)("div",{className:"profileForm",children:Object(n.jsx)("span",{className:"formBtn editProfileBtn",onClick:L,children:"Change Photo"})}),Object(n.jsx)("div",{className:"profileForm",children:Object(n.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){x.signOut(),r.push("/")},children:"Log Out"})})]})},k=function(e){var t=e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",style:{marginRight:10},children:Object(n.jsx)(b.a,{icon:f.a,color:"#98adfa",size:"3x"})})}),Object(n.jsx)("li",{children:Object(n.jsxs)(d.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)("img",{src:t.photoURL,className:"profilePic",width:"30px",height:"30px"}),Object(n.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},L=function(e){var t=e.refreshUser,a=e.isLoggedIn,c=e.userObj;return Object(n.jsxs)(d.a,{children:[a&&Object(n.jsx)(k,{userObj:c}),Object(n.jsx)(p.c,{children:a?Object(n.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(A,{userObj:c})}),Object(n.jsx)(p.a,{exact:!0,path:"/profile",children:Object(n.jsx)(U,{userObj:c,refreshUser:t})})]}):Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(w,{})})})]})};var I=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(j.a)(s,2),o=i[0],d=i[1];Object(c.useEffect)((function(){x.onAuthStateChanged((function(e){e?(g.collection("users").doc(e.uid).get().then((function(t){if(!t.exists){var a=e.displayName,n=e.photoURL;e.displayName||(a=e.email.split("@")[0]),e.photoURL||(n="https://firebasestorage.googleapis.com/v0/b/nwitter-c94a2.appspot.com/o/icon.png?alt=media&token=2838bc8e-050f-4d1f-82b3-114e4e5a1a7f"),g.collection("users").doc(e.uid).set({displayName:a,uid:e.uid,photoURL:n,email:e.email}),x.currentUser.updateProfile({displayName:a,photoURL:n})}})),d({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})):d(null),r(!0)}))}),[]);var p=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.currentUser,e.next=3,g.collection("users").doc(t.uid).set({displayName:t.displayName,uid:t.uid,photoURL:t.photoURL,email:t.email});case 3:d({displayName:t.displayName,uid:t.uid,photoURL:t.photoURL,updateProfile:function(e){return t.updateProfile(e)}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)(L,{refreshUser:p,isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};a(51);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.79317b29.chunk.js.map