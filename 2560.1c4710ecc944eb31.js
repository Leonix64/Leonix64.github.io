"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2560],{2560:(M,y,u)=>{u.r(y),u.d(y,{ion_segment:()=>E,ion_segment_button:()=>O});var C=u(467),s=u(4261),m=u(4920),S=u(5083),f=u(333),B=u(9483);const E=(()=>{let k=class{constructor(t){(0,s.r)(this,t),this.ionChange=(0,s.d)(this,"ionChange",7),this.ionSelect=(0,s.d)(this,"ionSelect",7),this.ionStyle=(0,s.d)(this,"ionStyle",7),this.segmentViewEl=null,this.onClick=e=>{const o=e.target,n=this.checked;"ION-SEGMENT"!==o.tagName&&(this.value=o.value,o!==n&&this.emitValueChange(),this.segmentViewEl?(this.updateSegmentView(),this.scrollable&&n&&this.checkButton(n,o)):(this.scrollable||!this.swipeGesture)&&(n?this.checkButton(n,o):this.setCheckedClasses()))},this.onSlottedItemsChange=()=>{this.valueChanged(this.value)},this.getSegmentButton=e=>{var o,n;const i=this.getButtons().filter(r=>!r.disabled),a=i.findIndex(r=>r===document.activeElement);switch(e){case"first":return i[0];case"last":return i[i.length-1];case"next":return null!==(o=i[a+1])&&void 0!==o?o:i[0];case"previous":return null!==(n=i[a-1])&&void 0!==n?n:i[i.length-1];default:return null}},this.activated=!1,this.color=void 0,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.value=void 0,this.selectOnFocus=!1}colorChanged(t,e){(void 0===e&&void 0!==t||void 0!==e&&void 0===t)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(t,e){if(this.segmentViewEl&&void 0===t)this.value=this.getButtons()[0].value;else{if(void 0!==e&&void 0!==t){const o=this.getButtons(),n=o.find(a=>a.value===e),i=o.find(a=>a.value===t);n&&i&&(this.segmentViewEl?!1!==this.triggerScrollOnValueChange&&this.updateSegmentView():this.checkButton(n,i))}else void 0!==t&&void 0===e&&this.segmentViewEl&&this.updateSegmentView();this.ionSelect.emit({value:t}),this.segmentViewEl||this.scrollActiveButtonIntoView(),this.triggerScrollOnValueChange=void 0}}disabledChanged(){if(this.gestureChanged(),this.segmentViewEl)this.segmentViewEl.disabled=this.disabled;else{const t=this.getButtons();for(const e of t)e.disabled=this.disabled}}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle(),this.segmentViewEl=this.getSegmentView()}disconnectedCallback(){this.segmentViewEl=null}componentWillLoad(){this.emitStyle()}componentDidLoad(){var t=this;return(0,C.A)(function*(){t.setCheckedClasses(),(0,m.r)(()=>{t.scrollActiveButtonIntoView(!1)}),t.gesture=(yield Promise.resolve().then(u.bind(u,8607))).createGesture({el:t.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:e=>t.onStart(e),onMove:e=>t.onMove(e),onEnd:e=>t.onEnd(e)}),t.gestureChanged(),t.disabled&&t.disabledChanged(),t.updateSegmentView(!1)})()}onStart(t){this.valueBeforeGesture=this.value,this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1),this.setNextIndex(t,!0),t.event.stopImmediatePropagation();const e=this.value;void 0!==e&&this.valueBeforeGesture!==e&&(this.emitValueChange(),this.updateSegmentView()),this.valueBeforeGesture=void 0}emitValueChange(){const{value:t}=this;this.ionChange.emit({value:t})}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}get checked(){return this.getButtons().find(t=>t.value===this.value)}setActivated(t){this.getButtons().forEach(o=>{o.classList.toggle("segment-button-activated",t)}),this.activated=t}activate(t){const e=t.event.target,n=this.getButtons().find(i=>i.value===this.value);"ION-SEGMENT-BUTTON"===e.tagName&&(n||(this.value=e.value,this.setCheckedClasses()),this.value===e.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,e){const o=this.getIndicator(t),n=this.getIndicator(e);if(null===o||null===n)return;const i=o.getBoundingClientRect(),a=n.getBoundingClientRect(),g=`translate3d(${i.left-a.left}px, 0, 0) scaleX(${i.width/a.width})`;(0,s.w)(()=>{n.classList.remove("segment-button-indicator-animated"),n.style.setProperty("transform",g),n.getBoundingClientRect(),n.classList.add("segment-button-indicator-animated"),n.style.setProperty("transform",""),this.scrollActiveButtonIntoView(!0)}),this.value=e.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),o=t.findIndex(n=>n.value===this.value)+1;for(const n of t)n.classList.remove("segment-button-after-checked");o<t.length&&t[o].classList.add("segment-button-after-checked")}getSegmentView(){const e=this.getButtons().find(n=>n.contentId),o=document.querySelector(`ion-segment-content[id="${null==e?void 0:e.contentId}"]`);return null==o?void 0:o.closest("ion-segment-view")}handleSegmentViewScroll(t){const{scrollRatio:e,isManualScroll:o}=t.detail;if(!o)return;const n=t.target,i=this.segmentViewEl,a=this.el;if(t.composedPath().includes(i)||null!=n&&n.contains(a)){const r=this.getButtons();if(!r.length)return;const d=r.findIndex(v=>v.value===this.value),g=r[d],b=Math.round(e*(r.length-1));(void 0===this.lastNextIndex||this.lastNextIndex!==b)&&(this.lastNextIndex=b,this.triggerScrollOnValueChange=!1,this.checkButton(g,r[b]),this.emitValueChange())}}updateSegmentView(t=!0){const o=this.getButtons().find(i=>i.value===this.value);if(null==o||!o.contentId)return;const n=this.segmentViewEl;n&&n.setContent(o.contentId,t)}scrollActiveButtonIntoView(t=!0){const{scrollable:e,value:o,el:n}=this;if(e){const a=this.getButtons().find(r=>r.value===o);if(void 0!==a){const r=n.getBoundingClientRect(),d=a.getBoundingClientRect();n.scrollTo({top:0,left:n.scrollLeft+(d.x-r.x-r.width/2+d.width/2),behavior:t?"smooth":"instant"})}}}setNextIndex(t,e=!1){const o=(0,S.i)(this.el),n=this.activated,i=this.getButtons(),a=i.findIndex(p=>p.value===this.value),r=i[a];let d,g;if(-1===a)return;const b=r.getBoundingClientRect(),v=b.left,V=b.width,w=t.currentX,A=b.top+b.height/2,P=this.el.getRootNode().elementFromPoint(w,A);if(n&&!e){if(o?w>v+V:w<v){const p=a-1;p>=0&&(g=p)}else if((o?w<v:w>v+V)&&n&&!e){const p=a+1;p<i.length&&(g=p)}void 0!==g&&!i[g].disabled&&(d=i[g])}if(!n&&e&&(d=P),null!=d){if("ION-SEGMENT"===d.tagName)return!1;r!==d&&this.checkButton(r,d)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}onKeyDown(t){const e=(0,S.i)(this.el);let n,o=this.selectOnFocus;switch(t.key){case"ArrowRight":t.preventDefault(),n=this.getSegmentButton(e?"previous":"next");break;case"ArrowLeft":t.preventDefault(),n=this.getSegmentButton(e?"next":"previous");break;case"Home":t.preventDefault(),n=this.getSegmentButton("first");break;case"End":t.preventDefault(),n=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault(),n=document.activeElement,o=!0}if(n){if(o){const i=this.checked;this.checkButton(i||n,n),n!==i&&this.emitValueChange()}n.setFocus()}}render(){const t=(0,B.b)(this);return(0,s.h)(s.f,{key:"66bd7a565ba73540b3bbe56dd23b95e59bcef9bc",role:"tablist",onClick:this.onClick,class:(0,f.c)(this.color,{[t]:!0,"in-toolbar":(0,f.h)("ion-toolbar",this.el),"in-toolbar-color":(0,f.h)("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},(0,s.h)("slot",{key:"782c521b1a33729b8eab1c4b879bc3f2ff48ae1b",onSlotchange:this.onSlottedItemsChange}))}get el(){return(0,s.i)(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};return k.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"},k})();let L=0;const O=(()=>{let k=class{constructor(t){(0,s.r)(this,t),this.segmentEl=null,this.inheritedAttributes={},this.updateStyle=()=>{(0,s.j)(this)},this.updateState=()=>{const{segmentEl:e}=this;e&&(this.checked=e.value===this.value,e.disabled&&(this.disabled=!0))},this.checked=!1,this.contentId=void 0,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+L++}valueChanged(){this.updateState()}connectedCallback(){const t=this.segmentEl=this.el.closest("ion-segment");if(t&&(this.updateState(),(0,m.a)(t,"ionSelect",this.updateState),(0,m.a)(t,"ionStyle",this.updateStyle)),!this.contentId)return;const e=document.getElementById(this.contentId);e?"ION-SEGMENT-CONTENT"===e.tagName?this.disabled&&(console.warn("Segment Button: Segment buttons cannot be disabled when associated with an <ion-segment-content>."),this.disabled=!1):console.error(`Segment Button: Element with id="${this.contentId}" is not an <ion-segment-content> element.`):console.error(`Segment Button: Unable to find Segment Content with id="${this.contentId}".`)}disconnectedCallback(){const t=this.segmentEl;t&&((0,m.b)(t,"ionSelect",this.updateState),(0,m.b)(t,"ionStyle",this.updateStyle),this.segmentEl=null)}componentWillLoad(){this.inheritedAttributes=Object.assign({},(0,m.h)(this.el,["aria-label"]))}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}setFocus(){var t=this;return(0,C.A)(function*(){const{nativeEl:e}=t;void 0!==e&&e.focus()})()}render(){const{checked:t,type:e,disabled:o,hasIcon:n,hasLabel:i,layout:a,segmentEl:r}=this,d=(0,B.b)(this);return(0,s.h)(s.f,{key:"d50a5d5e2f6206e8523598f258d8217d2903f69b",class:{[d]:!0,"in-toolbar":(0,f.h)("ion-toolbar",this.el),"in-toolbar-color":(0,f.h)("ion-toolbar[color]",this.el),"in-segment":(0,f.h)("ion-segment",this.el),"in-segment-color":void 0!==(null==r?void 0:r.color),"segment-button-has-label":i,"segment-button-has-icon":n,"segment-button-has-label-only":i&&!n,"segment-button-has-icon-only":n&&!i,"segment-button-disabled":o,"segment-button-checked":t,[`segment-button-layout-${a}`]:!0,"ion-activatable":!0,"ion-activatable-instant":!0,"ion-focusable":!0}},(0,s.h)("button",Object.assign({key:"b4f6f145286ba8ab79669e11035b906daa85ae7e","aria-selected":t?"true":"false",role:"tab",ref:b=>this.nativeEl=b,type:e,class:"button-native",part:"native",disabled:o},this.inheritedAttributes),(0,s.h)("span",{key:"67965996c9ffe70553875e00d3da0ae5b2b1d814",class:"button-inner"},(0,s.h)("slot",{key:"5087988fe45a8fdf388ec44c395d0b745b207806"})),"md"===d&&(0,s.h)("ion-ripple-effect",{key:"b24858de0750bbc769b3183fac0077dfe817ba27"})),(0,s.h)("div",{key:"97b4359432acd1c9da0816360cd1df9472e183f7",part:"indicator",class:"segment-button-indicator segment-button-indicator-animated"},(0,s.h)("div",{key:"0561738ea15b0986f4ed3d8276d5e6f2d13f7e51",part:"indicator-background",class:"segment-button-indicator-background"})))}get el(){return(0,s.i)(this)}static get watchers(){return{value:["valueChanged"]}}};return k.style={ios:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}.segment-button-indicator{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;left:0;right:0;top:0;bottom:0}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff))))}:host(.in-toolbar-color) .segment-button-indicator-background{background:var(--ion-color-contrast)}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}',md:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #0054e9));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'},k})()},333:(M,y,u)=>{u.d(y,{c:()=>m,g:()=>f,h:()=>s,o:()=>_});var C=u(467);const s=(c,l)=>null!==l.closest(c),m=(c,l)=>"string"==typeof c&&c.length>0?Object.assign({"ion-color":!0,[`ion-color-${c}`]:!0},l):l,f=c=>{const l={};return(c=>void 0!==c?(Array.isArray(c)?c:c.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(c).forEach(h=>l[h]=!0),l},B=/^[a-z][a-z0-9+\-.]*:/,_=function(){var c=(0,C.A)(function*(l,h,E,I){if(null!=l&&"#"!==l[0]&&!B.test(l)){const x=document.querySelector("ion-router");if(x)return null!=h&&h.preventDefault(),x.push(l,E,I)}return!1});return function(h,E,I,x){return c.apply(this,arguments)}}()}}]);