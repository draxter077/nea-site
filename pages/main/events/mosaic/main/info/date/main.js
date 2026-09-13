export default function date(){
    let style = `
        {
            font-size:16px;
            width:fit-content;
            color:var(--colorWhite);
            background:var(--colorBlack);
            padding:5px 10px;
            border-radius:15px 0px 0px 0px;
        }`

    const date = cE("div",style)
    date.innerHTML = "13 Set 2026"
    return(date)
}