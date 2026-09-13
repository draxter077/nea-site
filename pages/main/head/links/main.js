import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-end;
            width:50%;
        }
        :responsive{
            justify-content:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div",style)
    links.appendChild(link("Eventos", "events"))
    links.appendChild(link("Newsletter", "newsletter"))
    links.appendChild(link("Setores", "sectors"))
    links.appendChild(link("Apoiadores", "helpers"))
    return(links)
}