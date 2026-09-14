export default function answer(a){
    return(
        {
            type:"div",
            style:`
                {
                    width:100%;
                    max-height:0px;
                    overflow:hidden;
                    transition:max-height 0.5s;
                }`,
            children:[
                {
                    type:"div",
                    style:`
                        {
                            font-size:16px;
                            text-align:justify;
                            color:var(--colorWhite);
                            width:100%;
                            padding:2%;
                        }`,
                    innerHTML:a
                }
            ]
        }
    )
}