const bdate = document.querySelector("#birthday-date");

const lnum = document.querySelector("#lucky-num");

const find = document.querySelector("#find-out")

const showresult = document.querySelector("#show-result");


function findout()
{
    // showresult.style.display = "none";
    console.log("Hey");
    // console.log(bdate)
    console.log(bdate.value) //working
    const dateofbirth = bdate.value;
    console.log(dateofbirth) //not working
    const sumofbdate = countbirthdate(dateofbirth);
    console.log("sum",sumofbdate);

    const num = Number(lnum.value);

    console.log(typeof num);

    if((sumofbdate % num )===0)
    {
        showresult.innerText="Your birthdate is lucky!";

    }
    else
    {
        showresult.innerText="Your birthdate is not lucky!";
    }
   
}


function countbirthdate(dateofbirth)
{
    dateofbirth = dateofbirth.replaceAll("-","");
    let sum = 0;
    for(i=0;i<dateofbirth.length;i++)
    {
        sum=sum+Number(dateofbirth.charAt(i));

    }
    return sum;

    
}


find.addEventListener("click",findout);





