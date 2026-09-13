export default function text(){
    let style = `
        {
            font-size:14px;
            margin:0px 0px 0px 20px;
            color:var(--colorWhite);
            font-weight:500;
        }`

    const text = cE("div",style)
    text.innerHTML = `Núcleo de Empreendedorismo e Advocacia da UFPR`
    return(text)
}