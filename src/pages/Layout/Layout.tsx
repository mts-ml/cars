import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"


export const Layout: React.FC = () => {
   const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
      const savedTheme = localStorage.getItem("isDarkTheme")

      return savedTheme !== null ? JSON.parse(savedTheme) as boolean : false
   })

   function handleThemeSwitcher(): void {
      setIsDarkTheme(previousTheme => !previousTheme)
   }

   useEffect(() => {
      document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light")

      localStorage.setItem("carsIsDarkTheme", JSON.stringify(isDarkTheme))
   }, [isDarkTheme])


   return (
      <>
         <Header handleThemeSwitcher={handleThemeSwitcher} isDarkTheme={isDarkTheme} />

         <Outlet />
      </>
   )
}
