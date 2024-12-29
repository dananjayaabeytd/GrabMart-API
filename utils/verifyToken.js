import jwt from 'jsonwebtoken';

export const verifyToken = token => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return "Token is Invalid";
    } else {
      return decoded;
    }
  });
};
