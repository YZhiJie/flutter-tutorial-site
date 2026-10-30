const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CwPRlxJk.js","assets/chunks/framework.CnqZ57Z3.js"])))=>i.map(i=>d[i]);
import{d as f,c as d,r as c,n as A,o,a as O,t as L,b as _,w as p,T as ue,e as g,_ as x,u as ye,i as ze,f as Ee,g as me,h as b,j as h,k as s,l as U,m as se,p as C,q as V,s as Q,v as N,x as he,y as pe,z as Me,A as Ve,F as I,B as W,C as q,D as Y,E as v,G as ke,H as E,I as Pe,J as Z,K as H,L as ee,M as Ne,N as J,O as re,P as Te,Q as Ce,R as ne,S as Re,U as He,V as Oe,W as Be,X as $e,Y as Ue,Z as qe,$ as Ae,a0 as je,a1 as Ge}from"./framework.CnqZ57Z3.js";const Ke=f({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(n,t)=>(o(),d("span",{class:A(["VPBadge",e.type])},[c(n.$slots,"default",{},()=>[O(L(e.text),1)])],2))}}),Je={key:0,class:"VPBackdrop"},Xe=f({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(n,t)=>(o(),_(ue,{name:"fade"},{default:p(()=>[e.show?(o(),d("div",Je)):g("",!0)]),_:1}))}}),Qe=x(Xe,[["__scopeId","data-v-b4b50216"]]),P=ye;function Ye(e,n){let t,i=!1;return()=>{t&&clearTimeout(t),i?t=setTimeout(e,n):(e(),(i=!0)&&setTimeout(()=>i=!1,n))}}function le(e){return e.startsWith("/")?e:`/${e}`}function ge(e){const{pathname:n,search:t,hash:i,protocol:a}=new URL(e,"http://a.com");if(ze(e)||e.startsWith("#")||!a.startsWith("http")||!Ee(n))return e;const{site:r}=P(),l=n.endsWith("/")||n.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${i}`);return me(l)}function G({correspondingLink:e=!1}={}){const{site:n,localeIndex:t,page:i,theme:a,hash:r}=P(),l=b(()=>{var m,y;return{label:(m=n.value.locales[t.value])==null?void 0:m.label,link:((y=n.value.locales[t.value])==null?void 0:y.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:b(()=>Object.entries(n.value.locales).flatMap(([m,y])=>l.value.label===y.label?[]:{text:y.label,link:Ze(y.link||(m==="root"?"/":`/${m}/`),a.value.i18nRouting!==!1&&e,i.value.relativePath.slice(l.value.link.length-1),!n.value.cleanUrls)+r.value})),currentLang:l}}function Ze(e,n,t,i){return n?e.replace(/\/$/,"")+le(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):e}const en={class:"NotFound"},nn={class:"code"},tn={class:"title"},an={class:"quote"},on={class:"action"},sn=["href","aria-label"],rn=f({__name:"NotFound",setup(e){const{theme:n}=P(),{currentLang:t}=G();return(i,a)=>{var r,l,u,m,y;return o(),d("div",en,[h("p",nn,L(((r=s(n).notFound)==null?void 0:r.code)??"404"),1),h("h1",tn,L(((l=s(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=h("div",{class:"divider"},null,-1)),h("blockquote",an,L(((u=s(n).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",on,[h("a",{class:"link",href:s(me)(s(t).link),"aria-label":((m=s(n).notFound)==null?void 0:m.linkLabel)??"go to home"},L(((y=s(n).notFound)==null?void 0:y.linkText)??"Take me home"),9,sn)])])}}}),ln=x(rn,[["__scopeId","data-v-c41b0d2c"]]);function we(e,n){if(Array.isArray(e))return K(e);if(e==null)return[];n=le(n);const t=Object.keys(e).sort((a,r)=>r.split("/").length-a.split("/").length).find(a=>n.startsWith(le(a))),i=t?e[t]:[];return Array.isArray(i)?K(i):K(i.items,i.base)}function cn(e){const n=[];let t=0;for(const i in e){const a=e[i];if(a.items){t=n.push(a);continue}n[t]||n.push({items:[]}),n[t].items.push(a)}return n}function dn(e){const n=[];function t(i){for(const a of i)a.text&&a.link&&n.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&t(a.items)}return t(e),n}function ce(e,n){return Array.isArray(n)?n.some(t=>ce(e,t)):U(e,n.link)?!0:n.items?ce(e,n.items):!1}function K(e,n){return[...e].map(t=>{const i={...t},a=i.base||n;return a&&i.link&&(i.link=a+i.link),i.items&&(i.items=K(i.items,a)),i})}function R(){const{frontmatter:e,page:n,theme:t}=P(),i=se("(min-width: 960px)"),a=C(!1),r=b(()=>{const w=t.value.sidebar,D=n.value.relativePath;return w?we(w,D):[]}),l=C(r.value);V(r,(w,D)=>{JSON.stringify(w)!==JSON.stringify(D)&&(l.value=r.value)});const u=b(()=>e.value.sidebar!==!1&&l.value.length>0&&e.value.layout!=="home"),m=b(()=>y?e.value.aside==null?t.value.aside==="left":e.value.aside==="left":!1),y=b(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:t.value.aside!==!1),T=b(()=>u.value&&i.value),S=b(()=>u.value?cn(l.value):[]);function k(){a.value=!0}function B(){a.value=!1}function $(){a.value?B():k()}return{isOpen:a,sidebar:l,sidebarGroups:S,hasSidebar:u,hasAside:y,leftAside:m,isSidebarEnabled:T,open:k,close:B,toggle:$}}function un(e,n){let t;Q(()=>{t=e.value?document.activeElement:void 0}),N(()=>{window.addEventListener("keyup",i)}),he(()=>{window.removeEventListener("keyup",i)});function i(a){a.key==="Escape"&&e.value&&(n(),t==null||t.focus())}}function mn(e){const{page:n,hash:t}=P(),i=C(!1),a=b(()=>e.value.collapsed!=null),r=b(()=>!!e.value.link),l=C(!1),u=()=>{l.value=U(n.value.relativePath,e.value.link)};V([n,e,t],u),N(u);const m=b(()=>l.value?!0:e.value.items?ce(n.value.relativePath,e.value.items):!1),y=b(()=>!!(e.value.items&&e.value.items.length));Q(()=>{i.value=!!(a.value&&e.value.collapsed)}),pe(()=>{(l.value||m.value)&&(i.value=!1)});function T(){a.value&&(i.value=!i.value)}return{collapsed:i,collapsible:a,isLink:r,isActiveLink:l,hasActiveLink:m,hasChildren:y,toggle:T}}function hn(){const{hasSidebar:e}=R(),n=se("(min-width: 960px)"),t=se("(min-width: 1280px)");return{isAsideEnabled:b(()=>!t.value&&!n.value?!1:e.value?t.value:n.value)}}const pn=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,de=[];function Le(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function fe(e){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const i=Number(t.tagName[1]);return{element:t,title:gn(t),link:"#"+t.id,level:i}});return fn(n,e)}function gn(e){let n="";for(const t of e.childNodes)if(t.nodeType===1){if(pn.test(t.className))continue;n+=t.textContent}else t.nodeType===3&&(n+=t.textContent);return n.trim()}function fn(e,n){if(n===!1)return[];const t=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[i,a]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Sn(e,i,a)}function vn(e,n){const{isAsideEnabled:t}=hn(),i=Ye(r,100);let a=null;N(()=>{requestAnimationFrame(r),window.addEventListener("scroll",i)}),Me(()=>{l(location.hash)}),he(()=>{window.removeEventListener("scroll",i)});function r(){if(!t.value)return;const u=window.scrollY,m=window.innerHeight,y=document.body.offsetHeight,T=Math.abs(u+m-y)<1,S=de.map(({element:B,link:$})=>({link:$,top:_n(B)})).filter(({top:B})=>!Number.isNaN(B)).sort((B,$)=>B.top-$.top);if(!S.length){l(null);return}if(u<1){l(null);return}if(T){l(S[S.length-1].link);return}let k=null;for(const{link:B,top:$}of S){if($>u+Ve()+4)break;k=B}l(k)}function l(u){a&&a.classList.remove("active"),u==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const m=a;m?(m.classList.add("active"),n.value.style.top=m.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function _n(e){let n=0;for(;e!==document.body;){if(e===null)return NaN;n+=e.offsetTop,e=e.offsetParent}return n}function Sn(e,n,t){de.length=0;const i=[],a=[];return e.forEach(r=>{const l={...r,children:[]};let u=a[a.length-1];for(;u&&u.level>=l.level;)a.pop(),u=a[a.length-1];if(l.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){a.push({level:l.level,shouldIgnore:!0});return}l.level>t||l.level<n||(de.push({element:l.element,link:l.link}),u?u.children.push(l):i.push(l),a.push(l))}),i}const xn=["href","title"],bn=f({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function n({target:t}){const i=t.href.split("#")[1],a=document.getElementById(decodeURIComponent(i));a==null||a.focus({preventScroll:!0})}return(t,i)=>{const a=q("VPDocOutlineItem",!0);return o(),d("ul",{class:A(["VPDocOutlineItem",e.root?"root":"nested"])},[(o(!0),d(I,null,W(e.headers,({children:r,link:l,title:u})=>(o(),d("li",null,[h("a",{class:"outline-link",href:l,onClick:n,title:u},L(u),9,xn),r!=null&&r.length?(o(),_(a,{key:0,headers:r},null,8,["headers"])):g("",!0)]))),256))],2)}}}),De=x(bn,[["__scopeId","data-v-150ad473"]]),yn={class:"content"},kn={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pn=f({__name:"VPDocAsideOutline",setup(e){const{frontmatter:n,theme:t}=P(),i=ke([]);Y(()=>{i.value=fe(n.value.outline??t.value.outline)});const a=C(),r=C();return vn(a,r),(l,u)=>(o(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:A(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:a},[h("div",yn,[h("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),h("div",kn,L(s(Le)(s(t))),1),v(De,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),Tn=x(Pn,[["__scopeId","data-v-c3ded439"]]),Cn={class:"VPDocAsideCarbonAds"},Bn=f({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const n=()=>null;return(t,i)=>(o(),d("div",Cn,[v(s(n),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),$n={class:"VPDocAside"},An=f({__name:"VPDocAside",setup(e){const{theme:n}=P();return(t,i)=>(o(),d("div",$n,[c(t.$slots,"aside-top",{},void 0,!0),c(t.$slots,"aside-outline-before",{},void 0,!0),v(Tn),c(t.$slots,"aside-outline-after",{},void 0,!0),i[0]||(i[0]=h("div",{class:"spacer"},null,-1)),c(t.$slots,"aside-ads-before",{},void 0,!0),s(n).carbonAds?(o(),_(Bn,{key:0,"carbon-ads":s(n).carbonAds},null,8,["carbon-ads"])):g("",!0),c(t.$slots,"aside-ads-after",{},void 0,!0),c(t.$slots,"aside-bottom",{},void 0,!0)]))}}),wn=x(An,[["__scopeId","data-v-20e8a385"]]);function Ln(){const{theme:e,page:n}=P();return b(()=>{const{text:t="Edit this page",pattern:i=""}=e.value.editLink||{};let a;return typeof i=="function"?a=i(n.value):a=i.replace(/:path/g,n.value.filePath),{url:a,text:t}})}function Dn(){const{page:e,theme:n,frontmatter:t}=P();return b(()=>{var y,T,S,k,B,$,w,D;const i=we(n.value.sidebar,e.value.relativePath),a=dn(i),r=In(a,F=>F.link.replace(/[?#].*$/,"")),l=r.findIndex(F=>U(e.value.relativePath,F.link)),u=((y=n.value.docFooter)==null?void 0:y.prev)===!1&&!t.value.prev||t.value.prev===!1,m=((T=n.value.docFooter)==null?void 0:T.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((S=r[l-1])==null?void 0:S.docFooterText)??((k=r[l-1])==null?void 0:k.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((B=r[l-1])==null?void 0:B.link)},next:m?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??(($=r[l+1])==null?void 0:$.docFooterText)??((w=r[l+1])==null?void 0:w.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((D=r[l+1])==null?void 0:D.link)}}})}function In(e,n){const t=new Set;return e.filter(i=>{const a=n(i);return t.has(a)?!1:t.add(a)})}const M=f({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const n=e,t=b(()=>n.tag??(n.href?"a":"span")),i=b(()=>n.href&&Pe.test(n.href)||n.target==="_blank");return(a,r)=>(o(),_(E(t.value),{class:A(["VPLink",{link:e.href,"vp-external-link-icon":i.value,"no-icon":e.noIcon}]),href:e.href?s(ge)(e.href):void 0,target:e.target??(i.value?"_blank":void 0),rel:e.rel??(i.value?"noreferrer":void 0)},{default:p(()=>[c(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Fn={class:"VPLastUpdated"},Wn=["datetime"],zn=f({__name:"VPDocFooterLastUpdated",setup(e){const{theme:n,page:t,lang:i}=P(),a=b(()=>new Date(t.value.lastUpdated)),r=b(()=>a.value.toISOString()),l=C("");return N(()=>{Q(()=>{var u,m,y;l.value=new Intl.DateTimeFormat((m=(u=n.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&m.forceLocale?i.value:void 0,((y=n.value.lastUpdated)==null?void 0:y.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(u,m)=>{var y;return o(),d("p",Fn,[O(L(((y=s(n).lastUpdated)==null?void 0:y.text)||s(n).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},L(l.value),9,Wn)])}}}),En=x(zn,[["__scopeId","data-v-4adf0913"]]),Mn={key:0,class:"VPDocFooter"},Vn={key:0,class:"edit-info"},Nn={key:0,class:"edit-link"},Rn={key:1,class:"last-updated"},Hn={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},On={class:"pager"},Un=["innerHTML"],qn=["innerHTML"],jn={class:"pager"},Gn=["innerHTML"],Kn=["innerHTML"],Jn=f({__name:"VPDocFooter",setup(e){const{theme:n,page:t,frontmatter:i}=P(),a=Ln(),r=Dn(),l=b(()=>n.value.editLink&&i.value.editLink!==!1),u=b(()=>t.value.lastUpdated),m=b(()=>l.value||u.value||r.value.prev||r.value.next);return(y,T)=>{var S,k,B,$;return m.value?(o(),d("footer",Mn,[c(y.$slots,"doc-footer-before",{},void 0,!0),l.value||u.value?(o(),d("div",Vn,[l.value?(o(),d("div",Nn,[v(M,{class:"edit-link-button",href:s(a).url,"no-icon":!0},{default:p(()=>[T[0]||(T[0]=h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),O(" "+L(s(a).text),1)]),_:1},8,["href"])])):g("",!0),u.value?(o(),d("div",Rn,[v(En)])):g("",!0)])):g("",!0),(S=s(r).prev)!=null&&S.link||(k=s(r).next)!=null&&k.link?(o(),d("nav",Hn,[T[1]||(T[1]=h("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),h("div",On,[(B=s(r).prev)!=null&&B.link?(o(),_(M,{key:0,class:"pager-link prev",href:s(r).prev.link},{default:p(()=>{var w;return[h("span",{class:"desc",innerHTML:((w=s(n).docFooter)==null?void 0:w.prev)||"Previous page"},null,8,Un),h("span",{class:"title",innerHTML:s(r).prev.text},null,8,qn)]}),_:1},8,["href"])):g("",!0)]),h("div",jn,[($=s(r).next)!=null&&$.link?(o(),_(M,{key:0,class:"pager-link next",href:s(r).next.link},{default:p(()=>{var w;return[h("span",{class:"desc",innerHTML:((w=s(n).docFooter)==null?void 0:w.next)||"Next page"},null,8,Gn),h("span",{class:"title",innerHTML:s(r).next.text},null,8,Kn)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),Xn=x(Jn,[["__scopeId","data-v-71ed9b76"]]),Qn={class:"container"},Yn={class:"aside-container"},Zn={class:"aside-content"},et={class:"content"},nt={class:"content-container"},tt={class:"main"},it=f({__name:"VPDoc",setup(e){const{theme:n}=P(),t=Z(),{hasSidebar:i,hasAside:a,leftAside:r}=R(),l=b(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,m)=>{const y=q("Content");return o(),d("div",{class:A(["VPDoc",{"has-sidebar":s(i),"has-aside":s(a)}])},[c(u.$slots,"doc-top",{},void 0,!0),h("div",Qn,[s(a)?(o(),d("div",{key:0,class:A(["aside",{"left-aside":s(r)}])},[m[0]||(m[0]=h("div",{class:"aside-curtain"},null,-1)),h("div",Yn,[h("div",Zn,[v(wn,null,{"aside-top":p(()=>[c(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[c(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[c(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),h("div",et,[h("div",nt,[c(u.$slots,"doc-before",{},void 0,!0),h("main",tt,[v(y,{class:A(["vp-doc",[l.value,s(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),v(Xn,null,{"doc-footer-before":p(()=>[c(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),c(u.$slots,"doc-after",{},void 0,!0)])])]),c(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),at=x(it,[["__scopeId","data-v-e994cc46"]]),ot=f({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const n=e,t=b(()=>n.href&&Pe.test(n.href)),i=b(()=>n.tag||(n.href?"a":"button"));return(a,r)=>(o(),_(E(i.value),{class:A(["VPButton",[e.size,e.theme]]),href:e.href?s(ge)(e.href):void 0,target:n.target??(t.value?"_blank":void 0),rel:n.rel??(t.value?"noreferrer":void 0)},{default:p(()=>[O(L(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),st=x(ot,[["__scopeId","data-v-c7d71f1c"]]),rt=["src","alt"],lt=f({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(n,t)=>{const i=q("VPImage",!0);return e.image?(o(),d(I,{key:0},[typeof e.image=="string"||"src"in e.image?(o(),d("img",H({key:0,class:"VPImage"},typeof e.image=="string"?n.$attrs:{...e.image,...n.$attrs},{src:s(me)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,rt)):(o(),d(I,{key:1},[v(i,H({class:"dark",image:e.image.dark,alt:e.image.alt},n.$attrs),null,16,["image","alt"]),v(i,H({class:"light",image:e.image.light,alt:e.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),X=x(lt,[["__scopeId","data-v-b819f538"]]),ct={class:"container"},dt={class:"main"},ut={class:"heading"},mt=["innerHTML"],ht=["innerHTML"],pt=["innerHTML"],gt={key:0,class:"actions"},ft={key:0,class:"image"},vt={class:"image-container"},_t=f({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const n=ee("hero-image-slot-exists");return(t,i)=>(o(),d("div",{class:A(["VPHero",{"has-image":e.image||s(n)}])},[h("div",ct,[h("div",dt,[c(t.$slots,"home-hero-info-before",{},void 0,!0),c(t.$slots,"home-hero-info",{},()=>[h("h1",ut,[e.name?(o(),d("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,mt)):g("",!0),e.text?(o(),d("span",{key:1,innerHTML:e.text,class:"text"},null,8,ht)):g("",!0)]),e.tagline?(o(),d("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,pt)):g("",!0)],!0),c(t.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(o(),d("div",gt,[(o(!0),d(I,null,W(e.actions,a=>(o(),d("div",{key:a.link,class:"action"},[v(st,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),c(t.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||s(n)?(o(),d("div",ft,[h("div",vt,[i[0]||(i[0]=h("div",{class:"image-bg"},null,-1)),c(t.$slots,"home-hero-image",{},()=>[e.image?(o(),_(X,{key:0,class:"image-src",image:e.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),St=x(_t,[["__scopeId","data-v-53a3d2f1"]]),xt=f({__name:"VPHomeHero",setup(e){const{frontmatter:n}=P();return(t,i)=>s(n).hero?(o(),_(St,{key:0,class:"VPHomeHero",name:s(n).hero.name,text:s(n).hero.text,tagline:s(n).hero.tagline,image:s(n).hero.image,actions:s(n).hero.actions},{"home-hero-info-before":p(()=>[c(t.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[c(t.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[c(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[c(t.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[c(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),bt={class:"box"},yt={key:0,class:"icon"},kt=["innerHTML"],Pt=["innerHTML"],Tt=["innerHTML"],Ct={key:4,class:"link-text"},Bt={class:"link-text-value"},$t=f({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(n,t)=>(o(),_(M,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:p(()=>[h("article",bt,[typeof e.icon=="object"&&e.icon.wrap?(o(),d("div",yt,[v(X,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(o(),_(X,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(o(),d("div",{key:2,class:"icon",innerHTML:e.icon},null,8,kt)):g("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,Pt),e.details?(o(),d("p",{key:3,class:"details",innerHTML:e.details},null,8,Tt)):g("",!0),e.linkText?(o(),d("div",Ct,[h("p",Bt,[O(L(e.linkText)+" ",1),t[0]||(t[0]=h("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),At=x($t,[["__scopeId","data-v-8d026376"]]),wt={key:0,class:"VPFeatures"},Lt={class:"container"},Dt={class:"items"},It=f({__name:"VPFeatures",props:{features:{}},setup(e){const n=e,t=b(()=>{const i=n.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,a)=>e.features?(o(),d("div",wt,[h("div",Lt,[h("div",Dt,[(o(!0),d(I,null,W(e.features,r=>(o(),d("div",{key:r.title,class:A(["item",[t.value]])},[v(At,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),Ft=x(It,[["__scopeId","data-v-400b30c0"]]),Wt=f({__name:"VPHomeFeatures",setup(e){const{frontmatter:n}=P();return(t,i)=>s(n).features?(o(),_(Ft,{key:0,class:"VPHomeFeatures",features:s(n).features},null,8,["features"])):g("",!0)}}),zt=f({__name:"VPHomeContent",setup(e){const{width:n}=Ne({initialWidth:0,includeScrollbar:!1});return(t,i)=>(o(),d("div",{class:"vp-doc container",style:J(s(n)?{"--vp-offset":`calc(50% - ${s(n)/2}px)`}:{})},[c(t.$slots,"default",{},void 0,!0)],4))}}),Et=x(zt,[["__scopeId","data-v-58bb86ab"]]),Mt=f({__name:"VPHome",setup(e){const{frontmatter:n,theme:t}=P();return(i,a)=>{const r=q("Content");return o(),d("div",{class:A(["VPHome",{"external-link-icon-enabled":s(t).externalLinkIcon}])},[c(i.$slots,"home-hero-before",{},void 0,!0),v(xt,null,{"home-hero-info-before":p(()=>[c(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(i.$slots,"home-hero-image",{},void 0,!0)]),_:3}),c(i.$slots,"home-hero-after",{},void 0,!0),c(i.$slots,"home-features-before",{},void 0,!0),v(Wt),c(i.$slots,"home-features-after",{},void 0,!0),s(n).markdownStyles!==!1?(o(),_(Et,{key:0},{default:p(()=>[v(r)]),_:1})):(o(),_(r,{key:1}))],2)}}}),Vt=x(Mt,[["__scopeId","data-v-08ac8878"]]),Nt={},Rt={class:"VPPage"};function Ht(e,n){const t=q("Content");return o(),d("div",Rt,[c(e.$slots,"page-top"),v(t),c(e.$slots,"page-bottom")])}const Ot=x(Nt,[["render",Ht]]),Ut=f({__name:"VPContent",setup(e){const{page:n,frontmatter:t}=P(),{hasSidebar:i}=R();return(a,r)=>(o(),d("div",{class:A(["VPContent",{"has-sidebar":s(i),"is-home":s(t).layout==="home"}]),id:"VPContent"},[s(n).isNotFound?c(a.$slots,"not-found",{},()=>[v(ln)],!0,0):s(t).layout==="page"?(o(),_(Ot,{key:1},{"page-top":p(()=>[c(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[c(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):s(t).layout==="home"?(o(),_(Vt,{key:2},{"home-hero-before":p(()=>[c(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[c(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[c(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[c(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[c(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):s(t).layout&&s(t).layout!=="doc"?(o(),_(E(s(t).layout),{key:3})):(o(),_(at,{key:4},{"doc-top":p(()=>[c(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[c(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[c(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[c(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[c(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[c(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[c(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[c(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),qt=x(Ut,[["__scopeId","data-v-df5e343b"]]),jt={class:"container"},Gt=["innerHTML"],Kt=["innerHTML"],Jt=f({__name:"VPFooter",setup(e){const{theme:n,frontmatter:t}=P(),{hasSidebar:i}=R();return(a,r)=>s(n).footer&&s(t).footer!==!1?(o(),d("footer",{key:0,class:A(["VPFooter",{"has-sidebar":s(i)}])},[h("div",jt,[s(n).footer.message?(o(),d("p",{key:0,class:"message",innerHTML:s(n).footer.message},null,8,Gt)):g("",!0),s(n).footer.copyright?(o(),d("p",{key:1,class:"copyright",innerHTML:s(n).footer.copyright},null,8,Kt)):g("",!0)])],2)):g("",!0)}}),Xt=x(Jt,[["__scopeId","data-v-a7e16f51"]]);function Qt(){const{theme:e,frontmatter:n}=P(),t=ke([]),i=b(()=>t.value.length>0);return Y(()=>{t.value=fe(n.value.outline??e.value.outline)}),{headers:t,hasLocalNav:i}}const Yt={class:"menu-text"},Zt={class:"header"},ei={class:"outline"},ni=f({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const n=e,{theme:t}=P(),i=C(!1),a=C(0),r=C(),l=C();function u(S){var k;(k=r.value)!=null&&k.contains(S.target)||(i.value=!1)}V(i,S=>{if(S){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),re("Escape",()=>{i.value=!1}),Y(()=>{i.value=!1});function m(){i.value=!i.value,a.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function y(S){S.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),Te(()=>{i.value=!1}))}function T(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(S,k)=>(o(),d("div",{class:"VPLocalNavOutlineDropdown",style:J({"--vp-vh":a.value+"px"}),ref_key:"main",ref:r},[e.headers.length>0?(o(),d("button",{key:0,onClick:m,class:A({open:i.value})},[h("span",Yt,L(s(Le)(s(t))),1),k[0]||(k[0]=h("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(o(),d("button",{key:1,onClick:T},L(s(t).returnToTopLabel||"Return to top"),1)),v(ue,{name:"flyout"},{default:p(()=>[i.value?(o(),d("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:y},[h("div",Zt,[h("a",{class:"top-link",href:"#",onClick:T},L(s(t).returnToTopLabel||"Return to top"),1)]),h("div",ei,[v(De,{headers:e.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),ti=x(ni,[["__scopeId","data-v-6bc5659c"]]),ii={class:"container"},ai=["aria-expanded"],oi={class:"menu-text"},si=f({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:n,frontmatter:t}=P(),{hasSidebar:i}=R(),{headers:a}=Qt(),{y:r}=Ce(),l=C(0);N(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Y(()=>{a.value=fe(t.value.outline??n.value.outline)});const u=b(()=>a.value.length===0),m=b(()=>u.value&&!i.value),y=b(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:u.value,fixed:m.value}));return(T,S)=>s(t).layout!=="home"&&(!m.value||s(r)>=l.value)?(o(),d("div",{key:0,class:A(y.value)},[h("div",ii,[s(i)?(o(),d("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:S[0]||(S[0]=k=>T.$emit("open-menu"))},[S[1]||(S[1]=h("span",{class:"vpi-align-left menu-icon"},null,-1)),h("span",oi,L(s(n).sidebarMenuLabel||"Menu"),1)],8,ai)):g("",!0),v(ti,{headers:s(a),navHeight:l.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),ri=x(si,[["__scopeId","data-v-196c50c0"]]);function li(){const e=C(!1);function n(){e.value=!0,window.addEventListener("resize",a)}function t(){e.value=!1,window.removeEventListener("resize",a)}function i(){e.value?t():n()}function a(){window.outerWidth>=768&&t()}const r=Z();return V(()=>r.path,t),{isScreenOpen:e,openScreen:n,closeScreen:t,toggleScreen:i}}const ci={},di={class:"VPSwitch",type:"button",role:"switch"},ui={class:"check"},mi={key:0,class:"icon"};function hi(e,n){return o(),d("button",di,[h("span",ui,[e.$slots.default?(o(),d("span",mi,[c(e.$slots,"default",{},void 0,!0)])):g("",!0)])])}const pi=x(ci,[["render",hi],["__scopeId","data-v-afba620a"]]),gi=f({__name:"VPSwitchAppearance",setup(e){const{isDark:n,theme:t}=P(),i=ee("toggle-appearance",()=>{n.value=!n.value}),a=C("");return pe(()=>{a.value=n.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,l)=>(o(),_(pi,{title:a.value,class:"VPSwitchAppearance","aria-checked":s(n),onClick:s(i)},{default:p(()=>[...l[0]||(l[0]=[h("span",{class:"vpi-sun sun"},null,-1),h("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ve=x(gi,[["__scopeId","data-v-63c120e2"]]),fi={key:0,class:"VPNavBarAppearance"},vi=f({__name:"VPNavBarAppearance",setup(e){const{site:n}=P();return(t,i)=>s(n).appearance&&s(n).appearance!=="force-dark"&&s(n).appearance!=="force-auto"?(o(),d("div",fi,[v(ve)])):g("",!0)}}),_i=x(vi,[["__scopeId","data-v-261b56e7"]]),_e=C();let Ie=!1,oe=0;function Si(e){const n=C(!1);if(ne){!Ie&&xi(),oe++;const t=V(_e,i=>{var a,r,l;i===e.el.value||(a=e.el.value)!=null&&a.contains(i)?(n.value=!0,(r=e.onFocus)==null||r.call(e)):(n.value=!1,(l=e.onBlur)==null||l.call(e))});he(()=>{t(),oe--,oe||bi()})}return Re(n)}function xi(){document.addEventListener("focusin",Fe),Ie=!0,_e.value=document.activeElement}function bi(){document.removeEventListener("focusin",Fe)}function Fe(){_e.value=document.activeElement}const yi={class:"VPMenuLink"},ki=["innerHTML"],Pi=f({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:n}=P();return(t,i)=>(o(),d("div",yi,[v(M,{class:A({active:s(U)(s(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,ki)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),te=x(Pi,[["__scopeId","data-v-d9f6f8d8"]]),Ti={class:"VPMenuGroup"},Ci={key:0,class:"title"},Bi=f({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(n,t)=>(o(),d("div",Ti,[e.text?(o(),d("p",Ci,L(e.text),1)):g("",!0),(o(!0),d(I,null,W(e.items,i=>(o(),d(I,null,["link"in i?(o(),_(te,{key:0,item:i},null,8,["item"])):g("",!0)],64))),256))]))}}),$i=x(Bi,[["__scopeId","data-v-d0b7712a"]]),Ai={class:"VPMenu"},wi={key:0,class:"items"},Li=f({__name:"VPMenu",props:{items:{}},setup(e){return(n,t)=>(o(),d("div",Ai,[e.items?(o(),d("div",wi,[(o(!0),d(I,null,W(e.items,i=>(o(),d(I,{key:JSON.stringify(i)},["link"in i?(o(),_(te,{key:0,item:i},null,8,["item"])):"component"in i?(o(),_(E(i.component),H({key:1,ref_for:!0},i.props),null,16)):(o(),_($i,{key:2,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):g("",!0),c(n.$slots,"default",{},void 0,!0)]))}}),Di=x(Li,[["__scopeId","data-v-4af58ee8"]]),Ii=["aria-expanded","aria-label"],Fi={key:0,class:"text"},Wi=["innerHTML"],zi={key:1,class:"vpi-more-horizontal icon"},Ei={class:"menu"},Mi=f({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const n=C(!1),t=C();Si({el:t,onBlur:i});function i(){n.value=!1}return(a,r)=>(o(),d("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=l=>n.value=!0),onMouseleave:r[2]||(r[2]=l=>n.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":e.label,onClick:r[0]||(r[0]=l=>n.value=!n.value)},[e.button||e.icon?(o(),d("span",Fi,[e.icon?(o(),d("span",{key:0,class:A([e.icon,"option-icon"])},null,2)):g("",!0),e.button?(o(),d("span",{key:1,innerHTML:e.button},null,8,Wi)):g("",!0),r[3]||(r[3]=h("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(o(),d("span",zi))],8,Ii),h("div",Ei,[v(Di,{items:e.items},{default:p(()=>[c(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Se=x(Mi,[["__scopeId","data-v-7089b29e"]]),Vi=["href","aria-label","innerHTML"],Ni=f({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const n=e,t=C();N(async()=>{var r;await Te();const a=(r=t.value)==null?void 0:r.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const i=b(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(a,r)=>(o(),d("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,Vi))}}),Ri=x(Ni,[["__scopeId","data-v-d78faa03"]]),Hi={class:"VPSocialLinks"},Oi=f({__name:"VPSocialLinks",props:{links:{}},setup(e){return(n,t)=>(o(),d("div",Hi,[(o(!0),d(I,null,W(e.links,({link:i,icon:a,ariaLabel:r})=>(o(),_(Ri,{key:i,icon:a,link:i,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),xe=x(Oi,[["__scopeId","data-v-f64d1f16"]]),Ui={key:0,class:"group translations"},qi={class:"trans-title"},ji={key:1,class:"group"},Gi={class:"item appearance"},Ki={class:"label"},Ji={class:"appearance-action"},Xi={key:2,class:"group"},Qi={class:"item social-links"},Yi=f({__name:"VPNavBarExtra",setup(e){const{site:n,theme:t}=P(),{localeLinks:i,currentLang:a}=G({correspondingLink:!0}),r=b(()=>i.value.length&&a.value.label||n.value.appearance||t.value.socialLinks);return(l,u)=>r.value?(o(),_(Se,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[s(i).length&&s(a).label?(o(),d("div",Ui,[h("p",qi,L(s(a).label),1),(o(!0),d(I,null,W(s(i),m=>(o(),_(te,{key:m.link,item:m},null,8,["item"]))),128))])):g("",!0),s(n).appearance&&s(n).appearance!=="force-dark"&&s(n).appearance!=="force-auto"?(o(),d("div",ji,[h("div",Gi,[h("p",Ki,L(s(t).darkModeSwitchLabel||"Appearance"),1),h("div",Ji,[v(ve)])])])):g("",!0),s(t).socialLinks?(o(),d("div",Xi,[h("div",Qi,[v(xe,{class:"social-links-list",links:s(t).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),Zi=x(Yi,[["__scopeId","data-v-7d847b2d"]]),ea=["aria-expanded"],na=f({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(n,t)=>(o(),d("button",{type:"button",class:A(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=i=>n.$emit("click"))},[...t[1]||(t[1]=[h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)])],10,ea))}}),ta=x(na,[["__scopeId","data-v-9c1fb896"]]),ia=["innerHTML"],aa=f({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:n}=P();return(t,i)=>(o(),_(M,{class:A({VPNavBarMenuLink:!0,active:s(U)(s(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,ia)]),_:1},8,["class","href","target","rel","no-icon"]))}}),oa=x(aa,[["__scopeId","data-v-541cdb06"]]),sa=f({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const n=e,{page:t}=P(),i=r=>"component"in r?!1:"link"in r?U(t.value.relativePath,r.link,!!n.item.activeMatch):r.items.some(i),a=b(()=>i(n.item));return(r,l)=>(o(),_(Se,{class:A({VPNavBarMenuGroup:!0,active:s(U)(s(t).relativePath,e.item.activeMatch,!!e.item.activeMatch)||a.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),ra={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},la=f({__name:"VPNavBarMenu",setup(e){const{theme:n}=P();return(t,i)=>s(n).nav?(o(),d("nav",ra,[i[0]||(i[0]=h("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(o(!0),d(I,null,W(s(n).nav,a=>(o(),d(I,{key:JSON.stringify(a)},["link"in a?(o(),_(oa,{key:0,item:a},null,8,["item"])):"component"in a?(o(),_(E(a.component),H({key:1,ref_for:!0},a.props),null,16)):(o(),_(sa,{key:2,item:a},null,8,["item"]))],64))),128))])):g("",!0)}}),ca=x(la,[["__scopeId","data-v-d2be0875"]]);function da(e){const{localeIndex:n,theme:t}=P();function i(a){var $,w,D;const r=a.split("."),l=($=t.value.search)==null?void 0:$.options,u=l&&typeof l=="object",m=u&&((D=(w=l.locales)==null?void 0:w[n.value])==null?void 0:D.translations)||null,y=u&&l.translations||null;let T=m,S=y,k=e;const B=r.pop();for(const F of r){let z=null;const j=k==null?void 0:k[F];j&&(z=k=j);const ie=S==null?void 0:S[F];ie&&(z=S=ie);const ae=T==null?void 0:T[F];ae&&(z=T=ae),j||(k=z),ie||(S=z),ae||(T=z)}return(T==null?void 0:T[B])??(S==null?void 0:S[B])??(k==null?void 0:k[B])??""}return i}const ua=["aria-label"],ma={class:"DocSearch-Button-Container"},ha={class:"DocSearch-Button-Placeholder"},be=f({__name:"VPNavBarSearchButton",setup(e){const t=da({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,a)=>(o(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":s(t)("button.buttonAriaLabel")},[h("span",ma,[a[0]||(a[0]=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),h("span",ha,L(s(t)("button.buttonText")),1)]),a[1]||(a[1]=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ua))}}),pa={class:"VPNavBarSearch"},ga={id:"local-search"},fa={key:1,id:"docsearch"},va=f({__name:"VPNavBarSearch",setup(e){const n=He(()=>Oe(()=>import("./VPLocalSearchBox.CwPRlxJk.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:i}=P(),a=C(!1),r=C(!1);N(()=>{});function l(){a.value||(a.value=!0,setTimeout(u,16))}function u(){const S=new Event("keydown");S.key="k",S.metaKey=!0,window.dispatchEvent(S),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function m(S){const k=S.target,B=k.tagName;return k.isContentEditable||B==="INPUT"||B==="SELECT"||B==="TEXTAREA"}const y=C(!1);re("k",S=>{(S.ctrlKey||S.metaKey)&&(S.preventDefault(),y.value=!0)}),re("/",S=>{m(S)||(S.preventDefault(),y.value=!0)});const T="local";return(S,k)=>{var B;return o(),d("div",pa,[s(T)==="local"?(o(),d(I,{key:0},[y.value?(o(),_(s(n),{key:0,onClose:k[0]||(k[0]=$=>y.value=!1)})):g("",!0),h("div",ga,[v(be,{onClick:k[1]||(k[1]=$=>y.value=!0)})])],64)):s(T)==="algolia"?(o(),d(I,{key:1},[a.value?(o(),_(s(t),{key:0,algolia:((B=s(i).search)==null?void 0:B.options)??s(i).algolia,onVnodeBeforeMount:k[2]||(k[2]=$=>r.value=!0)},null,8,["algolia"])):g("",!0),r.value?g("",!0):(o(),d("div",fa,[v(be,{onClick:l})]))],64)):g("",!0)])}}}),_a=f({__name:"VPNavBarSocialLinks",setup(e){const{theme:n}=P();return(t,i)=>s(n).socialLinks?(o(),_(xe,{key:0,class:"VPNavBarSocialLinks",links:s(n).socialLinks},null,8,["links"])):g("",!0)}}),Sa=x(_a,[["__scopeId","data-v-b023b5ce"]]),xa=["href","rel","target"],ba=["innerHTML"],ya={key:2},ka=f({__name:"VPNavBarTitle",setup(e){const{site:n,theme:t}=P(),{hasSidebar:i}=R(),{currentLang:a}=G(),r=b(()=>{var m;return typeof t.value.logoLink=="string"?t.value.logoLink:(m=t.value.logoLink)==null?void 0:m.link}),l=b(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.rel}),u=b(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.target});return(m,y)=>(o(),d("div",{class:A(["VPNavBarTitle",{"has-sidebar":s(i)}])},[h("a",{class:"title",href:r.value??s(ge)(s(a).link),rel:l.value,target:u.value},[c(m.$slots,"nav-bar-title-before",{},void 0,!0),s(t).logo?(o(),_(X,{key:0,class:"logo",image:s(t).logo},null,8,["image"])):g("",!0),s(t).siteTitle?(o(),d("span",{key:1,innerHTML:s(t).siteTitle},null,8,ba)):s(t).siteTitle===void 0?(o(),d("span",ya,L(s(n).title),1)):g("",!0),c(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,xa)],2))}}),Pa=x(ka,[["__scopeId","data-v-a37715e7"]]),Ta={class:"items"},Ca={class:"title"},Ba=f({__name:"VPNavBarTranslations",setup(e){const{theme:n}=P(),{localeLinks:t,currentLang:i}=G({correspondingLink:!0});return(a,r)=>s(t).length&&s(i).label?(o(),_(Se,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:s(n).langMenuLabel||"Change language"},{default:p(()=>[h("div",Ta,[h("p",Ca,L(s(i).label),1),(o(!0),d(I,null,W(s(t),l=>(o(),_(te,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),$a=x(Ba,[["__scopeId","data-v-43fe3aee"]]),Aa={class:"wrapper"},wa={class:"container"},La={class:"title"},Da={class:"content"},Ia={class:"content-body"},Fa=f({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const n=e,{y:t}=Ce(),{hasSidebar:i}=R(),{frontmatter:a}=P(),r=C({});return pe(()=>{r.value={"has-sidebar":i.value,home:a.value.layout==="home",top:t.value===0,"screen-open":n.isScreenOpen}}),(l,u)=>(o(),d("div",{class:A(["VPNavBar",r.value])},[h("div",Aa,[h("div",wa,[h("div",La,[v(Pa,null,{"nav-bar-title-before":p(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Da,[h("div",Ia,[c(l.$slots,"nav-bar-content-before",{},void 0,!0),v(va,{class:"search"}),v(ca,{class:"menu"}),v($a,{class:"translations"}),v(_i,{class:"appearance"}),v(Sa,{class:"social-links"}),v(Zi,{class:"extra"}),c(l.$slots,"nav-bar-content-after",{},void 0,!0),v(ta,{class:"hamburger",active:e.isScreenOpen,onClick:u[0]||(u[0]=m=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1))],2))}}),Wa=x(Fa,[["__scopeId","data-v-950e79a7"]]),za={key:0,class:"VPNavScreenAppearance"},Ea={class:"text"},Ma=f({__name:"VPNavScreenAppearance",setup(e){const{site:n,theme:t}=P();return(i,a)=>s(n).appearance&&s(n).appearance!=="force-dark"&&s(n).appearance!=="force-auto"?(o(),d("div",za,[h("p",Ea,L(s(t).darkModeSwitchLabel||"Appearance"),1),v(ve)])):g("",!0)}}),Va=x(Ma,[["__scopeId","data-v-55244ba5"]]),Na=["innerHTML"],Ra=f({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const n=ee("close-screen");return(t,i)=>(o(),_(M,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:s(n)},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,Na)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ha=x(Ra,[["__scopeId","data-v-eb2dcd0d"]]),Oa=["innerHTML"],Ua=f({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const n=ee("close-screen");return(t,i)=>(o(),_(M,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:s(n)},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,Oa)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),We=x(Ua,[["__scopeId","data-v-9212d37f"]]),qa={class:"VPNavScreenMenuGroupSection"},ja={key:0,class:"title"},Ga=f({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(n,t)=>(o(),d("div",qa,[e.text?(o(),d("p",ja,L(e.text),1)):g("",!0),(o(!0),d(I,null,W(e.items,i=>(o(),_(We,{key:i.text,item:i},null,8,["item"]))),128))]))}}),Ka=x(Ga,[["__scopeId","data-v-000b6633"]]),Ja=["aria-controls","aria-expanded"],Xa=["innerHTML"],Qa=["id"],Ya={key:0,class:"item"},Za={key:1,class:"item"},eo={key:2,class:"group"},no=f({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const n=e,t=C(!1),i=b(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function a(){t.value=!t.value}return(r,l)=>(o(),d("div",{class:A(["VPNavScreenMenuGroup",{open:t.value}])},[h("button",{class:"button","aria-controls":i.value,"aria-expanded":t.value,onClick:a},[h("span",{class:"button-text",innerHTML:e.text},null,8,Xa),l[0]||(l[0]=h("span",{class:"vpi-plus button-icon"},null,-1))],8,Ja),h("div",{id:i.value,class:"items"},[(o(!0),d(I,null,W(e.items,u=>(o(),d(I,{key:JSON.stringify(u)},["link"in u?(o(),d("div",Ya,[v(We,{item:u},null,8,["item"])])):"component"in u?(o(),d("div",Za,[(o(),_(E(u.component),H({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(o(),d("div",eo,[v(Ka,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Qa)],2))}}),to=x(no,[["__scopeId","data-v-3c657227"]]),io={key:0,class:"VPNavScreenMenu"},ao=f({__name:"VPNavScreenMenu",setup(e){const{theme:n}=P();return(t,i)=>s(n).nav?(o(),d("nav",io,[(o(!0),d(I,null,W(s(n).nav,a=>(o(),d(I,{key:JSON.stringify(a)},["link"in a?(o(),_(Ha,{key:0,item:a},null,8,["item"])):"component"in a?(o(),_(E(a.component),H({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(o(),_(to,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),oo=f({__name:"VPNavScreenSocialLinks",setup(e){const{theme:n}=P();return(t,i)=>s(n).socialLinks?(o(),_(xe,{key:0,class:"VPNavScreenSocialLinks",links:s(n).socialLinks},null,8,["links"])):g("",!0)}}),so={class:"list"},ro=f({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:n,currentLang:t}=G({correspondingLink:!0}),i=C(!1);function a(){i.value=!i.value}return(r,l)=>s(n).length&&s(t).label?(o(),d("div",{key:0,class:A(["VPNavScreenTranslations",{open:i.value}])},[h("button",{class:"title",onClick:a},[l[0]||(l[0]=h("span",{class:"vpi-languages icon lang"},null,-1)),O(" "+L(s(t).label)+" ",1),l[1]||(l[1]=h("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),h("ul",so,[(o(!0),d(I,null,W(s(n),u=>(o(),d("li",{key:u.link,class:"item"},[v(M,{class:"link",href:u.link},{default:p(()=>[O(L(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),lo=x(ro,[["__scopeId","data-v-9d770640"]]),co={class:"container"},uo=f({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const n=C(null),t=Be(ne?document.body:null);return(i,a)=>(o(),_(ue,{name:"fade",onEnter:a[0]||(a[0]=r=>t.value=!0),onAfterLeave:a[1]||(a[1]=r=>t.value=!1)},{default:p(()=>[e.open?(o(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[h("div",co,[c(i.$slots,"nav-screen-content-before",{},void 0,!0),v(ao,{class:"menu"}),v(lo,{class:"translations"}),v(Va,{class:"appearance"}),v(oo,{class:"social-links"}),c(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),mo=x(uo,[["__scopeId","data-v-69a7057b"]]),ho={key:0,class:"VPNav"},po=f({__name:"VPNav",setup(e){const{isScreenOpen:n,closeScreen:t,toggleScreen:i}=li(),{frontmatter:a}=P(),r=b(()=>a.value.navbar!==!1);return $e("close-screen",t),Q(()=>{ne&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(l,u)=>r.value?(o(),d("header",ho,[v(Wa,{"is-screen-open":s(n),onToggleScreen:s(i)},{"nav-bar-title-before":p(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[c(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[c(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),v(mo,{open:s(n)},{"nav-screen-content-before":p(()=>[c(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[c(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),go=x(po,[["__scopeId","data-v-9d47990a"]]),fo=["role","tabindex"],vo={key:1,class:"items"},_o=f({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const n=e,{collapsed:t,collapsible:i,isLink:a,isActiveLink:r,hasActiveLink:l,hasChildren:u,toggle:m}=mn(b(()=>n.item)),y=b(()=>u.value?"section":"div"),T=b(()=>a.value?"a":"div"),S=b(()=>u.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),k=b(()=>a.value?void 0:"button"),B=b(()=>[[`level-${n.depth}`],{collapsible:i.value},{collapsed:t.value},{"is-link":a.value},{"is-active":r.value},{"has-active":l.value}]);function $(D){"key"in D&&D.key!=="Enter"||!n.item.link&&m()}function w(){n.item.link&&m()}return(D,F)=>{const z=q("VPSidebarItem",!0);return o(),_(E(y.value),{class:A(["VPSidebarItem",B.value])},{default:p(()=>[e.item.text?(o(),d("div",H({key:0,class:"item",role:k.value},Ue(e.item.items?{click:$,keydown:$}:{},!0),{tabindex:e.item.items&&0}),[F[1]||(F[1]=h("div",{class:"indicator"},null,-1)),e.item.link?(o(),_(M,{key:0,tag:T.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:p(()=>[(o(),_(E(S.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(o(),_(E(S.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(o(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:w,onKeydown:qe(w,["enter"]),tabindex:"0"},[...F[0]||(F[0]=[h("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,fo)):g("",!0),e.item.items&&e.item.items.length?(o(),d("div",vo,[e.depth<5?(o(!0),d(I,{key:0},W(e.item.items,j=>(o(),_(z,{key:j.text,item:j,depth:e.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),So=x(_o,[["__scopeId","data-v-f71e737d"]]),xo=f({__name:"VPSidebarGroup",props:{items:{}},setup(e){const n=C(!0);let t=null;return N(()=>{t=setTimeout(()=>{t=null,n.value=!1},300)}),Ae(()=>{t!=null&&(clearTimeout(t),t=null)}),(i,a)=>(o(!0),d(I,null,W(e.items,r=>(o(),d("div",{key:r.text,class:A(["group",{"no-transition":n.value}])},[v(So,{item:r,depth:0},null,8,["item"])],2))),128))}}),bo=x(xo,[["__scopeId","data-v-8bf7a0e4"]]),yo={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ko=f({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:n,hasSidebar:t}=R(),i=e,a=C(null),r=Be(ne?document.body:null);V([i,a],()=>{var u;i.open?(r.value=!0,(u=a.value)==null||u.focus()):r.value=!1},{immediate:!0,flush:"post"});const l=C(0);return V(n,()=>{l.value+=1},{deep:!0}),(u,m)=>s(t)?(o(),d("aside",{key:0,class:A(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:a,onClick:m[0]||(m[0]=je(()=>{},["stop"]))},[m[2]||(m[2]=h("div",{class:"curtain"},null,-1)),h("nav",yo,[m[1]||(m[1]=h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),c(u.$slots,"sidebar-nav-before",{},void 0,!0),(o(),_(bo,{items:s(n),key:l.value},null,8,["items"])),c(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Po=x(ko,[["__scopeId","data-v-9c98d9ed"]]),To=f({__name:"VPSkipLink",setup(e){const{theme:n}=P(),t=Z(),i=C();V(()=>t.path,()=>i.value.focus());function a({target:r}){const l=document.getElementById(decodeURIComponent(r.hash).slice(1));if(l){const u=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",u)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",u),l.focus(),window.scrollTo(0,0)}}return(r,l)=>(o(),d(I,null,[h("span",{ref_key:"backToTop",ref:i,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},L(s(n).skipToContentLabel||"Skip to content"),1)],64))}}),Co=x(To,[["__scopeId","data-v-7860fec0"]]),Bo=f({__name:"Layout",setup(e){const{isOpen:n,open:t,close:i}=R(),a=Z();V(()=>a.path,i),un(n,i);const{frontmatter:r}=P(),l=Ge(),u=b(()=>!!l["home-hero-image"]);return $e("hero-image-slot-exists",u),(m,y)=>{const T=q("Content");return s(r).layout!==!1?(o(),d("div",{key:0,class:A(["Layout",s(r).pageClass])},[c(m.$slots,"layout-top",{},void 0,!0),v(Co),v(Qe,{class:"backdrop",show:s(n),onClick:s(i)},null,8,["show","onClick"]),v(go,null,{"nav-bar-title-before":p(()=>[c(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[c(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[c(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[c(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[c(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),v(ri,{open:s(n),onOpenMenu:s(t)},null,8,["open","onOpenMenu"]),v(Po,{open:s(n)},{"sidebar-nav-before":p(()=>[c(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[c(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),v(qt,null,{"page-top":p(()=>[c(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[c(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[c(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[c(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[c(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[c(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[c(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[c(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[c(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[c(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[c(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[c(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[c(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[c(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[c(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[c(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),v(Xt),c(m.$slots,"layout-bottom",{},void 0,!0)],2)):(o(),_(T,{key:1}))}}}),$o=x(Bo,[["__scopeId","data-v-427ea057"]]),Ao={Layout:$o,enhanceApp:({app:e})=>{e.component("Badge",Ke)}},wo=`void main() {
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
`,Lo=`int add(int a, [int b = 0]) => a + b;

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
`,Do=`class Animal {
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
`,Io=`Future<String> fetchUser() async {
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
`,Fo=`import 'package:flutter/material.dart';

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
`,Wo=`import 'package:flutter/material.dart';

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
`,zo=`import 'package:flutter/material.dart';

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
`,Eo=`import 'package:flutter/material.dart';

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
`,Mo=`import 'package:flutter/material.dart';

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
`,Vo=`import 'package:flutter/material.dart';

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
`,No=`import 'package:flutter/material.dart';

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
`,Ro=`import 'package:flutter/material.dart';

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
`,Ho=`import 'package:flutter/material.dart';

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
`,Oo=`import 'package:flutter/material.dart';

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
`,Uo=`import 'package:flutter/material.dart';

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
`,qo=`import 'package:flutter/material.dart';

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
`,jo=`import 'dart:async';
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
`,Go=`import 'package:flutter/material.dart';

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
`,Ko=`import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

// 性能诊断方法论：用 FrameTiming 采集逐帧耗时，算 P50 / P90 / jank 率
// 打开后滑动下方示例内容，观察分位数与超支帧比例

void main() => runApp(const MaterialApp(home: _BudgetPage()));

class _BudgetPage extends StatefulWidget {
  const _BudgetPage();

  @override
  State<_BudgetPage> createState() => _BudgetPageState();
}

class _BudgetPageState extends State<_BudgetPage> {
  static const double _budgetMs = 16.7; // 60Hz 单帧预算
  final List<double> _spans = <double>[];

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addTimingsCallback(_onTimings);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeTimingsCallback(_onTimings);
    super.dispose();
  }

  void _onTimings(List<FrameTiming> timings) {
    if (!mounted) return;
    setState(() {
      for (final t in timings) {
        _spans.add(t.totalSpan.inMicroseconds / 1000.0);
      }
      if (_spans.length > 120) _spans.removeRange(0, _spans.length - 120);
    });
  }

  double _percentile(double p) {
    if (_spans.isEmpty) return 0;
    final List<double> sorted = List<double>.of(_spans)..sort();
    final index = ((sorted.length - 1) * p).round();
    return sorted[index];
  }

  int get _jankCount => _spans.where((s) => s > _budgetMs).length;

  @override
  Widget build(BuildContext context) {
    final double p50 = _percentile(0.5);
    final double p90 = _percentile(0.9);
    final double jankRate =
        _spans.isEmpty ? 0 : _jankCount / _spans.length * 100;
    return ListView(
      padding: const EdgeInsets.all(16),
      children: <Widget>[
        Text(
          '采样帧数 \${_spans.length}｜预算 \${_budgetMs}ms',
          style: Theme.of(context).textTheme.titleSmall,
        ),
        const SizedBox(height: 8),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                _Stat(label: 'P50', value: '\${p50.toStringAsFixed(1)}ms'),
                _Stat(label: 'P90', value: '\${p90.toStringAsFixed(1)}ms'),
                _Stat(
                  label: 'jank',
                  value: '\${jankRate.toStringAsFixed(1)}%',
                  warn: jankRate > 1,
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          '每根柱子是一帧的实际耗时（红色 = 超预算）',
          style: Theme.of(context).textTheme.bodySmall,
        ),
        const SizedBox(height: 8),
        SizedBox(
          height: 90,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: _spans.length,
            itemBuilder: (ctx, i) {
              final double s = _spans[i];
              final bool over = s > _budgetMs;
              return Padding(
                padding: const EdgeInsets.only(right: 3),
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    width: 6,
                    height: (s / 40 * 80).clamp(6, 80),
                    color: over ? Colors.red : Colors.green,
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 16),
        Text(
          '接下来：故意制造 10 万次循环，观察 P90 与 jank 率的变化——'
          '这就是「用数据把卡翻译成指标」。',
          style: Theme.of(context).textTheme.bodySmall,
        ),
        const SizedBox(height: 8),
        for (int i = 0; i < 30; i++)
          ListTile(
            dense: true,
            title: Text('普通列表项 #$i'),
            subtitle: const Text('用于产生稳定的可测帧'),
          ),
      ],
    );
  }
}

class _Stat extends StatelessWidget {
  const _Stat({required this.label, required this.value, this.warn = false});

  final String label;
  final String value;
  final bool warn;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text(label, style: Theme.of(context).textTheme.bodySmall),
        const SizedBox(height: 4),
        Text(
          value,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                color: warn ? Colors.red : null,
              ),
        ),
      ],
    );
  }
}
`,Jo=`import 'package:flutter/material.dart';
// 逐帧耗时：蓝 = UI 线程，橙 = Raster 线程，红线 = 单帧预算；可切 60/120Hz 与隔离对比
void main() => runApp(const MaterialApp(home: _FrameBudgetPage()));

class _FrameBudgetPage extends StatefulWidget {
  const _FrameBudgetPage();
  @override
  State<_FrameBudgetPage> createState() => _FrameBudgetPageState();
}

class _FrameBudgetPageState extends State<_FrameBudgetPage> {
  // 每帧 = [UI 耗时, Raster 耗时]，ms。真实数据从 Timeline 抄下来
  static const List<List<double>> _plain = <List<double>>[
    <double>[7.2, 9.4], <double>[6.8, 10.1], <double>[9.4, 12.8], <double>[8.1, 8.9],
    <double>[7.6, 10.2], <double>[10.2, 11.5], <double>[6.5, 7.8], <double>[8.9, 12.3],
    <double>[7.1, 9.0], <double>[9.8, 10.9], <double>[6.9, 8.4], <double>[8.4, 11.1],
  ];
  // 同一页面给动画子树加 RepaintBoundary 后：Raster 只剩 3~5ms
  static const List<List<double>> _isolated = <List<double>>[
    <double>[7.0, 3.4], <double>[6.7, 4.1], <double>[9.1, 4.8], <double>[8.0, 3.2],
    <double>[7.4, 4.3], <double>[10.0, 5.1], <double>[6.4, 3.0], <double>[8.8, 4.6],
    <double>[7.0, 3.5], <double>[9.6, 4.9], <double>[6.8, 3.1], <double>[8.3, 4.4],
  ];

  bool _useBoundary = false;
  double _budget = 16.7;

  @override
  Widget build(BuildContext context) {
    final frames = _useBoundary ? _isolated : _plain;
    final over = frames.where((f) => f[0] + f[1] > _budget).length;
    return Scaffold(
      appBar: AppBar(title: const Text('一帧花在哪')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            const Text('每根柱子是一帧：蓝色是 UI 线程，橙色是 Raster 线程，'
                '红线是单帧预算。超线的帧就是「卡了一下」。'),
            const SizedBox(height: 12),
            SegmentedButton<double>(
              segments: const <ButtonSegment<double>>[
                ButtonSegment<double>(value: 16.7, label: Text('60Hz 16.7ms')),
                ButtonSegment<double>(value: 8.3, label: Text('120Hz 8.3ms')),
              ],
              selected: <double>{_budget},
              onSelectionChanged: (s) => setState(() => _budget = s.first),
            ),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              title: const Text('给动画子树加 RepaintBoundary'),
              subtitle: const Text('静态部分不再每帧重绘，看橙色柱子变矮'),
              value: _useBoundary,
              onChanged: (v) => setState(() => _useBoundary = v),
            ),
            Text('超预算帧：$over / \${frames.length}',
                style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            // 柱状图：每根柱子 = 一帧，高度按 ms 线性映射
            SizedBox(
              height: 120,
              child: Stack(
                children: <Widget>[
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: <Widget>[
                      for (final f in frames)
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 2),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: <Widget>[
                              Container(height: f[0] * 4.5, width: 14, color: Colors.blue),
                              Container(height: f[1] * 4.5, width: 14, color: Colors.orange),
                            ],
                          ),
                        ),
                    ],
                  ),
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: _budget * 4.5,
                    child: Container(height: 1.5, color: Colors.red),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            Text(_useBoundary
                ? '隔离后 Raster 从 8~12ms 降到 3~5ms，这才是能拿去做决策的数据。'
                : '未隔离时整屏每帧重绘，Raster 长期 8~12ms，高刷设备几乎每帧都掉。'),
          ],
        ),
      ),
    );
  }
}
`,Xo=`import 'dart:async';

