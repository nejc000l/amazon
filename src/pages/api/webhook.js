import{buffer} from 'micro'
import * as admin from 'firebase-admin'
import { apps } from 'firebase-admin'

const serviceAccount = require('../../../permission.json')
const app = !admin-apps.length ? admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)

}): admin.app()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET
export default async (req,res)=>{
    if(req.method === POST){

    }
}