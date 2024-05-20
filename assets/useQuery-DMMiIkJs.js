import{S as M,s as O,n as L,i as w,b as F,t as k,f as B,c as A,r as T,d as D,u as j,e as _}from"./request-Bhw5I5lg.js";import{r as p}from"./index-DBpwVgrf.js";var V=class extends M{constructor(t,e){super(),this.options=e,this.#s=t,this.#i=null,this.bindMethods(),this.setOptions(e)}#s;#t=void 0;#f=void 0;#e=void 0;#n;#u;#i;#p;#c;#l;#a;#h;#r;#d=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),U(this.#t,this.options)?this.#o():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return g(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return g(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#O(),this.#g(),this.#t.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#t;if(this.options=this.#s.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.#m(),this.#t.setOptions(this.options),s._defaulted&&!O(this.options,s)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const a=this.hasListeners();a&&P(this.#t,i,this.options,s)&&this.#o(),this.updateResult(e),a&&(this.#t!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#v();const o=this.#R();a&&(this.#t!==i||this.options.enabled!==s.enabled||o!==this.#r)&&this.#y(o)}getOptimisticResult(t){const e=this.#s.getQueryCache().build(this.#s,t),s=this.createResult(e,t);return z(this,s)&&(this.#e=s,this.#u=this.options,this.#n=this.#t.state),s}getCurrentResult(){return this.#e}trackResult(t,e){const s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),e?.(i),t[i])})}),s}trackProp(t){this.#d.add(t)}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#s.defaultQueryOptions(t),s=this.#s.getQueryCache().build(this.#s,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#o({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#o(t){this.#m();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(L)),e}#v(){if(this.#O(),w||this.#e.isStale||!F(this.options.staleTime))return;const e=k(this.#e.dataUpdatedAt,this.options.staleTime)+1;this.#a=setTimeout(()=>{this.#e.isStale||this.updateResult()},e)}#R(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#y(t){this.#g(),this.#r=t,!(w||this.options.enabled===!1||!F(this.#r)||this.#r===0)&&(this.#h=setInterval(()=>{(this.options.refetchIntervalInBackground||B.isFocused())&&this.#o()},this.#r))}#b(){this.#v(),this.#y(this.#R())}#O(){this.#a&&(clearTimeout(this.#a),this.#a=void 0)}#g(){this.#h&&(clearInterval(this.#h),this.#h=void 0)}createResult(t,e){const s=this.#t,i=this.options,a=this.#e,o=this.#n,n=this.#u,l=t!==s?t.state:this.#f,{state:d}=t;let r={...d},C=!1,c;if(e._optimisticResults){const u=this.hasListeners(),b=!u&&U(t,e),x=u&&P(t,s,e,i);(b||x)&&(r={...r,...A(d.data,t.options)}),e._optimisticResults==="isRestoring"&&(r.fetchStatus="idle")}let{error:S,errorUpdatedAt:E,status:f}=r;if(e.select&&r.data!==void 0)if(a&&r.data===o?.data&&e.select===this.#p)c=this.#c;else try{this.#p=e.select,c=e.select(r.data),c=T(a?.data,c,e),this.#c=c,this.#i=null}catch(u){this.#i=u}else c=r.data;if(e.placeholderData!==void 0&&c===void 0&&f==="pending"){let u;if(a?.isPlaceholderData&&e.placeholderData===n?.placeholderData)u=a.data;else if(u=typeof e.placeholderData=="function"?e.placeholderData(this.#l?.state.data,this.#l):e.placeholderData,e.select&&u!==void 0)try{u=e.select(u),this.#i=null}catch(b){this.#i=b}u!==void 0&&(f="success",c=T(a?.data,u,e),C=!0)}this.#i&&(S=this.#i,c=this.#c,E=Date.now(),f="error");const v=r.fetchStatus==="fetching",R=f==="pending",y=f==="error",Q=R&&v,I=c!==void 0;return{status:f,fetchStatus:r.fetchStatus,isPending:R,isSuccess:f==="success",isError:y,isInitialLoading:Q,isLoading:Q,data:c,dataUpdatedAt:r.dataUpdatedAt,error:S,errorUpdatedAt:E,failureCount:r.fetchFailureCount,failureReason:r.fetchFailureReason,errorUpdateCount:r.errorUpdateCount,isFetched:r.dataUpdateCount>0||r.errorUpdateCount>0,isFetchedAfterMount:r.dataUpdateCount>l.dataUpdateCount||r.errorUpdateCount>l.errorUpdateCount,isFetching:v,isRefetching:v&&!R,isLoadingError:y&&!I,isPaused:r.fetchStatus==="paused",isPlaceholderData:C,isRefetchError:y&&I,isStale:m(t,e),refetch:this.refetch}}updateResult(t){const e=this.#e,s=this.createResult(this.#t,this.options);if(this.#n=this.#t.state,this.#u=this.options,this.#n.data!==void 0&&(this.#l=this.#t),O(s,e))return;this.#e=s;const i={},a=()=>{if(!e)return!0;const{notifyOnChangeProps:o}=this.options,n=typeof o=="function"?o():o;if(n==="all"||!n&&!this.#d.size)return!0;const h=new Set(n??this.#d);return this.options.throwOnError&&h.add("error"),Object.keys(this.#e).some(l=>{const d=l;return this.#e[d]!==e[d]&&h.has(d)})};t?.listeners!==!1&&a()&&(i.listeners=!0),this.#C({...i,...t})}#m(){const t=this.#s.getQueryCache().build(this.#s,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#f=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#C(t){D.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#e)}),this.#s.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function W(t,e){return e.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function U(t,e){return W(t,e)||t.state.data!==void 0&&g(t,e,e.refetchOnMount)}function g(t,e,s){if(e.enabled!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&m(t,e)}return!1}function P(t,e,s,i){return(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&m(t,s)}function m(t,e){return e.enabled!==!1&&t.isStaleByTime(e.staleTime)}function z(t,e){return!O(t.getCurrentResult(),e)}function H(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var N=p.createContext(H()),K=()=>p.useContext(N);function $(t,e){return typeof t=="function"?t(...e):!!t}function rt(){}var G=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},J=t=>{p.useEffect(()=>{t.clearReset()},[t])},X=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&$(s,[t.error,i]),Y=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Z=(t,e)=>t?.suspense&&e.isPending,q=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function tt(t,e,s){const i=j(s),a=_(),o=K(),n=i.defaultQueryOptions(t);n._optimisticResults=a?"isRestoring":"optimistic",Y(n),G(n,o),J(o);const[h]=p.useState(()=>new e(i,n)),l=h.getOptimisticResult(n);if(p.useSyncExternalStore(p.useCallback(d=>{const r=a?()=>{}:h.subscribe(D.batchCalls(d));return h.updateResult(),r},[h,a]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),p.useEffect(()=>{h.setOptions(n,{listeners:!1})},[n,h]),Z(n,l))throw q(n,h,o);if(X({result:l,errorResetBoundary:o,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)}))throw l.error;return n.notifyOnChangeProps?l:h.trackResult(l)}function nt(t,e){return tt(t,V,e)}export{V as Q,tt as a,rt as n,$ as s,nt as u};
