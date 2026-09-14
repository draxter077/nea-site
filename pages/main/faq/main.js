export default function faq(){
    const SD = {
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
            {
                "@type":"Question",
                "name":"",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":""
                }
            }
        ]
        
    }
    const script = document.createElement('script')
    script.element = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    return(
        {
            id:"faq",
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    width:90%;
                    margin:5% 0px 0px 0px;
                    opacity:0;
                    transform:translateY(50%);
                    transition:all 0.5s;
                }
                :responsive{
                    width:95%;
                    margin:20% 0px 0px 0px;
                }`,
            events:[
                {
                    target:"window",
                    type:"scroll",
                    function:() => {function a(){
                        let e = document.getElementById("faq")
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
                            font-size:24px;
                            color:white;
                            font-weight:600;
                            border-right:1px solid var(--colorGreen);
                            border-left:1px solid var(--colorGreen);
                            padding:5px 30px;
                        }`,
                    innerHTML:"Perguntas frequentes"

                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:flex-start;
                            justify-content:space-between;
                            flex-wrap:wrap;
                            width:100%;
                            margin:2.5% 0px 0px 0px;
                        }`,
                    children:[
                           ...[
                                {query:"Sou da UFPR. Como posso participar?", answer:"Nosso processo seletivo já está no ar! Inscreva-se em..."}
                            ].map(q => (
                            {
                                element:"div",
                                style:`
                                    {
                                        display:flex;
                                        flex-direction:column;
                                        width:49%;
                                        box-shadow:0px 0px 3px 0px var(--colorGreen);
                                        padding:10px 15px;
                                        border-radius:15px;
                                        margin:5px 0px;
                                        cursor:pointer;
                                    }
                                    :responsive{
                                        width:100%;
                                    }`,
                                events:[
                                    {
                                        target:"element",
                                        type:"click",
                                        args:{element:"element"},
                                        function:(args) => {function a(args){
                                            let e = args.element
                                            let as = e.children[1]
                                            let ar = e.children[0].children[1]

                                            as.style = "max-height:1000px;"
                                            ar.style = "transform:rotate(180deg);"

                                            e.removeEventListener("click",a)
                                            e.addEventListener(
                                                "click",
                                                function b(){
                                                    as.style = "max-height:0px;"
                                                    ar.style = "transform:rotate(0deg);"

                                                    e.removeEventListener("click",b)
                                                    e.addEventListener("click",(args) => a(args))
                                                }
                                            )
                                        };a(args)}
                                    }
                                ],
                                children:[
                                    {
                                        element:"div",
                                        style:`
                                            {
                                                display:flex;
                                                flex-direction:row;
                                                align-items:center;
                                                justify-content:space-between;
                                                width:100%;
                                            }`,
                                        children:[
                                            {
                                                element:"div",
                                                style:`
                                                    {
                                                        font-size:18px;
                                                        color:var(--colorWhite);
                                                        font-weight:600;
                                                        width:80%;
                                                    }`,
                                                innerHTML:q.query
                                            },
                                            {
                                                element:"img",
                                                style:`
                                                    {
                                                        height:18px;
                                                        transition:all 0.5s;
                                                        filter:invert(1);
                                                    }`,
                                                src:"/assets/icons/arrow.png",
                                                alt:"Flecha para abertura da resposta"
                                            }
                                        ]
                                    },
                                    {
                                        element:"div",
                                        style:`
                                            {
                                                width:100%;
                                                max-height:0px;
                                                overflow:hidden;
                                                transition:max-height 0.5s;
                                            }`,
                                        children:[
                                            {
                                                element:"div",
                                                style:`
                                                    {
                                                        font-size:16px;
                                                        text-align:justify;
                                                        color:var(--colorWhite);
                                                        width:100%;
                                                        padding:2%;
                                                    }`,
                                                innerHTML:q.answer
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
    )
}