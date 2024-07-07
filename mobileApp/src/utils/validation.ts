const validateUsername = (username: string): boolean => {
    //validation logic for username
    return username.length >= 3;
  };
  
  const validatePassword = (password: string): boolean => {
    // validation logic for password
    return password.length >= 6;
  };
  
  export { validateUsername, validatePassword };
  