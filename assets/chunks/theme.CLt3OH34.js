const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.xHaC1xCM.js","assets/chunks/framework.CnqZ57Z3.js"])))=>i.map(i=>d[i]);
import{d as p,c as d,r as c,n as w,o as s,a as U,t as V,b as _,w as h,T as ue,e as f,_ as k,u as Se,i as De,f as Ee,g as ve,h as y,j as m,k as i,l as R,m as ie,p as C,q as W,s as Q,v as H,x as me,y as he,z as Fe,A as We,F as I,B as N,C as G,D as X,E as g,G as $e,H as E,I as xe,J as Z,K as O,L as ee,M as He,N as J,O as re,P as Pe,Q as Ce,R as te,S as ze,U as Oe,V as Ue,W as Te,X as Le,Y as Re,Z as Ge,$ as we,a0 as je,a1 as qe}from"./framework.CnqZ57Z3.js";const Ke=p({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(s(),d("span",{class:w(["VPBadge",e.type])},[c(t.$slots,"default",{},()=>[U(V(e.text),1)])],2))}}),Je={key:0,class:"VPBackdrop"},Ye=p({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(s(),_(ue,{name:"fade"},{default:h(()=>[e.show?(s(),d("div",Je)):f("",!0)]),_:1}))}}),Qe=k(Ye,[["__scopeId","data-v-b4b50216"]]),x=Se;function Xe(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function le(e){return e.startsWith("/")?e:`/${e}`}function fe(e){const{pathname:t,search:n,hash:o,protocol:a}=new URL(e,"http://a.com");if(De(e)||e.startsWith("#")||!a.startsWith("http")||!Ee(t))return e;const{site:r}=x(),l=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${n}${o}`);return ve(l)}function q({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:a,hash:r}=x(),l=y(()=>{var v,S;return{label:(v=t.value.locales[n.value])==null?void 0:v.label,link:((S=t.value.locales[n.value])==null?void 0:S.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:y(()=>Object.entries(t.value.locales).flatMap(([v,S])=>l.value.label===S.label?[]:{text:S.label,link:Ze(S.link||(v==="root"?"/":`/${v}/`),a.value.i18nRouting!==!1&&e,o.value.relativePath.slice(l.value.link.length-1),!t.value.cleanUrls)+r.value})),currentLang:l}}function Ze(e,t,n,o){return t?e.replace(/\/$/,"")+le(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const et={class:"NotFound"},tt={class:"code"},nt={class:"title"},ot={class:"quote"},at={class:"action"},st=["href","aria-label"],it=p({__name:"NotFound",setup(e){const{theme:t}=x(),{currentLang:n}=q();return(o,a)=>{var r,l,u,v,S;return s(),d("div",et,[m("p",tt,V(((r=i(t).notFound)==null?void 0:r.code)??"404"),1),m("h1",nt,V(((l=i(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=m("div",{class:"divider"},null,-1)),m("blockquote",ot,V(((u=i(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),m("div",at,[m("a",{class:"link",href:i(ve)(i(n).link),"aria-label":((v=i(t).notFound)==null?void 0:v.linkLabel)??"go to home"},V(((S=i(t).notFound)==null?void 0:S.linkText)??"Take me home"),9,st)])])}}}),rt=k(it,[["__scopeId","data-v-c41b0d2c"]]);function Ae(e,t){if(Array.isArray(e))return K(e);if(e==null)return[];t=le(t);const n=Object.keys(e).sort((a,r)=>r.split("/").length-a.split("/").length).find(a=>t.startsWith(le(a))),o=n?e[n]:[];return Array.isArray(o)?K(o):K(o.items,o.base)}function lt(e){const t=[];let n=0;for(const o in e){const a=e[o];if(a.items){n=t.push(a);continue}t[n]||t.push({items:[]}),t[n].items.push(a)}return t}function ct(e){const t=[];function n(o){for(const a of o)a.text&&a.link&&t.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(e),t}function ce(e,t){return Array.isArray(t)?t.some(n=>ce(e,n)):R(e,t.link)?!0:t.items?ce(e,t.items):!1}function K(e,t){return[...e].map(n=>{const o={...n},a=o.base||t;return a&&o.link&&(o.link=a+o.link),o.items&&(o.items=K(o.items,a)),o})}function z(){const{frontmatter:e,page:t,theme:n}=x(),o=ie("(min-width: 960px)"),a=C(!1),r=y(()=>{const A=n.value.sidebar,B=t.value.relativePath;return A?Ae(A,B):[]}),l=C(r.value);W(r,(A,B)=>{JSON.stringify(A)!==JSON.stringify(B)&&(l.value=r.value)});const u=y(()=>e.value.sidebar!==!1&&l.value.length>0&&e.value.layout!=="home"),v=y(()=>S?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),S=y(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),P=y(()=>u.value&&o.value),b=y(()=>u.value?lt(l.value):[]);function $(){a.value=!0}function T(){a.value=!1}function L(){a.value?T():$()}return{isOpen:a,sidebar:l,sidebarGroups:b,hasSidebar:u,hasAside:S,leftAside:v,isSidebarEnabled:P,open:$,close:T,toggle:L}}function dt(e,t){let n;Q(()=>{n=e.value?document.activeElement:void 0}),H(()=>{window.addEventListener("keyup",o)}),me(()=>{window.removeEventListener("keyup",o)});function o(a){a.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function ut(e){const{page:t,hash:n}=x(),o=C(!1),a=y(()=>e.value.collapsed!=null),r=y(()=>!!e.value.link),l=C(!1),u=()=>{l.value=R(t.value.relativePath,e.value.link)};W([t,e,n],u),H(u);const v=y(()=>l.value?!0:e.value.items?ce(t.value.relativePath,e.value.items):!1),S=y(()=>!!(e.value.items&&e.value.items.length));Q(()=>{o.value=!!(a.value&&e.value.collapsed)}),he(()=>{(l.value||v.value)&&(o.value=!1)});function P(){a.value&&(o.value=!o.value)}return{collapsed:o,collapsible:a,isLink:r,isActiveLink:l,hasActiveLink:v,hasChildren:S,toggle:P}}function vt(){const{hasSidebar:e}=z(),t=ie("(min-width: 960px)"),n=ie("(min-width: 1280px)");return{isAsideEnabled:y(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const mt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,de=[];function Ve(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function pe(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:ht(n),link:"#"+n.id,level:o}});return ft(t,e)}function ht(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(mt.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function ft(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return _t(e,o,a)}function pt(e,t){const{isAsideEnabled:n}=vt(),o=Xe(r,100);let a=null;H(()=>{requestAnimationFrame(r),window.addEventListener("scroll",o)}),Fe(()=>{l(location.hash)}),me(()=>{window.removeEventListener("scroll",o)});function r(){if(!n.value)return;const u=window.scrollY,v=window.innerHeight,S=document.body.offsetHeight,P=Math.abs(u+v-S)<1,b=de.map(({element:T,link:L})=>({link:L,top:gt(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,L)=>T.top-L.top);if(!b.length){l(null);return}if(u<1){l(null);return}if(P){l(b[b.length-1].link);return}let $=null;for(const{link:T,top:L}of b){if(L>u+We()+4)break;$=T}l($)}function l(u){a&&a.classList.remove("active"),u==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const v=a;v?(v.classList.add("active"),t.value.style.top=v.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function gt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function _t(e,t,n){de.length=0;const o=[],a=[];return e.forEach(r=>{const l={...r,children:[]};let u=a[a.length-1];for(;u&&u.level>=l.level;)a.pop(),u=a[a.length-1];if(l.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){a.push({level:l.level,shouldIgnore:!0});return}l.level>n||l.level<t||(de.push({element:l.element,link:l.link}),u?u.children.push(l):o.push(l),a.push(l))}),o}const bt=["href","title"],kt=p({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(o));a==null||a.focus({preventScroll:!0})}return(n,o)=>{const a=G("VPDocOutlineItem",!0);return s(),d("ul",{class:w(["VPDocOutlineItem",e.root?"root":"nested"])},[(s(!0),d(I,null,N(e.headers,({children:r,link:l,title:u})=>(s(),d("li",null,[m("a",{class:"outline-link",href:l,onClick:t,title:u},V(u),9,bt),r!=null&&r.length?(s(),_(a,{key:0,headers:r},null,8,["headers"])):f("",!0)]))),256))],2)}}}),Be=k(kt,[["__scopeId","data-v-150ad473"]]),yt={class:"content"},St={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},$t=p({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=x(),o=$e([]);X(()=>{o.value=pe(t.value.outline??n.value.outline)});const a=C(),r=C();return pt(a,r),(l,u)=>(s(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:w(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:a},[m("div",yt,[m("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),m("div",St,V(i(Ve)(i(n))),1),g(Be,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),xt=k($t,[["__scopeId","data-v-c3ded439"]]),Pt={class:"VPDocAsideCarbonAds"},Ct=p({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(s(),d("div",Pt,[g(i(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Tt={class:"VPDocAside"},Lt=p({__name:"VPDocAside",setup(e){const{theme:t}=x();return(n,o)=>(s(),d("div",Tt,[c(n.$slots,"aside-top",{},void 0,!0),c(n.$slots,"aside-outline-before",{},void 0,!0),g(xt),c(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=m("div",{class:"spacer"},null,-1)),c(n.$slots,"aside-ads-before",{},void 0,!0),i(t).carbonAds?(s(),_(Ct,{key:0,"carbon-ads":i(t).carbonAds},null,8,["carbon-ads"])):f("",!0),c(n.$slots,"aside-ads-after",{},void 0,!0),c(n.$slots,"aside-bottom",{},void 0,!0)]))}}),wt=k(Lt,[["__scopeId","data-v-20e8a385"]]);function At(){const{theme:e,page:t}=x();return y(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let a;return typeof o=="function"?a=o(t.value):a=o.replace(/:path/g,t.value.filePath),{url:a,text:n}})}function Vt(){const{page:e,theme:t,frontmatter:n}=x();return y(()=>{var S,P,b,$,T,L,A,B;const o=Ae(t.value.sidebar,e.value.relativePath),a=ct(o),r=Bt(a,M=>M.link.replace(/[?#].*$/,"")),l=r.findIndex(M=>R(e.value.relativePath,M.link)),u=((S=t.value.docFooter)==null?void 0:S.prev)===!1&&!n.value.prev||n.value.prev===!1,v=((P=t.value.docFooter)==null?void 0:P.next)===!1&&!n.value.next||n.value.next===!1;return{prev:u?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((b=r[l-1])==null?void 0:b.docFooterText)??(($=r[l-1])==null?void 0:$.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((T=r[l-1])==null?void 0:T.link)},next:v?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((L=r[l+1])==null?void 0:L.docFooterText)??((A=r[l+1])==null?void 0:A.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((B=r[l+1])==null?void 0:B.link)}}})}function Bt(e,t){const n=new Set;return e.filter(o=>{const a=t(o);return n.has(a)?!1:n.add(a)})}const F=p({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.tag??(t.href?"a":"span")),o=y(()=>t.href&&xe.test(t.href)||t.target==="_blank");return(a,r)=>(s(),_(E(n.value),{class:w(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?i(fe)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:h(()=>[c(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),It={class:"VPLastUpdated"},Mt=["datetime"],Nt=p({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=x(),a=y(()=>new Date(n.value.lastUpdated)),r=y(()=>a.value.toISOString()),l=C("");return H(()=>{Q(()=>{var u,v,S;l.value=new Intl.DateTimeFormat((v=(u=t.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&v.forceLocale?o.value:void 0,((S=t.value.lastUpdated)==null?void 0:S.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(u,v)=>{var S;return s(),d("p",It,[U(V(((S=i(t).lastUpdated)==null?void 0:S.text)||i(t).lastUpdatedText||"Last updated")+": ",1),m("time",{datetime:r.value},V(l.value),9,Mt)])}}}),Dt=k(Nt,[["__scopeId","data-v-4adf0913"]]),Et={key:0,class:"VPDocFooter"},Ft={key:0,class:"edit-info"},Wt={key:0,class:"edit-link"},Ht={key:1,class:"last-updated"},zt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Ot={class:"pager"},Ut=["innerHTML"],Rt=["innerHTML"],Gt={class:"pager"},jt=["innerHTML"],qt=["innerHTML"],Kt=p({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=x(),a=At(),r=Vt(),l=y(()=>t.value.editLink&&o.value.editLink!==!1),u=y(()=>n.value.lastUpdated),v=y(()=>l.value||u.value||r.value.prev||r.value.next);return(S,P)=>{var b,$,T,L;return v.value?(s(),d("footer",Et,[c(S.$slots,"doc-footer-before",{},void 0,!0),l.value||u.value?(s(),d("div",Ft,[l.value?(s(),d("div",Wt,[g(F,{class:"edit-link-button",href:i(a).url,"no-icon":!0},{default:h(()=>[P[0]||(P[0]=m("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),U(" "+V(i(a).text),1)]),_:1},8,["href"])])):f("",!0),u.value?(s(),d("div",Ht,[g(Dt)])):f("",!0)])):f("",!0),(b=i(r).prev)!=null&&b.link||($=i(r).next)!=null&&$.link?(s(),d("nav",zt,[P[1]||(P[1]=m("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),m("div",Ot,[(T=i(r).prev)!=null&&T.link?(s(),_(F,{key:0,class:"pager-link prev",href:i(r).prev.link},{default:h(()=>{var A;return[m("span",{class:"desc",innerHTML:((A=i(t).docFooter)==null?void 0:A.prev)||"Previous page"},null,8,Ut),m("span",{class:"title",innerHTML:i(r).prev.text},null,8,Rt)]}),_:1},8,["href"])):f("",!0)]),m("div",Gt,[(L=i(r).next)!=null&&L.link?(s(),_(F,{key:0,class:"pager-link next",href:i(r).next.link},{default:h(()=>{var A;return[m("span",{class:"desc",innerHTML:((A=i(t).docFooter)==null?void 0:A.next)||"Next page"},null,8,jt),m("span",{class:"title",innerHTML:i(r).next.text},null,8,qt)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),Jt=k(Kt,[["__scopeId","data-v-71ed9b76"]]),Yt={class:"container"},Qt={class:"aside-container"},Xt={class:"aside-content"},Zt={class:"content"},en={class:"content-container"},tn={class:"main"},nn=p({__name:"VPDoc",setup(e){const{theme:t}=x(),n=Z(),{hasSidebar:o,hasAside:a,leftAside:r}=z(),l=y(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,v)=>{const S=G("Content");return s(),d("div",{class:w(["VPDoc",{"has-sidebar":i(o),"has-aside":i(a)}])},[c(u.$slots,"doc-top",{},void 0,!0),m("div",Yt,[i(a)?(s(),d("div",{key:0,class:w(["aside",{"left-aside":i(r)}])},[v[0]||(v[0]=m("div",{class:"aside-curtain"},null,-1)),m("div",Qt,[m("div",Xt,[g(wt,null,{"aside-top":h(()=>[c(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[c(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[c(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[c(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[c(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[c(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),m("div",Zt,[m("div",en,[c(u.$slots,"doc-before",{},void 0,!0),m("main",tn,[g(S,{class:w(["vp-doc",[l.value,i(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(Jt,null,{"doc-footer-before":h(()=>[c(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),c(u.$slots,"doc-after",{},void 0,!0)])])]),c(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),on=k(nn,[["__scopeId","data-v-e994cc46"]]),an=p({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.href&&xe.test(t.href)),o=y(()=>t.tag||(t.href?"a":"button"));return(a,r)=>(s(),_(E(o.value),{class:w(["VPButton",[e.size,e.theme]]),href:e.href?i(fe)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[U(V(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),sn=k(an,[["__scopeId","data-v-c7d71f1c"]]),rn=["src","alt"],ln=p({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=G("VPImage",!0);return e.image?(s(),d(I,{key:0},[typeof e.image=="string"||"src"in e.image?(s(),d("img",O({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:i(ve)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,rn)):(s(),d(I,{key:1},[g(o,O({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),g(o,O({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),Y=k(ln,[["__scopeId","data-v-b819f538"]]),cn={class:"container"},dn={class:"main"},un={class:"heading"},vn=["innerHTML"],mn=["innerHTML"],hn=["innerHTML"],fn={key:0,class:"actions"},pn={key:0,class:"image"},gn={class:"image-container"},_n=p({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ee("hero-image-slot-exists");return(n,o)=>(s(),d("div",{class:w(["VPHero",{"has-image":e.image||i(t)}])},[m("div",cn,[m("div",dn,[c(n.$slots,"home-hero-info-before",{},void 0,!0),c(n.$slots,"home-hero-info",{},()=>[m("h1",un,[e.name?(s(),d("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,vn)):f("",!0),e.text?(s(),d("span",{key:1,innerHTML:e.text,class:"text"},null,8,mn)):f("",!0)]),e.tagline?(s(),d("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,hn)):f("",!0)],!0),c(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(s(),d("div",fn,[(s(!0),d(I,null,N(e.actions,a=>(s(),d("div",{key:a.link,class:"action"},[g(sn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),c(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||i(t)?(s(),d("div",pn,[m("div",gn,[o[0]||(o[0]=m("div",{class:"image-bg"},null,-1)),c(n.$slots,"home-hero-image",{},()=>[e.image?(s(),_(Y,{key:0,class:"image-src",image:e.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),bn=k(_n,[["__scopeId","data-v-53a3d2f1"]]),kn=p({__name:"VPHomeHero",setup(e){const{frontmatter:t}=x();return(n,o)=>i(t).hero?(s(),_(bn,{key:0,class:"VPHomeHero",name:i(t).hero.name,text:i(t).hero.text,tagline:i(t).hero.tagline,image:i(t).hero.image,actions:i(t).hero.actions},{"home-hero-info-before":h(()=>[c(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[c(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[c(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[c(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[c(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),yn={class:"box"},Sn={key:0,class:"icon"},$n=["innerHTML"],xn=["innerHTML"],Pn=["innerHTML"],Cn={key:4,class:"link-text"},Tn={class:"link-text-value"},Ln=p({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(s(),_(F,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[m("article",yn,[typeof e.icon=="object"&&e.icon.wrap?(s(),d("div",Sn,[g(Y,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(s(),_(Y,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(s(),d("div",{key:2,class:"icon",innerHTML:e.icon},null,8,$n)):f("",!0),m("h2",{class:"title",innerHTML:e.title},null,8,xn),e.details?(s(),d("p",{key:3,class:"details",innerHTML:e.details},null,8,Pn)):f("",!0),e.linkText?(s(),d("div",Cn,[m("p",Tn,[U(V(e.linkText)+" ",1),n[0]||(n[0]=m("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),wn=k(Ln,[["__scopeId","data-v-8d026376"]]),An={key:0,class:"VPFeatures"},Vn={class:"container"},Bn={class:"items"},In=p({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=y(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,a)=>e.features?(s(),d("div",An,[m("div",Vn,[m("div",Bn,[(s(!0),d(I,null,N(e.features,r=>(s(),d("div",{key:r.title,class:w(["item",[n.value]])},[g(wn,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),Mn=k(In,[["__scopeId","data-v-400b30c0"]]),Nn=p({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=x();return(n,o)=>i(t).features?(s(),_(Mn,{key:0,class:"VPHomeFeatures",features:i(t).features},null,8,["features"])):f("",!0)}}),Dn=p({__name:"VPHomeContent",setup(e){const{width:t}=He({initialWidth:0,includeScrollbar:!1});return(n,o)=>(s(),d("div",{class:"vp-doc container",style:J(i(t)?{"--vp-offset":`calc(50% - ${i(t)/2}px)`}:{})},[c(n.$slots,"default",{},void 0,!0)],4))}}),En=k(Dn,[["__scopeId","data-v-58bb86ab"]]),Fn=p({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=x();return(o,a)=>{const r=G("Content");return s(),d("div",{class:w(["VPHome",{"external-link-icon-enabled":i(n).externalLinkIcon}])},[c(o.$slots,"home-hero-before",{},void 0,!0),g(kn,null,{"home-hero-info-before":h(()=>[c(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[c(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[c(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[c(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[c(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),c(o.$slots,"home-hero-after",{},void 0,!0),c(o.$slots,"home-features-before",{},void 0,!0),g(Nn),c(o.$slots,"home-features-after",{},void 0,!0),i(t).markdownStyles!==!1?(s(),_(En,{key:0},{default:h(()=>[g(r)]),_:1})):(s(),_(r,{key:1}))],2)}}}),Wn=k(Fn,[["__scopeId","data-v-08ac8878"]]),Hn={},zn={class:"VPPage"};function On(e,t){const n=G("Content");return s(),d("div",zn,[c(e.$slots,"page-top"),g(n),c(e.$slots,"page-bottom")])}const Un=k(Hn,[["render",On]]),Rn=p({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=x(),{hasSidebar:o}=z();return(a,r)=>(s(),d("div",{class:w(["VPContent",{"has-sidebar":i(o),"is-home":i(n).layout==="home"}]),id:"VPContent"},[i(t).isNotFound?c(a.$slots,"not-found",{},()=>[g(rt)],!0,0):i(n).layout==="page"?(s(),_(Un,{key:1},{"page-top":h(()=>[c(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[c(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):i(n).layout==="home"?(s(),_(Wn,{key:2},{"home-hero-before":h(()=>[c(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[c(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[c(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[c(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[c(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[c(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[c(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[c(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[c(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):i(n).layout&&i(n).layout!=="doc"?(s(),_(E(i(n).layout),{key:3})):(s(),_(on,{key:4},{"doc-top":h(()=>[c(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[c(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[c(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[c(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[c(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[c(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[c(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[c(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[c(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[c(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[c(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Gn=k(Rn,[["__scopeId","data-v-df5e343b"]]),jn={class:"container"},qn=["innerHTML"],Kn=["innerHTML"],Jn=p({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=x(),{hasSidebar:o}=z();return(a,r)=>i(t).footer&&i(n).footer!==!1?(s(),d("footer",{key:0,class:w(["VPFooter",{"has-sidebar":i(o)}])},[m("div",jn,[i(t).footer.message?(s(),d("p",{key:0,class:"message",innerHTML:i(t).footer.message},null,8,qn)):f("",!0),i(t).footer.copyright?(s(),d("p",{key:1,class:"copyright",innerHTML:i(t).footer.copyright},null,8,Kn)):f("",!0)])],2)):f("",!0)}}),Yn=k(Jn,[["__scopeId","data-v-a7e16f51"]]);function Qn(){const{theme:e,frontmatter:t}=x(),n=$e([]),o=y(()=>n.value.length>0);return X(()=>{n.value=pe(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const Xn={class:"menu-text"},Zn={class:"header"},eo={class:"outline"},to=p({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=x(),o=C(!1),a=C(0),r=C(),l=C();function u(b){var $;($=r.value)!=null&&$.contains(b.target)||(o.value=!1)}W(o,b=>{if(b){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),re("Escape",()=>{o.value=!1}),X(()=>{o.value=!1});function v(){o.value=!o.value,a.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function S(b){b.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),Pe(()=>{o.value=!1}))}function P(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(b,$)=>(s(),d("div",{class:"VPLocalNavOutlineDropdown",style:J({"--vp-vh":a.value+"px"}),ref_key:"main",ref:r},[e.headers.length>0?(s(),d("button",{key:0,onClick:v,class:w({open:o.value})},[m("span",Xn,V(i(Ve)(i(n))),1),$[0]||($[0]=m("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),d("button",{key:1,onClick:P},V(i(n).returnToTopLabel||"Return to top"),1)),g(ue,{name:"flyout"},{default:h(()=>[o.value?(s(),d("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:S},[m("div",Zn,[m("a",{class:"top-link",href:"#",onClick:P},V(i(n).returnToTopLabel||"Return to top"),1)]),m("div",eo,[g(Be,{headers:e.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),no=k(to,[["__scopeId","data-v-6bc5659c"]]),oo={class:"container"},ao=["aria-expanded"],so={class:"menu-text"},io=p({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=x(),{hasSidebar:o}=z(),{headers:a}=Qn(),{y:r}=Ce(),l=C(0);H(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),X(()=>{a.value=pe(n.value.outline??t.value.outline)});const u=y(()=>a.value.length===0),v=y(()=>u.value&&!o.value),S=y(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:u.value,fixed:v.value}));return(P,b)=>i(n).layout!=="home"&&(!v.value||i(r)>=l.value)?(s(),d("div",{key:0,class:w(S.value)},[m("div",oo,[i(o)?(s(),d("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:b[0]||(b[0]=$=>P.$emit("open-menu"))},[b[1]||(b[1]=m("span",{class:"vpi-align-left menu-icon"},null,-1)),m("span",so,V(i(t).sidebarMenuLabel||"Menu"),1)],8,ao)):f("",!0),g(no,{headers:i(a),navHeight:l.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),ro=k(io,[["__scopeId","data-v-196c50c0"]]);function lo(){const e=C(!1);function t(){e.value=!0,window.addEventListener("resize",a)}function n(){e.value=!1,window.removeEventListener("resize",a)}function o(){e.value?n():t()}function a(){window.outerWidth>=768&&n()}const r=Z();return W(()=>r.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const co={},uo={class:"VPSwitch",type:"button",role:"switch"},vo={class:"check"},mo={key:0,class:"icon"};function ho(e,t){return s(),d("button",uo,[m("span",vo,[e.$slots.default?(s(),d("span",mo,[c(e.$slots,"default",{},void 0,!0)])):f("",!0)])])}const fo=k(co,[["render",ho],["__scopeId","data-v-afba620a"]]),po=p({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=x(),o=ee("toggle-appearance",()=>{t.value=!t.value}),a=C("");return he(()=>{a.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,l)=>(s(),_(fo,{title:a.value,class:"VPSwitchAppearance","aria-checked":i(t),onClick:i(o)},{default:h(()=>[...l[0]||(l[0]=[m("span",{class:"vpi-sun sun"},null,-1),m("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ge=k(po,[["__scopeId","data-v-63c120e2"]]),go={key:0,class:"VPNavBarAppearance"},_o=p({__name:"VPNavBarAppearance",setup(e){const{site:t}=x();return(n,o)=>i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(s(),d("div",go,[g(ge)])):f("",!0)}}),bo=k(_o,[["__scopeId","data-v-261b56e7"]]),_e=C();let Ie=!1,se=0;function ko(e){const t=C(!1);if(te){!Ie&&yo(),se++;const n=W(_e,o=>{var a,r,l;o===e.el.value||(a=e.el.value)!=null&&a.contains(o)?(t.value=!0,(r=e.onFocus)==null||r.call(e)):(t.value=!1,(l=e.onBlur)==null||l.call(e))});me(()=>{n(),se--,se||So()})}return ze(t)}function yo(){document.addEventListener("focusin",Me),Ie=!0,_e.value=document.activeElement}function So(){document.removeEventListener("focusin",Me)}function Me(){_e.value=document.activeElement}const $o={class:"VPMenuLink"},xo=["innerHTML"],Po=p({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=x();return(n,o)=>(s(),d("div",$o,[g(F,{class:w({active:i(R)(i(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:h(()=>[m("span",{innerHTML:e.item.text},null,8,xo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ne=k(Po,[["__scopeId","data-v-d9f6f8d8"]]),Co={class:"VPMenuGroup"},To={key:0,class:"title"},Lo=p({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),d("div",Co,[e.text?(s(),d("p",To,V(e.text),1)):f("",!0),(s(!0),d(I,null,N(e.items,o=>(s(),d(I,null,["link"in o?(s(),_(ne,{key:0,item:o},null,8,["item"])):f("",!0)],64))),256))]))}}),wo=k(Lo,[["__scopeId","data-v-d0b7712a"]]),Ao={class:"VPMenu"},Vo={key:0,class:"items"},Bo=p({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(s(),d("div",Ao,[e.items?(s(),d("div",Vo,[(s(!0),d(I,null,N(e.items,o=>(s(),d(I,{key:JSON.stringify(o)},["link"in o?(s(),_(ne,{key:0,item:o},null,8,["item"])):"component"in o?(s(),_(E(o.component),O({key:1,ref_for:!0},o.props),null,16)):(s(),_(wo,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0),c(t.$slots,"default",{},void 0,!0)]))}}),Io=k(Bo,[["__scopeId","data-v-4af58ee8"]]),Mo=["aria-expanded","aria-label"],No={key:0,class:"text"},Do=["innerHTML"],Eo={key:1,class:"vpi-more-horizontal icon"},Fo={class:"menu"},Wo=p({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=C(!1),n=C();ko({el:n,onBlur:o});function o(){t.value=!1}return(a,r)=>(s(),d("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:r[1]||(r[1]=l=>t.value=!0),onMouseleave:r[2]||(r[2]=l=>t.value=!1)},[m("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:r[0]||(r[0]=l=>t.value=!t.value)},[e.button||e.icon?(s(),d("span",No,[e.icon?(s(),d("span",{key:0,class:w([e.icon,"option-icon"])},null,2)):f("",!0),e.button?(s(),d("span",{key:1,innerHTML:e.button},null,8,Do)):f("",!0),r[3]||(r[3]=m("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),d("span",Eo))],8,Mo),m("div",Fo,[g(Io,{items:e.items},{default:h(()=>[c(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),be=k(Wo,[["__scopeId","data-v-7089b29e"]]),Ho=["href","aria-label","innerHTML"],zo=p({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=C();H(async()=>{var r;await Pe();const a=(r=n.value)==null?void 0:r.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=y(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(a,r)=>(s(),d("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,Ho))}}),Oo=k(zo,[["__scopeId","data-v-d78faa03"]]),Uo={class:"VPSocialLinks"},Ro=p({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(s(),d("div",Uo,[(s(!0),d(I,null,N(e.links,({link:o,icon:a,ariaLabel:r})=>(s(),_(Oo,{key:o,icon:a,link:o,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),ke=k(Ro,[["__scopeId","data-v-f64d1f16"]]),Go={key:0,class:"group translations"},jo={class:"trans-title"},qo={key:1,class:"group"},Ko={class:"item appearance"},Jo={class:"label"},Yo={class:"appearance-action"},Qo={key:2,class:"group"},Xo={class:"item social-links"},Zo=p({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=x(),{localeLinks:o,currentLang:a}=q({correspondingLink:!0}),r=y(()=>o.value.length&&a.value.label||t.value.appearance||n.value.socialLinks);return(l,u)=>r.value?(s(),_(be,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[i(o).length&&i(a).label?(s(),d("div",Go,[m("p",jo,V(i(a).label),1),(s(!0),d(I,null,N(i(o),v=>(s(),_(ne,{key:v.link,item:v},null,8,["item"]))),128))])):f("",!0),i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(s(),d("div",qo,[m("div",Ko,[m("p",Jo,V(i(n).darkModeSwitchLabel||"Appearance"),1),m("div",Yo,[g(ge)])])])):f("",!0),i(n).socialLinks?(s(),d("div",Qo,[m("div",Xo,[g(ke,{class:"social-links-list",links:i(n).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),ea=k(Zo,[["__scopeId","data-v-7d847b2d"]]),ta=["aria-expanded"],na=p({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(s(),d("button",{type:"button",class:w(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[m("span",{class:"container"},[m("span",{class:"top"}),m("span",{class:"middle"}),m("span",{class:"bottom"})],-1)])],10,ta))}}),oa=k(na,[["__scopeId","data-v-9c1fb896"]]),aa=["innerHTML"],sa=p({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=x();return(n,o)=>(s(),_(F,{class:w({VPNavBarMenuLink:!0,active:i(R)(i(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:h(()=>[m("span",{innerHTML:e.item.text},null,8,aa)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ia=k(sa,[["__scopeId","data-v-541cdb06"]]),ra=p({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=x(),o=r=>"component"in r?!1:"link"in r?R(n.value.relativePath,r.link,!!t.item.activeMatch):r.items.some(o),a=y(()=>o(t.item));return(r,l)=>(s(),_(be,{class:w({VPNavBarMenuGroup:!0,active:i(R)(i(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||a.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),la={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ca=p({__name:"VPNavBarMenu",setup(e){const{theme:t}=x();return(n,o)=>i(t).nav?(s(),d("nav",la,[o[0]||(o[0]=m("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),d(I,null,N(i(t).nav,a=>(s(),d(I,{key:JSON.stringify(a)},["link"in a?(s(),_(ia,{key:0,item:a},null,8,["item"])):"component"in a?(s(),_(E(a.component),O({key:1,ref_for:!0},a.props),null,16)):(s(),_(ra,{key:2,item:a},null,8,["item"]))],64))),128))])):f("",!0)}}),da=k(ca,[["__scopeId","data-v-d2be0875"]]);function ua(e){const{localeIndex:t,theme:n}=x();function o(a){var L,A,B;const r=a.split("."),l=(L=n.value.search)==null?void 0:L.options,u=l&&typeof l=="object",v=u&&((B=(A=l.locales)==null?void 0:A[t.value])==null?void 0:B.translations)||null,S=u&&l.translations||null;let P=v,b=S,$=e;const T=r.pop();for(const M of r){let D=null;const j=$==null?void 0:$[M];j&&(D=$=j);const oe=b==null?void 0:b[M];oe&&(D=b=oe);const ae=P==null?void 0:P[M];ae&&(D=P=ae),j||($=D),oe||(b=D),ae||(P=D)}return(P==null?void 0:P[T])??(b==null?void 0:b[T])??($==null?void 0:$[T])??""}return o}const va=["aria-label"],ma={class:"DocSearch-Button-Container"},ha={class:"DocSearch-Button-Placeholder"},ye=p({__name:"VPNavBarSearchButton",setup(e){const n=ua({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,a)=>(s(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":i(n)("button.buttonAriaLabel")},[m("span",ma,[a[0]||(a[0]=m("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),m("span",ha,V(i(n)("button.buttonText")),1)]),a[1]||(a[1]=m("span",{class:"DocSearch-Button-Keys"},[m("kbd",{class:"DocSearch-Button-Key"}),m("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,va))}}),fa={class:"VPNavBarSearch"},pa={id:"local-search"},ga={key:1,id:"docsearch"},_a=p({__name:"VPNavBarSearch",setup(e){const t=Oe(()=>Ue(()=>import("./VPLocalSearchBox.xHaC1xCM.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=x(),a=C(!1),r=C(!1);H(()=>{});function l(){a.value||(a.value=!0,setTimeout(u,16))}function u(){const b=new Event("keydown");b.key="k",b.metaKey=!0,window.dispatchEvent(b),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function v(b){const $=b.target,T=$.tagName;return $.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const S=C(!1);re("k",b=>{(b.ctrlKey||b.metaKey)&&(b.preventDefault(),S.value=!0)}),re("/",b=>{v(b)||(b.preventDefault(),S.value=!0)});const P="local";return(b,$)=>{var T;return s(),d("div",fa,[i(P)==="local"?(s(),d(I,{key:0},[S.value?(s(),_(i(t),{key:0,onClose:$[0]||($[0]=L=>S.value=!1)})):f("",!0),m("div",pa,[g(ye,{onClick:$[1]||($[1]=L=>S.value=!0)})])],64)):i(P)==="algolia"?(s(),d(I,{key:1},[a.value?(s(),_(i(n),{key:0,algolia:((T=i(o).search)==null?void 0:T.options)??i(o).algolia,onVnodeBeforeMount:$[2]||($[2]=L=>r.value=!0)},null,8,["algolia"])):f("",!0),r.value?f("",!0):(s(),d("div",ga,[g(ye,{onClick:l})]))],64)):f("",!0)])}}}),ba=p({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=x();return(n,o)=>i(t).socialLinks?(s(),_(ke,{key:0,class:"VPNavBarSocialLinks",links:i(t).socialLinks},null,8,["links"])):f("",!0)}}),ka=k(ba,[["__scopeId","data-v-b023b5ce"]]),ya=["href","rel","target"],Sa=["innerHTML"],$a={key:2},xa=p({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=x(),{hasSidebar:o}=z(),{currentLang:a}=q(),r=y(()=>{var v;return typeof n.value.logoLink=="string"?n.value.logoLink:(v=n.value.logoLink)==null?void 0:v.link}),l=y(()=>{var v;return typeof n.value.logoLink=="string"||(v=n.value.logoLink)==null?void 0:v.rel}),u=y(()=>{var v;return typeof n.value.logoLink=="string"||(v=n.value.logoLink)==null?void 0:v.target});return(v,S)=>(s(),d("div",{class:w(["VPNavBarTitle",{"has-sidebar":i(o)}])},[m("a",{class:"title",href:r.value??i(fe)(i(a).link),rel:l.value,target:u.value},[c(v.$slots,"nav-bar-title-before",{},void 0,!0),i(n).logo?(s(),_(Y,{key:0,class:"logo",image:i(n).logo},null,8,["image"])):f("",!0),i(n).siteTitle?(s(),d("span",{key:1,innerHTML:i(n).siteTitle},null,8,Sa)):i(n).siteTitle===void 0?(s(),d("span",$a,V(i(t).title),1)):f("",!0),c(v.$slots,"nav-bar-title-after",{},void 0,!0)],8,ya)],2))}}),Pa=k(xa,[["__scopeId","data-v-a37715e7"]]),Ca={class:"items"},Ta={class:"title"},La=p({__name:"VPNavBarTranslations",setup(e){const{theme:t}=x(),{localeLinks:n,currentLang:o}=q({correspondingLink:!0});return(a,r)=>i(n).length&&i(o).label?(s(),_(be,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:i(t).langMenuLabel||"Change language"},{default:h(()=>[m("div",Ca,[m("p",Ta,V(i(o).label),1),(s(!0),d(I,null,N(i(n),l=>(s(),_(ne,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),wa=k(La,[["__scopeId","data-v-43fe3aee"]]),Aa={class:"wrapper"},Va={class:"container"},Ba={class:"title"},Ia={class:"content"},Ma={class:"content-body"},Na=p({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Ce(),{hasSidebar:o}=z(),{frontmatter:a}=x(),r=C({});return he(()=>{r.value={"has-sidebar":o.value,home:a.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(l,u)=>(s(),d("div",{class:w(["VPNavBar",r.value])},[m("div",Aa,[m("div",Va,[m("div",Ba,[g(Pa,null,{"nav-bar-title-before":h(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),m("div",Ia,[m("div",Ma,[c(l.$slots,"nav-bar-content-before",{},void 0,!0),g(_a,{class:"search"}),g(da,{class:"menu"}),g(wa,{class:"translations"}),g(bo,{class:"appearance"}),g(ka,{class:"social-links"}),g(ea,{class:"extra"}),c(l.$slots,"nav-bar-content-after",{},void 0,!0),g(oa,{class:"hamburger",active:e.isScreenOpen,onClick:u[0]||(u[0]=v=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=m("div",{class:"divider"},[m("div",{class:"divider-line"})],-1))],2))}}),Da=k(Na,[["__scopeId","data-v-950e79a7"]]),Ea={key:0,class:"VPNavScreenAppearance"},Fa={class:"text"},Wa=p({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=x();return(o,a)=>i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(s(),d("div",Ea,[m("p",Fa,V(i(n).darkModeSwitchLabel||"Appearance"),1),g(ge)])):f("",!0)}}),Ha=k(Wa,[["__scopeId","data-v-55244ba5"]]),za=["innerHTML"],Oa=p({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ee("close-screen");return(n,o)=>(s(),_(F,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:i(t)},{default:h(()=>[m("span",{innerHTML:e.item.text},null,8,za)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ua=k(Oa,[["__scopeId","data-v-eb2dcd0d"]]),Ra=["innerHTML"],Ga=p({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ee("close-screen");return(n,o)=>(s(),_(F,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:i(t)},{default:h(()=>[m("span",{innerHTML:e.item.text},null,8,Ra)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ne=k(Ga,[["__scopeId","data-v-9212d37f"]]),ja={class:"VPNavScreenMenuGroupSection"},qa={key:0,class:"title"},Ka=p({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),d("div",ja,[e.text?(s(),d("p",qa,V(e.text),1)):f("",!0),(s(!0),d(I,null,N(e.items,o=>(s(),_(Ne,{key:o.text,item:o},null,8,["item"]))),128))]))}}),Ja=k(Ka,[["__scopeId","data-v-000b6633"]]),Ya=["aria-controls","aria-expanded"],Qa=["innerHTML"],Xa=["id"],Za={key:0,class:"item"},es={key:1,class:"item"},ts={key:2,class:"group"},ns=p({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=C(!1),o=y(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(r,l)=>(s(),d("div",{class:w(["VPNavScreenMenuGroup",{open:n.value}])},[m("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:a},[m("span",{class:"button-text",innerHTML:e.text},null,8,Qa),l[0]||(l[0]=m("span",{class:"vpi-plus button-icon"},null,-1))],8,Ya),m("div",{id:o.value,class:"items"},[(s(!0),d(I,null,N(e.items,u=>(s(),d(I,{key:JSON.stringify(u)},["link"in u?(s(),d("div",Za,[g(Ne,{item:u},null,8,["item"])])):"component"in u?(s(),d("div",es,[(s(),_(E(u.component),O({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(s(),d("div",ts,[g(Ja,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Xa)],2))}}),os=k(ns,[["__scopeId","data-v-3c657227"]]),as={key:0,class:"VPNavScreenMenu"},ss=p({__name:"VPNavScreenMenu",setup(e){const{theme:t}=x();return(n,o)=>i(t).nav?(s(),d("nav",as,[(s(!0),d(I,null,N(i(t).nav,a=>(s(),d(I,{key:JSON.stringify(a)},["link"in a?(s(),_(Ua,{key:0,item:a},null,8,["item"])):"component"in a?(s(),_(E(a.component),O({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(s(),_(os,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),is=p({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=x();return(n,o)=>i(t).socialLinks?(s(),_(ke,{key:0,class:"VPNavScreenSocialLinks",links:i(t).socialLinks},null,8,["links"])):f("",!0)}}),rs={class:"list"},ls=p({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=q({correspondingLink:!0}),o=C(!1);function a(){o.value=!o.value}return(r,l)=>i(t).length&&i(n).label?(s(),d("div",{key:0,class:w(["VPNavScreenTranslations",{open:o.value}])},[m("button",{class:"title",onClick:a},[l[0]||(l[0]=m("span",{class:"vpi-languages icon lang"},null,-1)),U(" "+V(i(n).label)+" ",1),l[1]||(l[1]=m("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),m("ul",rs,[(s(!0),d(I,null,N(i(t),u=>(s(),d("li",{key:u.link,class:"item"},[g(F,{class:"link",href:u.link},{default:h(()=>[U(V(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),cs=k(ls,[["__scopeId","data-v-9d770640"]]),ds={class:"container"},us=p({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=C(null),n=Te(te?document.body:null);return(o,a)=>(s(),_(ue,{name:"fade",onEnter:a[0]||(a[0]=r=>n.value=!0),onAfterLeave:a[1]||(a[1]=r=>n.value=!1)},{default:h(()=>[e.open?(s(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[m("div",ds,[c(o.$slots,"nav-screen-content-before",{},void 0,!0),g(ss,{class:"menu"}),g(cs,{class:"translations"}),g(Ha,{class:"appearance"}),g(is,{class:"social-links"}),c(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),vs=k(us,[["__scopeId","data-v-69a7057b"]]),ms={key:0,class:"VPNav"},hs=p({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=lo(),{frontmatter:a}=x(),r=y(()=>a.value.navbar!==!1);return Le("close-screen",n),Q(()=>{te&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(l,u)=>r.value?(s(),d("header",ms,[g(Da,{"is-screen-open":i(t),onToggleScreen:i(o)},{"nav-bar-title-before":h(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[c(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[c(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(vs,{open:i(t)},{"nav-screen-content-before":h(()=>[c(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[c(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),fs=k(hs,[["__scopeId","data-v-9d47990a"]]),ps=["role","tabindex"],gs={key:1,class:"items"},_s=p({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:a,isActiveLink:r,hasActiveLink:l,hasChildren:u,toggle:v}=ut(y(()=>t.item)),S=y(()=>u.value?"section":"div"),P=y(()=>a.value?"a":"div"),b=y(()=>u.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),$=y(()=>a.value?void 0:"button"),T=y(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":a.value},{"is-active":r.value},{"has-active":l.value}]);function L(B){"key"in B&&B.key!=="Enter"||!t.item.link&&v()}function A(){t.item.link&&v()}return(B,M)=>{const D=G("VPSidebarItem",!0);return s(),_(E(S.value),{class:w(["VPSidebarItem",T.value])},{default:h(()=>[e.item.text?(s(),d("div",O({key:0,class:"item",role:$.value},Re(e.item.items?{click:L,keydown:L}:{},!0),{tabindex:e.item.items&&0}),[M[1]||(M[1]=m("div",{class:"indicator"},null,-1)),e.item.link?(s(),_(F,{key:0,tag:P.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:h(()=>[(s(),_(E(b.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),_(E(b.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(s(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:A,onKeydown:Ge(A,["enter"]),tabindex:"0"},[...M[0]||(M[0]=[m("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,ps)):f("",!0),e.item.items&&e.item.items.length?(s(),d("div",gs,[e.depth<5?(s(!0),d(I,{key:0},N(e.item.items,j=>(s(),_(D,{key:j.text,item:j,depth:e.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),bs=k(_s,[["__scopeId","data-v-f71e737d"]]),ks=p({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=C(!0);let n=null;return H(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),we(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,a)=>(s(!0),d(I,null,N(e.items,r=>(s(),d("div",{key:r.text,class:w(["group",{"no-transition":t.value}])},[g(bs,{item:r,depth:0},null,8,["item"])],2))),128))}}),ys=k(ks,[["__scopeId","data-v-8bf7a0e4"]]),Ss={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},$s=p({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=z(),o=e,a=C(null),r=Te(te?document.body:null);W([o,a],()=>{var u;o.open?(r.value=!0,(u=a.value)==null||u.focus()):r.value=!1},{immediate:!0,flush:"post"});const l=C(0);return W(t,()=>{l.value+=1},{deep:!0}),(u,v)=>i(n)?(s(),d("aside",{key:0,class:w(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:a,onClick:v[0]||(v[0]=je(()=>{},["stop"]))},[v[2]||(v[2]=m("div",{class:"curtain"},null,-1)),m("nav",Ss,[v[1]||(v[1]=m("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),c(u.$slots,"sidebar-nav-before",{},void 0,!0),(s(),_(ys,{items:i(t),key:l.value},null,8,["items"])),c(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),xs=k($s,[["__scopeId","data-v-9c98d9ed"]]),Ps=p({__name:"VPSkipLink",setup(e){const{theme:t}=x(),n=Z(),o=C();W(()=>n.path,()=>o.value.focus());function a({target:r}){const l=document.getElementById(decodeURIComponent(r.hash).slice(1));if(l){const u=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",u)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",u),l.focus(),window.scrollTo(0,0)}}return(r,l)=>(s(),d(I,null,[m("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),m("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},V(i(t).skipToContentLabel||"Skip to content"),1)],64))}}),Cs=k(Ps,[["__scopeId","data-v-7860fec0"]]),Ts=p({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=z(),a=Z();W(()=>a.path,o),dt(t,o);const{frontmatter:r}=x(),l=qe(),u=y(()=>!!l["home-hero-image"]);return Le("hero-image-slot-exists",u),(v,S)=>{const P=G("Content");return i(r).layout!==!1?(s(),d("div",{key:0,class:w(["Layout",i(r).pageClass])},[c(v.$slots,"layout-top",{},void 0,!0),g(Cs),g(Qe,{class:"backdrop",show:i(t),onClick:i(o)},null,8,["show","onClick"]),g(fs,null,{"nav-bar-title-before":h(()=>[c(v.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[c(v.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[c(v.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[c(v.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[c(v.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[c(v.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(ro,{open:i(t),onOpenMenu:i(n)},null,8,["open","onOpenMenu"]),g(xs,{open:i(t)},{"sidebar-nav-before":h(()=>[c(v.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[c(v.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(Gn,null,{"page-top":h(()=>[c(v.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[c(v.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[c(v.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[c(v.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[c(v.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[c(v.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[c(v.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[c(v.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[c(v.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[c(v.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[c(v.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[c(v.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[c(v.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[c(v.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[c(v.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[c(v.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[c(v.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[c(v.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[c(v.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[c(v.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[c(v.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[c(v.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[c(v.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(Yn),c(v.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),_(P,{key:1}))}}}),Ls=k(Ts,[["__scopeId","data-v-427ea057"]]),ws={Layout:Ls,enhanceApp:({app:e})=>{e.component("Badge",Ke)}},As=`void main() {
  // var 自动推断类型；final 运行期只能赋值一次；const 编译期常量
  var name = 'Flutter';
  final year = 2026;
  const pi = 3.14159;

  int count = 42;
  double price = 9.9;
  bool isAwesome = true;

  // 字符串插值
  print('$name 发布于 $year 年前后');
  print('pi=$pi, count=$count, price=$price, isAwesome=$isAwesome');

  // 空安全：可空类型必须显式声明
  String? nickname;
  print(nickname ?? '暂无昵称');
}
`,Vs=`int add(int a, [int b = 0]) => a + b;

String greet(String name, {String prefix = 'Hello'}) => '$prefix, $name!';

// 函数也是一等公民
int apply(int x, int Function(int) fn) => fn(x);

void main() {
  print(add(1, 2));          // 3
  print(add(1));             // 1，可选位置参数用默认值
  print(greet('Dart'));      // Hello, Dart!
  print(greet('Flutter', prefix: 'Hi')); // Hi, Flutter!
  print(apply(21, (n) => n * 2));        // 42
}
`,Bs=`class Animal {
  final String name;
  Animal(this.name);

  void speak() => print('$name 发出声音');
}

class Dog extends Animal {
  Dog(super.name);

  @override
  void speak() => print('$name：汪汪！');
}

// Mixin：复用能力的另一种方式
mixin Swimmer {
  void swim() => print('游泳中…');
}

class Duck extends Animal with Swimmer {
  Duck(super.name);
}

void main() {
  Dog('旺财').speak();
  final duck = Duck('唐老鸭');
  duck.speak();
  duck.swim();
}
`,Is=`Future<String> fetchUser() async {
  // 模拟网络请求
  await Future.delayed(const Duration(seconds: 1));
  return '小明';
}

void main() async {
  print('加载中…');
  final user = await fetchUser();
  print('欢迎回来，$user！');

  // Stream：连续的事件序列
  await for (final tick in Stream.periodic(
    const Duration(milliseconds: 500),
    (i) => i,
  ).take(3)) {
    print('tick $tick');
  }
  print('done');
}
`,Ms=`import 'package:flutter/material.dart';

// StatelessWidget：只有配置，没有可变状态
// 每次重建都是「重新描述」，框架负责比对差异

class Greeting extends StatelessWidget {
  final String name;
  const Greeting({super.key, required this.name});

  @override
  Widget build(BuildContext context) {
    return Text('你好, $name！');
  }
}

void main() {
  runApp(const MaterialApp(
    home: Scaffold(
      body: Center(child: Greeting(name: 'Flutter')),
    ),
  ));
}
`,Ns=`import 'package:flutter/material.dart';

// StatefulWidget：持有可变状态，状态数据封装在 State 对象里

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  void _increment() {
    setState(() => _count++); // 只有 setState 内的修改才触发重建
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('点击了 $_count 次',
            style: Theme.of(context).textTheme.headlineMedium),
        const SizedBox(height: 16),
        ElevatedButton(onPressed: _increment, child: const Text('点我')),
      ],
    );
  }
}

