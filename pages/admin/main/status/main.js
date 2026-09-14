export default function status(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                    align-items:center;
                    width:80%;
                }`,
            children:[
                ...[
                    {title:"Título", value:"Valor"},
                    {title:"Título", value:"Valor"},
                    {title:"Título", value:"Valor"},
                    {title:"Título", value:"Valor"}
                ].map((i) => (
                    {
                        element:"div",
                        style:`
                            {
                                display:flex;
                                flex-direction:column;
                                align-items:flex-start;
                                background:green;
                                padding:10px 15px;
                                border-radius:5px;
                                box-shadow:0px 0px 3px 0px green;
                            }
                            :responsive{
                                margin:5px 0px;
                            }`,
                        children:[
                            {
                                element:"div",
                                style:`
                                    {
                                        font-size:16px;
                                        color:var(--colorWhite);
                                    }`,
                                innerHTML:i.title
                            },
                            {
                                element:"div",
                                style:`
                                    {
                                        font-size:12px;
                                        color:var(--colorWhite);
                                    }`,
                                innerHTML:i.value
                            }
                        ]
                    }
                ))
            ]
        }
    )
}