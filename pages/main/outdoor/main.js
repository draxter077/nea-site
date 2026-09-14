import link from "./link/main.js"

export default function outdoor(){
    return(
        {
            type:"div",
            style:`
                {

                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    width:90%;
                    text-align:center;
                    margin:7.5% 0px 0px;
                }
                :responsive{
                    width:95%;
                    padding:20% 0px;
                }`,
            children:[
                {
                    type:"div",
                    style:`
                        {
                            font-size:43px;
                            font-weight:600;
                            text-shadow:0px 0px 3px var(--colorWhite);
                            color:var(--colorWhite);
                        }`,
                    innerHTML:"Somos curiosidade, inovação<br>e experiência"
                },
                {
                    type:"div",
                    style:`
                        {
                            font-size:21px;
                            color:var(--colorWhite);
                            margin:2.5% 0px 0px 0px;
                        }
                        :responsive{
                            margin:5% 0px 0px 0px;
                        }`,
                    innerHTML:"Unimos a inovação de quem está começando com a experiência de quem já faz"
                },
                {
                    type:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            margin:5% 0px 0px 0px;
                        }
                        :responsive{
                            margin:7.5% 0px 0px 0px;
                        }`,
                    children:[
                        link("/assets/icons/instagram.png",instagram_url,"Logotipo do Instagram"),
                        link("/assets/icons/youtube.png",youtube_url,"Logotipo do YouTube"),
                        link("/assets/icons/tiktok.png",tiktok_url,"Logotipo do TikTok")
                    ]
                    
                }
            ]
        }
    )
}