class Auth {

    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        console.log(this.authenticated);
        localStorage.setItem('token', true);
    }

    logout(cb) {

        this.authenticated = false;
        localStorage.removeItem('token');

    }

    isAuthenticated() {
        return this.authenticated;
    }

}



export default new Auth();








