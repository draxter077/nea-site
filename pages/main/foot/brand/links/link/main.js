export default function link(src, href){
    return(
        {
            type:"a",
            style:`
                {
                    height:32px;
                    margin:0px 0px 0px 30px;
                    transition:all 0.5s;
                }
                :hover{
                    transform:scale(1.1);
                }`,
            href:href,
            target:"_blank",
            children:[
                {
                    type:"img",
                    style:`
                        {
                            height:100%;
                            filter:invert(1);
                        }`,
                    src:src,
                    alt:"Logotipo de rede social"
                }
            ]
        }
    )
}