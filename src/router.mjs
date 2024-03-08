import { Router } from "express";
import { usersData } from "./usersData.mjs";

const router = Router();

router.get("/api/users", (request, response) => {
  console.log(request.headers.cookie);
  console.log(request.cookies);
  // if (request.cookies.salutation && request.cookies.salutation === "Hola")
  //beginnig of authentification if salutation is equal to 'Hola'
  //then you can access usersData
  if (
    request.signedCookies.salutation &&
    request.signedCookies.salutation === "Hola"
  )
    //if you are using signedCookies then isntead of cookies you should use signedCookies, like above.
    return response.send(usersData);
  return response.send({ msg: "You need the correct cookie" });
});

export default router;
