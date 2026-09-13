export default function logo(){
    let style = `
        {
            height:40px;
        }
        :responsive{
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/logo.png"
    logo.alt = "Logotipo do Núcleo de Empreendedorismo e Advocacia"
    return(logo)
}