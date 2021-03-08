import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import { v4 as uuidv4 } from 'uuid';

const Index = () =>{
    const images = useStaticQuery(graphql`
    query MyQuery {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return(
        <div>
        <h1>Galeria de imagens</h1>
        {images.allFile.edges.map(image => {
            return <Image key={uuidv4()} fluid={image.node.childImageSharp.fluid}/>
        })}
        </div>
    )
}

export default Index