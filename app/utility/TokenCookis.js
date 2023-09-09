import { createToken } from "./JWThalper";


export async function TokenCookie(email){
  let token = await createToken(email)
  return {'set-cookie' : `token = ${token} ; max-age: 43200 ; secure ; httpOnly; path=/ ; sameSite=strict`}

}