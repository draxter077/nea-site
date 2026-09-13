import title from "./title/main.js"
import mosaic from "./mosaic/main.js"

export default function events(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            width:95%;
        }`

    const events = cE("div",style)
    events.id = "events"
    events.appendChild(title())
    events.appendChild(mosaic())
    return(events)
}