import 'package:flutter/material.dart';

// 内存治理两件事：资源在 dispose 里释放；缓存必须设上限并淘汰
void main() => runApp(const MaterialApp(home: _MemoryPage()));

class _MemoryPage extends StatefulWidget {
  const _MemoryPage();
  @override
  State<_MemoryPage> createState() => _MemoryPageState();
}

class _MemoryPageState extends State<_MemoryPage> {
  final List<TextEditingController> _texts = <TextEditingController>[];
  final List<StreamController<int>> _streams = <StreamController<int>>[];
  final List<StreamSubscription<int>> _subs = <StreamSubscription<int>>[];

  static const int _cacheLimit = 3;
  final List<String> _cache = <String>[];
  int _seq = 0;

  void _create() {
    setState(() {
      for (var i = 0; i < 3; i++) {
        final id = _seq++;
        _texts.add(TextEditingController(text: '输入框 $id'));
        final c = StreamController<int>.broadcast();
        _streams.add(c);
        // 忘记 cancel 的订阅：页面销毁后流仍握着回调与闭包
        _subs.add(c.stream.listen((_) {}));
      }
    });
  }

  // 释放顺序：先断订阅，再关流，最后释放控制器
  void _disposeResources() {
    for (final s in _subs) {
      s.cancel();
    }
    for (final c in _streams) {
      c.close();
    }
    for (final t in _texts) {
      t.dispose();
    }
    _subs.clear();
    _streams.clear();
    _texts.clear();
  }

