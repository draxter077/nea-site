import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const links = cE("div",style)
    links.appendChild(link("/assets/icons/instagram.png",instagram_url))
    links.appendChild(link("/assets/icons/youtube.png",youtube_url))
    links.appendChild(link("/assets/icons/tiktok.png",tiktok_url))
    return(links)
}