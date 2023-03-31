let dbUsers = [
    { 
        username: "alyaazafira",
        password: "yaya46",
        name: "Alyaa",
        email: "alyaa23@uedu.my"
    },
    {
        username: "hanissss",
        password: "nanis3",
        name: "Hanis",
        email: "nanis2@edu.my"
    }
]

function login (username,password){
    console.log("someone try to login with", username,password)         //apa yang user akan masukkan//
    //dbUsers.find(element => {                       //finde element dalam array//
    //    console.log(element)
   // })
   let matched = dbUsers.find(element => 
       element.username == username                 //find someone data//
   )
   if(matched) {
        if(matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }
   }
   else {
        return "Username not found"
   }

   }
   //console.log(matched)

function register(newusername, newpassword, newname, newemail) {
    console.log("someone try to login with", username,password)         //apa yang user akan masukkan//
    dbUsers.find(element => {                       //finde element dalam array//
       console.log(element)
    })

    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })

}

      

//try login//
//login("autem","password")
//login("alyaazafira","123")
console.log(login("yaya","222"))
register("cacaa33","333333","syasya","ca@utem.my")
console.log(login("cacaa33", "333333"))