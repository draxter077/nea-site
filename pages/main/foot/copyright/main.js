export default function copyright(){
    return(
        {
            type:"div",
            style:`
                {
                    font-size:15px;
                    font-weight:600;
                    text-align:center;
                    color:white;
                    margin:20px 0px 0px 0px;
                }`,
            innerHTML:`NEA UFPR © ${new Date().getFullYear()} | Todos os direitos reservados`
        }
    )
}