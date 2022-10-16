// import { Children } from "react"

function Card({Children, reverse}) {
  return (
    <div className= { `card ${reverse && 'reverse'}`}>
        {Children}
    </div>
  )
}

export default Card