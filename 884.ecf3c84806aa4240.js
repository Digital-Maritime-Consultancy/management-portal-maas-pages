"use strict";(self.webpackChunkmanagement_portal=self.webpackChunkmanagement_portal||[]).push([[884],{8884:(E,c,s)=>{s.r(c),s.d(c,{ListViewModule:()=>de});var v=s(4466),y=s(6895),e=s(4650),S=s(8729);let O=(()=>{class m{static#e=this.\u0275fac=function(i){return new(i||m)};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["ngx-list-view"]],decls:1,vars:0,template:function(i,n){1&i&&e._UZ(0,"router-outlet")},dependencies:[S.lC],encapsulation:2})}return m})();var w=s(2770),r=s(8304),h=s(1606),a=s(7030),f=s(503),d=s(9833),l=s(1212),o=s(4719),g=s(8996),_=s(6009),P=s(3542),I=s(4725),M=s(2826),z=s(3037),Q=s(7126),Y=s(9016),$=s(384),k=s(9383),x=s(9631);function X(m,N){if(1&m){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onAddNew())}),e._uU(1,"Add new"),e.qZA()}}function W(m,N){if(1&m){const t=e.EpF();e.TgZ(0,"ng2-smart-table",12),e.NdJ("userRowSelect",function(n){e.CHM(t);const C=e.oxw();return e.KtG(C.onEdit(n))})("delete",function(n){e.CHM(t);const C=e.oxw();return e.KtG(C.onDelete(n))}),e.qZA()}if(2&m){const t=e.oxw();e.Q6J("settings",t.settings)("source",t.source)}}function q(m,N){if(1&m){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const C=e.CHM(t).$implicit,F=e.oxw();return e.KtG(F.fetchValues(C))}),e._uU(1),e.qZA()}if(2&m){const t=N.$implicit,i=e.oxw();e.Q6J("disabled",t==i.currentPageNumber),e.xp6(1),e.Oqu(t+1)}}let te=(()=>{class m{constructor(t,i,n,C,F,A,U,H,Z,B,J,G,L){this.router=t,this.iconsLibrary=i,this.userControllerService=n,this.deviceControllerService=C,this.roleControllerService=F,this.vesselControllerService=A,this.serviceControllerService=U,this.instanceControllerService=H,this.mmsControllerService=Z,this.organizationControllerService=B,this.notifierService=J,this.authService=G,this.translate=L,this.menuType=r._g.Device,this.title=" for ",this.contextForAttributes="list",this.orgName="MCC",this.orgMrn="",this.iconName="circle",this.menuTypeName="",this.data=[],this.isLoading=!1,this.mySettings={actions:{edit:!1,position:"right"},mode:"external",delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{...a.A[this.menuType],name:{title:"Nameeeee"}},hideSubHeader:!0},this.showTables=!0,this.source=new f.nC,this.isForServiceForOrg=!1,this.isAdmin=!1,this.currentPageNumber=0,this.totalPages=0,this.totalElements=0,this.elementsPerPage=10,this.pageNumbers=[],this.updatePageContentInfo=(T,u)=>{this.totalPages=T,this.totalElements=u,this.pageNumbers=Array(this.totalPages).fill(0).map((p,b)=>b)},this.updateContent=(T,u,p)=>{this.updatePageContentInfo(T,u),this.refreshData(this.formatResponse(p)),this.isLoading=!1},this.deleteData=(T,u,p,b,D)=>T===r._g.User?this.userControllerService.deleteUser(u,p):T===r._g.Device?this.deviceControllerService.deleteDevice(u,p):T===r._g.Vessel?this.vesselControllerService.deleteVessel(u,p):T===r._g.MMS?this.mmsControllerService.deleteMMS(u,p):T===r._g.Service&&b?this.serviceControllerService.deleteService(u,p,b):T===r._g.Organization||T===r._g.OrgCandidate?this.organizationControllerService.deleteOrg(p):T===r._g.Role&&D?this.roleControllerService.deleteRole(u,D):T===r._g.Instance||T===r._g.InstanceOfOrg?this.instanceControllerService.deleteInstance(D):new h.Observable,this.loadMyOrganization=()=>this.organizationControllerService.getOrganization1(this.authService.authState.orgMrn),this.loadServiceInstances=T=>this.instanceControllerService.getInstances(T,this.elementsPerPage),this.loadDataContent=(T,u,p)=>{const b=this.elementsPerPage;return T===r._g.User?this.userControllerService.getOrganizationUsers(p,u,b):T===r._g.Device?this.deviceControllerService.getOrganizationDevices(p,u,b):T===r._g.Vessel?this.vesselControllerService.getOrganizationVessels(p,u,b):T===r._g.MMS?this.mmsControllerService.getOrganizationMMSes(p,u,b):T===r._g.Service?this.serviceControllerService.getOrganizationServices(p,u,b):T===r._g.Organization?this.organizationControllerService.getOrganization(u,b):T===r._g.OrgCandidate?this.organizationControllerService.getUnapprovedOrganizations(u,b):new h.Observable},this.loadRoles=T=>this.roleControllerService.getRoles(T),(0,w.$M)(L),(0,w.U4)(L),i.registerFontPack("fas",{packClass:"fas",iconClassPrefix:"fa"})}ngOnInit(){const t=this.router.url.split("/").pop();t===r._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=r._g.Instance):this.menuType=t.replace("-","").substr(0,t.length-1),Object.values(r._g).includes(this.menuType)?(this.menuTypeName=r.RJ[this.menuType.toString()],this.iconName=r.nZ[this.menuType.toString()],this.orgMrn=this.authService.authState.orgMrn):this.router.navigate(["**"]),this.authService.authState.rolesLoaded?this.isAdmin=(0,l.rM)(this.menuType,this.authService,!1):this.authService.rolesLoaded.subscribe(i=>{this.isAdmin=(0,l.rM)(this.menuType,this.authService,!1)}),this.fetchValues(this.currentPageNumber)}fetchValues(t){if(this.currentPageNumber=t,!a.A.hasOwnProperty(this.menuType.toString()))throw this.isLoading=!1,new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.mySettings.columns=Object.assign({},...Object.entries(a.A[this.menuType.toString()]).filter(([i,n])=>Array.isArray(n.visibleFrom)&&n.visibleFrom.includes(this.contextForAttributes)).map(([i,n])=>({[i]:n}))),this.settings=Object.assign({},this.mySettings),this.title=`${(m=>"string"!=typeof m?"":m.charAt(0).toUpperCase()+m.slice(1))(this.menuTypeName)} list`,this.isLoading=!0,!Object.values(r._g).includes(this.menuType))throw this.isLoading=!1,new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);this.menuType===r._g.Organization||this.menuType===r._g.OrgCandidate?this.loadDataContent(this.menuType,t).subscribe(i=>this.updateContent(i.totalPages,i.totalElements,i.content),i=>this.notifierService.notify("error",i.message)):this.menuType===r._g.Role?this.loadMyOrganization().subscribe(i=>this.loadRoles(i.mrn).subscribe(n=>{this.refreshData(n),this.isLoading=!1},n=>this.notifierService.notify("error",n.message)),i=>this.notifierService.notify("error",i.message)):this.menuType===r._g.Instance||this.menuType===r._g.InstanceOfOrg?this.loadServiceInstances(t).subscribe(i=>{this.instanceControllerService.getInstancesDt().subscribe(n=>{this.totalElements=n.recordsTotal,this.totalPages=Math.ceil(this.totalElements/this.elementsPerPage),this.updateContent(this.totalPages,this.totalElements,this.formatResponseForInstance(this.isForServiceForOrg?i.filter(C=>C.organizationId===this.orgMrn):i))})},i=>this.notifierService.notify("error",i.message)):this.loadMyOrganization().subscribe(i=>{this.loadDataContent(this.menuType,t,i.mrn).subscribe(n=>this.updateContent(n.totalPages,n.totalElements,n.content),n=>this.notifierService.notify("error",n.message))},i=>this.notifierService.notify("error",i.message))}refreshData(t){t?(this.source.load(t),this.data=t):this.source.load([])}formatResponse(t){return t.map(i=>(0,d.lv)(i))}formatResponseForInstance(t){return t.map(i=>(0,d.SS)(i))}onDelete(t){this.isAdmin?this.delete(this.menuType,this.orgMrn,t.data.mrn,t.data.instanceVersion,t.data.id):this.notifierService.notify("error",this.translate.instant("error.resource.permissionError"))}delete(t,i,n,C,F){let A=this.translate.instant("warning.resource.beforeDeletion");A=r.DC.indexOf(this.menuType)>=0?A+this.translate.instant("warning.resource.beforeRevoke"):A,confirm(A)&&this.deleteData(t,i,n,C,F).subscribe(U=>{this.notifierService.notify("success",this.menuTypeName+this.translate.instant("success.resource.delete")),this.fetchValues(this.currentPageNumber)},U=>this.notifierService.notify("error",this.translate.instant("error.resource.errorInDeletion")+U.error.message))}onEdit(t){const i=this.menuType===r._g.Instance?t.data.id:t.data.mrn;this.router.navigate([this.router.url,i?encodeURIComponent(i):t.data.id],{queryParams:{name:t.data.roleName?t.data.roleName:t.data.name?t.data.name:t.data.lastName+" "+t.data.firstName,version:t.data.instanceVersion}})}onAddNew(){this.router.navigate([this.router.url,"new"])}onSearch(t){const i=t.srcElement.value;t&&t.srcElement&&i.length>0?this.source.setFilter([{field:"id",search:i},{field:"name",search:i},{field:"mrn",search:i}],!1):(this.source.reset(),this.refreshData())}static#e=this.\u0275fac=function(i){return new(i||m)(e.Y36(S.F0),e.Y36(o.B7b),e.Y36(g.p),e.Y36(_.$),e.Y36(P.U),e.Y36(I.HI),e.Y36(M.e),e.Y36(z.$),e.Y36(I.Tg),e.Y36(Q.r),e.Y36(Y.lG),e.Y36($.e),e.Y36(k.sK))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["ngx-list"]],decls:15,vars:6,consts:[[1,"row"],[1,"col","my-auto"],[1,"icon_header"],["pack","fas",3,"icon"],[1,"col-md-auto"],[3,"search"],["type","button","nbButton","","status","primary",3,"click",4,"ngIf"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],[3,"settings","source","userRowSelect","delete",4,"ngIf"],[1,"text-center","pb-5"],["class","m-1","nbButton","","size","tiny",3,"disabled","click",4,"ngFor","ngForOf"],["type","button","nbButton","","status","primary",3,"click"],[3,"settings","source","userRowSelect","delete"],["nbButton","","size","tiny",1,"m-1",3,"disabled","click"]],template:function(i,n){1&i&&(e.TgZ(0,"nb-card")(1,"nb-card-header")(2,"div",0)(3,"div",1)(4,"span",2),e._UZ(5,"nb-icon",3),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"div",4)(8,"ngx-search-input",5),e.NdJ("search",function(F){return n.onSearch(F)}),e.qZA()(),e.TgZ(9,"div",4),e.YNc(10,X,2,0,"button",6),e.qZA()()(),e.TgZ(11,"nb-card-body",7),e.YNc(12,W,1,2,"ng2-smart-table",8),e.qZA(),e.TgZ(13,"div",9),e.YNc(14,q,2,2,"button",10),e.qZA()()),2&i&&(e.xp6(5),e.Q6J("icon",n.iconName),e.xp6(1),e.hij("",n.title," "),e.xp6(4),e.Q6J("ngIf",n.isAdmin),e.xp6(1),e.Q6J("nbSpinner",n.isLoading),e.xp6(1),e.Q6J("ngIf",n.showTables),e.xp6(2),e.Q6J("ngForOf",n.pageNumbers))},dependencies:[y.sg,y.O5,o.Asz,o.yKW,o.ndF,o.fMN,o.Q7R,o.DPz,x.J,f.T5],styles:["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}"]})}return m})();var R=s(7528),j=s(4292),re=s(4020),ie=R.uU.RoleNameEnum;const ne=["editableForm"],se=["supplementForm"];function oe(m,N){if(1&m){const t=e.EpF();e.TgZ(0,"div")(1,"button",6),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancel())}),e._UZ(2,"nb-icon",7),e._uU(3),e.qZA()()}if(2&m){const t=e.oxw();e.xp6(3),e.hij(" Back to ",t.entityTypeName," list ")}}function ae(m,N){if(1&m){const t=e.EpF();e.TgZ(0,"ngx-editable-form",8,9),e.NdJ("onApprove",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.approve())})("onReject",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.delete())})("onCancel",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancel())})("onSubmit",function(n){e.CHM(t);const C=e.oxw();return e.KtG(C.submit(n))})("onDelete",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.delete())})("onRefresh",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.refreshData())}),e.qZA()}if(2&m){const t=e.oxw();e.Q6J("menuType","user")("isForNew",!0)("orgShortId",t.orgShortId)("defaultPermissions",t.defaultPermissionForAdminUser)("title","Administrator account of "+t.title)("iconName","user")("numberId",t.numberId)("orgMrn",t.entityMrn)("instanceVersion",t.instanceVersion)("isLoading",t.isLoading)("isLoaded",t.isLoaded)("hasHeader",!0)("showButtons",!1)}}const ue=[{path:"",component:O,children:[{path:"",component:te},{path:":id",component:(()=>{class m{constructor(t,i,n,C,F,A,U,H,Z,B,J,G,L,T){this.route=t,this.router=i,this.userControllerService=n,this.deviceControllerService=C,this.roleControllerService=F,this.vesselControllerService=A,this.serviceControllerService=U,this.mmsControllerService=H,this.organizationControllerService=Z,this.instanceControllerService=B,this.notifierService=J,this.authService=G,this.location=L,this.translate=T,this.title="",this.isLoading=!1,this.menuType=r._g.Device,this.iconName="circle",this.instanceVersion="",this.noBacklink=!1,this.isForNew=!1,this.columnForMenu=a.A[this.menuType],this.contextForAttributes="detail",this.menuTypeName="",this.entityMrn="",this.orgMrn="",this.values={},this.activeCertificates=[],this.revokedCertificates=[],this.isEditing=!1,this.shortId="",this.numberId=-1,this.isLoaded=!0,this.mrnMask="",this.isForServiceForOrg=!1,this.orgShortId=void 0,this.defaultPermissionForAdminUser=j.M3,this.registerData=(u,p,b)=>u===r._g.User?this.userControllerService.createUser(p,b):u===r._g.Device?this.deviceControllerService.createDevice(p,b):u===r._g.Vessel?this.vesselControllerService.createVessel((0,d.EF)(p),b):u===r._g.MMS?this.mmsControllerService.createMMS(p,b):u===r._g.Service?this.serviceControllerService.createService(p,b):u===r._g.Organization?this.organizationControllerService.applyOrganization(p):u===r._g.Role?this.roleControllerService.createRole(p,b):u===r._g.Instance?this.instanceControllerService.createInstance(p):new h.Observable,this.updateData=(u,p,b,D,V,K)=>u===r._g.User?this.userControllerService.updateUser(p,b,D):u===r._g.Device?this.deviceControllerService.updateDevice(p,b,D):u===r._g.Vessel?this.vesselControllerService.updateVessel((0,d.EF)(p),b,D):u===r._g.MMS?this.mmsControllerService.updateMMS(p,b,D):u===r._g.Service&&V?this.serviceControllerService.updateService(p,b,D,V):u===r._g.Organization||u===r._g.OrgCandidate?this.organizationControllerService.updateOrganization(p,D):u===r._g.Role?this.roleControllerService.updateRole(p,b,this.numberId):u===r._g.Instance?this.instanceControllerService.updateInstance(Object.assign({},p,{id:K}),K):new h.Observable,this.deleteData=(u,p,b,D,V)=>u===r._g.User?this.userControllerService.deleteUser(p,b):u===r._g.Device?this.deviceControllerService.deleteDevice(p,b):u===r._g.Vessel?this.vesselControllerService.deleteVessel(p,b):u===r._g.MMS?this.mmsControllerService.deleteMMS(p,b):u===r._g.Service&&D?this.serviceControllerService.deleteService(p,b,D):u===r._g.Organization||u===r._g.OrgCandidate?this.organizationControllerService.deleteOrg(b):u===r._g.Role?this.roleControllerService.deleteRole(p,this.numberId):u===r._g.Instance?this.instanceControllerService.deleteInstance(this.numberId):new h.Observable,this.loadDataContent=(u,p,b,D,V)=>u===r._g.User?this.userControllerService.getUser(p,b):u===r._g.Device?this.deviceControllerService.getDevice(p,b):u===r._g.Vessel?this.vesselControllerService.getVessel(p,b):u===r._g.MMS?this.mmsControllerService.getMMS(p,b):u===r._g.Service&&D?this.serviceControllerService.getServiceVersion(p,b,D):u===r._g.Organization?this.organizationControllerService.getOrganization1(b):u===r._g.Instance?this.instanceControllerService.getInstance(V):new h.Observable,(0,w.$M)(T),(0,w.U4)(T)}ngOnInit(){const t=this.router.url.split("/"),n=(t.pop(),t.pop());n===r._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=r._g.Instance):this.menuType=n.replace("-","").substr(0,n.length-1),this.entityMrn=decodeURIComponent(this.route.snapshot.paramMap.get("id")),this.orgMrn=this.authService.authState.orgMrn,this.isForNew="new"===this.entityMrn,this.numberId=this.menuType===r._g.Instance||this.menuType===r._g.Role?parseInt(this.entityMrn):-1,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.route.queryParams.subscribe(C=>{this.noBacklink=void 0===C.name,this.title=C.name,this.instanceVersion=C.version}),this.iconName=r.nZ[this.menuType.toString()],this.isForNew?(this.isEditing=!0,this.title="New "+r.RJ[this.menuType]):this.fetchFieldValues()}cancel(){this.location.back()}settle(t){this.isLoading=!1,this.editableForm&&this.editableForm.settled(t)}fetchFieldValues(){if(!a.A.hasOwnProperty(this.menuType))throw this.settle(!1),new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.isLoading=!0,!Object.values(r._g).includes(this.menuType))throw this.settle(!1),new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.menuType===r._g.OrgCandidate)this.organizationControllerService.getUnapprovedOrganizations().subscribe(t=>{this.settle(!0),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(t.content.filter(i=>i.mrn===this.entityMrn).pop()),this.orgShortId=this.entityMrn.split(":").pop()},t=>{this.notifierService.notify("error",t.message),this.router.navigateByUrl("/pages/404")});else if(this.menuType===r._g.Role){const t=parseInt(this.entityMrn);this.roleControllerService.getRole(this.orgMrn,t).subscribe(i=>{this.settle(!0),this.numberId=i.id,this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(i)},i=>{this.notifierService.notify("error",i.message),this.router.navigateByUrl("/pages/404")})}else this.route.queryParams.subscribe(t=>this.loadDataContent(this.menuType,this.authService.authState.user.organization,this.entityMrn,t.version,this.numberId).subscribe(i=>{this.settle(!0),this.menuType===r._g.User?this.title=i.firstName+" "+i.lastName:this.menuType===r._g.Organization&&(this.title=i.name),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(i)},i=>{this.notifierService.notify("error",i.message),this.router.navigateByUrl("/pages/404")}))}refreshData(){this.fetchFieldValues()}moveToListPage(){this.router.navigate(["../../"+this.menuType+"s"],{relativeTo:this.route})}delete(){let t=this.translate.instant("warning.resource.beforeDeletion");t=r.DC.indexOf(this.menuType)>=0?t+this.translate.instant("warning.resource.beforeRevoke"):t,confirm(t)&&this.deleteData(this.menuType,this.orgMrn,this.entityMrn,this.instanceVersion).subscribe(i=>{this.notifierService.notify("success",this.menuTypeName+this.translate.instant("success.resource.delete")),this.moveToListPage()},i=>this.notifierService.notify("error",this.translate.instant("error.resource.errorInDeletion")+i.error.message))}approve(){this.menuType===r._g.OrgCandidate&&(this.supplementForm.formGroup.valid?this.organizationControllerService.approveOrganization(this.entityMrn).subscribe(t=>{this.createAdminRole().subscribe(i=>{this.createAdminUser(this.supplementForm.getFormValue()).subscribe(n=>{this.notifierService.notify("success",this.translate.instant("success.resource.approveOrganization")),this.moveToListPage()},n=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.userCreation")+n.error.message))},i=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.roleCreation")+i.error.message))},t=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.reject")+t.error.message)):this.notifierService.notify("error",this.translate.instant("error.resource.missingInformation")))}createAdminRole(){return this.roleControllerService.createRole({permission:j.M3,roleName:ie.ORGADMIN},this.entityMrn)}createAdminUser(t){if(!t)throw new Error(this.translate.instant("error.resource.noUser"));return t.permissions&&0!==t.permissions.length?t.permissions.length>0&&t.permissions.indexOf(j.M3)<0&&(t.permissions=","+j.M3):t.permissions=j.M3,this.createUser(t)}createUser(t){if(!t)throw new Error(this.translate.instant("error.resource.noUser"));return this.userControllerService.createUser(t,this.entityMrn)}submit(t){this.menuType===r._g.Role?this.organizationControllerService.getOrganization1(this.orgMrn).subscribe(i=>this.submitDataToBackend({...t,idOrganization:i.id}),i=>this.notifierService.notify("error",this.translate.instant("error.resource.fetchOrgInfo"))):this.submitDataToBackend(t,t.mrn)}submitDataToBackend(t,i){this.isForNew?this.registerData(this.menuType,t,this.authService.authState.orgMrn).subscribe(n=>{this.notifierService.notify("success","New "+this.menuType+this.translate.instant("success.resource.create")),this.settle(!0),this.moveToListPage()},n=>{this.notifierService.notify("error",this.translate.instant("error.resource.creationFailed")+n.error.message),this.settle(!0)}):this.updateData(this.menuType,t,this.authService.authState.orgMrn,i,this.instanceVersion,this.numberId).subscribe(n=>{this.notifierService.notify("success",this.menuType+this.translate.instant("success.resource.update")),this.editableForm&&(this.editableForm.invertIsEditing(),this.refreshData()),this.settle(!0)},n=>{this.notifierService.notify("error",this.translate.instant("error.resource.updateFailed")+n.error.message),this.settle(!0)})}static#e=this.\u0275fac=function(i){return new(i||m)(e.Y36(S.gz),e.Y36(S.F0),e.Y36(R.pj),e.Y36(R.$O),e.Y36(R.Uv),e.Y36(R.HI),e.Y36(R.ei),e.Y36(R.Tg),e.Y36(R.rY),e.Y36(z.$),e.Y36(Y.lG),e.Y36($.e),e.Y36(y.Ye),e.Y36(k.sK))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["ngx-detail"]],viewQuery:function(i,n){if(1&i&&(e.Gf(ne,5),e.Gf(se,5)),2&i){let C;e.iGM(C=e.CRH())&&(n.editableForm=C.first),e.iGM(C=e.CRH())&&(n.supplementForm=C.first)}},decls:6,vars:14,consts:[[1,"row"],[1,"col-lg-12"],[4,"ngIf"],[3,"menuType","isForNew","title","iconName","entityMrn","orgMrn","numberId","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["editableForm",""],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh",4,"ngIf"],["nbButton","","status","info","ghost","",3,"click"],["icon","arrow-ios-back","pack","eva"],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["supplementForm",""]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,oe,4,1,"div",2),e.TgZ(3,"ngx-editable-form",3,4),e.NdJ("onApprove",function(){return n.approve()})("onReject",function(){return n.delete()})("onCancel",function(){return n.cancel()})("onSubmit",function(F){return n.submit(F)})("onDelete",function(){return n.delete()})("onRefresh",function(){return n.refreshData()}),e.qZA(),e.YNc(5,ae,2,13,"ngx-editable-form",5),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngIf",!n.noBacklink&&!n.isForNew),e.xp6(1),e.Q6J("menuType",n.menuType)("isForNew",n.isForNew)("title",n.title)("iconName",n.iconName)("entityMrn",n.entityMrn)("orgMrn",n.orgMrn)("numberId",n.numberId)("instanceVersion",n.instanceVersion)("isLoading",n.isLoading)("isLoaded",n.isLoaded)("hasHeader",!0)("showButtons",!0),e.xp6(2),e.Q6J("ngIf","orgcandidate"===n.menuType&&n.orgShortId))},dependencies:[y.O5,re.Q,o.fMN,o.DPz],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}[_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}[_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}[_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}"]})}return m})()},{path:"**",component:s(5477).w}]}];let he=(()=>{class m{static#e=this.\u0275fac=function(i){return new(i||m)};static#t=this.\u0275mod=e.oAB({type:m});static#r=this.\u0275inj=e.cJS({imports:[S.Bz.forChild(ue),S.Bz]})}return m})();var fe=s(8284);let de=(()=>{class m{static#e=this.\u0275fac=function(i){return new(i||m)};static#t=this.\u0275mod=e.oAB({type:m});static#r=this.\u0275inj=e.cJS({providers:[Y.lG],imports:[y.ez,v.m,o.nKr,o.zyh,o.KdK,o.uuI,o.EoG,o.T2N,o.spT,o.IIj,fe.O,o.OA,f.ne,he]})}return m})()},7604:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(5742);c.Observable=v.Observable},1606:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0}),function v(y){for(var e in y)c.hasOwnProperty(e)||(c[e]=y[e])}(s(7604))},5742:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(1557),y=s(4802),e=s(7448),S=s(7302),O=s(4072),w=function(){function h(a){this._isScalar=!1,a&&(this._subscribe=a)}return h.prototype.lift=function(a){var f=new h;return f.source=this,f.operator=a,f},h.prototype.subscribe=function(a,f,d){var l=this.operator,o=y.toSubscriber(a,f,d);if(o.add(l?l.call(o,this.source):this.source||O.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),O.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},h.prototype._trySubscribe=function(a){try{return this._subscribe(a)}catch(f){O.config.useDeprecatedSynchronousErrorHandling&&(a.syncErrorThrown=!0,a.syncErrorValue=f),v.canReportError(a)?a.error(f):console.warn(f)}},h.prototype.forEach=function(a,f){var d=this;return new(f=r(f))(function(l,o){var g;g=d.subscribe(function(_){try{a(_)}catch(P){o(P),g&&g.unsubscribe()}},o,l)})},h.prototype._subscribe=function(a){var f=this.source;return f&&f.subscribe(a)},h.prototype[e.observable]=function(){return this},h.prototype.pipe=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return 0===a.length?this:S.pipeFromArray(a)(this)},h.prototype.toPromise=function(a){var f=this;return new(a=r(a))(function(d,l){var o;f.subscribe(function(g){return o=g},function(g){return l(g)},function(){return d(o)})})},h.create=function(a){return new h(a)},h}();function r(h){if(h||(h=O.config.Promise||Promise),!h)throw new Error("no Promise impl found");return h}c.Observable=w},7350:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(4072),y=s(2422);c.empty={closed:!0,next:function(e){},error:function(e){if(v.config.useDeprecatedSynchronousErrorHandling)throw e;y.hostReportError(e)},complete:function(){}}},3281:function(E,c,s){var f,v=this&&this.__extends||(f=function(d,l){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,g){o.__proto__=g}||function(o,g){for(var _ in g)g.hasOwnProperty(_)&&(o[_]=g[_])})(d,l)},function(d,l){function o(){this.constructor=d}f(d,l),d.prototype=null===l?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(c,"__esModule",{value:!0});var y=s(9607),e=s(7350),S=s(6052),O=s(2858),w=s(4072),r=s(2422),h=function(f){function d(l,o,g){var _=f.call(this)||this;switch(_.syncErrorValue=null,_.syncErrorThrown=!1,_.syncErrorThrowable=!1,_.isStopped=!1,arguments.length){case 0:_.destination=e.empty;break;case 1:if(!l){_.destination=e.empty;break}if("object"==typeof l){l instanceof d?(_.syncErrorThrowable=l.syncErrorThrowable,_.destination=l,l.add(_)):(_.syncErrorThrowable=!0,_.destination=new a(_,l));break}default:_.syncErrorThrowable=!0,_.destination=new a(_,l,o,g)}return _}return v(d,f),d.prototype[O.rxSubscriber]=function(){return this},d.create=function(l,o,g){var _=new d(l,o,g);return _.syncErrorThrowable=!1,_},d.prototype.next=function(l){this.isStopped||this._next(l)},d.prototype.error=function(l){this.isStopped||(this.isStopped=!0,this._error(l))},d.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},d.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,f.prototype.unsubscribe.call(this))},d.prototype._next=function(l){this.destination.next(l)},d.prototype._error=function(l){this.destination.error(l),this.unsubscribe()},d.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},d.prototype._unsubscribeAndRecycle=function(){var l=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=l,this},d}(S.Subscription);c.Subscriber=h;var a=function(f){function d(l,o,g,_){var P=f.call(this)||this;P._parentSubscriber=l;var I,M=P;return y.isFunction(o)?I=o:o&&(I=o.next,g=o.error,_=o.complete,o!==e.empty&&(M=Object.create(o),y.isFunction(M.unsubscribe)&&P.add(M.unsubscribe.bind(M)),M.unsubscribe=P.unsubscribe.bind(P))),P._context=M,P._next=I,P._error=g,P._complete=_,P}return v(d,f),d.prototype.next=function(l){if(!this.isStopped&&this._next){var o=this._parentSubscriber;w.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable?this.__tryOrSetError(o,this._next,l)&&this.unsubscribe():this.__tryOrUnsub(this._next,l)}},d.prototype.error=function(l){if(!this.isStopped){var o=this._parentSubscriber,g=w.config.useDeprecatedSynchronousErrorHandling;if(this._error)g&&o.syncErrorThrowable?(this.__tryOrSetError(o,this._error,l),this.unsubscribe()):(this.__tryOrUnsub(this._error,l),this.unsubscribe());else if(o.syncErrorThrowable)g?(o.syncErrorValue=l,o.syncErrorThrown=!0):r.hostReportError(l),this.unsubscribe();else{if(this.unsubscribe(),g)throw l;r.hostReportError(l)}}},d.prototype.complete=function(){var l=this;if(!this.isStopped){var o=this._parentSubscriber;if(this._complete){var g=function(){return l._complete.call(l._context)};w.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable?(this.__tryOrSetError(o,g),this.unsubscribe()):(this.__tryOrUnsub(g),this.unsubscribe())}else this.unsubscribe()}},d.prototype.__tryOrUnsub=function(l,o){try{l.call(this._context,o)}catch(g){if(this.unsubscribe(),w.config.useDeprecatedSynchronousErrorHandling)throw g;r.hostReportError(g)}},d.prototype.__tryOrSetError=function(l,o,g){if(!w.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{o.call(this._context,g)}catch(_){return w.config.useDeprecatedSynchronousErrorHandling?(l.syncErrorValue=_,l.syncErrorThrown=!0,!0):(r.hostReportError(_),!0)}return!1},d.prototype._unsubscribe=function(){var l=this._parentSubscriber;this._context=null,this._parentSubscriber=null,l.unsubscribe()},d}(h);c.SafeSubscriber=a},6052:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(5019),y=s(2556),e=s(9607),S=s(2142),O=function(){function r(h){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,h&&(this._ctorUnsubscribe=!0,this._unsubscribe=h)}return r.prototype.unsubscribe=function(){var h;if(!this.closed){var a=this,f=a._parentOrParents,d=a._ctorUnsubscribe,l=a._unsubscribe,o=a._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,f instanceof r)f.remove(this);else if(null!==f)for(var g=0;g<f.length;++g)f[g].remove(this);if(e.isFunction(l)){d&&(this._unsubscribe=void 0);try{l.call(this)}catch(M){h=M instanceof S.UnsubscriptionError?w(M.errors):[M]}}if(v.isArray(o)){g=-1;for(var P=o.length;++g<P;){var I=o[g];if(y.isObject(I))try{I.unsubscribe()}catch(z){h=h||[],z instanceof S.UnsubscriptionError?h=h.concat(w(z.errors)):h.push(z)}}}if(h)throw new S.UnsubscriptionError(h)}},r.prototype.add=function(h){var a=h;if(!h)return r.EMPTY;switch(typeof h){case"function":a=new r(h);case"object":if(a===this||a.closed||"function"!=typeof a.unsubscribe)return a;if(this.closed)return a.unsubscribe(),a;if(!(a instanceof r)){var f=a;(a=new r)._subscriptions=[f]}break;default:throw new Error("unrecognized teardown "+h+" added to Subscription.")}var d=a._parentOrParents;if(null===d)a._parentOrParents=this;else if(d instanceof r){if(d===this)return a;a._parentOrParents=[d,this]}else{if(-1!==d.indexOf(this))return a;d.push(this)}var l=this._subscriptions;return null===l?this._subscriptions=[a]:l.push(a),a},r.prototype.remove=function(h){var a=this._subscriptions;if(a){var f=a.indexOf(h);-1!==f&&a.splice(f,1)}},r.EMPTY=((h=new r).closed=!0,h),r;var h}();function w(r){return r.reduce(function(h,a){return h.concat(a instanceof S.UnsubscriptionError?a.errors:a)},[])}c.Subscription=O},4072:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var s=!1;c.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(v){if(v){var y=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+y.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=v},get useDeprecatedSynchronousErrorHandling(){return s}}},7448:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},2858:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),c.$$rxSubscriber=c.rxSubscriber},2142:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var s=function(){function v(y){return Error.call(this),this.message=y?y.length+" errors occurred during unsubscription:\n"+y.map(function(e,S){return S+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=y,this}return v.prototype=Object.create(Error.prototype),v}();c.UnsubscriptionError=s},1557:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(3281);c.canReportError=function y(e){for(;e;){var w=e.destination;if(e.closed||e.isStopped)return!1;e=w&&w instanceof v.Subscriber?w:null}return!0}},2422:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.hostReportError=function s(v){setTimeout(function(){throw v},0)}},6610:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.identity=function s(v){return v}},5019:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.isArray=Array.isArray||function(s){return s&&"number"==typeof s.length}},9607:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.isFunction=function s(v){return"function"==typeof v}},2556:(E,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.isObject=function s(v){return null!==v&&"object"==typeof v}},7302:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(6610);function e(S){return 0===S.length?v.identity:1===S.length?S[0]:function(w){return S.reduce(function(r,h){return h(r)},w)}}c.pipe=function y(){for(var S=[],O=0;O<arguments.length;O++)S[O]=arguments[O];return e(S)},c.pipeFromArray=e},4802:(E,c,s)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=s(3281),y=s(2858),e=s(7350);c.toSubscriber=function S(O,w,r){if(O){if(O instanceof v.Subscriber)return O;if(O[y.rxSubscriber])return O[y.rxSubscriber]()}return O||w||r?new v.Subscriber(O,w,r):new v.Subscriber(e.empty)}}}]);