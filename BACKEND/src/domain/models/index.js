import Users from "./Users";
import Posts from "./Posts";

Posts.belongsTo(Users, {
   foreignKey: "userID",
});
Users.hasMany(Posts, {
   foreignKey: "userID",
});

export { Users, Posts };
