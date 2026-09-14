import main from "./pages/main/main.js"
import admin from "./pages/admin/main.js"

export function randomName(names){
    const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ]
    let name = ""
    while(name == ""){
        for(let k = 0; k < 5; k++){
            let n = Math.floor((chars.length)*Math.random())
            name += chars[n]
        }
        for(let l = 0; l < names.length; l++){
            if(name == names[l]){
                name = ""
                break
            }
        }
    }
    return(name)
}

window.randomName = randomName

// Cria a style tag e a popula com reset.css
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
const resetCss = `
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big, 
    cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,
    dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article, 
    aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,
    time,mark,audio,video,button,input,textarea{
        display:block;
        background:none;
        margin:0px;
        padding:0px;
        border:none;
        font-size:100%;
        font:inherit;
        vertical-align:baseline;
        text-decoration:none;
        font-weight:none;
        outline:none;
        -webkit-tap-highlight-color:transparent;
        box-sizing:border-box;
    }
    html {
        scroll-behavior:smooth;
    }
    span{
        display:inline-block;
    }
    input:focus,button:focus{
        outline:none;
        border:auto;
    }
    ol,ul{
        list-style:none;
    }
    blockquote,q{
        quotes:none;
    }
    blockquote:before,blockquote:after,q:before,q:after{
        content:'';
        content:none;
    }
    table{
        border-collapse:collapse;
        border-spacing:0;
    }
    :root{
    	--colorWhite:rgb(245,245,245);
    	--colorBlack:rgb(0,0,0);
        --colorGreen:rgb(125,150,125);
        --colorBluePh:rgb(56,182,255);
        --colorGreenWhatsApp:rgb(37,211,102);
    }
    @font-face{
        font-family:"Garet";
        font-display:swap;
        src:url("https://www.ph.net.br/assets/font/Garet-Book.otf");
    }
    @font-face{
        font-family:"Montserrat";
        font-display:swap;
        src:url("/assets/font/Montserrat.ttf");
    }
    body{
    	box-sizing:border-box;
    	font-family:"Montserrat";
    	background:var(--colorBlack);
    	cursor:default;
	    user-select:none;
        line-height:1.3;
        width:100%;
    }
    ::-webkit-scrollbar{
    	height:3px;
        width:3px;
    	background:none;
    }
    ::-webkit-scrollbar-track{
        background:none;
    	margin:0px;
    }
    ::-webkit-scrollbar-thumb{
        background:var(--colorBlack);
        border-radius:20px;
    }
    ::-webkit-scrollbar-button{
        height:0px;
	    width:0px;
    	background:none;
        padding:0px;
        margin:0px;
    }`
document.getElementsByTagName("style")[1].innerHTML = resetCss.replaceAll("\n","").replaceAll("\t","").replaceAll(" ","")

