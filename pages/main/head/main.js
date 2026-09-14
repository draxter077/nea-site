import link from "./link/main.js"

export default function head(){
    return(
        {
            type:"div",
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
                    background:var(--colorBlack);
                    box-shadow:0px 0px 3px 0px var(--colorBlack);
                    padding:1% 0px;
                }
                :responsive{
                    flex-direction:column;
                    padding:10px 15px 15px;
                }`,
            children:[
                {
                    type:"img",
                    style:`
                        {
                            height:40px;
                        }
                        :responsive{
                            margin:2.5% 0px;
                        }`,
                    src:"/assets/logo.png",
                    alt:"Logotipo do Núcleo de Empreendedorismo e Advocacia da UFPR"
                },
                {
                    type:"div",
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
                        link("Eventos", "events"),
                        link("Newsletter", "newsletter"),
                        link("Setores", "sectors"),
                        link("Apoiadores", "helpers")   
                    ]
                }
            ]
        }
    )
}