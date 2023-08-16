import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '../utils/helper'
import styles from '~/styles/blog.css'

export function meta(){
    return [
      {
        title: 'GuitarLA - Nuestro Blog'
      }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post no encontrado'
        })
    }
    return post
}
export default function Post() {
    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes
  return (
    <article className='contenedor post mt-3'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`imagen ${titulo}`}/>
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>            
        </div>
    </article>
  )
}
