import { checkCookieAuth } from "./utility/middlewarUtility";

export async function middleware(req){
    if(req.nextUrl.pathname.startWith('/dashboard')){
        return checkCookieAuth(req)
    }

}