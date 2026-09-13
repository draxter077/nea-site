import photo from "./photo/main.js"
import info from "./info/main.js"

export default function item(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:23%;
            width:100%;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
            overflow:hidden;
        }
        :responsive{
            height:fit-content;
            margin:5px 0px;
        }`

    const item = cE("div",style)
    item.appendChild(photo())
    item.appendChild(info())
    return(item)
}