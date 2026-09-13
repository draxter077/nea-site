export default function text(){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
            margin:2.5% 0px 0px 0px;
        }
        :responsive{
            margin:5% 0px 0px 0px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Unimos a inovação de quem está começando com a experiência de quem já faz"
    return(text)
}