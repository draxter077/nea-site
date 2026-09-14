export default function sqlQuery(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-around;
                    width:80%;
                }
                :responsive{
                    margin:20px 0px 0px 0px;
                }`,
            children:[
                {
                    element:"input",
                    style:`
                        {
                            font-size:14px;
                            background:white;
                            color:black;
                            box-shadow:0px 0px 3px 0px white;
                            padding:10px 15px;
                            border-radius:5px;
                            width:60%;
                        }
                        ::placeholder{
                            font-style:italic;
                        }`,
                    placeholder:"Comando SQL"
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            justify-content:center;
                            height:40px;
                            width:20%;
                            font-size:16px;
                            font-weight:900;
                            text-align:center;
                            background:white;
                            color:black;
                            border-radius:5px;
                            cursor:pointer;
                        }
                        :responsive{
                            height:30px;
                            width:33%;
                        }
                        >div{
                            width:40px;
                            height:50%;
                            border-radius:10px;
                            background:black;
                            animation:loading2 2s linear 0s infinite alternate;
                        }`,
                    innerHTML:"Enviar",
                    events:[
                        {
                            target:"element",
                            type:"click",
                            args:{element:"element"},
                            function:async (args) => {async function a(args) {
                                let e = args.element
                                e.removeEventListener("click", a)
                                e.innerHTML = `<div></div>`
                                await new Promise(r => setTimeout(r, 2000))
                                const input = e.parentElement.children[0]

                                if(input.value){
                                    const query = input.value
                                    if(!query.includes("DELETE FROM") && !query.includes("UPDATE") && !query.includes("SELECT")) input.value = `Comando inválido [DELETE FROM, UPDATE, SELECT] | ${query}`
                                    else if(!query.includes("clients") && !query.includes("orders") && !query.includes("payments")) input.value = `Tabela inválida [clients, orders, payments] | ${query}`
                                    else if(!query.includes("WHERE")) input.value = `Comando sem WHERE | ${query}`
                                    else if(query.includes('"')) input.value = `Comando com aspas duplas | ${query}`
                                    else{
                                        // axios.post(`${api_url}/admin/sqlQuery`,{query:query})
                                        // .then(async r => {
                                        //     console.log(r.data)
                                        //     input.innerHTML = `Enviado | ${query}`
                                        // })
                                        // .catch(async r => {
                                        //     input.innerHTML = "Tente mais tarde"
                                        // })
                                        input.value = `Enviado | ${query}`
                                    }
                                }
                                e.innerHTML = "Enviar"
                                e.addEventListener("click",async (args) => await a(args))
                            };await a(args)}
                        }
                    ]
                }
            ]
        }
    )
}