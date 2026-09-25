import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s}from"./iframe-DTdOnR_y.js";var c,l,u;function d(){return(d=e((()=>{c={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>(...t)=>({_$litDirective$:e,values:t}),u=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}var f;function p(){return(p=e((()=>{n(),d(),f=class extends u{constructor(e){if(super(e),this.it=r,e.type!==c.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===r||e==null)return this._t=void 0,this.it=e;if(e===a)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},f.directiveName=`unsafeHTML`,f.resultType=1,l(f)})))()}var m,h;function g(){return(g=e((()=>{d(),p(),m=class extends f{},m.directiveName=`unsafeSVG`,m.resultType=2,h=l(m)})))()}function _(e){y=e}function v(){y=null,te=0}function ee(){return te++}var y,te;function ne(){return(ne=e((()=>{te=0})))()}var b,x,re,ie,S,C,ae;function w(){return(w=e((()=>{b=Symbol(`haunted.phase`),x=Symbol(`haunted.hook`),re=Symbol(`haunted.update`),ie=Symbol(`haunted.commit`),S=Symbol(`haunted.effects`),C=Symbol(`haunted.layoutEffects`),ae=`haunted.context`})))()}var oe;function se(){return(se=e((()=>{ne(),w(),oe=class{update;host;virtual;[x];[S];[C];constructor(e,t){this.update=e,this.host=t,this[x]=new Map,this[S]=[],this[C]=[]}run(e){_(this);let t=e();return v(),t}_runEffects(e){let t=this[e];_(this);for(let e of t)e.call(this);v()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(C)}teardown(){this[x].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ce;function le(){return(le=e((()=>{ce=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function ue(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=fe(n)}}var de,fe,pe,me,he;function T(){return(T=e((()=>{se(),w(),le(),de=100,fe=Promise.resolve().then.bind(Promise.resolve()),pe=ue(),me=ue(),he=class e{renderer;host;state;[b];_updateQueued;_active;_updateCount;_processing;static maxUpdates=de;constructor(e,t){this.renderer=e,this.host=t,this.state=new oe(this.update.bind(this),t),this[b]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ce(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,pe(()=>{let e=this.handlePhase(re);me(()=>{this.handlePhase(ie,e),me(()=>{this.handlePhase(S),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[b]=e,e){case ie:this.commit(t),this.runEffects(C);return;case re:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var E,ge,_e,D;function ve(){return(ve=e((()=>{E=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ge=e=>e?.map(e=>typeof e==`string`?E(e):e),_e=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),D=_e})))()}function ye(e){class t extends he{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ge(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,be(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var be;function xe(){return(xe=e((()=>{T(),ve(),be=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function Se(e,...t){let n=ee(),r=y[x],i=r.get(n);return i||(i=new e(n,y,...t),r.set(n,i)),i.update(...t)}function O(e){return Se.bind(null,e)}var k;function A(){return(A=e((()=>{ne(),w(),k=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function Ce(e){return O(class extends k{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function we(){return(we=e((()=>{A()})))()}function Te(e,t){e[S].push(t)}var j;function Ee(){return(Ee=e((()=>{w(),we(),j=Ce(Te)})))()}var De,Oe;function ke(){return(ke=e((()=>{A(),w(),Ee(),De=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Oe=O(class extends k{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Te(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};De(this.state.host).dispatchEvent(new CustomEvent(ae,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Ae(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(ae,this)}disconnectedCallback(){this.removeEventListener(ae,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Oe(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function je(){return(je=e((()=>{w(),ke()})))()}var Me;function Ne(){return(Ne=e((()=>{A(),Me=O(class extends k{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var Pe;function Fe(){return(Fe=e((()=>{Ne(),Pe=(e,t)=>Me(()=>e,t)})))()}function Ie(e,t){e[C].push(t)}function Le(){return(Le=e((()=>{w(),we(),Ce(Ie)})))()}var Re;function ze(){return(ze=e((()=>{A(),Re=O(class extends k{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Be(){return(Be=e((()=>{A(),O(class extends k{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Ve;function He(){return(He=e((()=>{A(),Ve=/([A-Z])/gu,O(class extends k{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ve,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Ue(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function We(e){return Me(()=>Ue(e),[])}function Ge(){return(Ge=e((()=>{Ne()})))()}function Ke(){return(Ke=e((()=>{A(),O(class extends k{update(){return this.state.host}})})))()}function qe({render:e}){let t=ye(e);return{component:t,createContext:Ae(t)}}function Je(){return(Je=e((()=>{xe(),je(),Fe(),Ee(),Le(),ze(),Be(),Ne(),ke(),He(),Ge(),Ke(),T()})))()}function Ye(e){this._$AN===void 0?this._$AM=e:(N(this),this._$AM=e,Ze(this))}function Xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)M(r[e],!1),N(r[e]);else r!=null&&(M(r,!1),N(r))}else M(this,e)}}var M,N,Ze,Qe,$e;function et(){return(et=e((()=>{i(),d(),M=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),M(e,t);return!0},N=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ze=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qe(t)}},Qe=e=>{e.type==c.CHILD&&(e._$AP??=Xe,e._$AQ??=Ye)},$e=class extends u{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ze(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(M(this,e),N(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function tt(){return(tt=e((()=>{d(),n(),et(),T(),Array.prototype.includes})))()}var P,nt;function rt(){return(rt=e((()=>{n(),Je(),tt(),{component:P,createContext:nt}=qe({render:t})})))()}function F(){return(F=e((()=>{rt(),Je(),ve()})))()}var it;function at(){return(at=e((()=>{F(),it=E(D`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})))()}var ot,I;function st(){return(st=e((()=>{n(),et(),d(),ot=new WeakMap,I=l(class extends $e{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ot.get(t);n===void 0&&(n=new WeakMap,ot.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ot.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}function L(e,t,n){return e?t(e):n?.(e)}var ct;function lt(){return(lt=e((()=>{at(),F(),n(),ct=D`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,P(()=>s`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[it,ct]}))})))()}var ut;function dt(){return(dt=e((()=>{F(),ut=E(D`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})))()}var ft,pt;function mt(){return(mt=e((()=>{F(),n(),lt(),dt(),ft=(e,n,r)=>t(s`<cosmoz-tooltip-content>
			${L(n,()=>s`<strong slot="heading">${n}</strong>`)}
			${L(r,()=>s`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),pt=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=We(),l=!!(r||i)&&!s;j(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(ut)||(t.adoptedStyleSheets=[...u,ut]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,ft(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},ee=e=>{let t=e.target.closest?.(f);t&&h(t)},y=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,ee),t.addEventListener(`focusout`,y),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,ee),t.removeEventListener(`focusout`,y),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),j(()=>{n&&c.current&&ft(c.current,r,i)},[r,i,n]),j(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var ht;function gt(){return(gt=e((()=>{F(),ht=e=>{let[t,n]=Re(!1);return j(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var _t,vt;function yt(){return(yt=e((()=>{at(),F(),n(),st(),lt(),dt(),mt(),gt(),_t=D`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,vt=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:c=!1}=e,l=We(),u=We(),d=We(),f=ht(d),p=!!(t||n||f)&&!c,m=Pe(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},o))},[o,p]);j(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let h=Pe(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return j(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),pt(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:c}),i?r:p?s`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${I(l)}
		>
			<cosmoz-tooltip-content>
				${L(t,()=>s`<strong slot="heading">${t}</strong>`)}
				${L(n,()=>s`<p slot="description">${n}</p>`)}
				<slot name="content" ${I(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${I(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,P(vt,{styleSheets:[it,ut,_t],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function bt(){return(bt=e((()=>{yt()})))()}var R;function xt(){return(xt=e((()=>{n(),R=e=>e??r})))()}var St;function Ct(){return(Ct=e((()=>{F(),St=D`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`})))()}var wt;function Tt(){return(Tt=e((()=>{Ct(),F(),wt=D`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * ICON ONLY
	 * ======================================== */

	:host([icon-only]) .button {
		width: 32px;
		height: 32px;
		padding: calc(var(--cz-spacing) * 1.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([icon-only][size='sm']) .button {
		width: 28px;
		height: 28px;
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='lg']) .button {
		width: 36px;
		height: 36px;
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='xl']) .button {
		width: 40px;
		height: 40px;
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only]) ::slotted(svg) {
		width: 20px;
		height: 20px;
	}

	:host([icon-only][size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	/* ========================================
	 * BUTTON BASE STYLES
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.1s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		${St}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active:not(:disabled) {
			transform: translateY(1px);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
			transform: none;
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * ICON ONLY COLORS (Untitled UI utility button)
	 * ======================================== */

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);
	}

	:host([icon-only][variant='secondary']:not([disabled]):hover) .button,
	:host([icon-only][variant='secondary']) .button:hover,
	:host([icon-only][variant='tertiary']:not([disabled]):hover) .button,
	:host([icon-only][variant='tertiary']) .button:hover {
		color: var(--cz-color-text-secondary);
	}

	/* ========================================
	 * PRESSED / SELECTED STATE (aria-pressed)
	 * Quiet variants (secondary, tertiary) shift to the selected brand
	 * chip; primary and destructive stay solid but visually "sink" with
	 * an inset shadow; link emphasizes text with no surface change.
	 * ======================================== */

	:host([aria-pressed='true']) .button {
		box-shadow: var(--cz-shadow-pressed-3d);

		&::before {
			display: none;
		}
	}

	:host([variant='secondary'][aria-pressed='true']) .button {
		box-shadow:
			var(--cz-shadow-pressed-3d),
			inset 0 0 0 1px
				light-dark(var(--cz-color-brand-300), var(--cz-color-brand-500));
	}

	:host([aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-brand-50),
			var(--cz-color-brand-900)
		);
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			background-color: light-dark(
				var(--cz-color-brand-100),
				var(--cz-color-brand-800)
			);
		}
	}

	/* Overrides the muted icon-only colors above (higher specificity). */
	:host([icon-only][variant='secondary'][aria-pressed='true']) .button,
	:host([icon-only][variant='tertiary'][aria-pressed='true']) .button {
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-200));
		}
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow:
			var(--cz-shadow-xs-skeumorphic), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}
	}

	:host([variant='destructive'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-error-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow:
			var(--cz-shadow-xs-skeumorphic), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}
	}

	:host([variant='link'][aria-pressed='true']) .button {
		background-color: transparent;
		box-shadow: none;
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));
		text-decoration: underline;

		&:hover {
			background-color: transparent;
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{at(),bt(),F(),n(),xt(),Tt(),Et=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`],Dt=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:i,type:a=`button`,href:o,target:c,rel:l,download:u}=e,d=!!t;j(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=L(o!=null,()=>s`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${d?`true`:r}
				target=${R(c)}
				rel=${R(l)}
				download=${R(u)}
				>${f}</a
			>
		`,()=>s`
			<button type=${a} class="button" part="button" ?disabled=${d}>
				${f}
			</button>
		`);return s`<cosmoz-tooltip
		heading=${R(n??void 0)}
		placement=${R(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,P(Dt,{observedAttributes:Et,styleSheets:[it,wt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var kt,At,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,jt;function Mt(){return(Mt=e((()=>{n(),g(),Ot(),kt={title:`Cosmoz Button`,component:`cosmoz-button`,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`destructive`,`link`],description:`The visual style variant of the button`,table:{defaultValue:{summary:`primary`}}},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`The size of the button`,table:{defaultValue:{summary:`md`}}},disabled:{control:`boolean`,description:`Whether the button is disabled`,table:{defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`Whether the button should take full width`,table:{defaultValue:{summary:`false`}}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:`The button type attribute`,table:{defaultValue:{summary:`button`}}},href:{control:`text`,description:`When set, renders as an anchor link instead of a button`},target:{control:`text`,description:`Target attribute for the anchor (only with href)`},rel:{control:`text`,description:`Rel attribute for the anchor (only with href)`},download:{control:`text`,description:`Download attribute for the anchor (only with href)`},ariaLabel:{control:`text`,description:`Accessible label for icon-only buttons`},iconOnly:{control:`boolean`,description:`Renders a compact square icon-only button (utility button)`,table:{defaultValue:{summary:`false`}}},tooltip:{control:`text`,description:`Wraps the button in a tooltip with this heading`},tooltipPlacement:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`Tooltip placement (only with tooltip)`,table:{defaultValue:{summary:`top`}}},ariaPressed:{control:`boolean`,description:`Reflects a toggled/selected state`},label:{control:`text`,description:`Button label text`}}},At=e=>s`
    <cosmoz-button
        variant=${e.variant||`primary`}
        size=${e.size||`md`}
        type=${e.type||`button`}
        ?disabled=${e.disabled}
        ?full-width=${e.fullWidth}
        ?icon-only=${e.iconOnly}
        tooltip=${e.tooltip||r}
        tooltip-placement=${e.tooltipPlacement||r}
        aria-pressed=${e.ariaPressed?`true`:r}
        href=${e.href||r}
        target=${e.target||r}
        rel=${e.rel||r}
        download=${e.download||r}
        aria-label=${e.ariaLabel||r}
    >
        ${e.label||`Button`}
    </cosmoz-button>
`,z=(e,t={})=>s`<svg
        slot=${t.slot||r}
        class=${t.cls||r}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        ${h(e)}
    </svg>`,B={plus:`<path d="M12 5v14M5 12h14" />`,download:`<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />`,search:`<circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />`,trash:`<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />`,close:`<path d="M6 6l12 12M18 6L6 18" />`,image:`<rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" />`,edit:`<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />`,home:`<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />`,dashboard:`<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />`,external:`<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />`,settings:`<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />`},V=e=>{let t=e.currentTarget;t.setAttribute(`aria-pressed`,t.getAttribute(`aria-pressed`)===`true`?`false`:`true`)},H={args:{variant:`primary`,size:`md`,disabled:!1,fullWidth:!1,label:`Button`},render:At},U={render:()=>s`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:`The five visual style variants. Hover to see state changes, Tab to see focus rings.`}}}},W={render:()=>s`
        <div class="story-stack">
            <div class="story-row">
                <cosmoz-button size="sm">Small</cosmoz-button>
                <cosmoz-button size="md">Medium</cosmoz-button>
                <cosmoz-button size="lg">Large</cosmoz-button>
                <cosmoz-button size="xl">Extra Large</cosmoz-button>
            </div>
            <div>
                <p class="story-label">Icon-only ladder (28 / 32 / 36 / 40 px)</p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
                    ${z(B.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
                    ${z(B.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
                    ${z(B.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
                    ${z(B.plus)}
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`The four size variants, plus the icon-only size ladder (sm 28px, md 32px, lg 36px, xl 40px).`}}}},G={render:()=>s`
        <div class="story-row">
            <cosmoz-button variant="primary">
                ${z(B.plus,{slot:`prefix`})} Add Item
            </cosmoz-button>
            <cosmoz-button variant="secondary">
                Download ${z(B.download,{slot:`suffix`})}
            </cosmoz-button>
            <cosmoz-button variant="tertiary">
                ${z(B.search,{slot:`prefix`})} Search
            </cosmoz-button>
            <cosmoz-button variant="destructive">
                ${z(B.trash,{slot:`prefix`})} Delete
            </cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:`Buttons with prefix and suffix icon slots.`}}}},K={render:()=>s`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Compact square utility buttons. Always pair with an
                    <code>aria-label</code> and preferably a <code>tooltip</code>.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="secondary"
                    tooltip="Add item"
                    aria-label="Add item"
                >
                    ${z(B.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Search"
                    aria-label="Search"
                >
                    ${z(B.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Close panel"
                    aria-label="Close panel"
                >
                    ${z(B.close)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="destructive"
                    tooltip="Delete"
                    aria-label="Delete"
                >
                    ${z(B.trash)}
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Icon-only utility buttons in secondary, tertiary, and destructive variants. Sizes are shown in Sizes; toggled and disabled states in Pressed State and Disabled States.`}}}},q={render:()=>s`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Click to toggle <code>aria-pressed</code>. The pressed state works on
                    every variant — quiet variants shift to the selected brand chip,
                    destructive keeps the error intent, link emphasizes text.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button aria-pressed="false" @click=${V}
                    >Primary</cosmoz-button
                >
                <cosmoz-button
                    variant="secondary"
                    aria-pressed="false"
                    @click=${V}
                    >Secondary</cosmoz-button
                >
                <cosmoz-button
                    variant="tertiary"
                    aria-pressed="false"
                    @click=${V}
                    >Tertiary</cosmoz-button
                >
                <cosmoz-button
                    variant="destructive"
                    aria-pressed="false"
                    @click=${V}
                    >Destructive</cosmoz-button
                >
                <cosmoz-button
                    variant="link"
                    aria-pressed="false"
                    @click=${V}
                    >Link</cosmoz-button
                >
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="false"
                    @click=${V}
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    ${z(B.image)}
                </cosmoz-button>
                <cosmoz-button variant="primary" tooltip="Normal state for comparison"
                    >Normal Primary</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:`The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons. Click any button to toggle it.`}}}},J={render:()=>s`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
            <cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
                ${z(B.close)}
            </cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:`All variants in their disabled state, plus a disabled icon-only button.`}}}},Y={render:()=>s`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Hover (or focus) the buttons to see the tooltip. The wrapper is always
                    rendered and degrades to a pass-through when
                    <code>tooltip</code> is unset.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" tooltip="Top placement">
                    ${z(B.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Right placement"
                    tooltip-placement="right"
                    aria-label="Right placement"
                >
                    ${z(B.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Bottom placement"
                    tooltip-placement="bottom"
                    aria-label="Bottom placement"
                >
                    ${z(B.close)}
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="secondary" tooltip="Tooltip on a text button"
                    >Text button with tooltip</cosmoz-button
                >
                <cosmoz-button
                    variant="primary"
                    tooltip="Disabled button tooltip"
                    disabled
                    >Disabled with tooltip</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Tooltip integration via the tooltip and tooltip-placement attributes. Works on icon-only and text buttons; disabled buttons do not show the tooltip.`}}}},X={render:()=>s`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    `,parameters:{docs:{description:{story:`Buttons that take up 100% of their container width.`}}}},Z={render:()=>s`
        <style>
            .matrix {
                display: grid;
                grid-template-columns: auto repeat(5, 1fr);
                gap: 12px;
                align-items: center;
            }
            .header {
                font-weight: var(--cz-font-weight-semibold);
                font-size: var(--cz-text-xs);
                color: var(--cz-color-text-tertiary);
                text-transform: uppercase;
            }
            .row-label {
                font-size: var(--cz-text-xs);
                color: var(--cz-color-text-tertiary);
            }
        </style>
        <div class="matrix">
            <div></div>
            <div class="header">Primary</div>
            <div class="header">Secondary</div>
            <div class="header">Tertiary</div>
            <div class="header">Destructive</div>
            <div class="header">Link</div>

            <div class="row-label">SM</div>
            <cosmoz-button variant="primary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="link" size="sm">Button</cosmoz-button>

            <div class="row-label">MD</div>
            <cosmoz-button variant="primary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="md">Button</cosmoz-button>
            <cosmoz-button variant="link" size="md">Button</cosmoz-button>

            <div class="row-label">LG</div>
            <cosmoz-button variant="primary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="link" size="lg">Button</cosmoz-button>

            <div class="row-label">XL</div>
            <cosmoz-button variant="primary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="link" size="xl">Button</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:`Complete matrix showing all size and variant combinations.`}}}},Q={render:()=>s`
        <style>
            .a11y-section {
                margin-bottom: calc(var(--cz-spacing) * 6);
            }
            .a11y-section h4 {
                margin: 0 0 calc(var(--cz-spacing) * 2) 0;
                font-size: var(--cz-text-sm);
                font-weight: var(--cz-font-weight-semibold);
                color: var(--cz-color-text-primary);
            }
            .a11y-section p {
                margin: 0 0 calc(var(--cz-spacing) * 3) 0;
                font-size: var(--cz-text-sm);
                color: var(--cz-color-text-tertiary);
            }
            #delete-warning {
                margin-top: calc(var(--cz-spacing) * 2);
                font-size: var(--cz-text-sm);
                color: var(--cz-color-text-error);
            }
        </style>
        <div class="story-stack">
            <div class="a11y-section">
                <h4>Icon-only buttons with aria-label</h4>
                <p>
                    Buttons without visible text should have an aria-label for screen
                    readers. Prefer the <code>icon-only</code> attribute with a
                    <code>tooltip</code> for utility buttons — the tooltip heading doubles
                    as a visual affordance while <code>aria-label</code> keeps them
                    accessible. For toggles, reflect the state with
                    <code>aria-pressed</code> (click to toggle below).
                </p>
                <div class="story-row">
                    <cosmoz-button
                        icon-only
                        variant="secondary"
                        tooltip="Edit"
                        aria-label="Edit"
                        aria-pressed="false"
                        @click=${V}
                    >
                        ${z(B.edit)}
                    </cosmoz-button>
                </div>
            </div>

            <div class="a11y-section">
                <h4>Button with aria-describedby</h4>
                <p>Reference additional context for screen readers.</p>
                <cosmoz-button variant="destructive" aria-describedby="delete-warning">
                    Delete Account
                </cosmoz-button>
                <p id="delete-warning">This action cannot be undone.</p>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Accessible patterns: aria-label on icon-only buttons, aria-pressed for toggles, and aria-describedby for additional context.`}}}},$={render:()=>s`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    When <code>href</code> is set, the button renders as an anchor link
                    with the same visual styles.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/home">Home</cosmoz-button>
                <cosmoz-button variant="secondary" href="/about">About</cosmoz-button>
                <cosmoz-button variant="tertiary" href="/contact"
                    >Contact</cosmoz-button
                >
                <cosmoz-button variant="destructive" href="/delete"
                    >Delete</cosmoz-button
                >
            </div>
            <div class="story-row">
                <cosmoz-button href="/docs" target="_blank" rel="noopener"
                    >Open in New Tab</cosmoz-button
                >
                <cosmoz-button href="/report.pdf" download
                    >Download Report</cosmoz-button
                >
            </div>
            <div>
                <p class="story-label">Anchor links with icons</p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/">
                    ${z(B.home,{slot:`prefix`})} Home
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/dashboard">
                    ${z(B.dashboard,{slot:`prefix`})} Dashboard
                </cosmoz-button>
                <cosmoz-button variant="tertiary" href="/settings">
                    ${z(B.settings,{slot:`prefix`})} Settings
                </cosmoz-button>
                <cosmoz-button
                    variant="secondary"
                    href="https://example.com"
                    target="_blank"
                    rel="noopener"
                >
                    Visit Docs ${z(B.external,{slot:`suffix`})}
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/home" disabled
                    >Disabled Link</cosmoz-button
                >
                <cosmoz-button variant="secondary" href="/about" disabled
                    >Disabled Link</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes, including prefix and suffix icons.`}}}},jt=[`Default`,`Variants`,`Sizes`,`WithIcons`,`IconOnly`,`PressedState`,`DisabledStates`,`Tooltips`,`FullWidth`,`SizeVariantMatrix`,`Accessibility`,`AnchorLinks`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Button'
  },
  render: renderButton
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The five visual style variants. Hover to see state changes, Tab to see focus rings.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div class="story-row">
                <cosmoz-button size="sm">Small</cosmoz-button>
                <cosmoz-button size="md">Medium</cosmoz-button>
                <cosmoz-button size="lg">Large</cosmoz-button>
                <cosmoz-button size="xl">Extra Large</cosmoz-button>
            </div>
            <div>
                <p class="story-label">Icon-only ladder (28 / 32 / 36 / 40 px)</p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The four size variants, plus the icon-only size ladder (sm 28px, md 32px, lg 36px, xl 40px).'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-button variant="primary">
                \${iconSvg(icons.plus, {
    slot: 'prefix'
  })} Add Item
            </cosmoz-button>
            <cosmoz-button variant="secondary">
                Download \${iconSvg(icons.download, {
    slot: 'suffix'
  })}
            </cosmoz-button>
            <cosmoz-button variant="tertiary">
                \${iconSvg(icons.search, {
    slot: 'prefix'
  })} Search
            </cosmoz-button>
            <cosmoz-button variant="destructive">
                \${iconSvg(icons.trash, {
    slot: 'prefix'
  })} Delete
            </cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons with prefix and suffix icon slots.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Compact square utility buttons. Always pair with an
                    <code>aria-label</code> and preferably a <code>tooltip</code>.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="secondary"
                    tooltip="Add item"
                    aria-label="Add item"
                >
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Search"
                    aria-label="Search"
                >
                    \${iconSvg(icons.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Close panel"
                    aria-label="Close panel"
                >
                    \${iconSvg(icons.close)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="destructive"
                    tooltip="Delete"
                    aria-label="Delete"
                >
                    \${iconSvg(icons.trash)}
                </cosmoz-button>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Icon-only utility buttons in secondary, tertiary, and destructive variants. ' + 'Sizes are shown in Sizes; toggled and disabled states in Pressed State and Disabled States.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Click to toggle <code>aria-pressed</code>. The pressed state works on
                    every variant — quiet variants shift to the selected brand chip,
                    destructive keeps the error intent, link emphasizes text.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button aria-pressed="false" @click=\${togglePressed}
                    >Primary</cosmoz-button
                >
                <cosmoz-button
                    variant="secondary"
                    aria-pressed="false"
                    @click=\${togglePressed}
                    >Secondary</cosmoz-button
                >
                <cosmoz-button
                    variant="tertiary"
                    aria-pressed="false"
                    @click=\${togglePressed}
                    >Tertiary</cosmoz-button
                >
                <cosmoz-button
                    variant="destructive"
                    aria-pressed="false"
                    @click=\${togglePressed}
                    >Destructive</cosmoz-button
                >
                <cosmoz-button
                    variant="link"
                    aria-pressed="false"
                    @click=\${togglePressed}
                    >Link</cosmoz-button
                >
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="false"
                    @click=\${togglePressed}
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    \${iconSvg(icons.image)}
                </cosmoz-button>
                <cosmoz-button variant="primary" tooltip="Normal state for comparison"
                    >Normal Primary</cosmoz-button
                >
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons. Click any button to toggle it.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
            <cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
                \${iconSvg(icons.close)}
            </cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'All variants in their disabled state, plus a disabled icon-only button.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Hover (or focus) the buttons to see the tooltip. The wrapper is always
                    rendered and degrades to a pass-through when
                    <code>tooltip</code> is unset.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" tooltip="Top placement">
                    \${iconSvg(icons.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Right placement"
                    tooltip-placement="right"
                    aria-label="Right placement"
                >
                    \${iconSvg(icons.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Bottom placement"
                    tooltip-placement="bottom"
                    aria-label="Bottom placement"
                >
                    \${iconSvg(icons.close)}
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="secondary" tooltip="Tooltip on a text button"
                    >Text button with tooltip</cosmoz-button
                >
                <cosmoz-button
                    variant="primary"
                    tooltip="Disabled button tooltip"
                    disabled
                    >Disabled with tooltip</cosmoz-button
                >
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip integration via the tooltip and tooltip-placement attributes. ' + 'Works on icon-only and text buttons; disabled buttons do not show the tooltip.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons that take up 100% of their container width.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .matrix {
                display: grid;
                grid-template-columns: auto repeat(5, 1fr);
                gap: 12px;
                align-items: center;
            }
            .header {
                font-weight: var(--cz-font-weight-semibold);
                font-size: var(--cz-text-xs);
                color: var(--cz-color-text-tertiary);
                text-transform: uppercase;
            }
            .row-label {
                font-size: var(--cz-text-xs);
                color: var(--cz-color-text-tertiary);
            }
        </style>
        <div class="matrix">
            <div></div>
            <div class="header">Primary</div>
            <div class="header">Secondary</div>
            <div class="header">Tertiary</div>
            <div class="header">Destructive</div>
            <div class="header">Link</div>

            <div class="row-label">SM</div>
            <cosmoz-button variant="primary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="sm">Button</cosmoz-button>
            <cosmoz-button variant="link" size="sm">Button</cosmoz-button>

            <div class="row-label">MD</div>
            <cosmoz-button variant="primary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="md">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="md">Button</cosmoz-button>
            <cosmoz-button variant="link" size="md">Button</cosmoz-button>

            <div class="row-label">LG</div>
            <cosmoz-button variant="primary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="lg">Button</cosmoz-button>
            <cosmoz-button variant="link" size="lg">Button</cosmoz-button>

            <div class="row-label">XL</div>
            <cosmoz-button variant="primary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="secondary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="tertiary" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="destructive" size="xl">Button</cosmoz-button>
            <cosmoz-button variant="link" size="xl">Button</cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all size and variant combinations.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .a11y-section {
                margin-bottom: calc(var(--cz-spacing) * 6);
            }
            .a11y-section h4 {
                margin: 0 0 calc(var(--cz-spacing) * 2) 0;
                font-size: var(--cz-text-sm);
                font-weight: var(--cz-font-weight-semibold);
                color: var(--cz-color-text-primary);
            }
            .a11y-section p {
                margin: 0 0 calc(var(--cz-spacing) * 3) 0;
                font-size: var(--cz-text-sm);
                color: var(--cz-color-text-tertiary);
            }
            #delete-warning {
                margin-top: calc(var(--cz-spacing) * 2);
                font-size: var(--cz-text-sm);
                color: var(--cz-color-text-error);
            }
        </style>
        <div class="story-stack">
            <div class="a11y-section">
                <h4>Icon-only buttons with aria-label</h4>
                <p>
                    Buttons without visible text should have an aria-label for screen
                    readers. Prefer the <code>icon-only</code> attribute with a
                    <code>tooltip</code> for utility buttons — the tooltip heading doubles
                    as a visual affordance while <code>aria-label</code> keeps them
                    accessible. For toggles, reflect the state with
                    <code>aria-pressed</code> (click to toggle below).
                </p>
                <div class="story-row">
                    <cosmoz-button
                        icon-only
                        variant="secondary"
                        tooltip="Edit"
                        aria-label="Edit"
                        aria-pressed="false"
                        @click=\${togglePressed}
                    >
                        \${iconSvg(icons.edit)}
                    </cosmoz-button>
                </div>
            </div>

            <div class="a11y-section">
                <h4>Button with aria-describedby</h4>
                <p>Reference additional context for screen readers.</p>
                <cosmoz-button variant="destructive" aria-describedby="delete-warning">
                    Delete Account
                </cosmoz-button>
                <p id="delete-warning">This action cannot be undone.</p>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Accessible patterns: aria-label on icon-only buttons, aria-pressed for toggles, and aria-describedby for additional context.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    When <code>href</code> is set, the button renders as an anchor link
                    with the same visual styles.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/home">Home</cosmoz-button>
                <cosmoz-button variant="secondary" href="/about">About</cosmoz-button>
                <cosmoz-button variant="tertiary" href="/contact"
                    >Contact</cosmoz-button
                >
                <cosmoz-button variant="destructive" href="/delete"
                    >Delete</cosmoz-button
                >
            </div>
            <div class="story-row">
                <cosmoz-button href="/docs" target="_blank" rel="noopener"
                    >Open in New Tab</cosmoz-button
                >
                <cosmoz-button href="/report.pdf" download
                    >Download Report</cosmoz-button
                >
            </div>
            <div>
                <p class="story-label">Anchor links with icons</p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/">
                    \${iconSvg(icons.home, {
    slot: 'prefix'
  })} Home
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/dashboard">
                    \${iconSvg(icons.dashboard, {
    slot: 'prefix'
  })} Dashboard
                </cosmoz-button>
                <cosmoz-button variant="tertiary" href="/settings">
                    \${iconSvg(icons.settings, {
    slot: 'prefix'
  })} Settings
                </cosmoz-button>
                <cosmoz-button
                    variant="secondary"
                    href="https://example.com"
                    target="_blank"
                    rel="noopener"
                >
                    Visit Docs \${iconSvg(icons.external, {
    slot: 'suffix'
  })}
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/home" disabled
                    >Disabled Link</cosmoz-button
                >
                <cosmoz-button variant="secondary" href="/about" disabled
                    >Disabled Link</cosmoz-button
                >
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes, including prefix and suffix icons.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}}})))()}Mt();export{Q as Accessibility,$ as AnchorLinks,H as Default,J as DisabledStates,X as FullWidth,K as IconOnly,q as PressedState,Z as SizeVariantMatrix,W as Sizes,Y as Tooltips,U as Variants,G as WithIcons,jt as __namedExportsOrder,kt as default};