void main() => runApp(const MaterialApp(
      home: Scaffold(body: Center(child: Counter())),
    ));
`,Ds=`import 'package:flutter/material.dart';

// StatefulWidget 生命周期演示
// 在控制台观察 initState / didUpdateWidget / dispose 的调用时机

class LifeCycleDemo extends StatefulWidget {
  final String label;
  const LifeCycleDemo({super.key, required this.label});

  @override
  State<LifeCycleDemo> createState() => _LifeCycleDemoState();
}

class _LifeCycleDemoState extends State<LifeCycleDemo> {
  @override
  void initState() {
    super.initState();
    print('🟢 initState → 首次构建前，label=\${widget.label}');
  }

  @override
  void didUpdateWidget(covariant LifeCycleDemo oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.label != widget.label) {
      print('🟡 didUpdateWidget → label 变更: \${oldWidget.label} → \${widget.label}');
    }
  }

  @override
  void dispose() {
    print('🔴 dispose → 组件被销毁');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    print('🔵 build → 重建');
    return Text('状态值: \${widget.label}');
  }
}

void main() => runApp(const MaterialApp(
      home: Scaffold(body: Center(child: LifeCycleDemo(label: '初始'))),
    ));
`,Es=`import 'package:flutter/material.dart';

// 组合优于继承：用 Row + Column + Padding + Container 搭出一张卡片
// 把「搭积木」思维打透——Flutter 的 UI 本质就是 Widget 的嵌套

