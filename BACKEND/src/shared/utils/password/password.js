import bcrypt from "bcrypt";

const salts = 10;

export function hashPassword(password) {
   return bcrypt.hashSync(password, salts);
}

export function isPasswordMatch(password, hash) {
   return bcrypt.compareSync(password, hash);
}
