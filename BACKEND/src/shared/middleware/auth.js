import { expressjwt } from "express-jwt";
import secret from "../../config/secret";

export default expressjwt({
   secret: secret.key,
   algorithms: ["HS256"],
});