class UserCard extends StatelessWidget {
  final String name;
  final String role;
  final IconData icon;

  const UserCard({
    super.key,
    required this.name,
    required this.role,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.1),
              blurRadius: 8,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Row(
          children: [
            CircleAvatar(
              backgroundColor: Colors.blue.shade50,
              child: Icon(icon, color: Colors.blue.shade700),
            ),
            const SizedBox(width: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(name,
                    style: const TextStyle(
                        fontWeight: FontWeight.w600, fontSize: 16)),
                Text(role,
                    style: TextStyle(color: Colors.grey.shade600, fontSize: 13)),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

void main() => runApp(MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey.shade100,
        body: const Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              UserCard(name: '张三', role: 'Flutter 工程师', icon: Icons.code),
              SizedBox(height: 8),
              UserCard(name: '李四', role: '产品经理', icon: Icons.design_services),
            ],
          ),
        ),
      ),
    ));
`,Fs=`import 'package:flutter/material.dart';

// Row / Column / Expanded 布局基础
// Row = 水平排列，Column = 垂直排列
// Expanded + flex = 按比例分配剩余空间

void main() => runApp(MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            // 基础 Row
            Container(
              height: 80,
              color: Colors.blue.shade50,
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Icon(Icons.star, size: 32, color: Colors.amber),
                  Icon(Icons.favorite, size: 32, color: Colors.red),
                  Icon(Icons.thumb_up, size: 32, color: Colors.blue),
                ],
              ),
            ),
            const SizedBox(height: 16),
            // Expanded 按比例分配：1:2:1
            SizedBox(
              height: 100,
              child: Row(
                children: [
                  Expanded(flex: 1, child: Container(color: Colors.red)),
                  Expanded(flex: 2, child: Container(color: Colors.green)),
                  Expanded(flex: 1, child: Container(color: Colors.blue)),
                ],
              ),
            ),
            const SizedBox(height: 16),
            // Column + crossAxisAlignment
            Container(
              color: Colors.purple.shade50,
              padding: const EdgeInsets.all(12),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('标题', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                  SizedBox(height: 4),
                  Text('副标题文字', style: TextStyle(color: Colors.grey)),
                  SizedBox(height: 8),
                  Text('正文内容'),
                ],
              ),
            ),
          ],
        ),
      ),
    ));
