import { stripe } from "@/utils/stripe"
import {revalidatePath} from "next/cache"

export async function POST(req, res){

     const body = await req.text()
     const sig = req.headers.get('stripe-signature')
     const webhookscreet = process.env.WEBHOOK_SECRET2
     let event;

     try {
       event = stripe.webhooks.constructEvent(body, sig, webhookscreet);
     }
     catch (err) {
       console.log('error message', err.message)
       return Response.json({error:`webhook error:${err.message}`},{status:400})
     }
     if (event.type=="product.created" || event.type=="product.updated"  ){
          console.log('jugnu', event.type);
          revalidatePath('/products', 'page');
          revalidatePath('/products;/[slug]', 'page');
          revalidatePath('/', 'page');
     } else {
          console.log(`unhandeled event type ${event.type}`);
     } return Response.json({message:'success'})
  
}
//      // eslint-disable-next-line @typescript-eslint/no-unused-vars
//      res.status(200).json({ message: 'Hello, Next.js!' }); 
//      // eslint-disable-next-line @typescript-eslint/no-unused-vars
//  const body = await req.text()
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//  const sig = req.header.get('stripe-signature');
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//  const webhookSecret = process.env.WEBHOOK_SECRET

// }