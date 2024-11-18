import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = (({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(!isLoggedIn)
  const logout = () => setLoggedIn(!isLoggedIn)

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  )
})

// Passing ke elemet atau komponen yang dibawahnya parent komponen

{/* <MyGallery/> */}



// function MyGallery(){
//   const data = [{
//     name: Haikal,
//     imageUrl: https://google.com/aaadfds,
//     alt: foto haikal
//   }]
//   return (
//     <>
//       <MyProfile  profile={data}/>
//     </>
//   )
// }
// function MyProfile({profile}){
//   return (
//     <>
//       <MyPhoto imageUrl={profile.imageUrl} alt={profile.alt} />
//     </>
//   )
// }
// function MyPhoto({imageUrl, alt}){
//   return (
//     <>
//      <img src={imageUrl} alt={alt} />
//     </>
//   )
// }