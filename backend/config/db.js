import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv'

dotenv.config()

//create a SQL connection 
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`)
//this