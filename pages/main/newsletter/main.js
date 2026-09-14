export default function newsletter(){
    return(
        {
            id:"newsletter",
            type:"div",
            style:`
                {
                    width:100%;
                    height:50svh;
                    background:red;
                    margin:2.5% 0px 0px 0px;
                    opacity:0;
                    transform:translateY(50%);
                    transition:all 0.5s;
                }
                :responsive{
                    width:95%;
                }`,
            events:[
                {
                    target:"window",
                    type:"scroll",
                    function:() => {function a(){
                        let e = document.getElementById("newsletter")
                        if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                            window.removeEventListener("scroll",a)
                            e.style.opacity = 1
                            e.style.transform = "translateY(0%)"
                        }
                    };a()}
                }
            ],
            innerHTML:"newsletter"
        }
    )
}