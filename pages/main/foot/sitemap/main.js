import link from "./link/main.js"

export default function sitemap(){
    return(
        {
            type:"div",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-around;
                    width:100%;
                    margin:20px 0px 0px 0px;
                }
                :responsive{
                    margin:5% 0px 0px 0px;
                }`,
            children:[
                link("","Link1"),
                link("","Link2")
            ]
        }
    )
}