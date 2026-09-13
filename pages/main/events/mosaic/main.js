import main from "./main/main.js"
import list from "./list/main.js"

export default function mosaic(){
    let style = `
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
        }`

    const mosaic = cE("div",style)
    mosaic.appendChild(main())
    mosaic.appendChild(list())
    return(mosaic)
}