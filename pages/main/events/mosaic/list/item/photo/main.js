export default function photo(){
    let style = `
        {
            height:100%;
            aspect-ratio:1;
        }
        :responsive{
            width:25vw;
        }`

    const photo = cE("img",style)
    photo.src = "https://img.magnific.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80"
    photo.alt = "Foto de um garoto"
    return(photo)
}