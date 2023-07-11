import { IConstant } from "../interfaces/constant.interface";
import { Secret } from "jsonwebtoken";
import { config } from "dotenv";

config();

export const constant: IConstant = {
  expiresIn: "2h",
  refreshIn: "3d",
  secretKey: process.env.SECRET_KEY as string,
  adminAvatar: process.env.ADMIN_AVATAR as string,
  accessToken: process.env.ACCESS_TOKEN as Secret,  
  refreshToken: process.env.REFRESH_TOKEN as Secret,
  cipherSecretKey: process.env.CIPHER_SECRET_KEY as string,
  cryptoSecretKey: process.env.CRYPTO_SECRET_KEY as string,
  FLWPaymentEndpoint: process.env.FLWPAYMENT_ENDPOINT as string,
  FLWSECKTest: process.env.FLWSECK_TEST as string,
  FLWPUBKTest: process.env.FLWPUBK_TEST as string,
  logoLink: process.env.UPLOADED_LOGO as string
};
