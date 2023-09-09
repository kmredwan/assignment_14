import { TokenCookie } from "@/app/utility/TokenCookis";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res,req){
    const JSON = await req.json()

    let email= JSON['email']
    let password  = JSON['password']
    // chaking database 

    if(email === 'example@gmail.com' && password === '123'){
        let cookie = await TokenCookie(email) ;
        return NextResponse.json(
            {status :true , msg:"LogIn Success"},
            {status :200 ,headers:cookie}
        )
    }else{
        return NextResponse.json(
            {status :false , msg:"LogIn Fail"},
            
        )
    }

}

// Log out

export async function GET(req , res){
   cookies().delete('token') 
   return NextResponse.json(
    {status :true , msg:"LogOut Successfully"},
    
)
}