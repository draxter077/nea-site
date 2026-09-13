export default function title(){
    let style = `
        {
            font-size:31px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            margin:0px 0px 1% 0px;
            padding:5px 10px;
        }
        :responsive{
            margin:0px 0px 5% 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = 'Próximos eventos'
    return(title)
}