const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};V();let v;const F=new Uint8Array(16);function K(){if(!v&&(v=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(F)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function W(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}const J=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var N={randomUUID:J};function U(e,t,n){if(N.randomUUID&&!t&&!e)return N.randomUUID();e=e||{};const c=e.random||(e.rng||K)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=c[o];return t}return W(c)}const d=[{label:"Leonardo",count:0},{label:"Rapha\xEBl",count:0},{label:"Donatello",count:0},{label:"Michelangelo",count:0},{label:"Splinter",count:0},{label:"Shredder",count:0},{label:"Krang",count:0}],j=["Silent","Big","Sad","Dark","Agile","Fragile","Dumb","Dead","Ghost","Snake","Mysterious","Clumsy","Hollow","Iron","Golden","Gracefull","Invisible"],$=["Killer","Soldier","Assassin","Demon","Hunter","Spider","Bullet","Buildozer","Stalker","Samaritan","Ninja","Thunder","Wolf","Shade","Dagger","Master"],k="https://cookie.rct.re",R=e=>{const t=Math.pow(10,Math.ceil(Math.log(Math.ceil(e))/Math.LN10))/100;return Math.round(e/t)*t},Y=e=>{let t=e+9;return e>=5&&(t+=Math.pow(e-5,1.75)*5),t*=Math.pow(10,e),t*=Math.max(1,e-14),t},_=(e,t)=>{const n=Y(e),c=R(n);return Math.ceil(c*Math.pow(1.15,Math.max(0,t)))},z=e=>(e===0&&(e=.1),Math.ceil(Math.pow(e*1,e*.5+2)*10)/10),Z=e=>{const t=z(e),n=R(t);return Math.round(t/n)*n},M=e=>+e.toFixed(1),I=document.getElementById("clicker"),Q=document.getElementById("count"),X=document.getElementById("total"),ee=document.getElementById("per-seconds"),w=document.getElementById("timer"),te=document.getElementById("name"),ne=document.getElementById("bonus-list"),P=document.getElementById("bonus-template"),r=document.getElementById("shuriken"),oe=document.getElementById("reset"),O=document.getElementById("notifications-list"),ce=document.getElementById("notification-template"),ie=document.getElementById("new-name"),H=document.getElementById("popup"),ae=document.getElementById("close-popup-button");let s=0,h=0,f=0,m=!1,B,u,l;async function re(){try{const e=await fetch(`${k}/bonus/${l}`),t=await e.json();if(e.ok)return t}catch(e){console.error(e)}}async function se(){try{const e=await fetch(`${k}/bonus/${l}`),t=await e.json();if(e.ok)return t}catch(e){console.error(e)}}async function le(){try{const e=await fetch(`${k}/bonus/${l}`,{method:"POST",body:JSON.stringify({score:f,bank:s,clickPerSeconds:h,name:u,hasBoost:m}),headers:{"Content-Type":"application/json"}});if(await e.json(),e.ok)return!0}catch(e){console.error(e)}}async function de(){try{const e=await fetch(`${k}/bonus/${l}`,{method:"POST",body:JSON.stringify({store:d}),headers:{"Content-Type":"application/json"}});if(await e.json(),e.ok)return!0}catch(e){console.error(e)}}function L(){const e=Math.floor(Math.random()*(j.length-1)),t=Math.floor(Math.random()*($.length-1)),n=`${j[e]} ${$[t]}`;u=u||n;const c=te.querySelector("span");c.innerHTML=u}function ue(){u="",L()}function q(e){const t=ce.cloneNode(!0);t.querySelector("p").innerHTML=e,t.classList.remove("hidden");const n=()=>{t.classList.remove("slide-in"),t.classList.add("animate__fadeOutRight"),setTimeout(()=>{t.remove()},500)};t.onclick=()=>{n()},setTimeout(n,10*1e3),O.appendChild(t)}function b(e){f+=e,X.textContent=`Score: ${Math.floor(f)}`}function g(e){s+=e,Q.textContent=`${Math.floor(s)} ninjas`}function y(e){const t=h+M(e);h=t,t<0&&(h=0),B&&clearInterval(B);const n=()=>m?2*t:t;B=setInterval(()=>{g(n()/10),b(n()/10),S()},1e3/10),ee.textContent=`${M(n())} per sec.`}function me(e){const t=e.element.querySelector("img");t.src=`./bonus-${e.index+1}.svg`}function pe(e){const t=e.element.querySelector(".label");t.textContent=e.label}function x(e,t=0){e.count+=t;const n=e.element.querySelector(".count");n.textContent=e.count}function C(e){e.price=_(e.index,e.count);const t=e.element.querySelector(".price");t.textContent=Math.round(e.price)}function D(e){e.cps=Z(e.index);const t=e.element.querySelector(".multiplier");t.textContent=M(e.cps*e.count)}function S(){for(const e of d){const t=e.element.disabled===!1;t&&s<e.price?e.element.disabled=!0:!t&&s>=e.price&&(e.element.disabled=!1)}}function he(e){s<e.price||(q(`You just clicked the bonus <u>${e.label}</u> ! </br>- ${e.price} ninjas</br>+ ${e.cps} ninjas/seconde`),g(-e.price),x(e,1),C(e),D(e),S(),y(e.cps))}function fe(){r.classList.remove("hidden");let e=10,t=10,n=4,c=4;const a=setInterval(()=>{(e+r.clientWidth>=window.innerWidth||e<=0)&&(n=-n),(t+r.clientHeight>=window.innerHeight||t<=0)&&(c=-c),e+=n,t+=c,r.style.left=e+"px",r.style.top=t+"px"},1e3/100),p=()=>{r.classList.add("hidden"),clearInterval(a),y(0)};setTimeout(p,30*1e3);let T=0;setInterval(()=>{T+=2,r.style.transform="rotateZ("+T+"deg)"},15),r.onclick=()=>{q("Congrats! You just clicked on the shuriken, all your clicks are doubled for 30 seconds."),w.style.display="block";let E=30;m=!0;const G=setInterval(()=>{E==-1?clearTimeout(G):(w.innerHTML="Boost: "+E+" sec. remaining",E--)},1e3);setTimeout(()=>{w.style.display="none",m=!1,y(0)},30*1e3),p()}}function A(){const e=Math.random()*3e5+3e5;setTimeout(()=>{fe(),A()},e)}ae.addEventListener("click",()=>{H.classList.add("hidden"),localStorage.setItem("popup","true")});ie.addEventListener("click",()=>{ue()});I.addEventListener("mousedown",()=>{I.src="./karate-2.svg";const e=m?2:1;g(1*e),b(1*e),S()});I.addEventListener("mouseup",()=>{I.src="./karate-1.svg"});oe.addEventListener("click",()=>{b(-f),g(-s),y(-h);for(const e of d)x(e,-e.count),D(e,-e.cps),C(e,-e.price);m=!1,l=U(),localStorage.setItem("id",l),O.innerHTML="",u="",L(),S()});setInterval(()=>{le(),de()},1e3);document.addEventListener("DOMContentLoaded",async()=>{l=localStorage.getItem("id")||U(),localStorage.setItem("id",l);const e=await re();e&&(f=e.score,s=e.bank,h=e.clickPerSeconds,m=e.hasBoost,u=e.name);const t=await se();if(t)for(let n=0;n<d.length;n++)d[n]=t.store[n];L(),A(),localStorage.getItem("popup")||H.classList.remove("hidden");for(const n of d){const c=P.cloneNode(!0),o=d.indexOf(n);n.element=c,n.index=o,me(n),pe(n),x(n),C(n),D(n),c.removeAttribute("id"),c.onclick=()=>{he(n)},ne.appendChild(c)}b(0),g(0),y(0),S(),P.remove()});
