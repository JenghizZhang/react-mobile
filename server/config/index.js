/*
  服务器和数据库的配置
 */
const isDev = process.env.NODE_ENV === "development";

// mongodb的配置
const MONGO_CONFIG = {
  port: 27017,
  host: "localhost",
  database: "react_mobile",
};
// 服务器配置
let SERVER_CONFIG = {
  port: 80,
  host: "0.0.0.0",
};

if (isDev) {
  SERVER_CONFIG = {
    port: 5000,
    host: "localhost",
  };
}

//github授权-网站标识
const CLIENT_ID = "4952b9040ab15a9ca71b";
//github授权-网站机密码
const CLIENT_SECRET = "6e018c2d8203d3688368b74969e327485fc56e8d";
//密码加盐
const SECRET = "A0d2afW6Ysa";

module.exports = {
  MONGO_CONFIG,
  SERVER_CONFIG,
  SECRET,
  CLIENT_ID,
  CLIENT_SECRET,
};
