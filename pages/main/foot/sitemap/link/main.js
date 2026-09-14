export default function link(href, t){
    return(
        {
            type:"a",
            style:`
                {
                    font-size:14px;
                    font-weight:600;
                    color:var(--colorWhite);
                    border-bottom:1px solid var(--colorWhite);
                    padding:0px 5px;
                    transition:all 0.5s;
                }
                :hover{
                    border-bottom:1px solid var(--colorBlue);
                }`,
            innerHTML:t,
            href:href
        }
    )
}