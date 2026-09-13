export default function text(t){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            font-weight:500;
            width:80%;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}