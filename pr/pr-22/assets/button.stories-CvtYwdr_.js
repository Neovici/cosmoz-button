import{A as h,E as Tt,r as Lt,D as gt,b as r}from"./iframe-CDPMrHQx.js";import"./preload-helper-PPVm8Dsz.js";const wt={CHILD:2},xt=t=>(...o)=>({_$litDirective$:t,values:o});class kt{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,n){this._$Ct=o,this._$AM=e,this._$Ci=n}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}}class ot extends kt{constructor(o){if(super(o),this.it=h,o.type!==wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(o){if(o===h||o==null)return this._t=void 0,this.it=o;if(o===Tt)return o;if(typeof o!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(o===this.it)return this._t;this.it=o;const e=[o];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;class et extends ot{}et.directiveName="unsafeSVG",et.resultType=2;const Bt=xt(et);let q,$t=0;function bt(t){q=t}function pt(){q=null,$t=0}function Pt(){return $t++}const K=Symbol("haunted.phase"),Q=Symbol("haunted.hook"),mt=Symbol("haunted.update"),vt=Symbol("haunted.commit"),A=Symbol("haunted.effects"),P=Symbol("haunted.layoutEffects"),nt="haunted.context";class Dt{update;host;virtual;[Q];[A];[P];constructor(o,e){this.update=o,this.host=e,this[Q]=new Map,this[A]=[],this[P]=[]}run(o){bt(this);let e=o();return pt(),e}_runEffects(o){let e=this[o];bt(this);for(let n of e)n.call(this);pt()}runEffects(){this._runEffects(A)}runLayoutEffects(){this._runEffects(P)}teardown(){this[Q].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}class Mt extends Error{constructor(o){const e=o?` <${o}>`:"";super(`Infinite update loop detected in component${e}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const It=100,Rt=Promise.resolve().then.bind(Promise.resolve());function St(){let t=[],o;function e(){o=null;let n=t;t=[];for(var s=0,a=n.length;s<a;s++)n[s]()}return function(n){t.push(n),o==null&&(o=Rt(e))}}const Nt=St(),zt=St();class rt{renderer;host;state;[K];_updateQueued;_active;_updateCount;_processing;static maxUpdates=It;constructor(o,e){this.renderer=o,this.host=e,this.state=new Dt(this.update.bind(this),e),this[K]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>rt.maxUpdates){const o=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Mt(o)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Nt(()=>{let o=this.handlePhase(mt);zt(()=>{this.handlePhase(vt,o),zt(()=>{this.handlePhase(A),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(o,e){switch(this[K]=o,o){case vt:this.commit(e),this.runEffects(P);return;case mt:return this.render();case A:return this.runEffects(A)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(o){this.state._runEffects(o)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const at=(...t)=>{const o=new CSSStyleSheet;return o.replaceSync(t.join("")),o},Ot=t=>t?.map(o=>typeof o=="string"?at(o):o),Ht=(t,...o)=>t.flatMap((e,n)=>[e,o[n]||""]).join(""),L=Ht,Ft=(t="")=>t.replace(/-+([a-z])?/g,(o,e)=>e?e.toUpperCase():"");function Vt(t){class o extends rt{frag;renderResult;constructor(s,a,m){super(s,m||a),this.frag=a}commit(s){this.renderResult=t(s,this.frag)}}function e(n,s,a){const m=(a||s||{}).baseElement||HTMLElement,{observedAttributes:y=[],useShadowDOM:p=!0,shadowRootInit:k={},styleSheets:S}=a||s||{},u=Ot(n.styleSheets||S);class g extends m{_scheduler;static get observedAttributes(){return n.observedAttributes||y||[]}constructor(){if(super(),p===!1)this._scheduler=new o(n,this);else{const i=this.attachShadow({mode:"open",...k});u&&(i.adoptedStyleSheets=u),this._scheduler=new o(n,i,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,b,z){if(b===z)return;let f=z===""?!0:z;Reflect.set(this,Ft(i),f)}}function d(v){let i=v,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(z){b&&i===z||(b=!0,i=z,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(m.prototype,{getPrototypeOf(v){return v},set(v,i,b,z){let f;return i in v?(f=Object.getOwnPropertyDescriptor(v,i),f&&f.set?(f.set.call(z,b),!0):(Reflect.set(v,i,b,z),!0)):(typeof i=="symbol"||i[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:b}:f=d(b),Object.defineProperty(z,i,f),f.set&&f.set.call(z,b),!0)}});return Object.setPrototypeOf(g.prototype,w),g}return e}class E{id;state;constructor(o,e){this.id=o,this.state=e}}function Wt(t,...o){let e=Pt(),n=q[Q],s=n.get(e);return s||(s=new t(e,q,...o),n.set(e,s)),s.update(...o)}function T(t){return Wt.bind(null,t)}function _t(t){return T(class extends E{callback;lastValues;values;_teardown;constructor(o,e,n,s){super(o,e),t(e,this)}update(o,e){this.callback=o,this.values=e}call(){const o=!this.values||this.hasChanged();this.lastValues=this.values,o&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(o){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),o&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((o,e)=>this.lastValues[e]!==o)}})}function At(t,o){t[A].push(o)}const C=_t(At),Gt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,jt=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(t,o,e){super(t,o),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,At(o,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const o={Context:t,callback:this._updater};Gt(this.state.host).dispatchEvent(new CustomEvent(nt,{detail:o,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=o;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ut(t){return o=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(nt,this)}disconnectedCallback(){this.removeEventListener(nt,this)}handleEvent(n){const{detail:s}=n;s.Context===e&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=jt(e);return n(s)},{useShadowDOM:!1}),defaultValue:o};return e}}const Ct=T(class extends E{value;values;constructor(t,o,e,n){super(t,o),this.value=e(),this.values=n}update(t,o){return this.hasChanged(o)&&(this.values=o,this.value=t()),this.value}hasChanged(t=[]){return t.some((o,e)=>this.values[e]!==o)}}),ft=(t,o)=>Ct(()=>t,o);function Qt(t,o){t[P].push(o)}_t(Qt);const Yt=T(class extends E{args;constructor(t,o,e){super(t,o),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(t){const[o]=this.args;typeof t=="function"&&(t=t(o)),!Object.is(o,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});T(class extends E{reducer;currentState;constructor(t,o,e,n,s){super(t,o),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const qt=/([A-Z])/gu;T(class extends E{property;eventName;constructor(t,o,e,n){if(super(t,o),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(qt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n,!0))}update(t,o){return[this.state.host[this.property],this.updater]}resolve(t){const o=this.state.host[this.property],e=typeof t=="function"?t:void 0,n=e?e(o):t;return[o,n,e]}notify(t,o){const e=new CustomEvent(this.eventName,{detail:{value:t,updater:o,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}updater(t,o=!1){const[e,n,s]=this.resolve(t),a=this.notify(n,s);!o&&a.defaultPrevented||Object.is(e,n)||(this.state.host[this.property]=n)}});function Xt(t){let o=t;return{get current(){return o},set current(e){o=e},get value(){return o},set value(e){o=e}}}function Y(t){return Ct(()=>Xt(t),[])}T(class extends E{update(){return this.state.host}});function Zt({render:t}){const o=Vt(t),e=Ut(o);return{component:o,createContext:e}}const D=(t,o)=>{const e=t._$AN;if(e===void 0)return!1;for(const n of e)n._$AO?.(o,!1),D(n,o);return!0},X=t=>{let o,e;do{if((o=t._$AM)===void 0)break;e=o._$AN,e.delete(t),t=o}while(e?.size===0)},Et=t=>{for(let o;o=t._$AM;t=o){let e=o._$AN;if(e===void 0)o._$AN=e=new Set;else if(e.has(t))break;e.add(t),to(o)}};function Kt(t){this._$AN!==void 0?(X(this),this._$AM=t,Et(this)):this._$AM=t}function Jt(t,o=!1,e=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(o)if(Array.isArray(n))for(let a=e;a<n.length;a++)D(n[a],!1),X(n[a]);else n!=null&&(D(n,!1),X(n));else D(this,t)}const to=t=>{t.type==wt.CHILD&&(t._$AP??=Jt,t._$AQ??=Kt)};class oo extends kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,e,n){super._$AT(o,e,n),Et(this),this.isConnected=o._$AU}_$AO(o,e=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),e&&(D(this,o),X(this))}setValue(o){if(Lt(this._$Ct))this._$Ct._$AI(o,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=o,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:it}=Zt({render:gt}),ct=at(L`
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
`),J=new WeakMap,tt=xt(class extends oo{render(t){return h}update(t,[o]){const e=o!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=o,this.ht=t.options?.host,this.rt(this.ct=t.element)),h}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let e=J.get(o);e===void 0&&(e=new WeakMap,J.set(o,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?J.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Z(t,o,e){return t?o(t):e?.(t)}const eo=L`
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
`;customElements.define("cosmoz-tooltip-content",it(()=>r`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[ct,eo]}));const st=at(L`
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
`),yt=(t,o,e)=>gt(r`<cosmoz-tooltip-content>
			${Z(o,()=>r`<strong slot="heading">${o}</strong>`)}
			${Z(e,()=>r`<p slot="description">${e}</p>`)}
		</cosmoz-tooltip-content>`,t),no=(t,o)=>{const{for:e,heading:n,description:s,placement:a="top",delay:m=300,disabled:y=!1}=o,p=Y(),S=!!(n||s)&&!y;C(()=>{if(!e||!S)return;const u=t.getRootNode(),g=u.adoptedStyleSheets??[];g.includes(st)||(u.adoptedStyleSheets=[...g,st]);const d=document.createElement("div");d.setAttribute("popover","manual"),d.setAttribute("role","tooltip"),d.classList.add("cosmoz-tooltip-popover"),t.after(d),p.current=d,yt(d,n,s);const w=`[name="${e}"]`,v=`--tooltip-anchor-${e}`;let i;const b=x=>{y||(clearTimeout(i),x.style.anchorName=v,d.style.positionAnchor=v,d.style.positionArea=a,i=window.setTimeout(()=>d.showPopover(),m))},z=()=>{clearTimeout(i),d.hidePopover()},f=x=>{const $=x.target.closest?.(w);$&&b($)},lt=x=>{const $=x.target.closest?.(w);if(!$)return;const ht=x.relatedTarget;ht&&$.contains(ht)||z()},dt=x=>{const $=x.target.closest?.(w);$&&b($)},ut=x=>{x.target.closest?.(w)&&z()};return u.addEventListener("pointerover",f),u.addEventListener("pointerout",lt),u.addEventListener("focusin",dt),u.addEventListener("focusout",ut),()=>{clearTimeout(i),u.removeEventListener("pointerover",f),u.removeEventListener("pointerout",lt),u.removeEventListener("focusin",dt),u.removeEventListener("focusout",ut),d.hidePopover(),d.remove(),p.current=void 0}},[e,a,m,S]),C(()=>{!e||!p.current||yt(p.current,n,s)},[n,s,e]),C(()=>{!y||!p.current||p.current.hidePopover()},[y])},so=t=>{const[o,e]=Yt(!1);return C(()=>{const n=t.current;if(!n)return;const s=()=>{e(n.assignedElements().length>0)};return s(),n.addEventListener("slotchange",s),()=>n.removeEventListener("slotchange",s)},[t.current]),o},ro=L`
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
`,ao=t=>{const{heading:o,description:e,for:n,placement:s="top",delay:a=300,disabled:m=!1}=t,y=Y(),p=Y(),k=Y(),S=so(k),g=!!(o||e||S)&&!m,d=ft(()=>{g&&(clearTimeout(p.current),p.current=window.setTimeout(()=>{y.current?.showPopover()},a))},[a,g]);C(()=>{m&&(clearTimeout(p.current),y.current?.hidePopover())},[m]);const w=ft(()=>{clearTimeout(p.current),y.current?.hidePopover()},[]);return C(()=>{if(n)return;const v=i=>{const b=i.relatedTarget;b&&t.contains(b)||w()};return t.addEventListener("pointerover",d),t.addEventListener("pointerout",v),()=>{t.removeEventListener("pointerover",d),t.removeEventListener("pointerout",v)}},[n,d,w]),no(t,{for:n,heading:o,description:e,placement:s,delay:a,disabled:m}),n?h:g?r`
		<slot @focusin=${d} @focusout=${w}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${tt(y)}
		>
			<cosmoz-tooltip-content>
				${Z(o,()=>r`<strong slot="heading">${o}</strong>`)}
				${Z(e,()=>r`<p slot="description">${e}</p>`)}
				<slot name="content" ${tt(k)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:r`
			<slot></slot>
			<slot name="content" ${tt(k)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",it(ao,{styleSheets:[ct,st,ro],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const B=t=>t??h,io=L`
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
`,co=L`
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

		${io}
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
`,lo=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download"],uo=t=>{const o=t.hasAttribute("disabled"),e=t.getAttribute("type")||"button",n=t.getAttribute("href"),s=t.getAttribute("tooltip"),a=t.getAttribute("tooltip-placement"),m=t.getAttribute("target"),y=t.getAttribute("rel"),p=t.getAttribute("download");C(()=>{const u=g=>{t.hasAttribute("disabled")&&g.stopImmediatePropagation()};return t.addEventListener("click",u,{capture:!0}),()=>t.removeEventListener("click",u,{capture:!0})},[]);const k=r`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,S=n!=null?r`
					<a
						href=${n}
						class="button"
						part="button"
						aria-disabled=${o?"true":h}
						target=${B(m)}
						rel=${B(y)}
						download=${B(p)}
						>${k}</a
					>
				`:r`
					<button
						type=${e}
						class="button"
						part="button"
						?disabled=${o}
					>
						${k}
					</button>
				`;return r`<cosmoz-tooltip
		heading=${B(s??void 0)}
		placement=${B(a??void 0)}
		?disabled=${o}
	>
		${S}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",it(uo,{observedAttributes:lo,styleSheets:[ct,co],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const mo={title:"Cosmoz Button",component:"cosmoz-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","link"],description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit","reset"],description:"The button type attribute",table:{defaultValue:{summary:"button"}}},href:{control:"text",description:"When set, renders as an anchor link instead of a button"},target:{control:"text",description:"Target attribute for the anchor (only with href)"},rel:{control:"text",description:"Rel attribute for the anchor (only with href)"},download:{control:"text",description:"Download attribute for the anchor (only with href)"},ariaLabel:{control:"text",description:"Accessible label for icon-only buttons"},iconOnly:{control:"boolean",description:"Renders a compact square icon-only button (utility button)",table:{defaultValue:{summary:"false"}}},tooltip:{control:"text",description:"Wraps the button in a tooltip with this heading"},tooltipPlacement:{control:"select",options:["top","bottom","left","right"],description:"Tooltip placement (only with tooltip)",table:{defaultValue:{summary:"top"}}},ariaPressed:{control:"boolean",description:"Reflects a toggled/selected state"},label:{control:"text",description:"Button label text"}}},ho=t=>r`
    <cosmoz-button
        variant=${t.variant||"primary"}
        size=${t.size||"md"}
        type=${t.type||"button"}
        ?disabled=${t.disabled}
        ?full-width=${t.fullWidth}
        ?icon-only=${t.iconOnly}
        tooltip=${t.tooltip||h}
        tooltip-placement=${t.tooltipPlacement||h}
        aria-pressed=${t.ariaPressed?"true":h}
        href=${t.href||h}
        target=${t.target||h}
        rel=${t.rel||h}
        download=${t.download||h}
        aria-label=${t.ariaLabel||h}
    >
        ${t.label||"Button"}
    </cosmoz-button>
`,c=(t,o={})=>r`<svg
        slot=${o.slot||h}
        class=${o.cls||h}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        ${Bt(t)}
    </svg>`,l={plus:'<path d="M12 5v14M5 12h14" />',download:'<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />',search:'<circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />',trash:'<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />',close:'<path d="M6 6l12 12M18 6L6 18" />',image:'<rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" />',edit:'<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />',home:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />',dashboard:'<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />',external:'<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />',settings:'<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />'},_=t=>{const o=t.currentTarget;o.setAttribute("aria-pressed",o.getAttribute("aria-pressed")==="true"?"false":"true")},M={args:{variant:"primary",size:"md",disabled:!1,fullWidth:!1,label:"Button"},render:ho},I={render:()=>r`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The five visual style variants. Hover to see state changes, Tab to see focus rings."}}}},R={render:()=>r`
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
                    ${c(l.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
                    ${c(l.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
                    ${c(l.plus)}
                </cosmoz-button>
                <cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
                    ${c(l.plus)}
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"The four size variants, plus the icon-only size ladder (sm 28px, md 32px, lg 36px, xl 40px)."}}}},N={render:()=>r`
        <div class="story-row">
            <cosmoz-button variant="primary">
                ${c(l.plus,{slot:"prefix"})} Add Item
            </cosmoz-button>
            <cosmoz-button variant="secondary">
                Download ${c(l.download,{slot:"suffix"})}
            </cosmoz-button>
            <cosmoz-button variant="tertiary">
                ${c(l.search,{slot:"prefix"})} Search
            </cosmoz-button>
            <cosmoz-button variant="destructive">
                ${c(l.trash,{slot:"prefix"})} Delete
            </cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"Buttons with prefix and suffix icon slots."}}}},O={render:()=>r`
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
                    ${c(l.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Search"
                    aria-label="Search"
                >
                    ${c(l.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Close panel"
                    aria-label="Close panel"
                >
                    ${c(l.close)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="destructive"
                    tooltip="Delete"
                    aria-label="Delete"
                >
                    ${c(l.trash)}
                </cosmoz-button>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Icon-only utility buttons in secondary, tertiary, and destructive variants. Sizes are shown in Sizes; toggled and disabled states in Pressed State and Disabled States."}}}},H={render:()=>r`
        <div class="story-stack">
            <div>
                <p class="story-label">
                    Click to toggle <code>aria-pressed</code>. The pressed state works on
                    every variant — quiet variants shift to the selected brand chip,
                    destructive keeps the error intent, link emphasizes text.
                </p>
            </div>
            <div class="story-row">
                <cosmoz-button aria-pressed="false" @click=${_}
                    >Primary</cosmoz-button
                >
                <cosmoz-button
                    variant="secondary"
                    aria-pressed="false"
                    @click=${_}
                    >Secondary</cosmoz-button
                >
                <cosmoz-button
                    variant="tertiary"
                    aria-pressed="false"
                    @click=${_}
                    >Tertiary</cosmoz-button
                >
                <cosmoz-button
                    variant="destructive"
                    aria-pressed="false"
                    @click=${_}
                    >Destructive</cosmoz-button
                >
                <cosmoz-button
                    variant="link"
                    aria-pressed="false"
                    @click=${_}
                    >Link</cosmoz-button
                >
            </div>
            <div class="story-row">
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    aria-pressed="false"
                    @click=${_}
                    tooltip="Invoice image"
                    aria-label="Invoice image"
                >
                    ${c(l.image)}
                </cosmoz-button>
                <cosmoz-button variant="primary" tooltip="Normal state for comparison"
                    >Normal Primary</cosmoz-button
                >
            </div>
        </div>
    `,parameters:{docs:{description:{story:"The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons. Click any button to toggle it."}}}},F={render:()=>r`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
            <cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
                ${c(l.close)}
            </cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"All variants in their disabled state, plus a disabled icon-only button."}}}},V={render:()=>r`
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
                    ${c(l.plus)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Right placement"
                    tooltip-placement="right"
                    aria-label="Right placement"
                >
                    ${c(l.search)}
                </cosmoz-button>
                <cosmoz-button
                    icon-only
                    variant="tertiary"
                    tooltip="Bottom placement"
                    tooltip-placement="bottom"
                    aria-label="Bottom placement"
                >
                    ${c(l.close)}
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
    `,parameters:{docs:{description:{story:"Tooltip integration via the tooltip and tooltip-placement attributes. Works on icon-only and text buttons; disabled buttons do not show the tooltip."}}}},W={render:()=>r`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    `,parameters:{docs:{description:{story:"Buttons that take up 100% of their container width."}}}},G={render:()=>r`
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
    `,parameters:{docs:{description:{story:"Complete matrix showing all size and variant combinations."}}}},j={render:()=>r`
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
                        @click=${_}
                    >
                        ${c(l.edit)}
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
    `,parameters:{docs:{description:{story:"Accessible patterns: aria-label on icon-only buttons, aria-pressed for toggles, and aria-describedby for additional context."}}}},U={render:()=>r`
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
                    ${c(l.home,{slot:"prefix"})} Home
                </cosmoz-button>
                <cosmoz-button variant="secondary" href="/dashboard">
                    ${c(l.dashboard,{slot:"prefix"})} Dashboard
                </cosmoz-button>
                <cosmoz-button variant="tertiary" href="/settings">
                    ${c(l.settings,{slot:"prefix"})} Settings
                </cosmoz-button>
                <cosmoz-button
                    variant="secondary"
                    href="https://example.com"
                    target="_blank"
                    rel="noopener"
                >
                    Visit Docs ${c(l.external,{slot:"suffix"})}
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
    `,parameters:{docs:{description:{story:"Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes, including prefix and suffix icons."}}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Button'
  },
  render: renderButton
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};const vo=["Default","Variants","Sizes","WithIcons","IconOnly","PressedState","DisabledStates","Tooltips","FullWidth","SizeVariantMatrix","Accessibility","AnchorLinks"];export{j as Accessibility,U as AnchorLinks,M as Default,F as DisabledStates,W as FullWidth,O as IconOnly,H as PressedState,G as SizeVariantMatrix,R as Sizes,V as Tooltips,I as Variants,N as WithIcons,vo as __namedExportsOrder,mo as default};
