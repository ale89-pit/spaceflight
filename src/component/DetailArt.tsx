import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Articles} from "../interfaces/interfaceArticle";
import { Container } from 'react-bootstrap';
import {Card} from 'react-bootstrap';



const DetailArt = () => {
    const {idArt} = useParams();
    console.log(idArt)
    const [oneArt,setOneArt] = useState<Articles>()
    const fetchSingleArticle = async ()=>{
        try {
            let resp = await fetch("https://api.spaceflightnewsapi.net/v3/articles/"+idArt)
            if (resp.ok){
                let data = await resp.json()
                setOneArt(data)
                console.log(oneArt)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchSingleArticle()
    },[]) 
    return(
        <Container>
        <Card className='my-3'>
        <Card.Body>
          <Card.Title>
          {oneArt?.title}
          </Card.Title>
          <Card.Text>{oneArt?.summary}</Card.Text>
          <Card.Text>{oneArt?.featured}</Card.Text>
          <Card.Text>{oneArt?.newsSite}</Card.Text>
        </Card.Body>
        <Card.Img className='w-75 mx-auto' variant="bottom" src={oneArt?.imageUrl} />
        <a href={oneArt?.url}>{oneArt?.url}</a>
      </Card>
      </Container>)
}

export default DetailArt