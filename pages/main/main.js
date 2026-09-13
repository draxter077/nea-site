import head from "./head/main.js"
import outdoor from "./outdoor/main.js"
import events from "./events/main.js"
import newsletter from "./newsletter/main.js"
import sectors from "./sectors/main.js"
import helpers from "./helpers/main.js"
import faq from "./faq/main.js"
import foot from "./foot/main.js"
import ph from "./ph/main.js"

export default function main(){
    const SD = { // Padrão em todo main de página
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Núcle de Empreendedorismo e Advocacia",
        "alternateName":"NEA",
        "url":"https://www.nea-ufpr.com.br",
        "logo":"https://www.nea-ufpr.com.br/assets/logo.png",
        "image":"https://www.nea-ufpr.com.br/assets/logo.png",
        "email":"diretoria@nea-ufpr.com.br",
        "slogan":"Somos curiosidade, inovação e experiência",
        "description":"Unimos a inovação de quem está começando com a experiência de quem já faz",
        "areaServed":"BR",
        "address":{
            "@type":"PostalAddress",
            "streetAddress":"",
            "addressLocality":"",
            "addressRegion":"",
            "addressCountry":"BR",
            "postalCode":""
        },
        "sameAs":[
            "https://www.nea-ufpr.com.br",
            instagram_url,
            youtube_url,
            tiktok_url
        ]
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(outdoor())
    main.appendChild(events())
    main.appendChild(newsletter())
    main.appendChild(sectors())
    main.appendChild(helpers())
    main.appendChild(faq())
    main.appendChild(foot())
    main.appendChild(ph())
    return(main)
}