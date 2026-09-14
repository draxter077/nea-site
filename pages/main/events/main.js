export default function events(){
    return(
        {
            id:'events',
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:90%;
                    margin:5% 0px 0px 0px;
                }
                :responsive{
                    width:95%;
                }`,
            children:[
                {
                    element:"div",
                    style:`
                        {
                            font-size:31px;
                            font-weight:500;
                            color:var(--colorBlack);
                            background:var(--colorWhite);
                            margin:0px 0px 1% 0px;
                            padding:5px 10px;
                        }
                        :responsive{
                            margin:0px 0px 5% 0px;
                        }`,
                    innerHTML:"Próximos eventos"
                    
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            justify-content:center;
                            height:50svh;
                            width:100%;
                        }
                        :responsive{
                            flex-direction:column;
                            height:fit-content;
                        }`,
                    children:[
                        {
                            element:"a",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:column;
                                    justify-content:flex-end;
                                    height:100%;
                                    aspect-ratio:16/9;
                                    background-image:url("https://img.magnific.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80");
                                    background-size:contain;
                                    border-radius:15px;
                                    box-shadow:0px 0px 2px 0px var(--colorWhite);
                                    cursor:pointer;
                                    overflow:hidden;
                                    transition:all 0.25s;
                                }
                                :responsive{
                                    width:100%;
                                    aspect-ratio:1;
                                    background-size:cover;
                                    background-position:center;
                                    margin:0px 0px 2.5% 0px;
                                }
                                :hover{
                                    transform:scale(1.025);
                                }`,
                            children:[
                                {
                                    element:"div",
                                    style:`
                                        {
                                            display:flex;
                                            flex-direction:column;
                                            align-items:flex-end;
                                            width:100%;
                                        }`,
                                    children:[
                                        {
                                            element:"div",
                                            style:`
                                                {
                                                    font-size:16px;
                                                    width:fit-content;
                                                    color:var(--colorWhite);
                                                    background:var(--colorBlack);
                                                    padding:5px 10px;
                                                    border-radius:15px 0px 0px 0px;
                                                }`,
                                            innerHTML:"13 Set 2026"
                                        },
                                        {
                                            element:"div",
                                            style:`
                                                {
                                                    font-size:24px;
                                                    font-weight:500;
                                                    color:var(--colorWhite);
                                                    background:var(--colorBlack);
                                                    width:100%;
                                                    padding:5px 10px 0px;
                                                }`,
                                            innerHTML:"Palestra com Sr. Rubens Carvalho"
                                        },
                                        {
                                            element:"div",
                                            style:`
                                                {
                                                    font-size:14px;
                                                    color:var(--colorWhite);
                                                    background:var(--colorBlack);
                                                    width:100%;
                                                    padding:0px 10px 10px;
                                                }`,
                                            innerHTML:"Sr. Rubens Carvalho é advogado"
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:column;
                                    justify-content:space-between;
                                    height:100%;
                                    margin:0px 0px 0px 2.5%;
                                }
                                :responsive{
                                    height:fit-content;
                                    width:100%;
                                    margin:0px;
                                }`,
                            children:[
                                ...[
                                    0,0,0,0
                                ].map((i) => (
                                    {
                                        element:"a",
                                        style:`
                                            {
                                                display:flex;
                                                flex-direction:row;
                                                align-items:center;
                                                height:23%;
                                                width:100%;
                                                box-shadow:0px 0px 2px 0px var(--colorWhite);
                                                border-radius:10px;
                                                cursor:pointer;
                                                overflow:hidden;
                                                transition:all 0.25s;
                                            }
                                            :responsive{
                                                height:fit-content;
                                                margin:5px 0px;
                                            }
                                            :hover{
                                                transform:scale(1.025);
                                            }`,
                                        children:[
                                            {
                                                element:"img",
                                                style:`
                                                    {
                                                        height:100%;
                                                        aspect-ratio:1;
                                                    }
                                                    :responsive{
                                                        width:25vw;
                                                    }`,
                                                src:"https://img.magnific.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80",
                                                alt:"Foto de um garoto"
                                            },
                                            {
                                                element:"div",
                                                style:`
                                                    {
                                                        display:flex;
                                                        flex-direction:column;
                                                        align-items:right;
                                                        width:100%;
                                                        padding:5px 10px;
                                                    }`,
                                                children:[
                                                    {
                                                        element:"div",
                                                        style:`
                                                            {
                                                                font-size:15px;
                                                                color:var(--colorWhite);
                                                                width:100%;
                                                                text-align:right;
                                                            }`,
                                                        innerHTML:"13/09/2026"
                                                    },
                                                    {
                                                        element:"div",
                                                        style:`
                                                            {
                                                                font-size:18px;
                                                                font-weight:500;
                                                                color:var(--colorWhite);
                                                                width:100%;
                                                            }`,
                                                        innerHTML:"Palestra com Sr. Rubens Carvalho"
                                                    },
                                                    {
                                                        element:"div",
                                                        style:`
                                                            {
                                                                font-size:13px;
                                                                color:var(--colorWhite);
                                                                width:100%;
                                                            }`,
                                                        innerHTML:"Sr. Rubens Carvalho é advogado"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ))
                            ]
                        }
                    ]
                }
            ]
        }
    )
}