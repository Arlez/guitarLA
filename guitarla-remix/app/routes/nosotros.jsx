import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return [
    {title: 'GuitarLA - Nosotros'},
    {description: 'Venta de guitarras, blog de musica'}
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading ">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='imagen nosotros' />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet non justo eu lobortis. Vivamus vestibulum lorem sit amet massa gravida, ac commodo leo vestibulum. Pellentesque condimentum ipsum eget lacus cursus pretium. Etiam pellentesque molestie augue vitae laoreet. Nullam ut pharetra justo. Curabitur sit amet accumsan ante. Ut pharetra est ut odio venenatis luctus..
          </p>
          <p>
            Integer molestie nec mauris ultricies pharetra. Nulla semper, nulla eget mollis pellentesque, dui diam sodales nulla, facilisis laoreet purus sem in justo. Nulla quis nunc elit. Ut ac ex quis turpis viverra scelerisque id et arcu. Aenean sit amet ornare lectus. 
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros