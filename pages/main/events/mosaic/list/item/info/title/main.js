export default function title(){
    let style = `
        {
            font-size:18px;
            font-weight:500;
            color:var(--colorWhite);
            width:100%;
        }`

    const title = cE("div",style)
    title.innerHTML = "Palestra com Sr. Rubens Caralho"
    return(title)
}