// Constrói a página a partir do JSON dela
window.cP = function cP(pageJSON){
    function cE(objectJSON, id){
        function addClass(stl){
            let classNames = "", types = 0, stls = []
            stl = stl.replaceAll("\n","").replaceAll("\t","").replaceAll("  ","").replaceAll(", ",",") // Formata o stl recebido
            // Encontra os tipos (geral, :responsive, :hover...) encontrados no stl
            types = stl.split("}").length - 1
            // Separa os parâmetros do estilo principal
            stls = stl.replaceAll("{","").split("}")[0].split(";") // "atr:value"... o último elemento é "" devido ao split
            // Organiza os estilos já salvos na tag style
            let stylesInTag = document.getElementsByTagName("style")[1].innerHTML
            stylesInTag = stylesInTag.split("}") // .name{atr:value além do resetCss
            // Separa os nomes dos pares de atributos
            let classNamesInTag = []
            let classAtrsInTag = []
            for(let i = 0; i < stylesInTag.length; i++){
                try{
                    classAtrsInTag.push(stylesInTag[i].split("{")[1].replaceAll(";",""))
                    classNamesInTag.push(stylesInTag[i].split("{")[0].replaceAll(".",""))
                }catch{}
            }

            // Compara o geral, -1 para não pegar o último elemento vazio
            for(let i = 0; i < stls.length - 1; i++){
                let boo = classAtrsInTag.indexOf(stls[i])
                if(boo != -1){classNames += ` ${classNamesInTag[boo]}`}
                else{
                    let cn = randomName(classNamesInTag)
                    document.getElementsByTagName("style")[1].innerHTML += `.${cn}{${stls[i]};}`
                    classNames += ` ${cn}`
                }
            }
            // Compara os específicos, se existentes
            if(types > 1){
                for(let i = 1; i < stl.split("}").length - 1; i++){
                    let spec = stl.split("}")[i]
                    // Encontra o tipo do específico e busca por similares
                    if(spec.split(" ")[0] == "@keyframes"){
                        document.getElementsByTagName("style")[1].innerHTML += spec.replaceAll("[","{").replaceAll("]","}") + "}"
                    }
                    else if(spec.split("{")[0] == ":responsive"){ // CONTINUAR DESENVOLVENDO
                        let stlsR = spec.split("{")[1].split(";")
                        for(let k = 0; k < stlsR.length - 1; k++){
                            let cn = randomName(classNamesInTag)
                            document.getElementsByTagName("style")[1].innerHTML += `@media screen and (max-width:1000px){.${cn}{${stlsR[k]};}}`
                            classNames += ` ${cn}`
                        }
                    }
                    else if(spec.split("{")[0].split("::").length > 0){ // CONTINUAR DESENVOLVENDO
                        let cn = randomName(classNamesInTag)
                        document.getElementsByTagName("style")[1].innerHTML += `.${cn}${spec}}`
                        classNames += ` ${cn}`
                    }
                    else if(spec.split("{")[0].split(":").length > 1){ // CONTINUAR DESENVOLVENDO
                        let xPseudo = spec.split("{")[0].split(":")[1]
                        let stlsX = spec.split("{")[1].split(";")
                        for(let k = 0; k < stlsX.length - 1; k++){
                            let cn = randomName(classNamesInTag)
                            document.getElementsByTagName("style")[1].innerHTML += `.${cn}:${xPseudo}{${stlsX[k]};}`
                            classNames += ` ${cn}`
                        }
                    }
                }
            }
            return(classNames)
        }

        let element = document.createElement(objectJSON.element)
        if(objectJSON.style) element.className = addClass(objectJSON.style)

        if(objectJSON.id) element.id = objectJSON.id
        else element.id = id
        
        if(objectJSON.innerHTML) element.innerHTML = objectJSON.innerHTML

        if(objectJSON.src) element.src = objectJSON.src
        if(objectJSON.alt) element.alt = objectJSON.alt

        if(objectJSON.href) element.href = objectJSON.href
        if(objectJSON.target) element.target = objectJSON.target

        if(objectJSON.placeholder) element.placeholder = objectJSON.placeholder
        if(objectJSON.type) element.type = objectJSON.type
        
        if(objectJSON.events){
            for(let i = 0; i < objectJSON.events.length; i++){
                let ev = objectJSON.events[i]
                if(ev.args) if(ev.args.element) ev.args.element = element
                if(ev.target == "window") window.addEventListener(ev.type, async () => await ev.function(ev.args) || await ev.function())
                else element.addEventListener(ev.type, async () => await ev.function(ev.args) || await ev.function())
            }
        }
        return(element)
    }

    let pageObject = cE(pageJSON,`0`)

    for(let a = 0; a < pageJSON.children.length; a++){
        let c0JSON = pageJSON.children[a]
        let c0Object = cE(c0JSON,`0 ${a}`)
        if(c0JSON.children){
            for(let b = 0; b < c0JSON.children.length; b++){
                let c1JSON = c0JSON.children[b]
                let c1Object = cE(c1JSON,`0 ${a} ${b}`)
                if(c1JSON.children){
                    for(let c = 0; c < c1JSON.children.length; c++){
                        let c2JSON = c1JSON.children[c]
                        let c2Object = cE(c2JSON,`0 ${a} ${b} ${c}`)
                        if(c2JSON.children){
                            for(let d = 0; d < c2JSON.children.length; d++){
                                let c3JSON = c2JSON.children[d]
                                let c3Object = cE(c3JSON,`0 ${a} ${b} ${c} ${d}`)
                                if(c3JSON.children){
                                    for(let e = 0; e < c3JSON.children.length; e++){
                                        let c4JSON = c3JSON.children[e]
                                        let c4Object = cE(c4JSON,`0 ${a} ${b} ${c} ${d} ${e}`)
                                        if(c4JSON.children){
                                            for(let f = 0; f < c4JSON.children.length; f++){
                                                let c5JSON = c4JSON.children[f]
                                                let c5Object = cE(c5JSON,`0 ${a} ${b} ${c} ${d} ${e} ${f}`)
                                                if(c5JSON.children){
                                                    for(let g = 0; g < c5JSON.children.length; g++){
                                                        let c6JSON = c5JSON.children[g]
                                                        let c6Object = cE(c6JSON,`0 ${a} ${b} ${c} ${d} ${e} ${f} ${g}`)
                                                        if(c6JSON.children){
                                                            for(let h = 0; h < c6JSON.children.length; h++){
                                                                let c7JSON = c6JSON.children[h]
                                                                let c7Object = cE(c7JSON,`0 ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h}`)
                                                                if(c7JSON.children){
                                                                    for(let i = 0; i < c7JSON.children.length; i++){
                                                                        let c8JSON = c7JSON.children[i]
                                                                        let c8Object = cE(c8JSON,`0 ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i}`)
                                                                        if(c8JSON.children){
                                                                            for(let j = 0; i < c8JSON.children.length; j++){
                                                                                let c9JSON = c8JSON.children[j]
                                                                                let c9Object = cE(c9JSON,`0 ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j}`)
                                                                                c8Object.appendChild(c9Object)
                                                                            }
                                                                        }
                                                                        c7Object.appendChild(c8Object)
                                                                    }
                                                                }
                                                                c6Object.appendChild(c7Object)
                                                            }
                                                        }
                                                        c5Object.appendChild(c6Object)
                                                    }
                                                }
                                                c4Object.appendChild(c5Object)
                                            }
                                        }
                                        c3Object.appendChild(c4Object)
                                    }
                                }
                                c2Object.appendChild(c3Object)
                            }
                        }
                        c1Object.appendChild(c2Object)
                    }
                }
                c0Object.appendChild(c1Object)
            }
        }
        pageObject.appendChild(c0Object)
    }
    return(pageObject)
}

window.construct = async function construct(d){
    const root = document.getElementById("root")
    if(d == undefined){
        root.innerHTML = ""
        if(window.location.href.split("br/")[1]){
            let path = window.location.href.split("br/")[1]
            if(path == "admin"){root.appendChild(cP(admin()))}
            else{root.appendChild(cP(main()))}
        }
        else{root.appendChild(cP(main()))}
    }
    else{
        root.style.opacity = 0
        await new Promise(r => setTimeout(r,600))
        root.innerHTML = ""
        if(d.page == "admin"){root.appendChild(cP(admin(d.data)))}
        await new Promise(r => setTimeout(r,100))
        root.style.opacity = 1
    }
}

window.api_url = "https://ace-chimp-merry.ngrok-free.app/"
window.instagram_url = "https://www.instagram.com/"
window.youtube_url = "https://www.youtube.com/"
window.tiktok_url = "https://www.tiktok.com/"
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"

construct()

let l = document.getElementById("loading")
l.style.opacity = 0
await new Promise(resolve => setTimeout(resolve, 1100))
document.body.removeChild(l)
