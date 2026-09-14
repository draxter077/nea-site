export default function events(){
    return(
        {
            id:'events',
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:100%;
                    margin:5% 0px 0px 0px;
                    padding:1% 5%;
                    background:var(--colorGreen);
                    box-shadow:0px 0px 2.5px 5px var(--colorGreen);
                }`,
            children:[
                {
                    element:"div",
                    style:`
                        {
                            font-size:31px;
                            font-weight:500;
                            color:var(--colorBlack);
                            margin:0px 0px 1% 0px;
                            padding:0px 5px;
                            border-bottom:2px solid var(--colorBlack);
                        }
                        :responsive{
                            margin:0px 0px 5% 0px;
                        }`,
                    innerHTML:"Nossos eventos"
                    
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
                                    align-items:flex-end;
                                    height:100%;
                                    aspect-ratio:16/9;
                                    background:var(--colorBlack) url("https://media.licdn.com/dms/image/v2/C4D03AQGPRKS5hdmJRA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659711073845?e=2147483647&v=beta&t=UQoFXWpvS0cLsGCiyGcTrAJZl8J7g7_BEqyScLFqbfM") center / contain no-repeat;
                                    border-radius:5px;
                                    box-shadow:0px 0px 2px 0px var(--colorBlack);
                                    overflow:hidden;
                                }
                                :responsive{
                                    width:100%;
                                    aspect-ratio:1;
                                    background-size:cover;
                                    margin:0px 0px 2.5% 0px;
                                }`,
                            children:[
                                {
                                    element:"div",
                                    style:`
                                        {
                                            font-size:16px;
                                            font-weight:500;
                                            width:fit-content;
                                            color:var(--colorBlack);
                                            background:var(--colorGreen);
                                            padding:5px 10px;
                                            border-radius:5px 0px 0px 0px;
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
                                            border-top:1px solid var(--colorGreen);
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
                                                box-shadow:0px 0px 2px 0px var(--colorBlack);
                                                background:var(--colorBlack);
                                                border-radius:5px;
                                                overflow:hidden;
                                            }
                                            :responsive{
                                                height:fit-content;
                                                margin:5px 0px;
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
                                                src:"https://media.licdn.com/dms/image/v2/C4D03AQGPRKS5hdmJRA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659711073845?e=2147483647&v=beta&t=UQoFXWpvS0cLsGCiyGcTrAJZl8J7g7_BEqyScLFqbfM",
                                                alt:"Foto de um garoto"
                                            },
                                            {
                                                element:"div",
                                                style:`
                                                    {
                                                        display:flex;
                                                        flex-direction:column;
                                                        width:100%;
                                                        height:100%;
                                                        padding:5px 10px;
                                                    }`,
                                                children:[
                                                    {
                                                        element:"div",
                                                        style:`
                                                            {
                                                                font-size:15px;
                                                                font-weight:500;
                                                                color:var(--colorGreen);
                                                                border-bottom:1px solid var(--colorGreen);
                                                                width:100%;
                                                                padding:5px 0px;
                                                                text-align:right;
                                                            }`,
                                                        innerHTML:"13/09/2026"
                                                    },
                                                    {
                                                        element:"div",
                                                        style:`
                                                            {
                                                                display:flex;
                                                                flex-direction:column;
                                                                justify-content:center;
                                                                width:100%;
                                                                height:100%;
                                                            }`,
                                                        children:[
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