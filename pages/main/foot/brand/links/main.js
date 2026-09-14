import link from "./link/main.js"

export default function links(){
    return(
        {
            type:"div",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                }`,
            children:[
                link("/assets/icons/instagram.png",instagram_url),
                link("/assets/icons/youtube.png",youtube_url),
                link("/assets/icons/tiktok.png",tiktok_url)
            ]
        }
    )
}