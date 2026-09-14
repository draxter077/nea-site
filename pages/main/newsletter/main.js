export default function newsletter(){
    return(
        {
            id:"newsletter",
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:90%;
                    margin:5% 0px 0px 0px;
                    opacity:0;
                    transform:translateY(50%);
                    transition:all 0.5s;
                }
                :responsive{
                    width:95%;
                }`,
            events:[
                {
                    target:"window",
                    type:"scroll",
                    function:() => {function a(){
                        let e = document.getElementById("newsletter")
                        if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                            window.removeEventListener("scroll",a)
                            e.style.opacity = 1
                            e.style.transform = "translateY(0%)"
                        }
                    };a()}
                }
            ],
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
                    innerHTML:"Nossa newsletter"
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            justify-content:space-around;
                            width:100%;
                        }
                        :responsive{
                            flex-wrap:wrap;
                        }`,
                    children:[
                        ...[
                            {title:"Alguma título chamativo",date:"13 Set 2026",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Alguma título chamativo",date:"13 Set 2026",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Alguma título chamativo",date:"13 Set 2026",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        ].map((n) => (
                            {
                                element:"a",
                                style:`
                                    {
                                        display:flex;
                                        flex-direction:column;
                                        justify-content:flex-end;
                                        width:30%;
                                        height:100%;
                                        aspect-ratio:16/9;
                                        background-image:url("https://img.magnific.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80");
                                        background-size:contain;
                                        background-position:center;
                                        border-radius:15px;
                                        box-shadow:0px 0px 2px 0px var(--colorWhite);
                                        cursor:pointer;
                                        overflow:hidden;
                                        transition:all 0.25s;
                                    }
                                    :responsive{
                                        width:48%;
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
                                                innerHTML:n.date
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
                                                innerHTML:n.title
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
                                                innerHTML:n.text
                                            },
                                        ]
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