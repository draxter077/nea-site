export default function date(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            width:100%;
            text-align:right;
        }`

    const date = cE("div",style)
    date.innerHTML = "13/09/2026"
    return(date)
}