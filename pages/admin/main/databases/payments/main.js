export default function payments(){
    return(
        {
            element:"div",
            style:`
                {
                    display:flex;
                    flex-direction:column;
                    width:33%;
                    height:100%;
                    background:green;
                    padding:10px 15px;
                    box-shadow:0px 0px 3px 0px green;
                    border-radius:10px;
                }
                :responsive{
                    height:33%;
                    width:100%;
                }`,
            children:[
                {
                    element:"div",
                    style:`
                        {
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            justify-content:space-between;
                            width:100%;
                        }`,
                    children:[
                        {
                            element:"input",
                            style:`
                                {
                                    width:100%;
                                    font-size:16px;
                                    padding:2px 5px;
                                    border-bottom:1px solid white;
                                    color:var(--colorWhite);
                                }
                                ::placeholder{
                                    font-style:italic;
                                }`,
                            placeholder:"Pesquise em pagamentos [256]",
                            events:[
                                {
                                    target:"element",
                                    type:"input",
                                    args:{element:"element"},
                                    function:(args) => {function a(args){
                                        let e = args.element
                                        const v = e.value
                                        const cs = e.parentElement.parentElement.children[1].children
                                        for(let i = 0; i < cs.length; i++){
                                            if(!cs[i].innerHTML.includes(v)){
                                                cs[i].style.display = "none"
                                            }
                                            else{
                                                cs[i].style.display = "flex"
                                            }
                                        }
                                    };a(args)}
                                }
                            ]
                        },
                        {
                            element:"div",
                            style:`
                                {
                                    display:flex;
                                    flex-direction:column;
                                    align-items:center;
                                    justify-content:center;
                                    height:30px;
                                    width:33%;
                                    font-size:16px;
                                    font-weight:900;
                                    text-align:center;
                                    background:black;
                                    color:var(--colorWhite);
                                    border-radius:5px;
                                    cursor:pointer;
                                    overflow:hidden;
                                }
                                >div{
                                    width:40px;
                                    height:50%;
                                    border-radius:10px;
                                    background:var(--colorWhite);
                                    animation:loading2 2s linear 0s infinite alternate;
                                }`,
                            innerHTML:"Novo mês",
                            events:[
                                {
                                    target:"element",
                                    type:"click",
                                    args:{element:"element"},
                                    function:async (args) => {async function a(args){
                                        let e = args.element
                                        e.removeEventListener("click", a)
                                        e.innerHTML = `<div></div>`
                                        await new Promise(r => setTimeout(r,2000))

                                        // axios.get(`${api_url}/admin/addPayments`)
                                        // .then(async r => {
                                        //     button.innerHTML = `Enviado`
                                        // })
                                        // .catch(async r => {
                                        //     button.innerHTML = "Tente mais tarde"
                                        // })

                                        e.innerHTML = "Enviado"
                                    };await a(args)}
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
}