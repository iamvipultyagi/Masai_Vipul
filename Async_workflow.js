function registerUser(callback) {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("User registered successfully.");
        callback(null); 
      } else {
        callback("Registration failed", null); 
      }
    }, 1000);
  }
  
  function sendVerification(message, callback) {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("Verification email sent.");
        callback(null); 
      } else {
        callback("Failed to send verification email", null); 
      }
    }, 1000);
  }
  
  function loginUser(message, callback) {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("User logged in successfully.");
        callback(null); 
      } else {
        callback("Login failed", null); 
      }
    }, 1000);
  }
  
  function displayWelcomeMessage(message) {
    console.log("Welcome to the application!");
  }
  
  registerUser((err, message) => {
    if (err) {
      console.error(err);
    } else {
      sendVerification(message, (err, message) => {
        if (err) {
          console.error(err);
        } else {
          loginUser(message, (err, message) => {
            if (err) {
              console.error(err);
            } else {
              displayWelcomeMessage(message);
            }
          });
        }
      });
    }
  });