export default function link(url,href,alt){
    let style = `
        {
            height:50px;
            width:50px;
            margin:0px 50px;
            cursor:pointer;
            background-image:url("${url}");
            background-size:contain;
            filter:invert(1);
        }`

    const link = cE("a",style)
    link.target = "_blank"
    link.href = href
    return(link)
}