`,Ws=`import 'package:flutter/material.dart';

// Flex 布局三件套：Row / Column / Stack
// Stack 允许子 Widget 层叠，Positioned 控制子 Widget 位置

void main() => runApp(MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            // Stack + Positioned 实现角标
            SizedBox(
              width: 120,
              height: 120,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.blue.shade100,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: const Center(
                      child: Icon(Icons.shopping_bag, size: 48, color: Colors.blue),
                    ),
                  ),
                  Positioned(
                    top: -8,
                    right: -8,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Text('3',
                          style: TextStyle(color: Colors.white, fontSize: 12)),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            // Expanded 在 Column 内占满剩余高度
            SizedBox(
              height: 200,
              child: Column(
                children: [
                  Container(height: 40, color: Colors.amber),
                  Expanded(child: Container(color: Colors.orange)),
                  Container(height: 40, color: Colors.amber),
                ],
              ),
            ),
          ],
        ),
      ),
    ));
`,Hs=`import 'package:flutter/material.dart';

// 常用组件速查：Text / Icon / Image / ElevatedButton / TextField / Checkbox
// 每个组件都有配套的命名参数，按需组合

class WidgetShowcase extends StatefulWidget {
  const WidgetShowcase({super.key});

  @override
  State<WidgetShowcase> createState() => _WidgetShowcaseState();
}

