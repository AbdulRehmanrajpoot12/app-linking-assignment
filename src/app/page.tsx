import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/home" target="_blank"><h2>Home</h2></Link>
          </li>
          <li>
            <Link href="/about" target="_blank"><h2>About</h2></Link>
          </li>
          <li>
            <Link href="/contact" target="_blank"><h2>Contact</h2></Link>
          </li>
          <li>
            <Link href="/service" target="_blank"><h2>Services</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default MainPage;