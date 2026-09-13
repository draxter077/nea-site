export default function detail(){
    let style = `
        {
            font-size:14px;
            color:var(--colorWhite);
            background:var(--colorBlack);
            width:100%;
            padding:0px 10px 10px;
        }`

    const detail = cE("div",style)
    detail.innerHTML = "Sr. Rubens Caralho é um viado"
    return(detail)
}