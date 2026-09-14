import query from "./query/main.js"
import answer from "./answer/main.js"

export default function question(q,a){
    function click0(args){
        let e = args.element
        let as = e.children[1]
        let ar = e.children[0].children[1]

        as.style = "max-height:1000px;"
        ar.style = "transform:rotate(180deg);"

        e.removeEventListener("click",click0)
        e.addEventListener(
            "click",
            function click1(){
                as.style = "max-height:0px;"
                ar.style = "transform:rotate(0deg);"

                e.removeEventListener("click",click1)
                e.addEventListener("click",() => click0(args))
            }
        )
    }

    return(
        {
            type:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:49%;
                    box-shadow:0px 0px 3px 0px white;
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
                    function:click0
                }
            ],
            children:[
                query(q),
                answer(a)
            ]

        }
    )
}