  void _addCache() {
    setState(() {
      _cache.add('img_\${_seq++}.jpg');
      // 超上限就淘汰最早的一条（LRU 的最简版）
      if (_cache.length > _cacheLimit) _cache.removeAt(0);
    });
  }

  @override
  void dispose() {
    _disposeResources();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: const Text('内存治理')),
        body: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text('未释放资源：\${_texts.length} 个控制器 / \${_subs.length} 个订阅',
                  style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 8),
              Wrap(spacing: 8, children: <Widget>[
                FilledButton(onPressed: _create, child: const Text('创建资源')),
                OutlinedButton(
                  onPressed: () => setState(_disposeResources),
                  child: const Text('dispose 释放'),
                ),
              ]),
              const Divider(height: 32),
              Text('缓存（上限 $_cacheLimit 条）：\${_cache.length}',
                  style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 8),
              Wrap(spacing: 8, children: <Widget>[
                for (final key in _cache) Chip(label: Text(key)),
              ]),
              const SizedBox(height: 8),
              OutlinedButton(onPressed: _addCache, child: const Text('写入一条缓存')),
              const Spacer(),
              const Text('要点：资源在 dispose 里释放；缓存要有上限与淘汰策略。'),
            ],
          ),
        ),
      );
}
`,Qo=`import 'package:flutter/material.dart';

