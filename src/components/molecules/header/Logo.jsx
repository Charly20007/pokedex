import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="flex">
        <Link to="/">
            <img 
                src="https://cdn.worldvectorlogo.com/logos/svg-6.svg" 
                alt="Logo Pokemon" 
                width={50}
                height={50}
            />
        </Link>
    </div>
  )
}

export default Logo