export default function link(n,id){
    let style = `
        {
            position:relative;
            font-size:16px;
            font-weight:500;
            padding:2px 5px 2px;
            margin:0px 0px 0px 20px;
            color:var(--colorWhite);
            cursor:pointer;
        }
        :responsive{
            margin:0px 5px;
            padding:1px 5px 1px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            z-index:-1;
            content:"";
            width:0px;
            height:1px;
            background:var(--colorWhite);
            transition:width 0.25s;
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("div",style)
    link.innerHTML = n
    link.addEventListener("click", () => {document.getElementById(id).scrollIntoView()})
    return(link)
}