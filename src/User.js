class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }
  login(password){
    if(this.user.find(user => user.password === password)){
        this.loggedIn = true
    }
    else{
      throw Error ('incorrect password')
    }

  }

  logout(){
    this.loggedIn = false

  }
  
}

module.exports = User
