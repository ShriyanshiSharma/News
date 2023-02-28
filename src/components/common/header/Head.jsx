import React from "react";
import logo from '../../assets/xyz-logo-1.png'
// import ad from '../../assets/xyz.png'


const Head = () => {
    return(
        <>
        <section className='head'>
        <div className='container flexSBC paddingTB'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='ad'>
            <img src="https://vignette.wikia.nocookie.net/create-logopedia/images/3/3a/XYZ_Logo.png/revision/latest/scale-to-width-down/640?cb=20160305041057" alt='ad' width="200px" />
          </div>
        </div>
      </section>
        </>
    );
}

export default Head;