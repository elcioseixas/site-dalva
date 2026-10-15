import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{L as t,T as n,b as r,o as i,s as a,z as o}from"./react.DSZvp07T.mjs";import{D as s,K as c,s as l}from"./framer.QUKipN46.mjs";function u(e,t){let n=e.querySelector(`p`)||e.querySelector(`span`)||e;n.textContent=t}function d(e,t,n,r){let i=document.head.querySelector(e);i||(i=document.createElement(`meta`),i.setAttribute(t,n),document.head.appendChild(i)),i.content=r}function f(){if(!/^\/patrocinio\/borghi\/?$/.test(o.location.pathname))return;let e=`https://patrocinedalvamusical.com/patrocinio/borghi`,t=`O Fã: Renato Borghi, O Rei da Vela - Minha Estrela Dalva`,n=`Renato Borghi, um dos maiores atores vivos do Brasil, reúne 69 anos de carreira e realiza em Minha Estrela Dalva um sonho artístico de 57 anos.`,r=document.head.querySelector(`link[rel="canonical"]`);r||(r=document.createElement(`link`),r.rel=`canonical`,document.head.appendChild(r)),r.href=e,document.title=t,d(`meta[name="description"]`,`name`,`description`,n),d(`meta[property="og:title"]`,`property`,`og:title`,t),d(`meta[property="og:description"]`,`property`,`og:description`,n),d(`meta[property="og:url"]`,`property`,`og:url`,e),d(`meta[name="twitter:title"]`,`name`,`twitter:title`,t),d(`meta[name="twitter:description"]`,`name`,`twitter:description`,n)}function p(){let e=o.location.pathname.match(/^\/patrocinio\/([^/]+)\/?$/),t=e?y[e[1]]:void 0,n=[`Imagem de abertura sobre`,`Imagem de apoio sobre`,`Registro visual sobre`,`Imagem final sobre`];if(t&&Array.from(document.querySelectorAll(`main img`)).forEach((e,r)=>{e.closest(`nav, footer`)||(e.alt=(n[r]||`Imagem de apoio sobre`)+` `+t)}),/^\/espetaculo-e-equipe\/?$/.test(o.location.pathname)){let e=document.querySelector(`[data-framer-name="Team"]`),t=Array.from(e?.querySelectorAll(`img`)||[]),n=[`Renato Borghi em Minha Estrela Dalva`,`Soraya Ravenle como Dalva de Oliveira em Minha Estrela Dalva`,`Ivan Vellame em Minha Estrela Dalva`];t.slice(0,n.length).forEach((e,t)=>{e.setAttribute(`role`,`img`),e.setAttribute(`aria-label`,n[t])})}document.querySelectorAll(`img[src*="Vcm2nYUNI7UGCLxHrVV6tdOP7eY"], img[srcset*="Vcm2nYUNI7UGCLxHrVV6tdOP7eY"]`).forEach(e=>{e.alt=`Cena de Minha Estrela Dalva - O Musical`})}function m(){f(),p(),/^\/patrocinio\/[^/]+\/?$/.test(o.location.pathname)||document.querySelector(`[data-framer-name="Project details"]`)?document.documentElement.dataset.dalvaCmsPatrocinio=`true`:delete document.documentElement.dataset.dalvaCmsPatrocinio,document.querySelectorAll(`h1, h2, h3, h4, h5, h6`).forEach(e=>{!e.textContent?.trim()&&!e.getAttribute(`aria-label`)&&(e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`role`,`presentation`))});let e=/^\/contrapartidas\/[^/]+\/?$/.test(o.location.pathname),t=document.querySelector(`[data-dalva-contrapartida-h1]`),n=Array.from(document.querySelectorAll(`h1`)).some(e=>!e.hasAttribute(`data-dalva-contrapartida-h1`)&&e.getAttribute(`aria-hidden`)!==`true`&&e.getAttribute(`role`)!==`presentation`&&!!(e.textContent?.trim()||e.getAttribute(`aria-label`)?.trim()));if(!e||n)t?.remove();else if(!t){let e=document.title.match(/^\s*(.+?)\s+(?:-|\||\u2013|\u2014)\s+Minha Estrela Dalva(?:\s+-\s+O Musical)?\s*$/i),t=Array.from(document.querySelectorAll(`main h2, main h3, main h4`)).find(e=>e.getAttribute(`aria-hidden`)!==`true`&&!!e.textContent?.trim()),n=e?.[1]?.trim()||t?.textContent?.trim();if(n){let e=document.createElement(`h1`);e.dataset.dalvaContrapartidaH1=`true`,e.textContent=n,e.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;`,document.body.prepend(e)}}let r=Array.from(document.querySelectorAll(`h2`)).some(e=>e.textContent?.trim().startsWith(`Patrocine Minha Estrela Dalva e associe sua marca`)),i=document.querySelector(`[data-dalva-home-h1]`),a=Array.from(document.querySelectorAll(`h1`)).some(e=>!e.hasAttribute(`data-dalva-home-h1`)&&e.textContent?.trim()===`Minha Estrela Dalva - O Musical`);if(!(o.location.pathname===`/`&&!o.location.hostname.endsWith(`.framercanvas.com`)||r))i?.remove();else if(!a&&!i){let e=document.createElement(`h1`);e.dataset.dalvaHomeH1=`true`,e.textContent=`Minha Estrela Dalva - O Musical`,e.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;`,document.body.prepend(e)}let s=/^\/espetaculo-e-equipe\/?$/.test(o.location.pathname),c=document.querySelector(`[data-dalva-equipe-h1]`),l=Array.from(document.querySelectorAll(`h1`)).some(e=>!e.hasAttribute(`data-dalva-equipe-h1`)&&e.getAttribute(`aria-hidden`)!==`true`&&e.getAttribute(`role`)!==`presentation`&&!!(e.textContent?.trim()||e.getAttribute(`aria-label`)?.trim()));if(!s||l)c?.remove();else if(!c){let e=document.createElement(`h1`);e.dataset.dalvaEquipeH1=`true`,e.textContent=`Espetáculo e equipe`,e.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;`,document.body.prepend(e)}v.forEach(({email:e,phone:t,tel:n,name:r})=>{let i=`a[href="mailto:${e}"]`,a=Array.from(document.querySelectorAll(i)).find(e=>e.textContent?.includes(t));if(!a||a.closest(`[data-dalva-contact-split]`))return;let o=a.cloneNode(!0);o.href=n,o.removeAttribute(`target`),o.setAttribute(`aria-label`,`Ligar para ${r}: ${t}`),u(o,t);let s=a.cloneNode(!0);s.href=`mailto:${e}`,s.removeAttribute(`target`),s.setAttribute(`aria-label`,`Enviar email para ${r}: ${e}`),u(s,e);let c=document.createElement(`span`);c.dataset.dalvaContactSplit=`true`,c.style.display=`inline-flex`,c.style.flexWrap=`wrap`,c.style.alignItems=`baseline`,c.style.columnGap=`0.3em`,c.append(o,document.createTextNode(`|`),s),a.replaceWith(c)})}function h({enabled:e=!0}){return r(()=>{let t=document.getElementById(g);if(t&&t.remove(),!e)return;let n=document.createElement(`style`);n.id=g,n.textContent=_,document.head.appendChild(n),m();let r=new MutationObserver(m);return r.observe(document.body,{childList:!0,subtree:!0}),()=>{r.disconnect(),n.remove()}},[e]),i(`div`,{"aria-hidden":`true`,style:{width:1,height:1,opacity:0,overflow:`hidden`,pointerEvents:`none`}})}var g,_,v,y,b=e((()=>{t(),a(),n(),c(),g=`dalva-site-responsive-fix`,_=`
footer [data-framer-name="Bottom"] > svg:first-child,
footer [data-framer-name="Bottom"] > svg:first-child > foreignObject {
    overflow: visible !important;
}

@media (max-width: 820px) {
    html,
    body {
        max-width: 100% !important;
        overflow-x: hidden !important;
    }

    [data-framer-name="Main"] {
        overflow-x: visible !important;
    }

    :where(.framer-tu0720, .framer-ejvd99, .framer-1f0cpxx, .framer-6m14it) h4 {
        width: auto !important;
        max-width: 100% !important;
        min-width: 0 !important;
        flex: 1 1 0 !important;
        white-space: normal !important;
        line-height: 1.08 !important;
    }

    :where(.framer-tu0720, .framer-ejvd99, .framer-1f0cpxx, .framer-6m14it) div:has(> h4) {
        width: auto !important;
        max-width: 100% !important;
        min-width: 0 !important;
        flex: 1 1 0 !important;
        white-space: normal !important;
    }

    :where(
        .framer-wxfrax,
        .framer-19a29hw,
        .framer-8d7v12,
        .framer-1306f9b,
        .framer-1yhggr2,
        .framer-p88qxp,
        .framer-l49zau,
        .framer-1x9alb8,
        .framer-9v9wg1,
        .framer-u1asgu,
        .framer-1jg17ks
    ) {
        padding-left: 24px !important;
        padding-right: 24px !important;
    }

    .framer-jqfv07 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        grid-template-rows: auto !important;
        height: auto !important;
    }

    .framer-1gryi87 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        grid-template-rows: auto !important;
        height: auto !important;
    }
}

