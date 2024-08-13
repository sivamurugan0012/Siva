var ym=Object.create;var ns=Object.defineProperty,Cm=Object.defineProperties,bm=Object.getOwnPropertyDescriptor,Em=Object.getOwnPropertyDescriptors,xm=Object.getOwnPropertyNames,Bl=Object.getOwnPropertySymbols,wm=Object.getPrototypeOf,Ul=Object.prototype.hasOwnProperty,Dm=Object.prototype.propertyIsEnumerable;var Vl=(t,e,n)=>e in t?ns(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M=(t,e)=>{for(var n in e||={})Ul.call(e,n)&&Vl(t,n,e[n]);if(Bl)for(var n of Bl(e))Dm.call(e,n)&&Vl(t,n,e[n]);return t},W=(t,e)=>Cm(t,Em(e));var Im=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Mm=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of xm(e))!Ul.call(t,r)&&r!==n&&ns(t,r,{get:()=>e[r],enumerable:!(i=bm(e,r))||i.enumerable});return t};var Sm=(t,e,n)=>(n=t!=null?ym(wm(t)):{},Mm(e||!t||!t.__esModule?ns(n,"default",{value:t,enumerable:!0}):n,t));var kp=Im((WO,Qo)=>{"use strict";(function(t,e,n,i){"use strict";var r=["","webkit","Moz","MS","ms","o"],o=e.createElement("div"),s="function",c=Math.round,u=Math.abs,f=Date.now;function g(h,p,v){return setTimeout(re(h,v),p)}function y(h,p,v){return Array.isArray(h)?(b(h,v[p],v),!0):!1}function b(h,p,v){var C;if(h)if(h.forEach)h.forEach(p,v);else if(h.length!==i)for(C=0;C<h.length;)p.call(v,h[C],C,h),C++;else for(C in h)h.hasOwnProperty(C)&&p.call(v,h[C],C,h)}function x(h,p,v){var C="DEPRECATED METHOD: "+p+`
`+v+` AT 
`;return function(){var E=new Error("get-stack-trace"),w=E&&E.stack?E.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",j=t.console&&(t.console.warn||t.console.log);return j&&j.call(t.console,C,w),h.apply(this,arguments)}}var I;typeof Object.assign!="function"?I=function(p){if(p===i||p===null)throw new TypeError("Cannot convert undefined or null to object");for(var v=Object(p),C=1;C<arguments.length;C++){var E=arguments[C];if(E!==i&&E!==null)for(var w in E)E.hasOwnProperty(w)&&(v[w]=E[w])}return v}:I=Object.assign;var B=x(function(p,v,C){for(var E=Object.keys(v),w=0;w<E.length;)(!C||C&&p[E[w]]===i)&&(p[E[w]]=v[E[w]]),w++;return p},"extend","Use `assign`."),Z=x(function(p,v){return B(p,v,!0)},"merge","Use `assign`.");function R(h,p,v){var C=p.prototype,E;E=h.prototype=Object.create(C),E.constructor=h,E._super=C,v&&I(E,v)}function re(h,p){return function(){return h.apply(p,arguments)}}function ve(h,p){return typeof h==s?h.apply(p&&p[0]||i,p):h}function he(h,p){return h===i?p:h}function le(h,p,v){b(sn(p),function(C){h.addEventListener(C,v,!1)})}function ue(h,p,v){b(sn(p),function(C){h.removeEventListener(C,v,!1)})}function Ct(h,p){for(;h;){if(h==p)return!0;h=h.parentNode}return!1}function ot(h,p){return h.indexOf(p)>-1}function sn(h){return h.trim().split(/\s+/g)}function an(h,p,v){if(h.indexOf&&!v)return h.indexOf(p);for(var C=0;C<h.length;){if(v&&h[C][v]==p||!v&&h[C]===p)return C;C++}return-1}function Xi(h){return Array.prototype.slice.call(h,0)}function vl(h,p,v){for(var C=[],E=[],w=0;w<h.length;){var j=p?h[w][p]:h[w];an(E,j)<0&&C.push(h[w]),E[w]=j,w++}return v&&(p?C=C.sort(function(oe,fe){return oe[p]>fe[p]}):C=C.sort()),C}function Ki(h,p){for(var v,C,E=p[0].toUpperCase()+p.slice(1),w=0;w<r.length;){if(v=r[w],C=v?v+E:p,C in h)return C;w++}return i}var Lp=1;function jp(){return Lp++}function yl(h){var p=h.ownerDocument||h;return p.defaultView||p.parentWindow||t}var Bp=/mobile|tablet|ip(ad|hone|od)|android/i,Cl="ontouchstart"in t,Vp=Ki(t,"PointerEvent")!==i,Up=Cl&&Bp.test(navigator.userAgent),Gn="touch",Hp="pen",qo="mouse",zp="kinect",Qp=25,de=1,_t=2,Y=4,pe=8,Ji=1,Yn=2,Wn=4,Xn=8,Kn=16,Qe=Yn|Wn,kt=Xn|Kn,bl=Qe|kt,El=["x","y"],Zi=["clientX","clientY"];function Oe(h,p){var v=this;this.manager=h,this.callback=p,this.element=h.element,this.target=h.options.inputTarget,this.domHandler=function(C){ve(h.options.enable,[h])&&v.handler(C)},this.init()}Oe.prototype={handler:function(){},init:function(){this.evEl&&le(this.element,this.evEl,this.domHandler),this.evTarget&&le(this.target,this.evTarget,this.domHandler),this.evWin&&le(yl(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&ue(this.element,this.evEl,this.domHandler),this.evTarget&&ue(this.target,this.evTarget,this.domHandler),this.evWin&&ue(yl(this.element),this.evWin,this.domHandler)}};function qp(h){var p,v=h.options.inputClass;return v?p=v:Vp?p=Yo:Up?p=tr:Cl?p=Wo:p=er,new p(h,Gp)}function Gp(h,p,v){var C=v.pointers.length,E=v.changedPointers.length,w=p&de&&C-E===0,j=p&(Y|pe)&&C-E===0;v.isFirst=!!w,v.isFinal=!!j,w&&(h.session={}),v.eventType=p,Yp(h,v),h.emit("hammer.input",v),h.recognize(v),h.session.prevInput=v}function Yp(h,p){var v=h.session,C=p.pointers,E=C.length;v.firstInput||(v.firstInput=xl(p)),E>1&&!v.firstMultiple?v.firstMultiple=xl(p):E===1&&(v.firstMultiple=!1);var w=v.firstInput,j=v.firstMultiple,ne=j?j.center:w.center,oe=p.center=wl(C);p.timeStamp=f(),p.deltaTime=p.timeStamp-w.timeStamp,p.angle=Go(ne,oe),p.distance=$i(ne,oe),Wp(v,p),p.offsetDirection=Il(p.deltaX,p.deltaY);var fe=Dl(p.deltaTime,p.deltaX,p.deltaY);p.overallVelocityX=fe.x,p.overallVelocityY=fe.y,p.overallVelocity=u(fe.x)>u(fe.y)?fe.x:fe.y,p.scale=j?Jp(j.pointers,C):1,p.rotation=j?Kp(j.pointers,C):0,p.maxPointers=v.prevInput?p.pointers.length>v.prevInput.maxPointers?p.pointers.length:v.prevInput.maxPointers:p.pointers.length,Xp(v,p);var Ge=h.element;Ct(p.srcEvent.target,Ge)&&(Ge=p.srcEvent.target),p.target=Ge}function Wp(h,p){var v=p.center,C=h.offsetDelta||{},E=h.prevDelta||{},w=h.prevInput||{};(p.eventType===de||w.eventType===Y)&&(E=h.prevDelta={x:w.deltaX||0,y:w.deltaY||0},C=h.offsetDelta={x:v.x,y:v.y}),p.deltaX=E.x+(v.x-C.x),p.deltaY=E.y+(v.y-C.y)}function Xp(h,p){var v=h.lastInterval||p,C=p.timeStamp-v.timeStamp,E,w,j,ne;if(p.eventType!=pe&&(C>Qp||v.velocity===i)){var oe=p.deltaX-v.deltaX,fe=p.deltaY-v.deltaY,Ge=Dl(C,oe,fe);w=Ge.x,j=Ge.y,E=u(Ge.x)>u(Ge.y)?Ge.x:Ge.y,ne=Il(oe,fe),h.lastInterval=p}else E=v.velocity,w=v.velocityX,j=v.velocityY,ne=v.direction;p.velocity=E,p.velocityX=w,p.velocityY=j,p.direction=ne}function xl(h){for(var p=[],v=0;v<h.pointers.length;)p[v]={clientX:c(h.pointers[v].clientX),clientY:c(h.pointers[v].clientY)},v++;return{timeStamp:f(),pointers:p,center:wl(p),deltaX:h.deltaX,deltaY:h.deltaY}}function wl(h){var p=h.length;if(p===1)return{x:c(h[0].clientX),y:c(h[0].clientY)};for(var v=0,C=0,E=0;E<p;)v+=h[E].clientX,C+=h[E].clientY,E++;return{x:c(v/p),y:c(C/p)}}function Dl(h,p,v){return{x:p/h||0,y:v/h||0}}function Il(h,p){return h===p?Ji:u(h)>=u(p)?h<0?Yn:Wn:p<0?Xn:Kn}function $i(h,p,v){v||(v=El);var C=p[v[0]]-h[v[0]],E=p[v[1]]-h[v[1]];return Math.sqrt(C*C+E*E)}function Go(h,p,v){v||(v=El);var C=p[v[0]]-h[v[0]],E=p[v[1]]-h[v[1]];return Math.atan2(E,C)*180/Math.PI}function Kp(h,p){return Go(p[1],p[0],Zi)+Go(h[1],h[0],Zi)}function Jp(h,p){return $i(p[0],p[1],Zi)/$i(h[0],h[1],Zi)}var Zp={mousedown:de,mousemove:_t,mouseup:Y},$p="mousedown",em="mousemove mouseup";function er(){this.evEl=$p,this.evWin=em,this.pressed=!1,Oe.apply(this,arguments)}R(er,Oe,{handler:function(p){var v=Zp[p.type];v&de&&p.button===0&&(this.pressed=!0),v&_t&&p.which!==1&&(v=Y),this.pressed&&(v&Y&&(this.pressed=!1),this.callback(this.manager,v,{pointers:[p],changedPointers:[p],pointerType:qo,srcEvent:p}))}});var tm={pointerdown:de,pointermove:_t,pointerup:Y,pointercancel:pe,pointerout:pe},nm={2:Gn,3:Hp,4:qo,5:zp},Ml="pointerdown",Sl="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(Ml="MSPointerDown",Sl="MSPointerMove MSPointerUp MSPointerCancel");function Yo(){this.evEl=Ml,this.evWin=Sl,Oe.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}R(Yo,Oe,{handler:function(p){var v=this.store,C=!1,E=p.type.toLowerCase().replace("ms",""),w=tm[E],j=nm[p.pointerType]||p.pointerType,ne=j==Gn,oe=an(v,p.pointerId,"pointerId");w&de&&(p.button===0||ne)?oe<0&&(v.push(p),oe=v.length-1):w&(Y|pe)&&(C=!0),!(oe<0)&&(v[oe]=p,this.callback(this.manager,w,{pointers:v,changedPointers:[p],pointerType:j,srcEvent:p}),C&&v.splice(oe,1))}});var im={touchstart:de,touchmove:_t,touchend:Y,touchcancel:pe},rm="touchstart",om="touchstart touchmove touchend touchcancel";function Ol(){this.evTarget=rm,this.evWin=om,this.started=!1,Oe.apply(this,arguments)}R(Ol,Oe,{handler:function(p){var v=im[p.type];if(v===de&&(this.started=!0),!!this.started){var C=sm.call(this,p,v);v&(Y|pe)&&C[0].length-C[1].length===0&&(this.started=!1),this.callback(this.manager,v,{pointers:C[0],changedPointers:C[1],pointerType:Gn,srcEvent:p})}}});function sm(h,p){var v=Xi(h.touches),C=Xi(h.changedTouches);return p&(Y|pe)&&(v=vl(v.concat(C),"identifier",!0)),[v,C]}var am={touchstart:de,touchmove:_t,touchend:Y,touchcancel:pe},cm="touchstart touchmove touchend touchcancel";function tr(){this.evTarget=cm,this.targetIds={},Oe.apply(this,arguments)}R(tr,Oe,{handler:function(p){var v=am[p.type],C=lm.call(this,p,v);C&&this.callback(this.manager,v,{pointers:C[0],changedPointers:C[1],pointerType:Gn,srcEvent:p})}});function lm(h,p){var v=Xi(h.touches),C=this.targetIds;if(p&(de|_t)&&v.length===1)return C[v[0].identifier]=!0,[v,v];var E,w,j=Xi(h.changedTouches),ne=[],oe=this.target;if(w=v.filter(function(fe){return Ct(fe.target,oe)}),p===de)for(E=0;E<w.length;)C[w[E].identifier]=!0,E++;for(E=0;E<j.length;)C[j[E].identifier]&&ne.push(j[E]),p&(Y|pe)&&delete C[j[E].identifier],E++;if(ne.length)return[vl(w.concat(ne),"identifier",!0),ne]}var um=2500,Pl=25;function Wo(){Oe.apply(this,arguments);var h=re(this.handler,this);this.touch=new tr(this.manager,h),this.mouse=new er(this.manager,h),this.primaryTouch=null,this.lastTouches=[]}R(Wo,Oe,{handler:function(p,v,C){var E=C.pointerType==Gn,w=C.pointerType==qo;if(!(w&&C.sourceCapabilities&&C.sourceCapabilities.firesTouchEvents)){if(E)dm.call(this,v,C);else if(w&&fm.call(this,C))return;this.callback(p,v,C)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function dm(h,p){h&de?(this.primaryTouch=p.changedPointers[0].identifier,Tl.call(this,p)):h&(Y|pe)&&Tl.call(this,p)}function Tl(h){var p=h.changedPointers[0];if(p.identifier===this.primaryTouch){var v={x:p.clientX,y:p.clientY};this.lastTouches.push(v);var C=this.lastTouches,E=function(){var w=C.indexOf(v);w>-1&&C.splice(w,1)};setTimeout(E,um)}}function fm(h){for(var p=h.srcEvent.clientX,v=h.srcEvent.clientY,C=0;C<this.lastTouches.length;C++){var E=this.lastTouches[C],w=Math.abs(p-E.x),j=Math.abs(v-E.y);if(w<=Pl&&j<=Pl)return!0}return!1}var Al=Ki(o.style,"touchAction"),Nl=Al!==i,Rl="compute",_l="auto",Xo="manipulation",Ft="none",Jn="pan-x",Zn="pan-y",nr=pm();function Ko(h,p){this.manager=h,this.set(p)}Ko.prototype={set:function(h){h==Rl&&(h=this.compute()),Nl&&this.manager.element.style&&nr[h]&&(this.manager.element.style[Al]=h),this.actions=h.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var h=[];return b(this.manager.recognizers,function(p){ve(p.options.enable,[p])&&(h=h.concat(p.getTouchAction()))}),hm(h.join(" "))},preventDefaults:function(h){var p=h.srcEvent,v=h.offsetDirection;if(this.manager.session.prevented){p.preventDefault();return}var C=this.actions,E=ot(C,Ft)&&!nr[Ft],w=ot(C,Zn)&&!nr[Zn],j=ot(C,Jn)&&!nr[Jn];if(E){var ne=h.pointers.length===1,oe=h.distance<2,fe=h.deltaTime<250;if(ne&&oe&&fe)return}if(!(j&&w)&&(E||w&&v&Qe||j&&v&kt))return this.preventSrc(p)},preventSrc:function(h){this.manager.session.prevented=!0,h.preventDefault()}};function hm(h){if(ot(h,Ft))return Ft;var p=ot(h,Jn),v=ot(h,Zn);return p&&v?Ft:p||v?p?Jn:Zn:ot(h,Xo)?Xo:_l}function pm(){if(!Nl)return!1;var h={},p=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(v){h[v]=p?t.CSS.supports("touch-action",v):!0}),h}var ir=1,Pe=2,cn=4,bt=8,st=bt,$n=16,qe=32;function at(h){this.options=I({},this.defaults,h||{}),this.id=jp(),this.manager=null,this.options.enable=he(this.options.enable,!0),this.state=ir,this.simultaneous={},this.requireFail=[]}at.prototype={defaults:{},set:function(h){return I(this.options,h),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(h){if(y(h,"recognizeWith",this))return this;var p=this.simultaneous;return h=rr(h,this),p[h.id]||(p[h.id]=h,h.recognizeWith(this)),this},dropRecognizeWith:function(h){return y(h,"dropRecognizeWith",this)?this:(h=rr(h,this),delete this.simultaneous[h.id],this)},requireFailure:function(h){if(y(h,"requireFailure",this))return this;var p=this.requireFail;return h=rr(h,this),an(p,h)===-1&&(p.push(h),h.requireFailure(this)),this},dropRequireFailure:function(h){if(y(h,"dropRequireFailure",this))return this;h=rr(h,this);var p=an(this.requireFail,h);return p>-1&&this.requireFail.splice(p,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(h){return!!this.simultaneous[h.id]},emit:function(h){var p=this,v=this.state;function C(E){p.manager.emit(E,h)}v<bt&&C(p.options.event+kl(v)),C(p.options.event),h.additionalEvent&&C(h.additionalEvent),v>=bt&&C(p.options.event+kl(v))},tryEmit:function(h){if(this.canEmit())return this.emit(h);this.state=qe},canEmit:function(){for(var h=0;h<this.requireFail.length;){if(!(this.requireFail[h].state&(qe|ir)))return!1;h++}return!0},recognize:function(h){var p=I({},h);if(!ve(this.options.enable,[this,p])){this.reset(),this.state=qe;return}this.state&(st|$n|qe)&&(this.state=ir),this.state=this.process(p),this.state&(Pe|cn|bt|$n)&&this.tryEmit(p)},process:function(h){},getTouchAction:function(){},reset:function(){}};function kl(h){return h&$n?"cancel":h&bt?"end":h&cn?"move":h&Pe?"start":""}function Fl(h){return h==Kn?"down":h==Xn?"up":h==Yn?"left":h==Wn?"right":""}function rr(h,p){var v=p.manager;return v?v.get(h):h}function je(){at.apply(this,arguments)}R(je,at,{defaults:{pointers:1},attrTest:function(h){var p=this.options.pointers;return p===0||h.pointers.length===p},process:function(h){var p=this.state,v=h.eventType,C=p&(Pe|cn),E=this.attrTest(h);return C&&(v&pe||!E)?p|$n:C||E?v&Y?p|bt:p&Pe?p|cn:Pe:qe}});function or(){je.apply(this,arguments),this.pX=null,this.pY=null}R(or,je,{defaults:{event:"pan",threshold:10,pointers:1,direction:bl},getTouchAction:function(){var h=this.options.direction,p=[];return h&Qe&&p.push(Zn),h&kt&&p.push(Jn),p},directionTest:function(h){var p=this.options,v=!0,C=h.distance,E=h.direction,w=h.deltaX,j=h.deltaY;return E&p.direction||(p.direction&Qe?(E=w===0?Ji:w<0?Yn:Wn,v=w!=this.pX,C=Math.abs(h.deltaX)):(E=j===0?Ji:j<0?Xn:Kn,v=j!=this.pY,C=Math.abs(h.deltaY))),h.direction=E,v&&C>p.threshold&&E&p.direction},attrTest:function(h){return je.prototype.attrTest.call(this,h)&&(this.state&Pe||!(this.state&Pe)&&this.directionTest(h))},emit:function(h){this.pX=h.deltaX,this.pY=h.deltaY;var p=Fl(h.direction);p&&(h.additionalEvent=this.options.event+p),this._super.emit.call(this,h)}});function Jo(){je.apply(this,arguments)}R(Jo,je,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Ft]},attrTest:function(h){return this._super.attrTest.call(this,h)&&(Math.abs(h.scale-1)>this.options.threshold||this.state&Pe)},emit:function(h){if(h.scale!==1){var p=h.scale<1?"in":"out";h.additionalEvent=this.options.event+p}this._super.emit.call(this,h)}});function Zo(){at.apply(this,arguments),this._timer=null,this._input=null}R(Zo,at,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[_l]},process:function(h){var p=this.options,v=h.pointers.length===p.pointers,C=h.distance<p.threshold,E=h.deltaTime>p.time;if(this._input=h,!C||!v||h.eventType&(Y|pe)&&!E)this.reset();else if(h.eventType&de)this.reset(),this._timer=g(function(){this.state=st,this.tryEmit()},p.time,this);else if(h.eventType&Y)return st;return qe},reset:function(){clearTimeout(this._timer)},emit:function(h){this.state===st&&(h&&h.eventType&Y?this.manager.emit(this.options.event+"up",h):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}});function $o(){je.apply(this,arguments)}R($o,je,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Ft]},attrTest:function(h){return this._super.attrTest.call(this,h)&&(Math.abs(h.rotation)>this.options.threshold||this.state&Pe)}});function es(){je.apply(this,arguments)}R(es,je,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Qe|kt,pointers:1},getTouchAction:function(){return or.prototype.getTouchAction.call(this)},attrTest:function(h){var p=this.options.direction,v;return p&(Qe|kt)?v=h.overallVelocity:p&Qe?v=h.overallVelocityX:p&kt&&(v=h.overallVelocityY),this._super.attrTest.call(this,h)&&p&h.offsetDirection&&h.distance>this.options.threshold&&h.maxPointers==this.options.pointers&&u(v)>this.options.velocity&&h.eventType&Y},emit:function(h){var p=Fl(h.offsetDirection);p&&this.manager.emit(this.options.event+p,h),this.manager.emit(this.options.event,h)}});function sr(){at.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}R(sr,at,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Xo]},process:function(h){var p=this.options,v=h.pointers.length===p.pointers,C=h.distance<p.threshold,E=h.deltaTime<p.time;if(this.reset(),h.eventType&de&&this.count===0)return this.failTimeout();if(C&&E&&v){if(h.eventType!=Y)return this.failTimeout();var w=this.pTime?h.timeStamp-this.pTime<p.interval:!0,j=!this.pCenter||$i(this.pCenter,h.center)<p.posThreshold;this.pTime=h.timeStamp,this.pCenter=h.center,!j||!w?this.count=1:this.count+=1,this._input=h;var ne=this.count%p.taps;if(ne===0)return this.hasRequireFailures()?(this._timer=g(function(){this.state=st,this.tryEmit()},p.interval,this),Pe):st}return qe},failTimeout:function(){return this._timer=g(function(){this.state=qe},this.options.interval,this),qe},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==st&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function ct(h,p){return p=p||{},p.recognizers=he(p.recognizers,ct.defaults.preset),new ts(h,p)}ct.VERSION="2.0.7",ct.defaults={domEvents:!1,touchAction:Rl,enable:!0,inputTarget:null,inputClass:null,preset:[[$o,{enable:!1}],[Jo,{enable:!1},["rotate"]],[es,{direction:Qe}],[or,{direction:Qe},["swipe"]],[sr],[sr,{event:"doubletap",taps:2},["tap"]],[Zo]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var mm=1,Ll=2;function ts(h,p){this.options=I({},ct.defaults,p||{}),this.options.inputTarget=this.options.inputTarget||h,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=h,this.input=qp(this),this.touchAction=new Ko(this,this.options.touchAction),jl(this,!0),b(this.options.recognizers,function(v){var C=this.add(new v[0](v[1]));v[2]&&C.recognizeWith(v[2]),v[3]&&C.requireFailure(v[3])},this)}ts.prototype={set:function(h){return I(this.options,h),h.touchAction&&this.touchAction.update(),h.inputTarget&&(this.input.destroy(),this.input.target=h.inputTarget,this.input.init()),this},stop:function(h){this.session.stopped=h?Ll:mm},recognize:function(h){var p=this.session;if(!p.stopped){this.touchAction.preventDefaults(h);var v,C=this.recognizers,E=p.curRecognizer;(!E||E&&E.state&st)&&(E=p.curRecognizer=null);for(var w=0;w<C.length;)v=C[w],p.stopped!==Ll&&(!E||v==E||v.canRecognizeWith(E))?v.recognize(h):v.reset(),!E&&v.state&(Pe|cn|bt)&&(E=p.curRecognizer=v),w++}},get:function(h){if(h instanceof at)return h;for(var p=this.recognizers,v=0;v<p.length;v++)if(p[v].options.event==h)return p[v];return null},add:function(h){if(y(h,"add",this))return this;var p=this.get(h.options.event);return p&&this.remove(p),this.recognizers.push(h),h.manager=this,this.touchAction.update(),h},remove:function(h){if(y(h,"remove",this))return this;if(h=this.get(h),h){var p=this.recognizers,v=an(p,h);v!==-1&&(p.splice(v,1),this.touchAction.update())}return this},on:function(h,p){if(h!==i&&p!==i){var v=this.handlers;return b(sn(h),function(C){v[C]=v[C]||[],v[C].push(p)}),this}},off:function(h,p){if(h!==i){var v=this.handlers;return b(sn(h),function(C){p?v[C]&&v[C].splice(an(v[C],p),1):delete v[C]}),this}},emit:function(h,p){this.options.domEvents&&gm(h,p);var v=this.handlers[h]&&this.handlers[h].slice();if(!(!v||!v.length)){p.type=h,p.preventDefault=function(){p.srcEvent.preventDefault()};for(var C=0;C<v.length;)v[C](p),C++}},destroy:function(){this.element&&jl(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function jl(h,p){var v=h.element;if(v.style){var C;b(h.options.cssProps,function(E,w){C=Ki(v.style,w),p?(h.oldCssProps[C]=v.style[C],v.style[C]=E):v.style[C]=h.oldCssProps[C]||""}),p||(h.oldCssProps={})}}function gm(h,p){var v=e.createEvent("Event");v.initEvent(h,!0,!0),v.gesture=p,p.target.dispatchEvent(v)}I(ct,{INPUT_START:de,INPUT_MOVE:_t,INPUT_END:Y,INPUT_CANCEL:pe,STATE_POSSIBLE:ir,STATE_BEGAN:Pe,STATE_CHANGED:cn,STATE_ENDED:bt,STATE_RECOGNIZED:st,STATE_CANCELLED:$n,STATE_FAILED:qe,DIRECTION_NONE:Ji,DIRECTION_LEFT:Yn,DIRECTION_RIGHT:Wn,DIRECTION_UP:Xn,DIRECTION_DOWN:Kn,DIRECTION_HORIZONTAL:Qe,DIRECTION_VERTICAL:kt,DIRECTION_ALL:bl,Manager:ts,Input:Oe,TouchAction:Ko,TouchInput:tr,MouseInput:er,PointerEventInput:Yo,TouchMouseInput:Wo,SingleTouchInput:Ol,Recognizer:at,AttrRecognizer:je,Tap:sr,Pan:or,Swipe:es,Pinch:Jo,Rotate:$o,Press:Zo,on:le,off:ue,each:b,merge:Z,extend:B,assign:I,inherit:R,bindFn:re,prefixed:Ki});var vm=typeof t<"u"?t:typeof self<"u"?self:{};vm.Hammer=ct,typeof define=="function"&&define.amd?define(function(){return ct}):typeof Qo<"u"&&Qo.exports?Qo.exports=ct:t[n]=ct})(window,document,"Hammer")});var Hl=null;var is=1,zl=Symbol("SIGNAL");function ye(t){let e=Hl;return Hl=t,e}var Ql={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Om(t){if(!(ss(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===is)){if(!t.producerMustRecompute(t)&&!rs(t)){t.dirty=!1,t.lastCleanEpoch=is;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=is}}function ql(t){return t&&(t.nextProducerIndex=0),ye(t)}function Gl(t,e){if(ye(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(ss(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)os(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function rs(t){ar(t);for(let e=0;e<t.producerNode.length;e++){let n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(Om(n),i!==n.version))return!0}return!1}function Yl(t){if(ar(t),ss(t))for(let e=0;e<t.producerNode.length;e++)os(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function os(t,e){if(Pm(t),ar(t),t.liveConsumerNode.length===1)for(let i=0;i<t.producerNode.length;i++)os(t.producerNode[i],t.producerIndexOfThis[i]);let n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let i=t.liveConsumerIndexOfThis[e],r=t.liveConsumerNode[e];ar(r),r.producerIndexOfThis[i]=e}}function ss(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function ar(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function Pm(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function Tm(){throw new Error}var Am=Tm;function Wl(t){Am=t}function A(t){return typeof t=="function"}function ln(t){let n=t(i=>{Error.call(i),i.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var cr=ln(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function ei(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var $=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let o of n)o.remove(this);else n.remove(this);let{initialTeardown:i}=this;if(A(i))try{i()}catch(o){e=o instanceof cr?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Xl(o)}catch(s){e=e??[],s instanceof cr?e=[...e,...s.errors]:e.push(s)}}if(e)throw new cr(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Xl(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&ei(n,e)}remove(e){let{_finalizers:n}=this;n&&ei(n,e),e instanceof t&&e._removeParent(this)}};$.EMPTY=(()=>{let t=new $;return t.closed=!0,t})();var as=$.EMPTY;function lr(t){return t instanceof $||t&&"closed"in t&&A(t.remove)&&A(t.add)&&A(t.unsubscribe)}function Xl(t){A(t)?t():t.unsubscribe()}var Be={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var un={setTimeout(t,e,...n){let{delegate:i}=un;return i?.setTimeout?i.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=un;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ur(t){un.setTimeout(()=>{let{onUnhandledError:e}=Be;if(e)e(t);else throw t})}function ti(){}var Kl=cs("C",void 0,void 0);function Jl(t){return cs("E",void 0,t)}function Zl(t){return cs("N",t,void 0)}function cs(t,e,n){return{kind:t,value:e,error:n}}var Lt=null;function dn(t){if(Be.useDeprecatedSynchronousErrorHandling){let e=!Lt;if(e&&(Lt={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:i}=Lt;if(Lt=null,n)throw i}}else t()}function $l(t){Be.useDeprecatedSynchronousErrorHandling&&Lt&&(Lt.errorThrown=!0,Lt.error=t)}var jt=class extends ${constructor(e){super(),this.isStopped=!1,e?(this.destination=e,lr(e)&&e.add(this)):this.destination=_m}static create(e,n,i){return new fn(e,n,i)}next(e){this.isStopped?us(Zl(e),this):this._next(e)}error(e){this.isStopped?us(Jl(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?us(Kl,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Nm=Function.prototype.bind;function ls(t,e){return Nm.call(t,e)}var ds=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(i){dr(i)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(i){dr(i)}else dr(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){dr(n)}}},fn=class extends jt{constructor(e,n,i){super();let r;if(A(e)||!e)r={next:e??void 0,error:n??void 0,complete:i??void 0};else{let o;this&&Be.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&ls(e.next,o),error:e.error&&ls(e.error,o),complete:e.complete&&ls(e.complete,o)}):r=e}this.destination=new ds(r)}};function dr(t){Be.useDeprecatedSynchronousErrorHandling?$l(t):ur(t)}function Rm(t){throw t}function us(t,e){let{onStoppedNotification:n}=Be;n&&un.setTimeout(()=>n(t,e))}var _m={closed:!0,next:ti,error:Rm,complete:ti};var hn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ce(t){return t}function fs(...t){return hs(t)}function hs(t){return t.length===0?Ce:t.length===1?t[0]:function(n){return t.reduce((i,r)=>r(i),n)}}var q=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let i=new t;return i.source=this,i.operator=n,i}subscribe(n,i,r){let o=Fm(n)?n:new fn(n,i,r);return dn(()=>{let{operator:s,source:c}=this;o.add(s?s.call(o,c):c?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(n){try{return this._subscribe(n)}catch(i){n.error(i)}}forEach(n,i){return i=eu(i),new i((r,o)=>{let s=new fn({next:c=>{try{n(c)}catch(u){o(u),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(n){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(n)}[hn](){return this}pipe(...n){return hs(n)(this)}toPromise(n){return n=eu(n),new n((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=e=>new t(e),t})();function eu(t){var e;return(e=t??Be.Promise)!==null&&e!==void 0?e:Promise}function km(t){return t&&A(t.next)&&A(t.error)&&A(t.complete)}function Fm(t){return t&&t instanceof jt||km(t)&&lr(t)}function ps(t){return A(t?.lift)}function V(t){return e=>{if(ps(e))return e.lift(function(n){try{return t(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function U(t,e,n,i,r){return new ms(t,e,n,i,r)}var ms=class extends jt{constructor(e,n,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(u){e.error(u)}}:super._next,this._error=r?function(c){try{r(c)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function pn(){return V((t,e)=>{let n=null;t._refCount++;let i=U(e,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){n=null;return}let r=t._connection,o=n;n=null,r&&(!o||r===o)&&r.unsubscribe(),e.unsubscribe()});t.subscribe(i),i.closed||(n=t.connect())})}var mn=class extends q{constructor(e,n){super(),this.source=e,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,ps(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new $;let n=this.getSubject();e.add(this.source.subscribe(U(n,void 0,()=>{this._teardown(),n.complete()},i=>{this._teardown(),n.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=$.EMPTY)}return e}refCount(){return pn()(this)}};var tu=ln(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var be=(()=>{class t extends q{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let i=new fr(this,this);return i.operator=n,i}_throwIfClosed(){if(this.closed)throw new tu}next(n){dn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(n)}})}error(n){dn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:i}=this;for(;i.length;)i.shift().error(n)}})}complete(){dn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:i,isStopped:r,observers:o}=this;return i||r?as:(this.currentObservers=null,o.push(n),new $(()=>{this.currentObservers=null,ei(o,n)}))}_checkFinalizedStatuses(n){let{hasError:i,thrownError:r,isStopped:o}=this;i?n.error(r):o&&n.complete()}asObservable(){let n=new q;return n.source=this,n}}return t.create=(e,n)=>new fr(e,n),t})(),fr=class extends be{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)}error(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:as}};var se=class extends be{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:i}=this;if(e)throw n;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Te=new q(t=>t.complete());function nu(t){return t&&A(t.schedule)}function iu(t){return t[t.length-1]}function ru(t){return A(iu(t))?t.pop():void 0}function Et(t){return nu(iu(t))?t.pop():void 0}function su(t,e,n,i){function r(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function c(g){try{f(i.next(g))}catch(y){s(y)}}function u(g){try{f(i.throw(g))}catch(y){s(y)}}function f(g){g.done?o(g.value):r(g.value).then(c,u)}f((i=i.apply(t,e||[])).next())})}function ou(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bt(t){return this instanceof Bt?(this.v=t,this):new Bt(t)}function au(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),r,o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(b){i[b]&&(r[b]=function(x){return new Promise(function(I,B){o.push([b,x,I,B])>1||c(b,x)})})}function c(b,x){try{u(i[b](x))}catch(I){y(o[0][3],I)}}function u(b){b.value instanceof Bt?Promise.resolve(b.value.v).then(f,g):y(o[0][2],b)}function f(b){c("next",b)}function g(b){c("throw",b)}function y(b,x){b(x),o.shift(),o.length&&c(o[0][0],o[0][1])}}function cu(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof ou=="function"?ou(t):t[Symbol.iterator](),n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n);function i(o){n[o]=t[o]&&function(s){return new Promise(function(c,u){s=t[o](s),r(c,u,s.done,s.value)})}}function r(o,s,c,u){Promise.resolve(u).then(function(f){o({value:f,done:c})},s)}}var hr=t=>t&&typeof t.length=="number"&&typeof t!="function";function pr(t){return A(t?.then)}function mr(t){return A(t[hn])}function gr(t){return Symbol.asyncIterator&&A(t?.[Symbol.asyncIterator])}function vr(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Lm(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yr=Lm();function Cr(t){return A(t?.[yr])}function br(t){return au(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:i,done:r}=yield Bt(n.read());if(r)return yield Bt(void 0);yield yield Bt(i)}}finally{n.releaseLock()}})}function Er(t){return A(t?.getReader)}function ie(t){if(t instanceof q)return t;if(t!=null){if(mr(t))return jm(t);if(hr(t))return Bm(t);if(pr(t))return Vm(t);if(gr(t))return lu(t);if(Cr(t))return Um(t);if(Er(t))return Hm(t)}throw vr(t)}function jm(t){return new q(e=>{let n=t[hn]();if(A(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Bm(t){return new q(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Vm(t){return new q(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,ur)})}function Um(t){return new q(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function lu(t){return new q(e=>{zm(t,e).catch(n=>e.error(n))})}function Hm(t){return lu(br(t))}function zm(t,e){var n,i,r,o;return su(this,void 0,void 0,function*(){try{for(n=cu(t);i=yield n.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=n.return)&&(yield o.call(n))}finally{if(r)throw r.error}}e.complete()})}function me(t,e,n,i=0,r=!1){let o=e.schedule(function(){n(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function xr(t,e=0){return V((n,i)=>{n.subscribe(U(i,r=>me(i,t,()=>i.next(r),e),()=>me(i,t,()=>i.complete(),e),r=>me(i,t,()=>i.error(r),e)))})}function wr(t,e=0){return V((n,i)=>{i.add(t.schedule(()=>n.subscribe(i),e))})}function uu(t,e){return ie(t).pipe(wr(e),xr(e))}function du(t,e){return ie(t).pipe(wr(e),xr(e))}function fu(t,e){return new q(n=>{let i=0;return e.schedule(function(){i===t.length?n.complete():(n.next(t[i++]),n.closed||this.schedule())})})}function hu(t,e){return new q(n=>{let i;return me(n,e,()=>{i=t[yr](),me(n,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){n.error(s);return}o?n.complete():n.next(r)},0,!0)}),()=>A(i?.return)&&i.return()})}function Dr(t,e){if(!t)throw new Error("Iterable cannot be null");return new q(n=>{me(n,e,()=>{let i=t[Symbol.asyncIterator]();me(n,e,()=>{i.next().then(r=>{r.done?n.complete():n.next(r.value)})},0,!0)})})}function pu(t,e){return Dr(br(t),e)}function mu(t,e){if(t!=null){if(mr(t))return uu(t,e);if(hr(t))return fu(t,e);if(pr(t))return du(t,e);if(gr(t))return Dr(t,e);if(Cr(t))return hu(t,e);if(Er(t))return pu(t,e)}throw vr(t)}function X(t,e){return e?mu(t,e):ie(t)}function T(...t){let e=Et(t);return X(t,e)}function gn(t,e){let n=A(t)?t:()=>t,i=r=>r.error(n());return new q(e?r=>e.schedule(i,0,r):i)}function gs(t){return!!t&&(t instanceof q||A(t.lift)&&A(t.subscribe))}var lt=ln(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function _(t,e){return V((n,i)=>{let r=0;n.subscribe(U(i,o=>{i.next(t.call(e,o,r++))}))})}var{isArray:Qm}=Array;function qm(t,e){return Qm(e)?t(...e):t(e)}function gu(t){return _(e=>qm(t,e))}var{isArray:Gm}=Array,{getPrototypeOf:Ym,prototype:Wm,keys:Xm}=Object;function vu(t){if(t.length===1){let e=t[0];if(Gm(e))return{args:e,keys:null};if(Km(e)){let n=Xm(e);return{args:n.map(i=>e[i]),keys:n}}}return{args:t,keys:null}}function Km(t){return t&&typeof t=="object"&&Ym(t)===Wm}function yu(t,e){return t.reduce((n,i,r)=>(n[i]=e[r],n),{})}function Ir(...t){let e=Et(t),n=ru(t),{args:i,keys:r}=vu(t);if(i.length===0)return X([],e);let o=new q(Jm(i,e,r?s=>yu(r,s):Ce));return n?o.pipe(gu(n)):o}function Jm(t,e,n=Ce){return i=>{Cu(e,()=>{let{length:r}=t,o=new Array(r),s=r,c=r;for(let u=0;u<r;u++)Cu(e,()=>{let f=X(t[u],e),g=!1;f.subscribe(U(i,y=>{o[u]=y,g||(g=!0,c--),c||i.next(n(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Cu(t,e,n){t?me(n,t,e):e()}function bu(t,e,n,i,r,o,s,c){let u=[],f=0,g=0,y=!1,b=()=>{y&&!u.length&&!f&&e.complete()},x=B=>f<i?I(B):u.push(B),I=B=>{o&&e.next(B),f++;let Z=!1;ie(n(B,g++)).subscribe(U(e,R=>{r?.(R),o?x(R):e.next(R)},()=>{Z=!0},void 0,()=>{if(Z)try{for(f--;u.length&&f<i;){let R=u.shift();s?me(e,s,()=>I(R)):I(R)}b()}catch(R){e.error(R)}}))};return t.subscribe(U(e,x,()=>{y=!0,b()})),()=>{c?.()}}function ee(t,e,n=1/0){return A(e)?ee((i,r)=>_((o,s)=>e(i,o,r,s))(ie(t(i,r))),n):(typeof e=="number"&&(n=e),V((i,r)=>bu(i,r,t,n)))}function vs(t=1/0){return ee(Ce,t)}function Eu(){return vs(1)}function vn(...t){return Eu()(X(t,Et(t)))}function Mr(t){return new q(e=>{ie(t()).subscribe(e)})}function Ee(t,e){return V((n,i)=>{let r=0;n.subscribe(U(i,o=>t.call(e,o,r++)&&i.next(o)))})}function xt(t){return V((e,n)=>{let i=null,r=!1,o;i=e.subscribe(U(n,void 0,void 0,s=>{o=ie(t(s,xt(t)(e))),i?(i.unsubscribe(),i=null,o.subscribe(n)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(n))})}function xu(t,e,n,i,r){return(o,s)=>{let c=n,u=e,f=0;o.subscribe(U(s,g=>{let y=f++;u=c?t(u,g,y):(c=!0,g),i&&s.next(u)},r&&(()=>{c&&s.next(u),s.complete()})))}}function wt(t,e){return A(e)?ee(t,e,1):ee(t,1)}function Dt(t){return V((e,n)=>{let i=!1;e.subscribe(U(n,r=>{i=!0,n.next(r)},()=>{i||n.next(t),n.complete()}))})}function ut(t){return t<=0?()=>Te:V((e,n)=>{let i=0;e.subscribe(U(n,r=>{++i<=t&&(n.next(r),t<=i&&n.complete())}))})}function ys(t){return _(()=>t)}function Sr(t=Zm){return V((e,n)=>{let i=!1;e.subscribe(U(n,r=>{i=!0,n.next(r)},()=>i?n.complete():n.error(t())))})}function Zm(){return new lt}function yn(t){return V((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}function Ye(t,e){let n=arguments.length>=2;return i=>i.pipe(t?Ee((r,o)=>t(r,o,i)):Ce,ut(1),n?Dt(e):Sr(()=>new lt))}function Cn(t){return t<=0?()=>Te:V((e,n)=>{let i=[];e.subscribe(U(n,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)n.next(r);n.complete()},void 0,()=>{i=null}))})}function Cs(t,e){let n=arguments.length>=2;return i=>i.pipe(t?Ee((r,o)=>t(r,o,i)):Ce,Cn(1),n?Dt(e):Sr(()=>new lt))}function bs(t,e){return V(xu(t,e,arguments.length>=2,!0))}function Es(...t){let e=Et(t);return V((n,i)=>{(e?vn(t,n,e):vn(t,n)).subscribe(i)})}function Ae(t,e){return V((n,i)=>{let r=null,o=0,s=!1,c=()=>s&&!r&&i.complete();n.subscribe(U(i,u=>{r?.unsubscribe();let f=0,g=o++;ie(t(u,g)).subscribe(r=U(i,y=>i.next(e?e(u,y,g,f++):y),()=>{r=null,c()}))},()=>{s=!0,c()}))})}function xs(t){return V((e,n)=>{ie(t).subscribe(U(n,()=>n.complete(),ti)),!n.closed&&e.subscribe(n)})}function te(t,e,n){let i=A(t)||e||n?{next:t,error:e,complete:n}:t;return i?V((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let c=!0;r.subscribe(U(o,u=>{var f;(f=i.next)===null||f===void 0||f.call(i,u),o.next(u)},()=>{var u;c=!1,(u=i.complete)===null||u===void 0||u.call(i),o.complete()},u=>{var f;c=!1,(f=i.error)===null||f===void 0||f.call(i,u),o.error(u)},()=>{var u,f;c&&((u=i.unsubscribe)===null||u===void 0||u.call(i)),(f=i.finalize)===null||f===void 0||f.call(i)}))}):Ce}var rd="https://g.co/ng/security#xss",P=class extends Error{constructor(e,n){super(Ea(e,n)),this.code=e}};function Ea(t,e){return`${`NG0${Math.abs(t)}`}${e?": "+e:""}`}var _s=class extends be{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,i){let r=e,o=n||(()=>null),s=i;if(e&&typeof e=="object"){let u=e;r=u.next?.bind(u),o=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(o=ws(o),r&&(r=ws(r)),s&&(s=ws(s)));let c=super.subscribe({next:r,error:o,complete:s});return e instanceof $&&e.add(c),c}};function ws(t){return e=>{setTimeout(t,void 0,e)}}var Re=_s;var k=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}(k||{});function xe(t){if(typeof t=="string")return t;if(Array.isArray(t))return"["+t.map(xe).join(", ")+"]";if(t==null)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n===-1?e:e.substring(0,n)}function wu(t,e){return t==null||t===""?e===null?"":e:e==null||e===""?t:t+" "+e}var od=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}(od||{}),Ke=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}(Ke||{});function $r(t){return{toString:t}.toString()}var Vt=globalThis;var oi={},In=[];function G(t){for(let e in t)if(t[e]===G)return e;throw Error("Could not find renamed property on target object.")}var eg=G({\u0275cmp:G}),tg=G({\u0275dir:G}),ng=G({\u0275pipe:G}),ig=G({\u0275mod:G}),Fr=G({\u0275fac:G}),ni=G({__NG_ELEMENT_ID__:G}),Du=G({__NG_ENV_ID__:G}),Mt=function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t}(Mt||{});function sd(t,e,n){let i=t.length;for(;;){let r=t.indexOf(e,n);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}n=r+1}}function ks(t,e,n){let i=0;for(;i<n.length;){let r=n[i];if(typeof r=="number"){if(r!==0)break;i++;let o=n[i++],s=n[i++],c=n[i++];t.setAttribute(e,s,c,o)}else{let o=r,s=n[++i];og(o)?t.setProperty(e,o,s):t.setAttribute(e,o,s),i++}}return i}function rg(t){return t===3||t===4||t===6}function og(t){return t.charCodeAt(0)===64}function xa(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?n=r:n===0||(n===-1||n===2?Iu(t,n,r,null,e[++i]):Iu(t,n,r,null,null))}}return t}function Iu(t,e,n,i,r){let o=0,s=t.length;if(e===-1)s=-1;else for(;o<t.length;){let c=t[o++];if(typeof c=="number"){if(c===e){s=-1;break}else if(c>e){s=o-1;break}}}for(;o<t.length;){let c=t[o];if(typeof c=="number")break;if(c===n){if(i===null){r!==null&&(t[o+1]=r);return}else if(i===t[o+1]){t[o+2]=r;return}}o++,i!==null&&o++,r!==null&&o++}s!==-1&&(t.splice(s,0,e),o=s+1),t.splice(o++,0,n),i!==null&&t.splice(o++,0,i),r!==null&&t.splice(o++,0,r)}var ad="ng-template";function sg(t,e,n){let i=0,r=!0;for(;i<t.length;){let o=t[i++];if(typeof o=="string"&&r){let s=t[i++];if(n&&o==="class"&&sd(s.toLowerCase(),e,0)!==-1)return!0}else if(o===1){for(;i<t.length&&typeof(o=t[i++])=="string";)if(o.toLowerCase()===e)return!0;return!1}else typeof o=="number"&&(r=!1)}return!1}function cd(t){return t.type===4&&t.value!==ad}function ag(t,e,n){let i=t.type===4&&!n?ad:t.value;return e===i}function cg(t,e,n){let i=4,r=t.attrs||[],o=dg(r),s=!1;for(let c=0;c<e.length;c++){let u=e[c];if(typeof u=="number"){if(!s&&!Ve(i)&&!Ve(u))return!1;if(s&&Ve(u))continue;s=!1,i=u|i&1;continue}if(!s)if(i&4){if(i=2|i&1,u!==""&&!ag(t,u,n)||u===""&&e.length===1){if(Ve(i))return!1;s=!0}}else{let f=i&8?u:e[++c];if(i&8&&t.attrs!==null){if(!sg(t.attrs,f,n)){if(Ve(i))return!1;s=!0}continue}let g=i&8?"class":u,y=lg(g,r,cd(t),n);if(y===-1){if(Ve(i))return!1;s=!0;continue}if(f!==""){let b;y>o?b="":b=r[y+1].toLowerCase();let x=i&8?b:null;if(x&&sd(x,f,0)!==-1||i&2&&f!==b){if(Ve(i))return!1;s=!0}}}}return Ve(i)||s}function Ve(t){return(t&1)===0}function lg(t,e,n,i){if(e===null)return-1;let r=0;if(i||!n){let o=!1;for(;r<e.length;){let s=e[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let c=e[++r];for(;typeof c=="string";)c=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return fg(e,t)}function ug(t,e,n=!1){for(let i=0;i<e.length;i++)if(cg(t,e[i],n))return!0;return!1}function dg(t){for(let e=0;e<t.length;e++){let n=t[e];if(rg(n))return e}return t.length}function fg(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){let i=t[n];if(typeof i=="number")return-1;if(i===e)return n;n++}return-1}function Mu(t,e){return t?":not("+e.trim()+")":e}function hg(t){let e=t[0],n=1,i=2,r="",o=!1;for(;n<t.length;){let s=t[n];if(typeof s=="string")if(i&2){let c=t[++n];r+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Ve(s)&&(e+=Mu(o,r),r=""),i=s,o=o||!Ve(i);n++}return r!==""&&(e+=Mu(o,r)),e}function pg(t){return t.map(hg).join(",")}function mg(t){let e=[],n=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&e.push(o,t[++i]):r===8&&n.push(o);else{if(!Ve(r))break;r=o}i++}return{attrs:e,classes:n}}function $e(t){return $r(()=>{let e=hd(t),n=W(M({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===od.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Ke.Emulated,styles:t.styles||In,_:null,schemas:t.schemas||null,tView:null,id:""});pd(n);let i=t.dependencies;return n.directiveDefs=Ou(i,!1),n.pipeDefs=Ou(i,!0),n.id=yg(n),n})}function gg(t){return Ht(t)||ld(t)}function vg(t){return t!==null}function Su(t,e){if(t==null)return oi;let n={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,c=Mt.None;Array.isArray(r)?(c=r[0],o=r[1],s=r[2]??o):(o=r,s=r),e?(n[o]=c!==Mt.None?[i,c]:i,e[o]=s):n[o]=i}return n}function eo(t){return $r(()=>{let e=hd(t);return pd(e),e})}function Ht(t){return t[eg]||null}function ld(t){return t[tg]||null}function ud(t){return t[ng]||null}function dd(t){let e=Ht(t)||ld(t)||ud(t);return e!==null?e.standalone:!1}function fd(t,e){let n=t[ig]||null;if(!n&&e===!0)throw new Error(`Type ${xe(t)} does not have '\u0275mod' property.`);return n}function hd(t){let e={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:t.inputs||oi,exportAs:t.exportAs||null,standalone:t.standalone===!0,signals:t.signals===!0,selectors:t.selectors||In,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Su(t.inputs,e),outputs:Su(t.outputs),debugInfo:null}}function pd(t){t.features?.forEach(e=>e(t))}function Ou(t,e){if(!t)return null;let n=e?ud:gg;return()=>(typeof t=="function"?t():t).map(i=>n(i)).filter(vg)}function yg(t){let e=0,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,t.consts,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery].join("|");for(let r of n)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var mt=0,F=1,O=2,ae=3,Ue=4,He=5,Lr=6,si=7,dt=8,Mn=9,ft=10,ge=11,ai=12,Pu=13,gi=14,Je=15,vi=16,bn=17,ht=18,to=19,md=20,ii=21,Ds=22,zt=23,St=25,gd=1;var Qt=7,jr=8,Sn=9,we=10,wa=function(t){return t[t.None=0]="None",t[t.HasTransplantedViews=2]="HasTransplantedViews",t}(wa||{});function wn(t){return Array.isArray(t)&&typeof t[gd]=="object"}function gt(t){return Array.isArray(t)&&t[gd]===!0}function vd(t){return(t.flags&4)!==0}function no(t){return t.componentOffset>-1}function Da(t){return(t.flags&1)===1}function yi(t){return!!t.template}function Cg(t){return(t[O]&512)!==0}var yd="svg",bg="math",Eg=!1;function xg(){return Eg}function Ze(t){for(;Array.isArray(t);)t=t[mt];return t}function wg(t,e){return Ze(e[t])}function ze(t,e){return Ze(e[t.index])}function Cd(t,e){return t.data[e]}function Wt(t,e){let n=e[t];return wn(n)?n:n[mt]}function Dg(t){return(t[O]&4)===4}function Ia(t){return(t[O]&128)===128}function Ig(t){return gt(t[ae])}function Br(t,e){return e==null?null:t[e]}function bd(t){t[bn]=0}function Mg(t){t[O]&1024||(t[O]|=1024,Ia(t)&&ci(t))}function Ma(t){return!!(t[O]&9216||t[zt]?.dirty)}function Fs(t){Ma(t)?ci(t):t[O]&64&&(xg()?(t[O]|=1024,ci(t)):t[ft].changeDetectionScheduler?.notify())}function ci(t){t[ft].changeDetectionScheduler?.notify();let e=li(t);for(;e!==null&&!(e[O]&8192||(e[O]|=8192,!Ia(e)));)e=li(e)}function Sg(t,e){if((t[O]&256)===256)throw new P(911,!1);t[ii]===null&&(t[ii]=[]),t[ii].push(e)}function li(t){let e=t[ae];return gt(e)?e[ae]:e}var z={lFrame:Od(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Og(){return z.lFrame.elementDepthCount}function Pg(){z.lFrame.elementDepthCount++}function Tg(){z.lFrame.elementDepthCount--}function Ed(){return z.bindingsEnabled}function Ag(){return z.skipHydrationRootTNode!==null}function Ng(t){return z.skipHydrationRootTNode===t}function Rg(){z.skipHydrationRootTNode=null}function J(){return z.lFrame.lView}function vt(){return z.lFrame.tView}function et(){let t=xd();for(;t!==null&&t.type===64;)t=t.parent;return t}function xd(){return z.lFrame.currentTNode}function _g(){let t=z.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function Ci(t,e){let n=z.lFrame;n.currentTNode=t,n.isParent=e}function wd(){return z.lFrame.isParent}function kg(){z.lFrame.isParent=!1}function Fg(t){return z.lFrame.bindingIndex=t}function Dd(){return z.lFrame.bindingIndex++}function Lg(){return z.lFrame.inI18n}function jg(t,e){let n=z.lFrame;n.bindingIndex=n.bindingRootIndex=t,Ls(e)}function Bg(){return z.lFrame.currentDirectiveIndex}function Ls(t){z.lFrame.currentDirectiveIndex=t}function Id(){return z.lFrame.currentQueryIndex}function Sa(t){z.lFrame.currentQueryIndex=t}function Vg(t){let e=t[F];return e.type===2?e.declTNode:e.type===1?t[He]:null}function Md(t,e,n){if(n&k.SkipSelf){let r=e,o=t;for(;r=r.parent,r===null&&!(n&k.Host);)if(r=Vg(o),r===null||(o=o[gi],r.type&10))break;if(r===null)return!1;e=r,t=o}let i=z.lFrame=Sd();return i.currentTNode=e,i.lView=t,!0}function Oa(t){let e=Sd(),n=t[F];z.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Sd(){let t=z.lFrame,e=t===null?null:t.child;return e===null?Od(t):e}function Od(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function Pd(){let t=z.lFrame;return z.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Td=Pd;function Pa(){let t=Pd();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Ta(){return z.lFrame.selectedIndex}function qt(t){z.lFrame.selectedIndex=t}function Ug(){let t=z.lFrame;return Cd(t.tView,t.selectedIndex)}function Ie(){z.lFrame.currentNamespace=yd}function Me(){Hg()}function Hg(){z.lFrame.currentNamespace=null}function zg(){return z.lFrame.currentNamespace}var Ad=!0;function Aa(){return Ad}function Na(t){Ad=t}function Qg(){return Nn(et(),J())}function Nn(t,e){return new Xt(ze(t,e))}var Xt=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Qg;let t=e;return t})();function qg(t){return t instanceof Xt?t.nativeElement:t}function Gg(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=e[i];if(n&&(r=n(r),o=n(o)),o!==r)return!1}return!0}function Yg(t){return t.flat(Number.POSITIVE_INFINITY)}function Ra(t,e){t.forEach(n=>Array.isArray(n)?Ra(n,e):e(n))}function Nd(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Vr(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Wg(){return this._results[Symbol.iterator]()}var js=class t{get changes(){return this._changes??=new Re}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=t.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=Wg)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){this.dirty=!1;let i=Yg(e);(this._changesDetected=!Gg(this._results,i,n))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function Rd(t){return(t.flags&128)===128}var Bs;function _d(t){Bs=t}function Xg(){if(Bs!==void 0)return Bs;if(typeof document<"u")return document;throw new P(210,!1)}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function io(t){return Tu(t,Fd)||Tu(t,Ld)}function kd(t){return io(t)!==null}function Tu(t,e){return t.hasOwnProperty(e)?t[e]:null}function Kg(t){let e=t&&(t[Fd]||t[Ld]);return e||null}function Au(t){return t&&(t.hasOwnProperty(Nu)||t.hasOwnProperty(Jg))?t[Nu]:null}var Fd=G({\u0275prov:G}),Nu=G({\u0275inj:G}),Ld=G({ngInjectableDef:G}),Jg=G({ngInjectorDef:G}),H=class{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=S({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}},_a=new H("",{providedIn:"root",factory:()=>Zg}),Zg="ng",ka=new H(""),Rn=new H("",{providedIn:"platform",factory:()=>"unknown"});var Fa=new H("",{providedIn:"root",factory:()=>Xg().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var $g=G({__forward_ref__:G});function jd(t){return t.__forward_ref__=jd,t.toString=function(){return xe(this())},t}function _e(t){return Bd(t)?t():t}function Bd(t){return typeof t=="function"&&t.hasOwnProperty($g)&&t.__forward_ref__===jd}function Vd(t){return t&&!!t.\u0275providers}function La(t){return typeof t=="string"?t:t==null?"":String(t)}function e0(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():La(t)}function t0(t,e){let n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new P(-200,t)}function ja(t,e){throw new P(-201,!1)}var Vs;function n0(){return Vs}function Ne(t){let e=Vs;return Vs=t,e}function Ud(t,e,n){let i=io(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(n&k.Optional)return null;if(e!==void 0)return e;ja(t,"Injector")}var i0={},ui=i0,Us="__NG_DI_FLAG__",Ur="ngTempTokenPath",r0="ngTokenPath",o0=/\n/gm,s0="\u0275",Ru="__source",ri;function It(t){let e=ri;return ri=t,e}function a0(t,e=k.Default){if(ri===void 0)throw new P(-203,!1);return ri===null?Ud(t,void 0,e):ri.get(t,e&k.Optional?null:void 0,e)}function L(t,e=k.Default){return(n0()||a0)(_e(t),e)}function D(t,e=k.Default){return L(t,ro(e))}function ro(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Hs(t){let e=[];for(let n=0;n<t.length;n++){let i=_e(t[n]);if(Array.isArray(i)){if(i.length===0)throw new P(900,!1);let r,o=k.Default;for(let s=0;s<i.length;s++){let c=i[s],u=c0(c);typeof u=="number"?u===-1?r=c.token:o|=u:r=c}e.push(L(r,o))}else e.push(L(i))}return e}function Hd(t,e){return t[Us]=e,t.prototype[Us]=e,t}function c0(t){return t[Us]}function l0(t,e,n,i){let r=t[Ur];throw e[Ru]&&r.unshift(e[Ru]),t.message=u0(`
`+t.message,r,n,i),t[r0]=r,t[Ur]=null,t}function u0(t,e,n,i=null){t=t&&t.charAt(0)===`
`&&t.charAt(1)==s0?t.slice(2):t;let r=xe(e);if(Array.isArray(e))r=e.map(xe).join(" -> ");else if(typeof e=="object"){let o=[];for(let s in e)if(e.hasOwnProperty(s)){let c=e[s];o.push(s+":"+(typeof c=="string"?JSON.stringify(c):xe(c)))}r=`{${o.join(", ")}}`}return`${n}${i?"("+i+")":""}[${r}]: ${t.replace(o0,`
  `)}`}var d0="h",f0="b";var h0=()=>null;function Ba(t,e,n=!1){return h0(t,e,n)}var Or="__parameters__";function p0(t){return function(...n){if(t){let i=t(...n);for(let r in i)this[r]=i[r]}}}function zd(t,e,n){return $r(()=>{let i=p0(e);function r(...o){if(this instanceof r)return i.apply(this,o),this;let s=new r(...o);return c.annotation=s,c;function c(u,f,g){let y=u.hasOwnProperty(Or)?u[Or]:Object.defineProperty(u,Or,{value:[]})[Or];for(;y.length<=g;)y.push(null);return(y[g]=y[g]||[]).push(s),u}}return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=t,r.annotationCls=r,r})}var Va=Hd(zd("Optional"),8);var Qd=Hd(zd("SkipSelf"),4);function On(t,e){let n=t.hasOwnProperty(Fr);return n?t[Fr]:null}var Pn=new H(""),qd=new H("",-1),Gd=new H(""),Hr=class{get(e,n=ui){if(n===ui){let i=new Error(`NullInjectorError: No provider for ${xe(e)}!`);throw i.name="NullInjectorError",i}return n}};function oo(t){return{\u0275providers:t}}function m0(...t){return{\u0275providers:Yd(!0,t),\u0275fromNgModule:!0}}function Yd(t,...e){let n=[],i=new Set,r,o=s=>{n.push(s)};return Ra(e,s=>{let c=s;zs(c,o,[],i)&&(r||=[],r.push(c))}),r!==void 0&&Wd(r,o),n}function Wd(t,e){for(let n=0;n<t.length;n++){let{ngModule:i,providers:r}=t[n];Ua(r,o=>{e(o,i)})}}function zs(t,e,n,i){if(t=_e(t),!t)return!1;let r=null,o=Au(t),s=!o&&Ht(t);if(!o&&!s){let u=t.ngModule;if(o=Au(u),o)r=u;else return!1}else{if(s&&!s.standalone)return!1;r=t}let c=i.has(r);if(s){if(c)return!1;if(i.add(r),s.dependencies){let u=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let f of u)zs(f,e,n,i)}}else if(o){if(o.imports!=null&&!c){i.add(r);let f;try{Ra(o.imports,g=>{zs(g,e,n,i)&&(f||=[],f.push(g))})}finally{}f!==void 0&&Wd(f,e)}if(!c){let f=On(r)||(()=>new r);e({provide:r,useFactory:f,deps:In},r),e({provide:Gd,useValue:r,multi:!0},r),e({provide:Pn,useValue:()=>L(r),multi:!0},r)}let u=o.providers;if(u!=null&&!c){let f=t;Ua(u,g=>{e(g,f)})}}else return!1;return r!==t&&t.providers!==void 0}function Ua(t,e){for(let n of t)Vd(n)&&(n=n.\u0275providers),Array.isArray(n)?Ua(n,e):e(n)}var g0=G({provide:String,useValue:G});function Xd(t){return t!==null&&typeof t=="object"&&g0 in t}function v0(t){return!!(t&&t.useExisting)}function y0(t){return!!(t&&t.useFactory)}function Qs(t){return typeof t=="function"}var so=new H(""),Tr={},C0={},Is;function Ha(){return Is===void 0&&(Is=new Hr),Is}var De=class{},di=class extends De{get destroyed(){return this._destroyed}constructor(e,n,i,r){super(),this.parent=n,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Gs(e,s=>this.processProvider(s)),this.records.set(qd,En(void 0,this)),r.has("environment")&&this.records.set(De,En(void 0,this));let o=this.records.get(so);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Gd,In,k.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let n=It(this),i=Ne(void 0),r;try{return e()}finally{It(n),Ne(i)}}get(e,n=ui,i=k.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Du))return e[Du](this);i=ro(i);let r,o=It(this),s=Ne(void 0);try{if(!(i&k.SkipSelf)){let u=this.records.get(e);if(u===void 0){let f=I0(e)&&io(e);f&&this.injectableDefInScope(f)?u=En(qs(e),Tr):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u)}let c=i&k.Self?Ha():this.parent;return n=i&k.Optional&&n===ui?null:n,c.get(e,n)}catch(c){if(c.name==="NullInjectorError"){if((c[Ur]=c[Ur]||[]).unshift(xe(e)),o)throw c;return l0(c,e,"R3InjectorError",this.source)}else throw c}finally{Ne(s),It(o)}}resolveInjectorInitializers(){let e=It(this),n=Ne(void 0),i;try{let r=this.get(Pn,In,k.Self);for(let o of r)o()}finally{It(e),Ne(n)}}toString(){let e=[],n=this.records;for(let i of n.keys())e.push(xe(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new P(205,!1)}processProvider(e){e=_e(e);let n=Qs(e)?e:_e(e&&e.provide),i=E0(e);if(!Qs(e)&&e.multi===!0){let r=this.records.get(n);r||(r=En(void 0,Tr,!0),r.factory=()=>Hs(r.multi),this.records.set(n,r)),n=e,r.multi.push(e)}this.records.set(n,i)}hydrate(e,n){return n.value===Tr&&(n.value=C0,n.value=n.factory()),typeof n.value=="object"&&n.value&&D0(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;let n=_e(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function qs(t){let e=io(t),n=e!==null?e.factory:On(t);if(n!==null)return n;if(t instanceof H)throw new P(204,!1);if(t instanceof Function)return b0(t);throw new P(204,!1)}function b0(t){if(t.length>0)throw new P(204,!1);let n=Kg(t);return n!==null?()=>n.factory(t):()=>new t}function E0(t){if(Xd(t))return En(void 0,t.useValue);{let e=x0(t);return En(e,Tr)}}function x0(t,e,n){let i;if(Qs(t)){let r=_e(t);return On(r)||qs(r)}else if(Xd(t))i=()=>_e(t.useValue);else if(y0(t))i=()=>t.useFactory(...Hs(t.deps||[]));else if(v0(t))i=()=>L(_e(t.useExisting));else{let r=_e(t&&(t.useClass||t.provide));if(w0(t))i=()=>new r(...Hs(t.deps));else return On(r)||qs(r)}return i}function En(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function w0(t){return!!t.deps}function D0(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function I0(t){return typeof t=="function"||typeof t=="object"&&t instanceof H}function Gs(t,e){for(let n of t)Array.isArray(n)?Gs(n,e):n&&Vd(n)?Gs(n.\u0275providers,e):e(n)}function Kt(t,e){t instanceof di&&t.assertNotDestroyed();let n,i=It(t),r=Ne(void 0);try{return e()}finally{It(i),Ne(r)}}function M0(t){return typeof t=="function"}var Ys=class{constructor(e,n,i){this.previousValue=e,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}};function Kd(t,e,n,i){e!==null?e.applyValueToInputSignal(e,i):t[n]=i}function ao(){return Jd}function Jd(t){return t.type.prototype.ngOnChanges&&(t.setInput=O0),S0}ao.ngInherit=!0;function S0(){let t=$d(this),e=t?.current;if(e){let n=t.previous;if(n===oi)t.previous=e;else for(let i in e)n[i]=e[i];t.current=null,this.ngOnChanges(e)}}function O0(t,e,n,i,r){let o=this.declaredInputs[i],s=$d(t)||P0(t,{previous:oi,current:null}),c=s.current||(s.current={}),u=s.previous,f=u[o];c[o]=new Ys(f&&f.currentValue,n,u===oi),Kd(t,e,r,n)}var Zd="__ngSimpleChanges__";function $d(t){return t[Zd]||null}function P0(t,e){return t[Zd]=e}var _u=null;var We=function(t,e,n){_u?.(t,e,n)};function T0(t,e,n){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=Jd(e);(n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s)}r&&(n.preOrderHooks??=[]).push(0-t,r),o&&((n.preOrderHooks??=[]).push(t,o),(n.preOrderCheckHooks??=[]).push(t,o))}function za(t,e){for(let n=e.directiveStart,i=e.directiveEnd;n<i;n++){let o=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:u,ngAfterViewChecked:f,ngOnDestroy:g}=o;s&&(t.contentHooks??=[]).push(-n,s),c&&((t.contentHooks??=[]).push(n,c),(t.contentCheckHooks??=[]).push(n,c)),u&&(t.viewHooks??=[]).push(-n,u),f&&((t.viewHooks??=[]).push(n,f),(t.viewCheckHooks??=[]).push(n,f)),g!=null&&(t.destroyHooks??=[]).push(n,g)}}function Ar(t,e,n){ef(t,e,3,n)}function Nr(t,e,n,i){(t[O]&3)===n&&ef(t,e,n,i)}function Ms(t,e){let n=t[O];(n&3)===e&&(n&=16383,n+=1,t[O]=n)}function ef(t,e,n,i){let r=i!==void 0?t[bn]&65535:0,o=i??-1,s=e.length-1,c=0;for(let u=r;u<s;u++)if(typeof e[u+1]=="number"){if(c=e[u],i!=null&&c>=i)break}else e[u]<0&&(t[bn]+=65536),(c<o||o==-1)&&(A0(t,n,e,u),t[bn]=(t[bn]&4294901760)+u+2),u++}function ku(t,e){We(4,t,e);let n=ye(null);try{e.call(t)}finally{ye(n),We(5,t,e)}}function A0(t,e,n,i){let r=n[i]<0,o=n[i+1],s=r?-n[i]:n[i],c=t[s];r?t[O]>>14<t[bn]>>16&&(t[O]&3)===e&&(t[O]+=16384,ku(c,o)):ku(c,o)}var Dn=-1,fi=class{constructor(e,n,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=i}};function N0(t){return t instanceof fi}function R0(t){return(t.flags&8)!==0}function _0(t){return(t.flags&16)!==0}function tf(t){return t!==Dn}function zr(t){return t&32767}function k0(t){return t>>16}function Qr(t,e){let n=k0(t),i=e;for(;n>0;)i=i[gi],n--;return i}var Ws=!0;function Fu(t){let e=Ws;return Ws=t,e}var F0=256,nf=F0-1,rf=5,L0=0,Xe={};function j0(t,e,n){let i;typeof n=="string"?i=n.charCodeAt(0)||0:n.hasOwnProperty(ni)&&(i=n[ni]),i==null&&(i=n[ni]=L0++);let r=i&nf,o=1<<r;e.data[t+(r>>rf)]|=o}function of(t,e){let n=sf(t,e);if(n!==-1)return n;let i=e[F];i.firstCreatePass&&(t.injectorIndex=e.length,Ss(i.data,t),Ss(e,null),Ss(i.blueprint,null));let r=Qa(t,e),o=t.injectorIndex;if(tf(r)){let s=zr(r),c=Qr(r,e),u=c[F].data;for(let f=0;f<8;f++)e[o+f]=c[s+f]|u[s+f]}return e[o+8]=r,o}function Ss(t,e){t.push(0,0,0,0,0,0,0,0,e)}function sf(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function Qa(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,i=null,r=e;for(;r!==null;){if(i=df(r),i===null)return Dn;if(n++,r=r[gi],i.injectorIndex!==-1)return i.injectorIndex|n<<16}return Dn}function B0(t,e,n){j0(t,e,n)}function af(t,e,n){if(n&k.Optional||t!==void 0)return t;ja(e,"NodeInjector")}function cf(t,e,n,i){if(n&k.Optional&&i===void 0&&(i=null),!(n&(k.Self|k.Host))){let r=t[Mn],o=Ne(void 0);try{return r?r.get(e,i,n&k.Optional):Ud(e,i,n&k.Optional)}finally{Ne(o)}}return af(i,e,n)}function lf(t,e,n,i=k.Default,r){if(t!==null){if(e[O]&2048&&!(i&k.Self)){let s=z0(t,e,n,i,Xe);if(s!==Xe)return s}let o=uf(t,e,n,i,Xe);if(o!==Xe)return o}return cf(e,n,i,r)}function uf(t,e,n,i,r){let o=U0(n);if(typeof o=="function"){if(!Md(e,t,i))return i&k.Host?af(r,n,i):cf(e,n,i,r);try{let s;if(s=o(i),s==null&&!(i&k.Optional))ja(n);else return s}finally{Td()}}else if(typeof o=="number"){let s=null,c=sf(t,e),u=Dn,f=i&k.Host?e[Je][He]:null;for((c===-1||i&k.SkipSelf)&&(u=c===-1?Qa(t,e):e[c+8],u===Dn||!ju(i,!1)?c=-1:(s=e[F],c=zr(u),e=Qr(u,e)));c!==-1;){let g=e[F];if(Lu(o,c,g.data)){let y=V0(c,e,n,s,i,f);if(y!==Xe)return y}u=e[c+8],u!==Dn&&ju(i,e[F].data[c+8]===f)&&Lu(o,c,e)?(s=g,c=zr(u),e=Qr(u,e)):c=-1}}return r}function V0(t,e,n,i,r,o){let s=e[F],c=s.data[t+8],u=i==null?no(c)&&Ws:i!=s&&(c.type&3)!==0,f=r&k.Host&&o===c,g=Rr(c,s,n,u,f);return g!==null?Tn(e,s,g,c):Xe}function Rr(t,e,n,i,r){let o=t.providerIndexes,s=e.data,c=o&1048575,u=t.directiveStart,f=t.directiveEnd,g=o>>20,y=i?c:c+g,b=r?c+g:f;for(let x=y;x<b;x++){let I=s[x];if(x<u&&n===I||x>=u&&I.type===n)return x}if(r){let x=s[u];if(x&&yi(x)&&x.type===n)return u}return null}function Tn(t,e,n,i){let r=t[n],o=e.data;if(N0(r)){let s=r;s.resolving&&t0(e0(o[n]));let c=Fu(s.canSeeViewProviders);s.resolving=!0;let u,f=s.injectImpl?Ne(s.injectImpl):null,g=Md(t,i,k.Default);try{r=t[n]=s.factory(void 0,o,t,i),e.firstCreatePass&&n>=i.directiveStart&&T0(n,o[n],e)}finally{f!==null&&Ne(f),Fu(c),s.resolving=!1,Td()}}return r}function U0(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(ni)?t[ni]:void 0;return typeof e=="number"?e>=0?e&nf:H0:e}function Lu(t,e,n){let i=1<<t;return!!(n[e+(t>>rf)]&i)}function ju(t,e){return!(t&k.Self)&&!(t&k.Host&&e)}var Ut=class{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,i){return lf(this._tNode,this._lView,e,ro(i),n)}};function H0(){return new Ut(et(),J())}function qa(t){return $r(()=>{let e=t.prototype.constructor,n=e[Fr]||Xs(e),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Fr]||Xs(r);if(o&&o!==n)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Xs(t){return Bd(t)?()=>{let e=Xs(_e(t));return e&&e()}:On(t)}function z0(t,e,n,i,r){let o=t,s=e;for(;o!==null&&s!==null&&s[O]&2048&&!(s[O]&512);){let c=uf(o,s,n,i|k.Self,Xe);if(c!==Xe)return c;let u=o.parent;if(!u){let f=s[md];if(f){let g=f.get(n,Xe,i);if(g!==Xe)return g}u=df(s),s=s[gi]}o=u}return r}function df(t){let e=t[F],n=e.type;return n===2?e.declTNode:n===1?t[He]:null}function Bu(t,e=null,n=null,i){let r=ff(t,e,n,i);return r.resolveInjectorInitializers(),r}function ff(t,e=null,n=null,i,r=new Set){let o=[n||In,m0(t)];return i=i||(typeof t=="object"?void 0:xe(t)),new di(o,e||Ha(),i||null,r)}var bi=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Bu({name:""},r,i,"");{let o=i.name??"";return Bu({name:o},i.parent,i.providers,o)}}};e.THROW_IF_NOT_FOUND=ui,e.NULL=new Hr,e.\u0275prov=S({token:e,providedIn:"any",factory:()=>L(qd)}),e.__NG_ELEMENT_ID__=-1;let t=e;return t})(),Q0="ngOriginalError";function Os(t){return t[Q0]}var pt=class{constructor(){this._console=console}handleError(e){let n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&Os(e);for(;n&&Os(n);)n=Os(n);return n||null}},hf=new H("",{providedIn:"root",factory:()=>D(pt).handleError.bind(void 0)});var pf=!1,q0=new H("",{providedIn:"root",factory:()=>pf}),Pr;function G0(){if(Pr===void 0&&(Pr=null,Vt.trustedTypes))try{Pr=Vt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pr}function Y0(t){return G0()?.createScriptURL(t)||t}var qr=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${rd})`}};function Ga(t){return t instanceof qr?t.changingThisBreaksApplicationSecurity:t}function mf(t,e){let n=W0(t);if(n!=null&&n!==e){if(n==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${n} (see ${rd})`)}return n===e}function W0(t){return t instanceof qr&&t.getTypeName()||null}var X0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function gf(t){return t=String(t),t.match(X0)?t:"unsafe:"+t}var Ya=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}(Ya||{});function co(t){let e=K0();return e?e.sanitize(Ya.URL,t)||"":mf(t,"URL")?Ga(t):gf(La(t))}function Ei(t){return Y0(t[0])}function K0(){let t=J();return t&&t[ft].sanitizer}var vf=new Map,J0=0;function Z0(){return J0++}function $0(t){vf.set(t[to],t)}function ev(t){vf.delete(t[to])}var Vu="__ngContext__";function Gt(t,e){wn(e)?(t[Vu]=e[to],$0(e)):t[Vu]=e}function lo(t){return t.ownerDocument}function yf(t){return t instanceof Function?t():t}var Jt=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}(Jt||{}),tv;function Wa(t,e){return tv(t,e)}function xn(t,e,n,i,r){if(i!=null){let o,s=!1;gt(i)?o=i:wn(i)&&(s=!0,i=i[mt]);let c=Ze(i);t===0&&n!==null?r==null?wf(e,n,c):Gr(e,n,c,r||null,!0):t===1&&n!==null?Gr(e,n,c,r||null,!0):t===2?yv(e,c,s):t===3&&e.destroyNode(c),o!=null&&bv(e,t,o,n,r)}}function nv(t,e){return t.createText(e)}function iv(t,e,n){t.setValue(e,n)}function Cf(t,e,n){return t.createElement(e,n)}function rv(t,e){bf(t,e),e[mt]=null,e[He]=null}function ov(t,e,n,i,r,o){i[mt]=r,i[He]=e,uo(t,i,n,1,r,o)}function bf(t,e){uo(t,e,e[ge],2,null,null)}function sv(t){let e=t[ai];if(!e)return Ps(t[F],t);for(;e;){let n=null;if(wn(e))n=e[ai];else{let i=e[we];i&&(n=i)}if(!n){for(;e&&!e[Ue]&&e!==t;)wn(e)&&Ps(e[F],e),e=e[ae];e===null&&(e=t),wn(e)&&Ps(e[F],e),n=e&&e[Ue]}e=n}}function av(t,e,n,i){let r=we+i,o=n.length;i>0&&(n[r-1][Ue]=e),i<o-we?(e[Ue]=n[r],Nd(n,we+i,e)):(n.push(e),e[Ue]=null),e[ae]=n;let s=e[vi];s!==null&&n!==s&&cv(s,e);let c=e[ht];c!==null&&c.insertView(t),Fs(e),e[O]|=128}function cv(t,e){let n=t[Sn],r=e[ae][ae][Je];e[Je]!==r&&(t[O]|=wa.HasTransplantedViews),n===null?t[Sn]=[e]:n.push(e)}function Ef(t,e){let n=t[Sn],i=n.indexOf(e);n.splice(i,1)}function Ks(t,e){if(t.length<=we)return;let n=we+e,i=t[n];if(i){let r=i[vi];r!==null&&r!==t&&Ef(r,i),e>0&&(t[n-1][Ue]=i[Ue]);let o=Vr(t,we+e);rv(i[F],i);let s=o[ht];s!==null&&s.detachView(o[F]),i[ae]=null,i[Ue]=null,i[O]&=-129}return i}function xf(t,e){if(!(e[O]&256)){let n=e[ge];n.destroyNode&&uo(t,e,n,3,null,null),sv(e)}}function Ps(t,e){if(!(e[O]&256)){e[O]&=-129,e[O]|=256,e[zt]&&Yl(e[zt]),uv(t,e),lv(t,e),e[F].type===1&&e[ge].destroy();let n=e[vi];if(n!==null&&gt(e[ae])){n!==e[ae]&&Ef(n,e);let i=e[ht];i!==null&&i.detachView(t)}ev(e)}}function lv(t,e){let n=t.cleanup,i=e[si];if(n!==null)for(let o=0;o<n.length-1;o+=2)if(typeof n[o]=="string"){let s=n[o+3];s>=0?i[s]():i[-s].unsubscribe(),o+=2}else{let s=i[n[o+1]];n[o].call(s)}i!==null&&(e[si]=null);let r=e[ii];if(r!==null){e[ii]=null;for(let o=0;o<r.length;o++){let s=r[o];s()}}}function uv(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let i=0;i<n.length;i+=2){let r=e[n[i]];if(!(r instanceof fi)){let o=n[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let c=r[o[s]],u=o[s+1];We(4,c,u);try{u.call(c)}finally{We(5,c,u)}}else{We(4,r,o);try{o.call(r)}finally{We(5,r,o)}}}}}function dv(t,e,n){return fv(t,e.parent,n)}function fv(t,e,n){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return n[mt];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:o}=t.data[i.directiveStart+r];if(o===Ke.None||o===Ke.Emulated)return null}return ze(i,n)}}function Gr(t,e,n,i,r){t.insertBefore(e,n,i,r)}function wf(t,e,n){t.appendChild(e,n)}function Uu(t,e,n,i,r){i!==null?Gr(t,e,n,i,r):wf(t,e,n)}function hv(t,e,n,i){t.removeChild(e,n,i)}function Xa(t,e){return t.parentNode(e)}function pv(t,e){return t.nextSibling(e)}function mv(t,e,n){return vv(t,e,n)}function gv(t,e,n){return t.type&40?ze(t,n):null}var vv=gv,Hu;function Ka(t,e,n,i){let r=dv(t,i,e),o=e[ge],s=i.parent||e[He],c=mv(s,i,e);if(r!=null)if(Array.isArray(n))for(let u=0;u<n.length;u++)Uu(o,r,n[u],c,!1);else Uu(o,r,n,c,!1);Hu!==void 0&&Hu(o,i,e,n,r)}function _r(t,e){if(e!==null){let n=e.type;if(n&3)return ze(e,t);if(n&4)return Js(-1,t[e.index]);if(n&8){let i=e.child;if(i!==null)return _r(t,i);{let r=t[e.index];return gt(r)?Js(-1,r):Ze(r)}}else{if(n&32)return Wa(e,t)()||Ze(t[e.index]);{let i=Df(t,e);if(i!==null){if(Array.isArray(i))return i[0];let r=li(t[Je]);return _r(r,i)}else return _r(t,e.next)}}}return null}function Df(t,e){if(e!==null){let i=t[Je][He],r=e.projection;return i.projection[r]}return null}function Js(t,e){let n=we+t+1;if(n<e.length){let i=e[n],r=i[F].firstChild;if(r!==null)return _r(i,r)}return e[Qt]}function yv(t,e,n){let i=Xa(t,e);i&&hv(t,i,e,n)}function Ja(t,e,n,i,r,o,s){for(;n!=null;){let c=i[n.index],u=n.type;if(s&&e===0&&(c&&Gt(Ze(c),i),n.flags|=2),(n.flags&32)!==32)if(u&8)Ja(t,e,n.child,i,r,o,!1),xn(e,t,r,c,o);else if(u&32){let f=Wa(n,i),g;for(;g=f();)xn(e,t,r,g,o);xn(e,t,r,c,o)}else u&16?Cv(t,e,i,n,r,o):xn(e,t,r,c,o);n=s?n.projectionNext:n.next}}function uo(t,e,n,i,r,o){Ja(n,i,t.firstChild,e,r,o,!1)}function Cv(t,e,n,i,r,o){let s=n[Je],u=s[He].projection[i.projection];if(Array.isArray(u))for(let f=0;f<u.length;f++){let g=u[f];xn(e,t,r,g,o)}else{let f=u,g=s[ae];Rd(i)&&(f.flags|=128),Ja(t,e,f,g,r,o,!0)}}function bv(t,e,n,i,r){let o=n[Qt],s=Ze(n);o!==s&&xn(e,t,i,o,r);for(let c=we;c<n.length;c++){let u=n[c];uo(u[F],u,t,e,i,o)}}function Ev(t,e,n){t.setAttribute(e,"style",n)}function If(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function Mf(t,e,n){let{mergedAttrs:i,classes:r,styles:o}=n;i!==null&&ks(t,e,i),r!==null&&If(t,e,r),o!==null&&Ev(t,e,o)}var fo={};function Zt(t=1){Sf(vt(),J(),Ta()+t,!1)}function Sf(t,e,n,i){if(!i)if((e[O]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Ar(e,o,n)}else{let o=t.preOrderHooks;o!==null&&Nr(e,o,0,n)}qt(n)}function tt(t,e=k.Default){let n=J();if(n===null)return L(t,e);let i=et();return lf(i,n,_e(t),e)}function Of(t,e,n,i,r,o){let s=ye(null);try{let c=null;r&Mt.SignalBased&&(c=e[i][zl]),c!==null&&c.transformFn!==void 0&&(o=c.transformFn(o)),r&Mt.HasDecoratorInputTransform&&(o=t.inputTransforms[i].call(e,o)),t.setInput!==null?t.setInput(e,c,o,n,i):Kd(e,c,i,o)}finally{ye(s)}}function xv(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let i=0;i<n.length;i++){let r=n[i];if(r<0)qt(~r);else{let o=r,s=n[++i],c=n[++i];jg(s,o);let u=e[o];c(2,u)}}}finally{qt(-1)}}function ho(t,e,n,i,r,o,s,c,u,f,g){let y=e.blueprint.slice();return y[mt]=r,y[O]=i|4|128|8|64,(f!==null||t&&t[O]&2048)&&(y[O]|=2048),bd(y),y[ae]=y[gi]=t,y[dt]=n,y[ft]=s||t&&t[ft],y[ge]=c||t&&t[ge],y[Mn]=u||t&&t[Mn]||null,y[He]=o,y[to]=Z0(),y[Lr]=g,y[md]=f,y[Je]=e.type==2?t[Je]:y,y}function po(t,e,n,i,r){let o=t.data[e];if(o===null)o=wv(t,e,n,i,r),Lg()&&(o.flags|=32);else if(o.type&64){o.type=n,o.value=i,o.attrs=r;let s=_g();o.injectorIndex=s===null?-1:s.injectorIndex}return Ci(o,!0),o}function wv(t,e,n,i,r){let o=xd(),s=wd(),c=s?o:o&&o.parent,u=t.data[e]=Pv(t,c,n,e,i,r);return t.firstChild===null&&(t.firstChild=u),o!==null&&(s?o.child==null&&u.parent!==null&&(o.child=u):o.next===null&&(o.next=u,u.prev=o)),u}function Pf(t,e,n,i){if(n===0)return-1;let r=e.length;for(let o=0;o<n;o++)e.push(i),t.blueprint.push(i),t.data.push(null);return r}function Tf(t,e,n,i,r){let o=Ta(),s=i&2;try{qt(-1),s&&e.length>St&&Sf(t,e,St,!1),We(s?2:0,r),n(i,r)}finally{qt(o),We(s?3:1,r)}}function Af(t,e,n){if(vd(e)){let i=ye(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let c=t.data[s];if(c.contentQueries){let u=n[s];c.contentQueries(1,u,s)}}}finally{ye(i)}}}function Nf(t,e,n){Ed()&&(Fv(t,e,n,ze(n,e)),(n.flags&64)===64&&Lf(t,e,n))}function Rf(t,e,n=ze){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],c=s===-1?n(e,t):t[s];t[r++]=c}}}function _f(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=Za(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function Za(t,e,n,i,r,o,s,c,u,f,g){let y=St+i,b=y+r,x=Dv(y,b),I=typeof f=="function"?f():f;return x[F]={type:t,blueprint:x,template:n,queries:null,viewQuery:c,declTNode:e,data:x.slice().fill(null,y),bindingStartIndex:y,expandoStartIndex:b,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:u,consts:I,incompleteFirstPass:!1,ssrId:g}}function Dv(t,e){let n=[];for(let i=0;i<e;i++)n.push(i<t?null:fo);return n}function Iv(t,e,n,i){let o=i.get(q0,pf)||n===Ke.ShadowDom,s=t.selectRootElement(e,o);return Mv(s),s}function Mv(t){Sv(t)}var Sv=()=>null;function Ov(t,e,n,i){let r=Vf(e);r.push(n),t.firstCreatePass&&Uf(t).push(i,r.length-1)}function Pv(t,e,n,i,r,o){let s=e?e.injectorIndex:-1,c=0;return Ag()&&(c|=128),{type:n,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:c,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function zu(t,e,n,i,r){for(let o in e){if(!e.hasOwnProperty(o))continue;let s=e[o];if(s===void 0)continue;i??={};let c,u=Mt.None;Array.isArray(s)?(c=s[0],u=s[1]):c=s;let f=o;if(r!==null){if(!r.hasOwnProperty(o))continue;f=r[o]}t===0?Qu(i,n,f,c,u):Qu(i,n,f,c)}return i}function Qu(t,e,n,i,r){let o;t.hasOwnProperty(n)?(o=t[n]).push(e,i):o=t[n]=[e,i],r!==void 0&&o.push(r)}function Tv(t,e,n){let i=e.directiveStart,r=e.directiveEnd,o=t.data,s=e.attrs,c=[],u=null,f=null;for(let g=i;g<r;g++){let y=o[g],b=n?n.get(y):null,x=b?b.inputs:null,I=b?b.outputs:null;u=zu(0,y.inputs,g,u,x),f=zu(1,y.outputs,g,f,I);let B=u!==null&&s!==null&&!cd(e)?qv(u,g,s):null;c.push(B)}u!==null&&(u.hasOwnProperty("class")&&(e.flags|=8),u.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=c,e.inputs=u,e.outputs=f}function Av(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Nv(t,e,n,i,r,o,s,c){let u=ze(e,n),f=e.inputs,g;!c&&f!=null&&(g=f[i])?($a(t,n,g,i,r),no(e)&&Rv(n,e.index)):e.type&3?(i=Av(i),r=s!=null?s(r,e.value||"",i):r,o.setProperty(u,i,r)):e.type&12}function Rv(t,e){let n=Wt(e,t);n[O]&16||(n[O]|=64)}function kf(t,e,n,i){if(Ed()){let r=i===null?null:{"":-1},o=jv(t,n),s,c;o===null?s=c=null:[s,c]=o,s!==null&&Ff(t,e,n,s,r,c),r&&Bv(n,i,r)}n.mergedAttrs=xa(n.mergedAttrs,n.attrs)}function Ff(t,e,n,i,r,o){for(let f=0;f<i.length;f++)B0(of(n,e),t,i[f].type);Uv(n,t.data.length,i.length);for(let f=0;f<i.length;f++){let g=i[f];g.providersResolver&&g.providersResolver(g)}let s=!1,c=!1,u=Pf(t,e,i.length,null);for(let f=0;f<i.length;f++){let g=i[f];n.mergedAttrs=xa(n.mergedAttrs,g.hostAttrs),Hv(t,n,e,u,g),Vv(u,g,r),g.contentQueries!==null&&(n.flags|=4),(g.hostBindings!==null||g.hostAttrs!==null||g.hostVars!==0)&&(n.flags|=64);let y=g.type.prototype;!s&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),s=!0),!c&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),c=!0),u++}Tv(t,n,o)}function _v(t,e,n,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let c=~e.index;kv(s)!=c&&s.push(c),s.push(n,i,o)}}function kv(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function Fv(t,e,n,i){let r=n.directiveStart,o=n.directiveEnd;no(n)&&zv(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||of(n,e),Gt(i,e);let s=n.initialInputs;for(let c=r;c<o;c++){let u=t.data[c],f=Tn(e,t,c,n);if(Gt(f,e),s!==null&&Qv(e,c-r,f,u,n,s),yi(u)){let g=Wt(n.index,e);g[dt]=Tn(e,t,c,n)}}}function Lf(t,e,n){let i=n.directiveStart,r=n.directiveEnd,o=n.index,s=Bg();try{qt(o);for(let c=i;c<r;c++){let u=t.data[c],f=e[c];Ls(c),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&Lv(u,f)}}finally{qt(-1),Ls(s)}}function Lv(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function jv(t,e){let n=t.directiveRegistry,i=null,r=null;if(n)for(let o=0;o<n.length;o++){let s=n[o];if(ug(e,s.selectors,!1))if(i||(i=[]),yi(s))if(s.findHostDirectiveDefs!==null){let c=[];r=r||new Map,s.findHostDirectiveDefs(s,c,r),i.unshift(...c,s);let u=c.length;Zs(t,e,u)}else i.unshift(s),Zs(t,e,0);else r=r||new Map,s.findHostDirectiveDefs?.(s,i,r),i.push(s)}return i===null?null:[i,r]}function Zs(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function Bv(t,e,n){if(e){let i=t.localNames=[];for(let r=0;r<e.length;r+=2){let o=n[e[r+1]];if(o==null)throw new P(-301,!1);i.push(e[r],o)}}}function Vv(t,e,n){if(n){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)n[e.exportAs[i]]=t;yi(e)&&(n[""]=t)}}function Uv(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Hv(t,e,n,i,r){t.data[i]=r;let o=r.factory||(r.factory=On(r.type,!0)),s=new fi(o,yi(r),tt);t.blueprint[i]=s,n[i]=s,_v(t,e,i,Pf(t,n,r.hostVars,fo),r)}function zv(t,e,n){let i=ze(e,t),r=_f(n),o=t[ft].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let c=mo(t,ho(t,r,null,s,i,e,null,o.createRenderer(i,n),null,null,null));t[e.index]=c}function Qv(t,e,n,i,r,o){let s=o[e];if(s!==null)for(let c=0;c<s.length;){let u=s[c++],f=s[c++],g=s[c++],y=s[c++];Of(i,n,u,f,g,y)}}function qv(t,e,n){let i=null,r=0;for(;r<n.length;){let o=n[r];if(o===0){r+=4;continue}else if(o===5){r+=2;continue}if(typeof o=="number")break;if(t.hasOwnProperty(o)){i===null&&(i=[]);let s=t[o];for(let c=0;c<s.length;c+=3)if(s[c]===e){i.push(o,s[c+1],s[c+2],n[r+1]);break}}r+=2}return i}function jf(t,e,n,i){return[t,!0,0,e,null,i,null,n,null,null]}function Bf(t,e){let n=t.contentQueries;if(n!==null){let i=ye(null);try{for(let r=0;r<n.length;r+=2){let o=n[r],s=n[r+1];if(s!==-1){let c=t.data[s];Sa(o),c.contentQueries(2,e[s],s)}}}finally{ye(i)}}}function mo(t,e){return t[ai]?t[Pu][Ue]=e:t[ai]=e,t[Pu]=e,e}function $s(t,e,n){Sa(0);let i=ye(null);try{e(t,n)}finally{ye(i)}}function Vf(t){return t[si]||(t[si]=[])}function Uf(t){return t.cleanup||(t.cleanup=[])}function Hf(t,e){let n=t[Mn],i=n?n.get(pt,null):null;i&&i.handleError(e)}function $a(t,e,n,i,r){for(let o=0;o<n.length;){let s=n[o++],c=n[o++],u=n[o++],f=e[s],g=t.data[s];Of(g,f,i,c,u,r)}}function Gv(t,e,n){let i=wg(e,t);iv(t[ge],i,n)}function Yv(t,e){let n=Wt(e,t),i=n[F];Wv(i,n);let r=n[mt];r!==null&&n[Lr]===null&&(n[Lr]=Ba(r,n[Mn])),ec(i,n,n[dt])}function Wv(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function ec(t,e,n){Oa(e);try{let i=t.viewQuery;i!==null&&$s(1,i,n);let r=t.template;r!==null&&Tf(t,e,r,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[ht]?.finishViewCreation(t),t.staticContentQueries&&Bf(t,e),t.staticViewQueries&&$s(2,t.viewQuery,n);let o=t.components;o!==null&&Xv(e,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{e[O]&=-5,Pa()}}function Xv(t,e){for(let n=0;n<e.length;n++)Yv(t,e[n])}function Kv(t,e,n,i){let r=e.tView,s=t[O]&4096?4096:16,c=ho(t,r,n,s,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),u=t[e.index];c[vi]=u;let f=t[ht];return f!==null&&(c[ht]=f.createEmbeddedView(r)),ec(r,c,n),c}function qu(t,e){return!e||e.firstChild===null||Rd(t)}function Jv(t,e,n,i=!0){let r=e[F];if(av(r,e,t,n),i){let s=Js(n,t),c=e[ge],u=Xa(c,t[Qt]);u!==null&&ov(r,t[He],c,e,u,s)}let o=e[Lr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Yr(t,e,n,i,r=!1){for(;n!==null;){let o=e[n.index];o!==null&&i.push(Ze(o)),gt(o)&&Zv(o,i);let s=n.type;if(s&8)Yr(t,e,n.child,i);else if(s&32){let c=Wa(n,e),u;for(;u=c();)i.push(u)}else if(s&16){let c=Df(e,n);if(Array.isArray(c))i.push(...c);else{let u=li(e[Je]);Yr(u[F],u,c,i,!0)}}n=r?n.projectionNext:n.next}return i}function Zv(t,e){for(let n=we;n<t.length;n++){let i=t[n],r=i[F].firstChild;r!==null&&Yr(i[F],i,r,e)}t[Qt]!==t[mt]&&e.push(t[Qt])}var zf=[];function $v(t){return t[zt]??ey(t)}function ey(t){let e=zf.pop()??Object.create(ny);return e.lView=t,e}function ty(t){t.lView[zt]!==t&&(t.lView=null,zf.push(t))}var ny=W(M({},Ql),{consumerIsAlwaysLive:!0,consumerMarkedDirty:t=>{ci(t.lView)},consumerOnSignalRead(){this.lView[zt]=this}});function Qf(t){return Gf(t[ai])}function qf(t){return Gf(t[Ue])}function Gf(t){for(;t!==null&&!gt(t);)t=t[Ue];return t}var Yf=100;function Wf(t,e=!0,n=0){let i=t[ft],r=i.rendererFactory,o=!1;o||r.begin?.();try{iy(t,n)}catch(s){throw e&&Hf(t,s),s}finally{o||(r.end?.(),i.inlineEffectRunner?.flush())}}function iy(t,e){ea(t,e);let n=0;for(;Ma(t);){if(n===Yf)throw new P(103,!1);n++,ea(t,1)}}function ry(t,e,n,i){let r=e[O];if((r&256)===256)return;let o=!1;!o&&e[ft].inlineEffectRunner?.flush(),Oa(e);let s=null,c=null;!o&&oy(t)&&(c=$v(e),s=ql(c));try{bd(e),Fg(t.bindingStartIndex),n!==null&&Tf(t,e,n,2,i);let u=(r&3)===3;if(!o)if(u){let y=t.preOrderCheckHooks;y!==null&&Ar(e,y,null)}else{let y=t.preOrderHooks;y!==null&&Nr(e,y,0,null),Ms(e,0)}if(sy(e),Xf(e,0),t.contentQueries!==null&&Bf(t,e),!o)if(u){let y=t.contentCheckHooks;y!==null&&Ar(e,y)}else{let y=t.contentHooks;y!==null&&Nr(e,y,1),Ms(e,1)}xv(t,e);let f=t.components;f!==null&&Jf(e,f,0);let g=t.viewQuery;if(g!==null&&$s(2,g,i),!o)if(u){let y=t.viewCheckHooks;y!==null&&Ar(e,y)}else{let y=t.viewHooks;y!==null&&Nr(e,y,2),Ms(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[Ds]){for(let y of e[Ds])y();e[Ds]=null}o||(e[O]&=-73)}catch(u){throw ci(e),u}finally{c!==null&&(Gl(c,s),ty(c)),Pa()}}function oy(t){return t.type!==2}function Xf(t,e){for(let n=Qf(t);n!==null;n=qf(n))for(let i=we;i<n.length;i++){let r=n[i];Kf(r,e)}}function sy(t){for(let e=Qf(t);e!==null;e=qf(e)){if(!(e[O]&wa.HasTransplantedViews))continue;let n=e[Sn];for(let i=0;i<n.length;i++){let r=n[i],o=r[ae];Mg(r)}}}function ay(t,e,n){let i=Wt(e,t);Kf(i,n)}function Kf(t,e){Ia(t)&&ea(t,e)}function ea(t,e){let i=t[F],r=t[O],o=t[zt],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&rs(o)),o&&(o.dirty=!1),t[O]&=-9217,s)ry(i,t,i.template,t[dt]);else if(r&8192){Xf(t,1);let c=i.components;c!==null&&Jf(t,c,1)}}function Jf(t,e,n){for(let i=0;i<e.length;i++)ay(t,e[i],n)}function tc(t){for(t[ft].changeDetectionScheduler?.notify();t;){t[O]|=64;let e=li(t);if(Cg(t)&&!e)return t;t=e}return null}var Yt=class{get rootNodes(){let e=this._lView,n=e[F];return Yr(n,e,n.firstChild,[])}constructor(e,n,i=!0){this._lView=e,this._cdRefInjectingView=n,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[dt]}set context(e){this._lView[dt]=e}get destroyed(){return(this._lView[O]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[ae];if(gt(e)){let n=e[jr],i=n?n.indexOf(this):-1;i>-1&&(Ks(e,i),Vr(n,i))}this._attachedToViewContainer=!1}xf(this._lView[F],this._lView)}onDestroy(e){Sg(this._lView,e)}markForCheck(){tc(this._cdRefInjectingView||this._lView)}detach(){this._lView[O]&=-129}reattach(){Fs(this._lView),this._lView[O]|=128}detectChanges(){this._lView[O]|=1024,Wf(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new P(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,bf(this._lView[F],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new P(902,!1);this._appRef=e,Fs(this._lView)}},An=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=uy;let t=e;return t})(),cy=An,ly=class extends cy{constructor(e,n,i){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,i){let r=Kv(this._declarationLView,this._declarationTContainer,e,{injector:n,dehydratedView:i});return new Yt(r)}};function uy(){return nc(et(),J())}function nc(t,e){return t.type&4?new ly(e,t,Nn(t,e)):null}var BM=new RegExp(`^(\\d+)*(${f0}|${d0})*(.*)`);var dy=()=>null;function Gu(t,e){return dy(t,e)}var ta=class{},na=class{},Wr=class{};function fy(t){let e=Error(`No component factory found for ${xe(t)}.`);return e[hy]=t,e}var hy="ngComponent";var ia=class{resolveComponentFactory(e){throw fy(e)}},go=(()=>{let e=class e{};e.NULL=new ia;let t=e;return t})(),hi=class{};var py=(()=>{let e=class e{};e.\u0275prov=S({token:e,providedIn:"root",factory:()=>null});let t=e;return t})(),Ts={};var Yu=new Set;function Zf(t){Yu.has(t)||(Yu.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}function $f(t){return gy(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function my(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{let n=t[Symbol.iterator](),i;for(;!(i=n.next()).done;)e(i.value)}}function gy(t){return t!==null&&(typeof t=="function"||typeof t=="object")}var ra=class{constructor(){}supports(e){return $f(e)}create(e){return new oa(e)}},vy=(t,e)=>e,oa=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||vy}forEachItem(e){let n;for(n=this._itHead;n!==null;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,i=this._removalsHead,r=0,o=null;for(;n||i;){let s=!i||n&&n.currentIndex<Wu(i,r,o)?n:i,c=Wu(s,r,o),u=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(n=n._next,s.previousIndex==null)r++;else{o||(o=[]);let f=c-r,g=u-r;if(f!=g){for(let b=0;b<f;b++){let x=b<o.length?o[b]:o[b]=0,I=x+b;g<=I&&I<f&&(o[b]=x+1)}let y=s.previousIndex;o[y]=g-f}}c!==u&&e(s,c,u)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;n!==null;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;n!==null;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;n!==null;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;n!==null;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;n!==null;n=n._nextIdentityChange)e(n)}diff(e){if(e==null&&(e=[]),!$f(e))throw new P(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._itHead,i=!1,r,o,s;if(Array.isArray(e)){this.length=e.length;for(let c=0;c<this.length;c++)o=e[c],s=this._trackByFn(c,o),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,o,s,c),i=!0):(i&&(n=this._verifyReinsertion(n,o,s,c)),Object.is(n.item,o)||this._addIdentityChange(n,o)),n=n._next}else r=0,my(e,c=>{s=this._trackByFn(r,c),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,c,s,r),i=!0):(i&&(n=this._verifyReinsertion(n,c,s,r)),Object.is(n.item,c)||this._addIdentityChange(n,c)),n=n._next,r++}),this.length=r;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,i,r){let o;return e===null?o=this._itTail:(o=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,o,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,o,r)):e=this._addAfter(new sa(n,i),o,r)),e}_verifyReinsertion(e,n,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let n=e._next;this._addToRemovals(this._unlink(e)),e=n}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,o=e._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,n,i),this._addToMoves(e,i),e}_moveAfter(e,n,i){return this._unlink(e),this._insertAfter(e,n,i),this._addToMoves(e,i),e}_addAfter(e,n,i){return this._insertAfter(e,n,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,n,i){let r=n===null?this._itHead:n._next;return e._next=r,e._prev=n,r===null?this._itTail=e:r._prev=e,n===null?this._itHead=e:n._next=e,this._linkedRecords===null&&(this._linkedRecords=new Xr),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let n=e._prev,i=e._next;return n===null?this._itHead=i:n._next=i,i===null?this._itTail=n:i._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Xr),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},sa=class{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},aa=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let i;for(i=this._head;i!==null;i=i._nextDup)if((n===null||n<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let n=e._prevDup,i=e._nextDup;return n===null?this._head=i:n._nextDup=i,i===null?this._tail=n:i._prevDup=n,this._head===null}},Xr=class{constructor(){this.map=new Map}put(e){let n=e.trackById,i=this.map.get(n);i||(i=new aa,this.map.set(n,i)),i.add(e)}get(e,n){let i=e,r=this.map.get(i);return r?r.get(e,n):null}remove(e){let n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Wu(t,e,n){let i=t.previousIndex;if(i===null)return i;let r=0;return n&&i<n.length&&(r=n[i]),i+e+r}function Xu(){return new ic([new ra])}var ic=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r!=null){let o=r.factories.slice();i=i.concat(o)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||Xu()),deps:[[e,new Qd,new Va]]}}find(i){let r=this.factories.find(o=>o.supports(i));if(r!=null)return r;throw new P(901,!1)}};e.\u0275prov=S({token:e,providedIn:"root",factory:Xu});let t=e;return t})();var xi=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=yy;let t=e;return t})();function yy(t){return Cy(et(),J(),(t&16)===16)}function Cy(t,e,n){if(no(t)&&!n){let i=Wt(t.index,e);return new Yt(i,i)}else if(t.type&47){let i=e[Je];return new Yt(i,e)}return null}function Ku(...t){}function by(){let t=typeof Vt.requestAnimationFrame=="function",e=Vt[t?"requestAnimationFrame":"setTimeout"],n=Vt[t?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&n){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=n[Zone.__symbol__("OriginalDelegate")];r&&(n=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:n}}var K=class t{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Re(!1),this.onMicrotaskEmpty=new Re(!1),this.onStable=new Re(!1),this.onError=new Re(!1),typeof Zone>"u")throw new P(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&n,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=by().nativeRequestAnimationFrame,wy(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new P(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new P(909,!1)}run(e,n,i){return this._inner.run(e,n,i)}runTask(e,n,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,Ey,Ku,Ku);try{return o.runTask(s,n,i)}finally{o.cancelTask(s)}}runGuarded(e,n,i){return this._inner.runGuarded(e,n,i)}runOutsideAngular(e){return this._outer.run(e)}},Ey={};function rc(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function xy(t){t.isCheckStableRunning||t.lastRequestAnimationFrameId!==-1||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(Vt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,ca(t),t.isCheckStableRunning=!0,rc(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),ca(t))}function wy(t){let e=()=>{xy(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,i,r,o,s,c)=>{if(Dy(c))return n.invokeTask(r,o,s,c);try{return Ju(t),n.invokeTask(r,o,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),Zu(t)}},onInvoke:(n,i,r,o,s,c,u)=>{try{return Ju(t),n.invoke(r,o,s,c,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),Zu(t)}},onHasTask:(n,i,r,o)=>{n.hasTask(r,o),i===r&&(o.change=="microTask"?(t._hasPendingMicrotasks=o.microTask,ca(t),rc(t)):o.change=="macroTask"&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:(n,i,r,o)=>(n.handleError(r,o),t.runOutsideAngular(()=>t.onError.emit(o)),!1)})}function ca(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.lastRequestAnimationFrameId!==-1?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Ju(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Zu(t){t._nesting--,rc(t)}function Dy(t){return!Array.isArray(t)||t.length!==1?!1:t[0].data?.__ignore_ng_zone__===!0}var eh=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=S({token:e,providedIn:"root",factory:()=>new e});let t=e;return t})();function la(t,e,n){let i=n?t.styles:null,r=n?t.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let c=e[s];if(typeof c=="number")o=c;else if(o==1)r=wu(r,c);else if(o==2){let u=c,f=e[++s];i=wu(i,u+": "+f+";")}}n?t.styles=i:t.stylesWithoutHost=i,n?t.classes=r:t.classesWithoutHost=r}var Kr=class extends go{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=Ht(e);return new pi(n,this.ngModule)}};function $u(t){let e=[];for(let n in t){if(!t.hasOwnProperty(n))continue;let i=t[n];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:n})}return e}function Iy(t){let e=t.toLowerCase();return e==="svg"?yd:e==="math"?bg:null}var ua=class{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,i){i=ro(i);let r=this.injector.get(e,Ts,i);return r!==Ts||n===Ts?r:this.parentInjector.get(e,n,i)}},pi=class extends Wr{get inputs(){let e=this.componentDef,n=e.inputTransforms,i=$u(e.inputs);if(n!==null)for(let r of i)n.hasOwnProperty(r.propName)&&(r.transform=n[r.propName]);return i}get outputs(){return $u(this.componentDef.outputs)}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=pg(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}create(e,n,i,r){r=r||this.ngModule;let o=r instanceof De?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let s=o?new ua(e,o):e,c=s.get(hi,null);if(c===null)throw new P(407,!1);let u=s.get(py,null),f=s.get(eh,null),g=s.get(ta,null),y={rendererFactory:c,sanitizer:u,inlineEffectRunner:null,afterRenderEventManager:f,changeDetectionScheduler:g},b=c.createRenderer(null,this.componentDef),x=this.componentDef.selectors[0][0]||"div",I=i?Iv(b,i,this.componentDef.encapsulation,s):Cf(b,x,Iy(x)),B=512;this.componentDef.signals?B|=4096:this.componentDef.onPush||(B|=16);let Z=null;I!==null&&(Z=Ba(I,s,!0));let R=Za(0,null,null,1,0,null,null,null,null,null,null),re=ho(null,R,null,B,null,null,y,b,s,null,Z);Oa(re);let ve,he;try{let le=this.componentDef,ue,Ct=null;le.findHostDirectiveDefs?(ue=[],Ct=new Map,le.findHostDirectiveDefs(le,ue,Ct),ue.push(le)):ue=[le];let ot=My(re,I),sn=Sy(ot,I,le,ue,re,y,b);he=Cd(R,St),I&&Ty(b,le,I,i),n!==void 0&&Ay(he,this.ngContentSelectors,n),ve=Py(sn,le,ue,Ct,re,[Ny]),ec(R,re,null)}finally{Pa()}return new da(this.componentType,ve,Nn(he,re),re,he)}},da=class extends na{constructor(e,n,i,r,o){super(),this.location=i,this._rootLView=r,this._tNode=o,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new Yt(r,void 0,!1),this.componentType=e}setInput(e,n){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let o=this._rootLView;$a(o[F],o,r,e,n),this.previousInputValues.set(e,n);let s=Wt(this._tNode.index,o);tc(s)}}get injector(){return new Ut(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function My(t,e){let n=t[F],i=St;return t[i]=e,po(n,i,2,"#host",null)}function Sy(t,e,n,i,r,o,s){let c=r[F];Oy(i,t,e,s);let u=null;e!==null&&(u=Ba(e,r[Mn]));let f=o.rendererFactory.createRenderer(e,n),g=16;n.signals?g=4096:n.onPush&&(g=64);let y=ho(r,_f(n),null,g,r[t.index],t,o,f,null,null,u);return c.firstCreatePass&&Zs(c,t,i.length-1),mo(r,y),r[t.index]=y}function Oy(t,e,n,i){for(let r of t)e.mergedAttrs=xa(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(la(e,e.mergedAttrs,!0),n!==null&&Mf(i,n,e))}function Py(t,e,n,i,r,o){let s=et(),c=r[F],u=ze(s,r);Ff(c,r,s,n,null,i);for(let g=0;g<n.length;g++){let y=s.directiveStart+g,b=Tn(r,c,y,s);Gt(b,r)}Lf(c,r,s),u&&Gt(u,r);let f=Tn(r,c,s.directiveStart+s.componentOffset,s);if(t[dt]=r[dt]=f,o!==null)for(let g of o)g(f,e);return Af(c,s,r),f}function Ty(t,e,n,i){if(i)ks(t,n,["ng-version","17.2.3"]);else{let{attrs:r,classes:o}=mg(e.selectors[0]);r&&ks(t,n,r),o&&o.length>0&&If(t,n,o.join(" "))}}function Ay(t,e,n){let i=t.projection=[];for(let r=0;r<e.length;r++){let o=n[r];i.push(o!=null?Array.from(o):null)}}function Ny(){let t=et();za(J()[F],t)}var $t=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Ry;let t=e;return t})();function Ry(){let t=et();return nh(t,J())}var _y=$t,th=class extends _y{constructor(e,n,i){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=i}get element(){return Nn(this._hostTNode,this._hostLView)}get injector(){return new Ut(this._hostTNode,this._hostLView)}get parentInjector(){let e=Qa(this._hostTNode,this._hostLView);if(tf(e)){let n=Qr(e,this._hostLView),i=zr(e),r=n[F].data[i+8];return new Ut(r,n)}else return new Ut(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let n=ed(this._lContainer);return n!==null&&n[e]||null}get length(){return this._lContainer.length-we}createEmbeddedView(e,n,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Gu(this._lContainer,e.ssrId),c=e.createEmbeddedViewImpl(n||{},o,s);return this.insertImpl(c,r,qu(this._hostTNode,s)),c}createComponent(e,n,i,r,o){let s=e&&!M0(e),c;if(s)c=n;else{let I=n||{};c=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef}let u=s?e:new pi(Ht(e)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let B=(s?f:this.parentInjector).get(De,null);B&&(o=B)}let g=Ht(u.componentType??{}),y=Gu(this._lContainer,g?.id??null),b=y?.firstChild??null,x=u.create(f,r,b,o);return this.insertImpl(x.hostView,c,qu(this._hostTNode,y)),x}insert(e,n){return this.insertImpl(e,n,!0)}insertImpl(e,n,i){let r=e._lView;if(Ig(r)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let u=r[ae],f=new th(u,u[He],u[ae]);f.detach(f.indexOf(e))}}let o=this._adjustIndex(n),s=this._lContainer;return Jv(s,r,o,i),e.attachToViewContainerRef(),Nd(As(s),o,e),e}move(e,n){return this.insert(e,n)}indexOf(e){let n=ed(this._lContainer);return n!==null?n.indexOf(e):-1}remove(e){let n=this._adjustIndex(e,-1),i=Ks(this._lContainer,n);i&&(Vr(As(this._lContainer),n),xf(i[F],i))}detach(e){let n=this._adjustIndex(e,-1),i=Ks(this._lContainer,n);return i&&Vr(As(this._lContainer),n)!=null?new Yt(i):null}_adjustIndex(e,n=0){return e??this.length+n}};function ed(t){return t[jr]}function As(t){return t[jr]||(t[jr]=[])}function nh(t,e){let n,i=e[t.index];return gt(i)?n=i:(n=jf(i,e,null,t),e[t.index]=n,mo(e,n)),Fy(n,e,t,i),new th(n,t,e)}function ky(t,e){let n=t[ge],i=n.createComment(""),r=ze(e,t),o=Xa(n,r);return Gr(n,o,i,pv(n,r),!1),i}var Fy=By,Ly=()=>!1;function jy(t,e,n){return Ly(t,e,n)}function By(t,e,n,i){if(t[Qt])return;let r;n.type&8?r=Ze(i):r=ky(e,n),t[Qt]=r}var fa=class t{constructor(e){this.queryList=e,this.matches=null}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},ha=class t{constructor(e=[]){this.queries=e}createEmbeddedView(e){let n=e.queries;if(n!==null){let i=e.contentQueries!==null?e.contentQueries[0]:n.length,r=[];for(let o=0;o<i;o++){let s=n.getByIndex(o),c=this.queries[s.indexInDeclarationView];r.push(c.clone())}return new t(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)oc(e,n).matches!==null&&this.queries[n].setDirty()}},pa=class{constructor(e,n,i=null){this.flags=n,this.read=i,typeof e=="string"?this.predicate=Yy(e):this.predicate=e}},ma=class t{constructor(e=[]){this.queries=e}elementStart(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let i=0;i<this.length;i++){let r=n!==null?n.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,n!==null?n.push(o):n=[o])}return n!==null?new t(n):null}template(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},ga=class t{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==n;)i=i.parent;return n===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,n){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,n,Vy(n,o)),this.matchTNodeWithReadOption(e,n,Rr(n,e,o,!1,!1))}else i===An?n.type&4&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,Rr(n,e,i,!1,!1))}matchTNodeWithReadOption(e,n,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Xt||r===$t||r===An&&n.type&4)this.addMatch(n.index,-2);else{let o=Rr(n,e,r,!1,!1);o!==null&&this.addMatch(n.index,o)}else this.addMatch(n.index,i)}}addMatch(e,n){this.matches===null?this.matches=[e,n]:this.matches.push(e,n)}};function Vy(t,e){let n=t.localNames;if(n!==null){for(let i=0;i<n.length;i+=2)if(n[i]===e)return n[i+1]}return null}function Uy(t,e){return t.type&11?Nn(t,e):t.type&4?nc(t,e):null}function Hy(t,e,n,i){return n===-1?Uy(e,t):n===-2?zy(t,e,i):Tn(t,t[F],n,e)}function zy(t,e,n){if(n===Xt)return Nn(e,t);if(n===An)return nc(e,t);if(n===$t)return nh(e,t)}function ih(t,e,n,i){let r=e[ht].queries[i];if(r.matches===null){let o=t.data,s=n.matches,c=[];for(let u=0;s!==null&&u<s.length;u+=2){let f=s[u];if(f<0)c.push(null);else{let g=o[f];c.push(Hy(e,g,s[u+1],n.metadata.read))}}r.matches=c}return r.matches}function va(t,e,n,i){let r=t.queries.getByIndex(n),o=r.matches;if(o!==null){let s=ih(t,e,r,n);for(let c=0;c<o.length;c+=2){let u=o[c];if(u>0)i.push(s[c/2]);else{let f=o[c+1],g=e[-u];for(let y=we;y<g.length;y++){let b=g[y];b[vi]===b[ae]&&va(b[F],b,f,i)}if(g[Sn]!==null){let y=g[Sn];for(let b=0;b<y.length;b++){let x=y[b];va(x[F],x,f,i)}}}}}return i}function Qy(t,e){return t[ht].queries[e].queryList}function qy(t,e,n){let i=new js((n&4)===4);return Ov(t,e,i,i.destroy),(e[ht]??=new ha).queries.push(new fa(i))-1}function Gy(t,e,n){let i=vt();return i.firstCreatePass&&(Wy(i,new pa(t,e,n),-1),(e&2)===2&&(i.staticViewQueries=!0)),qy(i,J(),e)}function Yy(t){return t.split(",").map(e=>e.trim())}function Wy(t,e,n){t.queries===null&&(t.queries=new ma),t.queries.track(new ga(e,n))}function oc(t,e){return t.queries.getByIndex(e)}function Xy(t,e){let n=t[F],i=oc(n,e);return i.crossesNgTemplate?va(n,t,e,[]):ih(n,t,i,e)}var Ot=class{},mi=class{};var ya=class extends Ot{constructor(e,n,i){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Kr(this);let r=fd(e);this._bootstrapComponents=yf(r.bootstrap),this._r3Injector=ff(e,n,[{provide:Ot,useValue:this},{provide:go,useValue:this.componentFactoryResolver},...i],xe(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Ca=class extends mi{constructor(e){super(),this.moduleType=e}create(e){return new ya(this.moduleType,e,[])}};var Jr=class extends Ot{constructor(e){super(),this.componentFactoryResolver=new Kr(this),this.instance=null;let n=new di([...e.providers,{provide:Ot,useValue:this},{provide:go,useValue:this.componentFactoryResolver}],e.parent||Ha(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function sc(t,e,n=null){return new Jr({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var vo=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new se(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function rh(t,e,n){let i=t[e];return Object.is(i,n)?!1:(t[e]=n,!0)}function Ky(t,e,n,i,r,o,s,c,u){let f=e.consts,g=po(e,t,4,s||null,Br(f,c));kf(e,n,g,Br(f,u)),za(e,g);let y=g.tView=Za(2,g,i,r,o,e.directiveRegistry,e.pipeRegistry,null,e.schemas,f,null);return e.queries!==null&&(e.queries.template(e,g),y.queries=e.queries.embeddedTView(g)),g}function ac(t,e,n,i,r,o,s,c){let u=J(),f=vt(),g=t+St,y=f.firstCreatePass?Ky(g,f,u,e,n,i,r,o,s):f.data[g];Ci(y,!1);let b=Jy(f,u,y,t);Aa()&&Ka(f,u,b,y),Gt(b,u);let x=jf(b,u,b,y);return u[g]=x,mo(u,x),jy(x,y,u),Da(y)&&Nf(f,u,y),s!=null&&Rf(u,y,c),ac}var Jy=Zy;function Zy(t,e,n,i){return Na(!0),e[ge].createComment("")}function $y(t,e,n,i){return rh(t,Dd(),n)?e+La(n)+i:fo}function _n(t,e,n){let i=J(),r=Dd();if(rh(i,r,e)){let o=vt(),s=Ug();Nv(o,s,i,t,e,i[ge],n,!1)}return _n}function td(t,e,n,i,r){let o=e.inputs,s=r?"class":"style";$a(t,n,o[s],s,i)}function eC(t,e,n,i,r,o){let s=e.consts,c=Br(s,r),u=po(e,t,2,i,c);return kf(e,n,u,Br(s,o)),u.attrs!==null&&la(u,u.attrs,!1),u.mergedAttrs!==null&&la(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function d(t,e,n,i){let r=J(),o=vt(),s=St+t,c=r[ge],u=o.firstCreatePass?eC(s,o,r,e,n,i):o.data[s],f=tC(o,r,u,c,e,t);r[s]=f;let g=Da(u);return Ci(u,!0),Mf(c,f,u),(u.flags&32)!==32&&Aa()&&Ka(o,r,f,u),Og()===0&&Gt(f,r),Pg(),g&&(Nf(o,r,u),Af(o,u,r)),i!==null&&Rf(r,u),d}function l(){let t=et();wd()?kg():(t=t.parent,Ci(t,!1));let e=t;Ng(e)&&Rg(),Tg();let n=vt();return n.firstCreatePass&&(za(n,t),vd(t)&&n.queries.elementEnd(t)),e.classesWithoutHost!=null&&R0(e)&&td(n,e,J(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&_0(e)&&td(n,e,J(),e.stylesWithoutHost,!1),l}function m(t,e,n,i){return d(t,e,n,i),l(),m}var tC=(t,e,n,i,r,o)=>(Na(!0),Cf(i,r,zg()));var Zr="en-US";var nC=Zr;function iC(t){typeof t=="string"&&(nC=t.toLowerCase().replace(/_/g,"-"))}function yo(t,e,n,i){let r=J(),o=vt(),s=et();return oC(o,r,r[ge],s,t,e,i),yo}function rC(t,e,n,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===n&&r[o+1]===i){let c=e[si],u=r[o+2];return c.length>u?c[u]:null}typeof s=="string"&&(o+=2)}return null}function oC(t,e,n,i,r,o,s){let c=Da(i),f=t.firstCreatePass&&Uf(t),g=e[dt],y=Vf(e),b=!0;if(i.type&3||s){let B=ze(i,e),Z=s?s(B):B,R=y.length,re=s?he=>s(Ze(he[i.index])):i.index,ve=null;if(!s&&c&&(ve=rC(t,e,r,i.index)),ve!==null){let he=ve.__ngLastListenerFn__||ve;he.__ngNextListenerFn__=o,ve.__ngLastListenerFn__=o,b=!1}else{o=id(i,e,g,o,!1);let he=n.listen(Z,r,o);y.push(o,he),f&&f.push(r,re,R,R+1)}}else o=id(i,e,g,o,!1);let x=i.outputs,I;if(b&&x!==null&&(I=x[r])){let B=I.length;if(B)for(let Z=0;Z<B;Z+=2){let R=I[Z],re=I[Z+1],le=e[R][re].subscribe(o),ue=y.length;if(y.push(o,le),f){let Ct=typeof le=="function"?ue+1:-(ue+1);f.push(r,i.index,ue,Ct)}}}}function nd(t,e,n,i){try{return We(6,e,n),n(i)!==!1}catch(r){return Hf(t,r),!1}finally{We(7,e,n)}}function id(t,e,n,i,r){return function o(s){if(s===Function)return i;let c=t.componentOffset>-1?Wt(t.index,e):e;tc(c);let u=nd(e,n,i,s),f=o.__ngNextListenerFn__;for(;f;)u=nd(e,n,f,s)&&u,f=f.__ngNextListenerFn__;return r&&u===!1&&s.preventDefault(),u}}function oh(t,e,n){Gy(t,e,n)}function cc(t){let e=J(),n=vt(),i=Id();Sa(i+1);let r=oc(n,i);if(t.dirty&&Dg(e)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Xy(e,i);t.reset(o,qg),t.notifyOnChanges()}return!0}return!1}function lc(){return Qy(J(),Id())}function a(t,e=""){let n=J(),i=vt(),r=t+St,o=i.firstCreatePass?po(i,r,1,e,null):i.data[r],s=sC(i,n,o,e,t);n[r]=s,Aa()&&Ka(i,n,s,o),Ci(o,!1)}var sC=(t,e,n,i,r)=>(Na(!0),nv(e[ge],i));function wi(t){return sh("",t,""),wi}function sh(t,e,n){let i=J(),r=$y(i,t,e,n);return r!==fo&&Gv(i,Ta(),r),sh}var aC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Yd(!1,i.type),o=r.length>0?sc([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,o)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=S({token:e,providedIn:"environment",factory:()=>new e(L(De))});let t=e;return t})();function Pt(t){Zf("NgStandalone"),t.getStandaloneInjector=e=>e.get(aC).getOrCreateStandaloneInjector(t)}var Co=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();var ah=new H("");function Di(t){return!!t&&typeof t.then=="function"}function ch(t){return!!t&&typeof t.subscribe=="function"}var lh=new H(""),uh=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=D(lh,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let o of this.appInits){let s=o();if(Di(s))i.push(s);else if(ch(s)){let c=new Promise((u,f)=>{s.subscribe({complete:u,error:f})});i.push(c)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(o=>{this.reject(o)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),uc=new H("");function cC(){Wl(()=>{throw new P(600,!1)})}function lC(t){return t.isBoundToModule}function uC(t,e,n){try{let i=n();return Di(i)?i.catch(r=>{throw e.runOutsideAngular(()=>t.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>t.handleError(i)),i}}var Ii=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=D(hf),this.afterRenderEffectManager=D(eh),this.componentTypes=[],this.components=[],this.isStable=D(vo).hasPendingTasks.pipe(_(i=>!i)),this._injector=D(De)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let o=i instanceof Wr;if(!this._injector.get(uh).done){let x=!o&&dd(i),I=!1;throw new P(405,I)}let c;o?c=i:c=this._injector.get(go).resolveComponentFactory(i),this.componentTypes.push(c.componentType);let u=lC(c)?void 0:this._injector.get(Ot),f=r||c.selector,g=c.create(bi.NULL,[],f,u),y=g.location.nativeElement,b=g.injector.get(ah,null);return b?.registerApplication(y),g.onDestroy(()=>{this.detachView(g.hostView),Ns(this.components,g),b?.unregisterApplication(y)}),this._loadComponent(g),g}tick(){if(this._runningTick)throw new P(101,!1);try{this._runningTick=!0,this.detectChangesInAttachedViews()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}detectChangesInAttachedViews(){let i=0,r=this.afterRenderEffectManager;for(;;){if(i===Yf)throw new P(103,!1);let o=i===0;for(let{_lView:s,notifyErrorHandler:c}of this._views)!o&&!Rs(s)||this.detectChangesInView(s,c,o);if(i++,r.executeInternalCallbacks(),!this._views.some(({_lView:s})=>Rs(s))&&(r.execute(),!this._views.some(({_lView:s})=>Rs(s))))break}}detectChangesInView(i,r,o){let s;o?(s=0,i[O]|=1024):i[O]&64?s=0:s=1,Wf(i,r,s)}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Ns(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(uc,[]);[...this._bootstrapListeners,...r].forEach(o=>o(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Ns(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new P(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ns(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Rs(t){return Ma(t)}var ba=class{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}},dc=(()=>{let e=class e{compileModuleSync(i){return new Ca(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),o=fd(i),s=yf(o.declarations).reduce((c,u)=>{let f=Ht(u);return f&&c.push(new pi(f)),c},[]);return new ba(r,s)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var dC=(()=>{let e=class e{constructor(){this.zone=D(K),this.applicationRef=D(Ii)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function fC(t){return[{provide:K,useFactory:t},{provide:Pn,multi:!0,useFactory:()=>{let e=D(dC,{optional:!0});return()=>e.initialize()}},{provide:Pn,multi:!0,useFactory:()=>{let e=D(gC);return()=>{e.initialize()}}},{provide:hf,useFactory:hC}]}function hC(){let t=D(K),e=D(pt);return n=>t.runOutsideAngular(()=>e.handleError(n))}function pC(t){let e=fC(()=>new K(mC(t)));return oo([[],e])}function mC(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var gC=(()=>{let e=class e{constructor(){this.subscription=new $,this.initialized=!1,this.zone=D(K),this.pendingTasks=D(vo)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{K.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{K.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function vC(){return typeof $localize<"u"&&$localize.locale||Zr}var fc=new H("",{providedIn:"root",factory:()=>D(fc,k.Optional|k.SkipSelf)||vC()});var dh=new H("");var kr=null;function yC(t=[],e){return bi.create({name:e,providers:[{provide:so,useValue:"platform"},{provide:dh,useValue:new Set([()=>kr=null])},...t]})}function CC(t=[]){if(kr)return kr;let e=yC(t);return kr=e,cC(),bC(e),e}function bC(t){t.get(ka,null)?.forEach(n=>n())}function fh(t){try{let{rootComponent:e,appProviders:n,platformProviders:i}=t,r=CC(i),o=[pC(),...n||[]],c=new Jr({providers:o,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,u=c.get(K);return u.run(()=>{c.resolveInjectorInitializers();let f=c.get(pt,null),g;u.runOutsideAngular(()=>{g=u.onError.subscribe({next:x=>{f.handleError(x)}})});let y=()=>c.destroy(),b=r.get(dh);return b.add(y),c.onDestroy(()=>{g.unsubscribe(),b.delete(y)}),uC(f,u,()=>{let x=c.get(uh);return x.runInitializers(),x.donePromise.then(()=>{let I=c.get(fc,Zr);iC(I||Zr);let B=c.get(Ii);return e!==void 0&&B.bootstrap(e),B})})})}catch(e){return Promise.reject(e)}}var yh=null;function kn(){return yh}function Ch(t){yh??=t}var bo=class{};var ke=new H(""),bh=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(DC),providedIn:"platform"});let t=e;return t})();var DC=(()=>{let e=class e extends bh{constructor(){super(),this._doc=D(ke),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return kn().getBaseHref(this._doc)}onPopState(i){let r=kn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=kn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,o){this._history.pushState(i,r,o)}replaceState(i,r,o){this._history.replaceState(i,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function Eh(t,e){if(t.length==0)return e;if(e.length==0)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,n==2?t+e.substring(1):n==1?t+e:t+"/"+e}function hh(t){let e=t.match(/#|\?|$/),n=e&&e.index||t.length,i=n-(t[n-1]==="/"?1:0);return t.slice(0,i)+t.slice(n)}function en(t){return t&&t[0]!=="?"?"?"+t:t}var xo=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(xh),providedIn:"root"});let t=e;return t})(),IC=new H(""),xh=(()=>{let e=class e extends xo{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??D(ke).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Eh(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+en(this._platformLocation.search),o=this._platformLocation.hash;return o&&i?`${r}${o}`:r}pushState(i,r,o,s){let c=this.prepareExternalUrl(o+en(s));this._platformLocation.pushState(i,r,c)}replaceState(i,r,o,s){let c=this.prepareExternalUrl(o+en(s));this._platformLocation.replaceState(i,r,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(L(bh),L(IC,8))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Mi=(()=>{let e=class e{constructor(i){this._subject=new Re,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=OC(hh(ph(r))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+en(r))}normalize(i){return e.stripTrailingSlash(SC(this._basePath,ph(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",o=null){this._locationStrategy.pushState(o,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+en(r)),o)}replaceState(i,r="",o=null){this._locationStrategy.replaceState(o,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+en(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(o=>o(i,r))}subscribe(i,r,o){return this._subject.subscribe({next:i,error:r,complete:o})}};e.normalizeQueryParams=en,e.joinWithSlash=Eh,e.stripTrailingSlash=hh,e.\u0275fac=function(r){return new(r||e)(L(xo))},e.\u0275prov=S({token:e,factory:()=>MC(),providedIn:"root"});let t=e;return t})();function MC(){return new Mi(L(xo))}function SC(t,e){if(!t||!e.startsWith(t))return e;let n=e.substring(t.length);return n===""||["/",";","?","#"].includes(n[0])?n:e}function ph(t){return t.replace(/\/index.html$/,"")}function OC(t){if(new RegExp("^(https?:)?//").test(t)){let[,n]=t.split(/\/\/[^\/]+/);return n}return t}function wh(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let i=n.indexOf("="),[r,o]=i==-1?[n,""]:[n.slice(0,i),n.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var hc=class{constructor(e,n,i,r){this.$implicit=e,this.ngForOf=n,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Dh=(()=>{let e=class e{set ngForOf(i){this._ngForOf=i,this._ngForOfDirty=!0}set ngForTrackBy(i){this._trackByFn=i}get ngForTrackBy(){return this._trackByFn}constructor(i,r,o){this._viewContainer=i,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(i){i&&(this._template=i)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let i=this._ngForOf;if(!this._differ&&i)if(0)try{}catch{}else this._differ=this._differs.find(i).create(this.ngForTrackBy)}if(this._differ){let i=this._differ.diff(this._ngForOf);i&&this._applyChanges(i)}}_applyChanges(i){let r=this._viewContainer;i.forEachOperation((o,s,c)=>{if(o.previousIndex==null)r.createEmbeddedView(this._template,new hc(o.item,this._ngForOf,-1,-1),c===null?void 0:c);else if(c==null)r.remove(s===null?void 0:s);else if(s!==null){let u=r.get(s);r.move(u,c),mh(u,o)}});for(let o=0,s=r.length;o<s;o++){let u=r.get(o).context;u.index=o,u.count=s,u.ngForOf=this._ngForOf}i.forEachIdentityChange(o=>{let s=r.get(o.currentIndex);mh(s,o)})}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(tt($t),tt(An),tt(ic))},e.\u0275dir=eo({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function mh(t,e){t.context.$implicit=e.item}var Ih="browser",PC="server";function gc(t){return t===PC}var Eo=class{};var yc=class{};var Fn=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let i=n.indexOf(":");if(i>0){let r=n.slice(0,i),o=r.toLowerCase(),s=n.slice(i+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(s):this.headers.set(o,[s])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,i)=>{this.setHeaderEntries(i,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,i])=>{this.setHeaderEntries(n,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,n);let r=(e.op==="a"?this.headers.get(n):void 0)||[];r.push(...i),this.headers.set(n,r);break;case"d":let o=e.value;if(!o)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(c=>o.indexOf(c)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}setHeaderEntries(e,n){let i=(Array.isArray(n)?n:[n]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var Cc=class{encodeKey(e){return Mh(e)}encodeValue(e){return Mh(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function TC(t,e){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,c]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],u=n.get(s)||[];u.push(c),n.set(s,u)}),n}var AC=/%(\d[a-f0-9])/gi,NC={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Mh(t){return encodeURIComponent(t).replace(AC,(e,n)=>NC[n]??e)}function wo(t){return`${t}`}var Tt=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Cc,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=TC(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let i=e.fromObject[n],r=Array.isArray(i)?i.map(wo):[wo(i)];this.map.set(n,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(o=>{n.push({param:i,value:o,op:"a"})}):n.push({param:i,value:r,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(i=>n+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(wo(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(wo(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var bc=class{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function RC(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Sh(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Oh(t){return typeof Blob<"u"&&t instanceof Blob}function Ph(t){return typeof FormData<"u"&&t instanceof FormData}function _C(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Si=class t{constructor(e,n,i,r){this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(RC(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Fn,this.context??=new bc,!this.params)this.params=new Tt,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),u=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+u+s}}}serializeBody(){return this.body===null?null:Sh(this.body)||Oh(this.body)||Ph(this.body)||_C(this.body)||typeof this.body=="string"?this.body:this.body instanceof Tt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ph(this.body)?null:Oh(this.body)?this.body.type||null:Sh(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Tt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let n=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,s=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,c=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,u=e.headers||this.headers,f=e.params||this.params,g=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((y,b)=>y.set(b,e.setHeaders[b]),u)),e.setParams&&(f=Object.keys(e.setParams).reduce((y,b)=>y.set(b,e.setParams[b]),f)),new t(n,i,o,{params:f,headers:u,context:g,reportProgress:c,responseType:r,withCredentials:s})}},Th=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Th||{}),Ec=class{constructor(e,n=Ah.Ok,i="OK"){this.headers=e.headers||new Fn,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var xc=class t extends Ec{constructor(e={}){super(e),this.type=Th.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var Ah=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(Ah||{});function vc(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Nh=(()=>{let e=class e{constructor(i){this.handler=i}request(i,r,o={}){let s;if(i instanceof Si)s=i;else{let f;o.headers instanceof Fn?f=o.headers:f=new Fn(o.headers);let g;o.params&&(o.params instanceof Tt?g=o.params:g=new Tt({fromObject:o.params})),s=new Si(i,r,o.body!==void 0?o.body:null,{headers:f,context:o.context,params:g,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let c=T(s).pipe(wt(f=>this.handler.handle(f)));if(i instanceof Si||o.observe==="events")return c;let u=c.pipe(Ee(f=>f instanceof xc));switch(o.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return u.pipe(_(f=>{if(f.body!==null&&!(f.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return f.body}));case"blob":return u.pipe(_(f=>{if(f.body!==null&&!(f.body instanceof Blob))throw new Error("Response is not a Blob.");return f.body}));case"text":return u.pipe(_(f=>{if(f.body!==null&&typeof f.body!="string")throw new Error("Response is not a string.");return f.body}));case"json":default:return u.pipe(_(f=>f.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(i,r={}){return this.request("DELETE",i,r)}get(i,r={}){return this.request("GET",i,r)}head(i,r={}){return this.request("HEAD",i,r)}jsonp(i,r){return this.request("JSONP",i,{params:new Tt().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(i,r={}){return this.request("OPTIONS",i,r)}patch(i,r,o={}){return this.request("PATCH",i,vc(o,r))}post(i,r,o={}){return this.request("POST",i,vc(o,r))}put(i,r,o={}){return this.request("PUT",i,vc(o,r))}};e.\u0275fac=function(r){return new(r||e)(L(yc))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})();var Ic=class extends bo{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Mc=class t extends Ic{static makeCurrent(){Ch(new t)}onAndCancel(e,n,i){return e.addEventListener(n,i),()=>{e.removeEventListener(n,i)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=FC();return n==null?null:LC(n)}resetBaseElement(){Oi=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return wh(document.cookie,e)}},Oi=null;function FC(){return Oi=Oi||document.querySelector("base"),Oi?Oi.getAttribute("href"):null}function LC(t){return new URL(t,document.baseURI).pathname}var jC=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),Sc=new H(""),Fh=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(o=>{o.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,o){return this._findPluginFor(r).addEventListener(i,r,o)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(s=>s.supports(i)),!r)throw new P(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(L(Sc),L(K))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),Do=class{constructor(e){this._doc=e}},wc="ng-app-id",Lh=(()=>{let e=class e{constructor(i,r,o,s={}){this.doc=i,this.appId=r,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=gc(s),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(o=>o.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${wc}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(i,r){let o=this.styleRef;if(o.has(i)){let s=o.get(i);return s.usage+=r,s.usage}return o.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let o=this.styleNodesInDOM,s=o?.get(r);if(s?.parentNode===i)return o.delete(r),s.removeAttribute(wc),s;{let c=this.doc.createElement("style");return this.nonce&&c.setAttribute("nonce",this.nonce),c.textContent=r,this.platformIsServer&&c.setAttribute(wc,this.appId),i.appendChild(c),c}}addStyleToHost(i,r){let o=this.getStyleElement(i,r),s=this.styleRef,c=s.get(r)?.elements;c?c.push(o):s.set(r,{elements:[o],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(L(ke),L(_a),L(Fa,8),L(Rn))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),Dc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Pc=/%COMP%/g,jh="%COMP%",BC=`_nghost-${jh}`,VC=`_ngcontent-${jh}`,UC=!0,HC=new H("",{providedIn:"root",factory:()=>UC});function zC(t){return VC.replace(Pc,t)}function QC(t){return BC.replace(Pc,t)}function Bh(t,e){return e.map(n=>n.replace(Pc,t))}var Rh=(()=>{let e=class e{constructor(i,r,o,s,c,u,f,g=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=c,this.platformId=u,this.ngZone=f,this.nonce=g,this.rendererByCompId=new Map,this.platformIsServer=gc(u),this.defaultRenderer=new Pi(i,c,f,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Ke.ShadowDom&&(r=W(M({},r),{encapsulation:Ke.Emulated}));let o=this.getOrCreateRenderer(i,r);return o instanceof Io?o.applyToHost(i):o instanceof Ti&&o.applyStyles(),o}getOrCreateRenderer(i,r){let o=this.rendererByCompId,s=o.get(r.id);if(!s){let c=this.doc,u=this.ngZone,f=this.eventManager,g=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,b=this.platformIsServer;switch(r.encapsulation){case Ke.Emulated:s=new Io(f,g,r,this.appId,y,c,u,b);break;case Ke.ShadowDom:return new Oc(f,g,i,r,c,u,this.nonce,b);default:s=new Ti(f,g,r,y,c,u,b);break}o.set(r.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(L(Fh),L(Lh),L(_a),L(HC),L(ke),L(Rn),L(K),L(Fa))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),Pi=class{constructor(e,n,i,r){this.eventManager=e,this.doc=n,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,n){return n?this.doc.createElementNS(Dc[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(_h(e)?e.content:e).appendChild(n)}insertBefore(e,n,i){e&&(_h(e)?e.content:e).insertBefore(n,i)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new P(-5104,!1);return n||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,i,r){if(r){n=r+":"+n;let o=Dc[r];o?e.setAttributeNS(o,n,i):e.setAttribute(n,i)}else e.setAttribute(n,i)}removeAttribute(e,n,i){if(i){let r=Dc[i];r?e.removeAttributeNS(r,n):e.removeAttribute(`${i}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,i,r){r&(Jt.DashCase|Jt.Important)?e.style.setProperty(n,i,r&Jt.Important?"important":""):e.style[n]=i}removeStyle(e,n,i){i&Jt.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,i){e!=null&&(e[n]=i)}setValue(e,n){e.nodeValue=n}listen(e,n,i){if(typeof e=="string"&&(e=kn().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${n}`);return this.eventManager.addEventListener(e,n,this.decoratePreventDefault(i))}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(n)):e(n))===!1&&n.preventDefault()}}};function _h(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Oc=class extends Pi{constructor(e,n,i,r,o,s,c,u){super(e,o,s,u),this.sharedStylesHost=n,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=Bh(r.id,r.styles);for(let g of f){let y=document.createElement("style");c&&y.setAttribute("nonce",c),y.textContent=g,this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,i){return super.insertBefore(this.nodeOrShadowRoot(e),n,i)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ti=class extends Pi{constructor(e,n,i,r,o,s,c,u){super(e,o,s,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=r,this.styles=u?Bh(u,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Io=class extends Ti{constructor(e,n,i,r,o,s,c,u){let f=r+"-"+i.id;super(e,n,i,o,s,c,u,f),this.contentAttr=zC(f),this.hostAttr=QC(f)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let i=super.createElement(e,n);return super.setAttribute(i,this.contentAttr,""),i}},qC=(()=>{let e=class e extends Do{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,o){return i.addEventListener(r,o,!1),()=>this.removeEventListener(i,r,o)}removeEventListener(i,r,o){return i.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(L(ke))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})(),kh=["alt","control","meta","shift"],GC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},YC={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},WC=(()=>{let e=class e extends Do{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,o){let s=e.parseEventName(r),c=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>kn().onAndCancel(i,s.domEventName,c))}static parseEventName(i){let r=i.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let s=e._normalizeKey(r.pop()),c="",u=r.indexOf("code");if(u>-1&&(r.splice(u,1),c="code."),kh.forEach(g=>{let y=r.indexOf(g);y>-1&&(r.splice(y,1),c+=g+".")}),c+=s,r.length!=0||s.length===0)return null;let f={};return f.domEventName=o,f.fullKey=c,f}static matchEventFullKeyCode(i,r){let o=GC[i.key]||i.key,s="";return r.indexOf("code.")>-1&&(o=i.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),kh.forEach(c=>{if(c!==o){let u=YC[c];u(i)&&(s+=c+".")}}),s+=o,s===r)}static eventCallback(i,r,o){return s=>{e.matchEventFullKeyCode(s,i)&&o.runGuarded(()=>r(s))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(L(ke))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})();function Vh(t,e){return fh(M({rootComponent:t},XC(e)))}function XC(t){return{appProviders:[...e1,...t?.providers??[]],platformProviders:$C}}function KC(){Mc.makeCurrent()}function JC(){return new pt}function ZC(){return _d(document),document}var $C=[{provide:Rn,useValue:Ih},{provide:ka,useValue:KC,multi:!0},{provide:ke,useFactory:ZC,deps:[]}];var e1=[{provide:so,useValue:"root"},{provide:pt,useFactory:JC,deps:[]},{provide:Sc,useClass:qC,multi:!0,deps:[ke,K,Rn]},{provide:Sc,useClass:WC,multi:!0,deps:[ke]},Rh,Lh,Fh,{provide:hi,useExisting:Rh},{provide:Eo,useClass:jC,deps:[]},[]];var Uh=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(L(ke))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var N="primary",qi=Symbol("RouteTitle"),_c=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n[0]:n}return null}getAll(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Un(t){return new _c(t)}function n1(t,e,n){let i=n.path.split("/");if(i.length>t.length||n.pathMatch==="full"&&(e.hasChildren()||i.length<t.length))return null;let r={};for(let o=0;o<i.length;o++){let s=i[o],c=t[o];if(s.startsWith(":"))r[s.substring(1)]=c;else if(s!==c.path)return null}return{consumed:t.slice(0,i.length),posParams:r}}function i1(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!it(t[n],e[n]))return!1;return!0}function it(t,e){let n=t?kc(t):void 0,i=e?kc(e):void 0;if(!n||!i||n.length!=i.length)return!1;let r;for(let o=0;o<n.length;o++)if(r=n[o],!Yh(t[r],e[r]))return!1;return!0}function kc(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Yh(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let n=[...t].sort(),i=[...e].sort();return n.every((r,o)=>i[o]===r)}else return t===e}function Wh(t){return t.length>0?t[t.length-1]:null}function Rt(t){return gs(t)?t:Di(t)?X(Promise.resolve(t)):T(t)}var r1={exact:Kh,subset:Jh},Xh={exact:o1,subset:s1,ignored:()=>!0};function Hh(t,e,n){return r1[n.paths](t.root,e.root,n.matrixParams)&&Xh[n.queryParams](t.queryParams,e.queryParams)&&!(n.fragment==="exact"&&t.fragment!==e.fragment)}function o1(t,e){return it(t,e)}function Kh(t,e,n){if(!nn(t.segments,e.segments)||!Oo(t.segments,e.segments,n)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!t.children[i]||!Kh(t.children[i],e.children[i],n))return!1;return!0}function s1(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>Yh(t[n],e[n]))}function Jh(t,e,n){return Zh(t,e,e.segments,n)}function Zh(t,e,n,i){if(t.segments.length>n.length){let r=t.segments.slice(0,n.length);return!(!nn(r,n)||e.hasChildren()||!Oo(r,n,i))}else if(t.segments.length===n.length){if(!nn(t.segments,n)||!Oo(t.segments,n,i))return!1;for(let r in e.children)if(!t.children[r]||!Jh(t.children[r],e.children[r],i))return!1;return!0}else{let r=n.slice(0,t.segments.length),o=n.slice(t.segments.length);return!nn(t.segments,r)||!Oo(t.segments,r,i)||!t.children[N]?!1:Zh(t.children[N],e,o,i)}}function Oo(t,e,n){return e.every((i,r)=>Xh[n](t[r].parameters,i.parameters))}var At=class{constructor(e=new Q([],{}),n={},i=null){this.root=e,this.queryParams=n,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){return l1.serialize(this)}},Q=class{constructor(e,n){this.segments=e,this.children=n,this.parent=null,Object.values(n).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Po(this)}},tn=class{constructor(e,n){this.path=e,this.parameters=n}get parameterMap(){return this._parameterMap??=Un(this.parameters),this._parameterMap}toString(){return ep(this)}};function a1(t,e){return nn(t,e)&&t.every((n,i)=>it(n.parameters,e[i].parameters))}function nn(t,e){return t.length!==e.length?!1:t.every((n,i)=>n.path===e[i].path)}function c1(t,e){let n=[];return Object.entries(t.children).forEach(([i,r])=>{i===N&&(n=n.concat(e(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==N&&(n=n.concat(e(r,i)))}),n}var al=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>new Ao,providedIn:"root"});let t=e;return t})(),Ao=class{parse(e){let n=new Lc(e);return new At(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(e){let n=`/${Ai(e.root,!0)}`,i=f1(e.queryParams),r=typeof e.fragment=="string"?`#${u1(e.fragment)}`:"";return`${n}${i}${r}`}},l1=new Ao;function Po(t){return t.segments.map(e=>ep(e)).join("/")}function Ai(t,e){if(!t.hasChildren())return Po(t);if(e){let n=t.children[N]?Ai(t.children[N],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==N&&i.push(`${r}:${Ai(o,!1)}`)}),i.length>0?`${n}(${i.join("//")})`:n}else{let n=c1(t,(i,r)=>r===N?[Ai(t.children[N],!1)]:[`${r}:${Ai(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[N]!=null?`${Po(t)}/${n[0]}`:`${Po(t)}/(${n.join("//")})`}}function $h(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Mo(t){return $h(t).replace(/%3B/gi,";")}function u1(t){return encodeURI(t)}function Fc(t){return $h(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function To(t){return decodeURIComponent(t)}function zh(t){return To(t.replace(/\+/g,"%20"))}function ep(t){return`${Fc(t.path)}${d1(t.parameters)}`}function d1(t){return Object.entries(t).map(([e,n])=>`;${Fc(e)}=${Fc(n)}`).join("")}function f1(t){let e=Object.entries(t).map(([n,i])=>Array.isArray(i)?i.map(r=>`${Mo(n)}=${Mo(r)}`).join("&"):`${Mo(n)}=${Mo(i)}`).filter(n=>n);return e.length?`?${e.join("&")}`:""}var h1=/^[^\/()?;#]+/;function Tc(t){let e=t.match(h1);return e?e[0]:""}var p1=/^[^\/()?;=#]+/;function m1(t){let e=t.match(p1);return e?e[0]:""}var g1=/^[^=?&#]+/;function v1(t){let e=t.match(g1);return e?e[0]:""}var y1=/^[^&#]+/;function C1(t){let e=t.match(y1);return e?e[0]:""}var Lc=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(n).length>0)&&(i[N]=new Q(e,n)),i}parseSegment(){let e=Tc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new P(4009,!1);return this.capture(e),new tn(To(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let n=m1(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let r=Tc(this.remaining);r&&(i=r,this.capture(i))}e[To(n)]=To(i)}parseQueryParam(e){let n=v1(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let s=C1(this.remaining);s&&(i=s,this.capture(i))}let r=zh(n),o=zh(i);if(e.hasOwnProperty(r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Tc(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new P(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=N);let s=this.parseChildren();n[o]=Object.keys(s).length===1?s[N]:new Q([],s),this.consumeOptional("//")}return n}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new P(4011,!1)}};function tp(t){return t.segments.length>0?new Q([],{[N]:t}):t}function np(t){let e={};for(let[i,r]of Object.entries(t.children)){let o=np(r);if(i===N&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))e[s]=c;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let n=new Q(t.segments,e);return b1(n)}function b1(t){if(t.numberOfChildren===1&&t.children[N]){let e=t.children[N];return new Q(t.segments.concat(e.segments),e.children)}return t}function Hn(t){return t instanceof At}function E1(t,e,n=null,i=null){let r=ip(t);return rp(r,e,n,i)}function ip(t){let e;function n(o){let s={};for(let u of o.children){let f=n(u);s[u.outlet]=f}let c=new Q(o.url,s);return o===t&&(e=c),c}let i=n(t.root),r=tp(i);return e??r}function rp(t,e,n,i){let r=t;for(;r.parent;)r=r.parent;if(e.length===0)return Ac(r,r,r,n,i);let o=x1(e);if(o.toRoot())return Ac(r,r,new Q([],{}),n,i);let s=w1(o,r,t),c=s.processChildren?_i(s.segmentGroup,s.index,o.commands):sp(s.segmentGroup,s.index,o.commands);return Ac(r,s.segmentGroup,c,n,i)}function No(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Li(t){return typeof t=="object"&&t!=null&&t.outlets}function Ac(t,e,n,i,r){let o={};i&&Object.entries(i).forEach(([u,f])=>{o[u]=Array.isArray(f)?f.map(g=>`${g}`):`${f}`});let s;t===e?s=n:s=op(t,e,n);let c=tp(np(s));return new At(c,o,r)}function op(t,e,n){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===e?i[r]=n:i[r]=op(o,e,n)}),new Q(t.segments,i)}var Ro=class{constructor(e,n,i){if(this.isAbsolute=e,this.numberOfDoubleDots=n,this.commands=i,e&&i.length>0&&No(i[0]))throw new P(4003,!1);let r=i.find(Li);if(r&&r!==Wh(i))throw new P(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function x1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Ro(!0,0,t);let e=0,n=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([u,f])=>{c[u]=typeof f=="string"?f.split("/"):f}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((c,u)=>{u==0&&c==="."||(u==0&&c===""?n=!0:c===".."?e++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new Ro(n,e,i)}var Bn=class{constructor(e,n,i){this.segmentGroup=e,this.processChildren=n,this.index=i}};function w1(t,e,n){if(t.isAbsolute)return new Bn(e,!0,0);if(!n)return new Bn(e,!1,NaN);if(n.parent===null)return new Bn(n,!0,0);let i=No(t.commands[0])?0:1,r=n.segments.length-1+i;return D1(n,r,t.numberOfDoubleDots)}function D1(t,e,n){let i=t,r=e,o=n;for(;o>r;){if(o-=r,i=i.parent,!i)throw new P(4005,!1);r=i.segments.length}return new Bn(i,!1,r-o)}function I1(t){return Li(t[0])?t[0].outlets:{[N]:t}}function sp(t,e,n){if(t??=new Q([],{}),t.segments.length===0&&t.hasChildren())return _i(t,e,n);let i=M1(t,e,n),r=n.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Q(t.segments.slice(0,i.pathIndex),{});return o.children[N]=new Q(t.segments.slice(i.pathIndex),t.children),_i(o,0,r)}else return i.match&&r.length===0?new Q(t.segments,{}):i.match&&!t.hasChildren()?jc(t,e,n):i.match?_i(t,0,r):jc(t,e,n)}function _i(t,e,n){if(n.length===0)return new Q(t.segments,{});{let i=I1(n),r={};if(Object.keys(i).some(o=>o!==N)&&t.children[N]&&t.numberOfChildren===1&&t.children[N].segments.length===0){let o=_i(t.children[N],e,n);return new Q(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=sp(t.children[o],e,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Q(t.segments,r)}}function M1(t,e,n){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=n.length)return o;let s=t.segments[r],c=n[i];if(Li(c))break;let u=`${c}`,f=i<n.length-1?n[i+1]:null;if(r>0&&u===void 0)break;if(u&&f&&typeof f=="object"&&f.outlets===void 0){if(!qh(u,f,s))return o;i+=2}else{if(!qh(u,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function jc(t,e,n){let i=t.segments.slice(0,e),r=0;for(;r<n.length;){let o=n[r];if(Li(o)){let u=S1(o.outlets);return new Q(i,u)}if(r===0&&No(n[0])){let u=t.segments[e];i.push(new tn(u.path,Qh(n[0]))),r++;continue}let s=Li(o)?o.outlets[N]:`${o}`,c=r<n.length-1?n[r+1]:null;s&&c&&No(c)?(i.push(new tn(s,Qh(c))),r+=2):(i.push(new tn(s,{})),r++)}return new Q(i,{})}function S1(t){let e={};return Object.entries(t).forEach(([n,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[n]=jc(new Q([],{}),0,i))}),e}function Qh(t){let e={};return Object.entries(t).forEach(([n,i])=>e[n]=`${i}`),e}function qh(t,e,n){return t==n.path&&it(e,n.parameters)}var ki="imperative",ce=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(ce||{}),Le=class{constructor(e,n){this.id=e,this.url=n}},ji=class extends Le{constructor(e,n,i="imperative",r=null){super(e,n),this.type=ce.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},rn=class extends Le{constructor(e,n,i){super(e,n),this.urlAfterRedirects=i,this.type=ce.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Fe=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Fe||{}),Bc=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Bc||{}),Nt=class extends Le{constructor(e,n,i,r){super(e,n),this.reason=i,this.code=r,this.type=ce.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},on=class extends Le{constructor(e,n,i,r){super(e,n),this.reason=i,this.code=r,this.type=ce.NavigationSkipped}},Bi=class extends Le{constructor(e,n,i,r){super(e,n),this.error=i,this.target=r,this.type=ce.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_o=class extends Le{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=ce.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vc=class extends Le{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=ce.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Uc=class extends Le{constructor(e,n,i,r,o){super(e,n),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o,this.type=ce.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Hc=class extends Le{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=ce.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zc=class extends Le{constructor(e,n,i,r){super(e,n),this.urlAfterRedirects=i,this.state=r,this.type=ce.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qc=class{constructor(e){this.route=e,this.type=ce.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},qc=class{constructor(e){this.route=e,this.type=ce.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Gc=class{constructor(e){this.snapshot=e,this.type=ce.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yc=class{constructor(e){this.snapshot=e,this.type=ce.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wc=class{constructor(e){this.snapshot=e,this.type=ce.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xc=class{constructor(e){this.snapshot=e,this.type=ce.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Vi=class{},Ui=class{constructor(e){this.url=e}};var Kc=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Vo,this.attachRef=null}},Vo=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let o=this.getOrCreateContext(i);o.outlet=r,this.contexts.set(i,o)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Kc,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ko=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let n=this.pathFromRoot(e);return n.length>1?n[n.length-2]:null}children(e){let n=Jc(e,this._root);return n?n.children.map(i=>i.value):[]}firstChild(e){let n=Jc(e,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(e){let n=Zc(e,this._root);return n.length<2?[]:n[n.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Zc(e,this._root).map(n=>n.value)}};function Jc(t,e){if(t===e.value)return e;for(let n of e.children){let i=Jc(t,n);if(i)return i}return null}function Zc(t,e){if(t===e.value)return[e];for(let n of e.children){let i=Zc(t,n);if(i.length)return i.unshift(e),i}return[]}var Se=class{constructor(e,n){this.value=e,this.children=n}toString(){return`TreeNode(${this.value})`}};function jn(t){let e={};return t&&t.children.forEach(n=>e[n.value.outlet]=n),e}var Fo=class extends ko{constructor(e,n){super(e),this.snapshot=n,ll(this,e)}toString(){return this.snapshot.toString()}};function ap(t){let e=O1(t),n=new se([new tn("",{})]),i=new se({}),r=new se({}),o=new se({}),s=new se(""),c=new zn(n,i,o,s,r,N,t,e.root);return c.snapshot=e.root,new Fo(new Se(c,[]),e)}function O1(t){let e={},n={},i={},r="",o=new Hi([],e,i,r,n,N,t,null,{});return new Lo("",new Se(o,[]))}var zn=class{constructor(e,n,i,r,o,s,c,u){this.urlSubject=e,this.paramsSubject=n,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(_(f=>f[qi]))??T(void 0),this.url=e,this.params=n,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(_(e=>Un(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(_(e=>Un(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function cl(t,e,n="emptyOnly"){let i,{routeConfig:r}=t;return e!==null&&(n==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:M(M({},e.params),t.params),data:M(M({},e.data),t.data),resolve:M(M(M(M({},t.data),e.data),r?.data),t._resolvedData)}:i={params:M({},t.params),data:M({},t.data),resolve:M(M({},t.data),t._resolvedData??{})},r&&lp(r)&&(i.resolve[qi]=r.title),i}var Hi=class{get title(){return this.data?.[qi]}constructor(e,n,i,r,o,s,c,u,f){this.url=e,this.params=n,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=c,this.routeConfig=u,this._resolve=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Un(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${n}')`}},Lo=class extends ko{constructor(e,n){super(n),this.url=e,ll(this,n)}toString(){return cp(this._root)}};function ll(t,e){e.value._routerState=t,e.children.forEach(n=>ll(t,n))}function cp(t){let e=t.children.length>0?` { ${t.children.map(cp).join(", ")} } `:"";return`${t.value}${e}`}function Nc(t){if(t.snapshot){let e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,it(e.queryParams,n.queryParams)||t.queryParamsSubject.next(n.queryParams),e.fragment!==n.fragment&&t.fragmentSubject.next(n.fragment),it(e.params,n.params)||t.paramsSubject.next(n.params),i1(e.url,n.url)||t.urlSubject.next(n.url),it(e.data,n.data)||t.dataSubject.next(n.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function $c(t,e){let n=it(t.params,e.params)&&a1(t.url,e.url),i=!t.parent!=!e.parent;return n&&!i&&(!t.parent||$c(t.parent,e.parent))}function lp(t){return typeof t.title=="string"||t.title===null}var P1=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=N,this.activateEvents=new Re,this.deactivateEvents=new Re,this.attachEvents=new Re,this.detachEvents=new Re,this.parentContexts=D(Vo),this.location=D($t),this.changeDetector=D(xi),this.environmentInjector=D(De),this.inputBinder=D(ul,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:o}=i.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new P(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new P(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new P(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new P(4013,!1);this._activatedRoute=i;let o=this.location,c=i.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,f=new el(i,u,o.injector);this.activated=o.createComponent(c,{index:o.length,injector:f,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=eo({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[ao]});let t=e;return t})(),el=class{constructor(e,n,i){this.route=e,this.childContexts=n,this.parent=i}get(e,n){return e===zn?this.route:e===Vo?this.childContexts:this.parent.get(e,n)}},ul=new H("");function T1(t,e,n){let i=zi(t,e._root,n?n._root:void 0);return new Fo(i,e)}function zi(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){let i=n.value;i._futureSnapshot=e.value;let r=A1(t,e,n);return new Se(i,r)}else{if(t.shouldAttach(e.value)){let o=t.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(c=>zi(t,c)),s}}let i=N1(e.value),r=e.children.map(o=>zi(t,o));return new Se(i,r)}}function A1(t,e,n){return e.children.map(i=>{for(let r of n.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return zi(t,i,r);return zi(t,i)})}function N1(t){return new zn(new se(t.url),new se(t.params),new se(t.queryParams),new se(t.fragment),new se(t.data),t.outlet,t.component,t)}var up="ngNavigationCancelingError";function dp(t,e){let{redirectTo:n,navigationBehaviorOptions:i}=Hn(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=fp(!1,Fe.Redirect);return r.url=n,r.navigationBehaviorOptions=i,r}function fp(t,e){let n=new Error(`NavigationCancelingError: ${t||""}`);return n[up]=!0,n.cancellationCode=e,n}function R1(t){return hp(t)&&Hn(t.url)}function hp(t){return!!t&&t[up]}var _1=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=$e({type:e,selectors:[["ng-component"]],standalone:!0,features:[Pt],decls:1,vars:0,template:function(r,o){r&1&&m(0,"router-outlet")},dependencies:[P1],encapsulation:2});let t=e;return t})();function k1(t,e){return t.providers&&!t._injector&&(t._injector=sc(t.providers,e,`Route: ${t.path}`)),t._injector??e}function dl(t){let e=t.children&&t.children.map(dl),n=e?W(M({},t),{children:e}):M({},t);return!n.component&&!n.loadComponent&&(e||n.loadChildren)&&n.outlet&&n.outlet!==N&&(n.component=_1),n}function rt(t){return t.outlet||N}function F1(t,e){let n=t.filter(i=>rt(i)===e);return n.push(...t.filter(i=>rt(i)!==e)),n}function Gi(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let n=e.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var L1=(t,e,n,i)=>_(r=>(new tl(e,r.targetRouterState,r.currentRouterState,n,i).activate(t),r)),tl=class{constructor(e,n,i,r,o){this.routeReuseStrategy=e,this.futureState=n,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let n=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,i,e),Nc(this.futureState.root),this.activateChildRoutes(n,i,e)}deactivateChildRoutes(e,n,i){let r=jn(n);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,n,i){let r=e.value,o=n?n.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,n,s.children)}else this.deactivateChildRoutes(e,n,i);else o&&this.deactivateRouteAndItsChildren(n,i)}deactivateRouteAndItsChildren(e,n){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,n):this.deactivateRouteAndOutlet(e,n)}detachAndStoreRouteSubtree(e,n){let i=n.getContext(e.value.outlet),r=i&&e.value.component?i.children:n,o=jn(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),c=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:c})}}deactivateRouteAndOutlet(e,n){let i=n.getContext(e.value.outlet),r=i&&e.value.component?i.children:n,o=jn(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,n,i){let r=jn(n);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Xc(o.value.snapshot))}),e.children.length&&this.forwardEvent(new Yc(e.value.snapshot))}activateRoutes(e,n,i){let r=e.value,o=n?n.value:null;if(Nc(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,n,s.children)}else this.activateChildRoutes(e,n,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),Nc(c.route.value),this.activateChildRoutes(e,null,s.children)}else{let c=Gi(r.snapshot);s.attachRef=null,s.route=r,s.injector=c,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}}else this.activateChildRoutes(e,null,i)}},jo=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Vn=class{constructor(e,n){this.component=e,this.route=n}};function j1(t,e,n){let i=t._root,r=e?e._root:null;return Ni(i,r,n,[i.value])}function B1(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function qn(t,e){let n=Symbol(),i=e.get(t,n);return i===n?typeof t=="function"&&!kd(t)?t:e.get(t):i}function Ni(t,e,n,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=jn(e);return t.children.forEach(s=>{V1(s,o[s.value.outlet],n,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>Fi(c,n.getContext(s),r)),r}function V1(t,e,n,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=e?e.value:null,c=n?n.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let u=U1(s,o,o.routeConfig.runGuardsAndResolvers);u?r.canActivateChecks.push(new jo(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ni(t,e,c?c.children:null,i,r):Ni(t,e,n,i,r),u&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Vn(c.outlet.component,s))}else s&&Fi(e,c,r),r.canActivateChecks.push(new jo(i)),o.component?Ni(t,null,c?c.children:null,i,r):Ni(t,null,n,i,r);return r}function U1(t,e,n){if(typeof n=="function")return n(t,e);switch(n){case"pathParamsChange":return!nn(t.url,e.url);case"pathParamsOrQueryParamsChange":return!nn(t.url,e.url)||!it(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!$c(t,e)||!it(t.queryParams,e.queryParams);case"paramsChange":default:return!$c(t,e)}}function Fi(t,e,n){let i=jn(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?e?Fi(s,e.children.getContext(o),n):Fi(s,null,n):Fi(s,e,n)}),r.component?e&&e.outlet&&e.outlet.isActivated?n.canDeactivateChecks.push(new Vn(e.outlet.component,r)):n.canDeactivateChecks.push(new Vn(null,r)):n.canDeactivateChecks.push(new Vn(null,r))}function Yi(t){return typeof t=="function"}function H1(t){return typeof t=="boolean"}function z1(t){return t&&Yi(t.canLoad)}function Q1(t){return t&&Yi(t.canActivate)}function q1(t){return t&&Yi(t.canActivateChild)}function G1(t){return t&&Yi(t.canDeactivate)}function Y1(t){return t&&Yi(t.canMatch)}function pp(t){return t instanceof lt||t?.name==="EmptyError"}var So=Symbol("INITIAL_VALUE");function Qn(){return Ae(t=>Ir(t.map(e=>e.pipe(ut(1),Es(So)))).pipe(_(e=>{for(let n of e)if(n!==!0){if(n===So)return So;if(n===!1||n instanceof At)return n}return!0}),Ee(e=>e!==So),ut(1)))}function W1(t,e){return ee(n=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=n;return s.length===0&&o.length===0?T(W(M({},n),{guardsResult:!0})):X1(s,i,r,t).pipe(ee(c=>c&&H1(c)?K1(i,o,t,e):T(c)),_(c=>W(M({},n),{guardsResult:c})))})}function X1(t,e,n,i){return X(t).pipe(ee(r=>tb(r.component,r.route,n,e,i)),Ye(r=>r!==!0,!0))}function K1(t,e,n,i){return X(e).pipe(wt(r=>vn(Z1(r.route.parent,i),J1(r.route,i),eb(t,r.path,n),$1(t,r.route,n))),Ye(r=>r!==!0,!0))}function J1(t,e){return t!==null&&e&&e(new Wc(t)),T(!0)}function Z1(t,e){return t!==null&&e&&e(new Gc(t)),T(!0)}function $1(t,e,n){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return T(!0);let r=i.map(o=>Mr(()=>{let s=Gi(e)??n,c=qn(o,s),u=Q1(c)?c.canActivate(e,t):Kt(s,()=>c(e,t));return Rt(u).pipe(Ye())}));return T(r).pipe(Qn())}function eb(t,e,n){let i=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(s=>B1(s)).filter(s=>s!==null).map(s=>Mr(()=>{let c=s.guards.map(u=>{let f=Gi(s.node)??n,g=qn(u,f),y=q1(g)?g.canActivateChild(i,t):Kt(f,()=>g(i,t));return Rt(y).pipe(Ye())});return T(c).pipe(Qn())}));return T(o).pipe(Qn())}function tb(t,e,n,i,r){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return T(!0);let s=o.map(c=>{let u=Gi(e)??r,f=qn(c,u),g=G1(f)?f.canDeactivate(t,e,n,i):Kt(u,()=>f(t,e,n,i));return Rt(g).pipe(Ye())});return T(s).pipe(Qn())}function nb(t,e,n,i){let r=e.canLoad;if(r===void 0||r.length===0)return T(!0);let o=r.map(s=>{let c=qn(s,t),u=z1(c)?c.canLoad(e,n):Kt(t,()=>c(e,n));return Rt(u)});return T(o).pipe(Qn(),mp(i))}function mp(t){return fs(te(e=>{if(Hn(e))throw dp(t,e)}),_(e=>e===!0))}function ib(t,e,n,i){let r=e.canMatch;if(!r||r.length===0)return T(!0);let o=r.map(s=>{let c=qn(s,t),u=Y1(c)?c.canMatch(e,n):Kt(t,()=>c(e,n));return Rt(u)});return T(o).pipe(Qn(),mp(i))}var Qi=class{constructor(e){this.segmentGroup=e||null}},Bo=class extends Error{constructor(e){super(),this.urlTree=e}};function Ln(t){return gn(new Qi(t))}function rb(t){return gn(new P(4e3,!1))}function ob(t){return gn(fp(!1,Fe.GuardRejected))}var nl=class{constructor(e,n){this.urlSerializer=e,this.urlTree=n}lineralizeSegments(e,n){let i=[],r=n.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return T(i);if(r.numberOfChildren>1||!r.children[N])return rb(e.redirectTo);r=r.children[N]}}applyRedirectCommands(e,n,i){let r=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),e,i);if(n.startsWith("/"))throw new Bo(r);return r}applyRedirectCreateUrlTree(e,n,i,r){let o=this.createSegmentGroup(e,n.root,i,r);return new At(o,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(e,n){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o.startsWith(":")){let c=o.substring(1);i[r]=n[c]}else i[r]=o}),i}createSegmentGroup(e,n,i,r){let o=this.createSegments(e,n.segments,i,r),s={};return Object.entries(n.children).forEach(([c,u])=>{s[c]=this.createSegmentGroup(e,u,i,r)}),new Q(o,s)}createSegments(e,n,i,r){return n.map(o=>o.path.startsWith(":")?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,n,i){let r=i[n.path.substring(1)];if(!r)throw new P(4001,!1);return r}findOrReturn(e,n){let i=0;for(let r of n){if(r.path===e.path)return n.splice(i),r;i++}return e}},il={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function sb(t,e,n,i,r){let o=fl(t,e,n);return o.matched?(i=k1(e,i),ib(i,e,n,r).pipe(_(s=>s===!0?o:M({},il)))):T(o)}function fl(t,e,n){if(e.path==="**")return ab(n);if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||n.length>0)?M({},il):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let r=(e.matcher||n1)(n,t,e);if(!r)return M({},il);let o={};Object.entries(r.posParams??{}).forEach(([c,u])=>{o[c]=u.path});let s=r.consumed.length>0?M(M({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:n.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function ab(t){return{matched:!0,parameters:t.length>0?Wh(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Gh(t,e,n,i){return n.length>0&&ub(t,n,i)?{segmentGroup:new Q(e,lb(i,new Q(n,t.children))),slicedSegments:[]}:n.length===0&&db(t,n,i)?{segmentGroup:new Q(t.segments,cb(t,n,i,t.children)),slicedSegments:n}:{segmentGroup:new Q(t.segments,t.children),slicedSegments:n}}function cb(t,e,n,i){let r={};for(let o of n)if(Uo(t,e,o)&&!i[rt(o)]){let s=new Q([],{});r[rt(o)]=s}return M(M({},i),r)}function lb(t,e){let n={};n[N]=e;for(let i of t)if(i.path===""&&rt(i)!==N){let r=new Q([],{});n[rt(i)]=r}return n}function ub(t,e,n){return n.some(i=>Uo(t,e,i)&&rt(i)!==N)}function db(t,e,n){return n.some(i=>Uo(t,e,i))}function Uo(t,e,n){return(t.hasChildren()||e.length>0)&&n.pathMatch==="full"?!1:n.path===""}function fb(t,e,n,i){return rt(t)!==i&&(i===N||!Uo(e,n,t))?!1:fl(e,t,n).matched}function hb(t,e,n){return e.length===0&&!t.children[n]}var rl=class{};function pb(t,e,n,i,r,o,s="emptyOnly"){return new ol(t,e,n,i,r,s,o).recognize()}var mb=31,ol=class{constructor(e,n,i,r,o,s,c){this.injector=e,this.configLoader=n,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.applyRedirects=new nl(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new P(4002,`'${e.segmentGroup}'`)}recognize(){let e=Gh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(_(n=>{let i=new Hi([],Object.freeze({}),Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,{},N,this.rootComponentType,null,{}),r=new Se(i,n),o=new Lo("",r),s=E1(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),this.inheritParamsAndData(o._root,null),{state:o,tree:s}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,N).pipe(xt(i=>{if(i instanceof Bo)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Qi?this.noMatchError(i):i}))}inheritParamsAndData(e,n){let i=e.value,r=cl(i,n,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(o=>this.inheritParamsAndData(o,i))}processSegmentGroup(e,n,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,n,i):this.processSegment(e,n,i,i.segments,r,!0).pipe(_(o=>o instanceof Se?[o]:[]))}processChildren(e,n,i){let r=[];for(let o of Object.keys(i.children))o==="primary"?r.unshift(o):r.push(o);return X(r).pipe(wt(o=>{let s=i.children[o],c=F1(n,o);return this.processSegmentGroup(e,c,s,o)}),bs((o,s)=>(o.push(...s),o)),Dt(null),Cs(),ee(o=>{if(o===null)return Ln(i);let s=gp(o);return gb(s),T(s)}))}processSegment(e,n,i,r,o,s){return X(n).pipe(wt(c=>this.processSegmentAgainstRoute(c._injector??e,n,c,i,r,o,s).pipe(xt(u=>{if(u instanceof Qi)return T(null);throw u}))),Ye(c=>!!c),xt(c=>{if(pp(c))return hb(i,r,o)?T(new rl):Ln(i);throw c}))}processSegmentAgainstRoute(e,n,i,r,o,s,c){return fb(i,r,o,s)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,o,s):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(e,r,n,i,o,s):Ln(r):Ln(r)}expandSegmentAgainstRouteUsingRedirect(e,n,i,r,o,s){let{matched:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:g}=fl(n,r,o);if(!c)return Ln(n);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>mb&&(this.allowRedirects=!1));let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f);return this.applyRedirects.lineralizeSegments(r,y).pipe(ee(b=>this.processSegment(e,i,n,b.concat(g),s,!1)))}matchSegmentAgainstRoute(e,n,i,r,o){let s=sb(n,i,r,e,this.urlSerializer);return i.path==="**"&&(n.children={}),s.pipe(Ae(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Ae(({routes:u})=>{let f=i._loadedInjector??e,{consumedSegments:g,remainingSegments:y,parameters:b}=c,x=new Hi(g,b,Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,yb(i),rt(i),i.component??i._loadedComponent??null,i,Cb(i)),{segmentGroup:I,slicedSegments:B}=Gh(n,g,y,u);if(B.length===0&&I.hasChildren())return this.processChildren(f,u,I).pipe(_(R=>R===null?null:new Se(x,R)));if(u.length===0&&B.length===0)return T(new Se(x,[]));let Z=rt(i)===o;return this.processSegment(f,u,I,B,Z?N:o,!0).pipe(_(R=>new Se(x,R instanceof Se?[R]:[])))}))):Ln(n)))}getChildConfig(e,n,i){return n.children?T({routes:n.children,injector:e}):n.loadChildren?n._loadedRoutes!==void 0?T({routes:n._loadedRoutes,injector:n._loadedInjector}):nb(e,n,i,this.urlSerializer).pipe(ee(r=>r?this.configLoader.loadChildren(e,n).pipe(te(o=>{n._loadedRoutes=o.routes,n._loadedInjector=o.injector})):ob(n))):T({routes:[],injector:e})}};function gb(t){t.sort((e,n)=>e.value.outlet===N?-1:n.value.outlet===N?1:e.value.outlet.localeCompare(n.value.outlet))}function vb(t){let e=t.value.routeConfig;return e&&e.path===""}function gp(t){let e=[],n=new Set;for(let i of t){if(!vb(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),n.add(r)):e.push(i)}for(let i of n){let r=gp(i.children);e.push(new Se(i.value,r))}return e.filter(i=>!n.has(i))}function yb(t){return t.data||{}}function Cb(t){return t.resolve||{}}function bb(t,e,n,i,r,o){return ee(s=>pb(t,e,n,i,s.extractedUrl,r,o).pipe(_(({state:c,tree:u})=>W(M({},s),{targetSnapshot:c,urlAfterRedirects:u}))))}function Eb(t,e){return ee(n=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=n;if(!r.length)return T(n);let o=new Set(r.map(u=>u.route)),s=new Set;for(let u of o)if(!s.has(u))for(let f of vp(u))s.add(f);let c=0;return X(s).pipe(wt(u=>o.has(u)?xb(u,i,t,e):(u.data=cl(u,u.parent,t).resolve,T(void 0))),te(()=>c++),Cn(1),ee(u=>c===s.size?T(n):Te))})}function vp(t){let e=t.children.map(n=>vp(n)).flat();return[t,...e]}function xb(t,e,n,i){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!lp(r)&&(o[qi]=r.title),wb(o,t,e,i).pipe(_(s=>(t._resolvedData=s,t.data=cl(t,t.parent,n).resolve,null)))}function wb(t,e,n,i){let r=kc(t);if(r.length===0)return T({});let o={};return X(r).pipe(ee(s=>Db(t[s],e,n,i).pipe(Ye(),te(c=>{o[s]=c}))),Cn(1),ys(o),xt(s=>pp(s)?Te:gn(s)))}function Db(t,e,n,i){let r=Gi(e)??i,o=qn(t,r),s=o.resolve?o.resolve(e,n):Kt(r,()=>o(e,n));return Rt(s)}function Rc(t){return Ae(e=>{let n=t(e);return n?X(n).pipe(_(()=>e)):T(e)})}var yp=(()=>{let e=class e{buildTitle(i){let r,o=i.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(s=>s.outlet===N);return r}getResolvedTitleForRoute(i){return i.data[qi]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(Ib),providedIn:"root"});let t=e;return t})(),Ib=(()=>{let e=class e extends yp{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(L(Uh))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),hl=new H("",{providedIn:"root",factory:()=>({})}),pl=new H(""),Mb=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=D(dc)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return T(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Rt(i.loadComponent()).pipe(_(Cp),te(s=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s}),yn(()=>{this.componentLoaders.delete(i)})),o=new mn(r,()=>new be).pipe(pn());return this.componentLoaders.set(i,o),o}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return T({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let s=Sb(r,this.compiler,i,this.onLoadEndListener).pipe(yn(()=>{this.childrenLoaders.delete(r)})),c=new mn(s,()=>new be).pipe(pn());return this.childrenLoaders.set(r,c),c}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Sb(t,e,n,i){return Rt(t.loadChildren()).pipe(_(Cp),ee(r=>r instanceof mi||Array.isArray(r)?T(r):X(e.compileModuleAsync(r))),_(r=>{i&&i(t);let o,s,c=!1;return Array.isArray(r)?(s=r,c=!0):(o=r.create(n).injector,s=o.get(pl,[],{optional:!0,self:!0}).flat()),{routes:s.map(dl),injector:o}}))}function Ob(t){return t&&typeof t=="object"&&"default"in t}function Cp(t){return Ob(t)?t.default:t}var ml=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(Pb),providedIn:"root"});let t=e;return t})(),Pb=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Tb=new H("");var Ab=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new be,this.transitionAbortSubject=new be,this.configLoader=D(Mb),this.environmentInjector=D(De),this.urlSerializer=D(al),this.rootContexts=D(Vo),this.location=D(Mi),this.inputBindingEnabled=D(ul,{optional:!0})!==null,this.titleStrategy=D(yp),this.options=D(hl,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=D(ml),this.createViewTransition=D(Tb,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>T(void 0),this.rootComponentType=null;let i=o=>this.events.next(new Qc(o)),r=o=>this.events.next(new qc(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(W(M(M({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,o){return this.transitions=new se({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:ki,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ee(s=>s.id!==0),_(s=>W(M({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Ae(s=>{this.currentTransition=s;let c=!1,u=!1;return T(s).pipe(te(f=>{this.currentNavigation={id:f.id,initialUrl:f.rawUrl,extractedUrl:f.extractedUrl,trigger:f.source,extras:f.extras,previousNavigation:this.lastSuccessfulNavigation?W(M({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Ae(f=>{let g=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),y=f.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!g&&y!=="reload"){let b="";return this.events.next(new on(f.id,this.urlSerializer.serialize(f.rawUrl),b,Bc.IgnoredSameUrlNavigation)),f.resolve(null),Te}if(this.urlHandlingStrategy.shouldProcessUrl(f.rawUrl))return T(f).pipe(Ae(b=>{let x=this.transitions?.getValue();return this.events.next(new ji(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),x!==this.transitions?.getValue()?Te:Promise.resolve(b)}),bb(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),te(b=>{s.targetSnapshot=b.targetSnapshot,s.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation=W(M({},this.currentNavigation),{finalUrl:b.urlAfterRedirects});let x=new _o(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);this.events.next(x)}));if(g&&this.urlHandlingStrategy.shouldProcessUrl(f.currentRawUrl)){let{id:b,extractedUrl:x,source:I,restoredState:B,extras:Z}=f,R=new ji(b,this.urlSerializer.serialize(x),I,B);this.events.next(R);let re=ap(this.rootComponentType).snapshot;return this.currentTransition=s=W(M({},f),{targetSnapshot:re,urlAfterRedirects:x,extras:W(M({},Z),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=x,T(s)}else{let b="";return this.events.next(new on(f.id,this.urlSerializer.serialize(f.extractedUrl),b,Bc.IgnoredByUrlHandlingStrategy)),f.resolve(null),Te}}),te(f=>{let g=new Vc(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(g)}),_(f=>(this.currentTransition=s=W(M({},f),{guards:j1(f.targetSnapshot,f.currentSnapshot,this.rootContexts)}),s)),W1(this.environmentInjector,f=>this.events.next(f)),te(f=>{if(s.guardsResult=f.guardsResult,Hn(f.guardsResult))throw dp(this.urlSerializer,f.guardsResult);let g=new Uc(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot,!!f.guardsResult);this.events.next(g)}),Ee(f=>f.guardsResult?!0:(this.cancelNavigationTransition(f,"",Fe.GuardRejected),!1)),Rc(f=>{if(f.guards.canActivateChecks.length)return T(f).pipe(te(g=>{let y=new Hc(g.id,this.urlSerializer.serialize(g.extractedUrl),this.urlSerializer.serialize(g.urlAfterRedirects),g.targetSnapshot);this.events.next(y)}),Ae(g=>{let y=!1;return T(g).pipe(Eb(this.paramsInheritanceStrategy,this.environmentInjector),te({next:()=>y=!0,complete:()=>{y||this.cancelNavigationTransition(g,"",Fe.NoDataFromResolver)}}))}),te(g=>{let y=new zc(g.id,this.urlSerializer.serialize(g.extractedUrl),this.urlSerializer.serialize(g.urlAfterRedirects),g.targetSnapshot);this.events.next(y)}))}),Rc(f=>{let g=y=>{let b=[];y.routeConfig?.loadComponent&&!y.routeConfig._loadedComponent&&b.push(this.configLoader.loadComponent(y.routeConfig).pipe(te(x=>{y.component=x}),_(()=>{})));for(let x of y.children)b.push(...g(x));return b};return Ir(g(f.targetSnapshot.root)).pipe(Dt(null),ut(1))}),Rc(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:f,targetSnapshot:g}=s,y=this.createViewTransition?.(this.environmentInjector,f.root,g.root);return y?X(y).pipe(_(()=>s)):T(s)}),_(f=>{let g=T1(i.routeReuseStrategy,f.targetSnapshot,f.currentRouterState);return this.currentTransition=s=W(M({},f),{targetRouterState:g}),this.currentNavigation.targetRouterState=g,s}),te(()=>{this.events.next(new Vi)}),L1(this.rootContexts,i.routeReuseStrategy,f=>this.events.next(f),this.inputBindingEnabled),ut(1),te({next:f=>{c=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new rn(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects))),this.titleStrategy?.updateTitle(f.targetRouterState.snapshot),f.resolve(!0)},complete:()=>{c=!0}}),xs(this.transitionAbortSubject.pipe(te(f=>{throw f}))),yn(()=>{!c&&!u&&this.cancelNavigationTransition(s,"",Fe.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),xt(f=>{if(u=!0,hp(f))this.events.next(new Nt(s.id,this.urlSerializer.serialize(s.extractedUrl),f.message,f.cancellationCode)),R1(f)?this.events.next(new Ui(f.url)):s.resolve(!1);else{this.events.next(new Bi(s.id,this.urlSerializer.serialize(s.extractedUrl),f,s.targetSnapshot??void 0));try{s.resolve(i.errorHandler(f))}catch(g){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(g)}}return Te}))}))}cancelNavigationTransition(i,r,o){let s=new Nt(i.id,this.urlSerializer.serialize(i.extractedUrl),r,o);this.events.next(s),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Nb(t){return t!==ki}var Rb=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(_b),providedIn:"root"});let t=e;return t})(),sl=class{shouldDetach(e){return!1}store(e,n){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,n){return e.routeConfig===n.routeConfig}},_b=(()=>{let e=class e extends sl{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=qa(e)))(o||e)}})(),e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),bp=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:()=>D(kb),providedIn:"root"});let t=e;return t})(),kb=(()=>{let e=class e extends bp{constructor(){super(...arguments),this.location=D(Mi),this.urlSerializer=D(al),this.options=D(hl,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=D(ml),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new At,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=ap(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof ji)this.stateMemento=this.createStateMemento();else if(i instanceof on)this.rawUrlTree=r.initialUrl;else if(i instanceof _o){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(o,r)}}else i instanceof Vi?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Nt&&(i.code===Fe.GuardRejected||i.code===Fe.NoDataFromResolver)?this.restoreHistory(r):i instanceof Bi?this.restoreHistory(r,!0):i instanceof rn&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let o=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let s=this.browserPageId,c=M(M({},r.extras.state),this.generateNgRouterState(r.id,s));this.location.replaceState(o,"",c)}else{let s=M(M({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",s)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,s=this.currentPageId-o;s!==0?this.location.historyGo(s):this.currentUrlTree===i.finalUrl&&s===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=qa(e)))(o||e)}})(),e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ri=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Ri||{});function Fb(t,e){t.events.pipe(Ee(n=>n instanceof rn||n instanceof Nt||n instanceof Bi||n instanceof on),_(n=>n instanceof rn||n instanceof on?Ri.COMPLETE:(n instanceof Nt?n.code===Fe.Redirect||n.code===Fe.SupersededByNewNavigation:!1)?Ri.REDIRECTING:Ri.FAILED),Ee(n=>n!==Ri.REDIRECTING),ut(1)).subscribe(()=>{e()})}function Lb(t){throw t}var jb={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Bb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ep=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=D(Co),this.stateManager=D(bp),this.options=D(hl,{optional:!0})||{},this.pendingTasks=D(vo),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=D(Ab),this.urlSerializer=D(al),this.location=D(Mi),this.urlHandlingStrategy=D(ml),this._events=new be,this.errorHandler=this.options.errorHandler||Lb,this.navigated=!1,this.routeReuseStrategy=D(Rb),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=D(pl,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!D(ul,{optional:!0}),this.eventsSubscription=new $,this.isNgZoneEnabled=D(K)instanceof K&&K.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(o!==null&&s!==null){if(this.stateManager.handleRouterEvent(r,s),r instanceof Nt&&r.code!==Fe.Redirect&&r.code!==Fe.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof rn)this.navigated=!0;else if(r instanceof Ui){let c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),u={info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||Nb(o.source)};this.scheduleNavigation(c,ki,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Ub(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ki,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,o){let s={replaceUrl:!0},c=o?.navigationId?o:null;if(o){let f=M({},o);delete f.navigationId,delete f.\u0275routerPageId,Object.keys(f).length!==0&&(s.state=f)}let u=this.parseUrl(i);this.scheduleNavigation(u,r,c,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(dl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:o,queryParams:s,fragment:c,queryParamsHandling:u,preserveFragment:f}=r,g=f?this.currentUrlTree.fragment:c,y=null;switch(u){case"merge":y=M(M({},this.currentUrlTree.queryParams),s);break;case"preserve":y=this.currentUrlTree.queryParams;break;default:y=s||null}y!==null&&(y=this.removeEmptyProps(y));let b;try{let x=o?o.snapshot:this.routerState.snapshot.root;b=ip(x)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),b=this.currentUrlTree.root}return rp(b,i,y,g??null)}navigateByUrl(i,r={skipLocationChange:!1}){let o=Hn(i)?i:this.parseUrl(i),s=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(s,ki,null,r)}navigate(i,r={skipLocationChange:!1}){return Vb(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let o;if(r===!0?o=M({},jb):r===!1?o=M({},Bb):o=r,Hn(i))return Hh(this.currentUrlTree,i,o);let s=this.parseUrl(i);return Hh(this.currentUrlTree,s,o)}removeEmptyProps(i){return Object.entries(i).reduce((r,[o,s])=>(s!=null&&(r[o]=s),r),{})}scheduleNavigation(i,r,o,s,c){if(this.disposed)return Promise.resolve(!1);let u,f,g;c?(u=c.resolve,f=c.reject,g=c.promise):g=new Promise((b,x)=>{u=b,f=x});let y=this.pendingTasks.add();return Fb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(y))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:s,resolve:u,reject:f,promise:g,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),g.catch(b=>Promise.reject(b))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Vb(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new P(4008,!1)}function Ub(t){return!(t instanceof Vi)&&!(t instanceof Ui)}var Hb=new H("");function xp(t,...e){return oo([{provide:pl,multi:!0,useValue:t},[],{provide:zn,useFactory:zb,deps:[Ep]},{provide:uc,multi:!0,useFactory:Qb},e.map(n=>n.\u0275providers)])}function zb(t){return t.routerState.root}function Qb(){let t=D(bi);return e=>{let n=t.get(Ii);if(e!==n.components[0])return;let i=t.get(Ep),r=t.get(qb);t.get(Gb)===1&&i.initialNavigation(),t.get(Yb,null,k.Optional)?.setUpPreloading(),t.get(Hb,null,k.Optional)?.init(),i.resetRootComponentType(n.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var qb=new H("",{factory:()=>new be}),Gb=new H("",{providedIn:"root",factory:()=>1});var Yb=new H("");var wp=(()=>{let e=class e{constructor(i){this.http=i,this.guid="",this.url=`https://api.aglty.io/${this.guid}/fetch/en-us/list/myblog`,this.apikey=""}getBlogs(){return this.http.get(this.url,{headers:{accept:"application/json",APIKey:this.apikey}})}};e.\u0275fac=function(r){return new(r||e)(L(Nh))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Dp=(()=>{let e=class e{constructor(i){this.blogs=[],i.getBlogs().subscribe(r=>{this.blogs=r.items.map(o=>o.fields),console.log(r)})}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)(tt(wp))},e.\u0275cmp=$e({type:e,selectors:[["app-blog"]],standalone:!0,features:[Pt],decls:221,vars:0,consts:[["http-equiv","Content-Type","content","text/html; charset=UTF-8"],["name","viewport","content","width=device-width, initial-scale=0.40, maximum-scale=1.5"],["name","description","content","theme_five"],["href",Ei`https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`,"rel","stylesheet","type","text/css"],[1,"page-header"],[1,"page-header-type"],[1,"page-header-type-value"],[1,"page-header-sub-type"],[1,"page-header-tagline-container"],["id","mbb-logo-container"],["href","https://mybillbook.sng.link/A1sl1/kmwx/t5ek","target","_blank"],["src","mbb_logo.svg","width","151px"],[1,"page-header-tagline-value"],["id","main-content"],["id","main-header"],[1,"page-header-space"],[1,"main-container"],[1,"page"],["id","company-details"],["id","company-details-meta","data-subsection-id","0",1,"business_details"],["id","company-logo-container"],["id","company-logo"],["id","company-details-content"],["id","company-name"],["id","company-address"],["id","company-highlight-label"],["id","company-contact-details"],["id","company-mobile-number-content"],["id","company-mobile-number"],["id","company-email-content"],["id","company-email"],["id","company-pan-number-content"],["id","company-pan-number"],["id","dummy-div"],["id","address-details"],["id","bill-to","data-subsection-id","2",1,"party_details"],["id","title-bill-to",1,"title-bill-ship-to"],["id","bill-to-company-name"],[1,"meta-bill-ship-to"],["id","bill-to-address-container"],[1,"field-bill-ship-to"],["id","bill-to-address"],["id","bill-to-mobile-container",1,"mr-4"],["id","bill-to-mobile"],["id","bill-to-pan-container"],["id","bill-to-pan"],["id","party-addn-field-container"],["id","invoice-details-meta"],["id","invoice-main-details"],["id","invoice-number-container"],["id","invoice-number-label"],["id","invoice-number"],["id","invoice-date-container"],["id","invoice-date-label"],["id","invoice-date"],["id","invoice-due-date-container"],["id","invoice-due-date-label"],["id","invoice-due-date"],["id","invoice-sub-details",1,"sub-details-class"],["id","invoice-addn-field-container-1"],["id","invoice-addn-field-name-1"],["id","invoice-addn-field-value-1"],["id","invoice-addn-field-container-2"],["id","invoice-addn-field-name-2"],["id","invoice-addn-field-value-2"],["id","invoice-addn-field-container-3"],["id","invoice-addn-field-name-3"],["id","invoice-addn-field-value-3"],["id","invoice-sub-details",1,"sub-details-class","sub-details-row"],["id","invoice-addn-field-container-4"],["id","invoice-addn-field-name-4"],["id","invoice-addn-field-value-4"],["id","invoice-addn-field-container-5"],["id","invoice-addn-field-name-5"],["id","invoice-addn-field-value-5"],["id","invoice-addn-field-container-6"],["id","invoice-addn-field-name-6"],["id","invoice-addn-field-value-6"],["id","items-table","data-subsection-id","3",1,"item_table"],["scope","col",1,"items-table-header"],["scope","col",1,"items-table-header","items-type-header"],["scope","col",1,"items-table-header","items-addn1-header","items-addn1-column"],["scope","col",1,"items-table-header","items-addn2-header","items-addn2-column"],["scope","col",1,"items-table-header","items-addn3-header","items-addn3-column"],["scope","col",1,"items-table-header","items-addn4-header","items-addn4-column"],["scope","col",1,"items-table-header","items-qty-column"],["scope","col",1,"items-table-header","items-mrp-header","items-mrp-column"],["scope","col",1,"items-table-header","items-rate-header","items-rate-column"],["scope","col",1,"items-table-header","items-discount-column"],["id","items-table-content"],[1,"bottom-content-container"],["id","amount-words-container","data-subsection-id","4",1,"amount_in_words"],["id","amount-words"],["id","amount-words-label"],["id","amount-words-value"],["id","foreign-amount-words"],["id","foreign-amount-words-label"],["id","foreign-amount-words-value"],[1,"misc-details-container"],["id","notes","data-subsection-id","5",1,"misc-details","notes"],["id","notes-label"],["id","notes-value"],["id","bank-details","data-subsection-id","6",1,"misc-details","bank_details"],["id","bank-details-label"],[1,"bank-details-info"],[1,"bank-details-info-label"],["id","bank-details-name",1,"bank-details-value"],["id","bank-details-ifsc",1,"bank-details-value"],["id","bank-details-account",1,"bank-details-value"],["id","bank-details-bank-name",1,"bank-details-value"],["id","upi-details",1,"misc-details"],["id","upi-details-container"],["id","upi-details-meta"],["id","upi-scan-label"],["id","upi-id-label"],["id","upi-id"],["id","mbb-pay"],["id","payment-link-container"],["id","payment-cta","target","_blank","href",""],["id","payment-link","target","_blank","href",""],["id","upi-apps"],["src","data:image/png;base64,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","height","10px"],["id","upi-qr-code-container"],["id","upi-qr-code"],["id","tnc","data-subsection-id","7",1,"misc-details","tnc"],["id","tnc-label"],["id","tnc-value"],["id","signature","data-subsection-id","8",1,"misc-details","signature"],["id","signature-img-container"],["id","signature-img"],["id","signature-label"],["id","signatory-name"],["id","e-invocing-container"],["id","e-invoice-qr-container"],["id","e-invoice-qr"],["id","e-invoicing-info-container"],["id","e-invoice-details"],["id","e-invoice-irn-container",1,"e-info-container"],[1,"e-info-label"],["id","e-invoice-irn",1,"e-info-value"],["id","e-invoice-ack-no-container",1,"e-info-container"],["id","e-invoice-ack-no",1,"e-info-value"],["id","e-invoice-ack-date-container",1,"e-info-container"],["id","e-invoice-ack-date",1,"e-info-value"],["id","e-invoice-description"],["id","main-footer"],[1,"page-footer-space"],[1,"page-footer"],["id","page-branding-container",1,"page-branding"],["src","data:image/png;base64,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","height","30mm"]],template:function(r,o){r&1&&(d(0,"html")(1,"head"),m(2,"meta",0)(3,"meta",1)(4,"meta",2)(5,"link",3),l(),d(6,"body")(7,"div",4)(8,"div",5),m(9,"div",6)(10,"div",7),l(),d(11,"div",8)(12,"div",9)(13,"a",10),m(14,"img",11),l()(),m(15,"div",12),l()(),d(16,"div",13)(17,"table")(18,"thead",14)(19,"tr")(20,"td"),m(21,"div",15),l()()(),d(22,"tbody")(23,"tr")(24,"td",16)(25,"div",17)(26,"div",18)(27,"div",19)(28,"div",20),m(29,"img",21),l(),d(30,"div",22),m(31,"div",23)(32,"div",24)(33,"div",25),d(34,"div",26)(35,"div",27)(36,"span"),a(37,"Mobile:"),l(),a(38,"\xA0 "),m(39,"span",28),l(),d(40,"div",29)(41,"span"),a(42,"Email:"),l(),a(43,"\xA0 "),m(44,"span",30),l(),d(45,"div",31)(46,"span"),a(47,"PAN Number:"),l(),a(48,"\xA0 "),m(49,"span",32),l()()(),m(50,"div",33),l()(),d(51,"div",34)(52,"div",35)(53,"div",36),a(54,"BILL TO"),l(),m(55,"div",37),d(56,"div",38)(57,"div",39)(58,"span",40),a(59,"Address:"),l(),m(60,"span",41),l(),d(61,"div")(62,"div",42)(63,"span",40),a(64,"Mobile:"),l(),m(65,"span",43),l(),d(66,"div",44)(67,"span",40),a(68,"PAN Number:"),l(),m(69,"span",45),l()(),m(70,"div",46),l()(),d(71,"div",47)(72,"div",48)(73,"div",49)(74,"div",50),a(75,"Invoice No."),l(),m(76,"div",51),l(),d(77,"div",52)(78,"div",53),a(79,"Invoice Date"),l(),m(80,"div",54),l(),d(81,"div",55)(82,"div",56),a(83,"Due Date"),l(),m(84,"div",57),l()(),d(85,"div",58)(86,"div",59),m(87,"div",60)(88,"div",61),l(),d(89,"div",62),m(90,"div",63)(91,"div",64),l(),d(92,"div",65),m(93,"div",66)(94,"div",67),l()(),d(95,"div",68)(96,"div",69),m(97,"div",70)(98,"div",71),l(),d(99,"div",72),m(100,"div",73)(101,"div",74),l(),d(102,"div",75),m(103,"div",76)(104,"div",77),l()()()(),d(105,"table",78)(106,"thead")(107,"tr")(108,"th",79),a(109,"S.NO."),l(),d(110,"th",80),a(111,"ITEMS"),l(),d(112,"th",81),a(113," ADDN1 "),l(),d(114,"th",82),a(115," ADDN2 "),l(),d(116,"th",83),a(117," ADDN3 "),l(),d(118,"th",84),a(119," ADDN4 "),l(),d(120,"th",85),a(121,"QTY."),l(),d(122,"th",86),a(123," MRP "),l(),d(124,"th",87),a(125," RATE "),l(),d(126,"th",88),a(127,"DISC."),l(),d(128,"th",79),a(129,"AMOUNT"),l()()(),m(130,"tbody",89),l(),d(131,"div",90)(132,"div",91)(133,"div",92)(134,"div",93),a(135,"Total Amount (in words)"),l(),m(136,"div",94),l(),d(137,"div",95)(138,"div",96),a(139,"Total Amount (in words)"),l(),m(140,"div",97),l()(),d(141,"div",98)(142,"div",99)(143,"div",100),a(144,"Notes"),l(),m(145,"div",101),l(),d(146,"div",102)(147,"div",103),a(148,"Bank Details"),l(),d(149,"div",104)(150,"div",105),a(151,"Name:"),l(),m(152,"div",106),l(),d(153,"div",104)(154,"div",105),a(155,"IFSC Code:"),l(),m(156,"div",107),l(),d(157,"div",104)(158,"div",105),a(159,"Account No:"),l(),m(160,"div",108),l(),d(161,"div",104)(162,"div",105),a(163,"Bank:"),l(),m(164,"div",109),l()(),d(165,"div",110)(166,"div",111)(167,"div",112)(168,"div",113),a(169,"Payment QR Code"),l(),d(170,"div",114),a(171,"UPI ID:"),l(),m(172,"div",115),d(173,"div",116)(174,"div",117)(175,"a",118),a(176,"PAY NOW >"),l(),m(177,"br")(178,"a",119),l()(),d(179,"div",120),m(180,"img",121),l()(),d(181,"div",122),m(182,"canvas",123),l()()(),d(183,"div",124)(184,"div",125),a(185,"Terms and Conditions"),l(),m(186,"div",126),l(),d(187,"div",127)(188,"div",128),m(189,"img",129),l(),d(190,"div",130),a(191,"Authorised Signatory For"),l(),m(192,"div",131),l()()(),d(193,"div",132)(194,"div",133),m(195,"canvas",134),l(),d(196,"div",135)(197,"div",136),a(198,"e-Invoice details"),l(),d(199,"div",137)(200,"div",138),a(201,"IRN:"),l(),m(202,"div",139),l(),d(203,"div",140)(204,"div",138),a(205,"Ack No:"),l(),m(206,"div",141),l(),d(207,"div",142)(208,"div",138),a(209,"Ack Date:"),l(),m(210,"div",143),l(),d(211,"div",144),a(212," e-Invoicing detail(s) generated from the Government's e-Invoicing system. "),l()()()()()()(),d(213,"tfoot",145)(214,"tr")(215,"td"),m(216,"div",146),l()()()()(),d(217,"div",147)(218,"div",148)(219,"a",10),m(220,"img",149),l()()()()())},styles:[`html[_ngcontent-%COMP%] {
  background-color: #f2f2f2;
}

body[_ngcontent-%COMP%] {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  background-color: white;
}

.page-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  font-size: 3.5mm;
  justify-content: center;
  font-weight: 500;
}

.page-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.5mm;
  font-weight: 500;
}

table[_ngcontent-%COMP%] {
  width: 100%;
}

.main-container[_ngcontent-%COMP%] {
  padding: 0 !important;
}

.page-header-type[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}

.page-header-type-value[_ngcontent-%COMP%] {
  margin-right: 10px;
}

.page-header-sub-type[_ngcontent-%COMP%] {
  border: 1px solid #868597;
  box-sizing: border-box;
  border-radius: 2px;
  color: #868597;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-right: 4px;
}

.page-header-tagline[_ngcontent-%COMP%] {
  font-weight: 500;
}

.page-header-tagline-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}



.text-small[_ngcontent-%COMP%] {
  font-size: 11px;
}

.text-smallest[_ngcontent-%COMP%] {
  font-size: 10px !important;
}



#company-details[_ngcontent-%COMP%] {
  border: 1px solid black;
  min-height: 25mm;
  display: flex;
}

#company-details-meta[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
}

.company-logo-container[_ngcontent-%COMP%] {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 1mm;
  object-fit: contain;
}

#company-logo[_ngcontent-%COMP%] {
  margin: 2.1mm;
  object-fit: contain;
}

#company-details-content[_ngcontent-%COMP%] {
  flex: 1;
  margin: 1mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

#company-name[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: #bf6200;
  margin-bottom: 0.5mm;
}

#company-address[_ngcontent-%COMP%] {
  font-size: 12px;
  margin-bottom: 1mm;
}

#company-contact-details[_ngcontent-%COMP%], #company-contact-details-2[_ngcontent-%COMP%], #company-email-content[_ngcontent-%COMP%], #company-pan-number-content[_ngcontent-%COMP%] {
  display: flex;
  font-size: 12px;
  align-items: center;
}

#company-gst-number-content[_ngcontent-%COMP%] {
  margin-right: 3mm;
}

#company-gst-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-mobile-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-email-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-pan-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-weight: 500;
}



#invoice-details-meta[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  flex: 1;
}

#invoice-main-details[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  font-weight: 600;
}

#invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-width: 33%;
}

#invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {
  font-weight: 400;
}

#invoice-sub-details[_ngcontent-%COMP%] {
  flex: 1;
  border-top: 1px solid black;
  display: flex;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
}

#invoice-sub-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  padding-top: 2mm;
  word-break: break-all;
  min-width: 20mm;
  margin: 0 2mm;
}

#invoice-sub-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {
  font-weight: 600;
}



#address-details[_ngcontent-%COMP%] {
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
}

.meta-bill-ship-to[_ngcontent-%COMP%] {
  font-size: 11px;
  padding-bottom: 8px;
  line-height: 14px;
}

.meta-bill-ship-to[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  margin-left: 2mm;
  margin-right: 2mm;
  margin-bottom: 2px;
  display: flex;
}

#bill-to[_ngcontent-%COMP%] {
  flex: 1;
}

#ship-to[_ngcontent-%COMP%] {
  flex: 1;
  border-left: 1px solid black;
}

.title-bill-ship-to[_ngcontent-%COMP%] {
  margin: 2mm;
  margin-bottom: 1mm;
  font-size: 3mm;
  font-weight: 500;
}

#bill-to-company-name[_ngcontent-%COMP%], #ship-to-company-name[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  margin-left: 2mm;
  margin-right: 2mm;
  margin-bottom: 1mm;
  text-transform: uppercase;
}

#bill-to-address[_ngcontent-%COMP%], #ship-to-address[_ngcontent-%COMP%] {
  word-break: break-word;
}

.field-bill-ship-to[_ngcontent-%COMP%] {
  margin-right: 1.5mm;
}

.mr-4[_ngcontent-%COMP%] {
  margin-right: 4mm;
}

#party-addn-field-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}

.party-addn-field[_ngcontent-%COMP%] {
  display: flex;
  font-size: 11px;
  line-height: 14px;
  flex-direction: row;
}



#items-table[_ngcontent-%COMP%] {
  border: 1px solid black;
  border-collapse: collapse;
  border-spacing: 0 !important;
  margin: 0;
  padding: 0;
}

#items-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  padding: 0.35em;
  page-break-inside: avoid;
}

#items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.625em;
  border-right: 1px solid black;
  max-width: 75mm;
  page-break-inside: avoid;
}

.items-table-header[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-bottom: 1px solid black;
  min-height: 5mm;
}

.items-table-info[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 400;
  justify-content: center;
  word-break: break-word;
  vertical-align: top;
  padding: 2mm;
  padding-top: 0.5mm;
  padding-bottom: 0.5mm;
  flex-direction: column;
}

.item-serial-number[_ngcontent-%COMP%] {
  text-align: center;
}

.item-serial-no[_ngcontent-%COMP%], .item-imei[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.7);
}

.item-hsn[_ngcontent-%COMP%], .item-quantity[_ngcontent-%COMP%], .item-mrp[_ngcontent-%COMP%], .item-rate[_ngcontent-%COMP%], .item-charge-rate[_ngcontent-%COMP%], .item-additional-info-rate[_ngcontent-%COMP%], .item-discount-amount[_ngcontent-%COMP%], .item-tax-amount[_ngcontent-%COMP%], .item-sgst-amount[_ngcontent-%COMP%], .item-cgst-amount[_ngcontent-%COMP%], .item-igst-amount[_ngcontent-%COMP%], .item-charge-tax-amount[_ngcontent-%COMP%], .item-additional-info-tax-amount[_ngcontent-%COMP%], .item-charge-sgst-amount[_ngcontent-%COMP%], .item-additional-info-sgst-amount[_ngcontent-%COMP%], .item-charge-cgst-amount[_ngcontent-%COMP%], .item-additional-info-cgst-amount[_ngcontent-%COMP%], .item-charge-igst-amount[_ngcontent-%COMP%], .item-additional-info-igst-amount[_ngcontent-%COMP%], .item-cess-amount[_ngcontent-%COMP%], .item-total[_ngcontent-%COMP%] {
  text-align: right;
}

.item-discount-percentage[_ngcontent-%COMP%], .item-tax-percentage[_ngcontent-%COMP%], .item-sgst-percentage[_ngcontent-%COMP%], .item-cgst-percentage[_ngcontent-%COMP%], .item-igst-percentage[_ngcontent-%COMP%], .item-charge-tax-percentage[_ngcontent-%COMP%], .item-charge-sgst-percentage[_ngcontent-%COMP%], .item-charge-cgst-percentage[_ngcontent-%COMP%], .item-charge-igst-percentage[_ngcontent-%COMP%], .item-cess-percentage[_ngcontent-%COMP%] {
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-size: 10px;
}

.items-addn1-column[_ngcontent-%COMP%], .items-addn2-column[_ngcontent-%COMP%], .items-addn3-column[_ngcontent-%COMP%], .items-addn4-column[_ngcontent-%COMP%] {
  text-align: center !important;
}

.items-discount-column[_ngcontent-%COMP%], .tax-column[_ngcontent-%COMP%], .items-hsn-column[_ngcontent-%COMP%], .tax-sgst-column[_ngcontent-%COMP%], .tax-cgst-column[_ngcontent-%COMP%], .tax-igst-column[_ngcontent-%COMP%], .items-cess-column[_ngcontent-%COMP%], .items-qty-column[_ngcontent-%COMP%], .items-rate-column[_ngcontent-%COMP%], .items-mrp-column[_ngcontent-%COMP%] {
  white-space: nowrap;
}

.nowrap[_ngcontent-%COMP%] {
  white-space: nowrap;
}



.item-charge-dash[_ngcontent-%COMP%], .item-charge-label[_ngcontent-%COMP%], .item-charge-value[_ngcontent-%COMP%], .item-additional-info-dash[_ngcontent-%COMP%], .item-additional-info-label[_ngcontent-%COMP%], .item-additional-info-value[_ngcontent-%COMP%] {
  text-align: right;
}

.item-charge-label[_ngcontent-%COMP%], .item-additional-info-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-style: italic;
  padding-right: 1mm;
  font-weight: 500;
}



#tax-table[_ngcontent-%COMP%] {
  border: 1px solid black;
  border-collapse: collapse;
  border-spacing: 0 !important;
  margin: 2mm 0;
  padding: 0;
}

#tax-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#tax-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #tax-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-right: 1px solid black;
  max-width: 25%;
  page-break-inside: avoid;
}

.tax-table-header[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-bottom: 1px solid black;
}

.tax-table-sub-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
}

.tax-table-sub-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {
  border-left: 1px solid black;
}

.tax-table-rate-header[_ngcontent-%COMP%] {
  width: 30%;
  display: flex;
  justify-content: center;
}

.tax-table-amount-header[_ngcontent-%COMP%] {
  width: 70%;
  display: flex;
  justify-content: center;
}

.tax-table-info[_ngcontent-%COMP%] {
  font-size: 12px;
  word-break: break-all;
  padding: 0.5mm 2mm;
  text-align: right;
}

.tax-table-sub-info[_ngcontent-%COMP%] {
  padding: 0;
  height: 1px;
}

.tax-table-sub-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  font-size: 3mm;
  word-break: break-all;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.tax-cgst-rate[_ngcontent-%COMP%], .tax-sgst-rate[_ngcontent-%COMP%], .tax-igst-rate[_ngcontent-%COMP%] {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5mm;
}

.tax-cgst-amount[_ngcontent-%COMP%], .tax-sgst-amount[_ngcontent-%COMP%], .tax-igst-amount[_ngcontent-%COMP%] {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  padding: 0 1mm;
  border-left: 1px solid black;
}



#amount-words[_ngcontent-%COMP%], #foreign-amount-words[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 5mm;
  align-items: center;
}

#amount-words-container[_ngcontent-%COMP%] {
  border: 1px solid black;
  padding-bottom: 4px;
}

#amount-words-label[_ngcontent-%COMP%], #foreign-amount-words-label[_ngcontent-%COMP%] {
  align-self: flex-start;
  padding-right: 2mm;
  font-size: 12px;
  padding-left: 2mm;
  padding-top: 1mm;
  padding-bottom: 1mm;
  font-weight: 500;
}

#amount-words-value[_ngcontent-%COMP%], #foreign-amount-words-value[_ngcontent-%COMP%] {
  padding-right: 2mm;
  font-size: 11px;
  padding-left: 2mm;
  flex: 1;
  align-self: flex-start;
}

#amount-words-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
}



.misc-details-container[_ngcontent-%COMP%] {
  display: flex;
  border-left: 1px solid black;
}

.bottom-content-container[_ngcontent-%COMP%] {
  break-inside: avoid;
}

.misc-details-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  flex: 1 0;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  overflow-wrap: anywhere;
}

#notes-label[_ngcontent-%COMP%], #bank-details-label[_ngcontent-%COMP%], #tnc-label[_ngcontent-%COMP%] {
  padding: 2mm;
  padding-bottom: 1mm;
  padding-top: 4px;
  font-size: 12px;
  font-weight: 500;
}

#notes[_ngcontent-%COMP%], #tnc[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#upi-scan-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
}

#notes-value[_ngcontent-%COMP%], #tnc-value[_ngcontent-%COMP%] {
  font-size: 11px;
  word-break: break-word;
  padding-left: 2mm;
  padding-right: 2mm;
}



.bank-details-info[_ngcontent-%COMP%] {
  display: flex;
  font-size: 11px;
  margin-bottom: 4px;
}

.bank-details-info-label[_ngcontent-%COMP%] {
  padding-left: 2mm;
  width: 30%;
  min-width: 30%;
}

.bank-details-value[_ngcontent-%COMP%] {
  max-width: 70%;
  margin-right: 2mm;
}



#upi-details[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}

#upi-details-meta[_ngcontent-%COMP%] {
  flex-grow: 1;
  font-size: 11px;
  padding: 4px;
}

#upi-id[_ngcontent-%COMP%] {
  word-break: break-all;
}

#upi-qr-code[_ngcontent-%COMP%] {
  height: 18mm;
  padding: 2mm;
}

#upi-scan-desc[_ngcontent-%COMP%] {
  margin-bottom: 1mm;
  color: rgba(0, 0, 0, 0.8);
}



#signature[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#signature-img-container[_ngcontent-%COMP%] {
  margin-top: 8px;
  height: 15mm;
  text-align: center;
}

#signature-img[_ngcontent-%COMP%] {
  height: 100%;
  max-width: 100px;
  object-fit: contain;
}

#signature-label[_ngcontent-%COMP%], #signatory-name[_ngcontent-%COMP%] {
  font-size: 11px;
  text-align: center;
}



.items-table-total[_ngcontent-%COMP%], .items-table-total-foreign[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-top: 1px solid black;
  text-align: end;
  word-break: break-all;
  padding: 0 1mm;
}

td[class^="items-table-tax-total-"][_ngcontent-%COMP%], .items-table-balance[_ngcontent-%COMP%], .items-table-received[_ngcontent-%COMP%], .items-table-prev-balance[_ngcontent-%COMP%], .items-table-total-payable[_ngcontent-%COMP%], .items-table-tax-tds[_ngcontent-%COMP%], .items-table-curr-balance[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  border-top: 1px solid black;
  text-align: end;
  word-break: break-all;
  padding: 0 1mm;
}



.highlight[_ngcontent-%COMP%] {
  border: 3px dashed #de776f !important;
  background: rgba(245, 212, 209, 0.2);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.highlight-padding[_ngcontent-%COMP%] {
  padding-top: 2mm;
  padding-bottom: 2mm;
  padding-left: 4mm;
  padding-right: 4mm;
}

.plus-missing-field-text[_ngcontent-%COMP%] {
  font-size: small;
  display: inline-block;
  vertical-align: middle;
}

.plus-missing-field-icon[_ngcontent-%COMP%] {
  margin: 2mm 4mm;
  display: inline-block;
  vertical-align: middle;
}



.page-branding[_ngcontent-%COMP%] {
  font-size: 2.5mm;
  display: none;
}



#upi-mbb-container[_ngcontent-%COMP%] {
  margin-left: 1mm;
}

#mbb-pay[_ngcontent-%COMP%] {
  margin-top: 8px;
  margin-bottom: 12px;
}

#upi-apps[_ngcontent-%COMP%] {
  margin-bottom: 0px;
  margin-top: 8px;
}

#payment-link-container[_ngcontent-%COMP%] {
  display: none;
  line-height: 23px;
  margin-bottom: -8px;
}

#payment-cta[_ngcontent-%COMP%] {
  font-weight: bold;
  font-size: 2.5mm;
  color: white;
  background-color: #bf6200;
  border-radius: 1.8mm;
  padding: 1.5mm 2.5mm;
  text-decoration: none;
}

#payment-link[_ngcontent-%COMP%] {
  color: #bf6200;
  font-size: 3mm;
  margin-left: 1mm;
  text-decoration: none;
}



#e-invocing-container[_ngcontent-%COMP%] {
  margin-top: 8px;
  border: 1px solid #000;
  padding: 8px;
  display: flex;
  flex-direction: row;
  page-break-inside: avoid;
}

#e-invoice-qr[_ngcontent-%COMP%] {
  height: 100px;
  width: 100px;
  margin-right: 8px;
}

#e-invoicing-info-container[_ngcontent-%COMP%] {
  flex: 1;
}

.e-info-container[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
}

.e-info-label[_ngcontent-%COMP%] {
  width: 100px;
}

#e-invoice-description[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 12px;
}

#e-invoice-details[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin-right: 116px;
}



.bold[_ngcontent-%COMP%] {
  font-weight: 600;
}



#mbb-logo-container[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}`,`@media screen {
  .page-header[_ngcontent-%COMP%] {
    height: 10mm;
  }

  .page-footer[_ngcontent-%COMP%] {
    height: 10mm;
  }

  body[_ngcontent-%COMP%] {
    padding: 4mm 10mm;
    width: 190mm;
  }
}

@media print {
  html[_ngcontent-%COMP%] {
    background-color: initial;
  }

  body[_ngcontent-%COMP%] {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page-footer[_ngcontent-%COMP%] {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding-bottom: 2mm;
  }

  .page-header[_ngcontent-%COMP%] {
    width: 100%;
    position: fixed;
    top: 0;
    padding-top: 2mm;
  }

  #main-header[_ngcontent-%COMP%] {
    display: table-header-group;
  }

  #main-footer[_ngcontent-%COMP%] {
    display: table-footer-group;
  }

  .page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%] {
    height: 11mm;
  }

  .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%] {
    height: 9mm;
  }

  .highlight[_ngcontent-%COMP%] {
    display: none;
    visibility: hidden;
  }
}

@page {
  size: A4;
  margin: 0mm 10mm;
}

.page-header-tagline[_ngcontent-%COMP%] {
  font-size: 3.5mm;
}

.page-header-sub-type[_ngcontent-%COMP%] {
  padding: 2px 4px;
}



.company-logo-container[_ngcontent-%COMP%], #company-logo[_ngcontent-%COMP%] {
  height: 23mm;
  width: 23mm;
}

#company-details-content[_ngcontent-%COMP%] {
  text-align: center;
  align-items: center;
}

#company-mobile-number-content[_ngcontent-%COMP%], #company-email-content[_ngcontent-%COMP%] {
  padding-right: 16px;
}

#dummy-div[_ngcontent-%COMP%] {
  height: 100%;
  width: 23mm;
}



#items-table[_ngcontent-%COMP%] {
  margin-bottom: 2mm;
}



.misc-details-container[_ngcontent-%COMP%] {
  flex-flow: row wrap;
}

.misc-details[_ngcontent-%COMP%]:nth-last-child(5):first-child, .misc-details[_ngcontent-%COMP%]:nth-last-child(5):first-child ~ .misc-details[_ngcontent-%COMP%] {
  flex-basis: 30%;
}

.misc-details[_ngcontent-%COMP%]:nth-last-child(4):first-child, .misc-details[_ngcontent-%COMP%]:nth-last-child(4):first-child ~ .misc-details[_ngcontent-%COMP%] {
  flex-basis: 40%;
}



#upi-details[_ngcontent-%COMP%] {
  display: block;
}

#upi-details-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}

.sub-details-class[_ngcontent-%COMP%], #invoice-main-details[_ngcontent-%COMP%] {
  min-height: 12mm;
}`]});let t=e;return t})();var Ip=(()=>{let e=class e{constructor(){}getProjects(){return[{name:"A Project",image:"An Image",gitURL:"gitURL",liveURL:"liveURL"},{name:"A Project",image:"An Image",gitURL:"gitURL",liveURL:"liveURL"},{name:"A Project",image:"An Image",gitURL:"gitURL",liveURL:"liveURL"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Kb(t,e){if(t&1&&(d(0,"div")(1,"h1"),a(2),l(),m(3,"img",220),d(4,"p")(5,"a",221),a(6,"Git"),l()(),d(7,"p")(8,"a",221),a(9,"Live"),l()()()),t&2){let n=e.$implicit;Zt(2),wi(n.name),Zt(),_n("src",n.image,co),Zt(2),_n("href",n.gitURL,co),Zt(3),_n("href",n.liveURL,co)}}var Mp=`html[_ngcontent-%COMP%] {
  background-color: #f2f2f2;
}

body[_ngcontent-%COMP%] {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  background-color: white;
}

.page-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  font-size: 3.5mm;
  justify-content: center;
  font-weight: 500;
}

.page-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.5mm;
  font-weight: 500;
}

table[_ngcontent-%COMP%] {
  width: 100%;
}

.main-container[_ngcontent-%COMP%] {
  padding: 0 !important;
}

.page-header-type[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}

.page-header-type-value[_ngcontent-%COMP%] {
  margin-right: 10px;
}

.page-header-sub-type[_ngcontent-%COMP%] {
  border: 1px solid #868597;
  box-sizing: border-box;
  border-radius: 2px;
  color: #868597;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-right: 4px;
}

.page-header-tagline[_ngcontent-%COMP%] {
  font-weight: 500;
}

.page-header-tagline-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}



.text-small[_ngcontent-%COMP%] {
  font-size: 11px;
}

.text-smallest[_ngcontent-%COMP%] {
  font-size: 10px !important;
}



#company-details[_ngcontent-%COMP%] {
  border: 1px solid black;
  min-height: 25mm;
  display: flex;
}

#company-details-meta[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
}

.company-logo-container[_ngcontent-%COMP%] {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 1mm;
  object-fit: contain;
}

#company-logo[_ngcontent-%COMP%] {
  margin: 2.1mm;
  object-fit: contain;
}

#company-details-content[_ngcontent-%COMP%] {
  flex: 1;
  margin: 1mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

#company-name[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: #bf6200;
  margin-bottom: 0.5mm;
}

#company-address[_ngcontent-%COMP%] {
  font-size: 12px;
  margin-bottom: 1mm;
}

#company-contact-details[_ngcontent-%COMP%], #company-contact-details-2[_ngcontent-%COMP%], #company-email-content[_ngcontent-%COMP%], #company-pan-number-content[_ngcontent-%COMP%] {
  display: flex;
  font-size: 12px;
  align-items: center;
}

#company-gst-number-content[_ngcontent-%COMP%] {
  margin-right: 3mm;
}

#company-gst-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-mobile-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-email-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #company-pan-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-weight: 500;
}



#invoice-details-meta[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  flex: 1;
}

#invoice-main-details[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  font-weight: 600;
}

#invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-width: 33%;
}

#invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {
  font-weight: 400;
}

#invoice-sub-details[_ngcontent-%COMP%] {
  flex: 1;
  border-top: 1px solid black;
  display: flex;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
}

#invoice-sub-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  padding-top: 2mm;
  word-break: break-all;
  min-width: 20mm;
  margin: 0 2mm;
}

#invoice-sub-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {
  font-weight: 600;
}



#address-details[_ngcontent-%COMP%] {
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
}

.meta-bill-ship-to[_ngcontent-%COMP%] {
  font-size: 11px;
  padding-bottom: 8px;
  line-height: 14px;
}

.meta-bill-ship-to[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  margin-left: 2mm;
  margin-right: 2mm;
  margin-bottom: 2px;
  display: flex;
}

#bill-to[_ngcontent-%COMP%] {
  flex: 1;
}

#ship-to[_ngcontent-%COMP%] {
  flex: 1;
  border-left: 1px solid black;
}

.title-bill-ship-to[_ngcontent-%COMP%] {
  margin: 2mm;
  margin-bottom: 1mm;
  font-size: 3mm;
  font-weight: 500;
}

#bill-to-company-name[_ngcontent-%COMP%], #ship-to-company-name[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  margin-left: 2mm;
  margin-right: 2mm;
  margin-bottom: 1mm;
  text-transform: uppercase;
}

#bill-to-address[_ngcontent-%COMP%], #ship-to-address[_ngcontent-%COMP%] {
  word-break: break-word;
}

.field-bill-ship-to[_ngcontent-%COMP%] {
  margin-right: 1.5mm;
}

.mr-4[_ngcontent-%COMP%] {
  margin-right: 4mm;
}

#party-addn-field-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}

.party-addn-field[_ngcontent-%COMP%] {
  display: flex;
  font-size: 11px;
  line-height: 14px;
  flex-direction: row;
}



#items-table[_ngcontent-%COMP%] {
  border: 1px solid black;
  border-collapse: collapse;
  border-spacing: 0 !important;
  margin: 0;
  padding: 0;
}

#items-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  padding: 0.35em;
  page-break-inside: avoid;
}

#items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.625em;
  border-right: 1px solid black;
  max-width: 75mm;
  page-break-inside: avoid;
}

.items-table-header[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-bottom: 1px solid black;
  min-height: 5mm;
}

.items-table-info[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 400;
  justify-content: center;
  word-break: break-word;
  vertical-align: top;
  padding: 2mm;
  padding-top: 0.5mm;
  padding-bottom: 0.5mm;
  flex-direction: column;
}

.item-serial-number[_ngcontent-%COMP%] {
  text-align: center;
}

.item-serial-no[_ngcontent-%COMP%], .item-imei[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.7);
}

.item-hsn[_ngcontent-%COMP%], .item-quantity[_ngcontent-%COMP%], .item-mrp[_ngcontent-%COMP%], .item-rate[_ngcontent-%COMP%], .item-charge-rate[_ngcontent-%COMP%], .item-additional-info-rate[_ngcontent-%COMP%], .item-discount-amount[_ngcontent-%COMP%], .item-tax-amount[_ngcontent-%COMP%], .item-sgst-amount[_ngcontent-%COMP%], .item-cgst-amount[_ngcontent-%COMP%], .item-igst-amount[_ngcontent-%COMP%], .item-charge-tax-amount[_ngcontent-%COMP%], .item-additional-info-tax-amount[_ngcontent-%COMP%], .item-charge-sgst-amount[_ngcontent-%COMP%], .item-additional-info-sgst-amount[_ngcontent-%COMP%], .item-charge-cgst-amount[_ngcontent-%COMP%], .item-additional-info-cgst-amount[_ngcontent-%COMP%], .item-charge-igst-amount[_ngcontent-%COMP%], .item-additional-info-igst-amount[_ngcontent-%COMP%], .item-cess-amount[_ngcontent-%COMP%], .item-total[_ngcontent-%COMP%] {
  text-align: right;
}

.item-discount-percentage[_ngcontent-%COMP%], .item-tax-percentage[_ngcontent-%COMP%], .item-sgst-percentage[_ngcontent-%COMP%], .item-cgst-percentage[_ngcontent-%COMP%], .item-igst-percentage[_ngcontent-%COMP%], .item-charge-tax-percentage[_ngcontent-%COMP%], .item-charge-sgst-percentage[_ngcontent-%COMP%], .item-charge-cgst-percentage[_ngcontent-%COMP%], .item-charge-igst-percentage[_ngcontent-%COMP%], .item-cess-percentage[_ngcontent-%COMP%] {
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-size: 10px;
}

.items-addn1-column[_ngcontent-%COMP%], .items-addn2-column[_ngcontent-%COMP%], .items-addn3-column[_ngcontent-%COMP%], .items-addn4-column[_ngcontent-%COMP%] {
  text-align: center !important;
}

.items-discount-column[_ngcontent-%COMP%], .tax-column[_ngcontent-%COMP%], .items-hsn-column[_ngcontent-%COMP%], .tax-sgst-column[_ngcontent-%COMP%], .tax-cgst-column[_ngcontent-%COMP%], .tax-igst-column[_ngcontent-%COMP%], .items-cess-column[_ngcontent-%COMP%], .items-qty-column[_ngcontent-%COMP%], .items-rate-column[_ngcontent-%COMP%], .items-mrp-column[_ngcontent-%COMP%] {
  white-space: nowrap;
}

.nowrap[_ngcontent-%COMP%] {
  white-space: nowrap;
}



.item-charge-dash[_ngcontent-%COMP%], .item-charge-label[_ngcontent-%COMP%], .item-charge-value[_ngcontent-%COMP%], .item-additional-info-dash[_ngcontent-%COMP%], .item-additional-info-label[_ngcontent-%COMP%], .item-additional-info-value[_ngcontent-%COMP%] {
  text-align: right;
}

.item-charge-label[_ngcontent-%COMP%], .item-additional-info-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-style: italic;
  padding-right: 1mm;
  font-weight: 500;
}



#tax-table[_ngcontent-%COMP%] {
  border: 1px solid black;
  border-collapse: collapse;
  border-spacing: 0 !important;
  margin: 2mm 0;
  padding: 0;
}

#tax-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#tax-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #tax-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-right: 1px solid black;
  max-width: 25%;
  page-break-inside: avoid;
}

.tax-table-header[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-bottom: 1px solid black;
}

.tax-table-sub-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
}

.tax-table-sub-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {
  border-left: 1px solid black;
}

.tax-table-rate-header[_ngcontent-%COMP%] {
  width: 30%;
  display: flex;
  justify-content: center;
}

.tax-table-amount-header[_ngcontent-%COMP%] {
  width: 70%;
  display: flex;
  justify-content: center;
}

.tax-table-info[_ngcontent-%COMP%] {
  font-size: 12px;
  word-break: break-all;
  padding: 0.5mm 2mm;
  text-align: right;
}

.tax-table-sub-info[_ngcontent-%COMP%] {
  padding: 0;
  height: 1px;
}

.tax-table-sub-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  font-size: 3mm;
  word-break: break-all;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.tax-cgst-rate[_ngcontent-%COMP%], .tax-sgst-rate[_ngcontent-%COMP%], .tax-igst-rate[_ngcontent-%COMP%] {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5mm;
}

.tax-cgst-amount[_ngcontent-%COMP%], .tax-sgst-amount[_ngcontent-%COMP%], .tax-igst-amount[_ngcontent-%COMP%] {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  padding: 0 1mm;
  border-left: 1px solid black;
}



#amount-words[_ngcontent-%COMP%], #foreign-amount-words[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 5mm;
  align-items: center;
}

#amount-words-container[_ngcontent-%COMP%] {
  border: 1px solid black;
  padding-bottom: 4px;
}

#amount-words-label[_ngcontent-%COMP%], #foreign-amount-words-label[_ngcontent-%COMP%] {
  align-self: flex-start;
  padding-right: 2mm;
  font-size: 12px;
  padding-left: 2mm;
  padding-top: 1mm;
  padding-bottom: 1mm;
  font-weight: 500;
}

#amount-words-value[_ngcontent-%COMP%], #foreign-amount-words-value[_ngcontent-%COMP%] {
  padding-right: 2mm;
  font-size: 11px;
  padding-left: 2mm;
  flex: 1;
  align-self: flex-start;
}

#amount-words-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
}



.misc-details-container[_ngcontent-%COMP%] {
  display: flex;
  border-left: 1px solid black;
}

.bottom-content-container[_ngcontent-%COMP%] {
  break-inside: avoid;
}

.misc-details-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  flex: 1 0;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  overflow-wrap: anywhere;
}

#notes-label[_ngcontent-%COMP%], #bank-details-label[_ngcontent-%COMP%], #tnc-label[_ngcontent-%COMP%] {
  padding: 2mm;
  padding-bottom: 1mm;
  padding-top: 4px;
  font-size: 12px;
  font-weight: 500;
}

#notes[_ngcontent-%COMP%], #tnc[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#upi-scan-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
}

#notes-value[_ngcontent-%COMP%], #tnc-value[_ngcontent-%COMP%] {
  font-size: 11px;
  word-break: break-word;
  padding-left: 2mm;
  padding-right: 2mm;
}



.bank-details-info[_ngcontent-%COMP%] {
  display: flex;
  font-size: 11px;
  margin-bottom: 4px;
}

.bank-details-info-label[_ngcontent-%COMP%] {
  padding-left: 2mm;
  width: 30%;
  min-width: 30%;
}

.bank-details-value[_ngcontent-%COMP%] {
  max-width: 70%;
  margin-right: 2mm;
}



#upi-details[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}

#upi-details-meta[_ngcontent-%COMP%] {
  flex-grow: 1;
  font-size: 11px;
  padding: 4px;
}

#upi-id[_ngcontent-%COMP%] {
  word-break: break-all;
}

#upi-qr-code[_ngcontent-%COMP%] {
  height: 18mm;
  padding: 2mm;
}

#upi-scan-desc[_ngcontent-%COMP%] {
  margin-bottom: 1mm;
  color: rgba(0, 0, 0, 0.8);
}



#signature[_ngcontent-%COMP%] {
  page-break-inside: avoid;
}

#signature-img-container[_ngcontent-%COMP%] {
  margin-top: 8px;
  height: 15mm;
  text-align: center;
}

#signature-img[_ngcontent-%COMP%] {
  height: 100%;
  max-width: 100px;
  object-fit: contain;
}

#signature-label[_ngcontent-%COMP%], #signatory-name[_ngcontent-%COMP%] {
  font-size: 11px;
  text-align: center;
}



.items-table-total[_ngcontent-%COMP%], .items-table-total-foreign[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  background-color: rgba(247, 144, 34, 0.2);
  border-top: 1px solid black;
  text-align: end;
  word-break: break-all;
  padding: 0 1mm;
}

td[class^="items-table-tax-total-"][_ngcontent-%COMP%], .items-table-balance[_ngcontent-%COMP%], .items-table-received[_ngcontent-%COMP%], .items-table-prev-balance[_ngcontent-%COMP%], .items-table-total-payable[_ngcontent-%COMP%], .items-table-tax-tds[_ngcontent-%COMP%], .items-table-curr-balance[_ngcontent-%COMP%] {
  font-size: 3mm;
  font-weight: 500;
  border-top: 1px solid black;
  text-align: end;
  word-break: break-all;
  padding: 0 1mm;
}



.highlight[_ngcontent-%COMP%] {
  border: 3px dashed #de776f !important;
  background: rgba(245, 212, 209, 0.2);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.highlight-padding[_ngcontent-%COMP%] {
  padding-top: 2mm;
  padding-bottom: 2mm;
  padding-left: 4mm;
  padding-right: 4mm;
}

.plus-missing-field-text[_ngcontent-%COMP%] {
  font-size: small;
  display: inline-block;
  vertical-align: middle;
}

.plus-missing-field-icon[_ngcontent-%COMP%] {
  margin: 2mm 4mm;
  display: inline-block;
  vertical-align: middle;
}



.page-branding[_ngcontent-%COMP%] {
  font-size: 2.5mm;
  display: none;
}



#upi-mbb-container[_ngcontent-%COMP%] {
  margin-left: 1mm;
}

#mbb-pay[_ngcontent-%COMP%] {
  margin-top: 8px;
  margin-bottom: 12px;
}

#upi-apps[_ngcontent-%COMP%] {
  margin-bottom: 0px;
  margin-top: 8px;
}

#payment-link-container[_ngcontent-%COMP%] {
  display: none;
  line-height: 23px;
  margin-bottom: -8px;
}

#payment-cta[_ngcontent-%COMP%] {
  font-weight: bold;
  font-size: 2.5mm;
  color: white;
  background-color: #bf6200;
  border-radius: 1.8mm;
  padding: 1.5mm 2.5mm;
  text-decoration: none;
}

#payment-link[_ngcontent-%COMP%] {
  color: #bf6200;
  font-size: 3mm;
  margin-left: 1mm;
  text-decoration: none;
}



#e-invocing-container[_ngcontent-%COMP%] {
  margin-top: 8px;
  border: 1px solid #000;
  padding: 8px;
  display: flex;
  flex-direction: row;
  page-break-inside: avoid;
}

#e-invoice-qr[_ngcontent-%COMP%] {
  height: 100px;
  width: 100px;
  margin-right: 8px;
}

#e-invoicing-info-container[_ngcontent-%COMP%] {
  flex: 1;
}

.e-info-container[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
}

.e-info-label[_ngcontent-%COMP%] {
  width: 100px;
}

#e-invoice-description[_ngcontent-%COMP%] {
  font-size: 10px;
  margin-top: 12px;
}

#e-invoice-details[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin-right: 116px;
}



.bold[_ngcontent-%COMP%] {
  font-weight: 600;
}



#mbb-logo-container[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}`,Sp=(()=>{let e=class e{constructor(i){this.projects=i.getProjects()}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)(tt(Ip))},e.\u0275cmp=$e({type:e,selectors:[["app-projects"]],standalone:!0,features:[Pt],decls:1236,vars:1,consts:[[4,"ngFor","ngForOf"],["http-equiv","Content-Type","content","text/html; charset=UTF-8"],["name","viewport","content","width=device-width, initial-scale=0.40, maximum-scale=1.5"],["name","description","content","custom_theme_eight"],["href",Ei`https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`,"rel","stylesheet","type","text/css"],["href",Ei`https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap`,"rel","stylesheet","type","text/css"],[1,"margin-spacing-top"],[1,"margin-spacing-left"],[1,"margin-left-text"],[1,"margin-spacing-right"],[1,"margin-right-text"],["id","page"],[1,"page-header"],[1,"page-header-type"],[1,"page-header-type-value"],[1,"page-header-sub-type"],["id","slogan",1,"page-header-tagline-value"],["id","main-content"],[1,"page-header-space"],["id","business-invoice-details"],["id","business-section-layout-container"],[1,"item_table-tag"],["id","item-table-details","data-subsection-id","3"],["id","items-table",1,"item_table"],["id","items-table-content"],["id","tax-table",1,"item_table"],["scope","col",1,"tax-table-header"],["scope","col",1,"tax-table-header","tax-cgst-column"],[1,"tax-table-sub-header"],[1,"tax-table-rate-header"],[1,"tax-table-amount-header"],["scope","col",1,"tax-table-header","tax-sgst-column"],[1,"label-sgst"],["scope","col",1,"tax-table-header","tax-igst-column"],["scope","col",1,"tax-table-header","tax-cess-column"],["id","tax-table-content"],[1,"miscellaneous_section-tag"],["id","miscellaneous"],[1,"bottom-content-container"],["id","amount-words-container","data-subsection-id","4",1,"amount_in_words"],[1,"spacing-top"],["id","amount-words"],["id","amount-words-label"],["id","amount-words-value"],["id","foreign-amount-words"],["id","foreign-amount-words-label"],["id","foreign-amount-words-value"],[1,"misc-details-container"],["id","notes","data-subsection-id","5",1,"misc-details","notes"],["id","notes-label"],["id","notes-value"],["id","bank-details","data-subsection-id","6",1,"misc-details","bank_details"],["id","bank-details-label"],[1,"bank-details-info"],[1,"bank-details-info-label"],["id","bank-details-name",1,"bank-details-value"],["id","bank-details-ifsc",1,"bank-details-value"],["id","bank-details-account",1,"bank-details-value"],["id","bank-details-bank-name",1,"bank-details-value"],["id","upi-details",1,"misc-details"],["id","upi-details-container"],["id","upi-details-meta"],["id","upi-scan-label"],["id","upi-id-label"],["id","upi-id"],["id","mbb-pay"],["id","payment-link-container"],["id","payment-cta","target","_blank","href",""],["id","payment-link","target","_blank","href",""],["id","upi-apps"],["src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAv4AAAAyCAYAAAAk0N9fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACf1SURBVHgB7Z19jBzlned/T9XMMPgFmhy7gd2cXWwwsOgk2tgmSIfkGhK45C+PE3TaZBOmBsMy2IZpS/cHtyjnntsj5I/Tur2AMxyQ7smuQiKxYXzSKVmD4kIXrQg2uP1PQpZEFIiIbMJC4xc8THfVs79fdfe4X+rlqe6a6eru5yOacVc99dr18n1+z++FgUQiWXXe02/VVaWS5kzZyYCn8ZPiwFINTaza5zRONz+215nXmGYJJBLJ4HH8ggblSh6A68BYFu7YOAeSvuS+mX2LDJSbwtopoE7Mz+csSCD37d2bZo76Qlg7BmA+Nf/4tNe8v3rgwUPAYRIGEcZLjLPiJ6DOFQR+w7+6f/+HeLJSgY04lP7PU09cEdTkXzNjk5/OLS8Gtdn46A7j7CMnChCBEZBIJKsCin1NVe0MivwpDnaKHpv4b3cep0doM1rto2Ob2fXqeXj/8zsK3FYX/sh8xQSJRDIYHD+Xhkr5OP6rKgw4N/D/Uvj3IUYmk2JLlV1Qe677gU9+K6min2AVpoPCtbB2nPHT/jNJ9Ievoy/h9B9Pj/HKpDGT2Rok/u+d2a8DhIh+cM/ly2FtmMLy72XGi1fnliyv+esf3ZFmDA6lsunFUrYobCiUwl8iiZma4Edrnq3Tdw+RL4SD7xVQbeP3n99h2rY6fbX5igWrhGHMaBCZ8VKhkJOjEhKJKK6lv0yW1VBhIEk+Yx9XUDALNTUhwXCF7RJ5S40wbnpNRzGsAVQ0GHTQin8J2AfxX9N+TfBy0EEIHmjJR8GvY38jpSrgu71RgDTqhJQzOpbBr1kQRAp/iSRGUKTPMqhkW9x4ukXHjsRbf7j9luwf/fTVVbEMchXIAqlBJJZgas/9KPxZkXFYwJ6KWSjMWyCRSLypVA5B5PtMklgUPgkChh3u8KOQYJiAWKVRiyNHjhS95o3WjFzDgBMyqoFifadIJ0qFMTNoPmPVawvXZ2AnYM7L6m8DTLnbYnwWrf45Uat/rMLf0PIpGMMLiDkad1yfN62liYXDEm9jl8hEzVAsWNPSWigZCC5a+UHv1MIfBg4NZrFjYaD1f2I1rf/RcDs4Omd436tg3X3PTOF7352XbgsSSSsvnj0InA+mD/TQouwMc/MhlteNmJBQaq4pIpj+sxyhDtCgU3P90kMbcijOPxXs+qUosJPXLi0/qz/q6XTtn5Gs/l0Lf1fsX+IYKPR3ceo10o5y/7Ev90BsPAgco5jakjcZOAuFN/cUQCLpU2qivwOLeUdoI6pDVsPdkDw0fBBlp/Y8MMlsvlta/yWSGi+dmwLHyYJkYBB1b0HJYxZyyXWJRLku1Bl1wPb1SWec7RwW3Y+H6XseRF2/GGPFoPlo4ddQK9dFvafVf8PfbNeh0WUwgtVfzDvNAxL8d1+XP8hH4S0U/SREdIgOWkeVPHYA3qJ1uZ0IiaSPWGPRjx1ndvqcvW4aEg1Pk+tQZ3EDEskAcZyn0NJ/CEV/ASQDhah7S5BQTAQMdoo083NNcUcM2PDErDhBIx+K2IieDXwhsIHSrqdrVv+LTRTWuq261T+Ujiz+xg15nduQZzw2saPhurLYiTCMLc/OyREAST/QC9H/sbNOX5s0n+S3zw8Ht3FSwJQ0+TRC+znQuMooiHErSCTDBIn9yrk0vt0noXJ2Cs11vRdFP76ggVJOuwKNQwkUVoI7NppCy9LxLJ+9KO4Ys2BkQxEm2JC76oq5tzgJDuylUQvGK+nQhgGuKaIjBgMB3jvPPPWE6d9AzPWrMj4SaPFXOLnMt266zerf3mETtPpHFv5onT+Eol+oV9EBWm0E4KaFN6cPgESSYFD0ZyG66DfxRXAab+yirXCrPpE5kFaZspODt8VgbUW/u8VS4bvzBZGWrmVfxY47Ph5a1pE27pnJ4nqyIFlztG17ZzmwLHSbQYaj0GPcQuPMURgbXbReEU9LqN06o/Gymsd1aBAF3B7uO94nThHGxkyRbWrb9k3hNZiD4OMtMnt0wip6u15s3raPOvJ6wPIlznnundePNMexkP8+8Iwr8stnq9NoPD1cA7i7DsfOtLa0YHR0AiYutVamUEagSvlUSEeihMJ8tyvqqx2Q2ep+lRtcAqDqc/vimRJwZRFG1bmm7dQ5dsbAxlN4PM0ihJalYzx2FsULGgfuvKwAQ4iQe0uoUOwtwqMWLHDUIrSGwaAQlIKTaiGAI5ASVcT1y2cUpu7rn3rsVs3htleHTcjXX1j4kxuOM+qmclqLHzmD4l9nZdhdsKYtkEgSxu9v32FAm9ANpGDb6lxAUK6JnxyNIigjFQNfKivDemsv+qNR8+U3jD0zJXyozTbOwwflrGFkcjLt59rDmWLgxdO9tZm5LzPNDeAulw9t2r4vp1RG5/zEcxPLIwYuj8JRTAE3oDHgOkfFgduETdv2FZRR3GZABwDbZgSONw3KMnWuC20bTO/XORXUCibFaDutefc5z0K8aLC8bEDjC7y8nIHwbGFo0edT8NK5m3C0IRvYSXDnOQaU8XPsXAFGywdg4oqSW2dg2XVNuim458JJeOSxg4DPKmU33LmhCENCnLnae4vYqIUNsOg1vRrMamtQLT7Zv9BzQ8hdyT8FZ7UWAoTCWHCGp3cz6/G+cs9p+9ZrVv8/d2zd92cTsPoLCX/jhryGVv7jDJgW1O62L18Lt+2+Fjb9+afc78cWfgGLj3f8LEjzUTiOHY6tMvuPJEmQOAdmHxRqjNZSW3Gmr37ppCnSvNYxyOI2CqriHMcb/aMki/5GCs/OZ6b2PLCzJghqoFBRljyFlmSVWSUXE9TwGa5WJrVbMxNRrP9dbRNfQ7xc0bUde3dbJ7xTCq6hS01vXHfo+EQCKBlMgoNiPhLUAVB17ADkoOJkI/psa7j8KexsGPCFDQswBIi7twTnau813Y5a1CzX10Cfc9/M/uMiKU2DUnB2WwthZb5CWYH810RWfwfYFQGd8lCrv1Bwr2O7F68W1ObKP90AX/vrW+CGz10F6y4bcz+TD6bhzqkboQs0Ev8gkSSIDfq7ZOnXwtqRpf68s26rqOhvhDoAo87y1n4R/XU84wIashNIBgWu8XL5BS2dWUMRjNt02HEU//J6CqLzDpCGb/tcx8tTAPM/nREUxH1OlwGxSUA0KDf5oxbd4Y5aiCSnoTiHgIq93dZCqKMwtgsCdwOMP3OWNkPghlyrv+9vGyr8yacfdzbUvef9356Db3/jJ/D+u+eapn/tkVvg5i9sgi5I0z6ARJIA+HFIXXrbe8bGv3wTlMuXAxoyq1vRfoVZLPWT6HdxxtssXFwZHh/QISPtKJUMrC0p7ihr3OGQCMMgD8c/HOjfphoQK2DMCBGKvSauCrP9jpuCU4CgOId4aiEAfJjB5xsP/13+57nfhl1/gRl+AoW/sSVv4B/hB/s7v/zAU/zf++3bVtx/OiRjXJvXQSLpMeWyOsmBaSObzgGJf/XTF9raYM+/ZDvKRN+J9hjoxJffMPamDWPGoEDglQ99N2Z0kCQahpaltRfhnDLUGCBJIilYVta6M7imxBQQ23M49P+oRSwIp+AEf//+GGohEMvqmA4CfK583v0EEmD19/Xxp2BevDDE/JgbqFv+H/77L8KVn9ngTiO3n4eO3A7f/vpP3PmdwNGSIP39Jb2GKWwloJcs/pfd8wYs/ewquPD/r15pYzM+l5zKusmERL2jwiQDPsUpLWgravXP1J778X5ni8xWDhcK7UOkxr0zOlpImoKs0Rr3smhGolam9szkW6ctPDuf8LoJPSVVE+E5WEPwfbBrrbcpEYSxWbT659xA4QGEgaN3ExCbBEQrzJJrSpJHLeJBLAXnM/MB2ZnI9Usgf0FoJ8pRJoXieJAHP/5X+PnlfxbUxNfX39fi74y52Tk06AAvtx+KAXj4H74I6zaOQYdoMLZqaUQlklDIzQc8hkfHb/sdrPvCu8DGbdfF56qXTg6tIPGy0uNz7KOL8zOpqXseOEQFvpibASgsS4k73+Cqc4pEOS3fNLviZpMwGj+c8Y5cA3GkwWhdl+AzeLhhPXHl0qW7T2JJAY6MwsCiCFnKA4VijxF1b4EE1yCIAzcFJ4il4PSbF6vrl2DsCNGN1V/xb++++DrGT/yT5b9T0LI3K6v7SnpFpTLie3NfsuMPrvVf+cy5ozDEoBXfaJvIq5YvyvfvqEsmPlw67cBjB2DpVKP4r6USNZubsRSNBEBEuMJm2ybaLWkbJW2g9T3gpcdX0eq7rIEkofBwIdSHxCEUE4Ggewt3+EC/z9wUnCLtAlJwxuX69V5mXIOIxnay+ofg6evv6epDvv28Q2t/I15uP5T1h3z+n3n4Z9ABKbjEFRaRLaqUkhQcfEHVMxYwKOHRW4VfTBcD2hvuF+5Yw1RNOOq5GiL0oJmu68/X3yzA90CY2x89FznBuR8c+NHjj2zsmaXN2PPAJO5De20Dp/oSxE7BIvOtA+IKRGxH1UApF7ui+YgHDcU/VQSeqE/AB+pca0AUfj8IEV6+FGfAudO6PbPWsZAEwQNGbZzRAlPLdF6Ds1DUVyUccAhktqL1JuSZxEwIrwEQcZXMgt5Tqn00iAS7HAaQuHK19x4x95bldSMmDDDxpODsrhbCCkqEZ1+NutX/56Pr/Rt55PX3FP5coDARBes+9GRn1nvK93/DLVetfP/47LLr/09/w+COuG8nCVjHhgz+JFPcbklbRdd82c1aZDFw5tqEvQ36xRgHBYzr8lrhX6azMKB0da6GBM64xoJv8NLYneWeCREGSs+y55CLDwcn3/oAZGSUR/FsGPel8TLyEgNUEXau8N2nCh7r9KkIDDq55dT9+AvPzJtTe2ZMaBaNOi0vKtwd1cm0/rK4X8OSk7yAPaUWaxRLoSWfnn9djbDWinwZou217ft1znn/pXC+c+MEvHhWb5rmuEWBXhBanrGJpu8cO8BdFcTih+G8k4XdNT97qsLL4JBwqk4OFihs2q0ATPz4Qw0UBdfBIsf9DRJx5WrvJbFWmO1z4kjBGVcFZ1zPZAeFDjvy9W8T/rWgXh1CoIDduhW/E1qXvfmOTfCzH/1aZFGd9lEoyNeBLAvvxGgclPzd1+U3f+9fpn2H9Tn9uINMjOdqUMEHQLDVkve6emEMVVojUHW5WUpzFQ5WnxltTz+r7ipTKDxdxPZbQV3K1qv74t/Tij2u+2UCWqkIfO+MVbPgr8AVTuso1L+TSHcryzaiuIIzCwLHweHCrpb9tzoNEO47UPRbrx8ptE7Wbt6P4p+vqdCzTj5hbt62D/qSukiuQ2JZVTtbthvoOfRfLm8e3r/zsgK8+BHer0ws/gVH0Zr26UtXWED30rGzuwbVjSeMKAGxYbnae8ngjFp0RxwpOOOs4KwwZycXjextoBOrf7vFfxyHT20I5eMz4db5VWPM9alahBhB4ZA1rs9/VPjVdGQ3omFDnitvGINeW0fiFP46WtEDzQ8cloJm0wvwQKHwHav+vSbwM2iJz2FnIa/YMC2S/hMt+tmpPffjaAa76MbEWZrcc+qZfkikY5tDjcHC+LCdRVGfC92GW1m42V2FRiFg6HEs6OBF1A3arTMaL4OkK/hpz8kVZxE7ImLC37ZN71U7p/FBN5TC3w2IFSp5mmz//m5HLSiYdRQqeYFV4OlKhLuaJxz4VqF2AXEOcdVCeC8zTh4mHb+/o1r924W/I3YglLP/f+z6v67LD1n/qWpvHeoUfP9br7YtQ779jXz/0VdX3Htef/EdEIapGnQACrNFWIYD7pcRtF5TsZEG30XuwEEcTSjIlKHyXEm6gZeYgqL/6e94PuxqlvwJiACz1TmuOpNNExXXp3rFsoZDpYdr7in1KSlQPjEgxDXQDerljX0cXgKHfLYlcaPpOEpUqqBwdDSv+bzMMiDpDsY+BEn8uAGx4ZI56QGx3bq3UDArExS8XCTHZcIJinOgWgginaiwNJ44ujLZjZElqtXfy8dfA0FI/NOHsvU0CX8U815uO63C//WX3uksr7/Tcfq40yhUrdq/LaoLwEfhLbjY00qhyCVrhgmS5nN1Q36C23AKhvhc4UPs7WAf/3C/yUGn6r7jGIVnn451qJss+zgCYUHj84m3nG9nPAfqhdkWq39gTJAbm8CbXRfwN16UQb3xQWLfObM8y0Ax+NmyVq3RIBOlSvoNsYBYRRlJrJtPPBVmnclhuX+D4hzirIWgKLCTd9lHimL1bxP+uHGh7Au9hCqnQgyQtXpqS55uUn1louonZrk2dV3+BajmayVhUcJftMgUOFx4Y9r02wYKZh0F8xQ095DpQiqyMsw1iOuLy1DK0nFIOzYVOHI7OdrKNkOWXVnH9c9muKOQ6KnvL0HtzbBlvcBjtMLOlbEln3aquc93QXMH0mTgLPR7UDAOW5aC7k26LinXP5volctPT4dVTfKzX4jgF3+xiBfFz5AFuNHdhrL8sGK1IwEkxE00i5SaLPNKc7AwufQY0zMLXIHGtJw6pfakAGCvfaD0o22vMJnCMza0bXtnUexnGaPftv+tf5LhhNxbACpaWDsSikkueBVHhVmhYNYBQcH3j9+8uFy/KI0nF6kDEEIUq/8IDDmMwdvNo/y+flYaztMavqfoO4r6ybuvy2dbg13dIOkxyNN8n/WlcbTBaF3WXW4ULes2aB73VipoWXd5NzsPX+QOu8nzGCgX+ihMokifKLwZLT1n0Lm6+/r8LHcg5/M80DkoOnYcdi68OT0NfYrDeBEfeoFtXlm6Cm/g35nQA9BybUFsMDxWfji8mVMCe50p4qtfhzLykEsOpQyunk26qNpy6tC15Q4pcxVmXWu/iEmEKwX8pZrz8VfvQbNtP4wZrTVjEG7vqLT2x8Omm/flOXRXD2Z1CCsaJ5E0I5qrPUgoJoIuK8yKBrMOCoEpOONy/eogjacfolb/oRf+ceAGu16bf7nw64uWf2cURTAP7123BcqO401li7lbeQXZ4ihBFi2oYa5QlLnpOHYyronDR586G9jByYk0Na7Lv923aVFtuwiK/y2TO/+f4IcXPnsQ4B9NEOSnj2wQtp18/tFzpzgEWAYY/whig5dWI6vN1D0zeRT9BkRHE2lUcwkyoWFkiit8yjAy2bbOidcDl0WvETK4dC6QUfQfYiyJop/cv9islt5rWsWLPsxaOqNxtSx/e4kPMeVq7yHVCrOVcMsyVZh9ynvUQjyYtf8hF51n5h83/VvEUwtBoRo0MY2gvDoammmzxIFbYgMVkhoMXxSsUC3W0kxjUCEJYY/UmCWcdpg+AM1pH2uBsgEvWVaoLbvgtWzwdpmJ06aZ4hxoWbZeDK1rqLPRMqlE23O3C8250Kn6MvQpY3e6gaRtHaX3nHWw76P/TKKfvuq3PjepQczoj13QAkU/uEOwJiSYqXseOARBYrCaDtW8+Oms6isV9GqZkgJlKdO2OQatqSotP5egYYP88kkgQwdoN+818DfIQGLhKPLZqc3b9vH6B0U/xXr1rA6GJNkwkXTelKt9PjhXey+Jo8IsBbPCkIACecFvXpQKzqG1EFg85/TR9X8Cf7fuj4OalGwOE2cfOVFoM1+2uXMkEAbxuTQ4KIBZ88p9fiRmLrxpTNS/oYVfR+FwvKHBxfoC7Zb+EivD1rpfPQr0XIRAWQu3u+IeU7OuNy1r3JhPu1V127drtexzsWmfq9VOha1cfueq5tPfMNk5UPjVij9/YWpLnuJG9JX91fJa1BiDpEAdmXoeeuL18pXwv85udcV/nQpT8xAxa00Yim3PhlkFHM4juW6tJVX3Hu4hBnmJMXYYKuOeaTeN++5LA1cn8ZlEHVoNBPAq6IXXPS2fXVmvW3CseX3DmsITBf6hzTfvb66TcLZMz5eOLP6cKQd74c+PL+rTLEJyColEhDhztfeW7kYtRINZBwGy9j81/3jWt4GjpkWecWG1EN7NrMf12Bp0ycMb/yP84yWBl6gr+s8/csLVCO0Wfxa9BHprxV3K8kOfVQM7JxADFIyKL/sm0YpXvdDx19x6WoVK9cy3BWqwYqPQpUBZ3tqrZoKi5g13PVbTxHJtey3xCdiJO+2xzytwLl5WPeRcNV9xZcVs2Y/mYx3p35czCtCVh+IPlz7rWvobRX8Nffv3vxybxZOs/RDiNsHxQWV+M8YiQDHjpsxsx2I220p5+n2LeD39dJHmM5s6UuIjAIw7rQ9cjYJ8618oqLd1X4amYFc7KTxhWtOnQ9Gv7RCzhK0GCk9uznBJ/yIaEBuWq73XdDtq4QazDgHcTUaihhju+BQI4HAWqCdHlO7O6RmmCoh+Zi0vq1vrot/dblubCpXqhkhQ3n5Ky9ko9h86cjv83d6futPXbRyDTTd+CmLD6SyFJFkN796STyloqXa46+fe+uNZreI4BBIiF894VdBaIgsqrq9VZ5CgF4kCx/VzyirUNE2gOJvbDs+VcV3e/XfkczVmp2lkomGbm2FAGL2jYv7h2HrzifM36v/vk03+DRV2aPtzdxVPfvV5E7oErf2L+PYJFGIswWlV3cq4fKnteiUxLxpIS+2m9twPwjjrCqBeONiU2rNa/df0Ceo1QdIhDSOwNovNXzUyCnbK+9iVUJJQugyITQKxjFoo3eWaTzrcfQc4C0/Pt1cxb4WR/go5FeExAiQT2K5OPWxI9H/98mvglyOXBrQi0a9MLGVfsRqntgt/Gw++A89/yts/+eDFdzsV9vrfx++CVaESfVSiBvnAz9KJ9vrNGDiDNdTPYTIgq1AYWk0oRT5XnKsvgGAHox/50r99aQ7vfD20IePH0fJ/4OTXfpSDDtCzPMVGz78AAr7HTllJ8LXrIfpJy0fInlMT68JWaDe15z0zLQW9QKdOCChLetsCMoVnx+DIYcPIItN64eZDWCefMDdv31+ElroMEkmnxBEQmwTiqTArFszKFWer6owJj84mgfFxKOVyYpnpRDtRDjiBGZ4+zEBqmXcWLN2N6CfahH8tt70JEaO3jy38Am7bfS1c+ZlVdPFxYWbBMmK/qMi/t/Dr/s4zv1YM+7kiK/72H3zFBJF7BC3/237wlZtGuT33ylcXLRBk+3OTevmDxfwlpTu08NasYGYvtaCf4NHc9RyVslVFxKOgFwX51vz9V4jaCZE0oygNPsGMC3fOOLDDCmvxJ+bc8BhdFAZ/ywOUsQwkkhgQD4hlnRoj14RuK8y6wayOWDDr0z4VfweFuFy/ltUxvRMbybvKmCv6f6uOBbTyF/2EZ25CpsBR7kQT/uTu8+1v/AQe/vsvrqr4Z2AvQOdY0Bz8VarlK5+L6OLTL+CxwQHfuZXAYFALOjxXbgYhW/FeN4MSLt/3D4YRbk9XFPVUQN2HFfBBYdhM1bEDYCqKffjEf130PH49P5k6M65M4vCfW/Dtk//wD8BHfg/j7/9l4PqTbe0nlJIbGt4IE3f/8nLNEcG1+u+ZOdq4rEcmH9qXbp4pQw6zyNIOUWFQfOfkExmPOebmbfsolqijGAPaF23b/sMcuHT5kXQNjmzrYgGxPLHPkDgqzLIKEypWFRbMOhDE5frlKJNRPadERD/+jqfZ8jp9KWv6Gsi9k5J/AgXs6tILMtLDl/z5/9vtz8MNn7sKbrjlqhWf/3d++QG888YHbqegS6xuqr/iOZ6Dsmthqh9XaTVGD0Roy5CzCuD6i512aLo6V58oi/2atUcUst5v/8FdKLj5IZH2tWJVBndUY/sPv0KZn9zUoKwa64HClmvngGmtz9bly49BZf3rsO63/x2UypXtK3b4XPKt/WMWwFLTFDzeSRT0c2GWdlf0q11YcBk+y3hAp4HxYuGZp0yQdASzRyagE3hQdWuG83hHwp+wXnsig+IfpPiXdI+Ye0tlfCSxxqw4Ksxyhe0S0SsjjJswwMTq+hUxjWcU0V8KEP2E5+VA7j6MQXjVTh/e+PnvYPHxIjzz8M/cD7kB0bRuQet1171qOjYSpbXP6oj+tsxIPE0pLOvf3Hz7vMVvm4sFBYdst9S8Spj0qg9gXJefbNwfPyKcq+Z5Y+0ZaOiYabswQJz8i+dzaEKObm2vjhLo+JmsVTbV8YbV/Jo7I+/Dx3/6GNiXvtE8g7HFn35zYxYSTi1jj9k8laVI0JOw91vOTQGqckpd69smdNvVvPym33zmsI6fc8MOZ2zOKibTr5nEf3W0U2b6kXRGrLnae4kblBtOUIVZJuDWSiMGRwbczSeOWgjEe5lxDSK818Tce2BBRPQT/mVIlyGHRymcO3sNsKDSJ1U1Kc1lc/c4xUfh+NR1ecq1X6oF3DYKcquLgOWLVEdqDrVs95Rx/bOHcViphKMMaSrwxUl4jrpiqDNrXQutue0pKJhy9+P0l0FxUtxRduEx6zTPuDY/MUhuVSe/+nx2+3N3Ua/0IKwiJP7P/8ljcMkHk3DJh7vd9J18ed009AlUVIu3BzKRNf+tqT0zBWazo9V0nSzlKPwmbE959vWGYXaragWOXk3WZ9vuOoc4hWc3lJjCD7x94skCJBjr9SdzWnpmERRFx4tgNqwAnkTSyOC4t3RXYbYWzCqCCQOOuOtXSAVnRdyV/hfqpbD3sk2hov/MX58wQBDfy9q1+nNIjLCgLDKrZqGPGRK2zGkbMdFqBbYMaHGhopGMOI6t9pu1+vRrKLwP4W2fZ1VxXt+2HlwtOAKq2yFr3X8K0svTtqHRWsA6zjKUWEj8d2T574BPPrUIS1c+e5qXlQkzy/rifiDI8t5eUXcFsuy/QCMA9BfbZaHFwoTWpANVF5DOtg0eaXaHtWBXF1CxtTlmj15jnQhPeZcErOK8Zb1+pGC99uTWt197kmGHZSsew4TXR44OSBoh9xaRdkl2b4lj1EI0mNUB+2UYeBQh95ywCs6MM6FzSqL/G2GWfg6Ho4h+YiRoJglY47P5w1yJJzcy+fpTms+okIgu/CaRWWQs8BsRsSHLFM/8901UM+RMZyH6dj3BdeXwN9PCfjP3nMbUkaKiYsaW/AQeK6We1AKalqDcJ6M2ESHxv+O5L1v4lDyI1ngNVgm0XC+MjR3PmNnZvhH9dagQl3HvTD2fvjAoyg4UnvnOIo4MCMVTeK7DgaNt94Qz+BYqESirEf4owS9tFYoo9vt+GD/oGLTt+6fx2pQZgSSRAmIT7d4SR4XZAahjEAdRMhuFtVGYs5OHjBz88+iG0oMbN6XOKKp/IzQ4nnnk1SxEZCSsQeE305mpLXnq5XQ9TEoFve6cuhHWXVbtvVAwcBhUhn3hN/dkoBNsHG5R2MVLthyhZ67ij2ezQv0r47wtJytTcUTEhgz+gG4F3MKvDbM+ryaqDePafIGqrmKbm8jXH6qWcQrqPIoHt9jq9uKK6OvzB1ayxXDHatu3ZcixUepU1CrvthwX/WbGDflcbd9uWunxM1ZkjnscJrZpWqarc0XbfNPN1HMNdgAMztBSwqkD4Lpm0PEWGaCwKMNiv4zadMKJr/6ocOtzk2YZ1Cxjnack9ITiN2w299rXnu/rjlNN/JsosPIQ7kZo4XmcRtFvQpeg6G+y3skUng2g6CerOAw7FXzmqiCRxBIQmwzEKsz6jVoMSh2DOIjL9eu9zLgeVpPmx5dcVnpo4+Zgj4wORT8RKvwJVoYJ8hWHLv39Seh//1uvRlnEUspiQyJeoLglP6tF6AAS4PhnWqBNYKekJuxNiLLtX00HiruaeM50u29N7bs4V03reXO6QH9gSKnl6je2P3dXoeb3r0M3kOB32OENFyo5c3px1TpN2JGMJd5DhJrrzTXYAdDdInNugTKWQgGawqcmZXQpouBfqLVbYeHZ+WugA9wg4dZnlyzY1WvSWjqTsorN7gXarTMaL4db1UTQ0nsN35kKa4oXcRgZUni8nXVJ/yJYpTYoIDYJiFaY9Ru1iCuYdRCIK7MRdgwCry3O2eGHNmga/svf1awL0U8ICX8SmmhBnuC268rRteVfBLL0o+jXB9lCLBlcqMgX/jFxBEArMzWDt7n4qBmKfXxgLzoOHN34iW2upuCvU5hfe+t3WMaduMAH9iw010U3pbW/56S4WjmlbdtnNk7k+MyPo/Lvppv3HeIszPBxcTsRUyvLd9LAI1illsHB+2b2JzJtLIrxlEidGQh8BjtCHSA7BqNhkonT9UtRYCf3v7Tmrjp0IXvZt/iHvi26FP2EkPAnahbkrcZn87m4fP79IP/zjt17JJIEURsBcK9lKtB1bnwkDa4VxklxxlI4cng55/xtVKclhzmlMXDMV/5CvMKvJBjDmNHx/DZ1uOJICyzxgTMLmKhw51otnW3jNIgDhUE6njV50vexDhJ/yL0FoKKJtEVxvSaG0I4QvAGCgnIZZztDdT+H0jNPdVDEr4+Iy/WL0nhy7nvNzH36b5eyG/5muw4+rkC47PTZR14tQJcIC/86rv/4lnwRrylyY9AgXizKJNTmfy6RDAA1y70JQ5D2LClwtS2QWKbwXE3Y4ItiHIo/DZKBRdS9ZVDwC8qtpfEMHTHgjA9+Np+4XL/803i6ot9toni7t1dF/4kCxIBYH6YF8uNmZdhaS4dnQfeQa8McrXOQcrxLJJLeUSsOpjdOkyk8VxnbzQU+0K4wOFQ/0G4NEqfjuMK+g4Jy572DchWHC45m8CG4H8TSePrVQlhZi3c9mRXRX6N1WyXH5hNxiX4issW/Ts33PksfN5MLsCm8AHSIBDOZYh+FT5SC9OWXSCRx4qiQbbHRWDKF5+pCwbratn1Hw9IY9zGmdXKw3RqGHSH3lgEhKChXNJh10NN4irp+CVVwZs2i3gGYvvpvlwr176nHbtUcbjd2uEo2h4nz3zwZ60hqx8K/kXomF7cg1AikaTgDh0M3Q7srkIVC/zRUFAtsPEmWIcW+RCKJHbL2t4pPJoN61wbbzoKqUkYKkcDCvoLZo31TLVsSHVH3lkHBLyg3SjCr34jBoCCc2QiCMxu9m1mPgt7W6t9bRX91Im5rpbfFLJvz3ecfORG7+2Qswr9OzWpvgvRhlkgkPcTD2i9TeK4RVC1Xu3nvAc5YHlYTpqyp4QiPZ+7t4mCLnGEHhawWV4B54gkIyh2cOgZxIJbZyAk5FyMKdaTwCgNesh22++rcUlt7h9VdgZi1vKxMLGVfsWAV6MjHXyKRSJIKWftZu7VfFuxaQ6ggGL7idsOq+fszy3rtibXyLS4xBgfeOflEFiSDjWIPTcYmxpj//eMGs4aT9DoGceC6foVBnaj5YBdAhZHrFC+B40x4if4aO1db9Lv7AhKJRDJAOIqHfzmTKTx9WSXLOQlzZttbsdMV97kvMdvZHdQArW8fQQyQexizR7daJ5/MQa9hop0o7n3s4xE6YX5tu92HhPP0kSOUsdCEAYdcdC4dVw/4t4gnmLXfcV2/WPeZjT7MQIo7oJHo/+Nc2bNzuf7RHWn6ZVZb9BOxuvpIJBJJr0HrrNEyyWqtAjwM4HmYRkvUwZBGL1snV89yTm4/+MfQ0pkMqBW9WsOCb4ZO4XAanNFCa8XfVhTbxu2pl3PONIgAY5zWW3S3Mza6aL3ShWvPl66w4NhHh3GtwXVvOBdzQRt1srCspLCjFnD+mAV22buTMnFFCf7pozlcPljUOc5Rt+1q7EMfUB4f2T22VM4xFL8c4qkinRzwtwG+gKI/l/MJRL1v7940OOHHLRTM2ucojKfxGWKGtcPRk0LQ/DKMag4HtPSXLd91ODy1bKurLvqJfwdGcRKmb8adHwAAAABJRU5ErkJggg==","height","10px"],["id","upi-qr-code-container"],["id","upi-qr-code"],["id","tnc","data-subsection-id","7",1,"misc-details","tnc"],["id","tnc-label"],["id","tnc-value"],["id","signature","data-subsection-id","8",1,"misc-details","signature"],["id","signature-img-container"],["id","signature-img"],["id","signature-label"],["id","signatory-name"],["id","e-invocing-container"],["id","e-invoice-qr-container"],["id","e-invoice-qr"],["id","e-invoicing-info-container"],["id","e-invoice-details"],["id","e-invoice-irn-container",1,"e-info-container"],[1,"e-info-label"],["id","e-invoice-irn",1,"e-info-value"],["id","e-invoice-ack-no-container",1,"e-info-container"],["id","e-invoice-ack-no",1,"e-info-value"],["id","e-invoice-ack-date-container",1,"e-info-container"],["id","e-invoice-ack-date",1,"e-info-value"],["id","e-invoice-description"],["id","footer","data-subsection-id","9"],[1,"margin-spacing-bottom"],["id","business-section-layout-one"],[1,"business_details-tag"],["id","company-header-container","data-subsection-id","10",1,"business_details"],["id","company-header-img"],["id","company-details"],["id","company-details-meta","data-subsection-id","0",1,"business_details"],["id","company-logo-container"],["id","company-logo","width","50px","height","50px"],["id","company-logo-placeholder","width","80","height","80","viewBox","0 0 80 80","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","80","height","80","rx","4","fill","#F2F2F2"],["d","M49 29V33C49 33.5304 48.7893 34.0391 48.4142 34.4142C48.0391 34.7893 47.5304 35 47 35H33C32.4696 35 31.9609 34.7893 31.5858 34.4142C31.2107 34.0391 31 33.5304 31 33V29","stroke","#28313B","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M45 22L40 17L35 22","stroke","#28313B","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M40 17V29","stroke","#28313B","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M12.1358 60.144C11.5998 60.144 11.1158 60.036 10.6838 59.82C10.2598 59.604 9.92377 59.248 9.67577 58.752C9.42777 58.256 9.30377 57.588 9.30377 56.748V52.128H10.2998V56.772C10.2998 57.404 10.3798 57.904 10.5398 58.272C10.7078 58.632 10.9278 58.888 11.1998 59.04C11.4798 59.192 11.7918 59.268 12.1358 59.268C12.4878 59.268 12.8038 59.192 13.0838 59.04C13.3638 58.888 13.5838 58.632 13.7438 58.272C13.9118 57.904 13.9958 57.404 13.9958 56.772V52.128H14.9558V56.748C14.9558 57.588 14.8318 58.256 14.5838 58.752C14.3358 59.248 13.9998 59.604 13.5758 59.82C13.1518 60.036 12.6718 60.144 12.1358 60.144ZM16.9781 62.46V54.168H17.7941L17.8781 54.84H17.9141C18.1781 54.616 18.4661 54.424 18.7781 54.264C19.0981 54.104 19.4301 54.024 19.7741 54.024C20.5261 54.024 21.0981 54.296 21.4901 54.84C21.8821 55.376 22.0781 56.096 22.0781 57C22.0781 57.656 21.9581 58.22 21.7181 58.692C21.4861 59.164 21.1781 59.524 20.7941 59.772C20.4181 60.02 20.0061 60.144 19.5581 60.144C19.2861 60.144 19.0141 60.084 18.7421 59.964C18.4781 59.844 18.2101 59.68 17.9381 59.472L17.9621 60.492V62.46H16.9781ZM19.3901 59.316C19.8701 59.316 20.2661 59.112 20.5781 58.704C20.8981 58.288 21.0581 57.72 21.0581 57C21.0581 56.36 20.9381 55.844 20.6981 55.452C20.4661 55.052 20.0741 54.852 19.5221 54.852C19.2741 54.852 19.0221 54.92 18.7661 55.056C18.5181 55.192 18.2501 55.388 17.9621 55.644V58.704C18.2261 58.928 18.4821 59.088 18.7301 59.184C18.9781 59.272 19.1981 59.316 19.3901 59.316ZM24.6784 60.144C24.3104 60.144 24.0424 60.032 23.8744 59.808C23.7144 59.576 23.6344 59.248 23.6344 58.824V51.456H24.6184V58.896C24.6184 59.048 24.6464 59.16 24.7024 59.232C24.7584 59.296 24.8224 59.328 24.8944 59.328C24.9264 59.328 24.9544 59.328 24.9784 59.328C25.0104 59.32 25.0544 59.312 25.1104 59.304L25.2424 60.048C25.1784 60.08 25.1024 60.104 25.0144 60.12C24.9264 60.136 24.8144 60.144 24.6784 60.144ZM28.961 60.144C28.489 60.144 28.045 60.024 27.629 59.784C27.221 59.544 26.889 59.196 26.633 58.74C26.385 58.284 26.261 57.736 26.261 57.096C26.261 56.44 26.385 55.884 26.633 55.428C26.889 54.972 27.221 54.624 27.629 54.384C28.045 54.144 28.489 54.024 28.961 54.024C29.441 54.024 29.885 54.144 30.293 54.384C30.701 54.624 31.029 54.972 31.277 55.428C31.533 55.884 31.661 56.44 31.661 57.096C31.661 57.736 31.533 58.284 31.277 58.74C31.029 59.196 30.701 59.544 30.293 59.784C29.885 60.024 29.441 60.144 28.961 60.144ZM28.961 59.328C29.465 59.328 29.869 59.124 30.173 58.716C30.485 58.3 30.641 57.76 30.641 57.096C30.641 56.424 30.485 55.88 30.173 55.464C29.869 55.048 29.465 54.84 28.961 54.84C28.465 54.84 28.061 55.048 27.749 55.464C27.437 55.88 27.281 56.424 27.281 57.096C27.281 57.76 27.437 58.3 27.749 58.716C28.061 59.124 28.465 59.328 28.961 59.328ZM34.3768 60.144C33.8888 60.144 33.4808 60 33.1528 59.712C32.8328 59.416 32.6728 59.008 32.6728 58.488C32.6728 57.848 32.9568 57.36 33.5248 57.024C34.1008 56.68 35.0088 56.44 36.2488 56.304C36.2488 56.056 36.2128 55.82 36.1408 55.596C36.0768 55.372 35.9568 55.192 35.7808 55.056C35.6128 54.912 35.3688 54.84 35.0488 54.84C34.7128 54.84 34.3968 54.904 34.1008 55.032C33.8048 55.16 33.5408 55.304 33.3088 55.464L32.9248 54.78C33.1968 54.604 33.5288 54.436 33.9208 54.276C34.3208 54.108 34.7528 54.024 35.2168 54.024C35.9288 54.024 36.4448 54.244 36.7648 54.684C37.0848 55.116 37.2448 55.696 37.2448 56.424V60H36.4288L36.3448 59.304H36.3088C36.0368 59.528 35.7368 59.724 35.4088 59.892C35.0888 60.06 34.7448 60.144 34.3768 60.144ZM34.6648 59.352C34.9448 59.352 35.2088 59.284 35.4568 59.148C35.7048 59.012 35.9688 58.82 36.2488 58.572V56.952C35.2808 57.072 34.6008 57.252 34.2088 57.492C33.8248 57.732 33.6328 58.04 33.6328 58.416C33.6328 58.744 33.7328 58.984 33.9328 59.136C34.1328 59.28 34.3768 59.352 34.6648 59.352ZM41.0717 60.144C40.3437 60.144 39.7597 59.88 39.3197 59.352C38.8797 58.816 38.6597 58.064 38.6597 57.096C38.6597 56.464 38.7757 55.92 39.0077 55.464C39.2477 55 39.5597 54.644 39.9437 54.396C40.3357 54.148 40.7517 54.024 41.1917 54.024C41.5277 54.024 41.8197 54.084 42.0677 54.204C42.3157 54.324 42.5677 54.488 42.8237 54.696L42.7757 53.7V51.456H43.7717V60H42.9557L42.8717 59.316H42.8357C42.6117 59.54 42.3477 59.736 42.0437 59.904C41.7397 60.064 41.4157 60.144 41.0717 60.144ZM41.2877 59.316C41.7997 59.316 42.2957 59.048 42.7757 58.512V55.464C42.5277 55.24 42.2877 55.084 42.0557 54.996C41.8317 54.9 41.5997 54.852 41.3597 54.852C41.0477 54.852 40.7637 54.948 40.5077 55.14C40.2597 55.324 40.0597 55.584 39.9077 55.92C39.7557 56.248 39.6797 56.636 39.6797 57.084C39.6797 57.78 39.8197 58.328 40.0997 58.728C40.3797 59.12 40.7757 59.316 41.2877 59.316ZM48.2343 60V52.128H49.2303V59.148H52.6743V60H48.2343ZM56.1016 60.144C55.6296 60.144 55.1856 60.024 54.7696 59.784C54.3616 59.544 54.0296 59.196 53.7736 58.74C53.5256 58.284 53.4016 57.736 53.4016 57.096C53.4016 56.44 53.5256 55.884 53.7736 55.428C54.0296 54.972 54.3616 54.624 54.7696 54.384C55.1856 54.144 55.6296 54.024 56.1016 54.024C56.5816 54.024 57.0256 54.144 57.4336 54.384C57.8416 54.624 58.1696 54.972 58.4176 55.428C58.6736 55.884 58.8016 56.44 58.8016 57.096C58.8016 57.736 58.6736 58.284 58.4176 58.74C58.1696 59.196 57.8416 59.544 57.4336 59.784C57.0256 60.024 56.5816 60.144 56.1016 60.144ZM56.1016 59.328C56.6056 59.328 57.0096 59.124 57.3136 58.716C57.6256 58.3 57.7816 57.76 57.7816 57.096C57.7816 56.424 57.6256 55.88 57.3136 55.464C57.0096 55.048 56.6056 54.84 56.1016 54.84C55.6056 54.84 55.2016 55.048 54.8896 55.464C54.5776 55.88 54.4216 56.424 54.4216 57.096C54.4216 57.76 54.5776 58.3 54.8896 58.716C55.2016 59.124 55.6056 59.328 56.1016 59.328ZM62.3055 62.688C61.5935 62.688 61.0135 62.552 60.5655 62.28C60.1175 62.008 59.8935 61.62 59.8935 61.116C59.8935 60.868 59.9695 60.628 60.1215 60.396C60.2735 60.172 60.4815 59.972 60.7455 59.796V59.748C60.6015 59.66 60.4775 59.536 60.3735 59.376C60.2775 59.216 60.2295 59.024 60.2295 58.8C60.2295 58.552 60.2975 58.336 60.4335 58.152C60.5695 57.968 60.7135 57.824 60.8655 57.72V57.672C60.6735 57.512 60.4975 57.296 60.3375 57.024C60.1855 56.752 60.1095 56.444 60.1095 56.1C60.1095 55.676 60.2095 55.308 60.4095 54.996C60.6095 54.684 60.8775 54.444 61.2135 54.276C61.5495 54.108 61.9135 54.024 62.3055 54.024C62.4655 54.024 62.6175 54.04 62.7615 54.072C62.9055 54.096 63.0295 54.128 63.1335 54.168H65.1615V54.924H63.9615C64.0975 55.052 64.2095 55.224 64.2975 55.44C64.3935 55.648 64.4415 55.876 64.4415 56.124C64.4415 56.54 64.3455 56.9 64.1535 57.204C63.9615 57.508 63.7055 57.744 63.3855 57.912C63.0655 58.072 62.7055 58.152 62.3055 58.152C61.9935 58.152 61.7015 58.084 61.4295 57.948C61.3255 58.036 61.2375 58.136 61.1655 58.248C61.0935 58.352 61.0575 58.484 61.0575 58.644C61.0575 58.828 61.1295 58.98 61.2735 59.1C61.4255 59.22 61.6975 59.28 62.0895 59.28H63.2175C63.8975 59.28 64.4055 59.392 64.7415 59.616C65.0855 59.832 65.2575 60.184 65.2575 60.672C65.2575 61.032 65.1375 61.364 64.8975 61.668C64.6575 61.972 64.3175 62.216 63.8775 62.4C63.4375 62.592 62.9135 62.688 62.3055 62.688ZM62.3055 57.492C62.6415 57.492 62.9295 57.368 63.1695 57.12C63.4175 56.864 63.5415 56.524 63.5415 56.1C63.5415 55.676 63.4215 55.344 63.1815 55.104C62.9415 54.864 62.6495 54.744 62.3055 54.744C61.9615 54.744 61.6695 54.864 61.4295 55.104C61.1895 55.344 61.0695 55.676 61.0695 56.1C61.0695 56.524 61.1895 56.864 61.4295 57.12C61.6775 57.368 61.9695 57.492 62.3055 57.492ZM62.4495 62.004C63.0095 62.004 63.4575 61.88 63.7935 61.632C64.1295 61.392 64.2975 61.12 64.2975 60.816C64.2975 60.544 64.1935 60.356 63.9855 60.252C63.7855 60.148 63.4975 60.096 63.1215 60.096H62.1135C62.0015 60.096 61.8775 60.088 61.7415 60.072C61.6135 60.056 61.4855 60.032 61.3575 60C61.1495 60.152 60.9975 60.312 60.9015 60.48C60.8055 60.648 60.7575 60.816 60.7575 60.984C60.7575 61.296 60.9055 61.544 61.2015 61.728C61.5055 61.912 61.9215 62.004 62.4495 62.004ZM68.4883 60.144C68.0163 60.144 67.5723 60.024 67.1563 59.784C66.7483 59.544 66.4163 59.196 66.1603 58.74C65.9123 58.284 65.7883 57.736 65.7883 57.096C65.7883 56.44 65.9123 55.884 66.1603 55.428C66.4163 54.972 66.7483 54.624 67.1563 54.384C67.5723 54.144 68.0163 54.024 68.4883 54.024C68.9683 54.024 69.4123 54.144 69.8203 54.384C70.2283 54.624 70.5563 54.972 70.8043 55.428C71.0603 55.884 71.1883 56.44 71.1883 57.096C71.1883 57.736 71.0603 58.284 70.8043 58.74C70.5563 59.196 70.2283 59.544 69.8203 59.784C69.4123 60.024 68.9683 60.144 68.4883 60.144ZM68.4883 59.328C68.9923 59.328 69.3963 59.124 69.7003 58.716C70.0123 58.3 70.1683 57.76 70.1683 57.096C70.1683 56.424 70.0123 55.88 69.7003 55.464C69.3963 55.048 68.9923 54.84 68.4883 54.84C67.9923 54.84 67.5883 55.048 67.2763 55.464C66.9643 55.88 66.8083 56.424 66.8083 57.096C66.8083 57.76 66.9643 58.3 67.2763 58.716C67.5883 59.124 67.9923 59.328 68.4883 59.328Z","fill","black"],["id","company-details-content"],["id","company-name"],["id","company-address-content"],[1,"company-address-label"],["id","company-address",1,"company-address"],["id","company-highlight-label"],["id","company-contact-details"],["id","company-gst-number-content"],["id","company-gst-number"],["id","company-mobile-number-content"],["id","company-mobile-number"],["id","company-pan-number-content"],["id","company-pan-number"],["id","company-email-content"],["id","company-email"],[1,"spacing"],[1,"invoice_details-tag"],["id","invoice-details-meta","data-subsection-id","1",1,"invoice_details"],["id","invoice-main-details",1,"main-details-class"],["id","invoice-number-container"],["id","invoice-number-label"],["id","invoice-number"],["id","invoice-date-container"],["id","invoice-date-label"],["id","invoice-date"],["id","invoice-due-date-container"],["id","invoice-due-date-label"],["id","invoice-due-date"],["id","invoice-sub-details",1,"sub-details-class"],["id","invoice-addn-field-container-1"],["id","invoice-addn-field-name-1"],["id","invoice-addn-field-value-1"],["id","invoice-addn-field-container-2"],["id","invoice-addn-field-name-2"],["id","invoice-addn-field-value-2"],["id","invoice-addn-field-container-3"],["id","invoice-addn-field-name-3"],["id","invoice-addn-field-value-3"],["id","invoice-sub-details",1,"sub-details-class","sub-details-row"],["id","invoice-addn-field-container-4"],["id","invoice-addn-field-name-4"],["id","invoice-addn-field-value-4"],["id","invoice-addn-field-container-5"],["id","invoice-addn-field-name-5"],["id","invoice-addn-field-value-5"],["id","invoice-addn-field-container-6"],["id","invoice-addn-field-name-6"],["id","invoice-addn-field-value-6"],[1,"party_details-tag"],["id","address-details","data-subsection-id","2",1,"party_details"],["id","bill-to"],["id","title-bill-to",1,"title-bill-ship-to"],["id","bill-to-company-name"],[1,"meta-bill-ship-to"],["id","bill-to-address-container"],[1,"field-bill-ship-to"],["id","bill-to-address"],["id","bill-to-gstin-label",1,"field-bill-ship-to"],["id","bill-to-gstin",1,"mr-4"],["id","bill-to-place-of-supply-label",1,"field-bill-ship-to"],["id","bill-to-place-of-supply"],["id","bill-to-mobile-container",1,"mr-4"],["id","bill-to-mobile"],["id","bill-to-pan-container"],["id","bill-to-pan"],["id","party-addn-field-container"],["id","ship-to"],["id","title-ship-to",1,"title-bill-ship-to"],["id","ship-to-company-name"],["id","ship-to-address-container"],["id","ship-to-address"],["id","ship-to-mobile-container"],["id","ship-to-mobile"],["id","business-section-layout-two"],["id","company-details-group"],["id","invoice-main-details"],[1,"billto-address-group"],["id","business-section-layout-three"],["id","company-address",1,"company-address-value"],[1,"address-invoice-group"],["name","description","content","theme_three"],[1,"page-header-tagline-container"],["id","mbb-logo-container"],["href","https://mybillbook.sng.link/A1sl1/kmwx/t5ek","target","_blank"],["src","mbb_logo.svg","width","151px"],[1,"page-header-tagline-value"],["id","main-header"],[1,"main-container"],[1,"page"],["id","company-logo"],["id","company-address"],["id","items-table","data-subsection-id","3",1,"item_table"],["scope","col",1,"items-table-header"],["scope","col",1,"items-table-header","items-type-header"],["scope","col",1,"items-table-header","items-hsn-header","items-hsn-column"],["scope","col",1,"items-table-header","items-addn1-header","items-addn1-column"],["scope","col",1,"items-table-header","items-addn2-header","items-addn2-column"],["scope","col",1,"items-table-header","items-addn3-header","items-addn3-column"],["scope","col",1,"items-table-header","items-addn4-header","items-addn4-column"],["scope","col",1,"items-table-header","items-qty-column"],["scope","col",1,"items-table-header","items-mrp-header","items-mrp-column"],["scope","col",1,"items-table-header","items-rate-header","items-rate-column"],["scope","col",1,"items-table-header","items-discount-column"],["scope","col",1,"items-table-header","items-cess-column"],["id","tax-table"],["id","main-footer"],[1,"page-footer-space"],[1,"page-footer"],["id","page-branding-container",1,"page-branding"],["src","data:image/png;base64,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","height","30mm"],[3,"src"],[3,"href"]],template:function(r,o){r&1&&(ac(0,Kb,10,4,"div",0),d(1,"html")(2,"head"),m(3,"meta",1)(4,"meta",2)(5,"meta",3)(6,"link",4)(7,"link",5),l(),d(8,"body"),m(9,"div",6),d(10,"div",7),m(11,"span",8),l(),d(12,"div",9),m(13,"span",10),l(),d(14,"div",11)(15,"div",12)(16,"div",13),m(17,"div",14)(18,"div",15),l(),m(19,"div",16),l(),d(20,"table",17)(21,"thead")(22,"tr")(23,"td"),m(24,"div",18),l()()(),d(25,"tbody")(26,"tr")(27,"td")(28,"section",19),m(29,"div",18)(30,"div",20),l(),d(31,"div",21),a(32,"Item Table"),l(),d(33,"section",22)(34,"table",23),m(35,"tbody",24),l(),d(36,"table",25)(37,"thead")(38,"tr")(39,"th",26),a(40,"HSN/SAC"),l(),d(41,"th",26),a(42,"Taxable Value"),l(),d(43,"th",27)(44,"div"),a(45,"CGST"),l(),d(46,"div",28)(47,"div",29),a(48,"Rate"),l(),d(49,"div",30),a(50,"Amount"),l()()(),d(51,"th",31)(52,"div",32),a(53,"SGST"),l(),d(54,"div",28)(55,"div",29),a(56,"Rate"),l(),d(57,"div",30),a(58,"Amount"),l()()(),d(59,"th",33)(60,"div"),a(61,"IGST"),l(),d(62,"div",28)(63,"div",29),a(64,"Rate"),l(),d(65,"div",30),a(66,"Amount"),l()()(),d(67,"th",34),a(68,"Cess"),l(),d(69,"th",26),a(70,"Total Tax Amount"),l()()(),m(71,"tbody",35),l()(),d(72,"div",36),a(73,"Miscellaneous"),l(),d(74,"section",37)(75,"div",38)(76,"div",39),m(77,"div",40),d(78,"div",41)(79,"div",42),a(80,"Total Amount (in words)"),l(),m(81,"div",43),l(),d(82,"div",44)(83,"div",45),a(84,"Total Amount (in words)"),l(),m(85,"div",46),l()(),d(86,"div",47)(87,"div",48)(88,"div",49),a(89,"Notes"),l(),m(90,"div",50),l(),d(91,"div",51)(92,"div",52),a(93,"Bank Details"),l(),d(94,"div",53)(95,"div",54),a(96,"Name:"),l(),m(97,"div",55),l(),d(98,"div",53)(99,"div",54),a(100,"IFSC Code:"),l(),m(101,"div",56),l(),d(102,"div",53)(103,"div",54),a(104,"Account No:"),l(),m(105,"div",57),l(),d(106,"div",53)(107,"div",54),a(108,"Bank:"),l(),m(109,"div",58),l()(),d(110,"div",59)(111,"div",60)(112,"div",61)(113,"div",62),a(114,"Payment QR Code"),l(),d(115,"div",63),a(116,"UPI ID:"),l(),m(117,"div",64),d(118,"div",65)(119,"div",66)(120,"a",67),a(121,"PAY NOW >"),l(),m(122,"br")(123,"a",68),l()(),d(124,"div",69),m(125,"img",70),l()(),d(126,"div",71),m(127,"canvas",72),l()()(),d(128,"div",73)(129,"div",74),a(130,"Terms and Conditions"),l(),m(131,"div",75),l(),d(132,"div",76)(133,"div",77),m(134,"img",78),l(),d(135,"div",79),a(136,"Authorised Signatory For"),l(),m(137,"div",80),l()()(),d(138,"div",81)(139,"div",82),m(140,"canvas",83),l(),d(141,"div",84)(142,"div",85),a(143,"e-Invoice details"),l(),d(144,"div",86)(145,"div",87),a(146,"IRN:"),l(),m(147,"div",88),l(),d(148,"div",89)(149,"div",87),a(150,"Ack No:"),l(),m(151,"div",90),l(),d(152,"div",91)(153,"div",87),a(154,"Ack Date:"),l(),m(155,"div",92),l(),d(156,"div",93),a(157," e-Invoicing detail(s) generated from the Government's e-Invoicing system. "),l()()()(),m(158,"section",94),l()()()()(),m(159,"div",95),d(160,"template",96),a(161,`
      `),d(162,"div",97),a(163,"Business details"),l(),a(164,`
      `),d(165,"div",98),a(166,`
        `),m(167,"img",99),a(168,`
      `),l(),a(169,`
      `),d(170,"div",100),a(171,`
        `),d(172,"div",101),a(173,`
          `),d(174,"div",102),a(175,`
            `),m(176,"img",103),a(177,`
            `),Ie(),d(178,"svg",104),a(179,`
  `),m(180,"rect",105),a(181,`
  `),m(182,"path",106),a(183,`
  `),m(184,"path",107),a(185,`
  `),m(186,"path",108),a(187,`
  `),m(188,"path",109),a(189,`
`),l(),a(190,`
          `),l(),a(191,`

          `),Me(),d(192,"div",110),a(193,`
            `),d(194,"div",111),a(195,"Company Name"),l(),a(196,`
            `),d(197,"div",112),a(198,`
              `),d(199,"span",113),a(200,"Address:\xA0"),l(),a(201,`
              `),m(202,"span",114),a(203,`
            `),l(),a(204,`
            `),m(205,"div",115),a(206,`
            `),d(207,"div",116),a(208,`
              `),d(209,"div",117),a(210,`
                `),d(211,"span"),a(212,"GSTIN:"),l(),a(213,`\xA0
                `),m(214,"span",118),a(215,`
              `),l(),a(216,`
              `),d(217,"div",119),a(218,`
                `),d(219,"span"),a(220,"Mobile:"),l(),a(221,`\xA0
                `),m(222,"span",120),a(223,`
              `),l(),a(224,`
            `),l(),a(225,`
            `),d(226,"div",121),a(227,`
              `),d(228,"span"),a(229,"PAN Number:"),l(),a(230,`\xA0
              `),m(231,"span",122),a(232,`
            `),l(),a(233,`
            `),d(234,"div",123),a(235,`
              `),d(236,"span"),a(237,"Email:"),l(),a(238,`\xA0
              `),m(239,"span",124),a(240,`
            `),l(),a(241,`
          `),l(),a(242,`
          `),m(243,"div",125),a(244,`
        `),l(),a(245,`
        `),d(246,"div",126),a(247,"Invoice details"),l(),a(248,`
        `),d(249,"div",127),a(250,`
          `),d(251,"div",128),a(252,`
            `),d(253,"div",129),a(254,`
              `),d(255,"div",130),a(256,"Invoice No."),l(),a(257,`
              `),m(258,"div",131),a(259,`
            `),l(),a(260,`
            `),d(261,"div",132),a(262,`
              `),d(263,"div",133),a(264,"Invoice Date"),l(),a(265,`
              `),m(266,"div",134),a(267,`
            `),l(),a(268,`
            `),d(269,"div",135),a(270,`
              `),d(271,"div",136),a(272,"Due Date"),l(),a(273,`
              `),d(274,"div",137),a(275,"27/07/19999"),l(),a(276,`
            `),l(),a(277,`
          `),l(),a(278,`
          `),d(279,"div",138),a(280,`
            `),d(281,"div",139),a(282,`
              `),m(283,"div",140),a(284,`
              `),m(285,"div",141),a(286,`
            `),l(),a(287,`
            `),d(288,"div",142),a(289,`
              `),m(290,"div",143),a(291,`
              `),m(292,"div",144),a(293,`
            `),l(),a(294,`
            `),d(295,"div",145),a(296,`
              `),m(297,"div",146),a(298,`
              `),m(299,"div",147),a(300,`
            `),l(),a(301,`
          `),l(),a(302,`
          `),d(303,"div",148),a(304,`
            `),d(305,"div",149),a(306,`
              `),m(307,"div",150),a(308,`
              `),m(309,"div",151),a(310,`
            `),l(),a(311,`
            `),d(312,"div",152),a(313,`
              `),m(314,"div",153),a(315,`
              `),m(316,"div",154),a(317,`
            `),l(),a(318,`
            `),d(319,"div",155),a(320,`
              `),m(321,"div",156),a(322,`
              `),m(323,"div",157),a(324,`
            `),l(),a(325,`
          `),l(),a(326,`
          `),m(327,"div",125),a(328,`
        `),l(),a(329,`
      `),l(),a(330,`
      `),a(331,`
      `),d(332,"div",158),a(333,"Party details"),l(),a(334,`
      `),d(335,"div",159),a(336,`
        `),d(337,"div",160),a(338,`
          `),d(339,"div",161),a(340,"BILL TO"),l(),a(341,`
          `),m(342,"div",162),a(343,`
          `),d(344,"div",163),a(345,`
            `),d(346,"div",164),a(347,`
              `),d(348,"span",165),a(349,"Address:"),l(),a(350,`
              `),m(351,"span",166),a(352,`
            `),l(),a(353,`
            `),d(354,"div"),a(355,`
              `),d(356,"span",167),a(357,"GSTIN:"),l(),a(358,`
              `),m(359,"span",168),a(360,`
              `),d(361,"span",169),a(362,"Place of Supply:"),l(),a(363,`
              `),m(364,"span",170),a(365,`
            `),l(),a(366,`
            `),d(367,"div"),a(368,`
              `),d(369,"div",171),a(370,`
                `),d(371,"span",165),a(372,"Mobile:"),l(),a(373,`
                `),m(374,"span",172),a(375,`
              `),l(),a(376,`
              `),d(377,"div",173),a(378,`
                `),d(379,"span",165),a(380,"PAN Number:"),l(),a(381,`
                `),m(382,"span",174),a(383,`
              `),l(),a(384,`
            `),l(),a(385,`
            `),m(386,"div",175),a(387,`
          `),l(),a(388,`
          `),m(389,"div",125),a(390,`
        `),l(),a(391,`
        `),d(392,"div",176),a(393,`
          `),d(394,"div",177),a(395,"SHIP TO"),l(),a(396,`
          `),m(397,"div",178),a(398,`
          `),d(399,"div",163),a(400,`
            `),d(401,"div",179),a(402,`
              `),d(403,"span",165),a(404,"Address:"),l(),a(405,`
              `),m(406,"span",180),a(407,`
            `),l(),a(408,`
            `),d(409,"div",181),a(410,`
              `),d(411,"span",165),a(412,"Mobile:"),l(),a(413,`
              `),m(414,"span",182),a(415,`
            `),l(),a(416,`
          `),l(),a(417,`
          `),m(418,"div",125),a(419,`
        `),l(),a(420,`
      `),l(),a(421,`
    `),l(),d(422,"template",183),a(423,`
      `),d(424,"div",97),a(425,"Business details"),l(),a(426,`
      `),d(427,"div",98),a(428,`
        `),m(429,"img",99),a(430,`
      `),l(),a(431,`
      `),d(432,"div",100),a(433,`
        `),d(434,"div",101),a(435,`
          `),d(436,"div",102),a(437,`
            `),m(438,"img",103),a(439,`
            `),Ie(),d(440,"svg",104),a(441,`
  `),m(442,"rect",105),a(443,`
  `),m(444,"path",106),a(445,`
  `),m(446,"path",107),a(447,`
  `),m(448,"path",108),a(449,`
  `),m(450,"path",109),a(451,`
`),l(),a(452,`
          `),l(),a(453,`
          `),Me(),d(454,"div",110),a(455,`
            `),d(456,"div",111),a(457,"Company Name"),l(),a(458,`
            `),d(459,"div",112),a(460,`
              `),d(461,"span",113),a(462,"Address:\xA0"),l(),a(463,`
              `),m(464,"span",114),a(465,`
            `),l(),a(466,`
            `),m(467,"div",115),a(468,`
          `),l(),a(469,`

          `),d(470,"div",184),a(471,`
            `),d(472,"div",116),a(473,`
              `),d(474,"div",117),a(475,`
                `),d(476,"span"),a(477,"GSTIN:"),l(),a(478,`\xA0
                `),m(479,"span",118),a(480,`
              `),l(),a(481,`
              `),d(482,"div",119),a(483,`
                `),d(484,"span"),a(485,"Mobile:"),l(),a(486,`\xA0
                `),m(487,"span",120),a(488,`
              `),l(),a(489,`
            `),l(),a(490,`
            `),d(491,"div",121),a(492,`
              `),d(493,"span"),a(494,"PAN Number:"),l(),a(495,`\xA0
              `),m(496,"span",122),a(497,`
            `),l(),a(498,`
            `),d(499,"div",123),a(500,`
              `),d(501,"span"),a(502,"Email:"),l(),a(503,`\xA0
              `),m(504,"span",124),a(505,`
            `),l(),a(506,`
          `),l(),a(507,`
          `),m(508,"div",125),a(509,`
        `),l(),a(510,`
      `),l(),a(511,`
      `),d(512,"div",126),a(513,"Invoice details"),l(),a(514,`
      `),d(515,"div",127),a(516,`
        `),d(517,"div",185),a(518,`
          `),d(519,"div",129),a(520,`
            `),d(521,"div",130),a(522,"Invoice No."),l(),a(523,`
            `),m(524,"div",131),a(525,`
          `),l(),a(526,`
          `),d(527,"div",132),a(528,`
            `),d(529,"div",133),a(530,"Invoice Date"),l(),a(531,`
            `),m(532,"div",134),a(533,`
          `),l(),a(534,`
          `),d(535,"div",135),a(536,`
            `),d(537,"div",136),a(538,"Due Date"),l(),a(539,`
            `),m(540,"div",137),a(541,`
          `),l(),a(542,`

          `),d(543,"div",139),a(544,`
            `),m(545,"div",140),a(546,`
            `),m(547,"div",141),a(548,`
          `),l(),a(549,`
          `),d(550,"div",142),a(551,`
            `),m(552,"div",143),a(553,`
            `),m(554,"div",144),a(555,`
          `),l(),a(556,`
          `),d(557,"div",145),a(558,`
            `),m(559,"div",146),a(560,`
            `),m(561,"div",147),a(562,`
          `),l(),a(563,`
          `),d(564,"div",149),a(565,`
            `),m(566,"div",150),a(567,`
            `),m(568,"div",151),a(569,`
          `),l(),a(570,`
          `),d(571,"div",152),a(572,`
            `),m(573,"div",153),a(574,`
            `),m(575,"div",154),a(576,`
          `),l(),a(577,`
          `),d(578,"div",155),a(579,`
            `),m(580,"div",156),a(581,`
            `),m(582,"div",157),a(583,`
          `),l(),a(584,`
        `),l(),a(585,`
        `),m(586,"div",125),a(587,`
      `),l(),a(588,`
      `),a(589,`
      `),d(590,"div",158),a(591,"Party details"),l(),a(592,`
      `),d(593,"div",159),a(594,`
        `),d(595,"div",160),a(596,`
          `),d(597,"div",161),a(598,"BILL TO"),l(),a(599,`
          `),m(600,"div",162),a(601,`
          `),d(602,"div",163),a(603,`
            `),d(604,"div",164),a(605,`
              `),d(606,"span",165),a(607,"Address:"),l(),a(608,`
              `),m(609,"span",166),a(610,`
            `),l(),a(611,`
            `),d(612,"div",186),a(613,`
              `),d(614,"div"),a(615,`
                `),d(616,"span",167),a(617,"GSTIN:"),l(),a(618,`
                `),m(619,"span",168),a(620,`
              `),l(),a(621,`
              `),d(622,"div"),a(623,`
                `),d(624,"span",169),a(625,"State:"),l(),a(626,`
                `),m(627,"span",170),a(628,`
              `),l(),a(629,`
              `),d(630,"div",171),a(631,`
                `),m(632,"span",165),a(633,`
                `),m(634,"span",172),a(635,`
              `),l(),a(636,`
              `),d(637,"div",173),a(638,`
                `),d(639,"span",165),a(640,"PAN Number:"),l(),a(641,`
                `),m(642,"span",174),a(643,`
              `),l(),a(644,`
            `),l(),a(645,`
            `),m(646,"div",175),a(647,`
          `),l(),a(648,`
          `),m(649,"div",125),a(650,`
        `),l(),a(651,`
        `),d(652,"div",176),a(653,`
          `),d(654,"div",177),a(655,"SHIP TO"),l(),a(656,`
          `),m(657,"div",178),a(658,`
          `),d(659,"div",163),a(660,`
            `),d(661,"div",179),a(662,`
              `),d(663,"span",165),a(664,"Address:"),l(),a(665,`
              `),m(666,"span",180),a(667,`
            `),l(),a(668,`
            `),d(669,"div",181),a(670,`
              `),d(671,"span",165),a(672,"Mobile:"),l(),a(673,`
              `),m(674,"span",182),a(675,`
            `),l(),a(676,`
          `),l(),a(677,`
          `),m(678,"div",125),a(679,`
        `),l(),a(680,`
      `),l(),a(681,`
    `),l(),d(682,"template",187),a(683,`
      `),d(684,"div",97),a(685,"Business details"),l(),a(686,`
      `),d(687,"div",98),a(688,`
        `),m(689,"img",99),a(690,`
      `),l(),a(691,`
      `),d(692,"div",100),a(693,`
        `),d(694,"div",101),a(695,`
          `),d(696,"div",102),a(697,`
            `),m(698,"img",103),a(699,`
            `),Ie(),d(700,"svg",104),a(701,`
  `),m(702,"rect",105),a(703,`
  `),m(704,"path",106),a(705,`
  `),m(706,"path",107),a(707,`
  `),m(708,"path",108),a(709,`
  `),m(710,"path",109),a(711,`
`),l(),a(712,`
          `),l(),a(713,`
          `),Me(),d(714,"div",110),a(715,`
            `),m(716,"div",111),a(717,`
            `),d(718,"div",112),a(719,`
              `),d(720,"span",113),a(721,"Address:\xA0"),l(),a(722,`
              `),m(723,"span",188),a(724,`
            `),l(),a(725,`
            `),m(726,"div",115),a(727,`
          `),l(),a(728,`

          `),d(729,"div",184),a(730,`
            `),d(731,"div",116),a(732,`
              `),d(733,"div",117),a(734,`
                `),d(735,"span"),a(736,"GSTIN:"),l(),a(737,`\xA0
                `),m(738,"span",118),a(739,`
              `),l(),a(740,`
              `),d(741,"div",119),a(742,`
                `),d(743,"span"),a(744,"Mobile:"),l(),a(745,`\xA0
                `),m(746,"span",120),a(747,`
              `),l(),a(748,`
            `),l(),a(749,`
            `),d(750,"div",121),a(751,`
              `),d(752,"span"),a(753,"PAN Number:"),l(),a(754,`\xA0
              `),m(755,"span",122),a(756,`
            `),l(),a(757,`
            `),d(758,"div",123),a(759,`
              `),d(760,"span"),a(761,"Email:"),l(),a(762,`\xA0
              `),m(763,"span",124),a(764,`
            `),l(),a(765,`
          `),l(),a(766,`
          `),m(767,"div",125),a(768,`
        `),l(),a(769,`
      `),l(),a(770,`
      `),d(771,"div",126),a(772,"Invoice details"),l(),a(773,`
      `),d(774,"div",158),a(775,"Party details"),l(),a(776,`
      `),d(777,"div",189),a(778,`
        `),a(779,`
        `),d(780,"div",159),a(781,`
          `),d(782,"div",160),a(783,`
            `),d(784,"div",161),a(785,"BILL TO"),l(),a(786,`
            `),m(787,"div",162),a(788,`
            `),d(789,"div",163),a(790,`
              `),d(791,"div",164),a(792,`
                `),d(793,"span",165),a(794,"Address:"),l(),a(795,`
                `),m(796,"span",166),a(797,`
              `),l(),a(798,`
              `),d(799,"div",186),a(800,`
                `),d(801,"div"),a(802,`
                  `),d(803,"span",167),a(804,"GSTIN:"),l(),a(805,`
                  `),m(806,"span",168),a(807,`
                `),l(),a(808,`
                `),d(809,"div"),a(810,`
                  `),d(811,"span",169),a(812,"Place of Supply:"),l(),a(813,`
                  `),m(814,"span",170),a(815,`
                `),l(),a(816,`
                `),d(817,"div",171),a(818,`
                  `),d(819,"span",165),a(820,"Mobile:"),l(),a(821,`
                  `),m(822,"span",172),a(823,`
                `),l(),a(824,`
                `),d(825,"div",173),a(826,`
                  `),d(827,"span",165),a(828,"PAN Number:"),l(),a(829,`
                  `),m(830,"span",174),a(831,`
                `),l(),a(832,`
              `),l(),a(833,`
              `),m(834,"div",175),a(835,`
            `),l(),a(836,`
            `),m(837,"div",125),a(838,`
          `),l(),a(839,`
          `),d(840,"div",176),a(841,`
            `),d(842,"div",177),a(843,"SHIP TO"),l(),a(844,`
            `),m(845,"div",178),a(846,`
            `),d(847,"div",163),a(848,`
              `),d(849,"div",179),a(850,`
                `),d(851,"span",165),a(852,"Address:"),l(),a(853,`
                `),m(854,"span",180),a(855,`
              `),l(),a(856,`
              `),d(857,"div",181),a(858,`
                `),d(859,"span",165),a(860,"Mobile:"),l(),a(861,`
                `),m(862,"span",182),a(863,`
              `),l(),a(864,`
            `),l(),a(865,`
            `),m(866,"div",125),a(867,`
          `),l(),a(868,`
        `),l(),a(869,`
        `),d(870,"div",127),a(871,`
          `),d(872,"div",185),a(873,`
            `),d(874,"div",129),a(875,`
              `),m(876,"div",130),a(877,`
              `),m(878,"div",131),a(879,`
            `),l(),a(880,`
            `),d(881,"div",132),a(882,`
              `),m(883,"div",133),a(884,`
              `),m(885,"div",134),a(886,`
            `),l(),a(887,`
            `),d(888,"div",135),a(889,`
              `),m(890,"div",136),a(891,`
              `),m(892,"div",137),a(893,`
            `),l(),a(894,`
          `),l(),a(895,`
          `),d(896,"div",138),a(897,`
            `),d(898,"div",139),a(899,`
              `),m(900,"div",140),a(901,`
              `),m(902,"div",141),a(903,`
            `),l(),a(904,`
            `),d(905,"div",142),a(906,`
              `),m(907,"div",143),a(908,`
              `),m(909,"div",144),a(910,`
            `),l(),a(911,`
            `),d(912,"div",145),a(913,`
              `),m(914,"div",146),a(915,`
              `),m(916,"div",147),a(917,`
            `),l(),a(918,`
          `),l(),a(919,`
          `),d(920,"div",148),a(921,`
            `),d(922,"div",149),a(923,`
              `),m(924,"div",150),a(925,`
              `),m(926,"div",151),a(927,`
            `),l(),a(928,`
            `),d(929,"div",152),a(930,`
              `),m(931,"div",153),a(932,`
              `),m(933,"div",154),a(934,`
            `),l(),a(935,`
            `),d(936,"div",155),a(937,`
              `),m(938,"div",156),a(939,`
              `),m(940,"div",157),a(941,`
            `),l(),a(942,`
          `),l(),a(943,`
          `),m(944,"div",125),a(945,`
        `),l(),a(946,`
      `),l(),a(947,`
    `),l()()(),m(948,"hr"),d(949,"html")(950,"head"),m(951,"meta",1)(952,"meta",2)(953,"meta",190)(954,"link",4),l(),d(955,"body")(956,"div",12)(957,"div",13),m(958,"div",14)(959,"div",15),l(),d(960,"div",191)(961,"div",192)(962,"a",193),m(963,"img",194),l()(),m(964,"div",195),l()(),d(965,"div",17)(966,"table")(967,"thead",196)(968,"tr")(969,"td"),m(970,"div",18),l()()(),d(971,"tbody")(972,"tr")(973,"td",197)(974,"div",198)(975,"div",100)(976,"div",101)(977,"div",102),m(978,"img",199),l(),d(979,"div",110),m(980,"div",111)(981,"div",200)(982,"div",115),d(983,"div",116)(984,"div",117)(985,"span"),a(986,"GSTIN:"),l(),a(987,"\xA0 "),m(988,"span",118),l(),d(989,"div",119)(990,"span"),a(991,"Mobile:"),l(),a(992,"\xA0 "),m(993,"span",120),l()(),d(994,"div",121)(995,"span"),a(996,"PAN Number:"),l(),a(997,"\xA0 "),m(998,"span",122),l(),d(999,"div",123)(1e3,"span"),a(1001,"Email:"),l(),a(1002,"\xA0 "),m(1003,"span",124),l()()(),d(1004,"div",127)(1005,"div",185)(1006,"div",129)(1007,"div",130),a(1008,"Invoice No."),l(),m(1009,"div",131),l(),d(1010,"div",132)(1011,"div",133),a(1012,"Invoice Date"),l(),m(1013,"div",134),l(),d(1014,"div",135)(1015,"div",136),a(1016,"Due Date"),l(),m(1017,"div",137),l()(),d(1018,"div",138)(1019,"div",139),m(1020,"div",140)(1021,"div",141),l(),d(1022,"div",142),m(1023,"div",143)(1024,"div",144),l(),d(1025,"div",145),m(1026,"div",146)(1027,"div",147),l()(),d(1028,"div",148)(1029,"div",149),m(1030,"div",150)(1031,"div",151),l(),d(1032,"div",152),m(1033,"div",153)(1034,"div",154),l(),d(1035,"div",155),m(1036,"div",156)(1037,"div",157),l()()()(),d(1038,"div",159)(1039,"div",160)(1040,"div",161),a(1041,"BILL TO"),l(),m(1042,"div",162),d(1043,"div",163)(1044,"div",164)(1045,"span",165),a(1046,"Address:"),l(),m(1047,"span",166),l(),d(1048,"div")(1049,"span",167),a(1050,"GSTIN:"),l(),m(1051,"span",168),d(1052,"span",169),a(1053,"State:"),l(),m(1054,"span",170),l(),d(1055,"div")(1056,"div",171)(1057,"span",165),a(1058,"Mobile:"),l(),m(1059,"span",172),l(),d(1060,"div",173)(1061,"span",165),a(1062,"PAN Number:"),l(),m(1063,"span",174),l()(),m(1064,"div",175),l()(),d(1065,"div",176)(1066,"div",177),a(1067,"SHIP TO"),l(),m(1068,"div",178),d(1069,"div",163)(1070,"div",179)(1071,"span",165),a(1072,"Address:"),l(),m(1073,"span",180),l(),d(1074,"div",181)(1075,"span",165),a(1076,"Mobile:"),l(),m(1077,"span",182),l()()()(),d(1078,"table",201)(1079,"thead")(1080,"tr")(1081,"th",202),a(1082,"S.NO."),l(),d(1083,"th",203),a(1084,"ITEMS"),l(),d(1085,"th",204),a(1086," HSN "),l(),d(1087,"th",205),a(1088," ADDN1 "),l(),d(1089,"th",206),a(1090," ADDN2 "),l(),d(1091,"th",207),a(1092," ADDN3 "),l(),d(1093,"th",208),a(1094," ADDN4 "),l(),d(1095,"th",209),a(1096,"QTY."),l(),d(1097,"th",210),a(1098," MRP "),l(),d(1099,"th",211),a(1100," RATE "),l(),d(1101,"th",212),a(1102,"DISC."),l(),d(1103,"th",202),a(1104,"TAX"),l(),d(1105,"th",213),a(1106,"CESS"),l(),d(1107,"th",202),a(1108,"AMOUNT"),l()()(),m(1109,"tbody",24),l(),d(1110,"table",214)(1111,"thead")(1112,"tr")(1113,"th",26),a(1114,"HSN/SAC"),l(),d(1115,"th",26),a(1116,"Taxable Value"),l(),d(1117,"th",27)(1118,"div"),a(1119,"CGST"),l(),d(1120,"div",28)(1121,"div",29),a(1122,"Rate"),l(),d(1123,"div",30),a(1124,"Amount"),l()()(),d(1125,"th",31)(1126,"div",32),a(1127,"SGST"),l(),d(1128,"div",28)(1129,"div",29),a(1130,"Rate"),l(),d(1131,"div",30),a(1132,"Amount"),l()()(),d(1133,"th",33)(1134,"div"),a(1135,"IGST"),l(),d(1136,"div",28)(1137,"div",29),a(1138,"Rate"),l(),d(1139,"div",30),a(1140,"Amount"),l()()(),d(1141,"th",34),a(1142,"Cess"),l(),d(1143,"th",26),a(1144,"Total Tax Amount"),l()()(),m(1145,"tbody",35),l(),d(1146,"div",38)(1147,"div",39)(1148,"div",41)(1149,"div",42),a(1150,"Total Amount (in words)"),l(),m(1151,"div",43),l(),d(1152,"div",44)(1153,"div",45),a(1154,"Total Amount (in words)"),l(),m(1155,"div",46),l()(),d(1156,"div",47)(1157,"div",48)(1158,"div",49),a(1159,"Notes"),l(),m(1160,"div",50),l(),d(1161,"div",51)(1162,"div",52),a(1163,"Bank Details"),l(),d(1164,"div",53)(1165,"div",54),a(1166,"Name:"),l(),m(1167,"div",55),l(),d(1168,"div",53)(1169,"div",54),a(1170,"IFSC Code:"),l(),m(1171,"div",56),l(),d(1172,"div",53)(1173,"div",54),a(1174,"Account No:"),l(),m(1175,"div",57),l(),d(1176,"div",53)(1177,"div",54),a(1178,"Bank:"),l(),m(1179,"div",58),l()(),d(1180,"div",59)(1181,"div",60)(1182,"div",61)(1183,"div",62),a(1184,"Payment QR Code"),l(),d(1185,"div",63),a(1186,"UPI ID:"),l(),m(1187,"div",64),d(1188,"div",65)(1189,"div",66)(1190,"a",67),a(1191,"PAY NOW >"),l(),m(1192,"br")(1193,"a",68),l()(),d(1194,"div",69),m(1195,"img",70),l()(),d(1196,"div",71),m(1197,"canvas",72),l()()(),d(1198,"div",73)(1199,"div",74),a(1200,"Terms and Conditions"),l(),m(1201,"div",75),l(),d(1202,"div",76)(1203,"div",77),m(1204,"img",78),l(),d(1205,"div",79),a(1206,"Authorised Signatory For"),l(),m(1207,"div",80),l()()(),d(1208,"div",81)(1209,"div",82),m(1210,"canvas",83),l(),d(1211,"div",84)(1212,"div",85),a(1213,"e-Invoice details"),l(),d(1214,"div",86)(1215,"div",87),a(1216,"IRN:"),l(),m(1217,"div",88),l(),d(1218,"div",89)(1219,"div",87),a(1220,"Ack No:"),l(),m(1221,"div",90),l(),d(1222,"div",91)(1223,"div",87),a(1224,"Ack Date:"),l(),m(1225,"div",92),l(),d(1226,"div",93),a(1227," e-Invoicing detail(s) generated from the Government's e-Invoicing system. "),l()()()()()()(),d(1228,"tfoot",215)(1229,"tr")(1230,"td"),m(1231,"div",216),l()()()()(),d(1232,"div",217)(1233,"div",218)(1234,"a",193),m(1235,"img",219),l()()()()()),r&2&&_n("ngForOf",o.projects)},dependencies:[Dh],styles:[Mp,`@media screen {
  html[_ngcontent-%COMP%] {
    background-color: #fbfbfd;
  }

  .page-header[_ngcontent-%COMP%] {
    height: 10mm;
    padding: 10px 15px;
    box-sizing: border-box;
  }

  .page-footer[_ngcontent-%COMP%] {
    height: 10mm;
  }

  body[_ngcontent-%COMP%] {
    padding: 4mm 10mm;
    width: 190mm;
    font-family: "Source Sans Pro";
    position: relative;
  }

  .page-heading-edit[_ngcontent-%COMP%] {
    display: none;
    align-items: center;
    background: #f2f2f2;
    padding: 10px 15px;
    box-sizing: border-box;
    max-height: 50px;
    border: 1px solid black;
    font-family: "Source Sans Pro";
  }

  .page-heading-text[_ngcontent-%COMP%] {
    flex-grow: 1;
    font-weight: 600;
    font-size: 4mm;
    line-height: 6mm;
    text-transform: uppercase;
    color: #28313b;
    flex-grow: 1;
    font-family: "Source Sans Pro";
  }

  .page-heading-edit-btn[_ngcontent-%COMP%] {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    background: #ffffff;
    border: 1px solid #d9d4d4;
    border-radius: 4px;
    flex-grow: 0;
    text-transform: uppercase;
    max-width: 88px;
    max-height: 30px;
    gap: 10px;
    cursor: pointer;
  }

  .page-heading-edit-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #28313b;
  }

  .miscellaneous_details[_ngcontent-%COMP%] {
    margin-top: 15px;
  }

  #watermark[_ngcontent-%COMP%] {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.3;
    transform: translateX(-100px) translateY(-100px);
  }
}

@media print {
  html[_ngcontent-%COMP%] {
    background-color: initial;
  }

  body[_ngcontent-%COMP%] {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  #watermark[_ngcontent-%COMP%] {
    width: 200px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    opacity: 0.5;
    transform: translateX(-100px) translateY(-100px);
  }

  .page-heading-edit[_ngcontent-%COMP%] {
    display: none;
    align-items: center;
    background: #f2f2f2;
    padding: 10px 15px;
    box-sizing: border-box;
    max-height: 50px;
    border-style: solid solid none solid;
    border-color: #28313b;
    border-width: 1px;
  }

  .page-heading-text[_ngcontent-%COMP%] {
    flex-grow: 1;
    font-weight: 600;
    font-size: 4mm;
    line-height: 6mm;
    text-transform: uppercase;
    color: #28313b;
    flex-grow: 1;
  }

  .page-heading-edit-btn[_ngcontent-%COMP%] {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    background: #ffffff;
    border: 1px solid #d9d4d4;
    border-radius: 4px;
    flex-grow: 0;
    text-transform: uppercase;
    max-width: 88px;
    max-height: 30px;
    gap: 10px;
  }

  .page-heading-edit-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #28313b;
  }

  .page-header[_ngcontent-%COMP%] {
    width: 100%;
    position: fixed;
    top: 0;
  }

  .page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%] {
    height: 5mm;
  }
}

#page[_ngcontent-%COMP%] {
  font-style: normal;
  position: relative;
}

.bottom-content-container[_ngcontent-%COMP%] {
  margin-top: 15px;
}

.hide[_ngcontent-%COMP%] {
  display: none;
}

.items-table-header[_ngcontent-%COMP%] {
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #000000;
  position: relative;
}

.items-table-total[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  color: #000000;
}

.items-table-info[_ngcontent-%COMP%] {
  cursor: grab;
}



#business-section-layout-one-container[_ngcontent-%COMP%]   .sub-details-class[_ngcontent-%COMP%] {
  min-height: 12mm;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   .main-details-class[_ngcontent-%COMP%] {
  min-height: 12mm;
  line-height: 1;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   #company-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: #000000;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   #company-address-content[_ngcontent-%COMP%] {
  display: flex;
  gap: 2mm;
  font-size: 12px;
  line-height: 1;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   .company-address-label[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   .company-address[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   #company-gst-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-one-container[_ngcontent-%COMP%]   #company-mobile-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-one-container[_ngcontent-%COMP%]   #company-pan-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-one-container[_ngcontent-%COMP%]   #company-email-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}







#business-section-layout-two-container[_ngcontent-%COMP%]   #company-details[_ngcontent-%COMP%] {
  border-width: 1px;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-details-meta[_ngcontent-%COMP%] {
  padding-block: 4mm;
  gap: 5mm;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #invoice-details-meta[_ngcontent-%COMP%] {
  border: 1px solid black;
  border-top: 0px;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #invoice-main-details[_ngcontent-%COMP%] {
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
  text-align: left;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-width: 0;
  max-width: 50%;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-contact-details[_ngcontent-%COMP%] {
  flex-direction: column;
  align-items: normal;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-email-content[_ngcontent-%COMP%] {
  justify-content: normal;
  align-items: normal;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-gst-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-two-container[_ngcontent-%COMP%]   #company-mobile-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-two-container[_ngcontent-%COMP%]   #company-pan-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-two-container[_ngcontent-%COMP%]   #company-email-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-gst-number[_ngcontent-%COMP%], #business-section-layout-two-container[_ngcontent-%COMP%]   #company-mobile-number[_ngcontent-%COMP%], #business-section-layout-two-container[_ngcontent-%COMP%]   #company-pan-number[_ngcontent-%COMP%], #business-section-layout-two-container[_ngcontent-%COMP%]   #company-email[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
  word-break: break-all;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-email[_ngcontent-%COMP%] {
  width: 150px;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 16px;
  line-height: 1x;
  color: #000000;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-address-content[_ngcontent-%COMP%] {
  display: flex;
  gap: 2mm;
  font-size: 12px;
  line-height: 1;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   .company-address-label[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   .company-address[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #28313b;
}

.billto-address-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1mm;
  margin-top: 1mm;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   .title-bill-ship-to[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #bill-to-company-name[_ngcontent-%COMP%], #ship-to-company-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #bill-to[_ngcontent-%COMP%], #business-section-layout-two-container[_ngcontent-%COMP%]   #ship-to[_ngcontent-%COMP%] {
  padding-inline: 1mm;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   #company-mobile-number-content[_ngcontent-%COMP%]   #company-mobile-number[_ngcontent-%COMP%] {
  margin-right: 10px;
}





#business-section-layout-three-container[_ngcontent-%COMP%]   #company-details[_ngcontent-%COMP%] {
  border-width: 1px;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-details-meta[_ngcontent-%COMP%] {
  padding-block: 4mm;
  gap: 5mm;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #invoice-details-meta[_ngcontent-%COMP%] {
  border-right: 1px solid black;
  border-top: 0px;
  border-left: 0px;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #invoice-main-details[_ngcontent-%COMP%], #business-section-layout-three-container[_ngcontent-%COMP%]   #invoice-sub-details[_ngcontent-%COMP%] {
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
  text-align: left;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #invoice-main-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-width: 0;
  max-width: 50%;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-contact-details[_ngcontent-%COMP%] {
  flex-direction: column;
  align-items: normal;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-email-content[_ngcontent-%COMP%] {
  justify-content: normal;
  align-items: normal;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-email[_ngcontent-%COMP%] {
  width: 150px;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-gst-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-three-container[_ngcontent-%COMP%]   #company-mobile-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-three-container[_ngcontent-%COMP%]   #company-pan-number-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, #business-section-layout-three-container[_ngcontent-%COMP%]   #company-email-content[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-gst-number[_ngcontent-%COMP%], #business-section-layout-three-container[_ngcontent-%COMP%]   #company-mobile-number[_ngcontent-%COMP%], #business-section-layout-three-container[_ngcontent-%COMP%]   #company-pan-number[_ngcontent-%COMP%], #business-section-layout-three-container[_ngcontent-%COMP%]   #company-email[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
  word-break: break-all;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: #000000;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-address-content[_ngcontent-%COMP%] {
  display: flex;
  gap: 2mm;
  font-size: 12px;
  line-height: 1;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .company-address-label[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .company-address[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .billto-address-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1mm;
  margin-top: 1mm;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .title-bill-ship-to[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #bill-to-company-name[_ngcontent-%COMP%], #ship-to-company-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #28313b;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #bill-to[_ngcontent-%COMP%], #business-section-layout-three-container[_ngcontent-%COMP%]   #ship-to[_ngcontent-%COMP%] {
  padding-inline: 1mm;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .address-invoice-group[_ngcontent-%COMP%] {
  display: flex;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   #company-mobile-number-content[_ngcontent-%COMP%]   #company-mobile-number[_ngcontent-%COMP%] {
  margin-right: 10px;
}



svg[_ngcontent-%COMP%] {
  pointer-events: none;
}

.edit-svg[_ngcontent-%COMP%] {
  pointer-events: none;
}



#upi-details[_ngcontent-%COMP%] {
  display: block;
}

#upi-details-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}

.clone-table[_ngcontent-%COMP%] {
  border-right: 1px solid black;
  border-top: 1px solid black;
}

.draggable[_ngcontent-%COMP%] {
  display: inline-block;
  margin-right: -4px;
}

.placeholder[_ngcontent-%COMP%] {
  border: 2px dashed #cbd5e0;
  display: inline-block;
  margin-right: -4px;
  height: 100%;
}

.resizer[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  user-select: none;
  height: 640px;
}

.resizer[_ngcontent-%COMP%]:hover {
  border-right: 1px solid black;
  cursor: col-resize;
}



#bill-to[_ngcontent-%COMP%], #ship-to[_ngcontent-%COMP%] {
  position: relative;
}

#company-details[_ngcontent-%COMP%] {
  position: relative;
}

#invoice-details-meta[_ngcontent-%COMP%] {
  position: relative;
}

#amount-words-container[_ngcontent-%COMP%] {
  position: relative;
}

.spacing[_ngcontent-%COMP%] {
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
  position: absolute;
  bottom: 0px;
}

.spacing-top[_ngcontent-%COMP%] {
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
  position: absolute;
  top: 0px;
}



.margin-spacing-top[_ngcontent-%COMP%] {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fe6193;
  top: 0px;
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
}

.margin-spacing-left[_ngcontent-%COMP%] {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fe6193;
  left: 0px;
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
  top: 0px;
}

.margin-spacing-right[_ngcontent-%COMP%] {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fe6193;
  right: 0px;
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
  top: 0px;
}

.margin-spacing-bottom[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0px;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fe6193;
  border: 0.5px dashed #e5346c;
  background: rgba(255, 235, 242, 0.4);
}

.margin-right-text[_ngcontent-%COMP%] {
  transform: rotate(90deg);
}

.margin-left-text[_ngcontent-%COMP%] {
  transform: rotate(-90deg);
}




.item_table-tag[_ngcontent-%COMP%], .party_details-tag[_ngcontent-%COMP%], .business_details-tag[_ngcontent-%COMP%], .invoice_details-tag[_ngcontent-%COMP%], .miscellaneous_section-tag[_ngcontent-%COMP%] {
  padding: 0px 10px;
  align-items: center;
  position: relative;
  background-color: #3da3ed;
  border-radius: 4px 4px 0px 0px;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  bottom: -20px;
  line-height: 18px;
  color: #fff;
  display: none;
  height: fit-content;
}

.party_details-tag[_ngcontent-%COMP%] {
  bottom: 0px;
}

.invoice_details-tag[_ngcontent-%COMP%] {
  bottom: 20px;
  left: 120px;
}

.miscellaneous_section-tag[_ngcontent-%COMP%] {
  top: 15px;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   .invoice_details-tag[_ngcontent-%COMP%] {
  position: absolute;
  left: 360px;
  top: -20px;
}

#business-section-layout-one-container[_ngcontent-%COMP%]   .business_details-tag[_ngcontent-%COMP%] {
  position: absolute;
  top: 25px;
}

.business_details-tag[_ngcontent-%COMP%] {
  bottom: 0px;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .address-invoice-group[_ngcontent-%COMP%] {
  border-top: 1px solid black;
}

#business-section-layout-three-container[_ngcontent-%COMP%]   .invoice_details-tag[_ngcontent-%COMP%] {
  bottom: 0px;
  left: 410px;
}

#business-section-layout-two-container[_ngcontent-%COMP%]   .invoice_details-tag[_ngcontent-%COMP%] {
  bottom: 0px;
  left: 0px;
}

.watermark-text[_ngcontent-%COMP%] {
  font-size: 500%;
  text-align: center;
}



#company-header-container[_ngcontent-%COMP%] {
  display: inline-block;
  width: 100%;
  min-height: 25mm;
  max-height: 25mm;
}

#company-header-img[_ngcontent-%COMP%] {
  width: 100%;
  height: 162px;
}

.hoverClass[_ngcontent-%COMP%] {
  outline: 4px dashed #cbced0;
  background-color: #fafafa;
}`,Mp,`@media screen {
  .page-header[_ngcontent-%COMP%] {
    height: 10mm;
  }

  .page-footer[_ngcontent-%COMP%] {
    height: 10mm;
  }

  body[_ngcontent-%COMP%] {
    padding: 4mm 10mm;
    width: 190mm;
  }
}

@media print {
  html[_ngcontent-%COMP%] {
    background-color: initial;
  }

  body[_ngcontent-%COMP%] {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page-footer[_ngcontent-%COMP%] {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding-bottom: 2mm;
  }

  .page-header[_ngcontent-%COMP%] {
    width: 100%;
    position: fixed;
    top: 0;
    padding-top: 2mm;
  }

  #main-header[_ngcontent-%COMP%] {
    display: table-header-group;
  }

  #main-footer[_ngcontent-%COMP%] {
    display: table-footer-group;
  }

  .page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%] {
    height: 11mm;
  }

  .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%] {
    height: 9mm;
  }

  .highlight[_ngcontent-%COMP%] {
    display: none;
    visibility: hidden;
  }
}

@page {
  size: A4;
  margin: 0mm 10mm;
}

.page-header-tagline[_ngcontent-%COMP%] {
  font-size: 3.5mm;
}

.page-header-sub-type[_ngcontent-%COMP%] {
  padding: 2px 4px;
}



.company-logo-container[_ngcontent-%COMP%], #company-logo[_ngcontent-%COMP%] {
  height: 23mm;
  width: 23mm;
}



.misc-details-container[_ngcontent-%COMP%] {
  flex-flow: row wrap;
}

.misc-details[_ngcontent-%COMP%]:nth-last-child(5):first-child, .misc-details[_ngcontent-%COMP%]:nth-last-child(5):first-child ~ .misc-details[_ngcontent-%COMP%] {
  flex-basis: 30%;
}

.misc-details[_ngcontent-%COMP%]:nth-last-child(4):first-child, .misc-details[_ngcontent-%COMP%]:nth-last-child(4):first-child ~ .misc-details[_ngcontent-%COMP%] {
  flex-basis: 40%;
}



#upi-details[_ngcontent-%COMP%] {
  display: block;
}

#upi-details-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}

.sub-details-class[_ngcontent-%COMP%], #invoice-main-details[_ngcontent-%COMP%] {
  min-height: 12mm;
}`]});let t=e;return t})();var Op=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=$e({type:e,selectors:[["app-about"]],decls:0,vars:0,template:function(r,o){},styles:["body[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background-color:#f8f8f8;color:#333;margin:0;padding:0}.header[_ngcontent-%COMP%]{background-color:#2c3e50;color:#ecf0f1;text-align:center;padding:30px}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2em}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.about-me[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;background-color:#fff;padding:30px;border-radius:10px;box-shadow:0 0 20px #0000001a;line-height:1.6}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#3498db}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:15px}.about-me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#e74c3c;text-decoration:none;font-weight:700;transition:color .3s ease}.about-me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#c0392b}.about-me[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{font-weight:700;color:#e74c3c}"]});let t=e;return t})();var Pp=[{path:"blog",component:Dp},{path:"projects",component:Sp},{path:"",component:Op}];var Tp={providers:[xp(Pp)]};var yt={_origin:"https://api.emailjs.com"};var Ap=(t,e="https://api.emailjs.com")=>{yt._userID=t,yt._origin=e};var Ho=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var Wi=class{constructor(e){this.status=e.status,this.text=e.responseText}};var zo=(t,e,n={})=>new Promise((i,r)=>{let o=new XMLHttpRequest;o.addEventListener("load",({target:s})=>{let c=new Wi(s);c.status===200||c.text==="OK"?i(c):r(c)}),o.addEventListener("error",({target:s})=>{r(new Wi(s))}),o.open("POST",yt._origin+t,!0),Object.keys(n).forEach(s=>{o.setRequestHeader(s,n[s])}),o.send(e)});var Np=(t,e,n,i)=>{let r=i||yt._userID;return Ho(r,t,e),zo("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})};var Jb=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Rp=(t,e,n,i)=>{let r=i||yt._userID,o=Jb(n);Ho(r,t,e);let s=new FormData(o);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",r),zo("/api/v1.0/email/send-form",s)};var _p={init:Ap,send:Np,sendForm:Rp};var gl=Sm(kp());var Zb=["viewport"],Fp=(()=>{let e=class e{constructor(){this.title="portfolio",this.canScroll=!0}handleMouseWheelEvent(i){if(!document.querySelector(".outer-nav")?.classList.contains("is-vis")){i.preventDefault();let r=i.wheelDelta?-i.wheelDelta:i.detail*20;r>50&&this.canScroll?(this.canScroll=!1,clearTimeout(this.scrollController),this.scrollController=setTimeout(()=>{this.canScroll=!0},800),this.updateHelper(1)):r<-50&&this.canScroll&&(this.canScroll=!1,clearTimeout(this.scrollController),this.scrollController=setTimeout(()=>{this.canScroll=!0},800),this.updateHelper(-1))}}handleKeyUpEvent(i){document.querySelector(".outer-nav")?.classList.contains("is-vis")||(i.preventDefault(),this.updateHelper(i))}outerNav(){document.querySelector(".header--nav-toggle")?.addEventListener("click",()=>{let i=document.querySelector(".perspective");i.classList.add("perspective--modalview"),setTimeout(()=>{i.classList.add("effect-rotate-left--animate")},25),document.querySelectorAll(".outer-nav, .outer-nav li, .outer-nav--return").forEach(r=>{r.classList.add("is-vis")})}),document.querySelectorAll(".outer-nav--return, .outer-nav li").forEach(i=>{i.addEventListener("click",()=>{let r=document.querySelector(".perspective");r.classList.remove("effect-rotate-left--animate"),setTimeout(()=>{r.classList.remove("perspective--modalview")},400),document.querySelectorAll(".outer-nav, .outer-nav li, .outer-nav--return").forEach(o=>{o.classList.remove("is-vis")})})})}workSlider(){document.querySelectorAll(".slider--prev, .slider--next").forEach(i=>{i.addEventListener("click",()=>{let r=Array.from(document.querySelectorAll(".slider .slider--item")),o=r.length,s=r.findIndex(g=>g.classList.contains("slider--item-left")),c=r.findIndex(g=>g.classList.contains("slider--item-center")),u=r.findIndex(g=>g.classList.contains("slider--item-right")),f=document.querySelector(".slider");f&&(f.style.opacity="0"),setTimeout(()=>{if(r.forEach(g=>{g.classList.remove("slider--item-left","slider--item-center","slider--item-right")}),i.classList.contains("slider--next")){let g=(s+1)%o,y=(c+1)%o,b=(u+1)%o;r[g].classList.add("slider--item-left"),r[y].classList.add("slider--item-center"),r[b].classList.add("slider--item-right")}else{let g=(s-1+o)%o,y=(c-1+o)%o,b=(u-1+o)%o;r[g].classList.add("slider--item-left"),r[y].classList.add("slider--item-center"),r[b].classList.add("slider--item-right")}f&&(f.style.opacity="1")},400)})})}transitionLabels(){document.querySelectorAll(".work-request--information input").forEach(i=>{i.addEventListener("focusout",()=>{i.value===""?i.classList.remove("has-value"):i.classList.add("has-value"),window.scrollTo(0,0)})})}ngOnInit(){this.outerNav(),this.workSlider(),this.transitionLabels(),this.setupMouseWheelListener(),this.setupClickListener(),this.setupSwipeListener(),this.setupKeyListener()}setupMouseWheelListener(){document.addEventListener("mousewheel",i=>this.handleMouseWheel(i)),document.addEventListener("DOMMouseScroll",i=>this.handleMouseWheel(i))}handleMouseWheel(i){if(!document.querySelector(".outer-nav")?.classList.contains("is-vis")){i.preventDefault();let o=i.wheelDelta?-i.wheelDelta:i.detail*20;o>50&&this.canScroll?(this.canScroll=!1,clearTimeout(this.scrollController),this.scrollController=setTimeout(()=>{this.canScroll=!0},800),this.updateHelper(1)):o<-50&&this.canScroll&&(this.canScroll=!1,clearTimeout(this.scrollController),this.scrollController=setTimeout(()=>{this.canScroll=!0},800),this.updateHelper(-1))}}setupClickListener(){document.querySelectorAll(".side-nav li, .outer-nav li").forEach(r=>{r.addEventListener("click",()=>this.handleClick(r))}),document.querySelector(".cta")?.addEventListener("click",()=>this.handleCtaClick())}handleClick(i){if(!i.classList.contains("is-active")){let r=i.parentNode.querySelector(".is-active"),o=Array.from(i.parentNode.children).indexOf(r),s=Array.from(i.parentNode.children).indexOf(i),c=i.parentNode.children.length-1;this.updateNavs(s),this.updateContent(o,s,c)}}handleCtaClick(){let i=document.querySelector(".side-nav .is-active"),r=document.querySelector(".side-nav");if(r&&i){let o=Array.from(r.children).indexOf(i),s=r.children.length-1,c=s;this.updateNavs(s),this.updateContent(o,c,s)}}setupSwipeListener(){let i=new gl.default(this.viewport.nativeElement);i.get("swipe").set({direction:gl.default.DIRECTION_VERTICAL}),i.on("swipeup swipedown",r=>this.updateHelper(r))}setupKeyListener(){document.addEventListener("keyup",i=>this.handleKeyUp(i))}handleKeyUp(i){document.querySelector(".outer-nav")?.classList.contains("is-vis")||(i.preventDefault(),this.updateHelper(i))}updateHelper(i){let r=document.querySelector(".side-nav .is-active"),o=document.querySelector(".side-nav");if(o){let s=Array.from(o.children),c=s.indexOf(r),u=s.length-1,f=0;i.type==="swipeup"||i.keyCode===40||i>0?c<u&&(f=c+1,this.updateNavs(f),this.updateContent(c,f,u)):(i.type==="swipedown"||i.keyCode===38||i<0)&&c>0&&(f=c-1,this.updateNavs(f),this.updateContent(c,f,u))}}updateNavs(i){document.querySelectorAll(".side-nav, .outer-nav").forEach(r=>{let o=r.children;Array.from(o).forEach(s=>{s.classList.remove("is-active")})}),document.querySelector(".side-nav")?.children[i].classList.add("is-active"),document.querySelector(".outer-nav")?.children[i].classList.add("is-active")}updateContent(i,r,o){document.querySelectorAll(".main-content").forEach(s=>{let c=s?.children;console.log(s?.children,"content"),c&&(console.log("ehllo"),Array.from(c).forEach(u=>{u.classList.remove("section--is-active")}))}),document.querySelector(".main-content")?.children[r].classList.add("section--is-active"),document.querySelectorAll(".main-content .section").forEach(s=>{let c=s?.children;c&&Array.from(c).forEach(u=>{u.classList.remove("section--next","section--prev")})}),i===o&&r===0||i===0&&r===o?document.querySelectorAll(".main-content .section").forEach(s=>{let c=s?.children;c&&Array.from(c).forEach(u=>{u.classList.remove("section--next","section--prev")})}):i<r?document.querySelector(".main-content")?.children[i].children[0].classList.add("section--next"):document.querySelector(".main-content")?.children[i].children[0].classList.add("section--prev"),r!==0&&r!==o?document.querySelector(".header--cta")?.classList.add("is-active"):document.querySelector(".header--cta")?.classList.remove("is-active")}sendEmail(){let i={to_name:"Recipient Name",from_name:"Your Name",message:"This is a test email from Angular using EmailJS."};_p.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",i,"YOUR_USER_ID").then(r=>{console.log("SUCCESS!",r.status,r.text)},r=>{console.error("FAILED...",r)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=$e({type:e,selectors:[["app-root"]],viewQuery:function(r,o){if(r&1&&oh(Zb,5),r&2){let s;cc(s=lc())&&(o.viewport=s.first)}},hostBindings:function(r,o){r&1&&yo("mousewheel",function(c){return o.handleMouseWheelEvent(c)},!1,lo)("DOMMouseScroll",function(c){return o.handleMouseWheelEvent(c)},!1,lo)("keyup",function(c){return o.handleKeyUpEvent(c)},!1,lo)},standalone:!0,features:[Pt],decls:200,vars:1,consts:[[1,"device-notification"],["href","#0",1,"device-notification--logo"],["src","assets/img/logo.png","alt","Global"],[1,"device-notification--message"],[1,"perspective","effect-rotate-left"],[1,"container"],[1,"outer-nav--return"],["id","viewport",1,"l-viewport"],[1,"l-wrapper"],[1,"header"],["href","#0",1,"header--logo"],[1,"header--cta","cta"],[1,"header--nav-toggle"],[1,"l-side-nav"],[1,"side-nav"],[1,"is-active"],[1,"l-main-content","main-content"],[1,"l-section","section","section--is-active"],[1,"intro"],[1,"intro--banner"],[1,"cta"],["version","1.1","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 150 118",0,"xml","space","preserve",2,"enable-background","new 0 0 150 118"],["transform","translate(0.000000,118.000000) scale(0.100000,-0.100000)"],["d","M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"],[1,"btn-background"],["src","assets/img/1723181129703-Photoroom-Photoroom.png","alt","Welcome"],[1,"intro--options"],["href","#0"],[1,"l-section","section"],[1,"about"],[1,"about--banner"],[1,"about--options"],["id","skills"],[1,"contact"],[1,"container2"],[1,"scene"],[1,"webpack-cube"],[1,"outer-cube"],[1,"face","face-top"],[1,"face","face-bottom"],[1,"face","face-left"],[1,"face","face-right"],[1,"face","face-front"],[1,"face","face-back"],[1,"inner-cube"],[1,"shadows-outer-container"],[1,"shadow-outer"],[1,"shadows-inner-container"],[1,"shadow-inner"],[1,"contact--lockup"],[1,"modal"],[1,"modal--information"],["href","mailto:sivamurugan0012@gmail.com"],["href","tel:+917373314740"],[1,"modal--options"],[1,"hire"],[1,"work-request"],[1,"work-request--options"],[1,"options-a"],["id","opt-1","type","checkbox","value","app design"],["for","opt-1"],["version","1.1","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 150 111",0,"xml","space","preserve",2,"enable-background","new 0 0 150 111"],["transform","translate(0.000000,111.000000) scale(0.100000,-0.100000)"],["d","M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"],["id","opt-2","type","checkbox","value","graphic design"],["for","opt-2"],["id","opt-3","type","checkbox","value","motion design"],["for","opt-3"],[1,"options-b"],["id","opt-4","type","checkbox","value","ux design"],["for","opt-4"],["id","opt-5","type","checkbox","value","webdesign"],["for","opt-5"],["id","opt-6","type","checkbox","value","marketing"],["for","opt-6"],[1,"work-request--information"],[1,"information-name"],["id","name","type","text","spellcheck","false"],["for","name"],[1,"information-email"],["id","email","type","email","spellcheck","false"],["for","email"],["type","submit","value","Send Request"],[1,"outer-nav"]],template:function(r,o){r&1&&(d(0,"div",0)(1,"a",1),m(2,"img",2),d(3,"p"),a(4,"Siva M"),l()(),d(5,"p",3),a(6," Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed. "),l()(),d(7,"div",4)(8,"div",5),m(9,"div",6),d(10,"div",7)(11,"div",8)(12,"header",9)(13,"a",10),m(14,"img",2),d(15,"p"),a(16,"Siva M"),l()(),d(17,"button",11),a(18,"Hire"),l(),d(19,"div",12),m(20,"span"),l()(),d(21,"nav",13)(22,"ul",14)(23,"li",15)(24,"span"),a(25,"Home"),l()(),d(26,"li")(27,"span"),a(28,"About"),l()(),d(29,"li")(30,"span"),a(31,"Contact"),l()(),d(32,"li")(33,"span"),a(34,"Hire us"),l()()()(),d(35,"ul",16)(36,"li",17)(37,"div",18)(38,"div",19)(39,"h1"),a(40,"Transforming Ideas "),m(41,"br"),a(42,"into "),m(43,"br"),a(44,"Digital Reality"),l(),d(45,"button",20),a(46," Hire "),Ie(),d(47,"svg",21)(48,"g",22),m(49,"path",23),l()(),Me(),m(50,"span",24),l(),m(51,"img",25),l(),d(52,"div",26)(53,"a",27)(54,"h3"),a(55,"Siva M"),l(),d(56,"p"),a(57,"Skilled FUll Developer with 1.5 Years of Experience"),l()(),d(58,"a",27)(59,"h3"),a(60,"Description"),l(),d(61,"p"),a(62," Specializing in creating dynamic and responsive web applications, "),m(63,"br"),a(64,"I have hands-on experience in Front-End With a comprehensive understanding of server-side technologies "),l(),m(65,"p"),l()()()(),d(66,"li",28)(67,"div",29)(68,"div",30)(69,"h2"),a(70,"A Bit "),m(71,"br"),a(72,"About Me"),l(),d(73,"a",27),a(74,"Career "),d(75,"span"),Ie(),d(76,"svg",21)(77,"g",22),m(78,"path",23),l()()()()(),Me(),d(79,"div",31)(80,"section",32)(81,"p"),a(82,"Hi, I'm Siva, a Full Stack Developer with a B.Sc. in Information Technology. "),m(83,"br"),a(84," I began my career in February 2023 at Appgs, starting with a talent management project. My role involved working with Angular and Node.js alongside SQL, using ORM for seamless database interactions."),l(),d(85,"p"),a(86,"Afterward, I contributed to a project in the leather industry, focusing on Angular and Node.js with Mongoose ORM. During this time, I enhanced the error-handling system in the Node.js backend by implementing a common error handler, which streamlined the process and improved system reliability. "),l(),d(87,"p"),a(88,"I then worked on a project in the textile industry, where I handled a complex version upgrade. My key contribution was developing sophisticated UI calculations that enabled users to determine costs dynamically based on various inputs."),l(),d(89,"p"),a(90,"Currently, I am involved in a product development project. My responsibilities include implementing service methods in Angular and maintaining the backend with Node.js. This experience has allowed me to deepen my expertise in both frontend and backend technologies, demonstrating my capability to work across the full stack."),l(),d(91,"p"),a(92,"My journey so far has equipped me with a diverse set of skills and experiences, making me a versatile and adaptive developer ready to tackle new challenges."),l()()()()(),d(93,"li",28)(94,"div",33)(95,"div",34)(96,"div",35)(97,"div",36)(98,"div",37),m(99,"div",38)(100,"div",39)(101,"div",40)(102,"div",41)(103,"div",42)(104,"div",43),l(),d(105,"div",44),m(106,"div",38)(107,"div",39)(108,"div",40)(109,"div",41)(110,"div",42)(111,"div",43),l()(),d(112,"div",45),m(113,"div",46),l(),d(114,"div",47),m(115,"div",48),l()()(),d(116,"div",49)(117,"div",50)(118,"div",51)(119,"a",52),a(120),l(),d(121,"a",53),a(122,"+91 7373314740"),l()(),d(123,"ul",54)(124,"li")(125,"a",27),a(126,"India"),l()(),d(127,"li")(128,"a",27),a(129,"Tamilnadu, Madurai "),m(130,"br"),a(131," 625501"),l()(),d(132,"li")(133,"a",52),a(134,"Contact Us"),l()()()()()()(),d(135,"li",28)(136,"div",55)(137,"h2"),a(138,"You want us to do"),l(),d(139,"form",56)(140,"div",57)(141,"span",58),m(142,"input",59),d(143,"label",60),Ie(),d(144,"svg",61)(145,"g",62),m(146,"path",63),l()(),a(147," Web App Design "),l(),Me(),m(148,"input",64),d(149,"label",65),Ie(),d(150,"svg",61)(151,"g",62),m(152,"path",63),l()(),a(153," Mobile App Design "),l(),Me(),m(154,"input",66),d(155,"label",67),Ie(),d(156,"svg",61)(157,"g",62),m(158,"path",63),l()(),a(159," Logo Design "),l()(),Me(),d(160,"span",68),m(161,"input",69),d(162,"label",70),Ie(),d(163,"svg",61)(164,"g",62),m(165,"path",63),l()(),a(166," UX Design "),l(),Me(),m(167,"input",71),d(168,"label",72),Ie(),d(169,"svg",61)(170,"g",62),m(171,"path",63),l()(),a(172," Webdesign "),l(),Me(),m(173,"input",73),d(174,"label",74),Ie(),d(175,"svg",61)(176,"g",62),m(177,"path",63),l()(),a(178," SEO "),l()()(),Me(),d(179,"div",75)(180,"div",76),m(181,"input",77),d(182,"label",78),a(183,"Name"),l()(),d(184,"div",79),m(185,"input",80),d(186,"label",81),a(187,"Email"),l()()(),m(188,"input",82),l()()()()()()(),d(189,"ul",83)(190,"li",15),a(191,"Home"),l(),d(192,"li"),a(193,"Works"),l(),d(194,"li"),a(195,"About"),l(),d(196,"li"),a(197,"Contact"),l(),d(198,"li"),a(199,"Hire us"),l()()()),r&2&&(Zt(120),wi("sivamurugan0012@gmail.com"))},styles:['#skills[_ngcontent-%COMP%]{padding:1px}.card[_ngcontent-%COMP%]{width:210px;height:254px;border-radius:4px;background:#212121;display:flex;gap:5px;padding:.4em}.card[_ngcontent-%COMP%]   .hover-p[_ngcontent-%COMP%]{height:100%;flex:1;overflow:hidden;cursor:pointer;border-radius:2px;transition:all .5s;background:#212121;border:1px solid #ff5a91;display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]   .hover-p[_ngcontent-%COMP%]:hover{flex:4}.card[_ngcontent-%COMP%]   .hover-p[_ngcontent-%COMP%]:hover   .strings[_ngcontent-%COMP%]{display:block!important}.strings[_ngcontent-%COMP%]{display:none!important}.card[_ngcontent-%COMP%]   .hover-p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:14em;padding:.5em;text-align:center;transform:rotate(-90deg);transition:all .5s;text-transform:uppercase;color:#ff568e;letter-spacing:.1em}.card[_ngcontent-%COMP%]   .hover-p[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{transform:rotate(0)}.top[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:10px}.circle[_ngcontent-%COMP%]{padding:0 4px}.circle2[_ngcontent-%COMP%]{display:inline-block;align-items:center;width:10px;height:10px;padding:1px;border-radius:5px}.red[_ngcontent-%COMP%]{background-color:#ff605c}.yellow[_ngcontent-%COMP%]{background-color:#ffbd44}.green[_ngcontent-%COMP%]{background-color:#00ca4e}.header[_ngcontent-%COMP%]{margin:5px;border-radius:5px}#title2[_ngcontent-%COMP%]{color:#fff;padding-left:50px;font-size:15px}.code-container[_ngcontent-%COMP%]{text-align:center}#code[_ngcontent-%COMP%]{width:63%;resize:none;background-color:#49465c;border-radius:5px;border:none;color:#fff;padding:10px;height:218px}#code[_ngcontent-%COMP%]:focus{outline:none!important}.work-item[_ngcontent-%COMP%]{background-color:#282828;padding:20px;margin-bottom:20px;border-radius:5px}.work-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#fff}@keyframes _ngcontent-%COMP%_animate{0%{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotateX(0)}to{transform:rotate3d(0,0,.5,360deg)}}.container2[_ngcontent-%COMP%]{position:relative;top:40%;left:40%;z-index:9;opacity:.5;transform:matrix3d(20deg);animation:_ngcontent-%COMP%_animate 5s linear infinite}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{position:relative;transform-origin:center;border-radius:50%;z-index:2}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]:nth-child(2){z-index:1;translate:-60px -60px}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]:nth-child(3){z-index:3;translate:60px 60px}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotate 10s linear infinite;position:absolute;display:flex;flex-direction:column;gap:10px;translate:calc(-70px * var(--x)) calc(-60px * var(--y))}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:inline-block;width:50px;height:50px;background:#dcdcdc;z-index:calc(1 * var(--i));transition:1.5s}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{transition:0s;background:#ef4149;filter:drop-shadow(0 0 30px #ef4149)}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:before, .container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:after{transition:0s;background:#ef4149}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-40px;width:40px;height:100%;background:#fff;transform-origin:right;transform:skewY(45deg);transition:1.5s}.container2[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-40px;left:0;width:100%;height:40px;background:#f2f2f2;transform-origin:bottom;transform:skew(45deg);transition:1.5s}@keyframes _ngcontent-%COMP%_colorChange{0%{background:#dcdcdc}16.66%{background:#ef4149}33.33%{background:#dcdcdc}50%{background:#ef4149}66.66%{background:#dcdcdc}83.33%{background:#ef4149}to{background:#dcdcdc}}.cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){animation-delay:0s}.cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:2s}.cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:4s}body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;background:#2b3a42}*[_ngcontent-%COMP%]{box-sizing:border-box}@keyframes _ngcontent-%COMP%_flipY{0%{transform:translate(-50%) scaleZ(1) rotatex(0) rotatey(0) rotate(0)}20.25%{transform:translate(-50%) scaleZ(1) rotatex(0) rotatey(90deg) rotate(0)}to{transform:translate(-50%) scaleZ(1) rotatex(0) rotatey(90deg) rotate(0)}}@keyframes _ngcontent-%COMP%_flipY-innerCube{0%{transform:translate(-50%) scale3d(.5,.5,.5) rotatex(0) rotatey(0) rotate(0)}20.25%{transform:translate(-50%) scale3d(.5,.5,.5) rotatex(0) rotatey(-90deg) rotate(0)}to{transform:translate(-50%) scale3d(.5,.5,.5) rotatex(0) rotatey(-90deg) rotate(0)}}@keyframes _ngcontent-%COMP%_flipY-innerShadow{0%{transform:translate(-50%) rotatex(-90deg) translatez(-20px) rotate(0)}20.25%{transform:translate(-50%) rotatex(-90deg) translatez(-20px) rotate(-90deg)}to{transform:translate(-50%) rotatex(-90deg) translatez(-20px) rotate(-90deg)}}@keyframes _ngcontent-%COMP%_flipY-outterShadow{0%{transform:translate(-50%) rotatex(-90deg) translatez(105px) rotate(0)}20.25%{transform:translate(-50%) rotatex(-90deg) translatez(105px) rotate(90deg)}to{transform:translate(-50%) rotatex(-90deg) translatez(105px) rotate(90deg)}}@keyframes _ngcontent-%COMP%_border-front{0%{border-width:1px 6px 6px 1px}2.25%{border-width:1px 6px 6px 1px}5.75%{border-width:1px 1px 1px 1px}to{border-width:1px 1px 1px 1px}}@keyframes _ngcontent-%COMP%_border-back{0%{border-width:1px 1px 1px 1px}2.25%{border-width:1px 1px 1px 1px}5.75%{border-width:1px 1px 6px 6px}to{border-width:1px 1px 6px 6px}}@keyframes _ngcontent-%COMP%_border-top{0%{border-width:6px 6px 1px 1px}2.25%{border-width:6px 6px 1px 1px}5.75%{border-width:1px 6px 6px 1px}to{border-width:1px 6px 6px 1px}}@keyframes _ngcontent-%COMP%_border-left{0%{border-width:1px 1px 6px 6px}2.25%{border-width:1px 1px 6px 6px}5.75%{border-width:1px 6px 6px 1px}to{border-width:1px 6px 6px 1px}}@keyframes _ngcontent-%COMP%_hoverY{0%{transform:translatey(0)}to{transform:translatey(-30px)}}@keyframes _ngcontent-%COMP%_scaleBigShadow{0%{transform:scale3d(.65,.65,.65)}to{transform:scale3d(.6,.6,.6)}}@keyframes _ngcontent-%COMP%_scaleSmallShadow{0%{transform:scale3d(.45,.45,.45)}to{transform:scale3d(.37,.37,.37)}}.container2[_ngcontent-%COMP%]{position:relative;top:19%;left:40%;z-index:9}.scene[_ngcontent-%COMP%]{position:relative;width:120px;height:120px;margin-top:120px;transform-style:preserve-3d;transform:translate(40px) rotatex(-33.5deg) rotatey(45deg)}.scene[_ngcontent-%COMP%]   .webpack-cube[_ngcontent-%COMP%]{transform-style:preserve-3d;animation:_ngcontent-%COMP%_hoverY 2s infinite alternate;animation-timing-function:ease-in-out}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]{position:absolute;width:120px;height:120px;left:0;top:0;transform-style:preserve-3d;animation:_ngcontent-%COMP%_flipY 5.2s infinite;display:inline-block}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;text-align:center;background:#8dd6f980;line-height:100px;border:1px solid white}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-front[_ngcontent-%COMP%]{transform:translatez(60px);border-right-width:6px;border-bottom-width:6px;animation:_ngcontent-%COMP%_border-front 5.2s infinite}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-back[_ngcontent-%COMP%]{transform:rotateY(180deg) translatez(60px);animation:_ngcontent-%COMP%_border-back 5.2s infinite}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-top[_ngcontent-%COMP%]{transform:rotatex(90deg) translatez(60px);border-top-width:6px;border-right-width:6px;animation:_ngcontent-%COMP%_border-top 5.2s infinite}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-bottom[_ngcontent-%COMP%]{transform:rotatex(-90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-left[_ngcontent-%COMP%]{transform:rotateY(-90deg) translatez(60px);border-left-width:6px;border-bottom-width:6px;animation:_ngcontent-%COMP%_border-left 5.2s infinite}.scene[_ngcontent-%COMP%]   .outer-cube[_ngcontent-%COMP%]   .face-right[_ngcontent-%COMP%]{transform:rotateY(90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]{display:inline-block;position:absolute;width:120px;height:120px;left:0;top:-2px;transform-style:preserve-3d;animation:_ngcontent-%COMP%_flipY-innerCube 5.2s infinite}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;text-align:center;background:#1d78c1;line-height:100px;border:2px solid white}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-front[_ngcontent-%COMP%]{transform:translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-back[_ngcontent-%COMP%]{transform:rotateY(180deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-top[_ngcontent-%COMP%]{transform:rotatex(90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-bottom[_ngcontent-%COMP%]{transform:rotatex(-90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-left[_ngcontent-%COMP%]{transform:rotateY(-90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .inner-cube[_ngcontent-%COMP%]   .face-right[_ngcontent-%COMP%]{transform:rotateY(90deg) translatez(60px)}.scene[_ngcontent-%COMP%]   .shadows-outer-container[_ngcontent-%COMP%]{display:inline-block;transform-style:preserve-3d;width:120px;height:120px;transform:translate(-50%) rotatex(-90deg) translatez(110px);animation:_ngcontent-%COMP%_flipY-outterShadow 5.2s infinite}.scene[_ngcontent-%COMP%]   .shadows-outer-container[_ngcontent-%COMP%]   .shadow-outer[_ngcontent-%COMP%]{display:inline-block;position:absolute;width:120px;height:120px;background-color:#ffffff80;animation:_ngcontent-%COMP%_scaleBigShadow 2s infinite alternate;animation-timing-function:ease-in-out;box-shadow:0 0 45px 35px #ffffff80;transform-origin:center center;transform:scale3d(.8,.8,.8)}.scene[_ngcontent-%COMP%]   .shadows-inner-container[_ngcontent-%COMP%]{display:inline-block;transform-style:preserve-3d;width:120px;height:120px;transform:translate(-50%) rotatex(-90deg) translatez(0) rotate(0);animation:_ngcontent-%COMP%_flipY-innerShadow 5.2s infinite}.scene[_ngcontent-%COMP%]   .shadows-inner-container[_ngcontent-%COMP%]   .shadow-inner[_ngcontent-%COMP%]{display:inline-block;position:absolute;width:120px;height:120px;border-radius:15px;background:linear-gradient(0deg,#0000 10%,#6d6d6db3 50%,#0000),linear-gradient(90deg,#0000 10%,#6d6d6db3 50%,#0000),linear-gradient(180deg,#0000 10%,#6d6d6db3 50%,#0000),linear-gradient(270deg,#0000 10%,#6d6d6db3 50%,#0000);animation:_ngcontent-%COMP%_scaleSmallShadow 2s infinite alternate;animation-timing-function:ease-in-out;transform-origin:center center;transform:scale3d(.4,.4,.4)}']});let t=e;return t})();Vh(Fp,Tp).catch(t=>console.error(t));
