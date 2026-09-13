import title from "./title/main.js"
import questions from "./questions/main.js"

export default function faq(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const faq = cE("div",style)
    faq.id = "faq"
    faq.appendChild(title())
    faq.appendChild(questions())
    return(faq)
}