// 延迟初始化：先出骨架屏（首帧），再把重活挪到首帧之后
void main() => runApp(const MaterialApp(home: _StartupPage()));

class _StartupPage extends StatefulWidget {
  const _StartupPage();
  @override
  State<_StartupPage> createState() => _StartupPageState();
}

class _StartupPageState extends State<_StartupPage> {
  bool _deferred = true;
  bool _loading = true;
  String _status = '准备启动';
  int _run = 0;

  @override
  void initState() {
    super.initState();
    // 首帧提交后才开始初始化，避免在 initState 里同步做重活
    WidgetsBinding.instance.addPostFrameCallback((_) => _begin());
  }

  void _begin() {
    final run = ++_run; // 每次重跑加序号，过期的回调直接丢弃
    setState(() {
      _loading = true;
      _status = _deferred ? '首帧已上屏，后台开始预热' : 'main() 里同步预热（首帧被推迟）';
    });
    Future<void>.delayed(Duration(milliseconds: _deferred ? 700 : 1400), () {
      if (!mounted || run != _run) return;
      setState(() {
        _loading = false;
        _status = _deferred ? '首帧 320ms 出骨架，数据随后补全' : '白屏 1.4s 后才出首帧';
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Scaffold(
      appBar: AppBar(title: const Text('启动与延迟初始化')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SegmentedButton<bool>(
              segments: const <ButtonSegment<bool>>[
                ButtonSegment<bool>(value: true, label: Text('首帧后预热')),
                ButtonSegment<bool>(value: false, label: Text('main() 阻塞')),
              ],
              selected: <bool>{_deferred},
              onSelectionChanged: (s) {
                setState(() => _deferred = s.first);
                _begin();
              },
            ),
            const SizedBox(height: 8),
            SizedBox(height: 170, child: _loading ? _skeleton(scheme) : _content(context)),
            const SizedBox(height: 8),
            Text(_status, style: TextStyle(color: scheme.primary)),
            OutlinedButton(onPressed: _begin, child: const Text('重新模拟一次启动')),
            const Spacer(),
            const Text('真实项目：runApp 之前不要 await 网络/数据库；骨架屏与首屏结构保持一致。'),
          ],
        ),
      ),
    );
  }

  // 骨架屏：首帧就能画出来的轻量占位
  Widget _skeleton(ColorScheme scheme) => Column(
        children: <Widget>[
          for (var i = 0; i < 3; i++)
            Container(
              height: 32,
              margin: const EdgeInsets.only(bottom: 10),
              decoration: BoxDecoration(
                color: scheme.surfaceContainerHighest,
                borderRadius: BorderRadius.circular(8),
              ),
            ),
          const Text('骨架屏（首帧内容）'),
        ],
      );

  Widget _content(BuildContext context) => Center(
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Text('首屏真实数据已就绪',
                style: Theme.of(context).textTheme.titleMedium),
          ),
        ),
      );
}
`,Yo=`import 'package:flutter/material.dart';

// 包体积优化演示：用开关模拟常见裁剪手段，观察估算体积的变化。
// 数值为示意比例，真实数据以 --analyze-size 报告为准。
void main() => runApp(const MaterialApp(home: _AppSizeDemo()));

class _AppSizeDemo extends StatefulWidget {
  const _AppSizeDemo();

  @override
  State<_AppSizeDemo> createState() => _AppSizeDemoState();
}

class _AppSizeDemoState extends State<_AppSizeDemo> {
  bool _splitAbi = true;
  bool _treeShakeIcons = true;
  bool _subsetFonts = true;

  // 未优化时的构成约 42.6MB
  double get _size {
    var total = 10.0; // libflutter.so（引擎，基本不可裁剪）
    total += 5.0; // libapp.so（AOT 快照）
    total += _splitAbi ? 4.0 : 12.0; // 原生库：单 ABI vs 三 ABI
    total += _treeShakeIcons ? 0.05 : 1.6; // MaterialIcons 字体
    total += _subsetFonts ? 0.8 : 8.0; // 业务字体
    total += 6.0; // assets 图片等
    return total;
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final size = _size;
    const baseline = 42.6;

    return Scaffold(
      appBar: AppBar(title: const Text('包体积优化')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            '当前估算 \${size.toStringAsFixed(1)} MB / 基线 42.6 MB',
            style: Theme.of(context).textTheme.titleMedium,
          ),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: LinearProgressIndicator(
              value: size / baseline,
              minHeight: 18,
              backgroundColor: scheme.surfaceContainerHighest,
            ),
          ),
          const SizedBox(height: 16),
          SwitchListTile(
            value: _splitAbi,
            title: const Text('按 ABI 拆分（--split-per-abi）'),
            subtitle: const Text('原生库从三套变一套'),
            onChanged: (v) => setState(() => _splitAbi = v),
          ),
          SwitchListTile(
            value: _treeShakeIcons,
            title: const Text('图标 tree shaking'),
            subtitle: const Text('只保留用到的 MaterialIcons 字形'),
            onChanged: (v) => setState(() => _treeShakeIcons = v),
          ),
          SwitchListTile(
            value: _subsetFonts,
            title: const Text('字体子集化'),
            subtitle: const Text('中文字体只打包用到的字符'),
            onChanged: (v) => setState(() => _subsetFonts = v),
          ),
          const SizedBox(height: 8),
          Text(
            '提示：逐个关闭开关，体积会回涨，差值就是该手段的收益。',
            style: TextStyle(color: scheme.onSurfaceVariant),
          ),
        ],
      ),
    );
  }
}
`,Zo=`import 'dart:async';

import 'package:flutter/material.dart';

// 列表滚动性能演示：
// ① itemExtent 省去逐项测量 ② addRepaintBoundaries 控制每项图层
// 顶部计数展示滚动过程中 itemBuilder 被调用的次数。
void main() => runApp(const MaterialApp(home: _ScrollDemo()));

class _ScrollDemo extends StatefulWidget {
  const _ScrollDemo();

  @override
  State<_ScrollDemo> createState() => _ScrollDemoState();
}

class _ScrollDemoState extends State<_ScrollDemo> {
  static const int _itemCount = 400;
  bool _useItemExtent = true;
  bool _repaintBoundaries = true;
  int _built = 0;
  final ValueNotifier<int> _counter = ValueNotifier<int>(0);
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    // 每 500ms 刷新计数，避免在 itemBuilder 里直接 setState
    _timer = Timer.periodic(const Duration(milliseconds: 500), (_) {
      _counter.value = _built;
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _counter.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('列表滚动性能')),
      body: Column(
        children: [
          SwitchListTile(
            value: _useItemExtent,
            title: const Text('itemExtent = 64（固定行高）'),
            onChanged: (v) => setState(() => _useItemExtent = v),
          ),
          SwitchListTile(
            value: _repaintBoundaries,
            title: const Text('addRepaintBoundaries'),
            onChanged: (v) => setState(() => _repaintBoundaries = v),
          ),
          ValueListenableBuilder<int>(
            valueListenable: _counter,
            builder: (context, built, _) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              child: Text('itemBuilder 已调用 $built 次，滚动试试'),
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _itemCount,
              itemExtent: _useItemExtent ? 64 : null,
              addRepaintBoundaries: _repaintBoundaries,
              itemBuilder: (context, index) {
                _built++;
                return _Row(index: index);
              },
            ),
          ),
        ],
      ),
    );
  }
}

class _Row extends StatelessWidget {
  const _Row({required this.index});

  final int index;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: [
          CircleAvatar(child: Text('\${index % 100}')),
          const SizedBox(width: 12),
          Expanded(child: Text('列表项 #$index')),
        ],
      ),
    );
  }
}
`,es=`import 'dart:ui' show FrameTiming;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

// 帧耗时采样：用 addTimingsCallback 采集 60 帧，输出 build / raster 的均值与 P90。
void main() => runApp(const MaterialApp(home: _FrameDemo()));

class _FrameDemo extends StatefulWidget {
  const _FrameDemo();
  @override
  State<_FrameDemo> createState() => _FrameDemoState();
}

class _FrameDemoState extends State<_FrameDemo>
    with SingleTickerProviderStateMixin {
  static const int _target = 60;
  late final AnimationController _controller;
  final List<FrameTiming> _samples = <FrameTiming>[];
  void Function(List<FrameTiming>)? _callback;
  bool _sampling = false;
  String _stats = '点击按钮，动画约 1 秒后统计 60 帧';

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
        vsync: this, duration: const Duration(seconds: 2));
  }

  @override
  void dispose() {
    if (_callback != null) SchedulerBinding.instance.removeTimingsCallback(_callback!);
    _controller.dispose();
    super.dispose();
  }

  void _start() {
    _samples.clear();
    setState(() { _sampling = true; _stats = '采集中…'; });
    _callback = _onTimings;
    SchedulerBinding.instance.addTimingsCallback(_callback!);
    // forward 只跑 2 秒，采样必定有限；平台无回调时也会自然结束
    _controller.forward(from: 0).whenComplete(_finish);
  }

  void _onTimings(List<FrameTiming> timings) {
    _samples.addAll(timings);
    if (_samples.length >= _target) _finish();
  }

  void _finish() {
    if (!_sampling || !mounted) return;
    _controller.stop();
    if (_callback != null) SchedulerBinding.instance.removeTimingsCallback(_callback!);
    _callback = null;
    if (_samples.length > _target) _samples.length = _target;
    if (_samples.isEmpty) {
      setState(() { _sampling = false; _stats = '未收到帧回调，请在真机上运行'; });
      return;
    }
    final build = _stat((t) => t.buildDuration);
    final raster = _stat((t) => t.rasterDuration);
    final text = '样本 \${_samples.length} 帧\\n'
        'build 平均 \${build.$1.toStringAsFixed(1)}ms / P90 \${build.$2.toStringAsFixed(1)}ms\\n'
        'raster 平均 \${raster.$1.toStringAsFixed(1)}ms / P90 \${raster.$2.toStringAsFixed(1)}ms';
    debugPrint(text);
    setState(() { _sampling = false; _stats = text; });
  }

  (double, double) _stat(Duration Function(FrameTiming) get) {
    final v = <double>[
      for (final t in _samples) get(t).inMicroseconds / 1000,
    ]..sort();
    final avg = v.reduce((a, b) => a + b) / v.length;
    return (avg, v[(v.length * 0.9).floor()]);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          LinearProgressIndicator(value: _sampling ? null : _controller.value),
          const SizedBox(height: 24),
          FilledButton(
            onPressed: _sampling ? null : _start,
            child: Text(_sampling ? '采集中…' : '开始采样 60 帧'),
          ),
          const SizedBox(height: 12),
          Text(_stats),
        ],
      ),
    );
  }
}
`,ns=`import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

// 同一动画的两种画法：左=每帧重跑全部绘制指令；右=内容只录制成 ui.Picture
// Impeller 预编译着色器消除 shader jank；业务侧减少每帧指令同样重要

void main() => runApp(const MaterialApp(home: _CacheDemo()));

class _CacheDemo extends StatefulWidget {
  const _CacheDemo();
  @override
  State<_CacheDemo> createState() => _CacheDemoState();
}

class _CacheDemoState extends State<_CacheDemo>
    with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 4))
      ..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Widget _panel(String title, String sub, bool cache) => Expanded(
        child: Column(
          children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
            Text(sub, style: const TextStyle(fontSize: 11)),
            Expanded(
              child: RepaintBoundary(
                child: CustomPaint(
                    painter: _PatternPainter(_ctrl, cache: cache),
                    size: Size.infinite),
              ),
            ),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) => Scaffold(
        body: Column(
          children: [
            Expanded(
              child: Row(
                children: [
                  _panel('直接绘制', '60 × drawCircle / 帧', false),
                  _panel('缓存 Picture', '1 × drawPicture / 帧', true),
                ],
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                '两边图案完全一样，区别只在每帧提交的指令数量。'
                '这里演示业务侧的离屏缓存，和引擎的预编译管线是两回事。',
                style: TextStyle(fontSize: 12),
              ),
            ),
          ],
        ),
      );
}
class _PatternPainter extends CustomPainter {
  _PatternPainter(this.anim, {required this.cache}) : super(repaint: anim) {
    if (cache) {
      final recorder = ui.PictureRecorder();
      _draw(Canvas(recorder), Offset.zero, 0); // 只录制这一次
      _picture = recorder.endRecording();
    }
  }
  final Animation<double> anim;
  final bool cache;
  ui.Picture? _picture;
  void _draw(Canvas canvas, Offset center, double rotation) {
    final paint = Paint()..color = const Color(0xFF2563EB);
    for (var i = 0; i < 60; i++) {
      final angle = rotation + i / 60 * math.pi * 2;
      final radius = 12.0 + (i % 6) * 7;
      final point = center +
          Offset(math.cos(angle) * radius, math.sin(angle) * radius);
      canvas.drawCircle(point, 5, paint); // 每帧真实执行 60 次
    }
  }
  @override
  void paint(Canvas canvas, Size size) {
    final rotation = anim.value * math.pi * 2;
    if (cache) {
      canvas.save();
      canvas.translate(size.width / 2, size.height / 2);
      canvas.rotate(rotation);
      canvas.drawPicture(_picture!); // 每帧只有 1 次绘制调用
      canvas.restore();
    } else {
      _draw(canvas, size.center(Offset.zero), rotation);
    }
  }
  @override
  bool shouldRepaint(covariant _PatternPainter oldDelegate) => false;
}
`,ts=`import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

// 自定义 RenderBox：重写 performLayout，把子节点按「最矮列」贪心摆放
void main() => runApp(const MaterialApp(home: _WaterfallDemo()));

class _WaterfallDemo extends StatefulWidget {
  const _WaterfallDemo();
  @override
  State<_WaterfallDemo> createState() => _WaterfallDemoState();
}

