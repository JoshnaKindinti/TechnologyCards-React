// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`card-block ${className}`}>
      <div>
        <h1 className="titleCard">{title}</h1>
        <p className="descriptionCard">{description}</p>
        <img src={imgUrl} alt={title} className="imgCard" />
      </div>
    </li>
  )
}
export default CardItem
