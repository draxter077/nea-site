export default function helpers(){
    return(
        {
            id:"helpers",
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:90%;
                    margin:5% 0px 0px 0px;
                    padding:10px 15px;
                    background:var(--colorWhite);
                    border-radius:5px;
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
                        let e = document.getElementById("helpers")
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
                            margin:0px 0px 5px 0px;
                        }
                        :responsive{
                            margin:0px 0px 5% 0px;
                        }`,
                    innerHTML:"Nossos apoiadores"
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
                            {src:"/assets/icons/oabpr.png"},
                            {src:"/assets/icons/tjpr.png"},
                            {src:"/assets/icons/ufpr.png"},
                            {src:"/assets/icons/ourofino.png"},
                            {src:"/assets/icons/ferrerorocher.png"},
                            {src:"/assets/icons/cacaushow.png"}
                        ].map((h) => (
                            {
                                element:"a",
                                style:`
                                    {
                                        width:7.5%;
                                        height:100%;
                                        aspect-ratio:1;
                                        border-radius:15px;
                                        margin:10px 0px;
                                        padding:10px 15px;
                                        box-shadow:0px 0px 2px 0px var(--colorWhite);
                                        background:var(--colorGreen) url("${h.src}") center / contain no-repeat;
                                        box-shadow:0px 0px 1px 1px var(--colorGreen);
                                        cursor:pointer;
                                        overflow:hidden;
                                        transition:all 0.25s;
                                    }
                                    :responsive{
                                        width:30%;
                                        aspect-ratio:1;
                                        margin:0px 0px 2.5% 0px;
                                    }
                                    :hover{
                                        transform:scale(1.025);
                                    }`
                            }
                        ))
                    ]
                }
            ]
        }
    )
}