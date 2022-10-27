import 'dotenv/config';

export interface IJwt {
  secret: string;
  ttl: string;
}

export default {
  secret: process.env.JWT_SECRET,
  ttl: process.env.JWT_TTL,
};
