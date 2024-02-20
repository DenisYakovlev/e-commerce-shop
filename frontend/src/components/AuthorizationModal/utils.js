const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailIsValid = (email) => {
    return emailRegex.test(email)
}