import{S as d,A as u,i as c,a as m}from"./assets/vendor-gMZIyObc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const f=document.querySelector("#bnfBtn"),p=document.querySelector("#footer");f.addEventListener("click",()=>{p.scrollIntoView({behavior:"smooth"})});new d(".projects-swiper-container",{direction:"horizontal",autoHeight:!0,speed:1e3,spaceBetween:48,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,allowTouchMove:!0,simulateTouch:!0,navigation:{nextEl:".custom-projects-next",prevEl:".custom-projects-prev",disabledClass:"swiper-button-disabled"},grabCursor:!0});document.addEventListener("DOMContentLoaded",()=>{new u(".accordion-container-faq",{showMultiple:!0,openOnInit:[]})});const b=document.querySelector(".covers"),g=document.querySelector(".container-covers"),l=g.children,y={root:null,rootMargin:"0px",threshold:0},v=new IntersectionObserver(h,y);v.observe(b);function h(e,s){e.forEach(a=>{a.isIntersecting?Array.from(l).forEach((o,t)=>{t===1||t===3?o.classList.contains("list-covers")||o.classList.add("list-covers"):o.classList.contains("container-covers-list-anim")||o.classList.add("container-covers-list-anim")}):Array.from(l).forEach(o=>{o.classList.contains("container-covers-list-anim")&&o.classList.remove("container-covers-list-anim"),o.classList.contains("list-covers")&&o.classList.remove("list-covers")})})}const r={closeBtn:document.querySelector(".btn-close-modal"),modal:document.querySelector(".modal-overlay"),form:document.querySelector(".work-form"),label:document.querySelector(".label-work"),emailInput:document.querySelector("#user-email"),btnSend:document.querySelector(".btn-work")};function w(){r.modal.classList.add("hidden")}function L(){r.modal.classList.remove("hidden")}function S(e){e.textContent="Invalid email, try again",e.classList.add("error"),e.classList.remove("correct")}function q(e){e.textContent="Success!",e.classList.add("correct"),e.classList.remove("error")}async function E(e){e.preventDefault(),e.stopImmediatePropagation();const s=new FormData(r.form),a=s.get("user-email"),o=s.get("user-comment");if(!a||!o){c.error({message:"Email and comment are required!",timeout:5e3,position:"topRight"});return}const t={email:a,comment:o};try{await C(t),r.label.textContent="",L(),r.form.reset()}catch{c.error({message:"Something went wrong",timeout:5e3,position:"topRight"})}}async function C(e){const s="https://portfolio-js.b.goit.study/api/requests";try{return(await m.post(s,e,{headers:{"Content-Type":"application/json"}})).data}catch(a){throw c.error({message:"Something went wrong. Try again",timeout:5e3,position:"topRight"}),a}}r.closeBtn.addEventListener("click",()=>{w()});r.form.addEventListener("submit",E);r.form.addEventListener("input",e=>{const s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;e.target.style.color="#fafafa";const o=new FormData(r.form).get("user-email");e.target.name==="user-email"&&(s.test(o)?(q(r.label),e.target.style.borderColor="#3cbc81"):(S(r.label),e.target.style.borderColor="#e74a3b"),o.trim()===""||!s.test(o)?r.btnSend.disabled=!0:r.btnSend.disabled=!1)});r.emailInput.addEventListener("blur",e=>{e.target.classList.remove("correct","error"),e.target.style.borderColor="",r.label.textContent=""});
//# sourceMappingURL=index.js.map
