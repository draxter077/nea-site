import slogan from "./slogan/main.js"
import text from "./text/main.js"
import links from "./links/main.js"

export default function outdoor(){
    let style = `
        {

            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            text-align:center;
            margin:7.5% 0px 0px;
        }
        :responsive{
            width:95%;
            padding:20% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.appendChild(slogan())
    outdoor.appendChild(text())
    outdoor.appendChild(links())
    return(outdoor)
}