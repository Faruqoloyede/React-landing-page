import Button from './Button'
const Hero = () => {
  return (
    <section className="hero">
      <h2>nft marketplace</h2>
      <div className="hero_details">
            <div className="hero_content">
                <h1>LARGE <br/><span className='pink'>CoLLECTION</span> <br/><small>OF</small><span className='pink'>EXCELLENT</span> <br/><span className='curve'>Nft Arts</span></h1>
                <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT,<br/>
                SED A MODO VIVERRA MAECENAS ACCUMSAN LAC ACILISIS.</p>
            </div>
            <div className='flex'>
            <Button text= 'sign up' color= "#e5145b" border= "transparent"/>
            <Button text= 'Log in' color= "transparent" border= "white" margin= "10px"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
