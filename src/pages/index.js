import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import { v4 as uuidv4 } from 'uuid';

import '../styles/styles.css'

const Index = () =>{
    const images = useStaticQuery(graphql`
    query MyQuery {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid(maxHeight: 240, maxWidth: 480) {
                    ...GatsbyImageSharpFluid
                }
              }
              relativePath
            }
          }
        }
      }
      
    `)
    return(
        <div>
        <h1 className='text-6xl shadow'>Galeria de imagens</h1>
        <div className='grid max-w-4xl grid-cols-2 gap-4 mx-auto p-6'>
        {images.allFile.edges.map(image => {
          console.log(image)
            return (
              <div className='shadow rounded'>
                <Image className='rounded-t' key={uuidv4()} fluid={image.node.childImageSharp.fluid}/>
                <p className='p-6'>{image.node.relativePath}</p>
              </div>
            )
        })}
        </div>
        </div>
    )
}

export default Index