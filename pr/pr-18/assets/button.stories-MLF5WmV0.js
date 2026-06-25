import{D as J,b as a,A as u}from"./iframe-Bw8GH_bN.js";import"./preload-helper-PPVm8Dsz.js";let E,F=0;function R(t){E=t}function $(){E=null,F=0}function K(){return F++}const L=Symbol("haunted.phase"),A=Symbol("haunted.hook"),I=Symbol("haunted.update"),O=Symbol("haunted.commit"),v=Symbol("haunted.effects"),z=Symbol("haunted.layoutEffects"),H="haunted.context";class tt{update;host;virtual;[A];[v];[z];constructor(o,e){this.update=o,this.host=e,this[A]=new Map,this[v]=[],this[z]=[]}run(o){R(this);let e=o();return $(),e}_runEffects(o){let e=this[o];R(this);for(let n of e)n.call(this);$()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(z)}teardown(){this[A].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const ot=Promise.resolve().then.bind(Promise.resolve());function j(){let t=[],o;function e(){o=null;let n=t;t=[];for(var s=0,i=n.length;s<i;s++)n[s]()}return function(n){t.push(n),o==null&&(o=ot(e))}}const et=j(),W=j();class nt{renderer;host;state;[L];_updateQueued;_active;constructor(o,e){this.renderer=o,this.host=e,this.state=new tt(this.update.bind(this),e),this[L]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(et(()=>{let o=this.handlePhase(I);W(()=>{this.handlePhase(O,o),W(()=>{this.handlePhase(v)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(o,e){switch(this[L]=o,o){case O:this.commit(e),this.runEffects(z);return;case I:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(o){this.state._runEffects(o)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const N=(...t)=>{const o=new CSSStyleSheet;return o.replaceSync(t.join("")),o},st=t=>t?.map(o=>typeof o=="string"?N(o):o),rt=(t,...o)=>t.flatMap((e,n)=>[e,o[n]||""]).join(""),P=rt,at=(t="")=>t.replace(/-+([a-z])?/g,(o,e)=>e?e.toUpperCase():"");function it(t){class o extends nt{frag;renderResult;constructor(s,i,h){super(s,h||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function e(n,s,i){const h=(i||s||{}).baseElement||HTMLElement,{observedAttributes:D=[],useShadowDOM:G=!0,shadowRootInit:X={},styleSheets:Y}=i||s||{},T=st(n.styleSheets||Y);class V extends h{_scheduler;static get observedAttributes(){return n.observedAttributes||D||[]}constructor(){if(super(),G===!1)this._scheduler=new o(n,this);else{const r=this.attachShadow({mode:"open",...X});T&&(r.adoptedStyleSheets=T),this._scheduler=new o(n,r,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,d,c){if(d===c)return;let l=c===""?!0:c;Reflect.set(this,at(r),l)}}function Z(b){let r=b,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(c){d&&r===c||(d=!0,r=c,this._scheduler&&this._scheduler.update())}})}const q=new Proxy(h.prototype,{getPrototypeOf(b){return b},set(b,r,d,c){let l;return r in b?(l=Object.getOwnPropertyDescriptor(b,r),l&&l.set?(l.set.call(c,d),!0):(Reflect.set(b,r,d,c),!0)):(typeof r=="symbol"||r[0]==="_"?l={enumerable:!0,configurable:!0,writable:!0,value:d}:l=Z(d),Object.defineProperty(c,r,l),l.set&&l.set.call(c,d),!0)}});return Object.setPrototypeOf(V.prototype,q),V}return e}class m{id;state;constructor(o,e){this.id=o,this.state=e}}function ct(t,...o){let e=K(),n=E[A],s=n.get(e);return s||(s=new t(e,E,...o),n.set(e,s)),s.update(...o)}function p(t){return ct.bind(null,t)}function U(t){return p(class extends m{callback;lastValues;values;_teardown;constructor(o,e,n,s){super(o,e),t(e,this)}update(o,e){this.callback=o,this.values=e}call(){const o=!this.values||this.hasChanged();this.lastValues=this.values,o&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(o){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),o&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((o,e)=>this.lastValues[e]!==o)}})}function Q(t,o){t[v].push(o)}const lt=U(Q),dt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ut=p(class extends m{Context;value;_ranEffect;_unsubscribe;constructor(t,o,e){super(t,o),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Q(o,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const o={Context:t,callback:this._updater};dt(this.state.host).dispatchEvent(new CustomEvent(H,{detail:o,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=o;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function ht(t){return o=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(H,this)}disconnectedCallback(){this.removeEventListener(H,this)}handleEvent(n){const{detail:s}=n;s.Context===e&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=ut(e);return n(s)},{useShadowDOM:!1}),defaultValue:o};return e}}p(class extends m{value;values;constructor(t,o,e,n){super(t,o),this.value=e(),this.values=n}update(t,o){return this.hasChanged(o)&&(this.values=o,this.value=t()),this.value}hasChanged(t=[]){return t.some((o,e)=>this.values[e]!==o)}});function bt(t,o){t[z].push(o)}U(bt);p(class extends m{args;constructor(t,o,e){super(t,o),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(t){const[o]=this.args;typeof t=="function"&&(t=t(o)),!Object.is(o,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});p(class extends m{reducer;currentState;constructor(t,o,e,n,s){super(t,o),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const vt=/([A-Z])/gu;p(class extends m{property;eventName;constructor(t,o,e,n){if(super(t,o),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(vt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,o){return[this.state.host[this.property],this.updater]}updater(t){const o=this.state.host[this.property];typeof t=="function"&&(t=t(o)),!Object.is(o,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const o=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(o),o}});p(class extends m{update(){return this.state.host}});function mt({render:t}){const o=it(t),e=ht(o);return{component:o,createContext:e}}const{component:pt}=mt({render:J}),zt=N(P`
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
`),ft=P`
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
`,yt=P`
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
		${ft}
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
`,gt=["variant","size","disabled","full-width","type","value","href","target","rel","download"],xt=t=>{const o=t.hasAttribute("disabled"),e=t.getAttribute("type")||"button",n=t.getAttribute("href");lt(()=>{const i=h=>{t.hasAttribute("disabled")&&h.stopImmediatePropagation()};return t.addEventListener("click",i,{capture:!0}),()=>t.removeEventListener("click",i,{capture:!0})},[]);const s=a`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(n!=null){const i=t.getAttribute("target"),h=t.getAttribute("rel"),D=t.getAttribute("download");return a`
			<a
				href=${n}
				class="button"
				part="button"
				aria-disabled=${o?"true":u}
				target=${i??u}
				rel=${h??u}
				download=${D??u}
				>${s}</a
			>
		`}return a`
		<button type=${e} class="button" ?disabled=${o} part="button">
			${s}
		</button>
	`};customElements.define("cosmoz-button",pt(xt,{observedAttributes:gt,styleSheets:[zt,yt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const St={title:"Cosmoz Button",component:"cosmoz-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","link"],description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit","reset"],description:"The button type attribute",table:{defaultValue:{summary:"button"}}},href:{control:"text",description:"When set, renders as an anchor link instead of a button"},target:{control:"text",description:"Target attribute for the anchor (only with href)"},rel:{control:"text",description:"Rel attribute for the anchor (only with href)"},download:{control:"text",description:"Download attribute for the anchor (only with href)"},ariaLabel:{control:"text",description:"Accessible label for icon-only buttons"},label:{control:"text",description:"Button label text"}}},wt=t=>a`
    <cosmoz-button
        variant=${t.variant||"primary"}
        size=${t.size||"md"}
        type=${t.type||"button"}
        ?disabled=${t.disabled}
        ?full-width=${t.fullWidth}
        href=${t.href||u}
        target=${t.target||u}
        rel=${t.rel||u}
        download=${t.download||u}
        aria-label=${t.ariaLabel||u}
    >
        ${t.label||"Button"}
    </cosmoz-button>
`,f={args:{variant:"primary",size:"md",disabled:!1,fullWidth:!1,label:"Button"},render:wt},y={render:()=>a`
        <div class="story-row">
            <cosmoz-button variant="primary">Primary</cosmoz-button>
            <cosmoz-button variant="secondary">Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive">Destructive</cosmoz-button>
            <cosmoz-button variant="link">Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The five visual style variants available for the button."}}}},g={render:()=>a`
        <div class="story-row">
            <cosmoz-button size="sm">Small</cosmoz-button>
            <cosmoz-button size="md">Medium</cosmoz-button>
            <cosmoz-button size="lg">Large</cosmoz-button>
            <cosmoz-button size="xl">Extra Large</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"The four size variants available for the button."}}}},x={render:()=>a`
        <div class="story-row">
            <cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
            <cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
            <cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
            <cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
            <cosmoz-button variant="link" disabled>Link</cosmoz-button>
        </div>
    `,parameters:{docs:{description:{story:"All variants in their disabled state."}}}},w={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Buttons with prefix and suffix icon slots."}}}},k={render:()=>a`
        <div style="width: 300px;" class="story-stack">
            <cosmoz-button variant="primary" full-width
                >Full Width Primary</cosmoz-button
            >
            <cosmoz-button variant="secondary" full-width
                >Full Width Secondary</cosmoz-button
            >
        </div>
    `,parameters:{docs:{description:{story:"Buttons that take up 100% of their container width."}}}},B={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Complete matrix showing all size and variant combinations."}}}},S={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Demonstrates hover, active, and focus states for all variants."}}}},C={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Demonstrates accessible patterns for icon-only buttons and descriptive context."}}}},_={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes."}}}},M={render:()=>a`
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
    `,parameters:{docs:{description:{story:"Anchor links with prefix and suffix icons for navigation, external links, downloads, and link variants."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Button'
  },
  render: renderButton
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const Ct=["Default","Variants","Sizes","DisabledStates","WithIcons","FullWidth","SizeVariantMatrix","InteractiveStates","Accessibility","AnchorLinks","AnchorLinksWithIcons"];export{C as Accessibility,_ as AnchorLinks,M as AnchorLinksWithIcons,f as Default,x as DisabledStates,k as FullWidth,S as InteractiveStates,B as SizeVariantMatrix,g as Sizes,y as Variants,w as WithIcons,Ct as __namedExportsOrder,St as default};
