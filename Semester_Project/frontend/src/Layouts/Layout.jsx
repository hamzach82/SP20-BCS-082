import Navbar from "./Navbar"
import SideBar from "./SideBar"

const Layout = (props) => {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <SideBar/>
        <main className="m-5 relative">{props.children}</main>
      </div>
    </>
  )
}

export default Layout