class _WaterfallDemoState extends State<_WaterfallDemo> {
  int _columns = 3;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Slider(
            value: _columns.toDouble(), min: 2, max: 4, divisions: 2,
            label: '列数 $_columns',
            onChanged: (v) => setState(() => _columns = v.round()),
          ),
          Expanded(
            child: _Waterfall(
              columns: _columns,
              children: [
                for (var i = 0; i < 12; i++)
                  Container(
                    height: 40 + (i % 4) * 24,
                    margin: const EdgeInsets.all(4),
                    color: Colors.primaries[i % Colors.primaries.length].shade200,
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _Waterfall extends MultiChildRenderObjectWidget {
  _Waterfall({required this.columns, required super.children});
  final int columns;

  @override
  RenderObject createRenderObject(BuildContext context) =>
      _RenderWaterfall(columns);

  @override
  void updateRenderObject(BuildContext context, _RenderWaterfall renderObject) {
    renderObject.columns = columns;
  }
}

class _TileParentData extends ContainerBoxParentData<RenderBox> {}

class _RenderWaterfall extends RenderBox
    with
        ContainerRenderObjectMixin<RenderBox, _TileParentData>,
        RenderBoxContainerDefaultsMixin<RenderBox, _TileParentData> {
  _RenderWaterfall(this._columns);
  int _columns;
  set columns(int value) {
    if (value == _columns) return;
    _columns = value;
    markNeedsLayout(); // 布局参数变了，必须重新布局
  }

  @override
  void setupParentData(RenderObject child) {
    if (child.parentData is! _TileParentData) {
      child.parentData = _TileParentData();
    }
  }

  @override
  void performLayout() {
    final columnWidth = constraints.maxWidth / _columns;
    final heights = List<double>.filled(_columns, 0);
    RenderBox? child = firstChild;
    while (child != null) {
      // parentUsesSize: true 表示父级会读取 child.size
      child.layout(
        BoxConstraints.tightFor(width: columnWidth),
        parentUsesSize: true,
      );
      final column = heights.indexOf(heights.reduce(math.min));
      (child.parentData! as _TileParentData).offset =
          Offset(column * columnWidth, heights[column]);
      heights[column] += child.size.height;
      child = childAfter(child);
    }
    size = constraints.constrain(
      Size(constraints.maxWidth, heights.reduce(math.max)),
    );
  }

  @override
  void paint(PaintingContext context, Offset offset) =>
      defaultPaint(context, offset);

  @override
  bool hitTestChildren(BoxHitTestResult result, {required Offset position}) =>
      defaultHitTestChildren(result, position: position);
}
`,is=`import 'dart:math' as math;

import 'package:flutter/material.dart';

// Path.combine 把两个路径做布尔运算：并 / 交 / 差 / 异或。
// 小圆绕中心旋转，四种运算的结果完全不同。

void main() => runApp(const MaterialApp(home: _PathOpsDemo()));

class _PathOpsDemo extends StatefulWidget {
  const _PathOpsDemo();
  @override
  State<_PathOpsDemo> createState() => _PathOpsDemoState();
}

class _PathOpsDemoState extends State<_PathOpsDemo>
    with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 6),
    )..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Widget _cell(String label, PathOperation op) {
    return Column(
      children: [
        Text(label, style: const TextStyle(fontWeight: FontWeight.bold)),
        Expanded(
          child: ClipRect(
            child: CustomPaint(
              painter: _CombinePainter(op, _ctrl),
              size: Size.infinite,
            ),
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Path 布尔运算')),
      body: GridView.count(
        crossAxisCount: 2,
        padding: const EdgeInsets.all(8),
        children: [
          _cell('并集 union', PathOperation.union),
          _cell('交集 intersect', PathOperation.intersect),
          _cell('差集 difference', PathOperation.difference),
          _cell('异或 xor', PathOperation.xor),
        ],
      ),
    );
  }
}

class _CombinePainter extends CustomPainter {
  _CombinePainter(this.op, this.anim) : super(repaint: anim);
  final PathOperation op;
  final Animation<double> anim;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.clipRect(Offset.zero & size); // 防止画到相邻格子
    final center = size.center(Offset.zero);
    final base = Path()
      ..addRRect(RRect.fromRectAndRadius(
        Rect.fromCenter(
          center: center,
          width: size.width * .7,
          height: size.height * .7,
        ),
        const Radius.circular(20),
      ));
    final angle = anim.value * math.pi * 2;
    final circleCenter = center +
        Offset(math.cos(angle) * size.width * .18,
            math.sin(angle) * size.height * .18);
    final circle = Path()
      ..addOval(Rect.fromCircle(
        center: circleCenter,
        radius: size.shortestSide * .22,
      ));
    final result = Path.combine(op, base, circle);
    canvas.drawPath(result, Paint()..color = const Color(0xFF4F46E5));
  }

  @override
  bool shouldRepaint(covariant _CombinePainter oldDelegate) =>
      oldDelegate.op != op;
}
`,as=`import 'dart:math' as math;
import 'dart:ui' as ui;
import 'package:flutter/material.dart';

// 用 Canvas 动画模拟 Fragment Shader 的视觉效果。
// 真实 shader 由 GPU 对每个像素执行一次 main()，这里用圆环 + 噪声粒子近似，
// 先建立「uniform 输入 → 逐像素计算 → 输出颜色」的直觉。

void main() => runApp(const _ShaderDemo());

class _ShaderDemo extends StatefulWidget {
  const _ShaderDemo();

  @override
  State<_ShaderDemo> createState() => _ShaderDemoState();
}

class _ShaderDemoState extends State<_ShaderDemo>
    with SingleTickerProviderStateMixin {
  // 相当于 shader 里的 uTime：每帧递增，驱动所有图案
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 6),
  )..repeat();

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF070C18),
        body: AnimatedBuilder(
          animation: _c,
          builder: (_, __) => CustomPaint(
            painter: _RipplePainter(t: _c.value * 6.0),
            child: const SizedBox.expand(),
          ),
        ),
      ),
    );
  }
}

class _RipplePainter extends CustomPainter {
  _RipplePainter({required this.t});

  final double t; // 秒

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    // 类似 shader 的 uSize：先铺一层线性渐变底色
    canvas.drawRect(
      rect,
      Paint()
        ..shader = ui.Gradient.linear(
          rect.topLeft,
          rect.bottomRight,
          const [Color(0xFF06101F), Color(0xFF12294D)],
        ),
    );

    final center = size.center(Offset.zero);

    // 1) 波纹：sin(距离 - 时间) 的圆环，越往外越淡
    for (var i = 0; i < 4; i++) {
      final p = ((t / 2.4) + i / 4) % 1.0;
      final radius = size.shortestSide * 0.55 * p;
      canvas.drawCircle(
        center,
        radius,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 3 - p * 2
          ..color =
              Color.lerp(const Color(0xFF67E8F9), Colors.transparent, p)!,
      );
    }

    // 2) 噪声：固定哈希 + sin 抖动，模拟 fragment 里的 hash/noise
    for (var i = 0; i < 90; i++) {
      final h = _hash(i);
      final x = size.width * (0.5 + 0.45 * math.sin(t * 1.2 + h * 12.0));
      final y = size.height * (0.5 + 0.42 * math.cos(t * 0.9 + h * 9.0));
      canvas.drawCircle(
        Offset(x, y),
        1.5 + h * 2.5,
        Paint()..color = Colors.white.withValues(alpha: 0.10 + 0.25 * h),
      );
    }
  }

  // 真实 shader 常用 fract(sin(dot(p, ...)) * 43758.5453) 生成伪随机
  double _hash(int i) => (math.sin(i * 12.9898) * 43758.5453).abs() % 1.0;

  @override
  bool shouldRepaint(covariant _RipplePainter oldDelegate) =>
      oldDelegate.t != t;
}
`,os=`import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

// 手写弹簧：a = (-k * (x - target) - c * v) / m
// 用半隐式欧拉积分；真实项目也可用 SpringSimulation + animateWith()。

void main() => runApp(const _SpringDemo());

class _SpringDemo extends StatefulWidget {
  const _SpringDemo();
  @override
  State<_SpringDemo> createState() => _SpringDemoState();
}

class _SpringDemoState extends State<_SpringDemo>
    with SingleTickerProviderStateMixin {
  late final Ticker _ticker;
  final Stopwatch _watch = Stopwatch();
  int _lastUs = 0;
  double _x = 0.1; // 位置 0~1
  double _v = 0; // 速度
  double _target = 0.9;
  // k 刚度、m 质量、c 阻尼系数：ζ = c / (2 * sqrt(k * m))
  static const double _k = 140;
  static const double _m = 1;
  static const double _c = 10;
  @override
  void initState() {
    super.initState();
    _watch.start();
    _ticker = createTicker(_onTick)..start();
  }
  void _onTick(Duration _) {
    final now = _watch.elapsedMicroseconds;
    final dt = ((now - _lastUs) / 1e6).clamp(0.0, 0.05).toDouble();
    _lastUs = now;
    for (var i = 0; i < 4; i++) {
      final h = dt / 4; // 4 次子步，防止大步长发散
      final a = (-_k * (_x - _target) - _c * _v) / _m;
      _v += a * h;
      _x += _v * h;
    }
    setState(() {});
  }
  @override
  void dispose() {
    _ticker.dispose();
    _watch.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final zeta = _c / (2 * math.sqrt(_k * _m));
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('手写弹簧动画')),
        body: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(children: [
            Text('ζ = \${zeta.toStringAsFixed(2)}   '
                'x = \${_x.toStringAsFixed(3)}   v = \${_v.toStringAsFixed(3)}'),
            const SizedBox(height: 24),
            Expanded(
              child: GestureDetector(
                onTap: () => setState(
                  () => _target = _target > 0.5 ? 0.1 : 0.9,
                ),
                child: CustomPaint(
                  painter: _SpringPainter(x: _x, target: _target),
                  child: const SizedBox.expand(),
                ),
              ),
            ),
            const Text('点击画面切换目标，观察回弹与稳定过程'),
          ]),
        ),
      ),
    );
  }
}

class _SpringPainter extends CustomPainter {
  _SpringPainter({required this.x, required this.target});
  final double x;
  final double target;

  @override
  void paint(Canvas canvas, Size size) {
    final y = size.height / 2;
    final left = 24.0;
    final right = size.width - 24;
    final targetX = left + (right - left) * target;
    final ballX = left + (right - left) * x.clamp(0.0, 1.0).toDouble();
    canvas.drawLine(
      Offset(left, y), Offset(right, y), Paint()..color = Colors.grey.shade400);
    canvas.drawLine(
      Offset(targetX, y - 30), Offset(targetX, y + 30),
      Paint()..color = Colors.orange..strokeWidth = 2);
    canvas.drawCircle(Offset(ballX, y), 20, Paint()..color = Colors.blueAccent);
    canvas.drawCircle(
      Offset(ballX, y), 20,
      Paint()..style = PaintingStyle.stroke..color = Colors.white..strokeWidth = 2);
  }

  @override
  bool shouldRepaint(covariant _SpringPainter old) =>
      old.x != x || old.target != target;
}
`,ss=`import 'package:flutter/material.dart';

// 模拟 PlatformView：原生视图先渲染成纹理，再由 Flutter 合成。
// 关闭裁剪后可以看到：原生层的内容会溢出自己的槽位。
void main() => runApp(const _PvDemo());
class _PvDemo extends StatefulWidget {
  const _PvDemo();
  @override
  State<_PvDemo> createState() => _PvDemoState();
}
class _PvDemoState extends State<_PvDemo> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this, duration: const Duration(seconds: 4));
  bool _clip = true; int _frames = 0; // 模拟「每帧重新上传纹理」的计数
  @override
  void initState() {
    super.initState();
    _c.addListener(() => _frames++);
    _c.repeat(reverse: true);
  }
  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFFF4F6FA),
        body: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(children: [
            Row(children: [
              Expanded(
                child: Text(_clip ? '已启用 ClipRect 裁剪' : '已关闭裁剪：观察溢出')),
              Switch(value: _clip, onChanged: (v) => setState(() => _clip = v)),
            ]),
            Expanded(
              child: AnimatedBuilder(
                animation: _c,
                builder: (context, _) {
                  final shift = -70.0 + 140.0 * _c.value;
                  final native = OverflowBox(
                    minHeight: 0,
                    maxHeight: 220,
                    alignment: Alignment.topCenter,
                    child: SizedBox(
                      height: 220,
                      width: double.infinity,
                      child: CustomPaint(painter: _NativePainter(shift: shift)),
                    ),
                  );
                  return Stack(clipBehavior: Clip.none, children: [
                    Positioned.fill(
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          color: const Color(0xFFDDE3ED),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Center(child: Text('Flutter 渲染层')),
                      ),
                    ),
                    // 「原生视图」槽位：高度 140，内容 220
                    Positioned(
                      left: 0, right: 0, top: 56, height: 140,
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.blueGrey),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: _clip ? ClipRect(child: native) : native,
                      ),
                    ),
                    Positioned(
                      right: 8, bottom: 8, child: Text('纹理更新 #$_frames')),
                  ]);
                },
              ),
            ),
            const Text('彩色块是模拟的原生视图，每帧平移一次；Flutter 浮层始终在上方。'),
          ]),
        ),
      ),
    );
  }
}
class _NativePainter extends CustomPainter {
  _NativePainter({required this.shift});
  final double shift;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0F766E));
    final grid = Paint()..color = Colors.white.withValues(alpha: 0.25);
    final offset = shift % 40;
    for (var x = -40.0; x < size.width + 40; x += 40) {
      canvas.drawLine(
          Offset(x + offset, 0), Offset(x + offset, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 40) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    canvas.drawCircle(
        Offset(size.width / 2 + shift, size.height / 2),
        16,
        Paint()..color = const Color(0xFFF59E0B));
  }
  @override
  bool shouldRepaint(covariant _NativePainter old) => old.shift != shift;
}
`,rs=`import 'package:flutter/material.dart';

// 18 · 依赖倒置：UI 只依赖抽象仓库，换实现不改 UI
// domain 层：实体与契约（纯 Dart，不 import Flutter 之外的实现细节）
class Note {
  const Note(this.id, this.title);
  final String id;
  final String title;
}

abstract class NoteRepository {
  Future<List<Note>> fetchAll();
}

// data 层实现一：内存仓库，测试与离线场景零延迟
class MemoryNoteRepository implements NoteRepository {
  @override
  Future<List<Note>> fetchAll() async => const <Note>[
        Note('1', '依赖倒置：UI 只认接口'),
        Note('2', '实现类可以被随时替换'),
      ];
}

// data 层实现二：远端仓库，用延迟模拟网络
class RemoteNoteRepository implements NoteRepository {
  @override
  Future<List<Note>> fetchAll() async {
    await Future<void>.delayed(const Duration(milliseconds: 500));
    return const <Note>[
      Note('r1', '远端仓库已经接管'),
      Note('r2', 'UI 代码一行都没改'),
    ];
  }
}

// presentation 层：组合根在这里挑选实现，其余代码只依赖抽象
void main() => runApp(const MaterialApp(home: NotesPage()));

class NotesPage extends StatefulWidget {
  const NotesPage({super.key});
  @override
  State<NotesPage> createState() => _NotesPageState();
}

class _NotesPageState extends State<NotesPage> {
  NoteRepository _repository = MemoryNoteRepository();
  late Future<List<Note>> _notes = _repository.fetchAll();
  bool _remote = false;

