!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={exports:{}};t=n,function(){function n(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){s(o.response,e,n)},o.onerror=function(){},o.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof e&&e.global===e?e:void 0,l=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(t,e,n){var l=r.URL||r.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):i(s.href)?o(t,e,n):a(s,s.target="_blank")):(s.href=l.createObjectURL(t),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(n(t,r),e);else if(i(t))o(t,e,r);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout((function(){a(l)}))}}:function(t,e,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var a="application/octet-stream"===t.type,s=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},d.readAsDataURL(t)}else{var u=r.URL||r.webkitURL,p=u.createObjectURL(t);i?i.location=p:location.href=p,i=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});r.saveAs=s.saveAs=s,t.exports=s}();const o={importOldList:!1,speedNumber:1,speedList:"https://gh.api.99988866.xyz/",token:"",language:"nothing",webIDE:"GitHub1s.Com"},i=(t,e)=>{let n=new Set;for(;n.size<e;)n.add(Math.floor(Math.random()*(t-1+1)+1));return[...n]},a=t=>t.querySelectorAll instanceof Function,r=async(t,e="")=>{var n;if(t&&(1===t.nodeType&&t.childNodes.forEach((t=>{const e=t,n=t.nodeName.toLowerCase();"pre"!==n&&"code"!==n&&"video"!==n&&"img"!==n&&"input"!==n&&"select"!==n&&"g-emoji"!==n&&r(e,n)})),3===t.nodeType)){if(""==e||"pre"===e||"code"===e)return;const o=null!=(n=t.nodeValue)?n:"";if(!o.length)return;const i={content:o},a=await chrome.runtime.sendMessage(i);a.content&&(t.textContent=a.content)}},l=async()=>{const t=new URL(window.location.href),e=t.pathname.split("/").slice(1,5),l=await await(async()=>{var t;return null!=(t=(await chrome.storage.sync.get("configs")).configs)?t:o})(),s=l.speedList.split("\n"),c=l.speedNumber,d=t.origin,[u,p,f]=e,v=`${d}/${u}/${p}`;if(!u&&!p)return;const h=()=>{var t;const e=document.querySelectorAll(".Box-row a"),[n]=Array.from(e).filter((t=>{var e;return null==(e=t.textContent)?void 0:e.trim().includes("Download ZIP")}));return null!=(t=null==n?void 0:n.getAttribute("href"))?t:null},m=()=>{const t=document.querySelectorAll('div.js-active-navigation-container div.js-navigation-item[role="row"]'),e="add-my-github-ide",o="my-github-ide-button";t&&t.forEach((t=>{var a,r,c,d,u;if(t.classList.contains(e))return;const f=t.querySelector('div[role="rowheader"] a');if(null==(a=null==f?void 0:f.getAttribute("title"))?void 0:a.trim().includes("Go to parent directory"))return;t.classList.add(e);const v=t.querySelectorAll("a"),[h]=Array.from(v).filter((t=>{var e;return!(null==(e=t.getAttribute("href"))?void 0:e.includes(`/${p}/commit/`))}));if(!h)return;const m=h.getAttribute("href");if(!m)return;const g=l.webIDE;if(!g)return;if("Nothing"===g)return;const w=`\n\t\t\t<a href="https://${null!=(r=g.toLowerCase())?r:"github1s.com"}${m}" target="_blank" role="gridcell" class="mr-1 ml-3 ${o}" style="width: 16px;display: flex;align-content: center;align-items: center;justify-content: center;cursor: pointer;" title="使用Web IDE查看文件">\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="${o}"><path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z" fill="#57606a"></path></svg>\n\t\t\t</a>\n\t\t\t`;if(t.insertAdjacentHTML("beforeend",w),"File"!==(null==(d=null==(c=t.querySelector("svg.octicon"))?void 0:c.getAttribute("aria-label"))?void 0:d.trim()))return;const y=m.replace("/blob/","/"),[b]=m.split("/").slice(-1),x=`\n\t\t\t<div role="gridcell" class="download_file mr-1 ml-2 ${o}" style="width: 16px;display: flex;align-content: center;align-items: center;justify-content: center;cursor: pointer;" title="点击下载${b}">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="${o} download-icon">\n\t\t\t\t\t<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill="#57606a"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg class="${o} loading-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: none; shape-rendering: auto;" width="16px" height="16px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n\t\t\t\t\t\t<circle cx="50" cy="50" r="28" stroke-width="8" stroke="#57606a" stroke-dasharray="43.982297150257104 43.982297150257104" fill="none" stroke-linecap="round">\n\t\t\t\t\t\t<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>\n\t\t\t\t\t</circle>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t`;t.insertAdjacentHTML("beforeend",x),null==(u=t.querySelector(".download_file"))||u.addEventListener("click",(t=>{t.preventDefault();const e=t.currentTarget;if("true"===e.getAttribute("data-download"))return void alert("正在下载中...");e.setAttribute("data-download","true");const o=e.querySelector(".download-icon"),a=e.querySelector(".loading-icon");o.style.display="none",a.style.display="block";const r=i(s.length,1)[0],l=s[r-1],c=l.endsWith("/")?l:`${l}/`;fetch(`${c}https://raw.githubusercontent.com${y}`).then((t=>t.blob())).then((function(t){n.exports.saveAs(t,b),o.style.display="block",a.style.display="none",e.setAttribute("data-download","false")})).catch((t=>{alert(t.message),e.setAttribute("data-download","false"),o.style.display="block",a.style.display="none"}))}),!1)}))},g=async()=>{(()=>{if(document.querySelector("#fast_github"))return;let t="";const e=s;i(e.length,c).map((n=>{const o=e[n-1],i=o.endsWith("/")?o:`${o}/`,a=new URL(i);t+=`\n\t\t\t\t\t\t\t\t\t<div class="fast_github_item fast_github_item${n}" style="margin-bottom:5px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="mb-2 get-repo-decription-text">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="${a.origin}" target="_blank">${a.host}</a>通道\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control input-monospace input-sm" data-autoselect="" value="${i}${v}.git" readonly="" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group-button">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<clipboard-copy value="${i}${v}.git" class="btn btn-sm" tabindex="0" role="button">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule="evenodd"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\td="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t></path>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</clipboard-copy>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t`}));const n=`<span class="d-flex" id="fast_github">\n\t\t\t\t\t<details class="get-repo-select-menu js-get-repo-select-menu position-relative details-overlay details-reset">\n\t\t\t\t\t\t\t<summary class="btn ml-2 btn-primary">\n\t\t\t\t\t\t\t\t\t加速\n\t\t\t\t\t\t\t\t\t<span class="dropdown-caret"></span>\n\t\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t<div class="position-relative">\n\t\t\t\t\t\t\t\t\t<div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container js-get-repo-modal p-3" style="width: 352px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="get-repo-modal-options">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="fast-github-list-wrap" id="fastGithubListWrap">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="clone-options https-clone-options">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class="mb-1">通道列表</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt-2 d-flex" style="text-align: center;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="flex-1 btn btn-outline get-repo-btn" id="downloadZIP">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t下载ZIP\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="info-wrap"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</details>\n\t\t\t</span>`,o=document.querySelector(".file-navigation");null==o||o.insertAdjacentHTML("beforeend",n);try{const t=document.getElementById("downloadZIP");null==t||t.addEventListener("click",(function(){const t=h();if(!t)return void alert("无法获取压缩包下载地址");const e=i(s.length,1)[0],n=`${s[e-1]}/https://github.com${t}`;window.location.href=n}),!1);fetch("https://yidian.one/chrome/info.json").then((t=>t.json())).then((t=>{const{url:e,title:n,desc:o,code:i,color:a}=t;if(parseInt(i)){const t=`<a id="my-notice" href=${e} target="_blank" title="${o}" style="display:block;width:100%;text-align:center;margin-top:10px;font-size:12px;color:${a};">${n}</a>`,i=document.getElementById("info-wrap");if(null==i?void 0:i.querySelector("#my-notice"))return;null==i||i.insertAdjacentHTML("beforeend",t)}})).catch((()=>{}))}catch(a){}})()};if(u&&p){if((()=>{const t=document.querySelectorAll("span.Label--secondary"),[e]=Array.from(t).filter((t=>{var e;return"Private"===(null==(e=t.textContent)?void 0:e.trim())}));return!!e})())return;const t=f;if(void 0===t&&(g(),m()),"tree"===t){if(m(),!h())return;g()}"releases"===t&&(t=>{const e=t&&a(t)?t.querySelectorAll("li.Box-row"):document.querySelectorAll("li.Box-row"),n="my-fast-github";e&&e.forEach((t=>{var e;if(t.classList.contains(n))return;const o=null==(e=t.querySelector("a"))?void 0:e.getAttribute("href");if(!o)return;t.classList.add(n);const a=i(s.length,1),r=s[a[0]-1],l=`\n\t\t\t<div data-view-component="true" class="d-flex ml-md-3">\n\t\t\t\t<svg t="1668210029451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2795" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M508.746667 299.2L485.333333 452.373333a5.333333 5.333333 0 0 0 4 5.973334l217.386667 53.333333a5.333333 5.333333 0 0 1 2.72 8.693333l-184.906667 208.8a5.333333 5.333333 0 0 1-9.28-4.32l23.413334-153.226666a5.333333 5.333333 0 0 0-4-5.973334L317.173333 512a5.333333 5.333333 0 0 1-2.506666-8.48l184.8-208.693333a5.333333 5.333333 0 0 1 9.28 4.373333z m-329.493334 256l271.253334 66.666667a5.333333 5.333333 0 0 1 4 5.973333l-51.04 335.68a5.333333 5.333333 0 0 0 9.226666 4.32l434.773334-490.346667a5.333333 5.333333 0 0 0-2.72-8.693333l-271.253334-66.666667a5.333333 5.333333 0 0 1-4-5.973333l51.04-335.626667a5.333333 5.333333 0 0 0-9.226666-4.373333L176.533333 546.506667a5.333333 5.333333 0 0 0 2.72 8.693333z" p-id="2796" fill="#57606a"></path>\n\t\t\t\t</svg>\n\t\t\t\t<a href="${r.endsWith("/")?r:`${r}/`}${d}${o}" rel="nofollow" data-turbo="false" data-view-component="true" class="Truncate">\n\t\t\t\t\t<span data-view-component="true" class="Truncate-text text-bold">下载</span>\n\t\t\t\t\t<span data-view-component="true" class="Truncate-text"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t`;t.insertAdjacentHTML("beforeend",l)}))})(),"tags"===t&&(t=>{const e=t&&a(t)?t.querySelectorAll("div.commit"):document.querySelectorAll("div.commit"),n="my-fast-github";e&&e.forEach((t=>{const e=t.querySelectorAll("ul>li.d-inline-block");e&&e.forEach((t=>{if(t.classList.contains(n))return;const e=t.querySelector("a"),o=null==e?void 0:e.getAttribute("href");if((null==o?void 0:o.endsWith(".tar.gz"))||(null==o?void 0:o.endsWith(".zip"))){t.classList.add(n);const a=null==e?void 0:e.textContent,r=i(s.length,1),l=s[r[0]-1],c=`\n          <a class="muted-link" href="${l.endsWith("/")?l:`${l}/`}${d}${o}" rel="nofollow" data-create="1">\n          <svg class="octicon octicon-file-zip" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"></path></svg>\n          加速${a}\n        </a>\n        `;t.insertAdjacentHTML("beforeend",c)}}))}))})(),"issues"===t&&(()=>{var t;if("nothing"===l.language||""===(null==(t=l.token)?void 0:t.trim()))return;const e=document.querySelectorAll(".edit-comment-hide table.user-select-contain tr.d-block>td");e&&e.forEach((t=>{var e;if(null==(e=t.parentNode)?void 0:e.querySelector(".issues-translation-button"))return;const n=document.createElement("div");n.textContent="翻译",n.className="issues-translation-button",n.style.cssText="font-size: 15px;cursor: pointer;color: rgb(29, 155, 240);padding: 0px 16px;margin-bottom:10px;text-align:right;",t.after(n),n.addEventListener("click",(async e=>{var o;e.preventDefault();const i=t.cloneNode(!0),a=null==(o=t.parentNode)?void 0:o.querySelector(".issues-translation-content");a&&a.remove(),i.classList.add("issues-translation-content"),i.style.cssText="display:block;margin-top:10px;",r(i),n.after(i)}),!1)}))})()}};new MutationObserver((function(t){l()})).observe(document,{childList:!0,subtree:!0})}));
