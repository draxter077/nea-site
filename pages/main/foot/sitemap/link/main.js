export default function link(href, t){
    let style = `
        {
            font-size:14px;
            font-weight:500;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
            padding:0px 5px;
            transition:all 0.5s;
        }
        :hover{
            border-bottom:1px solid var(--colorBlack);
        }`

    const link = cE("a",style)
    link.innerHTML = t
    link.href = href
    return(link)
}