class _WidgetShowcaseState extends State<WidgetShowcase> {
  bool _agree = false;
  double _slider = 50;
  final _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const Text('Text 组件',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        Text('你好 Flutter！',
            style: TextStyle(
                fontSize: 20,
                color: Colors.blue.shade700,
                fontStyle: FontStyle.italic)),
        const Divider(height: 24),
        const Text('Icon 组件',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const Icon(Icons.home, size: 32, color: Colors.red),
            const Icon(Icons.settings, size: 32, color: Colors.green),
            const Icon(Icons.favorite, size: 32, color: Colors.pink),
            Icon(Icons.star, size: 32, color: Colors.amber.shade700),
          ],
        ),
        const Divider(height: 24),
        const Text('TextField 组件',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        TextField(
          controller: _controller,
          decoration: const InputDecoration(
            labelText: '输入你的名字',
            border: OutlineInputBorder(),
            prefixIcon: Icon(Icons.person),
          ),
        ),
        const SizedBox(height: 16),
        const Text('Checkbox 组件',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        CheckboxListTile(
          title: const Text('我已阅读并同意用户协议'),
          value: _agree,
          onChanged: (v) => setState(() => _agree = v!),
        ),
        const SizedBox(height: 16),
        const Text('Slider 组件',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        Slider(
          value: _slider,
          min: 0,
          max: 100,
          divisions: 10,
          label: '\${_slider.round()}',
          onChanged: (v) => setState(() => _slider = v),
        ),
        const SizedBox(height: 16),
        const Text('按钮组件',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            ElevatedButton(
                onPressed: _agree ? () {} : null, child: const Text('Elevated')),
            TextButton(onPressed: () {}, child: const Text('Text')),
            OutlinedButton(onPressed: () {}, child: const Text('Outlined')),
          ],
        ),
      ],
    );
  }
}

