export default function link(url,href,alt){
    return(
        {
            type:"a",
            style:`
                {
                    height:50px;
                    width:50px;
                    margin:0px 50px;
                    cursor:pointer;
                    background-image:url("${url}");
                    background-size:contain;
                    filter:invert(1);
                }`,
            target:"_blank",
            href:href,
            alt:alt
        }
    )
}