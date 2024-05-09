// require the User and Scooter classes - see where they can be used in ScooterApp.js

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
    if (this.registeredUsers[username]) {
        throw new Error('User already registered.');
    }
    if (age < 18) {
        throw new Error('User is too young to register.');
    }
    const newUser = new User(username, password, age);
    this.registeredUsers[username] = newUser;
    console.log(`User ${username} registered.`);
    return newUser;
}

loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
        throw new Error('Username or password is incorrect.');
    }
    user.login(password);
}

logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
        throw new Error('No such user is logged in.');
    }
    user.logout();
}

createScooter(station) {
    if (!this.stations[station]) {
        throw new Error('No such station.');
    }
    const newScooter = new Scooter(station);
    this.stations[station].push(newScooter);
    console.log(`Created new scooter at ${station}.`);
    return newScooter;
}

dockScooter(scooter, station) {
    if (!this.stations[station]) {
        throw new Error('No such station.');
    }
    if (this.stations[station].includes(scooter)) {
        throw new Error('Scooter already at station.');
    }
    this.stations[station].push(scooter);
    scooter.dock(station);
}

rentScooter(scooter, user) {
    if (!this.stations[user.station].includes(scooter)) {
        throw new Error('No such scooter at station.');
    }
    if (scooter.user) {
        throw new Error('Scooter already rented.');
    }
    scooter.rent(user);
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
