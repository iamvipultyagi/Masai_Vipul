let user1 = { name: "Alice", role: "admin", active: true };
let user2 = { name: "Bob", role: "user", active: true };
let user3 = { name: "Vipul", role: "guest", active: true };

function generateMessage(user) {
    return user.role === "admin"  ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked")
         : user.role === "user"   ? (user.active ? "User Access Granted!" : "User Access Revoked")
         : "Access Denied";
}
  
  console.log(generateMessage(user1));