@media (max-width: 599px) {
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Main"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Container"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Info"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Content"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name^="Content "] {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        overflow: visible !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Container"] > [data-framer-name="Info"] > [data-framer-name="Content"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Content"] > [data-framer-name="Info"] {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 32px !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] {
        width: 100% !important;
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 16px !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Client"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Project"],
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Year"] {
        width: 100% !important;
        max-width: 100% !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 4px !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Client"] > *,
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Project"] > *,
    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Project details"] > [data-framer-name="Year"] > * {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        overflow-wrap: anywhere !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Title"] {
        width: 100% !important;
        max-width: 100% !important;
    }

    html[data-dalva-cms-patrocinio="true"] [data-framer-name="Title"] h1 {
        width: 100% !important;
        max-width: 100% !important;
        font-size: 40px !important;
        line-height: 1.02 !important;
        overflow-wrap: anywhere !important;
    }

    nav [data-framer-name="Logo"] {
        width: auto !important;
        max-width: calc(100% - 24px) !important;
        overflow: hidden !important;
    }

    nav [data-framer-name="Logo"] p,
    nav [data-framer-name="Logo"] a {
        width: auto !important;
        max-width: 100% !important;
        font-size: 18px !important;
        line-height: 1.1 !important;
        white-space: nowrap !important;
    }

    footer[data-framer-name="Desktop"] {
        display: none !important;
    }

    footer[data-framer-name="Phone"] {
        display: flex !important;
    }

    footer [data-framer-name="Items"] > [data-framer-name="Top"] {
        flex-direction: column !important;
        gap: 24px !important;
        height: auto !important;
        overflow: visible !important;
    }

    footer [data-framer-name="Items"] > [data-framer-name="Top"] > * {
        width: 100% !important;
        max-width: 100% !important;
    }

    footer [data-framer-name="Items"] {
        overflow: visible !important;
        height: auto !important;
    }

    footer [data-framer-name="Bottom"] {
        min-height: 156px !important;
        padding-bottom: 72px !important;
        box-sizing: border-box !important;
        overflow: visible !important;
    }

    footer [data-framer-name="Bottom"] > svg:first-child {
        width: 100% !important;
        max-width: 100% !important;
        overflow: visible !important;
    }

    footer [data-framer-name="Bottom"] > svg:first-child h2,
    footer [data-framer-name="Bottom"] > svg:first-child h2 a {
        font-size: 52px !important;
        line-height: 1 !important;
        white-space: nowrap !important;
        transform: none !important;
        transform-origin: left center !important;
    }

    :where(.framer-tu0720, .framer-ejvd99, .framer-1f0cpxx, .framer-6m14it) h4 {
        font-size: 28px !important;
    }

    :where(.framer-ugibcg, .framer-1no0cds, .framer-ikld1c, .framer-pyd6aw) {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        overflow: visible !important;
    }

    :where(.framer-pi8agd, .framer-c5yfsu) {
        flex-direction: column !important;
        gap: 8px !important;
        height: auto !important;
        overflow: visible !important;
    }

    :where(.framer-pi8agd, .framer-c5yfsu) > * {
        width: 100% !important;
        max-width: 100% !important;
    }

    :where(.framer-pi8agd, .framer-c5yfsu) h2 {
        font-size: 32px !important;
        line-height: 1.05 !important;
        white-space: normal !important;
    }

    :where(.framer-ancgnp, .framer-1ojdahu) {
        overflow: visible !important;
        height: auto !important;
    }

    [data-framer-name="Heading"] {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 8px !important;
        height: auto !important;
        overflow: visible !important;
    }

    [data-framer-name="Heading"] > * {
        width: 100% !important;
        max-width: 100% !important;
    }

    [data-framer-name="Heading"] h2 {
        font-size: 32px !important;
        line-height: 1.05 !important;
        white-space: normal !important;
    }

    .framer-m0wicn,
    .framer-1cbv964 {
        height: auto !important;
        overflow: visible !important;
    }

    .framer-1cbv964 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        grid-template-rows: auto !important;
    }

    .framer-6fbhpj,
    .framer-1md02c6,
    .framer-dm9wtg {
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
    }

    .framer-dm9wtg > div,
    .framer-dm9wtg > div > div {
        grid-template-columns: minmax(0, 1fr) !important;
        grid-template-rows: auto !important;
        height: auto !important;
        overflow: visible !important;
    }

    .framer-5oq8ow {
        height: 70svh !important;
        min-height: 520px !important;
        padding: 112px 16px 40px !important;
    }

    .framer-kr4qhk,
    .framer-kr4qhk p {
        width: 100% !important;
        max-width: 100% !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    :where(
        .framer-wxfrax,
        .framer-19a29hw,
        .framer-8d7v12,
        .framer-1306f9b,
        .framer-1yhggr2,
        .framer-p88qxp,
        .framer-l49zau,
        .framer-1x9alb8,
        .framer-9v9wg1,
        .framer-u1asgu,
        .framer-1jg17ks
    ) {
        padding: 64px 16px !important;
        overflow: visible !important;
        height: auto !important;
    }

    .framer-AFnYG .framer-jqSZl h2 {
        font-size: 40px !important;
        line-height: 1.05 !important;
    }

    .framer-AFnYG .framer-jqSZl h3 {
        font-size: 34px !important;
        line-height: 1.05 !important;
    }

    .framer-AFnYG .framer-jqSZl h4 {
        font-size: 30px !important;
        line-height: 1.08 !important;
    }

    :where(.framer-7fdafz, .framer-jqfv07, .framer-1gryi87, .framer-j1bv7, .framer-1najzok) {
        grid-template-columns: minmax(0, 1fr) !important;
        grid-template-rows: auto !important;
        height: auto !important;
        overflow: visible !important;
    }

    body h1 {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    body :where(div, section):has(> h1) {
        max-width: 100% !important;
        min-width: 0 !important;
    }

    main :where(h1, h2, h3, h4) {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    main h4 {
        font-size: clamp(26px, 8.5vw, 34px) !important;
        line-height: 1.08 !important;
    }

    main h2 {
        font-size: clamp(32px, 9vw, 40px) !important;
        line-height: 1.05 !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    main h2 :where(.word, .char) {
        display: inline !important;
        width: auto !important;
        max-width: 100% !important;
        white-space: normal !important;
    }

    .framer-jevijp {
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: flex-end !important;
        gap: 8px !important;
        height: auto !important;
        margin-bottom: 72px !important;
        overflow: visible !important;
    }

    .framer-jevijp h4 {
        font-size: clamp(20px, 5.8vw, 24px) !important;
        line-height: 1.12 !important;
        max-width: 100% !important;
    }

    .framer-70hgk2,
    .framer-1qyq1h5 {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
    }

    main h4 :where(.word, .char) {
        display: inline !important;
        width: auto !important;
        max-width: 100% !important;
        white-space: normal !important;
    }

    [data-framer-name="Impacto"] .framer-1ljbwrx-container,
    [data-framer-name="Impacto"] [data-framer-name="Variant 1"] {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
    }

    [data-framer-name="Impacto"] [data-framer-name="Variant 1"] p {
        width: 100% !important;
        max-width: 100% !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    :where(.framer-6p4cdr-container, .framer-1u1x1zv-container) {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
    }

    :where(.framer-6p4cdr-container, .framer-1u1x1zv-container) > a,
    :where(.framer-6p4cdr-container, .framer-1u1x1zv-container) p {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        white-space: normal !important;
        overflow-wrap: anywhere !important;
    }

    nav a[href="./"] {
        display: block !important;
        width: auto !important;
        max-width: calc(100vw - 32px) !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
    }
}
`,v=[{email:`lukas.cordeiro2025@gmail.com`,phone:`(98) 99112-0205`,tel:`tel:+5598991120205`,name:`Lukas Cordeiro`},{email:`elcio.seixas@gmail.com`,phone:`(11) 99101-9241`,tel:`tel:+5511991019241`,name:`Elcio Nogueira Seixas`}],y={"renato-dalva":`Renato Borghi e sua relação artística com Dalva de Oliveira`,dalva:`Dalva de Oliveira`,soraya:`Soraya Ravenle como Dalva de Oliveira`,borghi:`Renato Borghi`,marilia1987:`a montagem A Estrela Dalva, de 1987`,sesi:`a temporada de Minha Estrela Dalva no SESI-SP`,"impacto-social":`o impacto social e a acessibilidade de Minha Estrela Dalva`,temporadas:`as temporadas de Minha Estrela Dalva`},s(h,{enabled:{type:l.Boolean,title:`Ativo`,defaultValue:!0,enabledTitle:`Sim`,disabledTitle:`Nao`}})}));export{b as n,h as t};
//# sourceMappingURL=SiteResponsiveFix.DYCeZ176.mjs.map