  void _swap() {
    setState(() {
      _remote = !_remote;
      _repository = _remote ? RemoteNoteRepository() : MemoryNoteRepository();
      _notes = _repository.fetchAll();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('依赖倒置与 Repository')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          const Text('presentation → NoteRepository（抽象）← data 实现'),
          const SizedBox(height: 8),
          FilledButton(
            onPressed: _swap,
            child: Text(_remote ? '切回内存仓库' : '切到远端仓库'),
          ),
          const SizedBox(height: 12),
          FutureBuilder<List<Note>>(
            future: _notes,
            builder: (context, snapshot) {
              if (snapshot.connectionState != ConnectionState.done) {
                return const Center(child: CircularProgressIndicator());
              }
              if (snapshot.hasError) {
                return Text('错误：\${snapshot.error}');
              }
              return Column(
                children: <Widget>[
                  for (final note in snapshot.data ?? const <Note>[])
                    ListTile(
                      dense: true,
                      leading: CircleAvatar(child: Text(note.id)),
                      title: Text(note.title),
                    ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}
`,ls=`import 'package:flutter/material.dart';

// 19 · 轻量 Notifier：纯函数状态机 + 极窄的重建范围
class CartState {
  const CartState({required this.items, required this.total});
  final int items;
  final int total;
  @override
  String toString() => 'items=$items total=$total';
}

// 纯函数 reducer：不依赖 Widget，可以直接写 unit test
CartState reduce(CartState state, String event) {
  switch (event) {
    case 'add':
      return CartState(items: state.items + 1, total: state.total + 9);
    case 'clear':
      return const CartState(items: 0, total: 0);
    default:
      return state;
  }
}

// 轻量 Notifier：自己管生命周期，只有状态真变了才通知
class MiniNotifier extends ChangeNotifier {
  MiniNotifier(this._state);
  CartState _state;
  CartState get state => _state;

  void emit(CartState next) {
    if (next.items == _state.items && next.total == _state.total) return;
    _state = next;
    notifyListeners();
  }

  void dispatch(String event) => emit(reduce(_state, event));
}

void main() => runApp(const MaterialApp(home: CartPage()));

class CartPage extends StatefulWidget {
  const CartPage({super.key});
  @override
  State<CartPage> createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  final MiniNotifier _cart =
      MiniNotifier(const CartState(items: 0, total: 0));
  int _rebuilds = 0;

  @override
  void dispose() {
    _cart.dispose(); // 建在 State 里，就由 State 负责销毁
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // 纯函数自检：不需要 Widget，也不需要 pump
    final checked = reduce(reduce(const CartState(items: 0, total: 0), 'add'), 'add');
    return Scaffold(
      appBar: AppBar(title: const Text('手写轻量 Notifier')),
      body: Column(
        children: <Widget>[
          const SizedBox(height: 12),
          FilledButton.tonal(
            onPressed: () => _cart.dispatch('add'),
            child: const Text('加一件（+9 元）'),
          ),
          TextButton(
            onPressed: () => _cart.dispatch('clear'),
            child: const Text('清空'),
          ),
          // 只有这段子树订阅状态，重建范围被压到最小
          ListenableBuilder(
            listenable: _cart,
            builder: (context, _) {
              _rebuilds++;
              return Text('\${_cart.state} · 重建 $_rebuilds 次');
            },
          ),
          const SizedBox(height: 12),
          Text('自检 reduce: $checked'),
        ],
      ),
    );
  }
}
`,cs=`import 'package:flutter/material.dart';

// 20 · 用纯 Dart 模拟「分层包 + 依赖方向检查」
enum Layer { core, domain, data, presentation }

String layerName(Layer layer) => switch (layer) {
      Layer.core => 'core',
      Layer.domain => 'domain',
      Layer.data => 'data',
      Layer.presentation => 'presentation',
    };

// 每个包允许依赖哪些层：依赖只能朝内，不能反向
const Map<Layer, Set<Layer>> allowedDeps = <Layer, Set<Layer>>{
  Layer.core: <Layer>{},
  Layer.domain: <Layer>{Layer.core},
  Layer.data: <Layer>{Layer.core, Layer.domain},
  Layer.presentation: <Layer>{Layer.core, Layer.domain},
};

class PackageNode {
  const PackageNode(this.name, this.layer, this.deps);
  final String name;
  final Layer layer;
  final List<PackageNode> deps;
}

List<String> violations(List<PackageNode> packages) {
  final result = <String>[];
  for (final pkg in packages) {
    for (final dep in pkg.deps) {
      if (!allowedDeps[pkg.layer]!.contains(dep.layer)) {
        result.add('\${pkg.name}(\${layerName(pkg.layer)})'
            ' → \${dep.name}(\${layerName(dep.layer)})');
      }
    }
  }
  return result;
}

void main() => runApp(const MaterialApp(home: DepPage()));

class DepPage extends StatefulWidget {
  const DepPage({super.key});
  @override
  State<DepPage> createState() => _DepPageState();
}

class _DepPageState extends State<DepPage> {
  bool _illegal = false;

  List<PackageNode> _buildGraph() {
    const core = PackageNode('@app/core', Layer.core, <PackageNode>[]);
    const domain =
        PackageNode('@app/domain', Layer.domain, <PackageNode>[core]);
    final data = PackageNode('@app/data', Layer.data, <PackageNode>[
      core,
      domain,
      if (_illegal) const PackageNode('@app/ui', Layer.presentation, []),
    ]);
    const ui =
        PackageNode('@app/ui', Layer.presentation, <PackageNode>[core, domain]);
    return <PackageNode>[core, domain, data, ui];
  }

  @override
  Widget build(BuildContext context) {
    final graph = _buildGraph();
    final bad = violations(graph);
    final scheme = Theme.of(context).colorScheme;
    return Scaffold(
      appBar: AppBar(title: const Text('依赖方向检查')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          const Text('规则：domain → core，data → core/domain，'
              'presentation → core/domain。反向 import 即违规。'),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('注入违规：data 反向依赖 ui'),
            value: _illegal,
            onChanged: (value) => setState(() => _illegal = value),
          ),
          for (final pkg in graph)
            ListTile(
              dense: true,
              title: Text('\${pkg.name}  (\${layerName(pkg.layer)})'),
              subtitle: Text(pkg.deps.isEmpty
                  ? '无依赖'
                  : '依赖 \${pkg.deps.map((d) => d.name).join(', ')}'),
            ),
          const Divider(),
          Text(
            bad.isEmpty ? '检查通过：0 条违规' : '发现 \${bad.length} 条违规：',
            style: TextStyle(
              color: bad.isEmpty ? scheme.primary : scheme.error,
              fontWeight: FontWeight.bold,
            ),
          ),
          for (final line in bad)
            Text(line, style: TextStyle(color: scheme.error)),
        ],
      ),
    );
  }
}
`,ds=`import 'package:flutter/material.dart';

// 「测试即示例」：被测对象是纯 Dart 类，用例是可枚举的数据。
// 真实项目放进 test/ 由 flutter test 执行，这里直接跑在界面上。
void main() => runApp(const MaterialApp(home: _Demo()));

/// 订单金额计算（单位：分，整数避免浮点误差）：满 200 减 30，VIP 再 9 折。
class PriceCalculator {
  const PriceCalculator({this.vip = false, this.threshold = 20000});
  final bool vip;
  /// 满减门槛，做成可注入的，方便演示「变异测试」。
  final int threshold;
  int total(List<int> prices) {
    final sum = prices.fold<int>(0, (a, b) => a + b);
    final after = sum >= threshold ? sum - 3000 : sum;
    return vip ? after * 90 ~/ 100 : after;
  }
}
class _Case {
  const _Case(this.name, this.expected, this.prices, {this.vip = false});
  final String name;
  final int expected;
  final List<int> prices;
  final bool vip;
}

const List<_Case> _cases = <_Case>[
  _Case('空购物车', 0, <int>[]),
  _Case('未满 200 不减', 15000, <int>[10000, 5000]),
  _Case('满 200 减 30', 18000, <int>[15000, 6000]),
  _Case('VIP 再打 9 折', 16200, <int>[15000, 6000], vip: true),
  _Case('边界：刚好 200', 17000, <int>[20000]),
];

class _Demo extends StatefulWidget {
  const _Demo();
  @override
  State<_Demo> createState() => _DemoState();
}

class _DemoState extends State<_Demo> {
  /// 打开变异开关 = 故意把门槛改错，验证测试能否抓到 bug。
  bool _mutated = false;
  bool _run = false;

  bool _pass(_Case c) =>
      PriceCalculator(vip: c.vip, threshold: _mutated ? 25000 : 20000)
          .total(c.prices) ==
      c.expected;

  String _money(int cents) => '¥\${(cents / 100).toStringAsFixed(2)}';

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final ok = _cases.where(_pass).length;
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text(
          '纯 Dart 状态类没有 Widget、没有插件，毫秒级执行，是测试金字塔的底座。',
          style: TextStyle(color: scheme.onSurfaceVariant),
        ),
        OutlinedButton(
          onPressed: () => setState(() => _run = true),
          child: Text(_run ? '重新运行 \${_cases.length} 个用例' : '运行用例'),
        ),
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          title: const Text('变异开关：门槛改成 250 元'),
          subtitle: const Text('模拟改坏业务代码，看哪条用例变红'),
          value: _mutated,
          onChanged: (v) => setState(() {
            _mutated = v;
            _run = true;
          }),
        ),
        if (_run)
          Text(
            '通过 $ok / \${_cases.length}',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: ok == _cases.length ? scheme.primary : scheme.error,
            ),
          ),
        for (final c in _cases)
          ListTile(
            dense: true,
            leading: Icon(
              !_run
                  ? Icons.radio_button_unchecked
                  : _pass(c)
                      ? Icons.check_circle
                      : Icons.error,
              color: !_run
                  ? scheme.outline
                  : _pass(c)
                      ? scheme.primary
                      : scheme.error,
            ),
            title: Text(c.name),
            subtitle: Text(
              '期望 \${_money(c.expected)} · 输入 '
              '\${c.prices.isEmpty ? '空' : c.prices.map(_money).join(' + ')}',
            ),
          ),
      ],
    );
  }
}
`,us=`import 'dart:developer' as developer;

import 'package:flutter/material.dart';
void main() => runApp(const MaterialApp(home: _Demo()));
/// 日志级别：数值越大越严重，用来做「最低级别」过滤。
enum LogLevel {
  debug('D', 500, Colors.grey),
  info('I', 800, Colors.blue),
  warn('W', 900, Colors.orange),
  error('E', 1000, Colors.red);

  const LogLevel(this.tag, this.severity, this.color);
  final String tag; final int severity; final Color color;
}
class _LogEntry {
  const _LogEntry(this.level, this.message);
  final LogLevel level; final String message;
}
/// 最简结构化日志器：按级别过滤、环形缓冲，同时写进 dart:developer。
class AppLogger {
  LogLevel minLevel = LogLevel.debug;
  final List<_LogEntry> entries = <_LogEntry>[];

  void log(LogLevel level, String message) {
    if (level.index < minLevel.index) return; // 低于阈值直接丢弃
    entries.insert(0, _LogEntry(level, message));
    if (entries.length > 20) entries.removeLast();
    developer.log(message, name: 'shop.\${level.name}', level: level.severity);
  }
}
class _Demo extends StatefulWidget {
  const _Demo();
  @override
  State<_Demo> createState() => _DemoState();
}
class _DemoState extends State<_Demo> {
  final AppLogger _logger = AppLogger();
  bool _newCheckout = false;
  void _log(LogLevel level, String message) =>
      setState(() => _logger.log(level, message));
  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          title: const Text('新结算流程（远程开关）'),
          subtitle: Text(_newCheckout ? '实验组：新版 UI' : '对照组：旧版 UI'),
          value: _newCheckout,
          onChanged: (v) => setState(() {
            _newCheckout = v;
            _logger.log(LogLevel.info, '开关 new_checkout 切换为 $v');
          }),
        ),
        Card(
          margin: EdgeInsets.zero,
          child: ListTile(
            leading: Icon(
              _newCheckout ? Icons.rocket_launch : Icons.shopping_cart,
              color: scheme.primary,
            ),
            title: Text(_newCheckout ? '新版结算：一步下单 + 预估到达' : '旧版结算：地址 → 支付 → 确认'),
          ),
        ),
        Wrap(
          spacing: 8,
          children: [
            for (final level in LogLevel.values)
              OutlinedButton(
                onPressed: () => _log(level, '手动触发 \${level.name} 日志'),
                child: Text('写 \${level.name}'),
              ),
          ],
        ),
        const Text('最低级别'),
        Wrap(
          spacing: 6,
          children: [
            for (final level in LogLevel.values)
              ChoiceChip(
                label: Text(level.name),
                selected: _logger.minLevel == level,
                onSelected: (_) => setState(() => _logger.minLevel = level),
              ),
          ],
        ),
        const Divider(),
        if (_logger.entries.isEmpty) const Text('当前过滤条件下没有日志'),
        for (final entry in _logger.entries.take(6))
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 4),
            child: Row(
              children: [
                Icon(Icons.circle, size: 10, color: entry.level.color),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    '\${entry.level.tag} \${entry.message}',
                    style: TextStyle(color: entry.level.color),
                  ),
                ),
              ],
            ),
          ),
      ],
    );
  }
}
`,ms=`import 'package:flutter/material.dart';

// 坏代码 → lint 规则修复的对照示例。
// 真实项目里执行 \`dart fix --apply\`，这里用开关模拟「修复前 / 修复后」。
void main() => runApp(const MaterialApp(home: _Demo()));

class _Fix {
  const _Fix(this.rule, this.bad, this.good);
  final String rule;
  final String bad;
  final String good;
}
const List<_Fix> _fixes = <_Fix>[
  _Fix('prefer_const_constructors', "Text('标题')", "const Text('标题')"),
  _Fix('avoid_print', "print('debug: \\$value')", "debugPrint('debug: \\$value')"),
  _Fix(
    'always_declare_return_types',
    'add(a, b) => a + b;',
    'int add(int a, int b) => a + b;',
  ),
  _Fix(
    'require_trailing_commas',
    "Column(children: [Text('A')])",
    "Column(\\n  children: [\\n    Text('A'),\\n  ],\\n)",
  ),
  _Fix('use_key_in_widget_constructors', 'const _Card()', 'const _Card({super.key})'),
];

class _Demo extends StatefulWidget {
  const _Demo();
  @override
  State<_Demo> createState() => _DemoState();
}
class _DemoState extends State<_Demo> {
  bool _fixed = false;
  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          title: const Text('执行 dart fix --apply'),
          subtitle: Text(_fixed ? '5 条 lint 问题已自动修复' : '当前有 5 条 lint 问题'),
          value: _fixed,
          onChanged: (v) => setState(() => _fixed = v),
        ),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: (_fixed ? scheme.primary : scheme.error)
                .withValues(alpha: 0.12),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Icon(_fixed ? Icons.verified : Icons.warning_amber,
                  color: _fixed ? scheme.primary : scheme.error),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  _fixed
                      ? '质量门禁：analyze 0 issues · format 通过 · test 通过'
                      : '质量门禁：analyze 报 5 条，CI 会在 PR 上直接打回',
                ),
              ),
            ],
          ),
        ),
        for (final fix in _fixes)
          Card(
            margin: const EdgeInsets.symmetric(vertical: 6),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    fix.rule,
                    style: TextStyle(
                        color: scheme.primary, fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Icon(_fixed ? Icons.check : Icons.close,
                          size: 16,
                          color: _fixed ? scheme.primary : scheme.error),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text(
                          _fixed ? fix.good : fix.bad,
                          style: TextStyle(
                            fontFamily: 'monospace',
                            fontSize: 12,
                            color: _fixed ? scheme.onSurface : scheme.error,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
      ],
    );
  }
}
`,hs=`import 'package:flutter/material.dart';

// 纯 Dart 模拟 Pigeon：契约写在接口上，两端共享同一套类型。
// 真实项目里这些接口与实现由 \`dart run pigeon\` 生成，这里手写等价物看结构。
void main() => runApp(const MaterialApp(home: _PigeonPage()));

enum DeviceTier { low, mid, high }

class DeviceInfo {
  const DeviceInfo({required this.model, required this.tier, required this.cores});
  final String model;
  final DeviceTier tier;
  final int cores;
}
/// 等价 PlatformException：跨边界的失败必须带稳定的 code。
class BridgeException implements Exception {
  const BridgeException(this.code);
  final String code;
}
/// 等价 @HostApi()：Dart 调原生，返回值类型在编译期固定。
abstract class HostApi {
  Future<DeviceInfo> getDeviceInfo();
}
/// 等价 @FlutterApi()：原生调 Dart，参数不是 Map。
abstract class FlutterApi {
  void onBatteryChanged(int percent, bool charging);
}

/// 模拟原生侧持有的 FlutterApi 引用，回调方向是 原生 → Dart。
class _BatteryListener implements FlutterApi {
  _BatteryListener(this.onEvent);
  final void Function(String) onEvent;

  @override
  void onBatteryChanged(int percent, bool charging) =>
      onEvent('↓ 原生推送：电量 $percent%\${charging ? '（充电中）' : ''}');
}

/// 模拟原生实现；offline 用来演示错误码分支。
class FakeNativeHost implements HostApi {
  const FakeNativeHost({this.offline = false});
  final bool offline;

  @override
  Future<DeviceInfo> getDeviceInfo() async {
    if (offline) throw const BridgeException('DEVICE_BUSY');
    return const DeviceInfo(model: 'Pixel 8', tier: DeviceTier.high, cores: 9);
  }
}

class _PigeonPage extends StatefulWidget {
  const _PigeonPage();
  @override
  State<_PigeonPage> createState() => _PigeonPageState();
}

class _PigeonPageState extends State<_PigeonPage> {
  bool _offline = false;
  final List<String> _log = <String>[];
  late final FlutterApi _events =
      _BatteryListener((msg) => setState(() => _log.insert(0, msg)));

  Future<void> _call(String label, Future<String> Function(HostApi) run) async {
    try {
      final result = await run(FakeNativeHost(offline: _offline));
      setState(() => _log.insert(0, '✓ $label → $result'));
    } on BridgeException catch (e) {
      setState(() => _log.insert(0, '✗ $label → \${e.code}（按 code 分支，不猜文案）'));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          const Text('返回值是 DeviceInfo 而不是 Map；原生失败抛出带 code 的异常。'),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('模拟原生不可用'),
            value: _offline,
            onChanged: (v) => setState(() => _offline = v),
          ),
          Wrap(
            spacing: 8,
            children: <Widget>[
              FilledButton.tonal(
                onPressed: () => _call('getDeviceInfo', (api) async {
                  final info = await api.getDeviceInfo();
                  return '\${info.model} / \${info.tier.name} / \${info.cores} 核';
                }),
                child: const Text('取设备信息'),
              ),
              OutlinedButton(
                onPressed: () => _events.onBatteryChanged(76, true),
                child: const Text('原生推事件'),
              ),
            ],
          ),
          for (final line in _log)
            Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: Text(line),
            ),
        ],
      ),
    );
  }
}
`,ps=`import 'package:flutter/material.dart';

// 纯 Dart 模拟 federated plugin 的三层：门面 → 平台接口 → 平台实现。
// 真实项目里四层分别是 battery / battery_platform_interface / battery_android / battery_ios。
void main() => runApp(const MaterialApp(home: _FederatedPage()));

enum HostOs { android, ios, desktop }

/// 平台接口：只声明签名，不依赖任何实现。
abstract class BatteryPlatform {
  static BatteryPlatform? _instance;
  static BatteryPlatform get instance =>
      _instance ?? (throw StateError('没有注册平台实现'));
  static set instance(BatteryPlatform impl) => _instance = impl;
  Future<int> readLevel();
  String get implementation;
}

class AndroidBattery implements BatteryPlatform {
  @override
  Future<int> readLevel() async => 82;
  @override
  String get implementation => 'battery_android（Kotlin）';
}

class IosBattery implements BatteryPlatform {
  @override
  Future<int> readLevel() async => 61;
  @override
  String get implementation => 'battery_ios（Swift）';
}

/// app-facing 门面：业务代码只 import 这一层。
class Battery {
  Battery({BatteryPlatform? platform})
      : _platform = platform ?? BatteryPlatform.instance;
  final BatteryPlatform _platform;
  Future<int> level() => _platform.readLevel();
  String get implementation => _platform.implementation;
}

/// 等价 dartPluginClass 的 registerWith()。
void registerFor(HostOs os) {
  if (os == HostOs.android) BatteryPlatform.instance = AndroidBattery();
  if (os == HostOs.ios) BatteryPlatform.instance = IosBattery();
  if (os == HostOs.desktop) throw UnsupportedError('桌面实现尚未发布');
}

class _FederatedPage extends StatefulWidget {
  const _FederatedPage();
  @override
  State<_FederatedPage> createState() => _FederatedPageState();
}

class _FederatedPageState extends State<_FederatedPage> {
  HostOs _os = HostOs.android;
  String _result = '尚未调用';

  Future<void> _run() async {
    try {
      registerFor(_os);
      final Battery battery = Battery();
      final int level = await battery.level();
      setState(() => _result = '\${battery.implementation} → $level%');
    } on UnsupportedError catch (e) {
      setState(() => _result = 'UnsupportedError：\${e.message}');
    } on StateError catch (e) {
      setState(() => _result = 'StateError：\${e.message}');
    }
  }
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(title: const Text('Federated 分层')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          SegmentedButton<HostOs>(
            segments: const <ButtonSegment<HostOs>>[
              ButtonSegment<HostOs>(value: HostOs.android, label: Text('Android')),
              ButtonSegment<HostOs>(value: HostOs.ios, label: Text('iOS')),
              ButtonSegment<HostOs>(value: HostOs.desktop, label: Text('桌面')),
            ],
            selected: <HostOs>{_os},
            onSelectionChanged: (s) => setState(() {
              _os = s.first;
              _result = '尚未调用';
            }),
          ),
          const SizedBox(height: 12),
          const Text('调用链：Battery().level() → BatteryPlatform → 平台实现'),
          const SizedBox(height: 8),
          FilledButton(onPressed: _run, child: const Text('调用 level()')),
          const SizedBox(height: 12),
          Card(
            child: ListTile(
              leading: const Icon(Icons.storage),
              title: const Text('解析结果'),
              subtitle: Text(_result),
            ),
          ),
          Text('桌面平台会抛 UnsupportedError：门面只负责路由，'
              '缺实现时应显式失败而不是返回假数据。',
              style: theme.textTheme.bodySmall),
        ],
      ),
    );
  }
}
`,gs=`import 'package:flutter/material.dart';

// 纯 Dart 建模权限状态机：一次请求只会在确定的状态之间迁移，
// 被永久拒绝后唯一的出口是系统设置。
void main() => runApp(const MaterialApp(home: _PermissionPage()));

enum PermState { notDetermined, requesting, granted, denied, permanentlyDenied }

enum Scenario { grant, firstDeny, permanentDeny }

extension on PermState {
  String get label => switch (this) {
        PermState.notDetermined => '未请求',
        PermState.requesting => '请求中',
        PermState.granted => '已授权',
        PermState.denied => '已拒绝',
        PermState.permanentlyDenied => '永久拒绝',
      };

  String get guide => switch (this) {
        PermState.notDetermined => '先解释用途，再发起请求',
        PermState.requesting => '等待系统弹窗结果',
        PermState.granted => '进入相机功能',
        PermState.denied => '可再次请求，同时给出理由',
        PermState.permanentlyDenied => '弹窗不会再出现，只能去系统设置',
      };

  bool get canRequest => this != PermState.permanentlyDenied && this != PermState.requesting;
}

class PermissionFlow {
  PermState state = PermState.notDetermined;

  Future<PermState> request(Scenario scenario) async {
    if (!state.canRequest) return state;
    state = PermState.requesting;
    await Future<void>.delayed(const Duration(milliseconds: 500));
    state = switch (scenario) {
      Scenario.grant => PermState.granted,
      Scenario.firstDeny => PermState.denied,
      Scenario.permanentDeny => PermState.permanentlyDenied,
    };
    return state;
  }

  Future<PermState> openSettings() async {
    if (state != PermState.permanentlyDenied) return state;
    await Future<void>.delayed(const Duration(milliseconds: 400));
    state = PermState.granted; // 用户在设置里打开后返回
    return state;
  }
}

class _PermissionPage extends StatefulWidget {
  const _PermissionPage();
  @override
  State<_PermissionPage> createState() => _PermissionPageState();
}

