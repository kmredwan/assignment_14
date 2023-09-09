import { NextResponse } from "next/server";
import { verifyToken } from "./JWThalper";

export async function checkCookieAuth(req){
try{

    let token = req.cookies.get('token')
    let payload= await verifyToken(token)
    const requestHeader= new Headers(req.headers)
    requestHeader.set('email' , payload['email'])
    return NextResponse.next({
        request :{headers:requestHeader}
    })

}catch{
    return NextResponse.redirect(new URL('/login' ,req.url))
}

// try{
//     const requestHeader= new Headers(req.headers)
//     let token = requestHeader.get('token')
//     let payload = await verifyToken(token['value'])
//     requestHeader.set('email',payload['email'])
//     return NextResponse.next({
//         request : {headers:requestHeader}
//     })

// }catch(e){
//     return NextResponse.redirect(new URL('/login' ,req.url))
// }


}