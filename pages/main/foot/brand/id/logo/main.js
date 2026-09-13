export default function logo(){
    let style = `
        {
            height:35px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/logo.png"
    logo.alt = "Logotipo do NEA UFPR"
    return(logo)
}