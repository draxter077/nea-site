export default function login(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    width:100%;
                    height:100svh;
                }`,
            children:[
                {
                    element:"img",
                    style:`
                        {
                            height:100px;
                            border:3px solid var(--colorWhite);
                            box-shadow:0px 0px 3px 0px var(--colorWhite);
                        }
                        :responsive{
                            width:20%;
                            height:fit-content;
                        }`,
                    src:"/assets/",
                    alt:"Logotipo da NomeEmpresa"
                },
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            width:25%;
                            margin:2.5% 0px 0px 0px;
                        }
                        :responsive{
                            margin:10% 0px 0px 0px;
                            width:95%;
                        }`,
                    children:[
                        {
                            id:"formsInputs",
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:column;
                                    width:100%;
                                }`,
                            children:[
                                ...[
                                    {placeholder:"Admin"},
                                    {placeholder:"Senha"}
                                ].map((i) => (
                                    {
                                        element:"input",
                                        style:`
                                            {
                                                width:100%;
                                                font-size:14px;
                                                padding:10px 15px;
                                                background:white;
                                                color:black;
                                                box-shadow:0px 0px 3px 0px white;
                                                border-radius:10px;
                                                margin:5px 0px;
                                                transition:all 0.5s;
                                            }
                                            ::placeholder{
                                                font-style:italic;
                                            }`,
                                        placeholder:i.placeholder,
                                        type:i.placeholder=="Senha"?"password":""
                                    }
                                ))
                            ]
                        },
                        {
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:column;
                                    align-items:center;
                                    width:100%;
                                    margin:5% 0px 0px 0px;
                                }`,
                            children:[
                                {
                                    element:"div",
                                    style:`
                                        {
                                            display:flex;
                                            flex-direction:column;
                                            align-items:center;
                                            justify-content:center;
                                            height:40px;
                                            width:50%;
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
                                            width:80%;
                                        }
                                        >div{
                                            width:40px;
                                            height:50%;
                                            border-radius:10px;
                                            background:black;
                                            animation:loading2 2s linear 0s infinite alternate;
                                        }`,
                                    innerHTML:"Entrar",
                                    events:[
                                        {
                                            target:"element",
                                            type:"click",
                                            args:{element:"element"},
                                            function:async (args) => {async function a(args){
                                                let e = args.element
                                                e.removeEventListener("click",a)
                                                e.innerHTML = `<div></div>`
                                                await new Promise(r => setTimeout(r,2000))
                                                const is = document.getElementById("formsInputs").children

                                                if(is[0].value && is[1].value){
                                                    // axios.post(`${api_url}/admin/login`, {admin:is[0].value,password:is[1].value})
                                                    //     .then(async r => {await construct({page:"admin",data:r.data})})
                                                    //     .catch(async r => {
                                                    //         if(r.response.status == 403){
                                                    //             is[1].style = "box-shadow:0px 0px 3px 0px red"
                                                    //             await new Promise(r => setTimeout(r,600))
                                                    //             is[1].style = "box-shadow:0px 0px 3px 0px white"
                                                    //         }
                                                    //         else if(r.response.status == 404){
                                                    //             is[0].style = "box-shadow:0px 0px 3px 0px red"
                                                    //             await new Promise(r => setTimeout(r,600))
                                                    //             is[0].style = "box-shadow:0px 0px 3px 0px white"
                                                    //         }
                                                    //         else{
                                                    //             e.innerHTML = "Tente mais tarde"
                                                    //         }
                                                    //     })
                                                    await construct({page:"admin",data:{user:{id:"teste"}}})
                                                }
                                                else if(is[0].value){
                                                    is[1].style = "box-shadow:0px 0px 5px 5px red"
                                                    await new Promise(r => setTimeout(r,600))
                                                    is[1].style = "box-shadow:0px 0px 3px 0px white"
                                                }
                                                else{
                                                    is[0].style = "box-shadow:0px 0px 5px 5px red"
                                                    await new Promise(r => setTimeout(r,600))
                                                    is[0].style = "box-shadow:0px 0px 3px 0px white"
                                                }
                                                e.innerHTML = "Entrar"
                                                e.addEventListener("click",async (args) => await a(args))
                                            };await a(args)}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    element:"div",
                    style:`
                        {
                            width:100%;
                            height:fit-content;
                            padding:1%;
                        }
                        :responsive{
                            padding:2.5%;
                        }`,
                    children:[
                        {
                            element:"div",
                            style:`
                                {
                                    font-size:12px;
                                    font-weight:900;
                                    text-align:center;
                                    color:var(--colorWhite);
                                    margin:20px 0px 0px 0px;
                                }`,
                            innerHTML:`00.000.000/0001-00 © ${new Date().getFullYear()} | Todos os direitos reservados`
                        }
                    ]
                }
            ]

        }
    )
}