import date from "./date/main.js"
import title from "./title/main.js"
import detail from "./detail/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            width:100%;
        }`

    const info = cE("div",style)
    info.appendChild(date())
    info.appendChild(title())
    info.appendChild(detail())
    return(info)
}