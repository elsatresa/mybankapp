// // //name:sajay,acno:10023,bal:1000,useraname:test,password:test
// // let accountDetails={

//  10020:{acno:10020,name:"sajay",bal:1000,useraname:"test",password:"test"},
//  10021:{acno:10021,name:"arun",bal:7000,useraname:"test1",password:"test1"},
//  10022:{acno:10022,name:"minu",bal:100000,useraname:"test2",password:"test2"},

// // }
// // var usename="test"

// // var password="test4"
// // //check 10020 acno exist or not
// // //if exist print person name
// // //if(10020 in accountDetails){
// //     //if(10020 in accountDetails){
// //       //  console.log(accountDetails[10020].name)//["name"]
// //    // }
// //     //else{
// //        // console.log("account doesnt exist")
// //     //}

//getData is method present inside the class
//display()


class Bank {
    static getData = () => {
        var accountDetails = {
            userone: { acno: 1000, balance: 1000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, balance: 13000, username: "userthree", password: "testuser2" }
        }
        return accountDetails
    }
    static authenticateUname=(uname,pwd)=>{
        let dataset=Bank.getData()
    
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
              return 1;//valid user password
            }
            else {
              return 0;//invalid password
            }
    
        }
        else{
           return -1;//no user exist
        }
    
    }

    static login = () => {
        let uname = document.querySelector("#Username").value
        let pwd = document.querySelector("#Password").value
        let us=Bank.authenticateUname(uname,pwd)
        if(us==1){
            alert("login Successful")
               window.location.href = "userHome.html"

        }
        else if(us==0){
            alert("Incorrect password")
        }
        else if(us==-1){
            alert("no user existed with provided username")
        }
        //alert(username+password)
    //     let dataset = Bank.getData()
    //     console.log(dataset)


    //     /*
    //    // {
    //            // userone:{acno:1000,balance:1000,username:"userone",password:"testuser"},
    //             //usertwo:{acno:1001,balance:12000,username:"usertwo",password:"testuser1"},
    //             //userthree:{acno:1002,balance:13000,username:"userthree",password:"testuser2"}
    //         //}
    //         */
    //     //check uname in dataset
    //     if (uname in dataset) {
    //         if (dataset[uname].password == pwd) {
    //             alert("login Successful")
    //             window.location.href = "userHome.html"
    //         }
    //         else {
    //             alert("Incorrect password")
    //         }

        
        // else{
        //     alert("no user existed with provided username")
        // }
    }
static deposit=()=>{
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amt=Number(document.querySelector("#amt").value)
    let us=Bank.authenticateUname(uname,pwd)
    let dataset=Bank.getData()
    if(us==1){

    dataset[uname].balance+=amt
        alert("your account is credited with"+amt+"aval balance"+dataset[uname].balance)
         

    }
    else if(us==0){
        alert("Incorrect password")
    }
    else if(us==-1){
        alert("no user existed with provided username")
    }
}
 
static withdraw=()=>{
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amt=Number(document.querySelector("#amt").value)
    let us=Bank.authenticateUname(uname,pwd)
    let dataset=Bank.getData()
        if(us==1){
            dataset[uname].balance-=amt
            alert("your account is debited with"+amt+"aval balance"+dataset[uname].balance)

        }
        else if(us==0){
            alert("Incorrect password")
        }
        else if(us==-1){
            alert("no user existed with provided username")
        }
    // let dataset=Bank.getData()
    
    // if (uname in dataset) {
    //     if (dataset[uname].password == pwd) {
    //         if(dataset[uname].balance>=amt){
    //             dataset[uname].balance-=amt
            
    //         alert("your account is debited with"+amt+"aval balance"+dataset[uname].balance)
    //     }
    
    //     else {
    //       alert("insufficient balance")
    //     }

    // }
    // else{
    //     alert("no user existed with provided username")
    // }
}

}
    





//var obj = new Bank()
//obj.getData()

