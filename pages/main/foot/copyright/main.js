export default function copyright(){
    let style = `
        {
            font-size:12px;
            font-weight:500;
            text-align:center;
            color:white;
            margin:20px 0px 0px 0px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `NEA UFPR © ${new Date().getFullYear()} | Todos os direitos reservados`
    return(copyright)
}