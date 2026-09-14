import question from "./question/main.js"

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
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    function scroll0(){
        let e = document.getElementById("faq")
        if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
            window.removeEventListener("scroll",scroll0)
            e.style.opacity = 1
            e.style.transform = "translateY(0%)"
        }
    }

    return(
        {
            id:"faq",
            type:"div",
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
                    function:scroll0
                }
            ],
            children:[
                {
                    type:"div",
                    style:`
                        {
                            font-size:24px;
                            color:white;
                            font-weight:600;
                            border-right:1px solid white;
                            border-left:1px solid white;
                            padding:5px 30px;
                        }`,
                    innerHTML:"Perguntas frequentes"

                },
                {
                    type:"div",
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
                        question("Sou da UFPR. Como faço para participar?","Nosso próximo processo seletivo é 14/09")
                    ]
                }
            ]
        }
    )
}