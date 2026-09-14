export default function outdoor(){
    return(
        {
            element:"div",
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
                    element:"div",
                    style:`
                        {
                            font-size:43px;
                            font-weight:600;
                            text-shadow:0px 0px 3px var(--colorGreen);
                            color:var(--colorWhite);
                        }`,
                    innerHTML:"Somos curiosidade, inovação<br>e experiência"
                },
                {
                    element:"div",
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
                    element:"div",
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
                        ...[
                            {src:"/assets/icons/instagram.png",href:instagram_url,alt:"Logotipo do Instagram"},
                            {src:"/assets/icons/youtube.png",href:youtube_url,alt:"Logotipo do YouTube"},
                            {src:"/assets/icons/tiktok.png",href:tiktok_url,alt:"Logotipo do TikTok"}
                        ].map((l) => (
                            {
                                element:"a",
                                style:`
                                    {
                                        height:70px;
                                        margin:0px 50px;
                                        padding:15px;
                                        border-radius:50%;
                                        cursor:pointer;
                                        background:var(--colorGreen);
                                        transition:all 0.25s;
                                    }
                                    :hover{
                                        transform:scale(1.1);
                                    }`,
                                target:"_blank",
                                href:l.href,
                                alt:l.alt,
                                children:[
                                    {
                                        element:"img",
                                        style:`
                                            {
                                                height:100%;
                                            }`,
                                        src:l.src,
                                        alt:l.alt
                                    }
                                ]
                            }
                        ))
                    ]
                    
                }
            ]
        }
    )
}