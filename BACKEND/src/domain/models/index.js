import Users from "./Users.js";
import Posts from "./Posts.js";

Posts.belongsTo(Users, {
   foreignKey: "userID",
});
Users.hasMany(Posts, {
   foreignKey: "userID",
});

export { Users, Posts };
