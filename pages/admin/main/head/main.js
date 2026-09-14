export default function head(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-around;
                    width:100%;
                    padding:10px 15px;
                }
                :responsive{
                    flex-direction:column;
                    padding:10px 15px 15px;
                }`,
            children:[
                {
                    element:"img",
                    style:`
                        {
                            height:75px;
                            border:2px solid var(--colorWhite);
                            box-shadow:0px 0px 3px 0px var(--colorWhite);
                        }
                        :responsive{
                            margin:2.5% 0px;
                        }`,
                    src:"/assets/",
                    alt:"Logotipo da NomeEmpresa"
                }
            ]
        }
    )
}