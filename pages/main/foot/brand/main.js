import id from "./id/main.js"
import links from "./links/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
        }
        :responsive{
            flex-direction:column;
        }`

    const brand = cE("div",style)
    brand.appendChild(id())
    brand.appendChild(links())
    return(brand)
}