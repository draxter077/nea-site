import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            margin:7.5% 0px 0px 0px;
        }`

    const links = cE("div",style)
    links.appendChild(link("/assets/icons/instagram.png",instagram_url,"Logotipo do Instagram"))
    links.appendChild(link("/assets/icons/youtube.png",youtube_url,"Logotipo do YouTube"))
    links.appendChild(link("/assets/icons/tiktok.png",tiktok_url,"Logotipo do TikTok"))
    return(links)
}