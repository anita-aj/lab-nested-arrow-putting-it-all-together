function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const attemptLogin = (passwordAttempt) => {
    // Check if the account is locked
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }
    // Check if the password attempt is correct
   if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }
// Increment the attempt count and return a failed login message
    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  }
  return attemptLogin;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};