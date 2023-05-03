"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8243],{8243:(M,d,i)=>{i.r(d),i.d(d,{SignUpPageModule:()=>Z});var m=i(6895),g=i(4006),t=i(5056),p=i(2905),h=i(5861),c=i(8020),n=i(6738),u=i(6753);const _=[{path:"",component:(()=>{class e{constructor(o,a){this.route=o,this.auth=a,this.name="",this.email="",this.password=""}ngOnInit(){}signup(){var o=this;return(0,h.Z)(function*(){yield(0,c.Xb)(o.auth,o.email,o.password),o.continue()})()}continue(){this.route.navigate(["./tabs"])}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(p.F0),n.Y36(c.gx))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sign-up"]],decls:54,vars:36,consts:[["slot","start"],["text","","icon","arrow-back-outline"],[1,"header_text"],[1,"animate__animated","animate__fadeInUp"],["fullscreen","",1,"bg_color"],[1,"form"],[1,"profile_img"],[1,"img_box","center_img"],["src","assets/images/profile_placeholder.png",1,"crop_img"],[1,"zmdi","zmdi-camera"],["lines","none"],["lines","none",1,"animate__animated","animate__fadeInUp"],[1,"item_inner"],[1,"input_box"],["type","tel","value","987 654 3210",3,"placeholder"],["type","name","value","Samantha Smith",3,"placeholder","ngModel","ngModelChange"],["type","email","value","samanthasmith@mail.com",3,"placeholder","ngModel","ngModelChange"],["type","password",3,"placeholder","ngModel","ngModelChange"],[1,"ion-no-border"],["size","large","shape","block","fill","solid","mode","md",1,"btn","animate__animated","animate__fadeInUp",3,"click"]],template:function(o,a){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-back-button",1),n.qZA()(),n.TgZ(4,"div",2)(5,"h1",3),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.TgZ(8,"h2",3),n._uU(9),n.ALo(10,"translate"),n.qZA()()(),n.TgZ(11,"ion-content",4)(12,"div",5)(13,"div",6)(14,"div",7),n._UZ(15,"img",8),n.qZA(),n._UZ(16,"ion-icon",9),n.qZA(),n.TgZ(17,"ion-list",10)(18,"ion-item",11)(19,"div",12)(20,"ion-label"),n._uU(21),n.ALo(22,"translate"),n.qZA(),n.TgZ(23,"div",13),n._UZ(24,"ion-input",14),n.ALo(25,"translate"),n.qZA()()(),n.TgZ(26,"ion-item",11)(27,"div",12)(28,"ion-label"),n._uU(29),n.ALo(30,"translate"),n.qZA(),n.TgZ(31,"div",13)(32,"ion-input",15),n.NdJ("ngModelChange",function(r){return a.name=r}),n.ALo(33,"translate"),n.qZA()()()(),n.TgZ(34,"ion-item",11)(35,"div",12)(36,"ion-label"),n._uU(37),n.ALo(38,"translate"),n.qZA(),n.TgZ(39,"div",13)(40,"ion-input",16),n.NdJ("ngModelChange",function(r){return a.email=r}),n.ALo(41,"translate"),n.qZA()()()(),n.TgZ(42,"ion-item",11)(43,"div",12)(44,"ion-label"),n._uU(45),n.ALo(46,"translate"),n.qZA(),n.TgZ(47,"div",13)(48,"ion-input",17),n.NdJ("ngModelChange",function(r){return a.password=r}),n.ALo(49,"translate"),n.qZA()()()()()()(),n.TgZ(50,"ion-footer",18)(51,"ion-button",19),n.NdJ("click",function(){return a.signup()}),n._uU(52),n.ALo(53,"translate"),n.qZA()()),2&o&&(n.xp6(6),n.hij(" ",n.lcZ(7,14,"sign_up_now")," "),n.xp6(3),n.hij(" ",n.lcZ(10,16,"you_are_not_registered_yet")," "),n.xp6(12),n.Oqu(n.lcZ(22,18,"phone_number")),n.xp6(3),n.s9C("placeholder",n.lcZ(25,20,"enter_phone_number")),n.xp6(5),n.Oqu(n.lcZ(30,22,"full_name")),n.xp6(3),n.s9C("placeholder",n.lcZ(33,24,"enter_your_full_name")),n.Q6J("ngModel",a.name),n.xp6(5),n.Oqu(n.lcZ(38,26,"email_address")),n.xp6(3),n.s9C("placeholder",n.lcZ(41,28,"enter_your_email_address")),n.Q6J("ngModel",a.email),n.xp6(5),n.Oqu(n.lcZ(46,30,"password")),n.xp6(3),n.s9C("placeholder",n.lcZ(49,32,"*********")),n.Q6J("ngModel",a.password),n.xp6(4),n.Oqu(n.lcZ(53,34,"continue")))},dependencies:[g.JJ,g.On,t.oU,t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.q_,t.sr,t.j9,t.cs,u.X$],styles:["ion-header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]{min-height:unset;padding-bottom:20px}.form[_ngcontent-%COMP%]{padding-top:15px}.form[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;margin-bottom:30px}.form[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   .img_box[_ngcontent-%COMP%]{min-width:90px;height:90px;width:-moz-fit-content;width:fit-content;border-radius:50%}.form[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:-6px;background:var(--bg-black);color:var(--text-white);min-width:30px;height:30px;border-radius:50%;text-align:center;line-height:30px;font-size:1.1rem}h3[_ngcontent-%COMP%]{margin:0;padding-top:35px;color:var(--text-dark);font-size:.95rem;line-height:26px}h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--bg-black)}ion-footer[_ngcontent-%COMP%]{padding:20px 20px 30px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.Bz.forChild(_),p.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[m.ez,g.u5,t.Pc,u.aw,f]}),e})()}}]);