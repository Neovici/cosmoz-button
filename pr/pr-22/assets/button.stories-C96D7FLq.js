import{r as Ct,D as yt,A as y,b as s}from"./iframe-CSsjhvIP.js";import"./preload-helper-PPVm8Dsz.js";let Q,ft=0;function dt(t){Q=t}function ut(){Q=null,ft=0}function St(){return ft++}const Z=Symbol("haunted.phase"),U=Symbol("haunted.hook"),ht=Symbol("haunted.update"),pt=Symbol("haunted.commit"),C=Symbol("haunted.effects"),$=Symbol("haunted.layoutEffects"),tt="haunted.context";class Bt{update;host;virtual;[U];[C];[$];constructor(o,e){this.update=o,this.host=e,this[U]=new Map,this[C]=[],this[$]=[]}run(o){dt(this);let e=o();return ut(),e}_runEffects(o){let e=this[o];dt(this);for(let n of e)n.call(this);ut()}runEffects(){this._runEffects(C)}runLayoutEffects(){this._runEffects($)}teardown(){this[U].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}class Mt extends Error{constructor(o){const e=o?` <${o}>`:"";super(`Infinite update loop detected in component${e}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const _t=100,At=Promise.resolve().then.bind(Promise.resolve());function zt(){let t=[],o;function e(){o=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),o==null&&(o=At(e))}}const $t=zt(),vt=zt();class et{renderer;host;state;[Z];_updateQueued;_active;_updateCount;_processing;static maxUpdates=_t;constructor(o,e){this.renderer=o,this.host=e,this.state=new Bt(this.update.bind(this),e),this[Z]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>et.maxUpdates){const o=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Mt(o)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,$t(()=>{let o=this.handlePhase(ht);vt(()=>{this.handlePhase(pt,o),vt(()=>{this.handlePhase(C),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(o,e){switch(this[Z]=o,o){case pt:this.commit(e),this.runEffects($);return;case ht:return this.render();case C:return this.runEffects(C)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(o){this.state._runEffects(o)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const nt=(...t)=>{const o=new CSSStyleSheet;return o.replaceSync(t.join("")),o},Et=t=>t?.map(o=>typeof o=="string"?nt(o):o),Tt=(t,...o)=>t.flatMap((e,n)=>[e,o[n]||""]).join(""),_=Tt,Lt=(t="")=>t.replace(/-+([a-z])?/g,(o,e)=>e?e.toUpperCase():"");function Dt(t){class o extends et{frag;renderResult;constructor(r,i,h){super(r,h||i),this.frag=i}commit(r){this.renderResult=t(r,this.frag)}}function e(n,r,i){const h=(i||r||{}).baseElement||HTMLElement,{observedAttributes:b=[],useShadowDOM:u=!0,shadowRootInit:w={},styleSheets:k}=i||r||{},l=Et(n.styleSheets||k);class f extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||b||[]}constructor(){if(super(),u===!1)this._scheduler=new o(n,this);else{const a=this.attachShadow({mode:"open",...w});l&&(a.adoptedStyleSheets=l),this._scheduler=new o(n,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,d,v){if(d===v)return;let m=v===""?!0:v;Reflect.set(this,Lt(a),m)}}function c(p){let a=p,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(v){d&&a===v||(d=!0,a=v,this._scheduler&&this._scheduler.update())}})}const z=new Proxy(h.prototype,{getPrototypeOf(p){return p},set(p,a,d,v){let m;return a in p?(m=Object.getOwnPropertyDescriptor(p,a),m&&m.set?(m.set.call(v,d),!0):(Reflect.set(p,a,d,v),!0)):(typeof a=="symbol"||a[0]==="_"?m={enumerable:!0,configurable:!0,writable:!0,value:d}:m=c(d),Object.defineProperty(v,a,m),m.set&&m.set.call(v,d),!0)}});return Object.setPrototypeOf(f.prototype,z),f}return e}class B{id;state;constructor(o,e){this.id=o,this.state=e}}function Pt(t,...o){let e=St(),n=Q[U],r=n.get(e);return r||(r=new t(e,Q,...o),n.set(e,r)),r.update(...o)}function M(t){return Pt.bind(null,t)}function gt(t){return M(class extends B{callback;lastValues;values;_teardown;constructor(o,e,n,r){super(o,e),t(e,this)}update(o,e){this.callback=o,this.values=e}call(){const o=!this.values||this.hasChanged();this.lastValues=this.values,o&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(o){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),o&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((o,e)=>this.lastValues[e]!==o)}})}function wt(t,o){t[C].push(o)}const S=gt(wt),Ht=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,It=M(class extends B{Context;value;_ranEffect;_unsubscribe;constructor(t,o,e){super(t,o),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,wt(o,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const o={Context:t,callback:this._updater};Ht(this.state.host).dispatchEvent(new CustomEvent(tt,{detail:o,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:r}=o;this.value=n?r:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function jt(t){return o=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(tt,this)}disconnectedCallback(){this.removeEventListener(tt,this)}handleEvent(n){const{detail:r}=n;r.Context===e&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:n}){const r=It(e);return n(r)},{useShadowDOM:!1}),defaultValue:o};return e}}const xt=M(class extends B{value;values;constructor(t,o,e,n){super(t,o),this.value=e(),this.values=n}update(t,o){return this.hasChanged(o)&&(this.values=o,this.value=t()),this.value}hasChanged(t=[]){return t.some((o,e)=>this.values[e]!==o)}}),mt=(t,o)=>xt(()=>t,o);function Rt(t,o){t[$].push(o)}gt(Rt);const Vt=M(class extends B{args;constructor(t,o,e){super(t,o),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(t){const[o]=this.args;typeof t=="function"&&(t=t(o)),!Object.is(o,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});M(class extends B{reducer;currentState;constructor(t,o,e,n,r){super(t,o),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Ot=/([A-Z])/gu;M(class extends B{property;eventName;constructor(t,o,e,n){if(super(t,o),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(Ot,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n,!0))}update(t,o){return[this.state.host[this.property],this.updater]}resolve(t){const o=this.state.host[this.property],e=typeof t=="function"?t:void 0,n=e?e(o):t;return[o,n,e]}notify(t,o){const e=new CustomEvent(this.eventName,{detail:{value:t,updater:o,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}updater(t,o=!1){const[e,n,r]=this.resolve(t),i=this.notify(n,r);!o&&i.defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});function Nt(t){let o=t;return{get current(){return o},set current(e){o=e},get value(){return o},set value(e){o=e}}}function q(t){return xt(()=>Nt(t),[])}M(class extends B{update(){return this.state.host}});function Wt({render:t}){const o=Dt(t),e=jt(o);return{component:o,createContext:e}}const Ft={CHILD:2},Gt=t=>(...o)=>({_$litDirective$:t,values:o});class Ut{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,n){this._$Ct=o,this._$AM=e,this._$Ci=n}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}}const E=(t,o)=>{const e=t._$AN;if(e===void 0)return!1;for(const n of e)n._$AO?.(o,!1),E(n,o);return!0},Y=t=>{let o,e;do{if((o=t._$AM)===void 0)break;e=o._$AN,e.delete(t),t=o}while(e?.size===0)},kt=t=>{for(let o;o=t._$AM;t=o){let e=o._$AN;if(e===void 0)o._$AN=e=new Set;else if(e.has(t))break;e.add(t),Yt(o)}};function qt(t){this._$AN!==void 0?(Y(this),this._$AM=t,kt(this)):this._$AM=t}function Qt(t,o=!1,e=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(o)if(Array.isArray(n))for(let i=e;i<n.length;i++)E(n[i],!1),Y(n[i]);else n!=null&&(E(n,!1),Y(n));else E(this,t)}const Yt=t=>{t.type==Ft.CHILD&&(t._$AP??=Qt,t._$AQ??=qt)};class Xt extends Ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,e,n){super._$AT(o,e,n),kt(this),this.isConnected=o._$AU}_$AO(o,e=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),e&&(E(this,o),Y(this))}setValue(o){if(Ct(this._$Ct))this._$Ct._$AI(o,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=o,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:rt}=Wt({render:yt}),st=nt(_`
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
`),J=new WeakMap,K=Gt(class extends Xt{render(t){return y}update(t,[o]){const e=o!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=o,this.ht=t.options?.host,this.rt(this.ct=t.element)),y}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let e=J.get(o);e===void 0&&(e=new WeakMap,J.set(o,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?J.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function X(t,o,e){return t?o(t):e?.(t)}const Zt=_`
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
`;customElements.define("cosmoz-tooltip-content",rt(()=>s`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[st,Zt]}));const ot=nt(_`
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
`),bt=(t,o,e)=>yt(s`<cosmoz-tooltip-content>
			${X(o,()=>s`<strong slot="heading">${o}</strong>`)}
			${X(e,()=>s`<p slot="description">${e}</p>`)}
		</cosmoz-tooltip-content>`,t),Jt=(t,o)=>{const{for:e,heading:n,description:r,placement:i="top",delay:h=300,disabled:b=!1}=o,u=q(),k=!!(n||r)&&!b;S(()=>{if(!e||!k)return;const l=t.getRootNode(),f=l.adoptedStyleSheets??[];f.includes(ot)||(l.adoptedStyleSheets=[...f,ot]);const c=document.createElement("div");c.setAttribute("popover","manual"),c.setAttribute("role","tooltip"),c.classList.add("cosmoz-tooltip-popover"),t.after(c),u.current=c,bt(c,n,r);const z=`[name="${e}"]`,p=`--tooltip-anchor-${e}`;let a;const d=g=>{b||(clearTimeout(a),g.style.anchorName=p,c.style.positionAnchor=p,c.style.positionArea=i,a=window.setTimeout(()=>c.showPopover(),h))},v=()=>{clearTimeout(a),c.hidePopover()},m=g=>{const x=g.target.closest?.(z);x&&d(x)},it=g=>{const x=g.target.closest?.(z);if(!x)return;const lt=g.relatedTarget;lt&&x.contains(lt)||v()},at=g=>{const x=g.target.closest?.(z);x&&d(x)},ct=g=>{g.target.closest?.(z)&&v()};return l.addEventListener("pointerover",m),l.addEventListener("pointerout",it),l.addEventListener("focusin",at),l.addEventListener("focusout",ct),()=>{clearTimeout(a),l.removeEventListener("pointerover",m),l.removeEventListener("pointerout",it),l.removeEventListener("focusin",at),l.removeEventListener("focusout",ct),c.hidePopover(),c.remove(),u.current=void 0}},[e,i,h,k]),S(()=>{!e||!u.current||bt(u.current,n,r)},[n,r,e]),S(()=>{!b||!u.current||u.current.hidePopover()},[b])},Kt=t=>{const[o,e]=Vt(!1);return S(()=>{const n=t.current;if(!n)return;const r=()=>{e(n.assignedElements().length>0)};return r(),n.addEventListener("slotchange",r),()=>n.removeEventListener("slotchange",r)},[t.current]),o},to=_`
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
`,oo=t=>{const{heading:o,description:e,for:n,placement:r="top",delay:i=300,disabled:h=!1}=t,b=q(),u=q(),w=q(),k=Kt(w),f=!!(o||e||k)&&!h,c=mt(()=>{f&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{b.current?.showPopover()},i))},[i,f]);S(()=>{h&&(clearTimeout(u.current),b.current?.hidePopover())},[h]);const z=mt(()=>{clearTimeout(u.current),b.current?.hidePopover()},[]);return S(()=>{if(n)return;const p=a=>{const d=a.relatedTarget;d&&t.contains(d)||z()};return t.addEventListener("pointerover",c),t.addEventListener("pointerout",p),()=>{t.removeEventListener("pointerover",c),t.removeEventListener("pointerout",p)}},[n,c,z]),Jt(t,{for:n,heading:o,description:e,placement:r,delay:i,disabled:h}),n?y:f?s`
		<slot @focusin=${c} @focusout=${z}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${r}"
			${K(b)}
		>
			<cosmoz-tooltip-content>
				${X(o,()=>s`<strong slot="heading">${o}</strong>`)}
				${X(e,()=>s`<p slot="description">${e}</p>`)}
				<slot name="content" ${K(w)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${K(w)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",rt(oo,{styleSheets:[st,ot,to],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const A=t=>t??y,eo=_`
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
`,no=_`
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

	/* The tooltip wrapper must fill the host so the inner control keeps
	   stretching with host-driven sizing (flex: 1, width, ...). */
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
	 * ICON ONLY (Untitled UI utility button)
	 * Square, icon-sized, padding p-1.5.
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
	 * BUTTON BASE STYLES (Primary - default)
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

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${eo}
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
	 * Muted icon color for the quiet variants with proper light/dark
	 * contrast. Primary and destructive keep their on-brand / on-error
	 * icon colors.
	 * ======================================== */

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);
	}

	:host([icon-only][variant='secondary']:hover) .button,
	:host([icon-only][variant='secondary']) .button:hover,
	:host([icon-only][variant='tertiary']:hover) .button,
	:host([icon-only][variant='tertiary']) .button:hover {
		color: var(--cz-color-text-secondary);
	}

	/* ========================================
	 * PRESSED / SELECTED STATE (aria-pressed)
	 * Available on all variants. Quiet variants (primary, secondary,
	 * tertiary) shift to the selected brand chip; destructive keeps the
	 * error intent with a tinted pressed surface; link emphasizes text.
	 * ======================================== */

	:host([aria-pressed='true']) .button {
		box-shadow: none;

		&::before {
			display: none;
		}
	}

	:host([aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-brand-50),
			var(--cz-color-brand-600)
		);
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-gray-50));

		&:hover {
			background-color: light-dark(
				var(--cz-color-brand-100),
				var(--cz-color-brand-500)
			);
		}
	}

	:host([variant='destructive'][aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-error-100),
			var(--cz-color-error-600)
		);
		color: light-dark(var(--cz-color-error-800), var(--cz-color-gray-50));

		&:hover {
			background-color: light-dark(
				var(--cz-color-error-100),
				var(--cz-color-error-500)
			);
		}
	}

	:host([variant='link'][aria-pressed='true']) .button {
		background-color: transparent;
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
`,ro=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download"],so=t=>{const o=t.hasAttribute("disabled"),e=t.getAttribute("type")||"button",n=t.getAttribute("href"),r=t.getAttribute("tooltip"),i=t.getAttribute("tooltip-placement"),h=t.getAttribute("target"),b=t.getAttribute("rel"),u=t.getAttribute("download");S(()=>{const l=f=>{t.hasAttribute("disabled")&&f.stopImmediatePropagation()};return t.addEventListener("click",l,{capture:!0}),()=>t.removeEventListener("click",l,{capture:!0})},[]);const w=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,k=n!=null?s`
					<a
						href=${n}
						class="button"
						part="button"
						aria-disabled=${o?"true":y}
						target=${A(h)}
						rel=${A(b)}
						download=${A(u)}
						>${w}</a
					>
				`:s`
					<button
						type=${e}
						class="button"
						part="button"
						?disabled=${o}
					>
						${w}
					</button>
				`;return s`<cosmoz-tooltip
		heading=${A(r??void 0)}
		placement=${A(i??void 0)}
		?disabled=${o}
	>
		${k}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",rt(so,{observedAttributes:ro,styleSheets:[st,no],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const lo={title:"Cosmoz Button",component:"cosmoz-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","link"],description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit","reset"],description:"The button type attribute",table:{defaultValue:{summary:"button"}}},href:{control:"text",description:"When set, renders as an anchor link instead of a button"},target:{control:"text",description:"Target attribute for the anchor (only with href)"},rel:{control:"text",description:"Rel attribute for the anchor (only with href)"},download:{control:"text",description:"Download attribute for the anchor (only with href)"},ariaLabel:{control:"text",description:"Accessible label for icon-only buttons"},iconOnly:{control:"boolean",description:"Renders a compact square icon-only button (utility button)",table:{defaultValue:{summary:"false"}}},tooltip:{control:"text",description:"Wraps the button in a tooltip with this heading"},tooltipPlacement:{control:"select",options:["top","bottom","left","right"],description:"Tooltip placement (only with tooltip)",table:{defaultValue:{summary:"top"}}},ariaPressed:{control:"boolean",description:"Reflects a toggled/selected state"},label:{control:"text",description:"Button label text"}}},io=t=>s`
    <cosmoz-button
        variant=${t.variant||"primary"}
        size=${t.size||"md"}
        type=${t.type||"button"}
        ?disabled=${t.disabled}
        ?full-width=${t.fullWidth}
        ?icon-only=${t.iconOnly}
        tooltip=${t.tooltip||y}
        tooltip-placement=${t.tooltipPlacement||y}
        aria-pressed=${t.ariaPressed?"true":y}
        href=${t.href||y}
        target=${t.target||y}
        rel=${t.rel||y}
        download=${t.download||y}
        aria-label=${t.ariaLabel||y}
    >
        ${t.label||"Button"}
    </cosmoz-button>
`,T={args:{variant:"primary",size:"md",disabled:!1,fullWidth:!1,label:"Button"},render:io},L={render:()=>s`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The five visual style variants available for the button."}}}},D={render:()=>s`
        <div class="story-row">
            <cosmoz-button size="sm">Small</cosmoz-button>
            <cosmoz-button size="md">Medium</cosmoz-button>
            <cosmoz-button size="lg">Large</cosmoz-button>
            <cosmoz-button size="xl">Extra Large</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The four size variants available for the button."}}}},P={render:()=>s`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"All variants in their disabled state."}}}},H={render:()=>s`
        <style>
            .icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-row">
            <cosmoz-button variant="primary">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M12 5v14M5 12h14" />
                </svg>
                Add Item
            </cosmoz-button>
            <cosmoz-button variant="secondary">
                Download
                <svg
                    slot="suffix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                    />
                </svg>
            </cosmoz-button>
            <cosmoz-button variant="tertiary">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                Search
            </cosmoz-button>
            <cosmoz-button variant="destructive">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                    />
                </svg>
                Delete
            </cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"Buttons with prefix and suffix icon slots."}}}},I={render:()=>s`
        <style>
            .utility-icon {
                width: 20px;
                height: 20px;
            }
            .utility-icon-sm {
                width: 16px;
                height: 16px;
            }
        </style>
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
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Search"
                    aria-label="Search"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Close panel"
                    aria-label="Close panel"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </cosmoz-button>
            </div>
            <div>
                <p class="story-label">Sizes</p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
                    <svg
                        class="utility-icon-sm"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
            </div>
            <div>
                <p class="story-label">
                    Toggled (<code>aria-pressed="true"</code>) and disabled
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="true"
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="1.6" />
                        <path d="M4 18l5-5 4 4 3-3 4 4" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Icon-only utility buttons in secondary and tertiary variants, all sizes, plus toggled (aria-pressed) and disabled states."}}}},j={render:()=>s`
        <style>
            .pressed-icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-stack">
            <div>
                <p class="story-label">
                    <code>aria-pressed="true"</code> works on every variant — quiet
                    variants shift to the selected brand chip, destructive keeps the error
                    intent, link emphasizes text.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button aria-pressed="true">Primary</cosmoz-button>
                <cosmoz-button variant="secondary" aria-pressed="true"
                    >Secondary</cosmoz-button
                >
                <cosmoz-button variant="tertiary" aria-pressed="true"
                    >Tertiary</cosmoz-button
                >
                <cosmoz-button variant="destructive" aria-pressed="true"
                    >Destructive</cosmoz-button
                >
                <cosmoz-button variant="link" aria-pressed="true">Link</cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="true"
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    <svg
                        class="pressed-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="1.6" />
                        <path d="M4 18l5-5 4 4 3-3 4 4" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button variant="primary" tooltip="Normal state for comparison"
                    >Normal Primary</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:"The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons."}}}},R={render:()=>s`
        <style>
            .utility-icon {
                width: 20px;
                height: 20px;
            }
        </style>
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
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Left placement"
                    tooltip-placement="left"
                    aria-label="Left placement"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Bottom placement"
                    tooltip-placement="bottom"
                    aria-label="Bottom placement"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
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
    `,parameters:{docs:{description:{story:"Tooltip integration via the tooltip and tooltip-placement attributes. Works on icon-only and text buttons; disabled buttons do not show the tooltip."}}}},V={render:()=>s`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    `,parameters:{docs:{description:{story:"Buttons that take up 100% of their container width."}}}},O={render:()=>s`
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
    `,parameters:{docs:{description:{story:"Complete matrix showing all size and variant combinations."}}}},N={render:()=>s`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Hover over buttons to see state changes. Tab to see focus rings.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary">Primary</cosmoz-button>
                <cosmoz-button variant="secondary">Secondary</cosmoz-button>
                <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
                <cosmoz-button variant="destructive">Destructive</cosmoz-button>
                <cosmoz-button variant="link">Link</cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Demonstrates hover, active, and focus states for all variants."}}}},W={render:()=>s`
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
            .icon {
                width: 20px;
                height: 20px;
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
                    <code>aria-pressed</code>.
                </p>
                <div class="story-row">
                    <cosmoz-button icon-only tooltip="Add item" aria-label="Add item">
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button
                        icon-only
                        variant="secondary"
                        tooltip="Edit"
                        aria-label="Edit"
                        aria-pressed="true"
                    >
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button
                        icon-only
                        variant="destructive"
                        tooltip="Delete"
                        aria-label="Delete"
                    >
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                            />
                        </svg>
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
    `,parameters:{docs:{description:{story:"Demonstrates accessible patterns for icon-only buttons and descriptive context."}}}},F={render:()=>s`
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
            <div class="story-row">
                <cosmoz-button variant="primary" href="/home" disabled
                    >Disabled Link</cosmoz-button
                >
                <cosmoz-button variant="secondary" href="/about" disabled
                    >Disabled Link</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes."}}}},G={render:()=>s`
        <style>
            .icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Anchor links with prefix and suffix icons for common navigation
                    patterns.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/dashboard">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Dashboard
                </cosmoz-button>
                <cosmoz-button variant="tertiary" href="/settings">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                        />
                    </svg>
                    Settings
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button
                    variant="secondary"
                    href="https://example.com"
                    target="_blank"
                    rel="noopener"
                >
                    Visit Docs
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    variant="tertiary"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener"
                >
                    GitHub
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/report.pdf" download>
                    Download Report
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/data.csv" download>
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Export CSV
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="link" href="/search">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    Search
                </cosmoz-button>
                <cosmoz-button
                    variant="link"
                    href="/help"
                    target="_blank"
                    rel="noopener"
                >
                    Help Center
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Anchor links with prefix and suffix icons for navigation, external links, downloads, and link variants."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Button'
  },
  render: renderButton
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
        story: 'The five visual style variants available for the button.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-button size="sm">Small</cosmoz-button>
            <cosmoz-button size="md">Medium</cosmoz-button>
            <cosmoz-button size="lg">Large</cosmoz-button>
            <cosmoz-button size="xl">Extra Large</cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The four size variants available for the button.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'All variants in their disabled state.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-row">
            <cosmoz-button variant="primary">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M12 5v14M5 12h14" />
                </svg>
                Add Item
            </cosmoz-button>
            <cosmoz-button variant="secondary">
                Download
                <svg
                    slot="suffix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                    />
                </svg>
            </cosmoz-button>
            <cosmoz-button variant="tertiary">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                Search
            </cosmoz-button>
            <cosmoz-button variant="destructive">
                <svg
                    slot="prefix"
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                    />
                </svg>
                Delete
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
}`,...H.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .utility-icon {
                width: 20px;
                height: 20px;
            }
            .utility-icon-sm {
                width: 16px;
                height: 16px;
            }
        </style>
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
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Search"
                    aria-label="Search"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Close panel"
                    aria-label="Close panel"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </cosmoz-button>
            </div>
            <div>
                <p class="story-label">Sizes</p>
            </div>
            <div class="story-row">
                <cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
                    <svg
                        class="utility-icon-sm"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
            </div>
            <div>
                <p class="story-label">
                    Toggled (<code>aria-pressed="true"</code>) and disabled
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="true"
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="1.6" />
                        <path d="M4 18l5-5 4 4 3-3 4 4" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </cosmoz-button>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Icon-only utility buttons in secondary and tertiary variants, all sizes, plus toggled (aria-pressed) and disabled states.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .pressed-icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-stack">
            <div>
                <p class="story-label">
                    <code>aria-pressed="true"</code> works on every variant — quiet
                    variants shift to the selected brand chip, destructive keeps the error
                    intent, link emphasizes text.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button aria-pressed="true">Primary</cosmoz-button>
                <cosmoz-button variant="secondary" aria-pressed="true"
                    >Secondary</cosmoz-button
                >
                <cosmoz-button variant="tertiary" aria-pressed="true"
                    >Tertiary</cosmoz-button
                >
                <cosmoz-button variant="destructive" aria-pressed="true"
                    >Destructive</cosmoz-button
                >
                <cosmoz-button variant="link" aria-pressed="true">Link</cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="true"
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    <svg
                        class="pressed-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="1.6" />
                        <path d="M4 18l5-5 4 4 3-3 4 4" />
                    </svg>
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
        story: 'The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .utility-icon {
                width: 20px;
                height: 20px;
            }
        </style>
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
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Left placement"
                    tooltip-placement="left"
                    aria-label="Left placement"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Bottom placement"
                    tooltip-placement="bottom"
                    aria-label="Bottom placement"
                >
                    <svg
                        class="utility-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
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
        story: 'Tooltip integration via the tooltip and tooltip-placement attributes. Works on icon-only and text buttons; disabled buttons do not show the tooltip.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Hover over buttons to see state changes. Tab to see focus rings.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary">Primary</cosmoz-button>
                <cosmoz-button variant="secondary">Secondary</cosmoz-button>
                <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
                <cosmoz-button variant="destructive">Destructive</cosmoz-button>
                <cosmoz-button variant="link">Link</cosmoz-button>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates hover, active, and focus states for all variants.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
            .icon {
                width: 20px;
                height: 20px;
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
                    <code>aria-pressed</code>.
                </p>
                <div class="story-row">
                    <cosmoz-button icon-only tooltip="Add item" aria-label="Add item">
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button
                        icon-only
                        variant="secondary"
                        tooltip="Edit"
                        aria-label="Edit"
                        aria-pressed="true"
                    >
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button
                        icon-only
                        variant="destructive"
                        tooltip="Delete"
                        aria-label="Delete"
                    >
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                            />
                        </svg>
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
        story: 'Demonstrates accessible patterns for icon-only buttons and descriptive context.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
        story: 'Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .icon {
                width: 20px;
                height: 20px;
            }
        </style>
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Anchor links with prefix and suffix icons for common navigation
                    patterns.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/dashboard">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Dashboard
                </cosmoz-button>
                <cosmoz-button variant="tertiary" href="/settings">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                        />
                    </svg>
                    Settings
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button
                    variant="secondary"
                    href="https://example.com"
                    target="_blank"
                    rel="noopener"
                >
                    Visit Docs
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button
                    variant="tertiary"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener"
                >
                    GitHub
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="primary" href="/report.pdf" download>
                    Download Report
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/data.csv" download>
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Export CSV
                </cosmoz-button>
            </div>
            <div class="story-row">
                <cosmoz-button variant="link" href="/search">
                    <svg
                        slot="prefix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    Search
                </cosmoz-button>
                <cosmoz-button
                    variant="link"
                    href="/help"
                    target="_blank"
                    rel="noopener"
                >
                    Help Center
                    <svg
                        slot="suffix"
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </cosmoz-button>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Anchor links with prefix and suffix icons for navigation, external links, downloads, and link variants.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};const uo=["Default","Variants","Sizes","DisabledStates","WithIcons","IconOnly","PressedState","Tooltips","FullWidth","SizeVariantMatrix","InteractiveStates","Accessibility","AnchorLinks","AnchorLinksWithIcons"];export{W as Accessibility,F as AnchorLinks,G as AnchorLinksWithIcons,T as Default,P as DisabledStates,V as FullWidth,I as IconOnly,N as InteractiveStates,j as PressedState,O as SizeVariantMatrix,D as Sizes,R as Tooltips,L as Variants,H as WithIcons,uo as __namedExportsOrder,lo as default};
