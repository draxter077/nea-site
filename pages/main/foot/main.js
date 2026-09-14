export default function foot(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    width:100%;
                    height:fit-content;
                    border-top:1px solid var(--colorGray);
                    margin:5% 0px 0px 0px;
                    padding:2% 5% 1%;
                }
                :responsive{
                    margin:10% 0px 0px 0px;
                }`,
            children:[
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            justify-content:space-around;
                            width:100%;
                        }`,
                    children:[
                        {
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:row;
                                    align-items:center;
                                }`,
                            children:[
                                {
                                    element:"img",
                                    style:`
                                        {
                                            height:35px;
                                        }`,
                                    src:"/assets/logo.png",
                                    alt:"Logotipo do NEA"
                                },
                                {
                                    element:"div",
                                    style:`
                                        {
                                            font-size:12px;
                                            margin:0px 0px 0px 20px;
                                            color:var(--colorWhite);
                                            font-weight:600;
                                        }`,
                                    innerHTML:`Núcleo de Empreendedorismo e Advocacia da UFPR`
                                }
                            ]
                        },
                        {
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:row;
                                    align-items:center;
                                }`,
                            children:[
                                ...[
                                    {src:"/assets/icons/instagram.png",url:instagram_url},
                                    {src:"/assets/icons/youtube.png",url:youtube_url},
                                    {src:"/assets/icons/tiktok.png",url:tiktok_url}
                                ].map((l) => (
                                    {
                                        element:"a",
                                        style:`
                                            {
                                                height:32px;
                                                width:64px;
                                                background-image:url("${l.src}");
                                                background-size:contain;
                                                background-repeat:no-repeat;
                                                background-position:center;
                                                filter:invert(1);
                                                transition:all 0.15s;
                                            }
                                            :hover{
                                                transform:scale(1.1);
                                            }`,
                                        href:l.url,
                                        target:"_blank"
                                    }
                                ))
                            ]
                        }
                    ]
                },
                {
                    element:"div",
                    style:`
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
                        }`,
                    children:[
                        ...[
                            {title:'link1',href:''},
                            {title:'link2',href:''},
                            {title:'link3',href:''}
                        ].map((l) => (
                            {
                                element:"a",
                                style:`
                                    {
                                        font-size:14px;
                                        font-weight:600;
                                        color:var(--colorWhite);
                                        border-bottom:1px solid var(--colorWhite);
                                        padding:0px 5px;
                                        cursor:pointer;
                                        transition:all 0.5s;
                                    }
                                    :hover{
                                        border-bottom:1px solid var(--colorGray);
                                    }`,
                                innerHTML:l.title,
                                href:l.href
                            }
                        ))
                    ]
                },
                {
                    element:"div",
                    style:`
                        {
                            font-size:14px;
                            font-weight:600;
                            text-align:center;
                            color:white;
                            margin:20px 0px 0px 0px;
                        }`,
                    innerHTML:`NEA UFPR © ${new Date().getFullYear()} | Todos os direitos reservados`
                }
            ]
        }
    )
}