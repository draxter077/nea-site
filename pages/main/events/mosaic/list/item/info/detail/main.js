export default function detail(){
    let style = `
        {
            font-size:13px;
            color:var(--colorWhite);
            width:100%;
        }`

    const detail = cE("div",style)
    detail.innerHTML = "Sr. Rubens Caralho é um viado"
    return(detail)
}