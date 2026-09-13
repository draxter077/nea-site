export default function title(){
    let style = `
        {
            font-size:24px;
            font-weight:500;
            color:var(--colorWhite);
            background:var(--colorBlack);
            width:100%;
            padding:5px 10px 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Palestra com Sr. Rubens Caralho"
    return(title)
}