function createNewUser() { 
    let firstName=prompt('enter firstname');
    let lastName=prompt('enter lastname');
    return{
        firstName: firstName,
        lastName: lastName,
        getLogin(){
            return this.firstName.charAt(0).toLowerCase()+this.lastName.toLowerCase();

        }
    }
}
let newUser=createNewUser();
console.log(newUser.getLogin());