void main() => runApp(const MaterialApp(
      home: Scaffold(body: WidgetShowcase()),
    ));
`,zs=`import 'package:flutter/material.dart';

// InheritedWidget：最简单的跨 Widget 数据共享方式
// Theme.of(context) / MediaQuery.of(context) 背后就是这个机制

class CounterScope extends InheritedWidget {
  final int count;
  final VoidCallback increment;

  const CounterScope({
    super.key,
    required this.count,
    required this.increment,
    required super.child,
  });

  static CounterScope of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CounterScope>()!;
  }

  @override
  bool updateShouldNotify(CounterScope oldWidget) {
    return count != oldWidget.count;
  }
}

void main() => runApp(const MaterialApp(
      home: CounterPage(),
    ));

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _count = 0;

  void _increment() => setState(() => _count++);

  @override
  Widget build(BuildContext context) {
    return CounterScope(
      count: _count,
      increment: _increment,
      child: Scaffold(
        appBar: AppBar(title: const Text('InheritedWidget 示例')),
        body: const Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _CounterDisplay(),
            SizedBox(height: 16),
            _IncrementButton(),
          ],
        ),
      ),
    );
  }
}

// 两个独立子 Widget，通过 InheritedWidget 拿到共享状态
class _CounterDisplay extends StatelessWidget {
  const _CounterDisplay();
  @override
  Widget build(BuildContext context) {
    final scope = CounterScope.of(context);
    return Text('计数: \${scope.count}',
        style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold));
  }
}

