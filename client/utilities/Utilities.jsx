
// http://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe

export const controlUsername = (username) => {
  const re = (/^(?=.*[a-z])[0-9a-zA-Z]{2,14}$/);
  return re.test(username);
}
    
export const controlEmail = (email) => {
  const re = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return re.test(email);
}
    
export const controlPassword = (password) => {
  const re = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);
  return re.test(password);
}
    
