import{D as Y,b as l,A as Z}from"./iframe-i9KNfkW_.js";import"./preload-helper-PPVm8Dsz.js";let C,I=0;function T(t){C=t}function L(){C=null,I=0}function q(){return I++}const E=Symbol("haunted.phase"),_=Symbol("haunted.hook"),R=Symbol("haunted.update"),V=Symbol("haunted.commit"),b=Symbol("haunted.effects"),v=Symbol("haunted.layoutEffects"),M="haunted.context";class J{update;host;virtual;[_];[b];[v];constructor(e,o){this.update=e,this.host=o,this[_]=new Map,this[b]=[],this[v]=[]}run(e){T(this);let o=e();return L(),o}_runEffects(e){let o=this[e];T(this);for(let n of o)n.call(this);L()}runEffects(){this._runEffects(b)}runLayoutEffects(){this._runEffects(v)}teardown(){this[_].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const K=Promise.resolve().then.bind(Promise.resolve());function F(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,u=n.length;s<u;s++)n[s]()}return function(n){t.push(n),e==null&&(e=K(o))}}const tt=F(),O=F();class et{renderer;host;state;[E];_updateQueued;_active;constructor(e,o){this.renderer=e,this.host=o,this.state=new J(this.update.bind(this),o),this[E]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(tt(()=>{let e=this.handlePhase(R);O(()=>{this.handlePhase(V,e),O(()=>{this.handlePhase(b)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[E]=e,e){case V:this.commit(o),this.runEffects(v);return;case R:return this.render();case b:return this.runEffects(b)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const H=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ot=t=>t?.map(e=>typeof e=="string"?H(e):e),nt=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),P=nt,st=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function rt(t){class e extends et{frag;renderResult;constructor(s,u,p){super(s,p||u),this.frag=u}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,u){const p=(u||s||{}).baseElement||HTMLElement,{observedAttributes:$=[],useShadowDOM:N=!0,shadowRootInit:U={},styleSheets:Q}=u||s||{},D=ot(n.styleSheets||Q);class A extends p{_scheduler;static get observedAttributes(){return n.observedAttributes||$||[]}constructor(){if(super(),N===!1)this._scheduler=new e(n,this);else{const r=this.attachShadow({mode:"open",...U});D&&(r.adoptedStyleSheets=D),this._scheduler=new e(n,r,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,c,a){if(c===a)return;let i=a===""?!0:a;Reflect.set(this,st(r),i)}}function G(d){let r=d,c=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(a){c&&r===a||(c=!0,r=a,this._scheduler&&this._scheduler.update())}})}const X=new Proxy(p.prototype,{getPrototypeOf(d){return d},set(d,r,c,a){let i;return r in d?(i=Object.getOwnPropertyDescriptor(d,r),i&&i.set?(i.set.call(a,c),!0):(Reflect.set(d,r,c,a),!0)):(typeof r=="symbol"||r[0]==="_"?i={enumerable:!0,configurable:!0,writable:!0,value:c}:i=G(c),Object.defineProperty(a,r,i),i.set&&i.set.call(a,c),!0)}});return Object.setPrototypeOf(A.prototype,X),A}return o}class h{id;state;constructor(e,o){this.id=e,this.state=o}}function at(t,...e){let o=q(),n=C[_],s=n.get(o);return s||(s=new t(o,C,...e),n.set(o,s)),s.update(...e)}function m(t){return at.bind(null,t)}function W(t){return m(class extends h{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function j(t,e){t[b].push(e)}W(j);const it=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ct=m(class extends h{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,j(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};it(this.state.host).dispatchEvent(new CustomEvent(M,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function lt(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(M,this)}disconnectedCallback(){this.removeEventListener(M,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=ct(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}m(class extends h{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}});function dt(t,e){t[v].push(e)}W(dt);m(class extends h{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});m(class extends h{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const ut=/([A-Z])/gu;m(class extends h{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(ut,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});m(class extends h{update(){return this.state.host}});function bt({render:t}){const e=rt(t),o=lt(e);return{component:e,createContext:o}}const{component:ht}=bt({render:Y}),mt=H(P`
	/*
	 * 1. Prevent padding and border from affecting element width.
	 * 2. Remove default margins and padding.
	 * 3. Reset all borders.
	 */
	*,
	::after,
	::before,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove border radius.
	 * 3. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
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
`),vt=P`
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
`,pt=P`
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
			box-shadow 0.15s ease;
		width: 100%;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${vt}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
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
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
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
`,zt=["variant","size","disabled","full-width","type"],ft=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button";return l`
		<button type=${o} class="button" ?disabled=${e} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",ht(ft,{observedAttributes:zt,styleSheets:[mt,pt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const wt={title:"Cosmoz Button",component:"cosmoz-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","link"],description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit","reset"],description:"The button type attribute",table:{defaultValue:{summary:"button"}}},ariaLabel:{control:"text",description:"Accessible label for icon-only buttons"},label:{control:"text",description:"Button label text"}}},yt=t=>l`
    <cosmoz-button
        variant=${t.variant||"primary"}
        size=${t.size||"md"}
        type=${t.type||"button"}
        ?disabled=${t.disabled}
        ?full-width=${t.fullWidth}
        aria-label=${t.ariaLabel||Z}
    >
        ${t.label||"Button"}
    </cosmoz-button>
`,z={args:{variant:"primary",size:"md",disabled:!1,fullWidth:!1,label:"Button"},render:yt},f={render:()=>l`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The five visual style variants available for the button."}}}},y={render:()=>l`
        <div class="story-row">
            <cosmoz-button size="sm">Small</cosmoz-button>
            <cosmoz-button size="md">Medium</cosmoz-button>
            <cosmoz-button size="lg">Large</cosmoz-button>
            <cosmoz-button size="xl">Extra Large</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The four size variants available for the button."}}}},g={render:()=>l`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"All variants in their disabled state."}}}},x={render:()=>l`
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
    `,parameters:{docs:{description:{story:"Buttons with prefix and suffix icon slots."}}}},w={render:()=>l`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    `,parameters:{docs:{description:{story:"Buttons that take up 100% of their container width."}}}},k={render:()=>l`
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
    `,parameters:{docs:{description:{story:"Complete matrix showing all size and variant combinations."}}}},S={render:()=>l`
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
    `,parameters:{docs:{description:{story:"Demonstrates hover, active, and focus states for all variants."}}}},B={render:()=>l`
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
                    readers.
                </p>
                <div class="story-row">
                    <cosmoz-button aria-label="Add item">
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
                    <cosmoz-button variant="secondary" aria-label="Edit">
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button variant="destructive" aria-label="Delete">
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
    `,parameters:{docs:{description:{story:"Demonstrates accessible patterns for icon-only buttons and descriptive context."}}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Button'
  },
  render: renderButton
}`,...z.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
                    readers.
                </p>
                <div class="story-row">
                    <cosmoz-button aria-label="Add item">
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
                    <cosmoz-button variant="secondary" aria-label="Edit">
                        <svg
                            slot="prefix"
                            class="icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </cosmoz-button>
                    <cosmoz-button variant="destructive" aria-label="Delete">
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
}`,...B.parameters?.docs?.source}}};const kt=["Default","Variants","Sizes","DisabledStates","WithIcons","FullWidth","SizeVariantMatrix","InteractiveStates","Accessibility"];export{B as Accessibility,z as Default,g as DisabledStates,w as FullWidth,S as InteractiveStates,k as SizeVariantMatrix,y as Sizes,f as Variants,x as WithIcons,kt as __namedExportsOrder,wt as default};
