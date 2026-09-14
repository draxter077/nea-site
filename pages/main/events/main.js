import item from "./item/main.js"

export default function events(){
    return(
        {
            id:'events',
            type:"div",
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
                    type:"div",
                    style:`
                        {
                            font-size:31px;
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
                    type:"div",
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
                            type:"a",
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
                                    overflow:hidden;
                                }
                                :responsive{
                                    width:100%;
                                    aspect-ratio:1;
                                    background-size:cover;
                                    background-position:center;
                                    margin:0px 0px 2.5% 0px;
                                }`,
                            children:[
                                {
                                    type:"div",
                                    style:`
                                        {
                                            display:flex;
                                            flex-direction:column;
                                            align-items:flex-end;
                                            width:100%;
                                        }`,
                                    children:[
                                        {
                                            type:"div",
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
                                            type:"div",
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
                                            type:"div",
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
                            type:"div",
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
                                item(),
                                item(),
                                item(),
                                item()
                            ]
                        }
                    ]
                }
            ]
        }
    )
}