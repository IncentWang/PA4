module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "incent",
  DB: "pa4",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
