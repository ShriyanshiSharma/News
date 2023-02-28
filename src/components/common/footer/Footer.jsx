import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Latest and fresh news available only a click away</p>
            <i className='fa fa-envelope'></i>
            <span> abc@xyz.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 2030405</span>
          </div>
          <div className='box'>
            <h3>Bitcoin</h3>
            <div className='item'>
              <img src='https://www.quotecolo.com/wp-content/uploads/2020/05/bitcoin-cloud-mining.jpg' alt='' />
              <p>Bitcoin Miners</p>
            </div>
            <div className='item'>
              <img src='https://cdn.coingape.com/wp-content/uploads/2022/09/20182530/MicroStrategy1.jpg' alt='' />
              <p>Microstrategy Buys More Bitcoin</p>
            </div>
          </div>
          <div className='box'>
            <h3>Bitcoin</h3>
            <div className='item'>
              <img src='https://coinjournal.net/wp-content/uploads/2020/10/03_Image-of-Bitcoin-and-PayPal.jpg' alt='' />
              <p>PayPal transfer of digital currencies to external wallets</p>
            </div>
            <div className='item'>
              <img src='https://cdn.coingape.com/wp-content/uploads/2022/12/01093307/italy-cryptocurrency-tax.jpeg' alt='' />
              <p>Italian Parliament Approves 26% Crypto-Gains Tax</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Bitcoin</span> <label>(5)</label>
              </li>
              <li>
                <span>Marketing</span> <label>(6)</label>
              </li>
              <li>
                <span>Stock</span> <label>(7)</label>
              </li>
              <li>
                <span>Trading</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer