import { Link } from 'react-router-dom';

export const Gallery = (props) => {
  const linkStyle = {
    textAlign: 'left',
    fontWeight:"bold",
    margin: "1rem",
    textDecoration: "none",
    color: 'red',
    fontSize:"2.5rem"

  };
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Interior Gallery</h2>
          <p>
            Our Collection
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    //href='/g1'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <Link to="/g1"  style={linkStyle} >ELURU</Link>
       
                    </div>
                    <img
                      src='img/eluru/a18.jpeg'

                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='/g2'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src='img/portfolio/image_2.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='/g3'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/image_3.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div>
         </div>
          </div>
        </div>
      </div>
      <Link to="/interior_gallery" style={linkStyle}>View all Projects --{'>'} </Link>
    </div>
  )
}
