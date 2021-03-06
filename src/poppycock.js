/*
 *	poppycock.js
 *	https://github.com/aspartame/poppycock
 *
 *	Copyright 2014 Linus Karnland
 *	MIT License
 *	
 *	
 *	To add a flavor:
 *		- Append name to _options.flavors
 *		- Append words/sentences to _data.words and _data.sentences
 *
 */

;

/*! Sizzle v1.10.16-pre | (c) 2013 jQuery Foundation, Inc. | jquery.org/license */
!function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,o,p,q;if((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(J&&!d){if(e=tb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&N(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return ab.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return ab.apply(c,b.getElementsByClassName(g)),c}if(x.qsa&&(!K||!K.test(a))){if(o=l=O,p=b,q=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=m(a),(l=b.getAttribute("id"))?o=l.replace(vb,"\\$&"):b.setAttribute("id",o),o="[id='"+o+"'] ",i=j.length;i--;)j[i]=o+n(j[i]);p=ub.test(a)&&k(b.parentNode)||b,q=j.join(",")}if(q)try{return ab.apply(c,p.querySelectorAll(q)),c}catch(r){}finally{l||b.removeAttribute("id")}}}return v(a.replace(jb,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>z.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[O]=!0,a}function e(a){var b=H.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)z.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||X)-(~a.sourceIndex||X);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==W&&a}function l(){}function m(a,c){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=z.preFilter;h;){(!d||(e=kb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=lb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(jb," ")}),h=h.slice(d.length));for(g in z.filter)!(e=pb[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):T(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=R++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=Q+" "+f;if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e)if(j=b[O]||(b[O]={}),(i=j[d])&&i[0]===k){if((h=i[1])===!0||h===y)return h===!0}else if(i=j[d]=[k],i[1]=a(b,c,g)||y,i[1]===!0)return!0}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[O]&&(e=r(e)),f&&!f[O]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||u(b||"*",h.nodeType?[h]:h,[]),r=!a||!d&&b?p:q(p,m,a,h,i),s=c?f||(d?a:o||e)?[]:g:r;if(c&&c(r,s,h,i),e)for(j=q(s,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=s.length;k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)}for(k=s.length;k--;)(l=s[k])&&(j=f?cb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):ab.apply(g,s)})}function s(a){for(var b,c,d,e=a.length,f=z.relative[a[0].type],g=f||z.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return cb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=z.relative[a[h].type])k=[o(p(k),c)];else{if(c=z.filter[a[h].type].apply(null,a[h].matches),c[O]){for(d=++h;e>d&&!z.relative[a[d].type];d++);return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(jb,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&n(a))}k.push(c)}return p(k)}function t(a,c){var e=0,f=c.length>0,g=a.length>0,h=function(d,h,i,j,k){var l,m,n,o=0,p="0",r=d&&[],s=[],t=D,u=d||g&&z.find.TAG("*",k),v=Q+=null==t?1:Math.random()||.1,w=u.length;for(k&&(D=h!==H&&h,y=e);p!==w&&null!=(l=u[p]);p++){if(g&&l){for(m=0;n=a[m++];)if(n(l,h,i)){j.push(l);break}k&&(Q=v,y=++e)}f&&((l=!n&&l)&&o--,d&&r.push(l))}if(o+=p,f&&p!==o){for(m=0;n=c[m++];)n(r,s,h,i);if(d){if(o>0)for(;p--;)r[p]||s[p]||(s[p]=$.call(j));s=q(s)}ab.apply(j,s),k&&!d&&s.length>0&&o+c.length>1&&b.uniqueSort(j)}return k&&(Q=v,D=t),r};return f?d(h):h}function u(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&J&&z.relative[f[1].type]){if(b=(z.find.ID(g.matches[0].replace(wb,xb),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}for(e=pb.needsContext.test(a)?0:f.length;e--&&(g=f[e],!z.relative[h=g.type]);)if((i=z.find[h])&&(d=i(g.matches[0].replace(wb,xb),ub.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return ab.apply(c,d),c;break}}return C(a,j)(d,b,!J,c,ub.test(a)&&k(b.parentNode)||b),c}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O="sizzle"+-new Date,P=a.document,Q=0,R=0,S=c(),T=c(),U=c(),V=function(a,b){return a===b&&(F=!0),0},W=typeof void 0,X=1<<31,Y={}.hasOwnProperty,Z=[],$=Z.pop,_=Z.push,ab=Z.push,bb=Z.slice,cb=Z.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},db="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",eb="[\\x20\\t\\r\\n\\f]",fb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",gb=fb.replace("w","w#"),hb="\\["+eb+"*("+fb+")"+eb+"*(?:([*^$|!~]?=)"+eb+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+gb+")|)|)"+eb+"*\\]",ib=":("+fb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+hb.replace(3,8)+")*)|.*)\\)|)",jb=new RegExp("^"+eb+"+|((?:^|[^\\\\])(?:\\\\.)*)"+eb+"+$","g"),kb=new RegExp("^"+eb+"*,"+eb+"*"),lb=new RegExp("^"+eb+"*([>+~]|"+eb+")"+eb+"*"),mb=new RegExp("="+eb+"*([^\\]'\"]*?)"+eb+"*\\]","g"),nb=new RegExp(ib),ob=new RegExp("^"+gb+"$"),pb={ID:new RegExp("^#("+fb+")"),CLASS:new RegExp("^\\.("+fb+")"),TAG:new RegExp("^("+fb.replace("w","w*")+")"),ATTR:new RegExp("^"+hb),PSEUDO:new RegExp("^"+ib),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+eb+"*(even|odd|(([+-]|)(\\d*)n|)"+eb+"*(?:([+-]|)"+eb+"*(\\d+)|))"+eb+"*\\)|)","i"),bool:new RegExp("^(?:"+db+")$","i"),needsContext:new RegExp("^"+eb+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+eb+"*((?:-\\d)?\\d*)"+eb+"*\\)|)(?=[^-]|$)","i")},qb=/^(?:input|select|textarea|button)$/i,rb=/^h\d$/i,sb=/^[^{]+\{\s*\[native \w/,tb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ub=/[+~]/,vb=/'|\\/g,wb=new RegExp("\\\\([\\da-f]{1,6}"+eb+"?|("+eb+")|.)","ig"),xb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{ab.apply(Z=bb.call(P.childNodes),P.childNodes),Z[P.childNodes.length].nodeType}catch(yb){ab={apply:Z.length?function(a,b){_.apply(a,bb.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}x=b.support={},B=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},G=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:P,d=c.defaultView;return c!==H&&9===c.nodeType&&c.documentElement?(H=c,I=c.documentElement,J=!B(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){G()},!1):d.attachEvent&&d.attachEvent("onunload",function(){G()})),x.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),x.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),x.getElementsByClassName=sb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),x.getById=e(function(a){return I.appendChild(a).id=O,!c.getElementsByName||!c.getElementsByName(O).length}),x.getById?(z.find.ID=function(a,b){if(typeof b.getElementById!==W&&J){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},z.filter.ID=function(a){var b=a.replace(wb,xb);return function(a){return a.getAttribute("id")===b}}):(delete z.find.ID,z.filter.ID=function(a){var b=a.replace(wb,xb);return function(a){var c=typeof a.getAttributeNode!==W&&a.getAttributeNode("id");return c&&c.value===b}}),z.find.TAG=x.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==W?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},z.find.CLASS=x.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==W&&J?b.getElementsByClassName(a):void 0},L=[],K=[],(x.qsa=sb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&K.push("[*^$]="+eb+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||K.push("\\["+eb+"*(?:value|"+db+")"),a.querySelectorAll(":checked").length||K.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&K.push("name"+eb+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||K.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),K.push(",.*:")})),(x.matchesSelector=sb.test(M=I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&e(function(a){x.disconnectedMatch=M.call(a,"div"),M.call(a,"[s!='']:x"),L.push("!=",ib)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=sb.test(I.compareDocumentPosition),N=b||sb.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=b?function(a,b){if(a===b)return F=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!x.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===P&&N(P,a)?-1:b===c||b.ownerDocument===P&&N(P,b)?1:E?cb.call(E,a)-cb.call(E,b):0:4&d?-1:1)}:function(a,b){if(a===b)return F=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:E?cb.call(E,a)-cb.call(E,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===P?-1:j[e]===P?1:0},c):H},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==H&&G(a),c=c.replace(mb,"='$1']"),!(!x.matchesSelector||!J||L&&L.test(c)||K&&K.test(c)))try{var d=M.call(a,c);if(d||x.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,H,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==H&&G(a),N(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==H&&G(a);var c=z.attrHandle[b.toLowerCase()],d=c&&Y.call(z.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:x.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(F=!x.detectDuplicates,E=!x.sortStable&&a.slice(0),a.sort(V),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return E=null,a},A=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=A(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=A(b);return c},z=b.selectors={cacheLength:50,createPseudo:d,match:pb,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(wb,xb),a[3]=(a[4]||a[5]||"").replace(wb,xb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return pb.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&nb.test(c)&&(b=m(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(wb,xb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+eb+")"+a+"("+eb+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==W&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[O]||(q[O]={}),j=k[a]||[],n=j[0]===Q&&j[1],m=j[0]===Q&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[Q,n,m];break}}else if(s&&(j=(b[O]||(b[O]={}))[a])&&j[0]===Q)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[O]||(l[O]={}))[a]=[Q,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=z.pseudos[a]||z.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[O]?f(c):f.length>1?(e=[a,a,"",c],z.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=cb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=C(a.replace(jb,"$1"));return e[O]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||A(b)).indexOf(a)>-1}}),lang:d(function(a){return ob.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(wb,xb).toLowerCase(),function(b){var c;do if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!z.pseudos.empty(a)},header:function(a){return rb.test(a.nodeName)},input:function(a){return qb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},z.pseudos.nth=z.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})z.pseudos[w]=h(w);for(w in{submit:!0,reset:!0})z.pseudos[w]=i(w);l.prototype=z.filters=z.pseudos,z.setFilters=new l,C=b.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=m(a)),c=b.length;c--;)f=s(b[c]),f[O]?d.push(f):e.push(f);f=U(a,t(e,d))}return f},x.sortStable=O.split("").sort(V).join("")===O,x.detectDuplicates=!!F,G(),x.sortDetached=e(function(a){return 1&a.compareDocumentPosition(H.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),x.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(db,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),"function"==typeof define&&define.amd?define(function(){return b}):"undefined"!=typeof module&&module.exports?module.exports=b:a.Sizzle=b}(window);

;(function (root) {
	var _options = {
		style: {
			paragraph: ['p', 'paragraph', 'paragraphs'],
			sentence: ['s', 'sentence', 'sentences'],
			word: ['w', 'word', 'words'],
		},
		
		flavors: ['lorem', 'batman', 'simpsons' /* , new_flavor */ ],
	};
	
	var _data = {	
		words: {
			/* Lorem Ipsum */
			'lorem': [
				'Lorem.', 
				'Lorem ipsum.', 
				'Lorem ipsum dolor.', 
				'Lorem ipsum dolor sit.', 
				'Aeque eligendi facilisi eu sed.', 
				'Curabitur elementum accumsan massa id hendrerit.', 
				'Proin auctor turpis at odio dapibus egestas.', 
				'Sed feugiat, ut sodales lectus sapien vitae nunc.', 
				'Cras et risus vestibulum, rutrum eros sed, tristique eros.', 
				'Nunc et arcu quis justo sagittis pretium sed at sem.'
			],
			
			/* Batman */
			'batman': [
				'Batman.', 
				'The Joker.', 
				'Endure, Master Wayne.', 
				'Bruce Wayne, n\'est-ce pas?', 
				'Because he\'s not our hero.', 
				'But a criminal is not complicated.', 
				'He\'s a silent guardian, a watchful protector.', 
				'The night is darkest just before the dawn.', 
				'Some men just want to watch the world burn.', 
				'When Gotham is ashes, you have my permission to die.'
			],
			
			/* The Simpsons */
			'simpsons': [
				'D\'oh!', 
				'The Simpsons.', 
				'Eat my shorts!', 
				'Thank you come again!',
				'Me fail English? That\'s unpossible.',
				'But my mom says I\'m cool.',
				'My cat\'s breath smells like cat food.',
				'Oh boy, sleep! That\'s where I\'m a viking!',
				'If you need me, I\'ll be in the refrigerator.',
				'If something\'s hard to do, then it\'s not worth doing.'
			],
			
			/* new_flavor: [
					...
			   ],
			 */
		},
		
		sentences: { /* Mixed sentences of varying length */
			/* Lorem Ipsum */
			'lorem': [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
				'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				'Primis quaestio te est, eu duo mandamus iracundia disputationi, nam at omnes labore gloriatur.', 
				'Et mea soleat animal viderer, zril tation tacimates vix ne. Ut epicuri officiis ius, per an inani dicant, his id suas abhorreant reformidans.', 
				'Eu qui utamur copiosae, tale ridens laboramus ei cum.', 
				'In ornatus signiferumque pri, et purto porro laoreet his, usu ea ludus hendrerit signiferumque.', 
				'Iriure moderatius id sea, eirmod apeirian an nec, sea unum malis semper no.', 
				'Vim an fabulas recusabo, in tamquam labitur moderatius his.', 
				'Veritus fuisset quo ex, ei harum ubique graecis mei.', 
				'Commodo constituto at nec, ne novum mentitum electram sed.', 
				'Nam an audiam indoctum rationibus, purto persequeris no qui.', 
				'Aeque eligendi facilisi eu sed.', 
				'Ferri consulatu te usu, nam at nemore percipit elaboraret, option audire in vix.',
				'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
				'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.',
				'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.',
				'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
				'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
				'Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
				'Nullam leo, ac justo nulla a fusce aenean.',
				'Turpis condimentum eget, felis sit vitae cras sit neque tempore, dignissim tempus facilisis. Neque ultrices.',
				'Gravida ut, in duis et vivamus mauris quam.',
				'Magna vitae magnis pulvinar pellentesque, in eros sed mi nulla ac.',
				'Sodales massa quam urna metus, cursus mauris vestibulum nisl dolor in turpis, fames sodales accumsan.',
				'Integer porttitor et, elementum ut, quis eu consectetuer nibh.'
			],
			
			/* Batman */
			'batman': [
				'It\'s not who I am underneath, but what I do that defines me.', 
				'You either die a hero or you live long enough to see yourself become the villain.',
				'He\'s the hero Gotham deserves, but not the one it needs right now.',    
				'Because he\'s not our hero.', 
				'He\'s a silent guardian, a watchful protector.',
				'People are dying, Alfred.',
				'They\'ll hate you for it, but that\'s the point of Batman, he can be the outcast.', 
				'He can make the choice that no one else can make, the right choice.', 
				'When Gotham is ashes, you have my permission to die.', 
				'The night is darkest just before the dawn.', 
				'Some men just want to watch the world burn.', 
				'Why do we fall sir? So we might learn to pick ourselves up.',
				'Bats frighten me, it\'s time my enemies share my dread.', 
				'People need dramatic examples to shake them out of apathy and I can\'t do that as Bruce Wayne.',
				'How can you move faster than possible, fight longer than possible without the most powerful impulse of the spirit: the fear of death.',
				'Theatricality and deception are powerful agents to the uninitiated... but we are initiated, aren\'t we Bruce?',
				'You were excommunicated... by a gang of psychopaths!',
				'I AM the League of Shadows, and I\'m here to fulfill Ra\'s al Ghul\'s destiny!',
				'The shadows betray you, because they belong to me!',
				'My mother warned me about getting into cars with strange men.',
				'So, you came back to die with your city.',
				'But the child... the child of Ra\'s al Ghul made the climb.',
				'My mother named me Talia before she was killed, the way I would\'ve been killed if not for my protector: Bane.',
				'You made some mistakes, Miss Kyle.',
				'We could use some hotter heads around here.',
				'When I spotted you, I was looking for a friend of mine, Bruce Wayne.',
				'Nothing like a little air superiority, isn\'t it?',
			],
			
			/* The simpsons */
			'simpsons': [
				'To alcohol! The cause of, and solution to, all of life\'s problems.',
				'I was saying Boo-urns.',
				'Everything\'s coming up Milhouse!',
				'You don\'t win friends with salad.',
				'I\'ve been called ugly, pug ugly, fugly, pug fugly, but never ugly ugly.',
				'Oh, dear God. Can\'t this town go one day without a riot?',
				'Uh, no you\'ve got the wrong number. This is 9-1... 2.',
				'Stupider like a fox!',
				'Ahh, there\'s nothing better than a cigarette... unless it\'s a cigarette lit with a hundred-dollar bill.',
				'Now make like my pants, and split.',
				'My bones are so brittle. But I always drink plenty of...malk?',
				'Skinner said the teachers will crack any minute purple monkey dishwasher.',
				'Oh, loneliness and cheeseburgers are a dangerous mix.',
				'Inside every hardened criminal beats the heart of a ten-year-old boy.',
				'Stupid sexy Flanders!',
				'Shoplifting is a victimless crime. Like punching someone in the dark.',
				'Ya used me, Skinner! YA USED ME!',
				'Miss Simpson, do you find something funny about the word "tromboner"?',
				'Priceless like a mother\'s love, or the good kind of priceless?',
				'My eyes! The goggles do nothing!',
				'Ah, alcohol and night-swimming. It\'s a winning combination.',
				'Inflammable means flammable? What a country!',
				'I don\'t get mad, I get stabby.',
				'Oh boy, dinnertime. The perfect break between work and drunk!',
				'Save me, Jebus!',
				'I wash myself with a rag on a stick.',
				'Ow, my eye! I\'m not supposed to get pudding in it.',
				'But look! I got some cool pogs: Alf pogs! Remember Alf? He\'s back...in pog form!',
				'It tastes like...burning.',
				'There\'s only one thing to do at a moment like this: strut!',
				'Sorry mom, the mob has spoken.',
				'My son\'s name is also Bort.',
				'There\'s an angry mob here to see you, sir.',
				'Worst… episode… ever.',
				'Up and at them!'
			]
			
			/* new_flavor: [
			   		...
			   ],
			 */
		},
	};
	
	function Options() {
		this.flavor = 'lorem';
		this.style = 'p';
		this.count = 1;
	};
	
	function Ipsum(ipsumOptions) {
		options = ipsumOptions || new Options();
		
		options.flavor = isValidFlavor(options.flavor) ? options.flavor : new Options().flavor;
		options.style = isValidStyle(options.style) ? options.style : new Options().style;
		options.count = options.count || new Options().count;
		
		this.text = function () {	
			if (options.count < 1) { return ''; }
			
			if (_options.style.word.indexOf(options.style) > -1) {
				var wordsLeft = options.count;
				var maxNbrWords = _data.words[options.flavor].length;
				var words = [];
				
				// Add the desired nbr of words (but no more than the maximum available)
				var nbrWordsToAdd = wordsLeft < maxNbrWords ? wordsLeft : maxNbrWords;
					words.push(_data.words[options.flavor][nbrWordsToAdd - 1]);
					wordsLeft -= nbrWordsToAdd;
					
				// If there's more words to add, add a random amount 
				// until we have the exact nbr of words we want.
				while (wordsLeft > 0) {
					nbrWordsToAdd = randomInt(1, wordsLeft < maxNbrWords ? wordsLeft : maxNbrWords);
					words.push(_data.words[options.flavor][nbrWordsToAdd - 1]);
					
					wordsLeft -= nbrWordsToAdd;
				}
				
				words = shuffle(words);
				
				return words.join(' ');
			}
			
			if (_options.style.sentence.indexOf(options.style) > -1) {
				return getRandomSentences(options.flavor, options.count);
			}
			
			if (_options.style.paragraph.indexOf(options.style) > -1) {
				var paragraphs = [];
				
				for (var i = 0; i < options.count; ++i) {
					var nbrSentences = randomInt(5, 10); // 5-10 sentences per paragraph
					paragraphs.push('<p>' + getRandomSentences(options.flavor, nbrSentences) + '</p>');
				}
				
				return paragraphs.join('');
			}
			
			return '';
		};
	};
	
	function getRandomSentences(flavor, count) {
		var totalNbrSentences = _data.sentences[flavor].length;
		var sentences = [];
		var sentenceIndexes = [];
		
		// Put all sentence indexes in an array and randomize them
		for (var i = 0; i < totalNbrSentences; ++i) {
			sentenceIndexes.push(i);
		}
		
		sentenceIndexes = shuffle(sentenceIndexes);
		
		var index;
		
		// Pick an index from the randomized array and add the corresponding sentence, 
		// start over if we want more sentences than available
		for (var i = 0; i < count; ++i) {
			index = sentenceIndexes[i % sentenceIndexes.length];
			sentences.push(_data.sentences[flavor][index]);
		}
		
		return sentences.join(' ');
	};
	
	function applyIpsums() {
		var ipsums = Sizzle('[data-poppycock]');
		
		for (var i = ipsums.length - 1; i >= 0; --i) {
			var options = extractOptions(ipsums[i].getAttribute('data-poppycock'));
			
			if (options) {
				ipsums[i].innerHTML = new Ipsum(options).text();					
			}
		}	
	};
	
	function extractOptions(optionsStr) {
		var options = new Options();
		var parts = optionsStr.split(' ');
		
		if (parts.length == 1) { return options; }
		
		for (var i = parts.length - 1; i >=0; --i) {
			var part = parts[i];
			
			if (part.match(/^\d+$/)) {
				options.count = parseInt(part, 10);
				
			} else if (isValidFlavor(part)) {
				options.flavor = part;
			
			} else if (isValidStyle(part)) {
				options.style = part;
			}
		}
		
		return options;
	};
	
	function isValidFlavor(str) {
		return _options.flavors.indexOf(str) > -1;
	}
	
	function isValidStyle(str) {
		return _options.style.paragraph.indexOf(str) > -1 ||
			   _options.style.sentence.indexOf(str) > -1 ||
			   _options.style.word.indexOf(str) > -1;
	}

	function shuffle(array) {
	  	var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
	      currentIndex -= 1;

          temporaryValue = array[currentIndex];
	      array[currentIndex] = array[randomIndex];
	      array[randomIndex] = temporaryValue;
	  }

	  return array;
	};
	
	function randomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	};
	
	document.addEventListener('DOMContentLoaded', applyIpsums);
	
	/* Expose API */
	root.poppycock = root.poppycock || {};
	root.poppycock.gimmie = function (options) { return new Ipsum(options).text() }
	
})(window);

















