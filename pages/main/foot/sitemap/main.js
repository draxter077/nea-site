import link from "./link/main.js"

export default function sitemap(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            margin:20px 0px 0px 0px;
        }
        :responsive{
            margin:5% 0px 0px 0px;
        }`

    const sitemap = cE("div",style)
    sitemap.appendChild(link("", "Setores"))
    sitemap.appendChild(link("", "Eventos"))
    sitemap.appendChild(link("", "Newsletter"))
    sitemap.appendChild(link("", "Apoiadores"))
    return(sitemap)
}