class _PermissionPageState extends State<_PermissionPage> {
  final PermissionFlow _flow = PermissionFlow();
  Scenario _scenario = Scenario.firstDeny;
  String _result = '尚未请求';

  Future<void> _request() async {
    final s = await _flow.request(_scenario);
    setState(() => _result = 'request() → \${s.label}');
  }

  Future<void> _settings() async {
    final s = await _flow.openSettings();
    setState(() => _result = 'openSettings() → \${s.label}');
  }
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final state = _flow.state;
    return Scaffold(
      appBar: AppBar(title: const Text('权限状态机')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Text('当前状态：\${state.label}', style: theme.textTheme.titleMedium),
          const SizedBox(height: 4),
          Text(state.guide, style: theme.textTheme.bodySmall),
          const SizedBox(height: 12),
          SegmentedButton<Scenario>(
            segments: const <ButtonSegment<Scenario>>[
              ButtonSegment<Scenario>(value: Scenario.grant, label: Text('同意')),
              ButtonSegment<Scenario>(value: Scenario.firstDeny, label: Text('拒绝')),
              ButtonSegment<Scenario>(value: Scenario.permanentDeny, label: Text('不再询问')),
            ],
            selected: <Scenario>{_scenario},
            onSelectionChanged: (s) => setState(() => _scenario = s.first),
          ),
          const SizedBox(height: 12),
          Wrap(
            spacing: 8,
            children: <Widget>[
              FilledButton(onPressed: _request, child: const Text('request()')),
              OutlinedButton(onPressed: _settings, child: const Text('openAppSettings()')),
            ],
          ),
          const SizedBox(height: 12),
          Card(child: ListTile(title: const Text('调用结果'), subtitle: Text(_result))),
        ],
      ),
    );
  }
}
`,fs=`import 'package:flutter/material.dart';

// 断点自适应：<600 底部导航，>=600 侧边栏；判断只看父容器宽度。
void main() => runApp(const MaterialApp(home: _AdaptivePage()));

class _AdaptivePage extends StatefulWidget {
  const _AdaptivePage();
  @override
  State<_AdaptivePage> createState() => _AdaptivePageState();
}

class _AdaptivePageState extends State<_AdaptivePage> {
  double _width = 390;
  int _index = 0;
  static const List<String> _tabs = <String>['首页', '搜索', '设置'];
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final w = _width.round();
    return Scaffold(
      body: Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              SizedBox(
                width: 150,
                child: Text('宽 $w · \${w < 600 ? 'Compact' : w < 840 ? 'Medium' : 'Expanded'}',
                    style: theme.textTheme.bodySmall),
              ),
              Expanded(
                child: Slider(
                  value: _width,
                  min: 320,
                  max: 1200,
                  onChanged: (v) => setState(() => _width = v),
                ),
              ),
            ],
          ),
          Expanded(
            child: Center(
              child: Container(
                width: _width,
                decoration: BoxDecoration(
                  border: Border.all(color: theme.colorScheme.outlineVariant),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: LayoutBuilder(
                  builder: (context, c) {
                    final compact = c.maxWidth < 600;
                    final expanded = c.maxWidth >= 840;
                    return Column(
                      children: <Widget>[
                        Expanded(
                          child: Row(
                            children: <Widget>[
                              if (!compact)
                                NavigationRail(
                                  selectedIndex: _index,
                                  onDestinationSelected: (i) => setState(() => _index = i),
                                  destinations: <NavigationRailDestination>[
                                    for (var i = 0; i < _tabs.length; i++)
                                      NavigationRailDestination(
                                        icon: Icon(switch (i) {
                                          0 => Icons.home_outlined,
                                          1 => Icons.search,
                                          _ => Icons.settings_outlined,
                                        }),
                                        label: Text(_tabs[i]),
                                      ),
                                  ],
                                ),
                              Expanded(
                                child: Padding(
                                  padding: const EdgeInsets.all(12),
                                  child: Text('\${_tabs[_index]}\\n\\n'
                                      '\${expanded ? '>=840：这里可放双栏列表 + 详情。' : '单栏内容区，信息层级不变。'}'),
                                ),
                              ),
                            ],
                          ),
                        ),
                        if (compact)
                          NavigationBar(
                            selectedIndex: _index,
                            onDestinationSelected: (i) => setState(() => _index = i),
                            destinations: <NavigationDestination>[
                              for (var i = 0; i < _tabs.length; i++)
                                NavigationDestination(
                                  icon: Icon(switch (i) {
                                    0 => Icons.home_outlined,
                                    1 => Icons.search,
                                    _ => Icons.settings_outlined,
                                  }),
                                  label: _tabs[i],
                                ),
                            ],
                          ),
                      ],
                    );
                  },
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
`,vs=`import 'dart:isolate';
import 'dart:math' as math;

import 'package:flutter/material.dart';

// CPU 密集计算放在主 isolate 会卡住动画，放到新 isolate 不会。
void main() => runApp(const _IsolateDemo());

// 故意耗时：统计 limit 以内的素数个数。
int _countPrimes(int limit) {
  var count = 0;
  for (var n = 2; n <= limit; n++) {
    var prime = true;
    for (var d = 2; d * d <= n; d++) {
      if (n % d == 0) { prime = false; break; }
    }
    if (prime) count++;
  }
  return count;
}

class _IsolateDemo extends StatefulWidget {
  const _IsolateDemo();
  @override
  State<_IsolateDemo> createState() => _IsolateDemoState();
}

class _IsolateDemoState extends State<_IsolateDemo>
    with SingleTickerProviderStateMixin {
  late final AnimationController _spin;
  int _frames = 0; // 每帧 +1，用来判断 UI 是否卡住
  bool _busy = false;
  String _status = '选择一种方式计算，观察旋转图标是否停住';

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(seconds: 2))
      ..repeat();
    _spin.addListener(() => _frames++);
  }

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  Future<void> _run({required bool useIsolate}) async {
    const limit = 120000;
    setState(() {
      _busy = true;
      _status = useIsolate ? 'Isolate.run 计算中…' : '主 isolate 计算中…';
    });
    final before = _frames;
    final watch = Stopwatch()..start();
    var count = 0;
    var note = '';
    if (useIsolate) {
      try {
        // 闭包只捕获局部常量，才能跨 isolate 传递
        count = await Isolate.run(() => _countPrimes(limit));
      } on UnsupportedError {
        note = '（环境不支持 isolate，已退回主线程）';
        count = _countPrimes(limit);
      }
    } else {
      count = await Future<int>(() => _countPrimes(limit));
    }
    watch.stop();
    setState(() {
      _busy = false;
      _status = '$count 个素数 · \${watch.elapsedMilliseconds} ms · '
          '动画前进 \${_frames - before} 帧$note';
    });
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: const Text('Isolate 与事件循环')),
          body: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(children: [
              AnimatedBuilder(
                animation: _spin,
                builder: (context, child) => Transform.rotate(
                    angle: _spin.value * 2 * math.pi, child: child),
                child: const Icon(Icons.settings, size: 48),
              ),
              const SizedBox(height: 16),
              Text(_status, textAlign: TextAlign.center),
              const SizedBox(height: 24),
              Wrap(spacing: 12, runSpacing: 8, children: [
                FilledButton(
                  onPressed: _busy ? null : () => _run(useIsolate: false),
                  child: const Text('主 isolate 计算'),
                ),
                FilledButton(
                  onPressed: _busy ? null : () => _run(useIsolate: true),
                  child: const Text('Isolate.run 计算'),
                ),
              ]),
            ]),
          ),
        ),
      );
}
`,_s=`import 'package:flutter/material.dart';

// 纯 Dart 模拟「指针 + 线性内存」契约，不 import dart:ffi。
void main() => runApp(const _FfiDemo());
const int _base = 0x1000; // 模拟起始地址
const int _size = 8; // 每个槽位 8 字节
class _FfiDemo extends StatefulWidget {
  const _FfiDemo();
  @override
  State<_FfiDemo> createState() => _FfiDemoState();
}

class _FfiDemoState extends State<_FfiDemo> {
  final List<double?> _heap = List<double?>.filled(8, null); // 64B
  int? _p;
  String _log = 'malloc(3) → 写入 → free → 读 x，观察契约如何被打破';

  int? _malloc(int slots) {
    var run = 0;
    for (var i = 0; i < _heap.length; i++) {
      run = _heap[i] == null ? run + 1 : 0;
      if (run == slots) {
        final start = i - slots + 1;
        for (var j = start; j <= i; j++) {
          _heap[j] = 0;
        }
        return _base + start * _size;
      }
    }
    return null; // 堆满：malloc 返回 NULL
  }

  int _index(int addr) {
    final i = (addr - _base) ~/ _size;
    if (i < 0 || i >= _heap.length) {
      throw StateError('越界 0x\${addr.toRadixString(16)}');
    }
    if (_heap[i] == null) {
      throw StateError('use-after-free 0x\${addr.toRadixString(16)}');
    }
    return i;
  }

  double _read(int addr) => _heap[_index(addr)]!;
  void _write(int addr, double v) => _heap[_index(addr)] = v;
  int get _ptr => _p ?? (throw StateError('p 为 null'));
  void _do(void Function() action) {
    try {
      action();
    } on StateError catch (e) {
      _log = '异常：\${e.message}';
    }
    setState(() {});
  }

  void _allocAndWrite() => _do(() {
        _p = _malloc(3);
        _write(_ptr, 1.5); // x @ +0
        _write(_ptr + 8, 2.5); // y @ +8
        _write(_ptr + 16, 3.5); // z @ +16
        _log = 'p = 0x\${_ptr.toRadixString(16)}，已写入 x/y/z';
      });

  void _freeAll() => _do(() {
        final start = _index(_ptr);
        for (var j = start; j < start + 3; j++) {
          _heap[j] = null;
        }
        _log = 'free(p)：内存失效，指针仍为 0x\${_ptr.toRadixString(16)}';
      });

  void _readX() => _do(() => _log = 'x = \${_read(_ptr)}');
  @override
  Widget build(BuildContext context) => MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: const Text('模拟 FFI 内存契约')),
          body: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(children: [
              const Text('64 字节堆（每格 8 字节）'),
              const SizedBox(height: 8),
              Wrap(spacing: 6, children: [
                for (var i = 0; i < _heap.length; i++)
                  Container(
                    width: 50,
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    color: _heap[i] == null
                        ? Colors.grey.withValues(alpha: 0.25)
                        : Colors.blue.withValues(alpha: 0.25),
                    child: Text(
                        '+\${i * 8}\\n\${_heap[i]?.toStringAsFixed(1) ?? 'free'}',
                        textAlign: TextAlign.center),
                  ),
              ]),
              const SizedBox(height: 12),
              Text('p = \${_p == null ? 'null' : '0x\${_p!.toRadixString(16)}'} · Vec3(24B)'),
              const SizedBox(height: 8),
              Wrap(spacing: 8, runSpacing: 8, children: [
                FilledButton(
                    onPressed: _allocAndWrite, child: const Text('malloc + 写入')),
                FilledButton(onPressed: _freeAll, child: const Text('free')),
                OutlinedButton(onPressed: _readX, child: const Text('读 x')),
              ]),
              const SizedBox(height: 12),
              Text(_log),
            ]),
          ),
        ),
      );
}
`,Ss=`import 'package:flutter/material.dart';

// 内存 mock：不联网，用 Future.delayed 模拟请求延迟。
void main() => runApp(const _DataLayerDemo());

class _Item {
  const _Item(this.id, this.title);
  final int id;
  final String title;
}

class _Repo {
  static const int pageSize = 8;
  final Map<int, List<_Item>> _cache = {};
  final Map<int, Future<List<_Item>>> _inflight = {};
  String last = '尚未请求';
  int requests = 0;
  int hits = 0;

  Future<List<_Item>> fetch(int page) {
    final cached = _cache[page];
    if (cached != null) {
      hits++;
      last = '第 $page 页：命中内存缓存';
      return Future<List<_Item>>.value(cached);
    }
    final pending = _inflight[page];
    if (pending != null) {
      hits++;
      last = '第 $page 页：复用在途请求';
      return pending;
    }
    requests++;
    last = '第 $page 页：发起请求';
    final future = Future<List<_Item>>.delayed(const Duration(milliseconds: 500), () {
      final items = List<_Item>.generate(pageSize,
          (i) => _Item(page * pageSize + i + 1, '数据 #\${page * pageSize + i + 1}'));
      _cache[page] = items;
      _inflight.remove(page);
      return items;
    });
    _inflight[page] = future;
    return future;
  }
}

class _DataLayerDemo extends StatefulWidget {
  const _DataLayerDemo();
  @override
  State<_DataLayerDemo> createState() => _DataLayerDemoState();
}

class _DataLayerDemoState extends State<_DataLayerDemo> {
  final _Repo _repo = _Repo();
  final List<_Item> _items = [];
  int _nextPage = 0;
  bool _loading = false;

  Future<void> _loadNext() async {
    if (_loading) return;
    setState(() => _loading = true);
    // 同时发两次请求，验证「在途去重」只产生一次真实请求
    final results = await Future.wait([
      _repo.fetch(_nextPage),
      _repo.fetch(_nextPage),
    ]);
    setState(() {
      _items.addAll(results.first);
      _nextPage++;
      _loading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('分页 · 缓存 · 去重')),
        body: Column(children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('已加载 \${_items.length} 条 · 请求 \${_repo.requests} 次 · 命中 \${_repo.hits} 次'),
              Text('最近：\${_repo.last}', style: Theme.of(context).textTheme.bodySmall),
            ]),
          ),
          Expanded(
            child: _items.isEmpty
                ? const Center(child: Text('点击下方按钮加载第 0 页'))
                : ListView.builder(
                    itemCount: _items.length,
                    itemBuilder: (context, i) =>
                        ListTile(title: Text('\${_items[i].id} · \${_items[i].title}')),
                  ),
          ),
          Padding(
            padding: const EdgeInsets.all(12),
            child: SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: _loading ? null : _loadNext,
                child: Text(_loading ? '加载中…' : '加载下一页（并发请求两次）'),
              ),
            ),
          ),
        ]),
      ),
    );
  }
}
`,xs=`import 'package:flutter/material.dart';

// 手势竞技场实验室：
// ① 内外层都监听点击：内层先入场，sweep 时先入场者胜
// ② 内层同时挂 tap 与 longPress：按住约 500ms，长按胜出、tap 被拒
// ③ 单击与双击共存：单击要等约 300ms 的双击窗口关闭才触发
void main() => runApp(const MaterialApp(home: _ArenaPage()));

class _ArenaPage extends StatefulWidget {
  const _ArenaPage({super.key});

  @override
  State<_ArenaPage> createState() => _ArenaPageState();
}

class _ArenaPageState extends State<_ArenaPage> {
  final Stopwatch _watch = Stopwatch()..start();
  final List<String> _logs = <String>[];
  int _seq = 0;

