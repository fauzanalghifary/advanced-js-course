class UserProfile {
    constructor(username, email, birthdate) {
        this.username = username
        this.email = email
        this.birthdate = birthdate
    }

    get username() {
        return this._username
    }

    set username(username) {
        if (typeof username !== 'string' || username.trim() === '') {
            throw new Error('Invalid username.')
        }
        this._username = username
    }

    get email() {
        return this._email
    }

    set email(email) {
        if (typeof email !== 'string' || !email.includes('@')) {
            throw new Error('Invalid email.')
        }
        this._email = email
    }

    get birthdate() {
        return this._birthdate
    }

    set birthdate(birthdate) {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/
        if (!datePattern.test(birthdate)) {
            throw new Error('Invalid birthdate.')
        }
        this._birthdate = birthdate
    }
}