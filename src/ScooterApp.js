// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require('./Scooter')
const User = require('./User')


class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
        'Station A': [],
        'Station B': [],
        'Station C': []
    };
    this.registeredUsers = {};
}

registerUser(username, password, age) {
    this.registerUser instanceof User
    if (username instanceof User || age<18) {
        throw new Error('already registered or too young');
    }
    
    else{
        
        const newUser = new User(username, password, age);
        this.registeredUsers[username] = newUser;
        console.log(`User ${username} registered.`);
        return newUser;}
        
        
    }

loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
        throw new Error('Username or password is incorrect.');
    }
    else{
        user.login(password);
}
}

logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
        throw new Error('no such user is logged in.');
    }
    else {
        user.logout();
}
}

createScooter(station) {
    if (!this.stations[station]) {
        throw new Error('no such station');
    }
    else{
        const newScooter = new Scooter(station)
        this.stations[station].push(newScooter)
        console.log(`created new scooter`);

        return newScooter;
}
}

dockScooter(scooter, station) {
    if (!this.stations[station]) {
        throw new Error('no such station.');
    }
    if (this.stations[station].includes(scooter)) {
        throw new Error('scooter already at station.');
    }
    else{
    this.stations[station].push(scooter);
    scooter.dock(station);
}
}

rentScooter(scooter, user) {
    if (!this.stations[user.station].includes(scooter)) {
        throw new Error('no such scooter at station.');
    }
    if (scooter.user) {
        throw new Error('scooter already rented.');
    }
    else {
        scooter.rent(user);
}
}

print() {
    console.log('Registered Users:');
    console.table(this.registeredUsers);
    console.log('Stations:');
    for (const station in this.stations) {
        console.log(`${station}: ${this.stations[station].length} scooter(s)`);
    }
}

}

module.exports = ScooterApp
