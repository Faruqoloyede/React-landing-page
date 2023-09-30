import Button from './Button';
import s1 from '../img/s1.jpg';
import s2 from '../img/s2.jpg';
import s3 from '../img/s3.jpg';
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHandshakeAltSlash } from "react-icons/fa";
const Explore = () => {
    return (
        <section className="explore" id='explore'>
            <div className="box grid">
                <article className="explore_details">
                    <div className="data">
                        <div className="top flex">
                            <div className="top_data">
                                <h2>01</h2>
                                <p>VECTOR DESIGN</p>
                            </div>
                            <FaHandHoldingUsd style={{ color: 'white', fontSize: '50px', borderRadius: '10px', border: '1px solid white', padding: '10px' }} />
                        </div>
                        <img src={s1} />
                        <div className='inner_data'>
                            <h1>NFT CAT VECTOR FACE</h1>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT, SED DO EIUSMOD TEMPOR</p>
                        </div>
                        <Button text= 'learn more' color= "#e5145b" border= "transparent"/>
                    </div>
                </article>

                <article className="explore_details">
                    <div className="data">
                        <div className="top flex">
                            <div className="top_data">
                                <h2>02</h2>
                                <p>BRANDING VECTOR</p>
                            </div>
                            <FaClock style={{ color: 'white', fontSize: '50px', borderRadius: '10px', border: '1px solid white', padding: '10px' }} />
                        </div>
                        <img src={s2} />
                        <div className='inner_data'>
                            <h1>DIAMOND COWBOY</h1>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT, SED DO EIUSMOD TEMPOR</p>
                        </div>
                        <Button text= 'learn more' color= "#e5145b" border= "transparent"/>
                    </div>
                </article>

                <article className="explore_details">
                    <div className="data">
                        <div className="top flex">
                            <div className="top_data">
                                <h2>03</h2>
                                <p>IDENTITY VECTOR</p>
                            </div>
                            <FaHandshakeAltSlash style={{ color: 'white', fontSize: '50px', borderRadius: '10px', border: '1px solid white', padding: '10px' }} />
                        </div>
                        <img src={s3} />
                        <div className='inner_data'>
                            <h1>GIRL PLAYING MOBILECE</h1>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT, SED DO EIUSMOD TEMPOR</p>
                        </div>
                        <Button text= 'learn more' color= "#e5145b" border= "transparent"/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Explore
