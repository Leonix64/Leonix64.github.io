"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5177],{5177:(C,s,a)=>{a.r(s),a.d(s,{FilesPageModule:()=>M});var g=a(6814),d=a(95),o=a(6728),l=a(9351),n=a(5678),p=a(8204);function u(t,c){if(1&t&&(n.TgZ(0,"ion-item")(1,"ion-label",22),n._uU(2),n.qZA(),n.TgZ(3,"ion-label",23),n._uU(4),n.qZA(),n.TgZ(5,"ion-label",24),n._uU(6),n.qZA(),n.TgZ(7,"ion-label",25),n._uU(8),n.qZA()()),2&t){const i=c.$implicit;n.xp6(2),n.Oqu(i.name),n.xp6(2),n.Oqu(i.description),n.xp6(2),n.Oqu(i.language),n.xp6(2),n.hij("",i.stargazers_count," stars")}}function P(t,c){if(1&t&&(n.TgZ(0,"ion-card",20)(1,"ion-card-header")(2,"ion-card-title"),n._uU(3,"Repos"),n.qZA()(),n.TgZ(4,"ion-card-content")(5,"ion-list"),n.YNc(6,u,9,4,"ion-item",21),n.qZA()()()),2&t){const i=n.oxw();n.xp6(6),n.Q6J("ngForOf",i.repos)}}const _=[{path:"",component:(()=>{var t;class c{constructor(e){this.githubService=e,this.githubUsername="Leonix64",this.avatarUrl="",this.githubUser={},this.repos=[]}ngOnInit(){this.githubService.getUserInfo(this.githubUsername).then(e=>{this.avatarUrl=e.avatar_url,this.githubUser.name=e.name,this.githubUser.bio=e.bio,this.githubUser.email=e.email,this.githubUser.followers=e.followers,this.githubService.getUserRepos(this.githubUsername).then(r=>{this.repos=r}).catch(r=>{console.log("Error al obtener los repositorios del usuario de GitHub:",r)})}).catch(e=>{console.log("Error al obtener la informaci\xf3n del usuario de GitHub:",e)})}}return(t=c).\u0275fac=function(e){return new(e||t)(n.Y36(p.K))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-files"]],decls:53,vars:8,consts:[[3,"translucent"],[3,"fullscreen"],[1,"container"],[1,"card-container"],[1,"social-card"],[1,"user-card"],[1,"profile-info"],[1,"avatar-img"],["alt","User Avatar",3,"src"],[1,"name-title"],[1,"contact-me"],[1,"phone"],["name","phone-portrait-outline"],[1,"email"],["name","mail-outline"],["href","mailto:angel.gonzalezh08@gmail.com"],[1,"contact-info"],[1,"contact-item"],["name","people-outline"],["class","repos-card",4,"ngIf"],[1,"repos-card"],[4,"ngFor","ngForOf"],[1,"repo-name"],[1,"repo-description"],[1,"repo-language"],[1,"repo-stars"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"files"),n.qZA()()(),n.TgZ(4,"ion-content",1)(5,"div",2)(6,"div",3)(7,"ion-card",4)(8,"div",5)(9,"div",6)(10,"div",7),n._UZ(11,"img",8),n.qZA(),n.TgZ(12,"div",9)(13,"h2"),n._uU(14,"Angel Gonzalez"),n.qZA(),n.TgZ(15,"p"),n._uU(16,"Software Engineer"),n.qZA()()(),n.TgZ(17,"div",10)(18,"p"),n._uU(19,"Have any questions or interested in working with me? Feel free to get in touch:"),n.qZA(),n.TgZ(20,"div",11),n._UZ(21,"ion-icon",12),n.TgZ(22,"span"),n._uU(23,"+52 (618) proximamente"),n.qZA()(),n.TgZ(24,"div",13),n._UZ(25,"ion-icon",14),n.TgZ(26,"a",15),n._uU(27,"angel.gonzalezh08@gmail.com"),n.qZA()()()(),n.TgZ(28,"div",5)(29,"div",6)(30,"div",7),n._UZ(31,"img",8),n.qZA(),n.TgZ(32,"div",9)(33,"h2"),n._uU(34),n.qZA(),n.TgZ(35,"p"),n._uU(36),n.qZA()()(),n.TgZ(37,"div",16)(38,"p"),n._uU(39,"Have any questions or interested in working with me? Feel free to get in touch:"),n.qZA(),n.TgZ(40,"div",17),n._UZ(41,"ion-icon",12),n.TgZ(42,"span"),n._uU(43,"+52 (618) proximamente"),n.qZA()(),n.TgZ(44,"div",17),n._UZ(45,"ion-icon",14),n.TgZ(46,"a",15),n._uU(47,"angel.gonzalezh08@gmail.com"),n.qZA()(),n.TgZ(48,"div",17),n._UZ(49,"ion-icon",18),n.TgZ(50,"span"),n._uU(51),n.qZA()()()()(),n.YNc(52,P,7,1,"ion-card",19),n.qZA()()()),2&e&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(7),n.Q6J("src",r.avatarUrl,n.LSH),n.xp6(20),n.Q6J("src",r.avatarUrl,n.LSH),n.xp6(3),n.Oqu(r.githubUser.name),n.xp6(2),n.Oqu(r.githubUser.bio),n.xp6(15),n.hij("Followers: ",r.githubUser.followers,""),n.xp6(1),n.Q6J("ngIf",r.repos.length>0))},dependencies:[g.sg,g.O5,o.PM,o.FN,o.Zi,o.Dq,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.wd,o.sr],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px}.card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;width:100%}.social-card[_ngcontent-%COMP%]{background-color:#00000060;border-radius:15px;padding:20px;text-align:center}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a;padding:30px;margin-bottom:15px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:30px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%;overflow:hidden;margin-right:30px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .name-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:5px;color:#666}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .name-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#666}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#333;margin-bottom:10px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:16px;color:#666;margin-bottom:15px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:15px;color:#00b8d4;font-size:20px}.social-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.repos-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a}.repos-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-item-background: transparent;--ion-item-color: #666;padding:15px 0}.repos-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .repo-name[_ngcontent-%COMP%]{font-weight:700;font-size:16px}.repos-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .repo-description[_ngcontent-%COMP%]{font-size:14px}.repos-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .repo-language[_ngcontent-%COMP%], .repos-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .repo-stars[_ngcontent-%COMP%]{font-size:12px}.github-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a;padding:30px;width:100%;max-width:500px;margin-top:20px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a;padding:30px;width:400px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:30px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%;overflow:hidden;margin-right:30px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .name-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:5px;color:#666}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .name-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#666}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#333;margin-bottom:10px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:16px;color:#666;margin-bottom:15px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:15px;color:#00b8d4;font-size:20px}.github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .github-card[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .contact-me[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c})()}];let O=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(_),l.Bz]}),c})(),M=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,d.u5,o.Pc,O]}),c})()}}]);