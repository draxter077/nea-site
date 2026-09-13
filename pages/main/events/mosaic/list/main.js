import item from "./item/main.js"

export default function list(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            height:100%;
            margin:0px 0px 0px 2.5%;
        }
        :responsive{
            height:fit-content;
            width:100%;
            margin:0px;
        }`

    const list = cE("div",style)
    list.appendChild(item())
    list.appendChild(item())
    list.appendChild(item())
    list.appendChild(item())
    return(list)
}