import { expressjwt } from "express-jwt";
import secret from "../../config/secret.js";

export default expressjwt({
   secret: secret.key,
   algorithms: ["HS256"],
});
