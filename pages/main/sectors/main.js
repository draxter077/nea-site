export default function sectors(){
    let style = `
        {
            width:100%;
            height:50svh;
            background:yellow;
            margin:2.5% 0px 0px 0px;
        }`

    const sectors = cE("div",style)
    sectors.id = "sectors"
    sectors.innerHTML = "sectors"
    return(sectors)
}