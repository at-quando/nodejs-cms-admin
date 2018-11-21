const Joi = require('joi');
const jwtConfig = require('./jwt');
const dbConfig = require('./db');
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'staging']).default('development'),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required().description('DATABASE_URL is required.'),
  JWT_ISSUER: Joi.string().required().description('JWT_ISSUER is required.'),
  JWT_AUDIENCE: Joi.string().required().description('JWT_AUDIENCE is required.'),
  JWT_SECRET: Joi.string().required().description('JWT_SECRET is required.')
}).unknown().required();

const {
  error,
  value: envVars
} = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
jwtConfig.issuer = envVars.JWT_ISSUER;
jwtConfig.audience = envVars.JWT_AUDIENCE;
jwtConfig.secret = envVars.JWT_SECRET;

dbConfig.url = envVars.DATABASE_URL;

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db: dbConfig,
  jwt: jwtConfig
};
