import { Articles } from "../interfaces/interfaceArticle";
import Card from 'react-bootstrap/Card'
import {useNavigate, useLocation} from 'react-router-dom'
import Link from 'react-router-dom'

interface SingleArt{
    singlArt : Articles
}

const CardArt = (props:SingleArt) =>{
    const navigate = useNavigate()

return( 
    //

<Card className="w-75 mx-auto my-2" onClick={()=> navigate(`/${props.singlArt.id}`)} >
    <Card.Body>
      <Card.Title>
        {props.singlArt.title}
      </Card.Title>
      <Card.Text>{props.singlArt.summary}</Card.Text>
    </Card.Body>
    <Card.Img className="w-100" variant="bottom" src={props.singlArt.imageUrl} />
  </Card>
  
)
}
export default CardArt