class _IncrementButton extends StatelessWidget {
  const _IncrementButton();
  @override
  Widget build(BuildContext context) {
    final scope = CounterScope.of(context);
    return ElevatedButton(
      onPressed: scope.increment,
      child: const Text('+1'),
    );
  }
}
`,Os=`import 'package:flutter/material.dart';

// Navigator：命令式路由——push / pop / pushNamed
// MaterialPageRoute 自动提供 iOS 右滑返回手势

void main() => runApp(MaterialApp(
      title: '路由演示',
      home: const HomePage(),
      routes: {
        '/second': (ctx) => const SecondPage(),
        '/third': (ctx) => const ThirdPage(),
      },
    ));

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('首页')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('首页（HomePage）'),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                // ① push：压栈新页面
                Navigator.of(context).push(
                  MaterialPageRoute(builder: (_) => const SecondPage()),
                );
              },
              child: const Text('push → SecondPage'),
            ),
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: () => Navigator.of(context).pushNamed('/third'),
              child: const Text('pushNamed /third'),
            ),
          ],
        ),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('第二页')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('SecondPage'),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('pop ← 返回'),
            ),
          ],
        ),
      ),
    );
  }
}

class ThirdPage extends StatelessWidget {
  const ThirdPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('第三页')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('pop ← 返回'),
        ),
      ),
    );
  }
}
`,Us=`import 'package:flutter/material.dart';

// 网络请求示例（DartPad 安全版）
// DartPad 浏览器环境不支持 dart:io 的 HttpClient，
// 这里用 Future.delayed 模拟请求延迟，同时展示完整的 UI 状态机写法。
// 真实项目用 package:http（pub.dev/packages/http）+ jsonDecode。

class _Post {
  final int id;
  final String title;
  final String body;
  _Post({required this.id, required this.title, required this.body});
  factory _Post.fromJson(Map<String, dynamic> j) => _Post(
        id: j['id'],
        title: j['title'],
        body: j['body'],
      );
}

// 模拟网络请求（真实项目里换成 http.get）
Future<Map<String, dynamic>> _fetchPost() async {
  // 模拟 1.5s 延迟，随机 1/4 概率抛异常（演示错误处理）
  await Future.delayed(const Duration(milliseconds: 1500));
  // ignore: avoid_print
  print('网络请求完成');
  return {
    'id': 1,
    'title': 'Flutter 异步编程入门',
    'body': 'Future 和 Stream 是 Dart 处理异步的两个核心类。'
        'Future 表示单次异步结果，Stream 表示连续事件流。',
  };
}

void main() => runApp(const MaterialApp(home: NetworkPage()));

class NetworkPage extends StatefulWidget {
  const NetworkPage({super.key});
  @override
  State<NetworkPage> createState() => _NetworkPageState();
}

class _NetworkPageState extends State<NetworkPage> {
  _Post? _post;
  String? _error;
  bool _loading = false;

  Future<void> _fetch() async {
    setState(() {
      _loading = true;
      _post = null;
      _error = null;
    });
    try {
      final raw = await _fetchPost();
      setState(() => _post = _Post.fromJson(raw));
    } catch (e) {
      setState(() => _error = '网络错误: $e');
    } finally {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('网络请求示例')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            ElevatedButton(
              onPressed: _loading ? null : _fetch,
              child: Text(_loading ? '加载中...' : '请求数据'),
            ),
            const SizedBox(height: 16),
            if (_error != null)
              Text('❌ $_error', style: const TextStyle(color: Colors.red)),
            if (_post != null) ...[
              Text('#\${_post!.id} \${_post!.title}',
                  style: const TextStyle(
                      fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              Text(_post!.body),
            ],
            const SizedBox(height: 24),
            const Divider(),
            const Text('真实项目写法（import package:http）：',
                style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            const Text(
              "final resp = await http.get(Uri.parse(url));\\n"
              "if (resp.statusCode == 200) {\\n"
              "  final data = jsonDecode(resp.body);\\n"
              "}",
              style: TextStyle(
                  fontFamily: 'monospace',
                  fontSize: 12,
                  backgroundColor: Color(0xFFF5F5F5)),
            ),
          ],
        ),
      ),
    );
  }
}
`,Rs=`import 'package:flutter/material.dart';

