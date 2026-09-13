export default function newsletter(){
    let style = `
        {
            width:100%;
            height:50svh;
            background:red;
            margin:2.5% 0px 0px 0px;
        }`

    const newsletter = cE("div",style)
    newsletter.id = "newsletter"
    newsletter.innerHTML = "Newsletter"
    return(newsletter)
}