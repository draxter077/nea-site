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
                    background:green;
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
                                            height:52px;
                                            border:2px solid var(--colorWhite);
                                        }`,
                                    src:"/assets/",
                                    alt:"Logotipo da NomeEmpresa"
                                },
                                {
                                    element:"div",
                                    style:`
                                        {
                                            font-size:16px;
                                            margin:0px 0px 0px 20px;
                                            color:var(--colorWhite);
                                            font-weight:900;
                                        }`,
                                    innerHTML:`NomeEmpresa`
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
                                    {src:"/assets/whatsapp.png",url:whatsapp_url},
                                    {src:"/assets/instagram.png",url:instagram_url}
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
                                        font-weight:900;
                                        color:var(--colorWhite);
                                        border-bottom:1px solid var(--colorWhite);
                                        padding:0px 5px;
                                        cursor:pointer;
                                        transition:all 0.5s;
                                    }
                                    :hover{
                                        border-bottom:1px solid var(--colorBlack);
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
                            font-size:15px;
                            font-weight:900;
                            text-align:center;
                            color:white;
                            margin:20px 0px 0px 0px;
                        }`,
                    innerHTML:`00.000.000/0001-00 © ${new Date().getFullYear()} | Todos os direitos reservados`
                }
            ]
        }
    )
}