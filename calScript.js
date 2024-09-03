let string = "";

let buttons = document.querySelectorAll(".calculator-keys");
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "=") {
            try{
                string=eval(string);
                document.querySelector("input").value=string;
            } catch (err) {
                alert("please! Enter valid Number");
                string="";
                document.querryselector("input").value=string;
            }

        }else if (e.target.innerHTML == "Ac"){
            string="";
            document.querySelector("input").value=string;
        }else{
            string=string + e.target.innerHTML;
            document.querySelector("input").value=string;
        }
    });
});