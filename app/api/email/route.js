import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// export  async function GET(res,req){
//     const {searchParams} = new URL(req.url)
//     let email = searchParams.get('email')
//     return NextResponse.json({msg:email})
// }

export const GET = async (req,res) =>{
    const {searchParams} = new URL(req.url)

    let toEmail = searchParams.get('email')

    try{
        const Transport = nodemailer.createTransport({
            host : "mail.teamrabbil.com",
            port : 25 ,
            secure : false ,
            auth : {
                user : "info@teamrabbil.com",
                pass : "~sR4[bhaC[Qs"

            },
            tls : {rejectUnauthorized:false}

        }) ;


        const emailTemplate= {
            form : "info@teamrabbil.com",
            to : toEmail ,
            subject : "Send to tasting." ,
            text : "Heoooo! I got it ♥ "

        } ;

        Transport.sendMail(emailTemplate) ;
        return NextResponse.json({
            msg : "Successful . Sent Mail" 
        })

    }catch{
        return NextResponse.json({
            msg: "Fail . Email not Sent ."
        } , {status : 401})
    };
}