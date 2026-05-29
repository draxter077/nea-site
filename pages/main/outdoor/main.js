export default function outdoor(){
    let style = `
        {

            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            height:100svh;
            text-align:center;
            padding:7.5% 0px;
            background:var(--colorWhite);
        }
        :responsive{
            width:95%;
            padding:20% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.innerHTML = "NEA"
    return(outdoor)
}