export default function head(){
    return(
        {
            element:"div",
            style:`
                {
                    position:sticky;
                    top:0%;
                    z-index:5;
                    
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-around;
                    width:100%;
                    padding:10px 15px;
                    background:var(--colorBlack);
                    box-shadow:0px 0px 3px 0px var(--colorBlack);
                }
                :responsive{
                    flex-direction:column;
                    padding:10px 15px 15px;
                }`,
            children:[
                {
                    element:"img",
                    style:`
                        {
                            height:50px;
                        }
                        :responsive{
                            height:75px;
                            margin:2.5% 0px;
                        }`,
                    src:"/assets/logo.png",
                    alt:"Logotipo do NEA UFPR"
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            justify-content:flex-end;
                            width:50%;
                        }
                        :responsive{
                            justify-content:center;
                            width:100%;
                            margin:10px 0px 0px 0px;
                        }`,
                    children:[
                        ...[
                            {title:'Eventos',href:'events'},
                            {title:'Newsletter',href:'newsletter'},
                            {title:'Setores',href:'sectors'},
                            {title:'Apoiadores',href:'helpers'}
                        ].map((l) => (
                            {
                                element:"div",
                                style:`
                                    {
                                        position:relative;
                                        font-size:18px;
                                        font-weight:600;
                                        padding:2px 7px 2px;
                                        margin:0px 0px 0px 10px;
                                        color:var(--colorWhite);
                                        cursor:pointer;
                                    }
                                    :responsive{
                                        margin:0px 5px;
                                        padding:1px 7px 1px;
                                    }
                                    ::after{
                                        position:absolute;
                                        bottom:0%;
                                        left:0%;
                                        z-index:-1;
                                        content:"";
                                        width:2px;
                                        height:100%;
                                        background:var(--colorWhite);
                                        transition:width 0.25s;
                                    }
                                    :hover::after{
                                        width:100%;
                                        background:var(--colorBlack);
                                    }`,
                                innerHTML:l.title,
                                events:[
                                    {
                                        target:"element",
                                        type:"click",
                                        function:() => document.getElementById(l.href).scrollIntoView()
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