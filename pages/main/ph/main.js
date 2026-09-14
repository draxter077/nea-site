export default function ph(){
    function scroll0(){
        const p = document.getElementById('phFoot')
        if(window.scrollY + window.innerHeight >= p.offsetTop){
            p.style = "background-position:0%;"
            window.removeEventListener("scroll", scroll0)
        }
    }

    function mouseover0(args){
        let e = args.element
        e.children[1].style.transform = "scale(1.1)"
        e.removeEventListener("mouseover",mouseover0)
        e.addEventListener(
            "mouseout",
            function mouseout0(){
                e.children[1].style.transform = "scale(1)"
                e.removeEventListener("mouseout",mouseout0)
                e.addEventListener("mouseover",() => mouseover0(args))
            }
        )
    }

    return(
        {
            id:"phFoot",
            type:"a",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    padding:10px 15px;
                    background:linear-gradient(90deg,var(--colorBluePh) 40%,var(--colorBlack) 50%);
                    background-size:300%;
                    background-position:100%;
                    transition:all 1s;
                    cursor:pointer;
                }
                :responsive{
                    background:var(--colorBluePh);
                }`,
            href:"https://www.ph.net.br",
            events:[
                {
                    target:"window",
                    type:"scroll",
                    function:scroll0
                },
                {
                    target:"element",
                    type:"mouseover",
                    args:{element:"element"},
                    function:mouseover0
                }
            ],
            children:[
                {
                    type:"div",
                    style:`
                        {
                            font-size:16px;
                            color:var(--colorWhite);
                            font-weight:900;
                            font-family:"Garet",system-ui;
                            margin:0px 10px 0px 0px;
                        }`,
                    innerHTML:"Desenvolvido por"
                },
                {
                    type:"img",
                    style:`
                        {
                            height:35px;
                            border-radius:5px;
                            border:1px solid var(--colorWhite);
                            transition:transform 0.33s;
                        }`,
                    src:"https://www.ph.net.br/assets/logo.jpg",
                    alt:"Logotipo da Ph Web Software"
                }
            ]
        }
    )
}