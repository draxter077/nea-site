export default function helpers(){
    let style = `
        {
            width:100%;
            height:50svh;
            background:green;
            margin:2.5% 0px 0px 0px;
        }`

    const helpers = cE("div",style)
    helpers.id = "helpers"
    helpers.innerHTML = "helpers"
    return(helpers)
}