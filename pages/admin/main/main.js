import head from "./head/main.js"
import status from "./status/main.js"
import sqlQuery from "./sqlQuery/main.js"
import databases from "./databases/main.js"
import foot from "./foot/main.js"

export default function main(d){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:center;
                    width:100%;
                    height:100svh;
                }
                :responsive{
                    height:fit-content;
                }`,
            children:[
                head(),
                status(),
                sqlQuery(),
                databases(),
                foot()
            ]
        }
    )
}