  void _log(String msg) {
    setState(() {
      _seq++;
      _logs.insert(0, '\${_watch.elapsedMilliseconds} ms  #$_seq  $msg');
      if (_logs.length > 6) _logs.removeLast();
    });
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final small = Theme.of(context).textTheme.bodySmall;
    return Scaffold(
      appBar: AppBar(title: const Text('手势竞技场')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
            child: Text(
              '依次尝试：点外层背景、点内层方块、长按内层、快速双击右侧区域，'
              '观察日志里的裁决时刻与胜者。',
              style: small,
            ),
          ),
          Expanded(
            flex: 3,
            child: Listener(
              onPointerDown: (_) => _log('原始 PointerDown：Listener 不参赛'),
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () => _log('外层 onTap（点内层时会被拒绝）'),
                child: Container(
                  margin: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: scheme.surfaceContainerHighest,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Center(
                    child: GestureDetector(
                      onTap: () => _log('内层 onTap 胜出：先入场先被 sweep'),
                      onLongPress: () => _log('内层 onLongPress 胜出：tap 被拒绝'),
                      child: Container(
                        width: 170,
                        height: 110,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: scheme.primary.withValues(alpha: 0.15),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Text('内层点击 / 长按区'),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: GestureDetector(
              onTap: () => _log('单击触发（等双击窗口关闭）'),
              onDoubleTap: () => _log('双击胜出，单击被拒绝'),
              child: Container(
                height: 64,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: scheme.secondaryContainer,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text('单 / 双击区：快速点两下', style: small),
              ),
            ),
          ),
          Expanded(
            flex: 2,
            child: ListView.builder(
              padding: const EdgeInsets.all(12),
              itemCount: _logs.length,
              itemBuilder: (context, i) => Text(
                _logs[i],
                style: small?.copyWith(fontFamily: 'monospace'),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
`,bs=`import 'package:flutter/material.dart';

// 安全加固模拟：只演示威胁模型与密钥生命周期，不做真实加密、不联网。
void main() => runApp(const MaterialApp(home: _SecurityPage()));

class _SecurityPage extends StatefulWidget {
  const _SecurityPage({super.key});

  @override
  State<_SecurityPage> createState() => _SecurityPageState();
}

class _SecurityPageState extends State<_SecurityPage> {
  static const String _placeholder = 'sk_demo_51H8xQ2mF7a9K4pZ'; // 占位串
  bool _hardcoded = true, _secureStore = false, _sanitize = true, _pinning = false;
  String? _key;
  final List<String> _timeline = <String>[];

  int get _risk => (_hardcoded ? 35 : 0) + (!_secureStore ? 25 : 0) +
      (!_sanitize ? 20 : 0) + (!_pinning ? 20 : 0);

  String _mask(String v) =>
      v.length <= 6 ? '****' : '\${v.substring(0, 5)}****\${v.substring(v.length - 3)}';

  void _step(String line) => setState(() {
        _timeline.insert(0, line);
        if (_timeline.length > 8) _timeline.removeLast();
      });

  void _issue() {
    setState(() => _key = _hardcoded
        ? _placeholder
        : 'runtime_\${DateTime.now().millisecondsSinceEpoch}');
    _step('签发：\${_hardcoded ? '写死在代码里（可被反编译）' : '运行时注入'}');
    _step('存储：\${_secureStore ? 'Keychain / Keystore' : 'SharedPreferences 明文'}');
  }

  void _use() {
    final key = _key;
    if (key == null) {
      _step('没有可用密钥，先签发');
      return;
    }
    _step('使用：Bearer \${_sanitize ? _mask(key) : key}');
  }

  void _revoke() {
    if (_key == null) {
      _step('密钥已为空');
      return;
    }
    setState(() => _key = null);
    _step('销毁：内存引用置空 + 服务端吊销');
  }

  Widget _toggle(String label, bool value, ValueChanged<bool> onChanged) =>
      SwitchListTile(
        dense: true,
        contentPadding: EdgeInsets.zero,
        title: Text(label, style: const TextStyle(fontSize: 13)),
        value: value,
        onChanged: onChanged,
      );

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Scaffold(
      appBar: AppBar(title: const Text('安全加固模拟')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('风险分 $_risk / 100（仅模拟，不涉及真实加密）',
                style: const TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 6),
            LinearProgressIndicator(
              value: _risk / 100,
              color: Color.lerp(Colors.green, Colors.red, _risk / 100),
              backgroundColor: scheme.surfaceContainerHighest,
            ),
            _toggle('密钥写死在代码（--dart-define 也会进产物）', _hardcoded,
                (v) => setState(() => _hardcoded = v)),
            _toggle('使用 Keychain / Keystore', _secureStore,
                (v) => setState(() => _secureStore = v)),
            _toggle('日志脱敏', _sanitize, (v) => setState(() => _sanitize = v)),
            _toggle('证书 pinning', _pinning, (v) => setState(() => _pinning = v)),
            Wrap(spacing: 8, children: [
              FilledButton(onPressed: _issue, child: const Text('签发')),
              OutlinedButton(onPressed: _use, child: const Text('使用')),
              TextButton(onPressed: _revoke, child: const Text('销毁')),
            ]),
            const Divider(),
            Expanded(
              child: ListView.builder(
                itemCount: _timeline.length,
                itemBuilder: (context, i) => Text(
                  '· \${_timeline[i]}',
                  style: const TextStyle(fontFamily: 'monospace', fontSize: 12),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
`,ys=`import 'package:flutter/material.dart';

// 无障碍与适配演示：语义树 + 动态字号 + RTL。
// 打开系统读屏（TalkBack / VoiceOver）能听到每个节点的朗读内容。
void main() => runApp(const MaterialApp(home: _A11yPage()));

class _A11yPage extends StatefulWidget {
  const _A11yPage({super.key});

  @override
  State<_A11yPage> createState() => _A11yPageState();
}

class _A11yPageState extends State<_A11yPage> {
  double _scale = 1.0;
  bool _rtl = false;
  bool _notify = true;

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Directionality(
      textDirection: _rtl ? TextDirection.rtl : TextDirection.ltr,
      child: Scaffold(
        appBar: AppBar(title: const Text('无障碍与适配')),
        body: MediaQuery(
          data: MediaQuery.of(context).copyWith(
            textScaler: TextScaler.linear(_scale),
          ),
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Text('字号缩放 \${_scale.toStringAsFixed(1)}x · RTL：\${_rtl ? '开' : '关'}'),
              Slider(
                value: _scale,
                min: 1,
                max: 2,
                divisions: 4,
                label: '\${_scale.toStringAsFixed(1)}x',
                onChanged: (v) => setState(() => _scale = v),
              ),
              SwitchListTile(
                dense: true,
                contentPadding: EdgeInsets.zero,
                title: const Text('RTL 布局（模拟阿拉伯语）'),
                value: _rtl,
                onChanged: (v) => setState(() => _rtl = v),
              ),
              const SizedBox(height: 8),
              // 一个语义节点说完卡片内容；内部图标与数字被排除，避免重复朗读
              Semantics(
                label: '余额 128.50 元，双击查看明细',
                button: true,
                child: ExcludeSemantics(
                  child: Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: scheme.primaryContainer,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      children: [
                        Icon(Icons.account_balance_wallet,
                            color: scheme.onPrimaryContainer),
                        const SizedBox(width: 12),
                        Text(
                          '128.50',
                          style: TextStyle(
                            fontSize: 28,
                            color: scheme.onPrimaryContainer,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              // 标题 + 副标题 + 开关合并成一个朗读节点
              MergeSemantics(
                child: SwitchListTile(
                  title: const Text('消息提醒'),
                  subtitle: const Text('每 30 分钟汇总一次'),
                  value: _notify,
                  onChanged: (v) => setState(() => _notify = v),
                ),
              ),
              const SizedBox(height: 12),
              // 方向性内边距 + 可镜像图标：切 RTL 后自动镜像
              Container(
                padding: const EdgeInsetsDirectional.only(start: 16, end: 4),
                decoration: BoxDecoration(
                  color: scheme.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Row(
                  children: [
                    const Expanded(child: Text('方向性边距：start 16 / end 4')),
                    Icon(Icons.chevron_right,
                        matchTextDirection: true, color: scheme.primary),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`,ks=`import 'package:flutter/material.dart';
// 技术风险矩阵：成熟度 × 收益 + 「试点 / 回滚」开关。
// 规则：不试点就不投入；没有回滚就不许放量。
void main() => runApp(const MaterialApp(home: _RiskMatrixPage()));

class _Tech {
  const _Tech(this.name, this.maturity, this.payoff, this.note);
  final String name;
  final int maturity; // 1~5，越高越成熟
  final int payoff; // 1~5，越高收益越大
  final String note;
}

const List<_Tech> _techs = <_Tech>[
  _Tech('Web / Wasm', 4, 4, 'skwasm 要 WasmGC，老浏览器留 JS 回退'),
  _Tech('Flutter GPU', 2, 5, '实验 API，适合 3D / 自定义渲染原型'),
  _Tech('Dart 宏', 2, 3, '尚未稳定，代码生成仍靠 build_runner'),
  _Tech('端侧 AI', 3, 4, '量化 + isolate 推理，注意内存与发热'),
];

class _RiskMatrixPage extends StatefulWidget {
  const _RiskMatrixPage({super.key});
  @override
  State<_RiskMatrixPage> createState() => _RiskMatrixPageState();
}

class _RiskMatrixPageState extends State<_RiskMatrixPage> {
  final Set<int> _pilot = <int>{0};
  final Set<int> _rollback = <int>{0};

  void _set(Set<int> target, int i, bool v) => setState(() {
        if (v) {
          target.add(i);
        } else {
          target.remove(i);
        }
      });

  String _verdict(int i) {
    final t = _techs[i];
    if (!_pilot.contains(i)) return '观察：暂不排期';
    if (!_rollback.contains(i)) return '高风险：先补回滚开关';
    if (t.payoff >= 4 && t.maturity <= 2) return '灰度试点：1% 小流量验证';
    return '逐步放量：有回滚兜底';
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final risky = _pilot.where((i) => !_rollback.contains(i)).length;
    return Scaffold(
      appBar: AppBar(title: const Text('技术风险矩阵')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Text('成熟度越低、收益越高，越只能灰度试点；没有回滚就不许放量。',
              style: TextStyle(color: scheme.onSurfaceVariant)),
          const SizedBox(height: 8),
          for (var i = 0; i < _techs.length; i++)
            Card(
              margin: const EdgeInsets.symmetric(vertical: 6),
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Row(children: <Widget>[
                      Expanded(
                        child: Text(_techs[i].name,
                            style: const TextStyle(fontWeight: FontWeight.w600)),
                      ),
                      Text('成熟 \${_techs[i].maturity} · 收益 \${_techs[i].payoff}'),
                    ]),
                    Text(_techs[i].note,
                        style: TextStyle(fontSize: 12, color: scheme.onSurfaceVariant)),
                    const SizedBox(height: 4),
                    Wrap(spacing: 8, children: <Widget>[
                      FilterChip(
                        label: const Text('灰度试点'),
                        selected: _pilot.contains(i),
                        onSelected: (v) => _set(_pilot, i, v),
                      ),
                      FilterChip(
                        label: const Text('可回滚'),
                        selected: _rollback.contains(i),
                        onSelected: (v) => _set(_rollback, i, v),
                      ),
                    ]),
                    Text(
                      _verdict(i),
                      style: TextStyle(
                        color: !_pilot.contains(i)
                            ? scheme.onSurfaceVariant
                            : !_rollback.contains(i)
                                ? scheme.error
                                : scheme.primary,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          const Divider(height: 24),
          Text('已试点 \${_pilot.length} 项 · 高风险 $risky 项 · 回滚覆盖 \${_rollback.length} 项',
              style: const TextStyle(fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}
`,Ps=`import 'package:flutter/material.dart';
// 选型打分器：拖动权重，实时计算 Flutter / KMP / RN 的加权分。
// 一票否决项不参与平均，先过硬门槛再算分。
void main() => runApp(const MaterialApp(home: _ScorePage()));

const List<String> _dims = <String>['性能', '生态', '原生能力', '团队栈', '多端覆盖'];
/// 每个候选在各维度的 1~5 分，顺序与 _dims 一致。
const Map<String, List<int>> _scores = <String, List<int>>{
  'Flutter': <int>[4, 4, 3, 4, 5],
  'KMP': <int>[5, 3, 5, 2, 2],
  'React Native': <int>[3, 5, 3, 4, 3],
};

class _ScorePage extends StatefulWidget {
  const _ScorePage({super.key});
  @override
  State<_ScorePage> createState() => _ScorePageState();
}

class _ScorePageState extends State<_ScorePage> {
  List<int> _weights = <int>[25, 20, 15, 20, 20];

  double _score(String name) {
    final scores = _scores[name]!;
    var weighted = 0;
    var total = 0;
    for (var i = 0; i < _dims.length; i++) {
      weighted += _weights[i] * scores[i];
      total += _weights[i];
    }
    return total == 0 ? 0 : weighted / (total * 5) * 100;
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final ranked = _scores.keys.toList()
      ..sort((a, b) => _score(b).compareTo(_score(a)));
    return Scaffold(
      appBar: AppBar(title: const Text('技术选型打分器')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Text('拖动权重，观察结论如何翻转；评分是同一套业务约束下的相对值。',
              style: TextStyle(color: scheme.onSurfaceVariant)),
          const SizedBox(height: 8),
          for (var i = 0; i < _dims.length; i++)
            Row(children: <Widget>[
              SizedBox(width: 68, child: Text(_dims[i])),
              Expanded(
                child: Slider(
                  value: _weights[i].toDouble(),
                  max: 30,
                  divisions: 30,
                  label: '\${_weights[i]}',
                  onChanged: (v) => setState(() => _weights[i] = v.round()),
                ),
              ),
              SizedBox(
                  width: 24,
                  child: Text('\${_weights[i]}', textAlign: TextAlign.end)),
            ]),
          Row(children: <Widget>[
            Text('权重和 \${_weights.reduce((a, b) => a + b)}'),
            const Spacer(),
            TextButton(
              onPressed: () =>
                  setState(() => _weights = <int>[25, 20, 15, 20, 20]),
              child: const Text('重置'),
            ),
          ]),
          const Divider(),
          for (final name in ranked)
            Card(
              margin: const EdgeInsets.symmetric(vertical: 6),
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Row(children: <Widget>[
                      if (name == ranked.first)
                        Padding(
                          padding: const EdgeInsets.only(right: 6),
                          child: Icon(Icons.emoji_events,
                              size: 18, color: scheme.primary),
                        ),
                      Expanded(
                        child: Text(name,
                            style: const TextStyle(fontWeight: FontWeight.w600)),
                      ),
                      Text('\${_score(name).toStringAsFixed(1)} 分'),
                    ]),
                    const SizedBox(height: 8),
                    LinearProgressIndicator(
                      value: _score(name) / 100,
                      minHeight: 8,
                    ),
                  ],
                ),
              ),
            ),
          const SizedBox(height: 8),
          Text('当前 \${ranked.first} 领先。把「原生能力」权重拉到 30 以上，KMP 会反超。',
              style: TextStyle(color: scheme.primary)),
        ],
      ),
    );
  }
}
`,Ts=`import 'package:flutter/material.dart';

/// 桌面界面组件定制最小示例：
/// 1) 用 ThemeExtension 承载自定义 token（颜色 / 间距 / 圆角 / 控件高度）
/// 2) 按钮补齐 hover、光标与焦点环
/// 3) 用 LayoutBuilder 断点切换单栏 / 侧栏 / 双栏
void main() => runApp(const DeskUiApp());

class DeskUiApp extends StatelessWidget {
  const DeskUiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: const Color(0xFF3B82F6),
        extensions: const <ThemeExtension<dynamic>>[AppTokens.standard],
      ),
      home: const DeskUiHome(),
    );
  }
}

@immutable
class AppTokens extends ThemeExtension<AppTokens> {
  const AppTokens({
    required this.brand,
    required this.gap,
    required this.radius,
  });

  static const AppTokens standard =
      AppTokens(brand: Color(0xFF3B82F6), gap: 16, radius: 14);

  final Color brand;
  final double gap;
  final double radius;

  @override
  AppTokens copyWith({Color? brand, double? gap, double? radius}) => AppTokens(
        brand: brand ?? this.brand,
        gap: gap ?? this.gap,
        radius: radius ?? this.radius,
      );

  @override
  AppTokens lerp(ThemeExtension<AppTokens>? other, double t) {
    if (other is! AppTokens) return this;
    return AppTokens(
      brand: Color.lerp(brand, other.brand, t)!,
      gap: gap + (other.gap - gap) * t,
      radius: radius + (other.radius - radius) * t,
    );
  }
}

class DeskUiHome extends StatefulWidget {
  const DeskUiHome({super.key});
  @override
  State<DeskUiHome> createState() => _DeskUiHomeState();
}

class _DeskUiHomeState extends State<DeskUiHome> {
  bool _compact = false;

  @override
  Widget build(BuildContext context) {
    final tokens = AppTokens.standard
        .copyWith(gap: _compact ? 8 : 16, radius: _compact ? 6 : 14);
    return Theme(
      data: Theme.of(context).copyWith(
        extensions: <ThemeExtension<dynamic>>[tokens],
      ),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('桌面界面组件定制'),
          actions: <Widget>[
            Padding(
              padding: const EdgeInsets.only(right: 12),
              child: FilterChip(
                label: const Text('紧凑密度'),
                selected: _compact,
                onSelected: (v) => setState(() => _compact = v),
              ),
            ),
          ],
        ),
        body: LayoutBuilder(
          builder: (context, constraints) {
            final compact = constraints.maxWidth < 600;
            final expanded = constraints.maxWidth >= 840;
            final t = Theme.of(context).extension<AppTokens>()!;
            return Padding(
              padding: EdgeInsets.all(t.gap),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    '宽度 \${constraints.maxWidth.toStringAsFixed(0)} · '
                    '\${compact ? '单栏' : expanded ? '双栏' : '侧栏 + 单栏'}',
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                  SizedBox(height: t.gap),
                  Wrap(
                    spacing: t.gap,
                    runSpacing: t.gap,
                    children: <Widget>[
                      DeskButton(
                        label: '主操作',
                        primary: true,
                        onPressed: () {},
                      ),
                      DeskButton(label: '次操作', onPressed: () {}),
                    ],
                  ),
                  SizedBox(height: t.gap),
                  Expanded(
                    child: compact
                        ? _panel(context, '内容区：拖动窗口或缩窄浏览器，断点会自动切换布局')
                        : Row(
                            children: <Widget>[
                              SizedBox(
                                width: 220,
                                child: _panel(context, '侧栏：模块列表'),
                              ),
                              SizedBox(width: t.gap),
                              if (expanded) ...<Widget>[
                                Expanded(child: _panel(context, '左栏：列表')),
                                SizedBox(width: t.gap),
                                Expanded(child: _panel(context, '右栏：详情')),
                              ] else
                                Expanded(child: _panel(context, '内容区')),
                            ],
                          ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }

  Widget _panel(BuildContext context, String text) {
    final t = Theme.of(context).extension<AppTokens>()!;
    return Container(
      alignment: Alignment.center,
      padding: EdgeInsets.all(t.gap),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(t.radius),
      ),
      child: Text(text, textAlign: TextAlign.center),
    );
  }
}

class DeskButton extends StatefulWidget {
  const DeskButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.primary = false,
  });

  final String label;
  final VoidCallback onPressed;
  final bool primary;

  @override
  State<DeskButton> createState() => _DeskButtonState();
}

class _DeskButtonState extends State<DeskButton> {
  bool _hovered = false;
  bool _focused = false;

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final t = Theme.of(context).extension<AppTokens>()!;
    final base = widget.primary ? t.brand : scheme.surfaceContainerHighest;
    final fg = widget.primary ? Colors.white : scheme.onSurface;
    return Focus(
      onFocusChange: (v) => setState(() => _focused = v),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        onEnter: (_) => setState(() => _hovered = true),
        onExit: (_) => setState(() => _hovered = false),
        child: GestureDetector(
          onTap: widget.onPressed,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 120),
            height: 40,
            padding: const EdgeInsets.symmetric(horizontal: 18),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: _hovered
                  ? Color.alphaBlend(fg.withValues(alpha: 0.1), base)
                  : base,
              borderRadius: BorderRadius.circular(t.radius),
              border: Border.all(
                color: _focused ? scheme.primary : scheme.outlineVariant,
                width: _focused ? 2 : 1,
              ),
            ),
            child: Text(widget.label, style: TextStyle(color: fg)),
          ),
        ),
      ),
    );
  }
}
`,Cs={"dart-variables":wo,"dart-functions":Lo,"dart-classes":Do,"dart-async":Io,"widget-stateless":Fo,"widget-stateful":Wo,"widget-lifecycle":zo,"widget-composition-card":Eo,"layout-basics":Mo,"layout-flex":Vo,"widgets-catalog":No,"state-inherited":Ro,"router-basic":Ho,"network-http":Oo,"custom-paint-widget":Uo,"animation-basic":qo,"future-stream-playground":jo,"performance-basics":Go,"performance-diagnostics":Ko,"jank-diagnosis":Jo,"memory-governance":Xo,"startup-optimization":Qo,"app-size":Yo,"scroll-performance":Zo,"performance-testing":es,impeller:ns,"renderobject-layout":ts,painting:is,"fragment-shader":as,"animation-advanced":os,"platform-view":ss,"clean-architecture":rs,"state-management-deep":ls,modularization:cs,testing:ds,observability:us,"code-quality":ms,pigeon:hs,"native-plugin":ps,"system-capabilities":gs,"multi-platform":fs,isolate:vs,ffi:_s,"data-layer":Ss,gestures:xs,security:bs,"a11y-i18n":ys,frontier:ks,selection:Ps,"desktop-ui":Ts},Bs=["href"],$s=["src"],As=f({__name:"DartPad",props:{id:{},sample:{},example:{},code:{},height:{default:480},run:{type:Boolean,default:!1},theme:{default:"auto"}},setup(e){const n=e,{isDark:t}=ye(),i=C(),a=C(),r=C(!1),l=C(!1),u=b(()=>n.code??(n.example?Cs[n.example]:void 0)),m=b(()=>n.theme==="auto"?t.value?"dark":"light":n.theme);function y(w){const D=new URLSearchParams({theme:m.value});return w&&D.set("embed","true"),n.id&&D.set("id",n.id),n.sample&&D.set("sample",n.sample),n.run&&D.set("run","true"),`https://dartpad.dev/?${D.toString()}`}const T=b(()=>y(!0)),S=b(()=>y(!1)),k=b(()=>typeof n.height=="number"?`${n.height}px`:n.height);function B(w){var D,F,z;w.origin!=="https://dartpad.dev"||!u.value||((D=w.data)==null?void 0:D.type)==="ready"&&((z=(F=a.value)==null?void 0:F.contentWindow)==null||z.postMessage({type:"sourceCode",sourceCode:u.value},"https://dartpad.dev"))}let $;return N(()=>{l.value=window.matchMedia("(max-width: 640px)").matches,!l.value&&(window.addEventListener("message",B),$=new IntersectionObserver(w=>{w.some(D=>D.isIntersecting)&&(r.value=!0,$==null||$.disconnect())},{rootMargin:"256px"}),i.value&&$.observe(i.value))}),Ae(()=>{window.removeEventListener("message",B),$==null||$.disconnect()}),(w,D)=>(o(),d("div",{ref_key:"wrapper",ref:i,class:"dartpad"},[l.value?(o(),d("a",{key:0,class:"dartpad__link",href:S.value,target:"_blank",rel:"noopener noreferrer"}," 在 DartPad 中打开并运行此示例 → ",8,Bs)):r.value?(o(),d("iframe",{key:1,ref_key:"frame",ref:a,src:T.value,style:J({height:k.value}),class:"dartpad__frame",title:"DartPad 在线运行",allow:"clipboard-write"},null,12,$s)):(o(),d("div",{key:2,class:"dartpad__placeholder",style:J({height:k.value})}," DartPad 运行环境将在滚动到此处时加载… ",4))],512))}}),ws=x(As,[["__scopeId","data-v-69667923"]]),Ds={extends:Ao,enhanceApp({app:e}){e.component("DartPad",ws)}};export{Ds as R,da as c,P as u};
