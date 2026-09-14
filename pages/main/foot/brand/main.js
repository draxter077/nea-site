import links from "./links/main.js"

export default function brand(){
    return(
        {
            type:"div",
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
                    type:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                        }`,
                    children:[
                        {
                            type:"img",
                            style:`
                                {
                                    height:35px;
                                }`,
                            src:"/assets/logo.png",
                            alt:"Logotipo do NEA"
                        },
                        {
                            type:"div",
                            style:`
                                {
                                    font-size:14px;
                                    margin:0px 0px 0px 20px;
                                    color:var(--colorWhite);
                                    font-weight:600;
                                }`,
                            innerHTML:`Núcleo de Empreendedorismo e Advocacia da UFPR`
                        }
                    ]
                },
                links()
            ]
        }
    )
}