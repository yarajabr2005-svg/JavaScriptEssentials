let userRole = "admin";
let accessLevel;

if(userRole==="admin"){
    accessLevel="Full access granted";
} else if(userRole==="manager"){
        accessLevel="Limited access granted";
    } else {
        accessLevel="No access granted";
    }

console.log("Access Level:", accessLevel);

//---

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){ // isLoggedIn === true
    if(userRole==="admin"){
        userMessage="Welcome, admin!";
    } else{
        userMessage = "Welcome, User!";
    }   
} else { // isLoggedIn === false
        userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

//---

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";
}

console.log("User Category:", userCategory);

//---

let isAuthenticated = true;

let authenticationStatus= isAuthenticated?"Authenticated": "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

//---

userRole="Enrolled Member";
let dietaryService;

switch(userRole){
    case "Employee":
        dietaryService="Access to Dietary Services.";
        break;
    case "Enrolled Member":
        dietaryService="Access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        dietaryService="Partial access to Dietary Services.";
        break;
    default:
        dietaryService="enroll or at least subscribe first to avail this facility.";

}

console.log("Dietary Service:", dietaryService);