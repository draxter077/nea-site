export default function sectors(){
    return(
        {
            id:"sectors",
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
                        let e = document.getElementById("sectors")
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
                            color:var(--colorGray);
                            margin:0px 0px 5px 0px;
                        }
                        :responsive{
                            margin:0px 0px 5% 0px;
                        }`,
                    innerHTML:"Nossos setores"
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            justify-content:space-around;
                            flex-wrap:wrap;
                            width:100%;
                        }`,
                    children:[
                        ...[
                            {title:"Diretoria",src:"/assets/icons/board.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Conteúdo",src:"/assets/icons/content.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Marketing",src:"/assets/icons/marketing.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Parcerias",src:"/assets/icons/partners.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                            {title:"Logística",src:"/assets/icons/logistics.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        ].map((n) => (
                            {
                                element:"a",
                                style:`
                                    {
                                        display:flex;
                                        flex-direction:column;
                                        justify-content:center;
                                        align-items:center;
                                        width:18%;
                                        height:100%;
                                        aspect-ratio:1;
                                        border-radius:5px;
                                        margin:10px 0px;
                                        padding:10px 15px;
                                        box-shadow:0px 0px 2px 0px var(--colorGray);
                                        background:var(--colorGray);
                                        overflow:hidden;
                                    }
                                    :responsive{
                                        width:48%;
                                        aspect-ratio:1;
                                        background-size:cover;
                                        background-position:center;
                                        margin:0px 0px 2.5% 0px;
                                    }`,
                                children:[
                                    {
                                        element:"img",
                                        style:`
                                            {
                                                height:30%;
                                                width:fit-content;
                                            }`,
                                        src:n.src
                                    },
                                    {
                                        element:"div",
                                        style:`
                                            {
                                                font-size:24px;
                                                font-weight:500;
                                                color:var(--colorBlack);
                                                margin:2.5% 0px 10% 0px;
                                            }`,
                                        innerHTML:n.title
                                    },
                                    {
                                        element:"div",
                                        style:`
                                            {
                                                font-size:14px;
                                                text-align:justify;
                                                color:var(--colorBlack);
                                                width:100%;
                                            }`,
                                        innerHTML:n.text
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