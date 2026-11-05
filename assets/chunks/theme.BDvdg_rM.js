const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.B89i2LSc.js","assets/chunks/framework.CnqZ57Z3.js"])))=>i.map(i=>d[i]);
import{d as f,c,r as d,n as A,o as a,a as O,t as L,b as v,w as h,T as pn,e as g,_ as x,u as kn,i as zn,f as En,g as mn,h as b,j as m,k as r,l as q,m as sn,p as C,q as R,s as Q,v as V,x as hn,y as gn,z as Rn,A as Vn,F as I,B as M,C as U,D as Z,E as _,G as Pn,H as z,I as Tn,J,K as H,L as nn,M as Nn,N as X,O as ln,P as Cn,Q as wn,R as en,S as Hn,U as On,V as qn,W as Bn,X as An,Y as Un,Z as jn,$ as $n,a0 as Gn,a1 as Kn}from"./framework.CnqZ57Z3.js";const Xn=f({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(a(),c("span",{class:A(["VPBadge",n.type])},[d(e.$slots,"default",{},()=>[O(L(n.text),1)])],2))}}),Yn={key:0,class:"VPBackdrop"},Qn=f({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(a(),v(pn,{name:"fade"},{default:h(()=>[n.show?(a(),c("div",Yn)):g("",!0)]),_:1}))}}),Zn=x(Qn,[["__scopeId","data-v-b4b50216"]]),P=kn;function Jn(n,e){let t,i=!1;return()=>{t&&clearTimeout(t),i?t=setTimeout(n,e):(n(),(i=!0)&&setTimeout(()=>i=!1,e))}}function dn(n){return n.startsWith("/")?n:`/${n}`}function fn(n){const{pathname:e,search:t,hash:i,protocol:o}=new URL(n,"http://a.com");if(zn(n)||n.startsWith("#")||!o.startsWith("http")||!En(e))return n;const{site:s}=P(),l=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${t}${i}`);return mn(l)}function G({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:i,theme:o,hash:s}=P(),l=b(()=>{var p,y;return{label:(p=e.value.locales[t.value])==null?void 0:p.label,link:((y=e.value.locales[t.value])==null?void 0:y.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:b(()=>Object.entries(e.value.locales).flatMap(([p,y])=>l.value.label===y.label?[]:{text:y.label,link:ne(y.link||(p==="root"?"/":`/${p}/`),o.value.i18nRouting!==!1&&n,i.value.relativePath.slice(l.value.link.length-1),!e.value.cleanUrls)+s.value})),currentLang:l}}function ne(n,e,t,i){return e?n.replace(/\/$/,"")+dn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):n}const ee={class:"NotFound"},te={class:"code"},ie={class:"title"},oe={class:"quote"},ae={class:"action"},re=["href","aria-label"],se=f({__name:"NotFound",setup(n){const{theme:e}=P(),{currentLang:t}=G();return(i,o)=>{var s,l,u,p,y;return a(),c("div",ee,[m("p",te,L(((s=r(e).notFound)==null?void 0:s.code)??"404"),1),m("h1",ie,L(((l=r(e).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=m("div",{class:"divider"},null,-1)),m("blockquote",oe,L(((u=r(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),m("div",ae,[m("a",{class:"link",href:r(mn)(r(t).link),"aria-label":((p=r(e).notFound)==null?void 0:p.linkLabel)??"go to home"},L(((y=r(e).notFound)==null?void 0:y.linkText)??"Take me home"),9,re)])])}}}),le=x(se,[["__scopeId","data-v-c41b0d2c"]]);function Ln(n,e){if(Array.isArray(n))return K(n);if(n==null)return[];e=dn(e);const t=Object.keys(n).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>e.startsWith(dn(o))),i=t?n[t]:[];return Array.isArray(i)?K(i):K(i.items,i.base)}function de(n){const e=[];let t=0;for(const i in n){const o=n[i];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function ce(n){const e=[];function t(i){for(const o of i)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(n),e}function cn(n,e){return Array.isArray(e)?e.some(t=>cn(n,t)):q(n,e.link)?!0:e.items?cn(n,e.items):!1}function K(n,e){return[...n].map(t=>{const i={...t},o=i.base||e;return o&&i.link&&(i.link=o+i.link),i.items&&(i.items=K(i.items,o)),i})}function N(){const{frontmatter:n,page:e,theme:t}=P(),i=sn("(min-width: 960px)"),o=C(!1),s=b(()=>{const $=t.value.sidebar,D=e.value.relativePath;return $?Ln($,D):[]}),l=C(s.value);R(s,($,D)=>{JSON.stringify($)!==JSON.stringify(D)&&(l.value=s.value)});const u=b(()=>n.value.sidebar!==!1&&l.value.length>0&&n.value.layout!=="home"),p=b(()=>y?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),y=b(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),T=b(()=>u.value&&i.value),S=b(()=>u.value?de(l.value):[]);function k(){o.value=!0}function w(){o.value=!1}function B(){o.value?w():k()}return{isOpen:o,sidebar:l,sidebarGroups:S,hasSidebar:u,hasAside:y,leftAside:p,isSidebarEnabled:T,open:k,close:w,toggle:B}}function ue(n,e){let t;Q(()=>{t=n.value?document.activeElement:void 0}),V(()=>{window.addEventListener("keyup",i)}),hn(()=>{window.removeEventListener("keyup",i)});function i(o){o.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function pe(n){const{page:e,hash:t}=P(),i=C(!1),o=b(()=>n.value.collapsed!=null),s=b(()=>!!n.value.link),l=C(!1),u=()=>{l.value=q(e.value.relativePath,n.value.link)};R([e,n,t],u),V(u);const p=b(()=>l.value?!0:n.value.items?cn(e.value.relativePath,n.value.items):!1),y=b(()=>!!(n.value.items&&n.value.items.length));Q(()=>{i.value=!!(o.value&&n.value.collapsed)}),gn(()=>{(l.value||p.value)&&(i.value=!1)});function T(){o.value&&(i.value=!i.value)}return{collapsed:i,collapsible:o,isLink:s,isActiveLink:l,hasActiveLink:p,hasChildren:y,toggle:T}}function me(){const{hasSidebar:n}=N(),e=sn("(min-width: 960px)"),t=sn("(min-width: 1280px)");return{isAsideEnabled:b(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const he=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,un=[];function Dn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function _n(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const i=Number(t.tagName[1]);return{element:t,title:ge(t),link:"#"+t.id,level:i}});return fe(e,n)}function ge(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(he.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function fe(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[i,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Se(n,i,o)}function _e(n,e){const{isAsideEnabled:t}=me(),i=Jn(s,100);let o=null;V(()=>{requestAnimationFrame(s),window.addEventListener("scroll",i)}),Rn(()=>{l(location.hash)}),hn(()=>{window.removeEventListener("scroll",i)});function s(){if(!t.value)return;const u=window.scrollY,p=window.innerHeight,y=document.body.offsetHeight,T=Math.abs(u+p-y)<1,S=un.map(({element:w,link:B})=>({link:B,top:ve(w)})).filter(({top:w})=>!Number.isNaN(w)).sort((w,B)=>w.top-B.top);if(!S.length){l(null);return}if(u<1){l(null);return}if(T){l(S[S.length-1].link);return}let k=null;for(const{link:w,top:B}of S){if(B>u+Vn()+4)break;k=w}l(k)}function l(u){o&&o.classList.remove("active"),u==null?o=null:o=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const p=o;p?(p.classList.add("active"),e.value.style.top=p.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ve(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function Se(n,e,t){un.length=0;const i=[],o=[];return n.forEach(s=>{const l={...s,children:[]};let u=o[o.length-1];for(;u&&u.level>=l.level;)o.pop(),u=o[o.length-1];if(l.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){o.push({level:l.level,shouldIgnore:!0});return}l.level>t||l.level<e||(un.push({element:l.element,link:l.link}),u?u.children.push(l):i.push(l),o.push(l))}),i}const xe=["href","title"],be=f({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const i=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(i));o==null||o.focus({preventScroll:!0})}return(t,i)=>{const o=U("VPDocOutlineItem",!0);return a(),c("ul",{class:A(["VPDocOutlineItem",n.root?"root":"nested"])},[(a(!0),c(I,null,M(n.headers,({children:s,link:l,title:u})=>(a(),c("li",null,[m("a",{class:"outline-link",href:l,onClick:e,title:u},L(u),9,xe),s!=null&&s.length?(a(),v(o,{key:0,headers:s},null,8,["headers"])):g("",!0)]))),256))],2)}}}),In=x(be,[["__scopeId","data-v-150ad473"]]),ye={class:"content"},ke={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pe=f({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=P(),i=Pn([]);Z(()=>{i.value=_n(e.value.outline??t.value.outline)});const o=C(),s=C();return _e(o,s),(l,u)=>(a(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:A(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:o},[m("div",ye,[m("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),m("div",ke,L(r(Dn)(r(t))),1),_(In,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),Te=x(Pe,[["__scopeId","data-v-c3ded439"]]),Ce={class:"VPDocAsideCarbonAds"},we=f({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,i)=>(a(),c("div",Ce,[_(r(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Be={class:"VPDocAside"},Ae=f({__name:"VPDocAside",setup(n){const{theme:e}=P();return(t,i)=>(a(),c("div",Be,[d(t.$slots,"aside-top",{},void 0,!0),d(t.$slots,"aside-outline-before",{},void 0,!0),_(Te),d(t.$slots,"aside-outline-after",{},void 0,!0),i[0]||(i[0]=m("div",{class:"spacer"},null,-1)),d(t.$slots,"aside-ads-before",{},void 0,!0),r(e).carbonAds?(a(),v(we,{key:0,"carbon-ads":r(e).carbonAds},null,8,["carbon-ads"])):g("",!0),d(t.$slots,"aside-ads-after",{},void 0,!0),d(t.$slots,"aside-bottom",{},void 0,!0)]))}}),$e=x(Ae,[["__scopeId","data-v-20e8a385"]]);function Le(){const{theme:n,page:e}=P();return b(()=>{const{text:t="Edit this page",pattern:i=""}=n.value.editLink||{};let o;return typeof i=="function"?o=i(e.value):o=i.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function De(){const{page:n,theme:e,frontmatter:t}=P();return b(()=>{var y,T,S,k,w,B,$,D;const i=Ln(e.value.sidebar,n.value.relativePath),o=ce(i),s=Ie(o,F=>F.link.replace(/[?#].*$/,"")),l=s.findIndex(F=>q(n.value.relativePath,F.link)),u=((y=e.value.docFooter)==null?void 0:y.prev)===!1&&!t.value.prev||t.value.prev===!1,p=((T=e.value.docFooter)==null?void 0:T.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((S=s[l-1])==null?void 0:S.docFooterText)??((k=s[l-1])==null?void 0:k.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((w=s[l-1])==null?void 0:w.link)},next:p?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((B=s[l+1])==null?void 0:B.docFooterText)??(($=s[l+1])==null?void 0:$.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((D=s[l+1])==null?void 0:D.link)}}})}function Ie(n,e){const t=new Set;return n.filter(i=>{const o=e(i);return t.has(o)?!1:t.add(o)})}const E=f({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=b(()=>e.tag??(e.href?"a":"span")),i=b(()=>e.href&&Tn.test(e.href)||e.target==="_blank");return(o,s)=>(a(),v(z(t.value),{class:A(["VPLink",{link:n.href,"vp-external-link-icon":i.value,"no-icon":n.noIcon}]),href:n.href?r(fn)(n.href):void 0,target:n.target??(i.value?"_blank":void 0),rel:n.rel??(i.value?"noreferrer":void 0)},{default:h(()=>[d(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Fe={class:"VPLastUpdated"},Me=["datetime"],We=f({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:i}=P(),o=b(()=>new Date(t.value.lastUpdated)),s=b(()=>o.value.toISOString()),l=C("");return V(()=>{Q(()=>{var u,p,y;l.value=new Intl.DateTimeFormat((p=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&p.forceLocale?i.value:void 0,((y=e.value.lastUpdated)==null?void 0:y.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(u,p)=>{var y;return a(),c("p",Fe,[O(L(((y=r(e).lastUpdated)==null?void 0:y.text)||r(e).lastUpdatedText||"Last updated")+": ",1),m("time",{datetime:s.value},L(l.value),9,Me)])}}}),ze=x(We,[["__scopeId","data-v-4adf0913"]]),Ee={key:0,class:"VPDocFooter"},Re={key:0,class:"edit-info"},Ve={key:0,class:"edit-link"},Ne={key:1,class:"last-updated"},He={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Oe={class:"pager"},qe=["innerHTML"],Ue=["innerHTML"],je={class:"pager"},Ge=["innerHTML"],Ke=["innerHTML"],Xe=f({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:i}=P(),o=Le(),s=De(),l=b(()=>e.value.editLink&&i.value.editLink!==!1),u=b(()=>t.value.lastUpdated),p=b(()=>l.value||u.value||s.value.prev||s.value.next);return(y,T)=>{var S,k,w,B;return p.value?(a(),c("footer",Ee,[d(y.$slots,"doc-footer-before",{},void 0,!0),l.value||u.value?(a(),c("div",Re,[l.value?(a(),c("div",Ve,[_(E,{class:"edit-link-button",href:r(o).url,"no-icon":!0},{default:h(()=>[T[0]||(T[0]=m("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),O(" "+L(r(o).text),1)]),_:1},8,["href"])])):g("",!0),u.value?(a(),c("div",Ne,[_(ze)])):g("",!0)])):g("",!0),(S=r(s).prev)!=null&&S.link||(k=r(s).next)!=null&&k.link?(a(),c("nav",He,[T[1]||(T[1]=m("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),m("div",Oe,[(w=r(s).prev)!=null&&w.link?(a(),v(E,{key:0,class:"pager-link prev",href:r(s).prev.link},{default:h(()=>{var $;return[m("span",{class:"desc",innerHTML:(($=r(e).docFooter)==null?void 0:$.prev)||"Previous page"},null,8,qe),m("span",{class:"title",innerHTML:r(s).prev.text},null,8,Ue)]}),_:1},8,["href"])):g("",!0)]),m("div",je,[(B=r(s).next)!=null&&B.link?(a(),v(E,{key:0,class:"pager-link next",href:r(s).next.link},{default:h(()=>{var $;return[m("span",{class:"desc",innerHTML:(($=r(e).docFooter)==null?void 0:$.next)||"Next page"},null,8,Ge),m("span",{class:"title",innerHTML:r(s).next.text},null,8,Ke)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),Ye=x(Xe,[["__scopeId","data-v-71ed9b76"]]),Qe={class:"container"},Ze={class:"aside-container"},Je={class:"aside-content"},nt={class:"content"},et={class:"content-container"},tt={class:"main"},it=f({__name:"VPDoc",setup(n){const{theme:e}=P(),t=J(),{hasSidebar:i,hasAside:o,leftAside:s}=N(),l=b(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,p)=>{const y=U("Content");return a(),c("div",{class:A(["VPDoc",{"has-sidebar":r(i),"has-aside":r(o)}])},[d(u.$slots,"doc-top",{},void 0,!0),m("div",Qe,[r(o)?(a(),c("div",{key:0,class:A(["aside",{"left-aside":r(s)}])},[p[0]||(p[0]=m("div",{class:"aside-curtain"},null,-1)),m("div",Ze,[m("div",Je,[_($e,null,{"aside-top":h(()=>[d(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),m("div",nt,[m("div",et,[d(u.$slots,"doc-before",{},void 0,!0),m("main",tt,[_(y,{class:A(["vp-doc",[l.value,r(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),_(Ye,null,{"doc-footer-before":h(()=>[d(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(u.$slots,"doc-after",{},void 0,!0)])])]),d(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ot=x(it,[["__scopeId","data-v-e994cc46"]]),at=f({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=b(()=>e.href&&Tn.test(e.href)),i=b(()=>e.tag||(e.href?"a":"button"));return(o,s)=>(a(),v(z(i.value),{class:A(["VPButton",[n.size,n.theme]]),href:n.href?r(fn)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:h(()=>[O(L(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),rt=x(at,[["__scopeId","data-v-c7d71f1c"]]),st=["src","alt"],lt=f({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const i=U("VPImage",!0);return n.image?(a(),c(I,{key:0},[typeof n.image=="string"||"src"in n.image?(a(),c("img",H({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:r(mn)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,st)):(a(),c(I,{key:1},[_(i,H({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),_(i,H({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),Y=x(lt,[["__scopeId","data-v-b819f538"]]),dt={class:"container"},ct={class:"main"},ut={class:"heading"},pt=["innerHTML"],mt=["innerHTML"],ht=["innerHTML"],gt={key:0,class:"actions"},ft={key:0,class:"image"},_t={class:"image-container"},vt=f({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=nn("hero-image-slot-exists");return(t,i)=>(a(),c("div",{class:A(["VPHero",{"has-image":n.image||r(e)}])},[m("div",dt,[m("div",ct,[d(t.$slots,"home-hero-info-before",{},void 0,!0),d(t.$slots,"home-hero-info",{},()=>[m("h1",ut,[n.name?(a(),c("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,pt)):g("",!0),n.text?(a(),c("span",{key:1,innerHTML:n.text,class:"text"},null,8,mt)):g("",!0)]),n.tagline?(a(),c("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,ht)):g("",!0)],!0),d(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(a(),c("div",gt,[(a(!0),c(I,null,M(n.actions,o=>(a(),c("div",{key:o.link,class:"action"},[_(rt,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||r(e)?(a(),c("div",ft,[m("div",_t,[i[0]||(i[0]=m("div",{class:"image-bg"},null,-1)),d(t.$slots,"home-hero-image",{},()=>[n.image?(a(),v(Y,{key:0,class:"image-src",image:n.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),St=x(vt,[["__scopeId","data-v-53a3d2f1"]]),xt=f({__name:"VPHomeHero",setup(n){const{frontmatter:e}=P();return(t,i)=>r(e).hero?(a(),v(St,{key:0,class:"VPHomeHero",name:r(e).hero.name,text:r(e).hero.text,tagline:r(e).hero.tagline,image:r(e).hero.image,actions:r(e).hero.actions},{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),bt={class:"box"},yt={key:0,class:"icon"},kt=["innerHTML"],Pt=["innerHTML"],Tt=["innerHTML"],Ct={key:4,class:"link-text"},wt={class:"link-text-value"},Bt=f({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(a(),v(E,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:h(()=>[m("article",bt,[typeof n.icon=="object"&&n.icon.wrap?(a(),c("div",yt,[_(Y,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(a(),v(Y,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(a(),c("div",{key:2,class:"icon",innerHTML:n.icon},null,8,kt)):g("",!0),m("h2",{class:"title",innerHTML:n.title},null,8,Pt),n.details?(a(),c("p",{key:3,class:"details",innerHTML:n.details},null,8,Tt)):g("",!0),n.linkText?(a(),c("div",Ct,[m("p",wt,[O(L(n.linkText)+" ",1),t[0]||(t[0]=m("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),At=x(Bt,[["__scopeId","data-v-8d026376"]]),$t={key:0,class:"VPFeatures"},Lt={class:"container"},Dt={class:"items"},It=f({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=b(()=>{const i=e.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,o)=>n.features?(a(),c("div",$t,[m("div",Lt,[m("div",Dt,[(a(!0),c(I,null,M(n.features,s=>(a(),c("div",{key:s.title,class:A(["item",[t.value]])},[_(At,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),Ft=x(It,[["__scopeId","data-v-400b30c0"]]),Mt=f({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=P();return(t,i)=>r(e).features?(a(),v(Ft,{key:0,class:"VPHomeFeatures",features:r(e).features},null,8,["features"])):g("",!0)}}),Wt=f({__name:"VPHomeContent",setup(n){const{width:e}=Nn({initialWidth:0,includeScrollbar:!1});return(t,i)=>(a(),c("div",{class:"vp-doc container",style:X(r(e)?{"--vp-offset":`calc(50% - ${r(e)/2}px)`}:{})},[d(t.$slots,"default",{},void 0,!0)],4))}}),zt=x(Wt,[["__scopeId","data-v-58bb86ab"]]),Et=f({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=P();return(i,o)=>{const s=U("Content");return a(),c("div",{class:A(["VPHome",{"external-link-icon-enabled":r(t).externalLinkIcon}])},[d(i.$slots,"home-hero-before",{},void 0,!0),_(xt,null,{"home-hero-info-before":h(()=>[d(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(i.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(i.$slots,"home-hero-after",{},void 0,!0),d(i.$slots,"home-features-before",{},void 0,!0),_(Mt),d(i.$slots,"home-features-after",{},void 0,!0),r(e).markdownStyles!==!1?(a(),v(zt,{key:0},{default:h(()=>[_(s)]),_:1})):(a(),v(s,{key:1}))],2)}}}),Rt=x(Et,[["__scopeId","data-v-08ac8878"]]),Vt={},Nt={class:"VPPage"};function Ht(n,e){const t=U("Content");return a(),c("div",Nt,[d(n.$slots,"page-top"),_(t),d(n.$slots,"page-bottom")])}const Ot=x(Vt,[["render",Ht]]),qt=f({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=P(),{hasSidebar:i}=N();return(o,s)=>(a(),c("div",{class:A(["VPContent",{"has-sidebar":r(i),"is-home":r(t).layout==="home"}]),id:"VPContent"},[r(e).isNotFound?d(o.$slots,"not-found",{},()=>[_(le)],!0,0):r(t).layout==="page"?(a(),v(Ot,{key:1},{"page-top":h(()=>[d(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(t).layout==="home"?(a(),v(Rt,{key:2},{"home-hero-before":h(()=>[d(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(t).layout&&r(t).layout!=="doc"?(a(),v(z(r(t).layout),{key:3})):(a(),v(ot,{key:4},{"doc-top":h(()=>[d(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[d(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[d(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[d(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[d(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ut=x(qt,[["__scopeId","data-v-df5e343b"]]),jt={class:"container"},Gt=["innerHTML"],Kt=["innerHTML"],Xt=f({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=P(),{hasSidebar:i}=N();return(o,s)=>r(e).footer&&r(t).footer!==!1?(a(),c("footer",{key:0,class:A(["VPFooter",{"has-sidebar":r(i)}])},[m("div",jt,[r(e).footer.message?(a(),c("p",{key:0,class:"message",innerHTML:r(e).footer.message},null,8,Gt)):g("",!0),r(e).footer.copyright?(a(),c("p",{key:1,class:"copyright",innerHTML:r(e).footer.copyright},null,8,Kt)):g("",!0)])],2)):g("",!0)}}),Yt=x(Xt,[["__scopeId","data-v-a7e16f51"]]);function Qt(){const{theme:n,frontmatter:e}=P(),t=Pn([]),i=b(()=>t.value.length>0);return Z(()=>{t.value=_n(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:i}}const Zt={class:"menu-text"},Jt={class:"header"},ni={class:"outline"},ei=f({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=P(),i=C(!1),o=C(0),s=C(),l=C();function u(S){var k;(k=s.value)!=null&&k.contains(S.target)||(i.value=!1)}R(i,S=>{if(S){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),ln("Escape",()=>{i.value=!1}),Z(()=>{i.value=!1});function p(){i.value=!i.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function y(S){S.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),Cn(()=>{i.value=!1}))}function T(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(S,k)=>(a(),c("div",{class:"VPLocalNavOutlineDropdown",style:X({"--vp-vh":o.value+"px"}),ref_key:"main",ref:s},[n.headers.length>0?(a(),c("button",{key:0,onClick:p,class:A({open:i.value})},[m("span",Zt,L(r(Dn)(r(t))),1),k[0]||(k[0]=m("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(a(),c("button",{key:1,onClick:T},L(r(t).returnToTopLabel||"Return to top"),1)),_(pn,{name:"flyout"},{default:h(()=>[i.value?(a(),c("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:y},[m("div",Jt,[m("a",{class:"top-link",href:"#",onClick:T},L(r(t).returnToTopLabel||"Return to top"),1)]),m("div",ni,[_(In,{headers:n.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),ti=x(ei,[["__scopeId","data-v-6bc5659c"]]),ii={class:"container"},oi=["aria-expanded"],ai={class:"menu-text"},ri=f({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=P(),{hasSidebar:i}=N(),{headers:o}=Qt(),{y:s}=wn(),l=C(0);V(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Z(()=>{o.value=_n(t.value.outline??e.value.outline)});const u=b(()=>o.value.length===0),p=b(()=>u.value&&!i.value),y=b(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:u.value,fixed:p.value}));return(T,S)=>r(t).layout!=="home"&&(!p.value||r(s)>=l.value)?(a(),c("div",{key:0,class:A(y.value)},[m("div",ii,[r(i)?(a(),c("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:S[0]||(S[0]=k=>T.$emit("open-menu"))},[S[1]||(S[1]=m("span",{class:"vpi-align-left menu-icon"},null,-1)),m("span",ai,L(r(e).sidebarMenuLabel||"Menu"),1)],8,oi)):g("",!0),_(ti,{headers:r(o),navHeight:l.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),si=x(ri,[["__scopeId","data-v-196c50c0"]]);function li(){const n=C(!1);function e(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function i(){n.value?t():e()}function o(){window.outerWidth>=768&&t()}const s=J();return R(()=>s.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:i}}const di={},ci={class:"VPSwitch",type:"button",role:"switch"},ui={class:"check"},pi={key:0,class:"icon"};function mi(n,e){return a(),c("button",ci,[m("span",ui,[n.$slots.default?(a(),c("span",pi,[d(n.$slots,"default",{},void 0,!0)])):g("",!0)])])}const hi=x(di,[["render",mi],["__scopeId","data-v-afba620a"]]),gi=f({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=P(),i=nn("toggle-appearance",()=>{e.value=!e.value}),o=C("");return gn(()=>{o.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,l)=>(a(),v(hi,{title:o.value,class:"VPSwitchAppearance","aria-checked":r(e),onClick:r(i)},{default:h(()=>[...l[0]||(l[0]=[m("span",{class:"vpi-sun sun"},null,-1),m("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),vn=x(gi,[["__scopeId","data-v-63c120e2"]]),fi={key:0,class:"VPNavBarAppearance"},_i=f({__name:"VPNavBarAppearance",setup(n){const{site:e}=P();return(t,i)=>r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(a(),c("div",fi,[_(vn)])):g("",!0)}}),vi=x(_i,[["__scopeId","data-v-261b56e7"]]),Sn=C();let Fn=!1,rn=0;function Si(n){const e=C(!1);if(en){!Fn&&xi(),rn++;const t=R(Sn,i=>{var o,s,l;i===n.el.value||(o=n.el.value)!=null&&o.contains(i)?(e.value=!0,(s=n.onFocus)==null||s.call(n)):(e.value=!1,(l=n.onBlur)==null||l.call(n))});hn(()=>{t(),rn--,rn||bi()})}return Hn(e)}function xi(){document.addEventListener("focusin",Mn),Fn=!0,Sn.value=document.activeElement}function bi(){document.removeEventListener("focusin",Mn)}function Mn(){Sn.value=document.activeElement}const yi={class:"VPMenuLink"},ki=["innerHTML"],Pi=f({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=P();return(t,i)=>(a(),c("div",yi,[_(E,{class:A({active:r(q)(r(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:h(()=>[m("span",{innerHTML:n.item.text},null,8,ki)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),tn=x(Pi,[["__scopeId","data-v-d9f6f8d8"]]),Ti={class:"VPMenuGroup"},Ci={key:0,class:"title"},wi=f({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),c("div",Ti,[n.text?(a(),c("p",Ci,L(n.text),1)):g("",!0),(a(!0),c(I,null,M(n.items,i=>(a(),c(I,null,["link"in i?(a(),v(tn,{key:0,item:i},null,8,["item"])):g("",!0)],64))),256))]))}}),Bi=x(wi,[["__scopeId","data-v-d0b7712a"]]),Ai={class:"VPMenu"},$i={key:0,class:"items"},Li=f({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(a(),c("div",Ai,[n.items?(a(),c("div",$i,[(a(!0),c(I,null,M(n.items,i=>(a(),c(I,{key:JSON.stringify(i)},["link"in i?(a(),v(tn,{key:0,item:i},null,8,["item"])):"component"in i?(a(),v(z(i.component),H({key:1,ref_for:!0},i.props),null,16)):(a(),v(Bi,{key:2,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):g("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),Di=x(Li,[["__scopeId","data-v-4af58ee8"]]),Ii=["aria-expanded","aria-label"],Fi={key:0,class:"text"},Mi=["innerHTML"],Wi={key:1,class:"vpi-more-horizontal icon"},zi={class:"menu"},Ei=f({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=C(!1),t=C();Si({el:t,onBlur:i});function i(){e.value=!1}return(o,s)=>(a(),c("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:s[1]||(s[1]=l=>e.value=!0),onMouseleave:s[2]||(s[2]=l=>e.value=!1)},[m("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:s[0]||(s[0]=l=>e.value=!e.value)},[n.button||n.icon?(a(),c("span",Fi,[n.icon?(a(),c("span",{key:0,class:A([n.icon,"option-icon"])},null,2)):g("",!0),n.button?(a(),c("span",{key:1,innerHTML:n.button},null,8,Mi)):g("",!0),s[3]||(s[3]=m("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(a(),c("span",Wi))],8,Ii),m("div",zi,[_(Di,{items:n.items},{default:h(()=>[d(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),xn=x(Ei,[["__scopeId","data-v-7089b29e"]]),Ri=["href","aria-label","innerHTML"],Vi=f({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=C();V(async()=>{var s;await Cn();const o=(s=t.value)==null?void 0:s.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const i=b(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(o,s)=>(a(),c("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,Ri))}}),Ni=x(Vi,[["__scopeId","data-v-d78faa03"]]),Hi={class:"VPSocialLinks"},Oi=f({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(a(),c("div",Hi,[(a(!0),c(I,null,M(n.links,({link:i,icon:o,ariaLabel:s})=>(a(),v(Ni,{key:i,icon:o,link:i,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),bn=x(Oi,[["__scopeId","data-v-f64d1f16"]]),qi={key:0,class:"group translations"},Ui={class:"trans-title"},ji={key:1,class:"group"},Gi={class:"item appearance"},Ki={class:"label"},Xi={class:"appearance-action"},Yi={key:2,class:"group"},Qi={class:"item social-links"},Zi=f({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=P(),{localeLinks:i,currentLang:o}=G({correspondingLink:!0}),s=b(()=>i.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(l,u)=>s.value?(a(),v(xn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[r(i).length&&r(o).label?(a(),c("div",qi,[m("p",Ui,L(r(o).label),1),(a(!0),c(I,null,M(r(i),p=>(a(),v(tn,{key:p.link,item:p},null,8,["item"]))),128))])):g("",!0),r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(a(),c("div",ji,[m("div",Gi,[m("p",Ki,L(r(t).darkModeSwitchLabel||"Appearance"),1),m("div",Xi,[_(vn)])])])):g("",!0),r(t).socialLinks?(a(),c("div",Yi,[m("div",Qi,[_(bn,{class:"social-links-list",links:r(t).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),Ji=x(Zi,[["__scopeId","data-v-7d847b2d"]]),no=["aria-expanded"],eo=f({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(a(),c("button",{type:"button",class:A(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=i=>e.$emit("click"))},[...t[1]||(t[1]=[m("span",{class:"container"},[m("span",{class:"top"}),m("span",{class:"middle"}),m("span",{class:"bottom"})],-1)])],10,no))}}),to=x(eo,[["__scopeId","data-v-9c1fb896"]]),io=["innerHTML"],oo=f({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=P();return(t,i)=>(a(),v(E,{class:A({VPNavBarMenuLink:!0,active:r(q)(r(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:h(()=>[m("span",{innerHTML:n.item.text},null,8,io)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ao=x(oo,[["__scopeId","data-v-541cdb06"]]),ro=f({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=P(),i=s=>"component"in s?!1:"link"in s?q(t.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(i),o=b(()=>i(e.item));return(s,l)=>(a(),v(xn,{class:A({VPNavBarMenuGroup:!0,active:r(q)(r(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),so={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},lo=f({__name:"VPNavBarMenu",setup(n){const{theme:e}=P();return(t,i)=>r(e).nav?(a(),c("nav",so,[i[0]||(i[0]=m("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(a(!0),c(I,null,M(r(e).nav,o=>(a(),c(I,{key:JSON.stringify(o)},["link"in o?(a(),v(ao,{key:0,item:o},null,8,["item"])):"component"in o?(a(),v(z(o.component),H({key:1,ref_for:!0},o.props),null,16)):(a(),v(ro,{key:2,item:o},null,8,["item"]))],64))),128))])):g("",!0)}}),co=x(lo,[["__scopeId","data-v-d2be0875"]]);function uo(n){const{localeIndex:e,theme:t}=P();function i(o){var B,$,D;const s=o.split("."),l=(B=t.value.search)==null?void 0:B.options,u=l&&typeof l=="object",p=u&&((D=($=l.locales)==null?void 0:$[e.value])==null?void 0:D.translations)||null,y=u&&l.translations||null;let T=p,S=y,k=n;const w=s.pop();for(const F of s){let W=null;const j=k==null?void 0:k[F];j&&(W=k=j);const on=S==null?void 0:S[F];on&&(W=S=on);const an=T==null?void 0:T[F];an&&(W=T=an),j||(k=W),on||(S=W),an||(T=W)}return(T==null?void 0:T[w])??(S==null?void 0:S[w])??(k==null?void 0:k[w])??""}return i}const po=["aria-label"],mo={class:"DocSearch-Button-Container"},ho={class:"DocSearch-Button-Placeholder"},yn=f({__name:"VPNavBarSearchButton",setup(n){const t=uo({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,o)=>(a(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(t)("button.buttonAriaLabel")},[m("span",mo,[o[0]||(o[0]=m("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),m("span",ho,L(r(t)("button.buttonText")),1)]),o[1]||(o[1]=m("span",{class:"DocSearch-Button-Keys"},[m("kbd",{class:"DocSearch-Button-Key"}),m("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,po))}}),go={class:"VPNavBarSearch"},fo={id:"local-search"},_o={key:1,id:"docsearch"},vo=f({__name:"VPNavBarSearch",setup(n){const e=On(()=>qn(()=>import("./VPLocalSearchBox.B89i2LSc.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:i}=P(),o=C(!1),s=C(!1);V(()=>{});function l(){o.value||(o.value=!0,setTimeout(u,16))}function u(){const S=new Event("keydown");S.key="k",S.metaKey=!0,window.dispatchEvent(S),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function p(S){const k=S.target,w=k.tagName;return k.isContentEditable||w==="INPUT"||w==="SELECT"||w==="TEXTAREA"}const y=C(!1);ln("k",S=>{(S.ctrlKey||S.metaKey)&&(S.preventDefault(),y.value=!0)}),ln("/",S=>{p(S)||(S.preventDefault(),y.value=!0)});const T="local";return(S,k)=>{var w;return a(),c("div",go,[r(T)==="local"?(a(),c(I,{key:0},[y.value?(a(),v(r(e),{key:0,onClose:k[0]||(k[0]=B=>y.value=!1)})):g("",!0),m("div",fo,[_(yn,{onClick:k[1]||(k[1]=B=>y.value=!0)})])],64)):r(T)==="algolia"?(a(),c(I,{key:1},[o.value?(a(),v(r(t),{key:0,algolia:((w=r(i).search)==null?void 0:w.options)??r(i).algolia,onVnodeBeforeMount:k[2]||(k[2]=B=>s.value=!0)},null,8,["algolia"])):g("",!0),s.value?g("",!0):(a(),c("div",_o,[_(yn,{onClick:l})]))],64)):g("",!0)])}}}),So=f({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=P();return(t,i)=>r(e).socialLinks?(a(),v(bn,{key:0,class:"VPNavBarSocialLinks",links:r(e).socialLinks},null,8,["links"])):g("",!0)}}),xo=x(So,[["__scopeId","data-v-b023b5ce"]]),bo=["href","rel","target"],yo=["innerHTML"],ko={key:2},Po=f({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=P(),{hasSidebar:i}=N(),{currentLang:o}=G(),s=b(()=>{var p;return typeof t.value.logoLink=="string"?t.value.logoLink:(p=t.value.logoLink)==null?void 0:p.link}),l=b(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.rel}),u=b(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.target});return(p,y)=>(a(),c("div",{class:A(["VPNavBarTitle",{"has-sidebar":r(i)}])},[m("a",{class:"title",href:s.value??r(fn)(r(o).link),rel:l.value,target:u.value},[d(p.$slots,"nav-bar-title-before",{},void 0,!0),r(t).logo?(a(),v(Y,{key:0,class:"logo",image:r(t).logo},null,8,["image"])):g("",!0),r(t).siteTitle?(a(),c("span",{key:1,innerHTML:r(t).siteTitle},null,8,yo)):r(t).siteTitle===void 0?(a(),c("span",ko,L(r(e).title),1)):g("",!0),d(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,bo)],2))}}),To=x(Po,[["__scopeId","data-v-a37715e7"]]),Co={class:"items"},wo={class:"title"},Bo=f({__name:"VPNavBarTranslations",setup(n){const{theme:e}=P(),{localeLinks:t,currentLang:i}=G({correspondingLink:!0});return(o,s)=>r(t).length&&r(i).label?(a(),v(xn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(e).langMenuLabel||"Change language"},{default:h(()=>[m("div",Co,[m("p",wo,L(r(i).label),1),(a(!0),c(I,null,M(r(t),l=>(a(),v(tn,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),Ao=x(Bo,[["__scopeId","data-v-43fe3aee"]]),$o={class:"wrapper"},Lo={class:"container"},Do={class:"title"},Io={class:"content"},Fo={class:"content-body"},Mo=f({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=wn(),{hasSidebar:i}=N(),{frontmatter:o}=P(),s=C({});return gn(()=>{s.value={"has-sidebar":i.value,home:o.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(l,u)=>(a(),c("div",{class:A(["VPNavBar",s.value])},[m("div",$o,[m("div",Lo,[m("div",Do,[_(To,null,{"nav-bar-title-before":h(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),m("div",Io,[m("div",Fo,[d(l.$slots,"nav-bar-content-before",{},void 0,!0),_(vo,{class:"search"}),_(co,{class:"menu"}),_(Ao,{class:"translations"}),_(vi,{class:"appearance"}),_(xo,{class:"social-links"}),_(Ji,{class:"extra"}),d(l.$slots,"nav-bar-content-after",{},void 0,!0),_(to,{class:"hamburger",active:n.isScreenOpen,onClick:u[0]||(u[0]=p=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=m("div",{class:"divider"},[m("div",{class:"divider-line"})],-1))],2))}}),Wo=x(Mo,[["__scopeId","data-v-950e79a7"]]),zo={key:0,class:"VPNavScreenAppearance"},Eo={class:"text"},Ro=f({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=P();return(i,o)=>r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(a(),c("div",zo,[m("p",Eo,L(r(t).darkModeSwitchLabel||"Appearance"),1),_(vn)])):g("",!0)}}),Vo=x(Ro,[["__scopeId","data-v-55244ba5"]]),No=["innerHTML"],Ho=f({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,i)=>(a(),v(E,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:r(e)},{default:h(()=>[m("span",{innerHTML:n.item.text},null,8,No)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Oo=x(Ho,[["__scopeId","data-v-eb2dcd0d"]]),qo=["innerHTML"],Uo=f({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,i)=>(a(),v(E,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:r(e)},{default:h(()=>[m("span",{innerHTML:n.item.text},null,8,qo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Wn=x(Uo,[["__scopeId","data-v-9212d37f"]]),jo={class:"VPNavScreenMenuGroupSection"},Go={key:0,class:"title"},Ko=f({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),c("div",jo,[n.text?(a(),c("p",Go,L(n.text),1)):g("",!0),(a(!0),c(I,null,M(n.items,i=>(a(),v(Wn,{key:i.text,item:i},null,8,["item"]))),128))]))}}),Xo=x(Ko,[["__scopeId","data-v-000b6633"]]),Yo=["aria-controls","aria-expanded"],Qo=["innerHTML"],Zo=["id"],Jo={key:0,class:"item"},na={key:1,class:"item"},ea={key:2,class:"group"},ta=f({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=C(!1),i=b(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(s,l)=>(a(),c("div",{class:A(["VPNavScreenMenuGroup",{open:t.value}])},[m("button",{class:"button","aria-controls":i.value,"aria-expanded":t.value,onClick:o},[m("span",{class:"button-text",innerHTML:n.text},null,8,Qo),l[0]||(l[0]=m("span",{class:"vpi-plus button-icon"},null,-1))],8,Yo),m("div",{id:i.value,class:"items"},[(a(!0),c(I,null,M(n.items,u=>(a(),c(I,{key:JSON.stringify(u)},["link"in u?(a(),c("div",Jo,[_(Wn,{item:u},null,8,["item"])])):"component"in u?(a(),c("div",na,[(a(),v(z(u.component),H({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(a(),c("div",ea,[_(Xo,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Zo)],2))}}),ia=x(ta,[["__scopeId","data-v-3c657227"]]),oa={key:0,class:"VPNavScreenMenu"},aa=f({__name:"VPNavScreenMenu",setup(n){const{theme:e}=P();return(t,i)=>r(e).nav?(a(),c("nav",oa,[(a(!0),c(I,null,M(r(e).nav,o=>(a(),c(I,{key:JSON.stringify(o)},["link"in o?(a(),v(Oo,{key:0,item:o},null,8,["item"])):"component"in o?(a(),v(z(o.component),H({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(a(),v(ia,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),ra=f({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=P();return(t,i)=>r(e).socialLinks?(a(),v(bn,{key:0,class:"VPNavScreenSocialLinks",links:r(e).socialLinks},null,8,["links"])):g("",!0)}}),sa={class:"list"},la=f({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=G({correspondingLink:!0}),i=C(!1);function o(){i.value=!i.value}return(s,l)=>r(e).length&&r(t).label?(a(),c("div",{key:0,class:A(["VPNavScreenTranslations",{open:i.value}])},[m("button",{class:"title",onClick:o},[l[0]||(l[0]=m("span",{class:"vpi-languages icon lang"},null,-1)),O(" "+L(r(t).label)+" ",1),l[1]||(l[1]=m("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),m("ul",sa,[(a(!0),c(I,null,M(r(e),u=>(a(),c("li",{key:u.link,class:"item"},[_(E,{class:"link",href:u.link},{default:h(()=>[O(L(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),da=x(la,[["__scopeId","data-v-9d770640"]]),ca={class:"container"},ua=f({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=C(null),t=Bn(en?document.body:null);return(i,o)=>(a(),v(pn,{name:"fade",onEnter:o[0]||(o[0]=s=>t.value=!0),onAfterLeave:o[1]||(o[1]=s=>t.value=!1)},{default:h(()=>[n.open?(a(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[m("div",ca,[d(i.$slots,"nav-screen-content-before",{},void 0,!0),_(aa,{class:"menu"}),_(da,{class:"translations"}),_(Vo,{class:"appearance"}),_(ra,{class:"social-links"}),d(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),pa=x(ua,[["__scopeId","data-v-69a7057b"]]),ma={key:0,class:"VPNav"},ha=f({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:i}=li(),{frontmatter:o}=P(),s=b(()=>o.value.navbar!==!1);return An("close-screen",t),Q(()=>{en&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(l,u)=>s.value?(a(),c("header",ma,[_(Wo,{"is-screen-open":r(e),onToggleScreen:r(i)},{"nav-bar-title-before":h(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),_(pa,{open:r(e)},{"nav-screen-content-before":h(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),ga=x(ha,[["__scopeId","data-v-9d47990a"]]),fa=["role","tabindex"],_a={key:1,class:"items"},va=f({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:i,isLink:o,isActiveLink:s,hasActiveLink:l,hasChildren:u,toggle:p}=pe(b(()=>e.item)),y=b(()=>u.value?"section":"div"),T=b(()=>o.value?"a":"div"),S=b(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),k=b(()=>o.value?void 0:"button"),w=b(()=>[[`level-${e.depth}`],{collapsible:i.value},{collapsed:t.value},{"is-link":o.value},{"is-active":s.value},{"has-active":l.value}]);function B(D){"key"in D&&D.key!=="Enter"||!e.item.link&&p()}function $(){e.item.link&&p()}return(D,F)=>{const W=U("VPSidebarItem",!0);return a(),v(z(y.value),{class:A(["VPSidebarItem",w.value])},{default:h(()=>[n.item.text?(a(),c("div",H({key:0,class:"item",role:k.value},Un(n.item.items?{click:B,keydown:B}:{},!0),{tabindex:n.item.items&&0}),[F[1]||(F[1]=m("div",{class:"indicator"},null,-1)),n.item.link?(a(),v(E,{key:0,tag:T.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:h(()=>[(a(),v(z(S.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),v(z(S.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(a(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:$,onKeydown:jn($,["enter"]),tabindex:"0"},[...F[0]||(F[0]=[m("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,fa)):g("",!0),n.item.items&&n.item.items.length?(a(),c("div",_a,[n.depth<5?(a(!0),c(I,{key:0},M(n.item.items,j=>(a(),v(W,{key:j.text,item:j,depth:n.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),Sa=x(va,[["__scopeId","data-v-f71e737d"]]),xa=f({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=C(!0);let t=null;return V(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),$n(()=>{t!=null&&(clearTimeout(t),t=null)}),(i,o)=>(a(!0),c(I,null,M(n.items,s=>(a(),c("div",{key:s.text,class:A(["group",{"no-transition":e.value}])},[_(Sa,{item:s,depth:0},null,8,["item"])],2))),128))}}),ba=x(xa,[["__scopeId","data-v-8bf7a0e4"]]),ya={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ka=f({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=N(),i=n,o=C(null),s=Bn(en?document.body:null);R([i,o],()=>{var u;i.open?(s.value=!0,(u=o.value)==null||u.focus()):s.value=!1},{immediate:!0,flush:"post"});const l=C(0);return R(e,()=>{l.value+=1},{deep:!0}),(u,p)=>r(t)?(a(),c("aside",{key:0,class:A(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:p[0]||(p[0]=Gn(()=>{},["stop"]))},[p[2]||(p[2]=m("div",{class:"curtain"},null,-1)),m("nav",ya,[p[1]||(p[1]=m("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d(u.$slots,"sidebar-nav-before",{},void 0,!0),(a(),v(ba,{items:r(e),key:l.value},null,8,["items"])),d(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Pa=x(ka,[["__scopeId","data-v-9c98d9ed"]]),Ta=f({__name:"VPSkipLink",setup(n){const{theme:e}=P(),t=J(),i=C();R(()=>t.path,()=>i.value.focus());function o({target:s}){const l=document.getElementById(decodeURIComponent(s.hash).slice(1));if(l){const u=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",u)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",u),l.focus(),window.scrollTo(0,0)}}return(s,l)=>(a(),c(I,null,[m("span",{ref_key:"backToTop",ref:i,tabindex:"-1"},null,512),m("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},L(r(e).skipToContentLabel||"Skip to content"),1)],64))}}),Ca=x(Ta,[["__scopeId","data-v-7860fec0"]]),wa=f({__name:"Layout",setup(n){const{isOpen:e,open:t,close:i}=N(),o=J();R(()=>o.path,i),ue(e,i);const{frontmatter:s}=P(),l=Kn(),u=b(()=>!!l["home-hero-image"]);return An("hero-image-slot-exists",u),(p,y)=>{const T=U("Content");return r(s).layout!==!1?(a(),c("div",{key:0,class:A(["Layout",r(s).pageClass])},[d(p.$slots,"layout-top",{},void 0,!0),_(Ca),_(Zn,{class:"backdrop",show:r(e),onClick:r(i)},null,8,["show","onClick"]),_(ga,null,{"nav-bar-title-before":h(()=>[d(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[d(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),_(si,{open:r(e),onOpenMenu:r(t)},null,8,["open","onOpenMenu"]),_(Pa,{open:r(e)},{"sidebar-nav-before":h(()=>[d(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[d(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),_(Ut,null,{"page-top":h(()=>[d(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[d(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[d(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[d(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[d(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[d(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),_(Yt),d(p.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),v(T,{key:1}))}}}),Ba=x(wa,[["__scopeId","data-v-427ea057"]]),Aa={Layout:Ba,enhanceApp:({app:n})=>{n.component("Badge",Xn)}},$a=`void main() {
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
`,La=`int add(int a, [int b = 0]) => a + b;

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
`,Da=`class Animal {
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
`,Ia=`Future<String> fetchUser() async {
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
`,Fa=`import 'package:flutter/material.dart';

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
`,Ma=`import 'package:flutter/material.dart';

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
`,Wa=`import 'package:flutter/material.dart';

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
`,za=`import 'package:flutter/material.dart';

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
`,Ea=`import 'package:flutter/material.dart';

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
`,Ra=`import 'package:flutter/material.dart';

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
`,Va=`import 'package:flutter/material.dart';

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
`,Na=`import 'package:flutter/material.dart';

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
`,Ha=`import 'package:flutter/material.dart';

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
`,Oa=`import 'package:flutter/material.dart';

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
`,qa=`import 'package:flutter/material.dart';

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
`,Ua=`import 'package:flutter/material.dart';

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
`,ja=`import 'dart:async';
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
`,Ga=`import 'package:flutter/material.dart';

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
`,Ka=`import 'package:flutter/material.dart';
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
`,Xa=`import 'package:flutter/material.dart';
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
`,Ya=`import 'dart:async';

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
`,Qa=`import 'package:flutter/material.dart';

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
`,Za=`import 'package:flutter/material.dart';

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
`,Ja=`import 'dart:async';

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
`,nr=`import 'dart:ui' show FrameTiming;

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
`,er=`import 'dart:math' as math;
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
`,tr=`import 'dart:math' as math;
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
`,ir=`import 'dart:math' as math;

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
`,or=`import 'dart:math' as math;
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
`,ar=`import 'dart:math' as math;
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
`,rr=`import 'package:flutter/material.dart';

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
`,sr=`import 'package:flutter/material.dart';

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
`,lr=`import 'package:flutter/material.dart';

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
`,dr=`import 'package:flutter/material.dart';

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
`,cr=`import 'package:flutter/material.dart';

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
`,ur=`import 'dart:developer' as developer;

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
`,pr=`import 'package:flutter/material.dart';

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
`,mr=`import 'package:flutter/material.dart';

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
`,hr=`import 'package:flutter/material.dart';

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
`,gr=`import 'package:flutter/material.dart';

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
`,fr=`import 'package:flutter/material.dart';

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
`,_r=`import 'dart:isolate';
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
`,vr=`import 'package:flutter/material.dart';

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
`,Sr=`import 'package:flutter/material.dart';

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
`,xr=`import 'package:flutter/material.dart';

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
`,br=`import 'package:flutter/material.dart';

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
`,yr=`import 'package:flutter/material.dart';

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
`,kr=`import 'package:flutter/material.dart';
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
`,Pr=`import 'package:flutter/material.dart';
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
`,Tr=`import 'package:flutter/material.dart';

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
                              if (expanded) ...<Widget>[
                                SizedBox(
                                  width: 260,
                                  child: _panel(context, '左栏：列表'),
                                ),
                                SizedBox(width: t.gap),
                                Expanded(child: _panel(context, '右栏：详情')),
                              ] else ...<Widget>[
                                SizedBox(
                                  width: 220,
                                  child: _panel(context, '侧栏：模块列表'),
                                ),
                                SizedBox(width: t.gap),
                                Expanded(child: _panel(context, '内容区')),
                              ],
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
`,Cr=`import 'dart:async';

import 'package:flutter/material.dart';

/// 企业级工程骨架最小示例：
/// 1) 编译期环境配置（--dart-define）
/// 2) 路由守卫 + 401 单飞刷新 + 重放
/// 3) Result 封装预期内失败
/// 4) 组合根里的依赖注入
void main() => runApp(const EnterpriseScaffoldApp());

// ---------------------------------------------------------------- 配置
enum AppEnv { dev, staging, prod }

class AppConfig {
  const AppConfig(this.env);

  final AppEnv env;

  static const String _raw =
      String.fromEnvironment('APP_ENV', defaultValue: 'dev');

  static AppConfig get current => AppConfig(switch (_raw) {
        'prod' => AppEnv.prod,
        'staging' => AppEnv.staging,
        _ => AppEnv.dev,
      });

  String get apiBase => switch (env) {
        AppEnv.dev => 'https://api-dev.corp.com',
        AppEnv.staging => 'https://api-stg.corp.com',
        AppEnv.prod => 'https://api.corp.com',
      };
}

// ---------------------------------------------------------------- Result
sealed class Result<T> {
  const Result();
}

class Ok<T> extends Result<T> {
  const Ok(this.value);
  final T value;
}

class Err<T> extends Result<T> {
  const Err(this.message);
  final String message;
}

// ---------------------------------------------------------------- 依赖
abstract class OrderRepository {
  Future<Result<String>> fetchOrders(String token);
}

class HttpOrderRepository implements OrderRepository {
  HttpOrderRepository({required this.refreshToken});

  final Future<String> Function() refreshToken;
  bool tokenExpired = false;
  int attempts = 0;

  @override
  Future<Result<String>> fetchOrders(String token) async {
    attempts++;
    await Future<void>.delayed(const Duration(milliseconds: 180));
    if (tokenExpired) {
      tokenExpired = false;
      final fresh = await refreshToken();
      return fetchOrders(fresh); // 重放，真实项目用拦截器统一做
    }
    if (attempts % 3 == 0) {
      return const Err<String>('订单接口返回 500');
    }
    return Ok<String>('订单列表 · token=$token · 第 $attempts 次请求');
  }
}

class FakeOrderRepository implements OrderRepository {
  @override
  Future<Result<String>> fetchOrders(String token) async =>
      const Ok<String>('Fake：两条订单（单测专用）');
}

/// 组合根：整个 App 唯一知道「用哪个实现」的地方。
class AppScope extends InheritedWidget {
  const AppScope({
    super.key,
    required this.orders,
    required super.child,
  });

  final OrderRepository orders;

  static AppScope of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<AppScope>()!;

  @override
  bool updateShouldNotify(AppScope oldWidget) => orders != oldWidget.orders;
}

// ---------------------------------------------------------------- 应用
class EnterpriseScaffoldApp extends StatefulWidget {
  const EnterpriseScaffoldApp({super.key});

  @override
  State<EnterpriseScaffoldApp> createState() => _EnterpriseScaffoldAppState();
}

class _EnterpriseScaffoldAppState extends State<EnterpriseScaffoldApp> {
  AppEnv _env = AppEnv.dev;
  bool _fake = false;
  late final HttpOrderRepository _http = HttpOrderRepository(
    refreshToken: _refreshToken,
  );
  late OrderRepository _orders = _fake ? FakeOrderRepository() : _http;

  bool _loggedIn = false;
  bool _expired = false;
  String _token = 't1';
  String _route = '/home';
  int _refreshes = 0;
  Future<String>? _refreshFuture;
  final List<String> _log = <String>[];
  String? _resultText;

  // 单飞刷新：并发 401 只触发一次刷新
  Future<String> _refreshToken() {
    final existing = _refreshFuture;
    if (existing != null) return existing;
    _note('401 → 刷新 token');
    final future = Future<String>.delayed(const Duration(milliseconds: 400), () {
      _token = 't\${int.parse(_token.substring(1)) + 1}';
      _refreshes++;
      return _token;
    });
    _refreshFuture = future;
    future.whenComplete(() => _refreshFuture = null).ignore();
    return future;
  }

  void _note(String line) {
    if (!mounted) return;
    setState(() {
      _log.insert(0, line);
      if (_log.length > 8) _log.removeLast();
    });
  }

  void _guardOpen(String path) {
    if (!_loggedIn) {
      _note('守卫拦截 $path：需要登录');
      return;
    }
    setState(() => _route = path);
  }

  Future<void> _loadOrders() async {
    _note('→ GET /orders');
    final result = await _orders.fetchOrders(_token);
    if (!mounted) return;
    switch (result) {
      case Ok<String>(value: final value):
        setState(() => _resultText = value);
        _note('← Ok：$value');
      case Err<String>(message: final message):
        setState(() => _resultText = message);
        _note('← Err：$message（错误成为数据，可重试）');
    }
  }

  @override
  Widget build(BuildContext context) {
    final AppScope scope = AppScope(orders: _orders, child: _body());
    return Theme(
      data: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      child: scope,
    );
  }

  Widget _body() {
    return Scaffold(
      appBar: AppBar(
        title: Text('企业骨架 · \${_env.name}'),
        actions: <Widget>[
          TextButton(
            onPressed: () => setState(() => _env = AppEnv.values[
                (AppEnv.values.indexOf(_env) + 1) % AppEnv.values.length]),
            child: Text(_env.name.toUpperCase()),
          ),
        ],
      ),
      body: Column(
        children: <Widget>[
          Container(
            width: double.infinity,
            color: Colors.indigo.withValues(alpha: 0.08),
            padding: const EdgeInsets.all(8),
            child: Text(
              'API: \${AppConfig(_env).apiBase} · '
              '订单实现: \${_orders is FakeOrderRepository ? 'Fake' : 'HTTP'}',
              style: const TextStyle(fontSize: 12),
            ),
          ),
          Expanded(child: _screen()),
          SizedBox(
            height: 150,
            child: ListView(
              padding: const EdgeInsets.all(8),
              reverse: true,
              children: <Widget>[
                for (final line in _log)
                  Text(line, style: const TextStyle(fontSize: 12)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _screen() {
    if (!_loggedIn) {
      return Center(
        child: FilledButton.icon(
          onPressed: () {
            setState(() => _loggedIn = true);
            _note('登录成功：token=$_token');
          },
          icon: const Icon(Icons.login),
          label: const Text('登录'),
        ),
      );
    }
    return ListView(
      padding: const EdgeInsets.all(16),
      children: <Widget>[
        Text('当前路由 $_route · token \${_expired ? '已过期' : '有效'}'),
        const SizedBox(height: 12),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: <Widget>[
            FilledButton(
              onPressed: () => _guardOpen('/home/detail'),
              child: const Text('打开详情'),
            ),
            OutlinedButton(
              onPressed: () {
                setState(() => _expired = true);
                _http.tokenExpired = true;
                _note('token 已标记为过期');
              },
              child: const Text('让 token 过期'),
            ),
            OutlinedButton(
              onPressed: _loadOrders,
              child: const Text('请求订单'),
            ),
            OutlinedButton(
              onPressed: () {
                setState(() {
                  _fake = !_fake;
                  _orders = _fake ? FakeOrderRepository() : _http;
                });
              },
              child: const Text('切换 Fake / HTTP'),
            ),
            OutlinedButton(
              onPressed: () {
                setState(() {
                  _loggedIn = false;
                  _expired = false;
                  _route = '/home';
                });
                _http.tokenExpired = false;
                _note('退出登录');
              },
              child: const Text('退出'),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Text(
          '刷新次数 $_refreshes · 当前 token $_token\\n'
          '结果：\${_resultText ?? '还没有请求'}',
        ),
      ],
    );
  }
}
`,wr=`import 'dart:math';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// 图片管线最小示例：
/// 1) 同一份 PNG 用两种目标尺寸解码，对比文件与内存
/// 2) Image.memory + cacheWidth 做缩略图
/// 3) 读取 Flutter ImageCache 的容量与命中情况
void main() => runApp(const ImageLabApp());

Future<Uint8List> makePng({
  required int width,
  required int height,
  int seed = 1,
}) async {
  final recorder = ui.PictureRecorder();
  final canvas = Canvas(
    recorder,
    Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
  );
  final random = Random(seed);
  final base = HSVColor.fromAHSV(1, (seed * 53) % 360, 0.5, 0.9).toColor();
  canvas.drawRect(
    Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
    Paint()..color = base,
  );
  for (var i = 0; i < 90; i++) {
    canvas.drawCircle(
      Offset(random.nextDouble() * width, random.nextDouble() * height),
      random.nextDouble() * width * 0.07,
      Paint()
        ..color = HSVColor.fromAHSV(
          1,
          ((seed * 53) + random.nextInt(60)) % 360,
          0.6,
          1,
        ).toColor().withValues(alpha: 0.6),
    );
  }
  final picture = recorder.endRecording();
  final image = await picture.toImage(width, height);
  final data = await image.toByteData(format: ui.ImageByteFormat.png);
  image.dispose();
  picture.dispose();
  return data!.buffer.asUint8List();
}

String sizeText(int bytes) => bytes >= 1024 * 1024
    ? '\${(bytes / 1024 / 1024).toStringAsFixed(1)} MB'
    : '\${(bytes / 1024).toStringAsFixed(1)} KB';

class ImageLabApp extends StatelessWidget {
  const ImageLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.teal, useMaterial3: true),
      home: const ImageLabHome(),
    );
  }
}

class ImageLabHome extends StatefulWidget {
  const ImageLabHome({super.key});

  @override
  State<ImageLabHome> createState() => _ImageLabHomeState();
}

class _ImageLabHomeState extends State<ImageLabHome> {
  Uint8List? _large;
  final List<Uint8List> _thumbs = <Uint8List>[];
  ui.Image? _decoded;
  int _fileBytes = 0;
  final List<ui.Image> _all = <ui.Image>[];

  @override
  void initState() {
    super.initState();
    _prepare();
  }

  @override
  void dispose() {
    for (final image in _all) {
      image.dispose();
    }
    super.dispose();
  }

  Future<void> _prepare() async {
    final large = await makePng(width: 900, height: 675, seed: 2);
    final thumbs = <Uint8List>[];
    for (var i = 0; i < 4; i++) {
      thumbs.add(await makePng(width: 160, height: 120, seed: 20 + i));
    }
    if (!mounted) return;
    setState(() {
      _large = large;
      _fileBytes = large.length;
      _thumbs.addAll(thumbs);
    });
    await _decode(900);
  }

  Future<void> _decode(int width) async {
    final bytes = _large;
    if (bytes == null) return;
    final codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
    final frame = await codec.getNextFrame();
    if (!mounted) {
      frame.image.dispose();
      return;
    }
    _all.add(frame.image);
    setState(() {
      _decoded = frame.image;
    });
  }

  @override
  Widget build(BuildContext context) {
    final image = _decoded;
    final cache = PaintingBinding.instance.imageCache;
    return Scaffold(
      appBar: AppBar(title: const Text('图片管线：解码 / 缓存 / 内存')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Wrap(
            spacing: 8,
            children: <Widget>[
              for (final width in const <int>[900, 480, 160])
                FilledButton.tonal(
                  onPressed: _large == null ? null : () => _decode(width),
                  child: Text('解码 $width'),
                ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            '文件 \${sizeText(_fileBytes)} · 当前解码 '
            '\${image == null ? '…' : '\${image.width}×\${image.height} · '
                '内存约 \${sizeText(image.width * image.height * 4)}'}',
          ),
          const SizedBox(height: 8),
          if (image != null)
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: AspectRatio(
                aspectRatio: image.width / image.height,
                child: RawImage(image: image, fit: BoxFit.contain),
              ),
            ),
          const SizedBox(height: 16),
          Text('缩略图列表（cacheWidth: 160）'),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: <Widget>[
              for (final thumb in _thumbs)
                ClipRRect(
                  borderRadius: BorderRadius.circular(6),
                  child: Image.memory(
                    thumb,
                    width: 120,
                    height: 90,
                    cacheWidth: 160,
                    fit: BoxFit.cover,
                  ),
                ),
            ],
          ),
          const SizedBox(height: 16),
          Text(
            'ImageCache: currentSize \${cache.currentSize} / \${cache.maximumSize} · '
            'liveImages \${cache.liveImageCount}',
          ),
          const SizedBox(height: 8),
          OutlinedButton(
            onPressed: () {
              PaintingBinding.instance.imageCache
                ..clear()
                ..clearLiveImages();
              setState(() {});
            },
            child: const Text('清空解码缓存'),
          ),
          const SizedBox(height: 8),
          Text(
            '要点：列表按格子宽度解码；预览解中等尺寸；点开大图才解原图；'
            '缓存上限要按设备内存配置，而不是无限增长。',
            style: Theme.of(context).textTheme.bodySmall,
          ),
        ],
      ),
    );
  }
}
`,Br=`import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// 拖拽排序 + 命令模式撤销/重做 + 快捷键的最小闭环。
void main() => runApp(const InteractionLabApp());

class InteractionLabApp extends StatelessWidget {
  const InteractionLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.deepPurple, useMaterial3: true),
      home: const ReorderHome(),
    );
  }
}

class _MoveItemCommand {
  _MoveItemCommand({required this.from, required this.to});

  final int from;
  final int to;

  String get label => '移动第 \${from + 1} 项 → 第 \${to + 1} 位';
}

class ReorderHome extends StatefulWidget {
  const ReorderHome({super.key});

  @override
  State<ReorderHome> createState() => _ReorderHomeState();
}

class _ReorderHomeState extends State<ReorderHome> {
  final List<String> _items = <String>['设计评审', '接口实现', '组件联调', '验收测试', '发布复盘'];
  final List<_MoveItemCommand> _undo = <_MoveItemCommand>[];
  final List<_MoveItemCommand> _redo = <_MoveItemCommand>[];
  String _status = '拖动卡片调整顺序，或用 Ctrl/⌘ + Z 撤销。';

  void _applyMove(_MoveItemCommand command, {required bool forward}) {
    final source = forward ? command.from : command.to;
    final target = forward ? command.to : command.from;
    final item = _items.removeAt(source);
    _items.insert(target.clamp(0, _items.length), item);
  }

  void _move(int from, int rawTo) {
    var to = rawTo;
    if (from < to) to--;
    if (from == to) return;
    final command = _MoveItemCommand(from: from, to: to);
    setState(() {
      _applyMove(command, forward: true);
      _undo.add(command);
      _redo.clear();
      _status = command.label;
    });
  }

  void _undoAction() {
    if (_undo.isEmpty) return;
    final command = _undo.removeLast();
    setState(() {
      _applyMove(command, forward: false);
      _redo.add(command);
      _status = '撤销：\${command.label}';
    });
  }

  void _redoAction() {
    if (_redo.isEmpty) return;
    final command = _redo.removeLast();
    setState(() {
      _applyMove(command, forward: true);
      _undo.add(command);
      _status = '重做：\${command.label}';
    });
  }

  @override
  Widget build(BuildContext context) {
    return CallbackShortcuts(
      bindings: <ShortcutActivator, VoidCallback>{
        const SingleActivator(LogicalKeyboardKey.keyZ, control: true): _undoAction,
        const SingleActivator(LogicalKeyboardKey.keyZ, meta: true): _undoAction,
        const SingleActivator(LogicalKeyboardKey.keyZ, control: true, shift: true):
            _redoAction,
        const SingleActivator(LogicalKeyboardKey.keyZ, meta: true, shift: true):
            _redoAction,
      },
      child: Focus(
        autofocus: true,
        child: Scaffold(
          appBar: AppBar(title: const Text('拖拽排序与撤销重做')),
          body: Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(12),
                child: Row(
                  children: <Widget>[
                    FilledButton.tonalIcon(
                      onPressed: _undo.isEmpty ? null : _undoAction,
                      icon: const Icon(Icons.undo),
                      label: Text('撤销 (\${_undo.length})'),
                    ),
                    const SizedBox(width: 8),
                    FilledButton.tonalIcon(
                      onPressed: _redo.isEmpty ? null : _redoAction,
                      icon: const Icon(Icons.redo),
                      label: Text('重做 (\${_redo.length})'),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Text(
                  _status,
                  style: Theme.of(context).textTheme.bodySmall,
                ),
              ),
              const SizedBox(height: 8),
              Expanded(
                child: ListView.builder(
                  padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                  itemCount: _items.length * 2 + 2,
                  itemBuilder: (context, index) {
                    if (index == _items.length * 2 + 1) {
                      return DragTarget<int>(
                        onAcceptWithDetails: (details) =>
                            _move(details.data, _items.length),
                        builder: (context, candidate, rejected) => Container(
                          height: 32,
                          alignment: Alignment.center,
                          color: candidate.isNotEmpty
                              ? Theme.of(context).colorScheme.primary.withValues(alpha: 0.15)
                              : null,
                          child: const Text('拖到这里放到末尾'),
                        ),
                      );
                    }
                    if (index.isEven) {
                      final insertIndex = index ~/ 2;
                      return DragTarget<int>(
                        onAcceptWithDetails: (details) =>
                            _move(details.data, insertIndex),
                        builder: (context, candidate, rejected) => Container(
                          height: 10,
                          margin: const EdgeInsets.symmetric(vertical: 1),
                          color: candidate.isNotEmpty
                              ? Theme.of(context).colorScheme.primary.withValues(alpha: 0.35)
                              : Colors.transparent,
                        ),
                      );
                    }
                    final itemIndex = index ~/ 2;
                    final card = Card(
                      margin: EdgeInsets.zero,
                      child: ListTile(
                        leading: CircleAvatar(
                          radius: 14,
                          child: Text('\${itemIndex + 1}'),
                        ),
                        title: Text(_items[itemIndex]),
                        trailing: const Icon(Icons.drag_indicator),
                      ),
                    );
                    return Draggable<int>(
                      data: itemIndex,
                      feedback: Material(
                        elevation: 6,
                        child: SizedBox(width: 260, child: card),
                      ),
                      childWhenDragging: Opacity(opacity: 0.3, child: card),
                      child: card,
                    );
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(12),
                child: Text(
                  'Ctrl/⌘ + Z 撤销 · Ctrl/⌘ + Shift + Z 重做 · 每次移动生成一条命令',
                  style: Theme.of(context).textTheme.bodySmall,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`,Ar=`import 'dart:math';

import 'package:flutter/material.dart';

/// 零依赖演示：播放状态机 + 直播指标聚合。
/// 真实播放器（解码、通知栏、音频焦点）需要 just_audio / audio_service，
/// 见 labs/enterprise_app 与第 39 章正文。
void main() => runApp(const MediaLabApp());

class MediaLabApp extends StatelessWidget {
  const MediaLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.teal, useMaterial3: true),
      home: const MediaLabHome(),
    );
  }
}

enum PlaybackPhase { idle, loading, ready, playing, paused, completed }

class MediaLabHome extends StatefulWidget {
  const MediaLabHome({super.key});

  @override
  State<MediaLabHome> createState() => _MediaLabHomeState();
}

class _MediaLabHomeState extends State<MediaLabHome> {
  PlaybackPhase _phase = PlaybackPhase.idle;
  Duration _position = Duration.zero;
  final Duration _total = const Duration(seconds: 12);
  double _speed = 1.0;
  String _message = '点「初始化」开始';

  final Random _random = Random();
  final List<int> _bitrates = <int>[];
  final List<int> _latencies = <int>[];
  int _stalled = 0;
  int _firstFrameMs = 0;

  void _send(String event) {
    setState(() {
      switch (event) {
        case 'init':
          if (_phase == PlaybackPhase.idle) {
            _phase = PlaybackPhase.loading;
            _message = '请求音频焦点、创建解码器…';
          } else {
            _message = '初始化被拒绝：当前 \${_phase.name}';
          }
        case 'loaded':
          if (_phase == PlaybackPhase.loading) {
            _phase = PlaybackPhase.ready;
            _firstFrameMs = 380;
            _message = '就绪，首帧 380ms';
          } else {
            _message = '只有 loading 才能进入 ready';
          }
        case 'play':
          if (_phase == PlaybackPhase.ready ||
              _phase == PlaybackPhase.paused ||
              _phase == PlaybackPhase.completed) {
            _phase = PlaybackPhase.playing;
            if (_position >= _total) _position = Duration.zero;
            _message = '播放中（\${_speed}x）';
          } else {
            _message = '播放被拒绝：先完成初始化';
          }
        case 'pause':
          if (_phase == PlaybackPhase.playing) {
            _phase = PlaybackPhase.paused;
            _message = '暂停：资源保留，等待恢复';
          }
        case 'interrupt':
          if (_phase == PlaybackPhase.playing) {
            _phase = PlaybackPhase.paused;
            _message = '音频焦点被抢占：系统不会自动恢复';
          }
        case 'release':
          _phase = PlaybackPhase.idle;
          _position = Duration.zero;
          _message = '释放播放器与通知栏控制';
      }
    });
  }

  void _tick() {
    if (_phase != PlaybackPhase.playing) return;
    setState(() {
      _position += Duration(milliseconds: (200 * _speed).round());
      if (_position >= _total) {
        _position = _total;
        _phase = PlaybackPhase.completed;
        _message = '播放完成';
      }
    });
  }

  void _injectSamples() {
    setState(() {
      _bitrates.clear();
      _latencies.clear();
      _stalled = 0;
      for (int i = 0; i < 12; i++) {
        final bool stalled = i % 5 == 0;
        _bitrates.add(900 + _random.nextInt(400) - (stalled ? 300 : 0));
        _latencies.add(320 + _random.nextInt(500) + (stalled ? 900 : 0));
        if (stalled) _stalled++;
      }
    });
  }

  int get _p95 {
    if (_latencies.isEmpty) return 0;
    final List<int> sorted = List<int>.of(_latencies)..sort();
    final int rank = (0.95 * sorted.length).ceil();
    return sorted[min(sorted.length - 1, max(0, rank - 1))];
  }

  @override
  Widget build(BuildContext context) {
    final double progress = _total.inMilliseconds == 0
        ? 0
        : _position.inMilliseconds / _total.inMilliseconds;
    final double avgBitrate = _bitrates.isEmpty
        ? 0
        : _bitrates.reduce((int a, int b) => a + b) / _bitrates.length;
    final double stallRate =
        _bitrates.isEmpty ? 0 : _stalled / _bitrates.length;
    return Scaffold(
      appBar: AppBar(title: const Text('播放状态机与直播指标')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Chip(label: Text('状态 \${_phase.name}')),
          const SizedBox(height: 8),
          LinearProgressIndicator(value: progress.clamp(0.0, 1.0)),
          Text('\${_position.inSeconds}s / \${_total.inSeconds}s · $_message'),
          const SizedBox(height: 12),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: <Widget>[
              FilledButton(
                onPressed: () => _send('init'),
                child: const Text('初始化'),
              ),
              OutlinedButton(
                onPressed: () => _send('loaded'),
                child: const Text('加载完成'),
              ),
              FilledButton(
                onPressed: () =>
                    _send(_phase == PlaybackPhase.playing ? 'pause' : 'play'),
                child: Text(_phase == PlaybackPhase.playing ? '暂停' : '播放'),
              ),
              OutlinedButton(
                onPressed: () => _send('interrupt'),
                child: const Text('模拟来电'),
              ),
              OutlinedButton(
                onPressed: () => _send('release'),
                child: const Text('释放'),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            children: <Widget>[
              for (final double speed in <double>[0.5, 1.0, 1.5, 2.0])
                ChoiceChip(
                  label: Text('\${speed}x'),
                  selected: _speed == speed,
                  onSelected: (_) => setState(() => _speed = speed),
                ),
            ],
          ),
          const Divider(height: 32),
          Text('直播指标（模拟采样，算法真实）',
              style: Theme.of(context).textTheme.titleMedium),
          Text('首帧 $_firstFrameMs ms · 卡顿率 '
              '\${(stallRate * 100).toStringAsFixed(1)}% · '
              '平均码率 \${avgBitrate.toStringAsFixed(0)}kbps · P95 $_p95 ms'),
          Text(
            stallRate >= 0.15
                ? '结论：卡顿偏高，先降档或缩短 GOP'
                : '结论：\${avgBitrate >= 900 && _p95 < 800 ? '质量达标' : '需要关注'}',
            style: Theme.of(context).textTheme.bodySmall,
          ),
          const SizedBox(height: 8),
          FilledButton.tonal(
            onPressed: _injectSamples,
            child: const Text('注入一组弱网样本'),
          ),
          const SizedBox(height: 12),
          Text(
            '真实播放器还要处理：audio_session 音频焦点、audio_service 通知栏 / 锁屏、'
            '缓冲策略、HLS/DASH 清晰度切换与 WeakNetwork 降级。',
            style: Theme.of(context).textTheme.bodySmall,
          ),
        ],
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(milliseconds: 200), (_) => _tick());
  }

  late final Timer _timer;

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }
}
`,$r=`import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

/// 零依赖演示：连接状态机 + 消息去重/排序/缺口补齐。
/// 真实 WebSocket 客户端见 labs/enterprise_app 与第 40 章正文。
void main() => runApp(const RealtimeLabApp());

class RealtimeLabApp extends StatelessWidget {
  const RealtimeLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      home: const RealtimeHome(),
    );
  }
}

enum ConnPhase { idle, connecting, connected, reconnecting, offline }

class RealtimeHome extends StatefulWidget {
  const RealtimeHome({super.key});

  @override
  State<RealtimeHome> createState() => _RealtimeHomeState();
}

class _RealtimeHomeState extends State<RealtimeHome> {
  final Random _random = Random(3);
  final List<int> _ordered = <int>[];
  final List<int> _buffer = <int>[];
  final List<String> _logs = <String>[];

  ConnPhase _phase = ConnPhase.idle;
  int _attempt = 0;
  int _heartbeats = 0;
  int _pongs = 0;
  int _lastSeq = 0;
  int _serverSeq = 0;
  DateTime? _retryAt;
  Timer? _ticker;

  @override
  void initState() {
    super.initState();
    _ticker = Timer.periodic(const Duration(milliseconds: 500), (_) => _tick());
  }

  @override
  void dispose() {
    _ticker?.cancel();
    super.dispose();
  }

  void _log(String message) {
    setState(() {
      _logs.insert(0, message);
      if (_logs.length > 8) _logs.removeLast();
    });
  }

  Duration _delayFor(int attempt) {
    final double base = min(500 * pow(2, attempt).toDouble(), 8000);
    final double factor = 0.8 + _random.nextDouble() * 0.4;
    return Duration(milliseconds: (base * factor).round());
  }

  void _connect() {
    if (_phase == ConnPhase.connected || _phase == ConnPhase.connecting) return;
    setState(() {
      _phase = ConnPhase.connecting;
      _retryAt = null;
    });
    _log('开始连接');
    Timer(const Duration(milliseconds: 800), () {
      if (!mounted || _phase != ConnPhase.connecting) return;
      setState(() {
        _phase = ConnPhase.connected;
        _attempt = 0;
      });
      _log('连接成功');
    });
  }

  void _loseNetwork() {
    setState(() {
      _phase = ConnPhase.reconnecting;
      _attempt = 1;
      _retryAt = DateTime.now().add(_delayFor(0));
    });
    _log('断网：0.5s 后第 1 次重连');
  }

  void _tick() {
    if (_phase == ConnPhase.connected) {
      setState(() {
        _heartbeats++;
        if (_random.nextInt(8) != 0) _pongs++;
      });
    } else if (_phase == ConnPhase.reconnecting &&
        _retryAt != null &&
        DateTime.now().isAfter(_retryAt!)) {
      _connect();
    }
  }

  void _receive(int seq) {
    if (seq <= _lastSeq) {
      _log('丢弃重复/过期 seq=$seq');
      return;
    }
    setState(() {
      if (!_buffer.contains(seq)) _buffer.add(seq);
      _buffer.sort();
      while (_buffer.isNotEmpty && _buffer.first == _lastSeq + 1) {
        _lastSeq++;
        _ordered.add(_lastSeq);
        _buffer.removeAt(0);
      }
    });
    _log('收到 seq=$seq，有序长度 \${_ordered.length}，缺口 \${_buffer.length}');
  }

  void _normal() {
    _serverSeq++;
    _receive(_serverSeq);
  }

  void _duplicate() {
    if (_ordered.isEmpty) return;
    _receive(_ordered.last);
  }

  void _outOfOrder() {
    final int high = _serverSeq + 2;
    _serverSeq = high;
    _receive(high);
    _receive(high - 1);
  }

  void _gap() {
    _serverSeq++;
    _log('服务端漏发 seq=$_serverSeq（可点增量同步补齐）');
    setState(() {});
  }

  void _sync() {
    final int target = _serverSeq;
    for (int seq = _lastSeq + 1; seq <= target; seq++) {
      if (!_ordered.contains(seq)) _receive(seq);
    }
  }

  @override
  Widget build(BuildContext context) {
    final Duration? remain = _retryAt?.difference(DateTime.now());
    return Scaffold(
      appBar: AppBar(title: const Text('连接状态机与可靠消息')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Chip(label: Text('状态 \${_phase.name}')),
          Text('心跳 $_heartbeats · PONG $_pongs · 重试 $_attempt'),
          if (_phase == ConnPhase.reconnecting && remain != null)
            Text('下次重连倒计时：\${remain.inMilliseconds.clamp(0, 9999)}ms'),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: <Widget>[
              FilledButton(onPressed: _connect, child: const Text('连接')),
              OutlinedButton(
                onPressed: _loseNetwork,
                child: const Text('模拟断网'),
              ),
              OutlinedButton(
                onPressed: () => setState(() => _phase = ConnPhase.offline),
                child: const Text('保持离线'),
              ),
            ],
          ),
          const Divider(height: 28),
          Text('已排序 $_ordered · 缺口 \${_buffer.length} · 服务端序号 $_serverSeq'),
          Text('消息序列：\${_ordered.join(' → ')}'),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: <Widget>[
              FilledButton.tonal(
                onPressed: _normal,
                child: const Text('正常消息'),
              ),
              OutlinedButton(
                onPressed: _duplicate,
                child: const Text('重复上一条'),
              ),
              OutlinedButton(
                onPressed: _outOfOrder,
                child: const Text('乱序到达'),
              ),
              OutlinedButton(onPressed: _gap, child: const Text('漏发一条')),
              OutlinedButton(
                onPressed: _sync,
                child: const Text('增量同步'),
              ),
            ],
          ),
          const Divider(height: 28),
          for (final String line in _logs)
            Text('· $line', style: Theme.of(context).textTheme.bodySmall),
        ],
      ),
    );
  }
}
`,Lr=`import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// 零依赖演示：窗口状态、托盘菜单、全局快捷键与更新检查流程。
/// 真实系统能力见 labs/enterprise_app 与第 42 章正文。
void main() => runApp(const DesktopDeepApp());

class DesktopDeepApp extends StatelessWidget {
  const DesktopDeepApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      home: const DesktopDeepHome(),
    );
  }
}

class DesktopDeepHome extends StatefulWidget {
  const DesktopDeepHome({super.key});

  @override
  State<DesktopDeepHome> createState() => _DesktopDeepHomeState();
}

class _DesktopDeepHomeState extends State<DesktopDeepHome> {
  static const String currentVersion = '1.0.0';
  static const String remoteVersion = '1.2.0';

  final List<String> logs = <String>[];

  bool windowVisible = true;
  int hotkeyHits = 0;
  int trayClicks = 0;

  String updateMessage = '尚未检查更新';
  double progress = 0;
  bool downloaded = false;
  Timer? timer;

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  void log(String message) {
    logs.insert(0, message);
    if (logs.length > 10) logs.removeLast();
  }

  void toggleWindow(String source) {
    setState(() {
      windowVisible = !windowVisible;
      if (source == '快捷键') hotkeyHits++;
      log('$source：\${windowVisible ? '显示' : '隐藏'}主窗口');
    });
  }

  KeyEventResult handleKey(FocusNode node, KeyEvent event) {
    if (event is! KeyDownEvent) return KeyEventResult.ignored;
    final HardwareKeyboard keyboard = HardwareKeyboard.instance;
    final bool modifier = keyboard.isMetaPressed || keyboard.isControlPressed;
    if (event.logicalKey == LogicalKeyboardKey.space &&
        modifier &&
        keyboard.isShiftPressed) {
      toggleWindow('快捷键');
      return KeyEventResult.handled;
    }
    return KeyEventResult.ignored;
  }

  void checkUpdate() {
    setState(() {
      updateMessage = '正在检查更新…';
      progress = 0;
      downloaded = false;
    });
    timer?.cancel();
    timer = Timer(const Duration(milliseconds: 600), () {
      if (!mounted) return;
      final bool newer = isNewer(remoteVersion, currentVersion);
      setState(() {
        updateMessage = newer
            ? '发现新版本 $remoteVersion（48.2 MB）'
            : '已是最新版本 $currentVersion';
        log(updateMessage);
      });
    });
  }

  void download() {
    if (downloaded) return;
    timer?.cancel();
    timer = Timer.periodic(const Duration(milliseconds: 150), (Timer t) {
      if (!mounted) {
        t.cancel();
        return;
      }
      setState(() => progress = (progress + 0.1).clamp(0, 1));
      if (progress >= 1) {
        t.cancel();
        setState(() {
          downloaded = true;
          updateMessage = '下载完成（模拟）：真实实现还会校验签名并安装';
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Focus(
      autofocus: true,
      onKeyEvent: handleKey,
      child: Scaffold(
        appBar: AppBar(title: const Text('42 · 桌面深度机制演示')),
        body: ListView(
          padding: const EdgeInsets.all(16),
          children: <Widget>[
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    const Text('模拟桌面与系统托盘'),
                    const SizedBox(height: 8),
                    Container(
                      height: 150,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: Theme.of(context).colorScheme.surfaceContainerHighest,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: AnimatedOpacity(
                        duration: const Duration(milliseconds: 200),
                        opacity: windowVisible ? 1 : 0,
                        child: const Card(
                          child: Padding(
                            padding: EdgeInsets.all(20),
                            child: Text('主窗口 · Cmd / Ctrl + Shift + Space 唤起'),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: <Widget>[
                        Chip(label: Text('快捷键 $hotkeyHits 次')),
                        PopupMenuButton<String>(
                          onOpened: () {
                            setState(() => trayClicks++);
                            log('打开托盘菜单');
                          },
                          onSelected: (String value) {
                            if (value == 'toggle') {
                              toggleWindow('托盘');
                            } else {
                              setState(() => log('退出（模拟）'));
                            }
                          },
                          itemBuilder: (_) => const <PopupMenuEntry<String>>[
                            PopupMenuItem<String>(
                              value: 'toggle',
                              child: Text('显示 / 隐藏窗口'),
                            ),
                            PopupMenuDivider(),
                            PopupMenuItem<String>(
                              value: 'quit',
                              child: Text('退出（模拟）'),
                            ),
                          ],
                          child: Chip(label: Text('托盘菜单 · $trayClicks 次')),
                        ),
                      ],
                    ),
                    Text(
                      '真实托盘点一下图标才弹出菜单；这里用 PopupMenuButton 近似。',
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    const Text('更新检查（安装为 mock）'),
                    const SizedBox(height: 8),
                    Text('当前 $currentVersion · 远端 $remoteVersion'),
                    Text(updateMessage),
                    const SizedBox(height: 8),
                    LinearProgressIndicator(value: progress),
                    Text('进度 \${(progress * 100).toStringAsFixed(0)}%'),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      children: <Widget>[
                        FilledButton(
                          onPressed: checkUpdate,
                          child: const Text('检查更新'),
                        ),
                        OutlinedButton(
                          onPressed: downloaded ? null : download,
                          child: const Text('模拟下载'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            const Text('操作日志'),
            for (final String line in logs)
              Text('· $line', style: Theme.of(context).textTheme.bodySmall),
          ],
        ),
      ),
    );
  }
}

bool isNewer(String remote, String current) {
  final List<int>? a = parseVersion(remote);
  final List<int>? b = parseVersion(current);
  if (a == null || b == null) return false;
  for (int i = 0; i < 3; i++) {
    if (a[i] != b[i]) return a[i] > b[i];
  }
  return false;
}

List<int>? parseVersion(String raw) {
  final RegExpMatch? match =
      RegExp(r'^(\\d+)\\.(\\d+)\\.(\\d+)').firstMatch(raw.trim());
  if (match == null) return null;
  return <int>[
    int.parse(match.group(1)!),
    int.parse(match.group(2)!),
    int.parse(match.group(3)!),
  ];
}
`,Dr=`import 'package:flutter/material.dart';

/// 零依赖演示：本地待办 + outbox + 字段级冲突合并 + 增量游标。
/// 真实 SQLite（schema / 迁移 / 索引 / 事务）见 labs/enterprise_app 第 43 章。
void main() => runApp(const SyncDemoApp());

class SyncDemoApp extends StatelessWidget {
  const SyncDemoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      home: const SyncDemoHome(),
    );
  }
}

class _Todo {
  _Todo(this.id, this.title, {this.done = false, this.version = 1});

  final String id;
  String title;
  bool done;
  int version;
}

enum Policy { server, client, field }

class SyncDemoHome extends StatefulWidget {
  const SyncDemoHome({super.key});

  @override
  State<SyncDemoHome> createState() => _SyncDemoHomeState();
}

class _SyncDemoHomeState extends State<SyncDemoHome> {
  final List<_Todo> local = <_Todo>[
    _Todo('t1', '写周报'),
    _Todo('t2', '修同步冲突'),
  ];

  final List<_Todo> server = <_Todo>[
    _Todo('t1', '写周报'),
    _Todo('t2', '修同步冲突'),
  ];

  final List<String> log = <String>[];
  final Set<String> applied = <String>{};
  Policy policy = Policy.field;
  int outbox = 0;
  int cursor = 0;
  int revision = 0;

  _Todo find(List<_Todo> list, String id) => list.firstWhere((_Todo t) => t.id == id);

  void localEdit() {
    final _Todo t = local.first;
    t.title = '\${t.title}（本地改）';
    t.version++;
    outbox = 1;
    log.insert(0, '本地修改 t1 → v\${t.version}，写入 outbox');
    setState(() {});
  }

  void remoteEdit() {
    final _Todo t = find(server, 't1');
    t.title = '服务端改的标题';
    t.version++;
    revision++;
    cursor = 0;
    log.insert(0, '服务端修改 t1 → v\${t.version}');
    setState(() {});
  }

  void sync() {
    if (outbox > 0) {
      final _Todo mine = local.first;
      final _Todo theirs = find(server, 't1');
      if (theirs.version != mine.version - 1) {
        if (policy == Policy.server) {
          mine.title = theirs.title;
        } else if (policy == Policy.client) {
          theirs.title = mine.title;
        } else {
          mine.title = mine.title.contains('本地改') ? mine.title : theirs.title;
        }
        mine.version = (mine.version > theirs.version ? mine.version : theirs.version) + 1;
        theirs.title = mine.title;
        theirs.version = mine.version;
        log.insert(0, '冲突：\${policy.name} → 合并为「\${mine.title}」v\${mine.version}');
      } else {
        find(server, 't1').title = mine.title;
        find(server, 't1').version = mine.version;
      }
      revision++;
      applied.add('t1:\${mine.version}');
      outbox = 0;
      log.insert(0, '推送成功，幂等键 t1:\${mine.version} 已记录');
    }
    if (revision > cursor) {
      cursor = revision;
      log.insert(0, '按游标拉取增量到 revision=$cursor');
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('离线同步演示')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          Wrap(
            spacing: 8,
            children: <Widget>[
              Chip(label: Text('outbox $outbox')),
              Chip(label: Text('cursor $cursor')),
              Chip(label: Text('幂等键 \${applied.length}')),
            ],
          ),
          const SizedBox(height: 12),
          for (final _Todo t in local)
            ListTile(
              title: Text(t.title, style: TextStyle(
                decoration: t.done ? TextDecoration.lineThrough : null,
              )),
              subtitle: Text('本地 \${t.id} · v\${t.version}'),
              trailing: Text('服务端 v\${find(server, t.id).version}'),
              onTap: () {
                setState(() {
                  t.done = !t.done;
                  t.version++;
                  outbox = 1;
                });
              },
            ),
          const SizedBox(height: 12),
          DropdownButton<Policy>(
            value: policy,
            onChanged: (Policy? v) => setState(() => policy = v ?? policy),
            items: Policy.values
                .map((Policy p) => DropdownMenuItem<Policy>(
                      value: p,
                      child: Text(<String>['服务端优先', '客户端优先', '字段级合并'][p.index]),
                    ))
                .toList(),
          ),
          Wrap(
            spacing: 8,
            children: <Widget>[
              FilledButton(onPressed: localEdit, child: const Text('本地改')),
              OutlinedButton(onPressed: remoteEdit, child: const Text('服务端改')),
              OutlinedButton(onPressed: sync, child: const Text('同步')),
            ],
          ),
          const SizedBox(height: 12),
          for (final String line in log)
            Text('· $line', style: const TextStyle(fontSize: 12)),
        ],
      ),
    );
  }
}
`,Ir=`// 纯 Dart 可运行示例：同一套 Repository 契约跑两个实现，并演示 flaky 判定。
// 真实 Flutter 测试（pump / Semantics / golden）见 labs/enterprise_app/test/。

abstract interface class TodoStore {
  List<String> list();

  String add(String title);

  void toggle(String id);

  void remove(String id);
}

class FakeTodoStore implements TodoStore {
  final Map<String, String> _items = <String, String>{};
  final Map<String, bool> _done = <String, bool>{};
  final Set<String> _deleted = <String>{};
  int _sequence = 0;

  @override
  List<String> list() => _items.keys
      .where((String id) => !_deleted.contains(id))
      .toList(growable: false);

  @override
  String add(String title) {
    _sequence++;
    final String id = 'fake-$_sequence';
    _items[id] = title;
    _done[id] = false;
    return id;
  }

  @override
  void toggle(String id) {
    _require(id);
    _done[id] = !_done[id]!;
  }

  @override
  void remove(String id) {
    _require(id);
    _deleted.add(id);
  }

  void _require(String id) {
    if (!_items.containsKey(id)) throw ArgumentError('missing $id');
  }
}

/// 第二个实现：故意用不同的内部结构（List + Map），验证契约不依赖实现细节。
class ListTodoStore implements TodoStore {
  final List<Map<String, Object>> _rows = <Map<String, Object>>[];
  int _sequence = 0;

  @override
  List<String> list() => _rows
      .where((Map<String, Object> row) => row['deleted'] == false)
      .map((Map<String, Object> row) => row['id']! as String)
      .toList(growable: false);

  @override
  String add(String title) {
    _sequence++;
    final String id = 'list-$_sequence';
    _rows.add(<String, Object>{
      'id': id,
      'title': title,
      'done': false,
      'deleted': false,
    });
    return id;
  }

  @override
  void toggle(String id) {
    final Map<String, Object> row = _find(id);
    row['done'] = !(row['done']! as bool);
  }

  @override
  void remove(String id) {
    _find(id)['deleted'] = true;
  }

  Map<String, Object> _find(String id) {
    for (final Map<String, Object> row in _rows) {
      if (row['id'] == id) return row;
    }
    throw ArgumentError('missing $id');
  }
}

void expectTrue(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

/// 同一套契约：任何实现都必须满足。
void runContract(String name, TodoStore Function() create) {
  final TodoStore store = create();
  expectTrue(store.list().isEmpty, '$name 初始为空');
  final String id = store.add('写周报');
  expectTrue(store.list().length == 1, '$name 新增后可见');
  store.toggle(id);
  store.toggle(id);
  expectTrue(store.list().contains(id), '$name 两次 toggle 仍存在');
  store.remove(id);
  expectTrue(!store.list().contains(id), '$name 删除后隐藏');
  try {
    store.remove('missing');
    throw StateError('FAIL: $name 未对不存在 id 报错');
  } on ArgumentError {
    // 期望行为
  }
  print('PASS contract: $name');
}

enum FlakyStatus { stablePass, stableFail, flaky, insufficient }

FlakyStatus classify(List<bool> results) {
  if (results.length < 5) return FlakyStatus.insufficient;
  final int passes = results.where((bool pass) => pass).length;
  if (passes == results.length) return FlakyStatus.stablePass;
  if (passes == 0) return FlakyStatus.stableFail;
  return FlakyStatus.flaky;
}

void main() {
  runContract('FakeTodoStore', () => FakeTodoStore());
  runContract('ListTodoStore', () => ListTodoStore());

  final List<bool> samples = <bool>[true, false, true, true, false];
  print('flaky 判定: \${classify(samples).name}');
  print('重试 3 次 [F, F, T] → 第 3 次通过：重试只是止血，不是修复');
}
`,Fr=`import 'dart:math' as math;

import 'package:flutter/material.dart';

/// 零依赖可运行示例：坐标域 + 交互 + 动画 + TextPainter 度量。
void main() => runApp(const RenderDeepApp());

class RenderDeepApp extends StatelessWidget {
  const RenderDeepApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      home: const RenderDeepHome(),
    );
  }
}

class ChartPoint {
  const ChartPoint(this.x, this.y);
  final double x;
  final double y;
}

/// 坐标域：数据域只在这一层变成像素。
class ChartScale {
  const ChartScale(this.plot, this.minX, this.maxX, this.minY, this.maxY);

  factory ChartScale.fit(List<ChartPoint> points, Rect plot) {
    double minX = points.first.x;
    double maxX = points.first.x;
    double minY = 0;
    double maxY = points.first.y;
    for (final ChartPoint p in points) {
      minX = math.min(minX, p.x);
      maxX = math.max(maxX, p.x);
      minY = math.min(minY, p.y);
      maxY = math.max(maxY, p.y);
    }
    if (maxX == minX) maxX = minX + 1;
    if (maxY == minY) maxY = minY + 1;
    return ChartScale(plot, minX, maxX, minY, maxY);
  }

  final Rect plot;
  final double minX;
  final double maxX;
  final double minY;
  final double maxY;

  double xToPixel(double x) =>
      plot.left + (x - minX) / (maxX - minX) * plot.width;

  double yToPixel(double y) =>
      plot.bottom - (y - minY) / (maxY - minY) * plot.height;

  Offset toPixel(ChartPoint p) => Offset(xToPixel(p.x), yToPixel(p.y));

  List<double> yTicks(int count) {
    final double span = maxY - minY;
    if (span <= 0 || count < 2) return <double>[minY, maxY];
    final double raw = span / (count - 1);
    final double magnitude =
        math.pow(10, (math.log(raw) / math.ln10).floor()).toDouble();
    final double residual = raw / magnitude;
    final double step = magnitude *
        (residual <= 1
            ? 1
            : residual <= 2
                ? 2
                : residual <= 5
                    ? 5
                    : 10);
    final List<double> ticks = <double>[];
    for (double v = (minY / step).floor() * step;
        v <= maxY + step * 0.5;
        v += step) {
      if (v >= minY - step * 0.5) ticks.add(v);
    }
    return ticks;
  }
}

int nearestIndex(List<ChartPoint> points, double x) {
  int best = 0;
  for (int i = 1; i < points.length; i++) {
    if ((points[i].x - x).abs() < (points[best].x - x).abs()) best = i;
  }
  return best;
}

class RenderDeepHome extends StatefulWidget {
  const RenderDeepHome({super.key});

  @override
  State<RenderDeepHome> createState() => _RenderDeepHomeState();
}

class _RenderDeepHomeState extends State<RenderDeepHome>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 700),
  )..forward();

  final List<ChartPoint> _points = List<ChartPoint>.generate(
    24,
    (int i) => ChartPoint(i.toDouble(), 1200 + math.sin(i / 2) * 260 + i * 18),
  );

  int? _selected;
  bool _bar = false;
  double _width = 220;
  int _maxLines = 2;
  bool _rtl = false;
  final String _text = 'Flutter 的排版由 Paragraph 负责，换行、省略号与 RTL '
      '都在这一层处理。Emoji 👨‍👩‍👧‍👦 按字素簇计算。';

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _pick(Offset local, Size size) {
    final Rect plot = Rect.fromLTWH(44, 12, size.width - 56, size.height - 40);
    final ChartScale scale = ChartScale.fit(_points, plot);
    final double dataX = scale.minX +
        (local.dx - plot.left) / plot.width * (scale.maxX - scale.minX);
    setState(() => _selected = nearestIndex(_points, dataX));
  }

  @override
  Widget build(BuildContext context) {
    final TextPainter probe = TextPainter(
      text: TextSpan(
        text: _text,
        style: const TextStyle(fontSize: 16, height: 1.4),
      ),
      textDirection: _rtl ? TextDirection.rtl : TextDirection.ltr,
      maxLines: _maxLines,
      ellipsis: '…',
      textScaler: TextScaler.noScaling,
    )..layout(maxWidth: _width);

    return Scaffold(
      appBar: AppBar(title: const Text('渲染深水区：坐标域 · 交互 · 排版')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: <Widget>[
          SegmentedButton<bool>(
            segments: const <ButtonSegment<bool>>[
              ButtonSegment<bool>(value: false, label: Text('折线')),
              ButtonSegment<bool>(value: true, label: Text('柱状')),
            ],
            selected: <bool>{_bar},
            onSelectionChanged: (Set<bool> value) {
              setState(() => _bar = value.first);
            },
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: 260,
            child: LayoutBuilder(
              builder: (BuildContext context, BoxConstraints constraints) {
                final Size size =
                    Size(constraints.maxWidth, constraints.maxHeight);
                return GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTapDown: (TapDownDetails d) =>
                      _pick(d.localPosition, size),
                  onPanUpdate: (DragUpdateDetails d) =>
                      _pick(d.localPosition, size),
                  child: AnimatedBuilder(
                    animation: _controller,
                    builder: (BuildContext context, Widget? child) {
                      return CustomPaint(
                        painter: _ChartPainter(
                          points: _points,
                          bar: _bar,
                          selected: _selected,
                          progress: Curves.easeOutCubic
                              .transform(_controller.value),
                          color: Theme.of(context).colorScheme.primary,
                          grid: Theme.of(context).colorScheme.outlineVariant,
                        ),
                        size: size,
                      );
                    },
                  ),
                );
              },
            ),
          ),
          Text(
            _selected == null
                ? '点击图表查看数值'
                : 'x=\${_points[_selected!].x.toStringAsFixed(0)} · '
                    'y=\${_points[_selected!].y.toStringAsFixed(1)}',
            style: Theme.of(context).textTheme.labelLarge,
          ),
          const Divider(height: 32),
          Text('TextPainter 度量', style: Theme.of(context).textTheme.titleMedium),
          Row(
            children: <Widget>[
              Text('宽度 \${_width.round()}'),
              Expanded(
                child: Slider(
                  value: _width,
                  min: 100,
                  max: 340,
                  onChanged: (double v) => setState(() => _width = v),
                ),
              ),
            ],
          ),
          Row(
            children: <Widget>[
              Text('行数 $_maxLines'),
              Expanded(
                child: Slider(
                  value: _maxLines.toDouble(),
                  min: 1,
                  max: 6,
                  divisions: 5,
                  onChanged: (double v) =>
                      setState(() => _maxLines = v.round()),
                ),
              ),
              const Text('RTL'),
              Switch(
                value: _rtl,
                onChanged: (bool v) => setState(() => _rtl = v),
              ),
            ],
          ),
          Text(
            '行数 \${probe.computeLineMetrics().length} · 尺寸 '
            '\${probe.width.toStringAsFixed(1)} × '
            '\${probe.height.toStringAsFixed(1)} · '
            '\${probe.didExceedMaxLines ? '已省略' : '未截断'}',
          ),
          Container(
            width: _width + 2,
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              border: Border.all(color: Theme.of(context).colorScheme.outline),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Text(
              _text,
              textDirection: _rtl ? TextDirection.rtl : TextDirection.ltr,
              maxLines: _maxLines,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 16, height: 1.4),
            ),
          ),
        ],
      ),
    );
  }
}

class _ChartPainter extends CustomPainter {
  _ChartPainter({
    required this.points,
    required this.bar,
    required this.selected,
    required this.progress,
    required this.color,
    required this.grid,
  });

  final List<ChartPoint> points;
  final bool bar;
  final int? selected;
  final double progress;
  final Color color;
  final Color grid;

  @override
  void paint(Canvas canvas, Size size) {
    final Rect plot = Rect.fromLTWH(44, 12, size.width - 56, size.height - 40);
    final ChartScale scale = ChartScale.fit(points, plot);
    final Paint gridPaint = Paint()..color = grid;
    for (final double tick in scale.yTicks(4)) {
      final double y = scale.yToPixel(tick);
      canvas.drawLine(
        Offset(plot.left, y),
        Offset(plot.right, y),
        gridPaint,
      );
    }
    if (bar) {
      final double slot = plot.width / points.length;
      final double zeroY = scale.yToPixel(0);
      for (int i = 0; i < points.length; i++) {
        if (i > progress * points.length) break;
        final double x = scale.xToPixel(points[i].x);
        final double top = scale.yToPixel(points[i].y);
        canvas.drawRect(
          Rect.fromLTRB(
            x - slot * 0.3,
            top,
            x + slot * 0.3,
            zeroY,
          ),
          Paint()..color = color.withValues(alpha: 0.75),
        );
      }
    } else {
      final Path path = Path();
      for (int i = 0; i < points.length; i++) {
        if (i > progress * points.length) break;
        final Offset p = scale.toPixel(points[i]);
        if (i == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      canvas.drawPath(
        path,
        Paint()
          ..color = color
          ..strokeWidth = 2.4
          ..style = PaintingStyle.stroke,
      );
    }

    if (selected != null) {
      final Offset p = scale.toPixel(points[selected!]);
      canvas.drawLine(
        Offset(p.dx, plot.top),
        Offset(p.dx, plot.bottom),
        Paint()..color = color.withValues(alpha: 0.5),
      );
      canvas.drawCircle(p, 4, Paint()..color = color);
    }
  }

  @override
  bool shouldRepaint(_ChartPainter old) =>
      old.progress != progress ||
      old.selected != selected ||
      old.bar != bar ||
      old.points != points;
}
`,Mr=`/// 纯 Dart 预算校验脚本：可直接 \`dart run\`，也可作为 CI 原型。
///
/// 它不做真实解码或网络请求，只验证「口径 → 预算 → 回归」这条链路。
void main() {
  _checkImageBudget();
  _checkWaterfall();
  _checkFirstScreen();
  _checkPower();
  _checkRegression();
}

void _checkImageBudget() {
  const int width = 1080;
  const int height = 1920;
  const int count = 6;
  const double budgetMb = 64;

  final double perImageMb = width * height * 4 / (1024 * 1024);
  final double totalMb = perImageMb * count;
  print('图片：单图 \${perImageMb.toStringAsFixed(2)}MB，'
      '$count 张 \${totalMb.toStringAsFixed(2)}MB / 预算 \${budgetMb}MB');
  print('结论：\${_verdict(totalMb, budgetMb)}');
}

void _checkWaterfall() {
  final List<_Span> spans = <_Span>[
    const _Span('config', 0, 60, 90),
    const _Span('user', 10, 90, 180),
    const _Span('feed#1', 20, 110, 420),
    const _Span('feed#2', 25, 120, 380),
    const _Span('avatar#1', 200, 80, 330),
    const _Span('avatar#2', 200, 80, 330, cacheHit: true),
  ];
  final int serial =
      spans.fold<int>(0, (int sum, _Span s) => sum + s.durationMs);
  final int critical = spans
      .map((_Span s) => s.endMs)
      .reduce((int a, int b) => a > b ? a : b);
  final int firstByte = spans
      .map((_Span s) => s.startMs + s.ttfbMs)
      .reduce((int a, int b) => a < b ? a : b);
  final int duplicates = _duplicates(spans);
  print('瀑布：串行 \${serial}ms，关键路径 \${critical}ms，'
      'TTFB \${firstByte}ms，重复请求 $duplicates');
}

void _checkFirstScreen() {
  const int firstFrame = 260;
  const int interactive = 540;
  const int frameBudget = 300;
  const int interactiveBudget = 600;
  print('首屏：首帧 \${firstFrame}ms / \${frameBudget}ms，'
      '可交互 \${interactive}ms / \${interactiveBudget}ms');
  print('结论：\${_verdict(interactive.toDouble(), interactiveBudget.toDouble())}');
}

void _checkPower() {
  const double screenMinutes = 30;
  const double cpuPercent = 25;
  const double networkMb = 40;
  const double budgetMah = 180;
  final double estimated =
      screenMinutes * (0.6 + cpuPercent / 100 * 0.9) + networkMb * 2.4;
  print('功耗：估算 \${estimated.toStringAsFixed(1)}mAh / '
      '预算 \${budgetMah.toStringAsFixed(0)}mAh');
  print('结论：\${_verdict(estimated, budgetMah)}');
}

void _checkRegression() {
  const Map<String, double> baseline = <String, double>{
    '首帧': 210,
    'TTFB': 90,
    '解码': 42,
  };
  const Map<String, double> current = <String, double>{
    '首帧': 236,
    'TTFB': 112,
    '解码': 39,
  };
  const double tolerance = 10;
  for (final String key in baseline.keys) {
    final double delta = (current[key]! - baseline[key]!) / baseline[key]! * 100;
    print('回归：$key \${baseline[key]} → \${current[key]} '
        '(\${delta.toStringAsFixed(1)}%) '
        '\${delta <= tolerance ? '通过' : '失败'}');
  }
}

String _verdict(double value, double budget) {
  if (value <= budget) return '达标';
  if (value <= budget * 1.2) return '接近上限';
  return '超出预算';
}

int _duplicates(List<_Span> spans) {
  final Map<String, int> counts = <String, int>{};
  for (final _Span span in spans) {
    final String key = span.name.split('#').first;
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts.values
      .fold<int>(0, (int sum, int count) => sum + (count > 1 ? count - 1 : 0));
}

class _Span {
  const _Span(
    this.name,
    this.startMs,
    this.ttfbMs,
    this.endMs, {
    this.cacheHit = false,
  });

  final String name;
  final int startMs;
  final int ttfbMs;
  final int endMs;
  final bool cacheHit;

  int get durationMs => endMs - startMs;
}
`,Wr=`/// 国际化工程化最小实验：复数类别、性别选择、数字格式、伪本地化、key 审计。
///
/// 纯 Dart，无第三方依赖；可直接运行观察输出。
void main() {
  const List<String> locales = <String>['en', 'zh', 'ar'];

  for (final String locale in locales) {
    print('=== $locale ===');
    print(_plural(locale, 0));
    print(_plural(locale, 1));
    print(_plural(locale, 2));
    print(_plural(locale, 11));
    print(_selectGender(locale, 'female'));
    print(_selectGender(locale, 'other'));
    print('currency: \${_currency(locale, 1288.5)}');
    print('compact: \${_group(1288000, locale)}');
    print('pseudo: \${_pseudo(_greeting(locale, 'Ada'))}');
  }

  print('=== 审计 ===');
  final List<Map<String, String>> audits = <Map<String, String>>[
    <String, String>{'en': 'greeting', 'zh': 'greeting', 'ar': 'greeting'},
    <String, String>{'en': 'greeting, inbox', 'zh': 'greeting', 'ar': 'inbox'},
  ];
  for (final Map<String, String> arbs in audits) {
    print(_audit(arbs));
  }
}

String _plural(String locale, int count) {
  final String category = _category(locale, count);
  final Map<String, String> forms = <String, Map<String, String>>{
    'en': <String, String>{
      'zero': 'No messages',
      'one': 'One message',
      'other': '$count messages',
    },
    'zh': <String, String>{
      'zero': '没有消息',
      'one': '1 条消息',
      'other': '$count 条消息',
    },
    'ar': <String, String>{
      'zero': 'لا رسائل',
      'one': 'رسالة واحدة',
      'two': 'رسالتان',
      'few': '$count رسائل',
      'many': '$count رسالة',
      'other': '$count رسالة',
    },
  }[locale]!;
  return '[\${locale.padRight(2)}] $category → \${forms[category] ?? forms['other']}';
}

String _category(String locale, int count) {
  if (locale == 'zh') return count == 0 ? 'zero' : 'other';
  if (locale == 'ar') {
    if (count == 0) return 'zero';
    if (count == 1) return 'one';
    if (count == 2) return 'two';
    if (count % 100 >= 3 && count % 100 <= 10) return 'few';
    if (count % 100 >= 11 && count % 100 <= 99) return 'many';
    return 'other';
  }
  return count == 1 ? 'one' : 'other';
}

String _selectGender(String locale, String gender) {
  final Map<String, Map<String, String>> words =
      <String, Map<String, String>>{
    'en': <String, String>{
      'female': 'She',
      'male': 'He',
      'other': 'They',
    },
    'zh': <String, String>{
      'female': '她',
      'male': '他',
      'other': 'TA',
    },
    'ar': <String, String>{
      'female': 'قامت',
      'male': 'قام',
      'other': 'قاموا',
    },
  };
  return '[\${locale.padRight(2)}] $gender → \${words[locale]![gender]} updated the profile';
}

String _greeting(String locale, String name) {
  final Map<String, String> templates = <String, String>{
    'en': 'Hello, {name}',
    'zh': '你好，{name}',
    'ar': 'مرحبًا، {name}',
  };
  return templates[locale]!.replaceFirst('{name}', name);
}

String _currency(String locale, double amount) {
  final String formatted = _group(amount, locale);
  switch (locale) {
    case 'zh':
      return '¥$formatted';
    case 'ar':
      return '$formatted د.إ';
    default:
      return '\\$$formatted';
  }
}

String _group(double value, String locale) {
  final String fixed = value.toStringAsFixed(value == value.roundToDouble() ? 0 : 2);
  final List<String> parts = fixed.split('.');
  final StringBuffer grouped = StringBuffer();
  for (int i = 0; i < parts.first.length; i++) {
    if (i > 0 && (parts.first.length - i) % 3 == 0) {
      grouped.write(locale == 'ar' ? '٬' : ',');
    }
    grouped.write(parts.first[i]);
  }
  final String result = parts.length > 1
      ? '\${grouped.toString()}\${locale == 'ar' ? '٫' : '.'}\${parts[1]}'
      : grouped.toString();
  return locale == 'ar' ? _arabicDigits(result) : result;
}

String _arabicDigits(String input) {
  const String western = '0123456789';
  const String arabic = '٠١٢٣٤٥٦٧٨٩';
  final StringBuffer buffer = StringBuffer();
  for (final String ch in input.split('')) {
    final int index = western.indexOf(ch);
    buffer.write(index >= 0 ? arabic[index] : ch);
  }
  return buffer.toString();
}

String _pseudo(String input) {
  const Map<String, String> accents = <String, String>{
    'a': 'á', 'b': 'ƀ', 'c': 'ç', 'd': 'ð', 'e': 'é', 'f': 'ƒ',
    'g': 'ĝ', 'h': 'ĥ', 'i': 'í', 'j': 'ĵ', 'k': 'ķ', 'l': 'ļ',
    'm': 'ɱ', 'n': 'ñ', 'o': 'ó', 'p': 'þ', 'q': 'զ', 'r': 'ŕ',
    's': 'š', 't': 'ţ', 'u': 'ú', 'v': 'ṽ', 'w': 'ŵ', 'x': 'ẋ',
    'y': 'ý', 'z': 'ž',
  };
  final StringBuffer buffer = StringBuffer('⟦');
  for (final String ch in input.split('')) {
    buffer.write(accents[ch] ?? ch);
  }
  final int pad = (input.length * 0.3).ceil();
  buffer
    ..write(List<String>.filled(pad, '·').join())
    ..write('⟧');
  return buffer.toString();
}

String _audit(Map<String, String> arbs) {
  final Set<String> template =
      arbs['en']!.split(',').map((String s) => s.trim()).toSet();
  final List<String> issues = <String>[];
  for (final String locale in arbs.keys) {
    if (locale == 'en') continue;
    final Set<String> keys =
        arbs[locale]!.split(',').map((String s) => s.trim()).toSet();
    for (final String key in template.difference(keys)) {
      issues.add('$locale 缺失 $key');
    }
    for (final String key in keys.difference(template)) {
      issues.add('$locale 多余 $key');
    }
  }
  return issues.isEmpty ? '通过：key 一致' : issues.join('；');
}
`,zr=`/// 安全落地机制最小实验：日志脱敏、导航白名单、Bridge 授权、完整性分级。
///
/// 纯 Dart，无第三方依赖；直接运行观察输出。
/// 证书 pin 这里用 FNV-1a 代替 SHA-256，只为演示「比对 + 轮换」的判定逻辑；
/// 生产必须用 \`package:crypto\` 的 SHA-256 / HMAC。
void main() {
  print('=== 1. 日志脱敏 ===');
  const String raw =
      'Authorization: Bearer demo.token\\n'
      'mail=ada@example.com phone=13800138000 ip=203.0.113.7';
  final Redaction redaction = Redaction.defaults();
  print(redaction.apply(raw).text);

  print('\\n=== 2. 导航白名单 ===');
  for (final String url in <String>[
    'https://app.example.com/home',
    'https://app.example.com/admin',
    'https://evil.example.com/home',
    'file:///etc/passwd',
  ]) {
    final Allowed decision = allowNavigation(url);
    print('$url -> \${decision.allowed ? '允许' : '拒绝'}（\${decision.reason}）');
  }

  print('\\n=== 3. Bridge 授权 ===');
  const Map<String, String> methodScopes = <String, String>{
    'getUserProfile': 'profile:read',
    'saveSettings': 'settings:write',
  };
  for (final String method in <String>['getUserProfile', 'saveSettings', 'deleteAccount']) {
    final Allowed decision = authorizeBridge(
      method: method,
      grantedScopes: const <String>{'profile:read'},
      payloadBytes: 512,
      maxPayloadBytes: 4096,
      methodScopes: methodScopes,
    );
    print('$method -> \${decision.allowed ? '允许' : '拒绝'}（\${decision.reason}）');
  }

  print('\\n=== 4. 证书 pin 与轮换 ===');
  final String primary = fnv1a('cert-current');
  final String backup = fnv1a('cert-rotated');
  for (final String presented in <String>['cert-current', 'cert-rotated', 'cert-rogue']) {
    print('$presented -> \${verifyPin(primary, backup, presented)}');
  }
  print('剩余 10 天，是否进入轮换窗口：\${shouldRotate(10)}');
  print('剩余 40 天，是否进入轮换窗口：\${shouldRotate(40)}');

  print('\\n=== 5. 完整性分级 ===');
  for (final Set<String> signals in <Set<String>>[
    <String>{},
    <String>{'debugger'},
    <String>{'rooted', 'hooked', 'debugger'},
  ]) {
    print('$signals -> \${assessIntegrity(signals)}');
  }
}

class RedactionRule {
  const RedactionRule(this.name, this.pattern, this.replacement);

  final String name;
  final RegExp pattern;
  final String replacement;
}

class RedactionResult {
  const RedactionResult(this.text, this.hits);

  final String text;
  final List<String> hits;
}

class Redaction {
  const Redaction(this.rules);

  final List<RedactionRule> rules;

  factory Redaction.defaults() => Redaction(<RedactionRule>[
        RedactionRule(
          'bearerToken',
          RegExp(r'Bearer\\s+[A-Za-z0-9._~+/=-]+', caseSensitive: false),
          'Bearer [TOKEN]',
        ),
        RedactionRule(
          'email',
          RegExp(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}'),
          '[EMAIL]',
        ),
        RedactionRule(
          'idCard',
          RegExp(r'\\d{17}[\\dXx]'),
          '[ID]',
        ),
        RedactionRule(
          'phone',
          RegExp(r'1[3-9]\\d{9}'),
          '[PHONE]',
        ),
        RedactionRule(
          'ipv4',
          RegExp(r'(?<!\\d)(?:\\d{1,3}\\.){3}\\d{1,3}(?!\\d)'),
          '[IP]',
        ),
      ]);

  RedactionResult apply(String input) {
    String output = input;
    final List<String> hits = <String>[];
    for (final RedactionRule rule in rules) {
      final int count = rule.pattern.allMatches(output).length;
      if (count == 0) continue;
      output = output.replaceAll(rule.pattern, rule.replacement);
      hits.add('\${rule.name}×$count');
    }
    return RedactionResult(output, hits);
  }
}

class Allowed {
  const Allowed(this.allowed, this.reason);

  final bool allowed;
  final String reason;
}

Allowed allowNavigation(String url) {
  final Uri? uri = Uri.tryParse(url);
  if (uri == null || !uri.hasScheme) {
    return const Allowed(false, 'URL 无法解析');
  }
  if (uri.scheme != 'https') return Allowed(false, 'scheme \${uri.scheme} 不在白名单');
  if (!<String>{'app.example.com', 'cdn.example.com'}.contains(uri.host)) {
    return Allowed(false, 'host \${uri.host} 不在白名单');
  }
  for (final String prefix in <String>['/logout', '/admin']) {
    if (uri.path.startsWith(prefix)) {
      return Allowed(false, 'path \${uri.path} 命中禁止前缀 $prefix');
    }
  }
  return const Allowed(true, '命中导航白名单');
}

Allowed authorizeBridge({
  required String method,
  required Set<String> grantedScopes,
  required int payloadBytes,
  required int maxPayloadBytes,
  required Map<String, String> methodScopes,
}) {
  final String? requiredScope = methodScopes[method];
  if (requiredScope == null) return const Allowed(false, '方法未注册');
  if (!grantedScopes.contains(requiredScope)) {
    return Allowed(false, '缺少 scope $requiredScope');
  }
  if (payloadBytes > maxPayloadBytes) {
    return const Allowed(false, 'payload 超过体积上限');
  }
  return const Allowed(true, '通过授权');
}

String fnv1a(String input) {
  int hash = 0x811c9dc5;
  for (int i = 0; i < input.length; i++) {
    hash ^= input.codeUnitAt(i);
    hash = (hash * 0x01000193) & 0xFFFFFFFF;
  }
  return hash.toRadixString(16).padLeft(8, '0');
}

String verifyPin(String primary, String backup, String presented) {
  final String digest = fnv1a(presented);
  if (digest == primary) return 'ok（命中主 pin）';
  if (digest == backup) return 'backupUsed（命中备用 pin，应尽快轮换）';
  return 'mismatch（拒绝连接）';
}

bool shouldRotate(int daysLeft, {int leadDays = 30}) => daysLeft < leadDays;

String assessIntegrity(Set<String> signals) {
  const Map<String, int> weights = <String, int>{
    'debugger': 35,
    'emulator': 25,
    'rooted': 40,
    'jailbroken': 40,
    'developerMode': 10,
    'hooked': 45,
    'signatureMismatch': 50,
  };
  final int score = signals.fold<int>(
    0,
    (int sum, String signal) => sum + (weights[signal] ?? 0),
  );
  if (score >= 50) return 'compromised（score $score，阻断敏感能力）';
  if (score >= 25) return 'risky（score $score，降级并二次验证）';
  return 'trusted（score $score，放行）';
}
`,Er=`/// 端侧 AI 最小实验：纯 Dart 小模型推理 + int8 / float16 量化对比 + 版本判定。
///
/// 权重由固定种子生成，仅用于演示推理与量化流程；真实模型来自服务端训练与
/// TFLite Converter，Flutter 端不做训练。
void main() {
  final Mlp model = Mlp.generated();

  print('参数数量：\${model.parameterCount}');
  final List<double> input = normalizeInput(
    <double>[42.0, 1.8, 0.6, 0.7],
    mean: <double>[0.0, 0.0, 0.0, 0.0],
    std: <double>[50.0, 2.0, 1.0, 1.0],
  );

  print('\\n=== float32 ===');
  printPrediction(model.predict(input));

  print('\\n=== float16 ===');
  final QuantizedModel fp16 = quantizeFloat16(model);
  print('体积 \${fp16.bytes} B，最大权重误差 \${fp16.maxAbsError.toStringAsFixed(5)}');
  printPrediction(fp16.model.predict(input));

  print('\\n=== int8 ===');
  final QuantizedModel int8 = quantizeInt8(model);
  print('体积 \${int8.bytes} B，最大权重误差 \${int8.maxAbsError.toStringAsFixed(5)}');
  printPrediction(int8.model.predict(input));

  print('\\n=== 模型版本 ===');
  print('1.5.0 vs 1.4.0 → \${compareVersions('1.5.0', '1.4.0')}');
  print('2.0.0 vs 1.10.0 → \${compareVersions('2.0.0', '1.10.0')}');
  print(evaluateUpdate(
    remoteVersion: '1.5.0',
    installedVersion: '1.4.0',
    remoteMinApp: '2.0.0',
    appVersion: '2.4.0',
  ));
  print(evaluateUpdate(
    remoteVersion: '2.0.0',
    installedVersion: '1.4.0',
    remoteMinApp: '3.0.0',
    appVersion: '2.4.0',
  ));
}

void printPrediction(Prediction prediction) {
  final String probs = <String>[
    for (int i = 0; i < prediction.probabilities.length; i++)
      '\${i}:\${(prediction.probabilities[i] * 100).toStringAsFixed(1)}%',
  ].join(' ');
  print('分类 \${prediction.label}，概率 $probs');
}

class Mlp {
  Mlp({
    required this.inputSize,
    required this.hiddenSize,
    required this.labels,
    required this.w1,
    required this.b1,
    required this.w2,
    required this.b2,
  });

  final int inputSize;
  final int hiddenSize;
  final List<String> labels;
  final List<double> w1;
  final List<double> b1;
  final List<double> w2;
  final List<double> b2;

  int get parameterCount => w1.length + b1.length + w2.length + b2.length;

  factory Mlp.generated() {
    int state = 7;
    double next() {
      state = (state * 1103515245 + 12345) & 0x7FFFFFFF;
      return (state / 0x7FFFFFFF) * 2 - 1;
    }

    const int inputSize = 4;
    const int hiddenSize = 6;
    const List<String> labels = <String>['idle', 'walk', 'run'];
    return Mlp(
      inputSize: inputSize,
      hiddenSize: hiddenSize,
      labels: labels,
      w1: <double>[for (int i = 0; i < hiddenSize * inputSize; i++) next()],
      b1: <double>[for (int i = 0; i < hiddenSize; i++) next() * 0.2],
      w2: <double>[for (int i = 0; i < labels.length * hiddenSize; i++) next()],
      b2: <double>[for (int i = 0; i < labels.length; i++) next() * 0.2],
    );
  }

  List<double> logits(List<double> input) {
    final List<double> hidden = List<double>.filled(hiddenSize, 0);
    for (int h = 0; h < hiddenSize; h++) {
      double sum = b1[h];
      for (int i = 0; i < inputSize; i++) {
        sum += w1[h * inputSize + i] * input[i];
      }
      hidden[h] = sum > 0 ? sum : 0;
    }
    final List<double> output = List<double>.filled(labels.length, 0);
    for (int c = 0; c < labels.length; c++) {
      double sum = b2[c];
      for (int h = 0; h < hiddenSize; h++) {
        sum += w2[c * hiddenSize + h] * hidden[h];
      }
      output[c] = sum;
    }
    return output;
  }

  Prediction predict(List<double> input) {
    final List<double> probs = softmax(logits(input));
    int best = 0;
    for (int i = 1; i < probs.length; i++) {
      if (probs[i] > probs[best]) best = i;
    }
    return Prediction(
      label: labels[best],
      confidence: probs[best],
      probabilities: probs,
    );
  }

  Mlp withWeights(List<double> weights) {
    int offset = 0;
    List<double> take(int count) {
      final List<double> slice = weights.sublist(offset, offset + count);
      offset += count;
      return slice;
    }

    return Mlp(
      inputSize: inputSize,
      hiddenSize: hiddenSize,
      labels: labels,
      w1: take(w1.length),
      b1: take(b1.length),
      w2: take(w2.length),
      b2: take(b2.length),
    );
  }

  List<double> flattenWeights() => <double>[...w1, ...b1, ...w2, ...b2];
}

class Prediction {
  const Prediction({
    required this.label,
    required this.confidence,
    required this.probabilities,
  });

  final String label;
  final double confidence;
  final List<double> probabilities;
}

class QuantizedModel {
  const QuantizedModel({
    required this.model,
    required this.bytes,
    required this.maxAbsError,
  });

  final Mlp model;
  final int bytes;
  final double maxAbsError;
}

QuantizedModel quantizeFloat16(Mlp model) {
  final List<double> weights = model.flattenWeights();
  final List<double> rounded = <double>[
    for (final double weight in weights) roundToFloat16(weight),
  ];
  return QuantizedModel(
    model: model.withWeights(rounded),
    bytes: rounded.length * 2,
    maxAbsError: maxAbsError(weights, rounded),
  );
}

QuantizedModel quantizeInt8(Mlp model) {
  final List<double> weights = model.flattenWeights();
  double maxAbs = 0;
  for (final double weight in weights) {
    if (weight.abs() > maxAbs) maxAbs = weight.abs();
  }
  final double scale = maxAbs == 0 ? 1 : maxAbs / 127.0;
  final List<int> q = <int>[
    for (final double weight in weights) (weight / scale).round().clamp(-127, 127),
  ];
  final List<double> dequantized = <double>[
    for (final int value in q) value * scale,
  ];
  return QuantizedModel(
    model: model.withWeights(dequantized),
    bytes: q.length + 4,
    maxAbsError: maxAbsError(weights, dequantized),
  );
}

double roundToFloat16(double value) {
  if (value == 0) return 0;
  final bool negative = value < 0;
  double abs = value.abs();
  int exponent = 0;
  while (abs >= 2) {
    abs /= 2;
    exponent++;
  }
  while (abs < 1) {
    abs *= 2;
    exponent--;
  }
  const double step = 1 / 1024;
  double rounded = (abs / step).round() * step;
  if (rounded >= 2) {
    rounded = 1;
    exponent++;
  }
  double result = rounded;
  if (exponent > 0) {
    for (int i = 0; i < exponent; i++) {
      result *= 2;
    }
  } else if (exponent < 0) {
    for (int i = 0; i < -exponent; i++) {
      result /= 2;
    }
  }
  return negative ? -result : result;
}

double maxAbsError(List<double> original, List<double> rounded) {
  double worst = 0;
  for (int i = 0; i < original.length; i++) {
    final double diff = (original[i] - rounded[i]).abs();
    if (diff > worst) worst = diff;
  }
  return worst;
}

List<double> softmax(List<double> logits) {
  double maxLogit = logits[0];
  for (final double value in logits) {
    if (value > maxLogit) maxLogit = value;
  }
  final List<double> expValues = <double>[];
  double total = 0;
  for (final double value in logits) {
    double expValue = 1.0;
    double term = value - maxLogit;
    // e^x 的级数展开，避免依赖 dart:math 之外的实现差异。
    double factor = 1;
    for (int i = 1; i <= 20; i++) {
      factor *= term / i;
      expValue += factor;
    }
    expValues.add(expValue);
    total += expValue;
  }
  return <double>[for (final double value in expValues) value / total];
}

List<double> normalizeInput(
  List<double> raw, {
  required List<double> mean,
  required List<double> std,
}) {
  return <double>[
    for (int i = 0; i < raw.length; i++)
      std[i] == 0 ? 0 : (raw[i] - mean[i]) / std[i],
  ];
}

int compareVersions(String a, String b) {
  List<int> parts(String version) => <int>[
        for (final String segment in version.split('.'))
          int.tryParse(segment.replaceAll(RegExp(r'[^0-9]'), '')) ?? 0,
      ];
  final List<int> left = parts(a);
  final List<int> right = parts(b);
  final int length = left.length > right.length ? left.length : right.length;
  for (int i = 0; i < length; i++) {
    final int l = i < left.length ? left[i] : 0;
    final int r = i < right.length ? right[i] : 0;
    if (l != r) return l > r ? 1 : -1;
  }
  return 0;
}

String evaluateUpdate({
  required String remoteVersion,
  required String installedVersion,
  required String remoteMinApp,
  required String appVersion,
}) {
  if (compareVersions(remoteMinApp, appVersion) > 0) {
    return '阻断：远端模型要求 app >= $remoteMinApp';
  }
  final int diff = compareVersions(remoteVersion, installedVersion);
  if (diff > 0) return '可热更新到 $remoteVersion';
  if (diff == 0) return '版本一致，无需更新';
  return '拒绝降级到 $remoteVersion';
}
`,Rr={"dart-variables":$a,"dart-functions":La,"dart-classes":Da,"dart-async":Ia,"widget-stateless":Fa,"widget-stateful":Ma,"widget-lifecycle":Wa,"widget-composition-card":za,"layout-basics":Ea,"layout-flex":Ra,"widgets-catalog":Va,"state-inherited":Na,"router-basic":Ha,"network-http":Oa,"custom-paint-widget":qa,"animation-basic":Ua,"future-stream-playground":ja,"performance-basics":Ga,"performance-diagnostics":Ka,"jank-diagnosis":Xa,"memory-governance":Ya,"startup-optimization":Qa,"app-size":Za,"scroll-performance":Ja,"performance-testing":nr,impeller:er,"renderobject-layout":tr,painting:ir,"fragment-shader":or,"animation-advanced":ar,"platform-view":rr,"clean-architecture":sr,"state-management-deep":lr,modularization:dr,testing:cr,observability:ur,"code-quality":pr,pigeon:mr,"native-plugin":hr,"system-capabilities":gr,"multi-platform":fr,isolate:_r,ffi:vr,"data-layer":Sr,gestures:xr,security:br,"a11y-i18n":yr,frontier:kr,selection:Pr,"desktop-ui":Tr,"enterprise-scaffold":Cr,"image-pipeline":wr,"editor-interactions":Br,"media-live":Ar,"realtime-im":$r,"desktop-deep":Lr,"persistence-offline-sync":Dr,"testing-engineering":Ir,"rendering-layout-deep":Fr,"performance-metrics":Mr,"i18n-engineering":Wr,"security-hardening":zr,"on-device-ai":Er},Vr=["href"],Nr=["src"],Hr=f({__name:"DartPad",props:{id:{},sample:{},example:{},code:{},height:{default:480},run:{type:Boolean,default:!1},theme:{default:"auto"}},setup(n){const e=n,{isDark:t}=kn(),i=C(),o=C(),s=C(!1),l=C(!1),u=b(()=>e.code??(e.example?Rr[e.example]:void 0)),p=b(()=>e.theme==="auto"?t.value?"dark":"light":e.theme);function y($){const D=new URLSearchParams({theme:p.value});return $&&D.set("embed","true"),e.id&&D.set("id",e.id),e.sample&&D.set("sample",e.sample),e.run&&D.set("run","true"),`https://dartpad.dev/?${D.toString()}`}const T=b(()=>y(!0)),S=b(()=>y(!1)),k=b(()=>typeof e.height=="number"?`${e.height}px`:e.height);function w($){var D,F,W;$.origin!=="https://dartpad.dev"||!u.value||((D=$.data)==null?void 0:D.type)==="ready"&&((W=(F=o.value)==null?void 0:F.contentWindow)==null||W.postMessage({type:"sourceCode",sourceCode:u.value},"https://dartpad.dev"))}let B;return V(()=>{l.value=window.matchMedia("(max-width: 640px)").matches,!l.value&&(window.addEventListener("message",w),B=new IntersectionObserver($=>{$.some(D=>D.isIntersecting)&&(s.value=!0,B==null||B.disconnect())},{rootMargin:"256px"}),i.value&&B.observe(i.value))}),$n(()=>{window.removeEventListener("message",w),B==null||B.disconnect()}),($,D)=>(a(),c("div",{ref_key:"wrapper",ref:i,class:"dartpad"},[l.value?(a(),c("a",{key:0,class:"dartpad__link",href:S.value,target:"_blank",rel:"noopener noreferrer"}," 在 DartPad 中打开并运行此示例 → ",8,Vr)):s.value?(a(),c("iframe",{key:1,ref_key:"frame",ref:o,src:T.value,style:X({height:k.value}),class:"dartpad__frame",title:"DartPad 在线运行",allow:"clipboard-write"},null,12,Nr)):(a(),c("div",{key:2,class:"dartpad__placeholder",style:X({height:k.value})}," DartPad 运行环境将在滚动到此处时加载… ",4))],512))}}),Or=x(Hr,[["__scopeId","data-v-69667923"]]),Ur={extends:Aa,enhanceApp({app:n}){n.component("DartPad",Or)}};export{Ur as R,uo as c,P as u};
