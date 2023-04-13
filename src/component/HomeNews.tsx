import {Articles } from '../interfaces/interfaceArticle'
import {useState, useEffect} from 'react'
import Container  from 'react-bootstrap/Container'
import CardArt from './CardArt'


const HomeNews = () => {
    const [art,setArt] = useState<Articles[]>([])

    const fetchArticle = async ()=>{
        try {
            let resp = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (resp.ok){
                let data = await resp.json()
                setArt(data)
                console.log(art)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchArticle()
    },[])

    return ( <Container>
      {  art.map(singlArt =>(
     <CardArt key={singlArt.id} singlArt={singlArt} />))}
    </Container>
        
         )
      
    
}

export default HomeNews