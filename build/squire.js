!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function i(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function a(e){return e.nodeType===x&&!!J[e.nodeName]}function s(e){return X.test(e.nodeName)}function d(e){return e.nodeType===x&&!s(e)&&r(e.childNodes,s)}function l(e){return e.nodeType===x&&!s(e)&&!d(e)}function c(e){var t=e.ownerDocument,r=new n(t.body,R,d,!1);return r.currentNode=e,r}function f(e){return c(e).previousNode()}function h(e){return c(e).nextNode()}function u(e,t,n){do if(o(e,t,n))return e;while(e=e.parentNode);return null}function p(e){var t,n,r,o,i=e.parentNode;return i&&e.nodeType===x?(t=p(i),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join("."))):t=i?p(i):"",t}function m(e){var t=e.nodeType;return t===x?e.childNodes.length:e.length||0}function g(e){var t=e.parentNode;return t&&t.removeChild(e),e}function v(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function N(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function C(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function S(e){var t,n,r,o,i=e.ownerDocument,d=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(t=i.createElement("DIV"),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),s(e)){for(n=e.firstChild;Q&&n&&n.nodeType===L&&!n.data;)e.removeChild(n),n=e.firstChild;if(!n)if(Q)for(t=i.createTextNode(U),r=vt.length;r--;)o=vt[r],o._doc===i&&o._didAddZWS();else t=i.createTextNode("")}else if(q){for(;e.nodeType!==L&&!a(e);){if(n=e.firstChild,!n){t=i.createTextNode("");break}e=n}e.nodeType===L?/^ +$/.test(e.data)&&(e.data=""):a(e)&&e.parentNode.insertBefore(i.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=i.createElement("BR");(n=e.lastElementChild)&&!s(n);)e=n;return t&&e.appendChild(t),d}function _(e){var t,n,r,o,i=e.childNodes,a=e.ownerDocument,d=null;for(t=0,n=i.length;n>t;t+=1)r=i[t],o="BR"===r.nodeName,!o&&s(r)?(d||(d=C(a,"DIV")),d.appendChild(r),t-=1,n-=1):(o||d)&&(d||(d=C(a,"DIV")),S(d),o?e.replaceChild(d,r):(e.insertBefore(d,r),t+=1,n+=1),d=null),l(r)&&_(r);return d&&e.appendChild(S(d)),e}function y(e,t,n){var r,o,i,a=e.nodeType;if(a===L&&e!==n)return y(e.parentNode,e.splitText(t),n);if(a===x){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return S(e),S(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),y(r,o,n)}return t}function E(e,t){if(e.nodeType===x)for(var n,r,o,a=e.childNodes,d=a.length,l=[];d--;)if(n=a[d],r=d&&a[d-1],d&&s(n)&&i(n,r)&&!J[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=m(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=m(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=m(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=m(r))),g(n),n.nodeType===L?r.appendData(n.data):l.push(N(n));else if(n.nodeType===x){for(o=l.length;o--;)n.appendChild(l.pop());E(n,t)}}function T(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;g(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(N(t)),E(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),K&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function B(e){var t,n,r=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName;if(!s||o&&/^[OU]L$/.test(o.nodeName))if(r&&i(r,e)){if(!l(r)){if(!s)return;n=a.createElement("DIV"),n.appendChild(N(r)),r.appendChild(n)}g(e),t=!l(e),r.appendChild(N(e)),t&&_(r),o&&B(o)}else s&&(r=a.createElement("DIV"),e.insertBefore(r,o),S(r))}function b(e){var n=e.defaultView,r=e.body;this._win=n,this._doc=e,this._body=r,this._events={},this._sel=n.getSelection(),this._lastSelection=null,G&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),n.addEventListener("focus",this,!1),n.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this.defaultBlockProperties=t,this.addEventListener("keyup",this._docWasChanged),this._awaitingPaste=!1,this.addEventListener(M?"beforecut":"cut",this._onCut),this.addEventListener(M?"beforepaste":"paste",this._onPaste),this.addEventListener(K?"keypress":"keydown",this._onKey),M&&(n.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),r.setAttribute("contenteditable","true"),this.setHTML("");try{e.execCommand("enableObjectResizing",!1,"false"),e.execCommand("enableInlineTableEditing",!1,"false")}catch(o){}vt.push(this)}var k=2,x=1,L=3,R=1,A=4,O=0,D=1,I=2,P=3,U="​",w=e.defaultView,F=navigator.userAgent,V=/iP(?:ad|hone|od)/.test(F),H=/Mac OS X/.test(F),W=/Gecko\//.test(F),M=/Trident\/[456]\./.test(F),K=!!w.opera,z=/WebKit\//.test(F),Z=H?"meta-":"ctrl-",q=M||K,Q=M||z,G=M,$=/[^ \t\r\n]/,Y=Array.prototype.indexOf,j={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(j[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(j[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}};var X=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,J={BR:1,IMG:1,INPUT:1},et=function(e,t){for(var n=e.childNodes;t&&e.nodeType===x;)e=n[t-1],n=e.childNodes,t=n.length;return e},tt=function(e,t){if(e.nodeType===x){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},nt=function(e,t){e=e.cloneRange(),lt(e);for(var r=e.startContainer,o=e.endContainer,i=e.commonAncestorContainer,a=new n(i,A,function(){return!0},!1),s=a.currentNode=r;!t(s,e)&&s!==o&&(s=a.nextNode()););},rt=function(e){var t="";return nt(e,function(e,n){var r=e.data;r&&/\S/.test(r)&&(e===n.endContainer&&(r=r.slice(0,n.endOffset)),e===n.startContainer&&(r=r.slice(n.startOffset)),t+=r)}),t},ot=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===L?(n=a.parentNode,r=n.childNodes,s===a.length?(s=Y.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=Y.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},it=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===L&&(t=t.parentNode);for(var a,s=y(o,i,t),d=y(n,r,t),l=t.ownerDocument.createDocumentFragment();d!==s;)a=d.nextSibling,l.appendChild(d),d=a;return e.setStart(t,s?Y.call(t.childNodes,s):t.childNodes.length),e.collapse(!0),S(t),l},at=function(e){ct(e),it(e),lt(e);var t=ft(e),n=ht(e);t&&n&&t!==n&&T(t,n,e),t&&S(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(S(r),e.selectNodeContents(r.firstChild))},st=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!s(r[o])){n=!1;break}if(e.collapsed||at(e),lt(e),n)ot(e,t),e.collapse(!1);else{for(var i,a,d=y(e.startContainer,e.startOffset,e.startContainer.ownerDocument.body),l=d.previousSibling,c=l,f=c.childNodes.length,u=d,p=0,g=d.parentNode;(i=c.lastChild)&&i.nodeType===x&&"BR"!==i.nodeName;)c=i,f=c.childNodes.length;for(;(i=u.firstChild)&&i.nodeType===x&&"BR"!==i.nodeName;)u=i;for(;(i=t.firstChild)&&s(i);)c.appendChild(i);for(;(i=t.lastChild)&&s(i);)u.insertBefore(i,u.firstChild),p+=1;for(a=t;a=h(a);)S(a);g.insertBefore(t,d),a=d.previousSibling,d.textContent?B(d):g.removeChild(d),d.parentNode||(u=a,p=m(u)),l.textContent?B(l):(c=l.nextSibling,f=0,g.removeChild(l)),e.setStart(c,f),e.setEnd(u,p),lt(e)}},dt=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(P,r)>-1,i=e.compareBoundaryPoints(D,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(O,r)<1,s=e.compareBoundaryPoints(I,r)>-1;return a&&s},lt=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;n.nodeType!==L&&(t=n.childNodes[r],t&&!a(t));)n=t,r=0;if(i)for(;o.nodeType!==L&&(t=o.childNodes[i-1],t&&!a(t));)o=t,i=m(o);else for(;o.nodeType!==L&&(t=o.firstChild,t&&!a(t));)o=t;e.collapsed?(e.setStart(o,i),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,i))},ct=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=Y.call(n.childNodes,r),r=n;for(;i!==t&&a===m(i);)n=i.parentNode,a=Y.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},ft=function(e){var t,n=e.startContainer;return s(n)?t=f(n):d(n)?t=n:(t=et(n,e.startOffset),t=h(t)),t&&dt(e,t,!0)?t:null},ht=function(e){var t,n,r=e.endContainer;if(s(r))t=f(r);else if(d(r))t=r;else{if(t=tt(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=f(t)}return t&&dt(e,t,!0)?t:null},ut=new n(null,A|R,function(e){return e.nodeType===L?$.test(e.data):"IMG"===e.nodeName}),pt=function(e){var t=e.startContainer,n=e.startOffset;if(t.nodeType===L){if(n)return!1;ut.currentNode=t}else ut.currentNode=tt(t,n);return ut.root=ft(e),!ut.previousNode()},mt=function(e){var t,n=e.endContainer,r=e.endOffset;if(n.nodeType===L){if(t=n.data.length,t&&t>r)return!1;ut.currentNode=n}else ut.currentNode=et(n,r);return ut.root=ht(e),!ut.nextNode()},gt=function(e){var t,n=ft(e),r=ht(e);n&&r&&(t=n.parentNode,e.setStart(t,Y.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,Y.call(t.childNodes,r)+1))},vt=[],Nt=b.prototype;Nt.createElement=function(e,t,n){return C(this._doc,e,t,n)},Nt.createDefaultBlock=function(e){return S(this.createElement("DIV",this.defaultBlockProperties,e))},Nt.didError=function(e){console.log(e)},Nt.getDocument=function(){return this._doc};var Ct={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Nt.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Nt.destroy=function(){var e,t=this._win,n=this._doc,r=this._events;t.removeEventListener("focus",this,!1),t.removeEventListener("blur",this,!1);for(e in r)Ct[e]||n.removeEventListener(e,this,!0);for(var o=vt.length;o--;)vt[o]===this&&vt.splice(o,1)},Nt.handleEvent=function(e){this.fireEvent(e.type,e)},Nt.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],Ct[e]||this._doc.addEventListener(e,this,!0)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Nt.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],Ct[e]||this._doc.removeEventListener(e,this,!1))}return this},Nt._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Nt.setSelection=function(e){if(e){V&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Nt.getSelection=function(){var e,t,n,r=this._sel;return r.rangeCount?(e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer,t&&a(t)&&e.setStartBefore(t),n&&a(n)&&e.setEndBefore(n),this._lastSelection=e):e=this._lastSelection,e||(e=this._createRange(this._body.firstChild,0)),e},Nt.getSelectedText=function(){return rt(this.getSelection())},Nt.getPath=function(){return this._path};var St=function(e){for(var t,r,o=new n(e,A,function(){return!0},!1);t=o.nextNode();)for(;(r=t.data.indexOf(U))>-1;)t.deleteData(r,1)};Nt._didAddZWS=function(){this._hasZWS=!0},Nt._removeZWS=function(){this._hasZWS&&(St(this._body),this._hasZWS=!1)},Nt._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?p(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),r!==o&&this.fireEvent("select")},Nt._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Nt.focus=function(){return this._body.focus(),this._win.focus(),this},Nt.blur=function(){return W&&this._body.blur(),top.focus(),this};var _t="squire-selection-start",yt="squire-selection-end";Nt._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:_t,type:"hidden"}),r=this.createElement("INPUT",{id:yt,type:"hidden"});ot(e,n),e.collapse(!1),ot(e,r),n.compareDocumentPosition(r)&k&&(n.id=yt,r.id=_t,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Nt._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(_t),r=t.getElementById(yt);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:Y.call(i.childNodes,n),endOffset:Y.call(a.childNodes,r)};i===a&&(s.endOffset-=1),g(n),g(r),E(i,s),i!==a&&E(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,lt(e),o&&e.collapse(!0)}return e||null},Nt._docWasChanged=function(e){var t=e&&e.keyCode;(!e||!e.ctrlKey&&!e.metaKey&&!e.altKey&&(16>t||t>20)&&(33>t||t>45))&&(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),this.fireEvent("input"))},Nt._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Nt.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Nt.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Nt.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(u(a,e,t))return!0;if(a.nodeType===L)return!1;o=new n(a,A,function(e){return dt(r,e,!0)},!1);for(var s=!1;i=o.nextNode();){if(!u(i,e,t))return!1;s=!0}return s},Nt._addFormat=function(e,t,r){var o,i,a,s,d,l,c,f;if(r.collapsed)o=S(this.createElement(e,t)),ot(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{i=new n(r.commonAncestorContainer,A,function(e){return dt(r,e,!0)},!1),a=r.startContainer,d=r.startOffset,s=r.endContainer,l=r.endOffset,i.currentNode=a,a.nodeType!==L&&(a=i.nextNode(),d=0);do c=i.currentNode,f=!u(c,e,t),f&&(c===s&&c.length>l&&c.splitText(l),c===a&&d&&(c=c.splitText(d),s===a&&(s=c,l-=d),a=c,d=0),o=this.createElement(e,t),v(c,o),o.appendChild(c));while(i.nextNode());s.nodeType!==L&&(s=c,l=c.length),r=this._createRange(a,d,s,l)}return r},Nt._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n);var i,a=this._doc;n.collapsed&&(Q?(i=a.createTextNode(U),this._didAddZWS()):i=a.createTextNode(""),ot(n,i));for(var d=n.commonAncestorContainer;s(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,f=n.endContainer,h=n.endOffset,u=[],p=function(e,t){if(!dt(n,e,!1)){var r,o,i=e.nodeType===L;if(!dt(n,e,!0))return void("INPUT"===e.nodeName||i&&!e.data||u.push([t,e]));if(i)e===f&&h!==e.length&&u.push([t,e.splitText(h)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},m=Array.prototype.filter.call(d.getElementsByTagName(e),function(r){return dt(n,r,!0)&&o(r,e,t)});r||m.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];v(n,t),t.appendChild(n)}),m.forEach(function(e){v(e,N(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var g={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return E(d,g),n.setStart(g.startContainer,g.startOffset),n.setEnd(g.endContainer,g.endOffset),n},Nt.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),this._docWasChanged(),this):void 0};var Et={DIV:"DIV",PRE:"DIV",H1:"DIV",H2:"DIV",H3:"DIV",H4:"DIV",H5:"DIV",H6:"DIV",P:"DIV",DT:"DD",DD:"DT",LI:"LI"},Tt=function(e,t,n){var r=Et[e.nodeName],o=y(t,n,e.parentNode);return o.nodeName!==r&&(e=C(o.ownerDocument,r),e.className="rtl"===o.dir?"dir-rtl":"",e.dir=o.dir,v(o,e),e.appendChild(N(o)),o=e),o};Nt.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=ft(n),o=ht(n);if(r&&o)do if(e(r)||r===o)break;while(r=h(r));return t&&(this.setSelection(n),this._updatePath(n,!0),this._docWasChanged()),this},Nt.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),gt(t);var n,r=this._body;return ct(t,r),n=it(t,r),ot(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&B(t.endContainer.childNodes[t.endOffset]),B(t.startContainer.childNodes[t.startOffset]),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),this._docWasChanged(),this};var Bt=function(e){return this.createElement("BLOCKQUOTE",[e])},bt=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){v(e,N(e))}),e},kt=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:_t,type:"hidden"}),this.createElement("INPUT",{id:yt,type:"hidden"})])},xt=function(e,n,r){for(var o,i,a,s,d=c(n);o=d.nextNode();)i=o.parentNode.nodeName,"LI"!==i?(s=e.createElement("LI",{"class":"rtl"===o.dir?"dir-rtl":t,dir:o.dir||t}),(a=o.previousSibling)&&a.nodeName===r?a.appendChild(s):v(o,e.createElement(r,[s])),s.appendChild(o)):(o=o.parentNode.parentNode,i=o.nodeName,i!==r&&/^[OU]L$/.test(i)&&v(o,e.createElement(r,[N(o)])))},Lt=function(e){return xt(this,e,"UL"),e},Rt=function(e){return xt(this,e,"OL"),e},At=function(e){var t,n,r,o,i,a,s,d=e.querySelectorAll("UL, OL");for(t=0,n=d.length;n>t;t+=1){for(o=d[t],i=N(o),a=i.childNodes,r=a.length;r--;)s=a[r],v(s,N(s));_(i),v(o,i)}return e},Ot=function(e){var t,n,r,o,i,a=e.querySelectorAll("LI");for(t=0,n=a.length;n>t;t+=1)r=a[t],l(r.firstChild)||(o=r.parentNode.nodeName,i=r.previousSibling,i&&(i=i.lastChild)&&i.nodeName===o||v(r,this.createElement("LI",[i=this.createElement(o)])),i.appendChild(r));return e},Dt=function(e){var t=e.querySelectorAll("LI");return Array.prototype.filter.call(t,function(e){return!l(e.firstChild)}).forEach(function(t){var n,r=t.parentNode,o=r.parentNode,i=t.firstChild,a=i;for(t.previousSibling&&(r=y(r,t,o));a&&(n=a.nextSibling,!l(a));)o.insertBefore(a,r),a=n;for("LI"===o.nodeName&&i.previousSibling&&y(o,i,o.parentNode);t!==e&&!t.childNodes.length;)r=t.parentNode,r.removeChild(t),t=r},this),_(e),e},It=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)/i,Pt=function(e){for(var t,r,o,i,a,s,d,l=e.ownerDocument,c=new n(e,A,function(e){return!u(e,"A")},!1);t=c.nextNode();)for(r=t.data,o=t.parentNode;i=It.exec(r);)a=i.index,s=a+i[0].length,a&&(d=l.createTextNode(r.slice(0,a)),o.insertBefore(d,t)),d=l.createElement("A"),d.textContent=r.slice(a,s),d.href=i[1]?/^(?:ht|f)tps?:/.test(i[1])?i[1]:"http://"+i[1]:"mailto:"+i[2],o.insertBefore(d,t),t.data=r=r.slice(s)},Ut=/^(?:A(?:DDRESS|RTICLE|SIDE)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,wt={1:10,2:13,3:16,4:18,5:24,6:32,7:48},Ft={backgroundColor:{regexp:$,replace:function(e,t){return C(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:$,replace:function(e,t){return C(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return C(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return C(e,"I")}},fontFamily:{regexp:$,replace:function(e,t){return C(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:$,replace:function(e,t){return C(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Vt=function(e){return function(t,n){var r=C(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(N(t)),r}},Ht={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in Ft)r=Ft[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(N(e)),t.replaceChild(a,e)),i||e},STRONG:Vt("B"),EM:Vt("I"),STRIKE:Vt("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=C(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=C(c,"SPAN",{"class":"size",style:"font-size:"+wt[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=C(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=C(c,"SPAN")),t.replaceChild(a,e),i.appendChild(N(e)),i},TT:function(e,t){var n=C(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(N(e)),n}},Wt=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType!==x||a(t)?t.nodeType!==L||t.data||e.removeChild(t):(Wt(t),s(t)&&!t.firstChild&&e.removeChild(t))},Mt=function(e,t){var n,r,o,i,a,d,l,c,f,h,u=e.childNodes;for(n=0,r=u.length;r>n;n+=1)if(o=u[n],i=o.nodeName,a=o.nodeType,d=Ht[i],a===x){if(l=o.childNodes.length,d)o=d(o,e);else{if(!Ut.test(i)&&!s(o)){n-=1,r+=l-1,e.replaceChild(N(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Mt(o,t)}else{if(a===L){if(c=o.data,/\S/.test(c)){if(s(e))continue;if(f=0,h=c.length,!n||!s(u[n-1])){for(;h>f&&!$.test(c.charAt(f));)f+=1;f&&(o.data=c=c.slice(f),h-=f)}if(n+1===r||!s(u[n+1])){for(f=h;f>0&&!$.test(c.charAt(f-1));)f-=1;h>f&&(o.data=c.slice(0,f))}continue}if(n&&r>n+1&&s(u[n-1])&&s(u[n+1])){o.data=" ";continue}}e.removeChild(o),n-=1,r-=1}return e},Kt=function(e){return e.nodeType===x?"BR"===e.nodeName:$.test(e.data)},zt=function(e){for(var t,r=e.parentNode;s(r);)r=r.parentNode;return t=new n(r,R|A,Kt),t.currentNode=e,!!t.nextNode()},Zt=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],a=o.length;for(t=0;a>t;t+=1)i[t]=zt(o[t]);for(;a--;)if(n=o[a],r=n.parentNode){for(;s(r);)r=r.parentNode;if(d(r)){if(i[a]){if("DIV"!==r.nodeName)continue;y(n.parentNode,n,r.parentNode)}g(n)}else _(r)}};Nt._ensureBottomLine=function(){var e=this._body,t=e.lastChild;t&&"DIV"===t.nodeName&&d(t)||e.appendChild(this.createDefaultBlock())},Nt._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{t._ensureBottomLine()}catch(e){t.didError(e)}},0)},Nt._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),void(i&&this.fireEvent("drop",{dataTransfer:r}))}this._awaitingPaste=!0;var s=this,d=this._body,l=this.getSelection(),c=l.startContainer,f=l.startOffset,u=l.endContainer,p=l.endOffset,m=ft(l);s._recordUndoState(l),s._getRangeAndRemoveBookmark(l);var v=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(d.scrollTop+(m?m.getBoundingClientRect().top:0))+"px; left: 0; width: 1px; height: 1px;"});d.appendChild(v),l.selectNodeContents(v),this.setSelection(l),setTimeout(function(){try{var e=N(g(v)),t=e.firstChild,n=s._createRange(c,f,u,p);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(N(t),t),e.normalize(),Pt(e),Mt(e,!1),Zt(e),Wt(e);for(var r=e,o=!0;r=h(r);)S(r);s.fireEvent("willPaste",{fragment:e,preventDefault:function(){o=!1}}),o&&(st(n,e),s._docWasChanged(),n.collapse(!1),s._ensureBottomLine())}s.setSelection(n),s._updatePath(n,!0),s._awaitingPaste=!1}catch(i){s.didError(i)}},0)}};var qt={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete",219:"[",221:"]"},Qt=function(e){return function(t,n){n.preventDefault(),t[e]()}},Gt=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},$t=function(e,t){try{t||(t=e.getSelection());var n,r=t.startContainer;for(r.nodeType===L&&(r=r.parentNode),n=r;s(n)&&(!n.textContent||n.textContent===U);)r=n,n=r.parentNode;r!==n&&(t.setStart(n,Y.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),d(n)||(n=f(n)),S(n),lt(t)),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(o){e.didError(o)}},Yt={enter:function(e,t,n){var r,o,i,a,s;if(t.preventDefault(),e._recordUndoState(n),Pt(n.startContainer),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||at(n),r=ft(n),r&&(o=u(r,"LI"))&&(r=o),i=r?r.nodeName:"DIV",a=Et[i],!r)return ot(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),e._updatePath(n,!0),void e._docWasChanged();var d,l=n.startContainer,c=n.startOffset;if(a||(l===r&&(l=c?l.childNodes[c-1]:null,c=0,l&&("BR"===l.nodeName?l=l.nextSibling:c=m(l),l&&"BR"!==l.nodeName||(d=S(e.createElement("DIV")),l?r.replaceChild(d,l):r.appendChild(d),l=d))),_(r),a="DIV",l||(l=r.firstChild),n.setStart(l,c),n.setEnd(l,c),r=ft(n)),!r.textContent){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Dt,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(kt,n)}for(s=Tt(r,l,c),St(r),Wt(r),S(r);s.nodeType===x;){var f,h=s.firstChild;if("A"!==s.nodeName||s.textContent){for(;h&&h.nodeType===L&&!h.data&&(f=h.nextSibling,f&&"BR"!==f.nodeName);)g(h),h=f;if(!h||"BR"===h.nodeName||h.nodeType===L&&!K)break;s=h}else v(s,N(s)),s=h}n=e._createRange(s,0),e.setSelection(n),e._updatePath(n,!0),s.nodeType===L&&(s=s.parentNode);var p=e._doc,C=e._body;s.offsetTop+s.offsetHeight>(p.documentElement.scrollTop||C.scrollTop)+C.offsetHeight&&s.scrollIntoView(!1),e._docWasChanged()},backspace:function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(pt(n)){t.preventDefault();var r=ft(n),o=r&&f(r);if(o){if(!o.isContentEditable)return void g(o);for(T(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&B(r),e.setSelection(n)}else if(r){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Dt,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(bt,n);e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){$t(e)},0);else t.preventDefault(),at(n),$t(e,n)},"delete":function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(mt(n)){t.preventDefault();var r=ft(n),o=r&&h(r);if(o){if(!o.isContentEditable)return void g(o);for(T(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&B(o),e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){$t(e)},0);else t.preventDefault(),at(n),$t(e,n)},tab:function(e,t,n){var r,o;if(e._removeZWS(),n.collapsed&&pt(n)&&mt(n)){for(r=ft(n);o=r.parentNode;){if("UL"===o.nodeName||"OL"===o.nodeName){r.previousSibling&&(t.preventDefault(),e.modifyBlocks(Ot,n));break}r=o}t.preventDefault()}},space:function(e,t,n){var r,o;e._recordUndoState(n),Pt(n.startContainer),e._getRangeAndRemoveBookmark(n),r=n.endContainer,o=r.parentNode,n.collapsed&&"A"===o.nodeName&&!r.nextSibling&&n.endOffset===m(r)&&n.setStartAfter(o),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};H&&W&&w.getSelection().modify&&(Yt["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},Yt["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),Yt[Z+"b"]=Gt("B"),Yt[Z+"i"]=Gt("I"),Yt[Z+"u"]=Gt("U"),Yt[Z+"shift-7"]=Gt("S"),Yt[Z+"shift-5"]=Gt("SUB",{tag:"SUP"}),Yt[Z+"shift-6"]=Gt("SUP",{tag:"SUB"}),Yt[Z+"shift-8"]=Qt("makeUnorderedList"),Yt[Z+"shift-9"]=Qt("makeOrderedList"),Yt[Z+"["]=Qt("decreaseQuoteLevel"),Yt[Z+"]"]=Qt("increaseQuoteLevel"),Yt[Z+"y"]=Qt("redo"),Yt[Z+"z"]=Qt("undo"),Yt[Z+"shift-z"]=Qt("redo"),Nt._onKey=function(e){var t=e.keyCode,n=qt[t],r="",o=this.getSelection();n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),K&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,Yt[n]?Yt[n](this,e,o):1!==n.length||o.collapsed||(at(o),this._ensureBottomLine(),this.setSelection(o),this._updatePath(o,!0))},Nt._getHTML=function(){return this._body.innerHTML},Nt._setHTML=function(e){var t=this._body;t.innerHTML=e;do S(t);while(t=h(t))},Nt.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),q)for(t=this._body;t=h(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML().replace(/\u200B/g,""),q)for(o=a.length;o--;)g(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Nt.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),Mt(n,!0),Zt(n),_(n);for(var o=n;o=h(o);)S(o);for(var i=this._body;t=i.lastChild;)i.removeChild(t);i.appendChild(n),S(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),G?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Nt.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),s(e))ot(t,e),t.setStartAfter(e);else{for(var n,r,o=this._body,i=ft(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=y(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),lt(t)):(o.appendChild(e),o.appendChild(this.createDefaultBlock()),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)
}return this},Nt.insertImage=function(e){var t=this.createElement("IMG",{src:e});return this.insertElement(t),t};var jt=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Nt.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Nt.bold=jt("changeFormat",{tag:"B"}),Nt.italic=jt("changeFormat",{tag:"I"}),Nt.underline=jt("changeFormat",{tag:"U"}),Nt.strikethrough=jt("changeFormat",{tag:"S"}),Nt.subscript=jt("changeFormat",{tag:"SUB"},{tag:"SUP"}),Nt.superscript=jt("changeFormat",{tag:"SUP"},{tag:"SUB"}),Nt.removeBold=jt("changeFormat",null,{tag:"B"}),Nt.removeItalic=jt("changeFormat",null,{tag:"I"}),Nt.removeUnderline=jt("changeFormat",null,{tag:"U"}),Nt.removeStrikethrough=jt("changeFormat",null,{tag:"S"}),Nt.removeSubscript=jt("changeFormat",null,{tag:"SUB"}),Nt.removeSuperscript=jt("changeFormat",null,{tag:"SUP"}),Nt.makeLink=function(e,t){var n=this.getSelection();if(n.collapsed){var r=e.indexOf(":")+1;if(r)for(;"/"===e[r];)r+=1;ot(n,this._doc.createTextNode(e.slice(r)))}return t||(t={}),t.href=e,this.changeFormat({tag:"A",attributes:t},{tag:"A"},n),this.focus()},Nt.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Nt.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Nt.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Nt.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Nt.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Nt.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Nt.setTextDirection=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/dir/.test(e)}).join(" ")+" dir-"+e).trim(),t.dir=e},!0),this.focus()},Nt.increaseQuoteLevel=jt("modifyBlocks",Bt),Nt.decreaseQuoteLevel=jt("modifyBlocks",bt),Nt.makeUnorderedList=jt("modifyBlocks",Lt),Nt.makeOrderedList=jt("modifyBlocks",Rt),Nt.removeList=jt("modifyBlocks",At),Nt.increaseListLevel=jt("modifyBlocks",Ot),Nt.decreaseListLevel=jt("modifyBlocks",Dt),top!==w?(w.editor=new b(e),w.onEditorLoad&&(w.onEditorLoad(w.editor),w.onEditorLoad=null)):w.Squire=b}(document);