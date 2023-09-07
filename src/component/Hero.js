import hero from '../img/hero.jpg'
const Hero = () => {
  return (
    <section className="hero">
      <h2>nft marketplace</h2>
      <div className="hero_details grid">
            <div className="hero_content">
                <h1>LARGE <br/>CoLLECTION <br/><small>OF</small>EXCELLENT <span>Nft Arts</span></h1>
                <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT,
                SED A MODO VIVERRA MAECENAS ACCUMSAN LAC ACILISIS.</p>
            </div>
            <img src={hero} />
        </div>
    </section>
  )
}

export default Hero