// CustomPaint + CustomPainter：直接在 Canvas 上画
// Flutter 内部很多装饰组件（ClipPath、Decoration）本质都是 CustomPaint

class HeartPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.red
      ..style = PaintingStyle.fill;

    final path = Path();
    final w = size.width;
    final h = size.height;
    // 画一个心形：从底部中间向上，左弧 + 右弧 + 闭合
    path.moveTo(w / 2, h);
    path.cubicTo(w / 2, h * 0.7, 0, h * 0.4, w * 0.3, h * 0.2);
    path.cubicTo(w * 0.5, 0, w * 0.5, 0, w / 2, h * 0.25);
    path.cubicTo(w * 0.5, 0, w * 0.5, 0, w * 0.7, h * 0.2);
    path.cubicTo(w, h * 0.4, w / 2, h * 0.7, w / 2, h);
    path.close();

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

void main() => runApp(MaterialApp(
      home: Scaffold(
        body: Center(
          child: CustomPaint(
            size: const Size(200, 200),
            painter: HeartPainter(),
          ),
        ),
      ),
    ));
`,Gs=`import 'package:flutter/material.dart';

// 动画三件套：AnimationController + Tween + CurvedAnimation
// 用 AnimatedBuilder 避免手动 setState + 重建整个 Widget 树

void main() => runApp(const MaterialApp(home: _AnimDemo()));

class _AnimDemo extends StatefulWidget {
  const _AnimDemo();
  @override
  State<_AnimDemo> createState() => _AnimDemoState();
}

class _AnimDemoState extends State<_AnimDemo>
    with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  late final Animation<double> _scale;
  late final Animation<Color?> _color;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 800),
    )..repeat(reverse: true); // 循环播放

    _scale = Tween<double>(begin: 1.0, end: 1.4).animate(
      CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut),
    );
    _color = ColorTween(begin: Colors.blue, end: Colors.purple).animate(_ctrl);
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('动画演示')),
      body: Center(
        // AnimatedBuilder：只重建子树中真正依赖动画值的部分
        child: AnimatedBuilder(
          animation: _ctrl,
          builder: (_, child) {
            return Transform.scale(
              scale: _scale.value,
              child: Container(
                width: 120,
                height: 120,
                decoration: BoxDecoration(
                  color: _color.value,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: child,
              ),
            );
          },
          child: const Icon(Icons.favorite, size: 48, color: Colors.white),
        ),
      ),
    );
  }
}
`,js=`import 'dart:async';
import 'package:flutter/material.dart';

// Future 与 Stream 实战
// Future = 单次异步结果，Stream = 连续事件流（可多次 emit）

void main() => runApp(const MaterialApp(home: _Demo()));

class _Demo extends StatefulWidget {
  const _Demo();
  @override
  State<_Demo> createState() => _DemoState();
}

class _DemoState extends State<_Demo> {
  String _futureResult = '等待中...';
  final List<int> _streamEvents = [];
  StreamSubscription<int>? _sub;
  bool _streamActive = false;

  @override
  void dispose() {
    _sub?.cancel(); // 必须取消，否则内存泄漏
    super.dispose();
  }

  // Future：一次返回
  Future<String> _loadAsync() async {
    await Future.delayed(const Duration(seconds: 1));
    return '✅ 数据加载完成：\${DateTime.now().second}s';
  }

  // Stream：持续产出
  Stream<int> _countdown() async* {
    for (var i = 5; i >= 0; i--) {
      yield i;
      await Future.delayed(const Duration(milliseconds: 400));
    }
  }

  void _runFuture() async {
    setState(() => _futureResult = '加载中...');
    final r = await _loadAsync();
    setState(() => _futureResult = r);
  }

  void _toggleStream() {
    if (_streamActive) {
      _sub?.cancel();
      setState(() {
        _streamActive = false;
        _streamEvents.clear();
      });
    } else {
      setState(() {
        _streamActive = true;
        _streamEvents.clear();
      });
      _sub = _countdown().listen((event) {
        setState(() => _streamEvents.add(event));
      }, onDone: () {
        setState(() => _streamActive = false);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Future & Stream')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            ElevatedButton(onPressed: _runFuture, child: const Text('运行 Future')),
            const SizedBox(height: 8),
            Text(_futureResult, style: const TextStyle(fontSize: 16)),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: _toggleStream,
              child: Text(_streamActive ? '⏹ 停止 Stream' : '▶ 启动 Stream'),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              children: _streamEvents
                  .map((e) => Chip(label: Text('$e')))
                  .toList(),
            ),
          ],
        ),
      ),
    );
  }
}
`,qs=`import 'package:flutter/material.dart';

// 性能优化基础：const / key / ListView.builder
// const 让 Widget 在重建时复用；key 帮助框架识别列表项身份

void main() => runApp(const MaterialApp(home: _PerfDemo()));

class _PerfDemo extends StatefulWidget {
  const _PerfDemo();
  @override
  State<_PerfDemo> createState() => _PerfDemoState();
}

class _PerfDemoState extends State<_PerfDemo> {
  // ListView.builder：懒加载，只构建可见项
  final List<int> _items = List.generate(1000, (i) => i);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('性能优化基础')),
      body: ListView.builder(
        itemCount: _items.length,
        // itemExtent 让框架预知每项高度，避免二次测量
        itemExtent: 56,
        itemBuilder: (ctx, i) {
          // ✅ 固定高度 + key，让框架高效复用
          return ListTile(
            key: ValueKey(i),
            leading: CircleAvatar(
              // ✅ const：颜色固定时用，省一次重建
              backgroundColor: Colors.blue.shade100,
              child: const Icon(Icons.code, color: Colors.blueAccent),
            ),
            title: Text('项目 #\${_items[i]}'),
            subtitle: const Text('flutter list view builder 懒加载',
                style: TextStyle(fontSize: 12)),
          );
        },
      ),
    );
  }
}
`,Ks={"dart-variables":As,"dart-functions":Vs,"dart-classes":Bs,"dart-async":Is,"widget-stateless":Ms,"widget-stateful":Ns,"widget-lifecycle":Ds,"widget-composition-card":Es,"layout-basics":Fs,"layout-flex":Ws,"widgets-catalog":Hs,"state-inherited":zs,"router-basic":Os,"network-http":Us,"custom-paint-widget":Rs,"animation-basic":Gs,"future-stream-playground":js,"performance-basics":qs},Js=["href"],Ys=["src"],Qs=p({__name:"DartPad",props:{id:{},sample:{},example:{},code:{},height:{default:480},run:{type:Boolean,default:!1},theme:{default:"auto"}},setup(e){const t=e,{isDark:n}=Se(),o=C(),a=C(),r=C(!1),l=C(!1),u=y(()=>t.code??(t.example?Ks[t.example]:void 0)),v=y(()=>t.theme==="auto"?n.value?"dark":"light":t.theme);function S(A){const B=new URLSearchParams({theme:v.value});return A&&B.set("embed","true"),t.id&&B.set("id",t.id),t.sample&&B.set("sample",t.sample),t.run&&B.set("run","true"),`https://dartpad.dev/?${B.toString()}`}const P=y(()=>S(!0)),b=y(()=>S(!1)),$=y(()=>typeof t.height=="number"?`${t.height}px`:t.height);function T(A){var B,M,D;A.origin!=="https://dartpad.dev"||!u.value||((B=A.data)==null?void 0:B.type)==="ready"&&((D=(M=a.value)==null?void 0:M.contentWindow)==null||D.postMessage({type:"sourceCode",sourceCode:u.value},"https://dartpad.dev"))}let L;return H(()=>{l.value=window.matchMedia("(max-width: 640px)").matches,!l.value&&(window.addEventListener("message",T),L=new IntersectionObserver(A=>{A.some(B=>B.isIntersecting)&&(r.value=!0,L==null||L.disconnect())},{rootMargin:"256px"}),o.value&&L.observe(o.value))}),we(()=>{window.removeEventListener("message",T),L==null||L.disconnect()}),(A,B)=>(s(),d("div",{ref_key:"wrapper",ref:o,class:"dartpad"},[l.value?(s(),d("a",{key:0,class:"dartpad__link",href:b.value,target:"_blank",rel:"noopener noreferrer"}," 在 DartPad 中打开并运行此示例 → ",8,Js)):r.value?(s(),d("iframe",{key:1,ref_key:"frame",ref:a,src:P.value,style:J({height:$.value}),class:"dartpad__frame",title:"DartPad 在线运行",allow:"clipboard-write"},null,12,Ys)):(s(),d("div",{key:2,class:"dartpad__placeholder",style:J({height:$.value})}," DartPad 运行环境将在滚动到此处时加载… ",4))],512))}}),Xs=k(Qs,[["__scopeId","data-v-69667923"]]),ei={extends:ws,enhanceApp({app:e}){e.component("DartPad",Xs)}};export{ei as R,ua as c,x as u};
