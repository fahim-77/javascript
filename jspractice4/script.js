const users= [
    {
        username: "marsh",
        password: "m1122",
        role: "sa"
    },
    {
        username: "albert",
        password: "a3344",
        role: "ad"
    },
    {
        username: "rally22",
        password: "r5566",
        role: "us"
    }
]
function print (username , password , role) {
    return `Username : ${username}\n Password : ${password}\n Role : ${role}`;
}
const count= users.length;
const x= prompt("please enter username :");
for( let i=0 ; i<count ;i++) {
    if ( users[i].username === x)
    {
        const y= prompt("please enter password");
        if ( users[i].password === y ) {
            const title= document.querySelector("h1");
            console.log(title);
            title.innerText= print(x,y,users[i].role);
            break;
        }
    }
    else if (i === count - 1) {
        alert("Username or Password is wrong");
    }
} 