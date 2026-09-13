import info from "./info/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            height:100%;
            aspect-ratio:16/9;
            background-image:url("https://img.magnific.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80");
            background-size:contain;
            border-radius:15px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            overflow:hidden;
        }
        :responsive{
            width:100%;
            aspect-ratio:1;
            background-size:cover;
            background-position:center;
            margin:0px 0px 2.5% 0px;
        }`

    const main = cE("a",style)
    main.appendChild(info())
    return(main)
}