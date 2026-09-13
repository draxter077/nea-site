export default function slogan(){
    let style = `
        {
            font-size:43px;
            font-weight:600;
            text-shadow:0px 0px 3px var(--colorWhite);
            color:var(--colorWhite);
        }`

    const slogan = cE("div", style)
    slogan.innerHTML = "Somos curiosidade, inovação<br>e experiência"
    return(slogan)
}