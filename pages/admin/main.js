import main from "./main/main.js"
import login from "./login/main.js"

export default function admin(data){
    document.title = "Admin"
    return(
        {
            element:"div",
            style:`
                {
                    width:100%;
                }`,
            children:[
                data ? main(data) : login()
            ]
        }
    )
}