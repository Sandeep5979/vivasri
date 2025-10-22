import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let tokenHeader = req.headers["authorization"];

  if (!tokenHeader) {
    return res.status(403).send({ message: "No token provided!" });
  }

  let token = tokenHeader?.split(" ")[1]; 

  /*
  const tokenNew = jwt.sign(
    { id: 1 },
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400 * 3,
    }
  );

  return res.status(200).send({ token: tokenNew });
  */

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

export const authJwt = {
  verifyToken,
};
