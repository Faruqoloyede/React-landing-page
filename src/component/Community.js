import Button from "./Button"
import { FaLocationArrow } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Community = () => {
    return (
        <section className='community' id="community">
            <h1>OUR COMMUNITY</h1>
            <div className='button flex'>
                <Button text= 'INTERVIEW' color= "transparent" border= "white" margin= "10px"/>
                <Button text= 'ROADMAP' color= "transparent" border= "white" margin= "10px"/>
                <Button text= 'EXHIBATION' color= "transparent" border= "white" margin= "10px"/>
            </div>
            <div className="community_wrapper">
                <article className="community_details flex">
                    <h3>2023</h3>
                    <h2>BUMP FESTIVALS</h2>
                    <div className="icon flex">
                        <FaLocationArrow style={{fontSize: '20px'}}/>
                        <h2>PARIS</h2>
                    </div>

                    <div className="icon flex">
                        <FaAddressCard style={{fontSize: '20px'}}/>
                        <h2>DESIGN TOOL</h2>
                    </div>
                    <FaAngleRight style={{fontSize: '20px'}}/>
                </article>

                <article className="community_details flex">
                    <h3>2010</h3>
                    <h2>FCPA CREATIVE</h2>
                    <div className="icon flex">
                        <FaLocationArrow style={{fontSize: '20px'}}/>
                        <h2>USA</h2>
                    </div>

                    <div className="icon flex">
                    <FaAddressCard style={{fontSize: '20px'}}/>
                        <h2>CREATIVELY</h2>
                    </div>
                    <FaAngleRight style={{fontSize: '20px'}}/>
                </article>

                <article className="community_details flex">
                    <h3>2018</h3>
                    <h2>OFF FESTIVALS</h2>
                    <div className="icon flex">
                        <FaLocationArrow style={{fontSize: '20px'}}/>
                        <h2>LONDON</h2>
                    </div>

                    <div className="icon flex">
                    <FaAddressCard style={{fontSize: '20px'}}/>
                        <h2>NEW VISIONS</h2>
                    </div>
                    <FaAngleRight style={{fontSize: '20px'}}/>
                </article>

                <article className="community_details flex">
                    <h3>2005</h3>
                    <h2>OPEN STUDIOS</h2>
                    <div className="icon flex">
                        <FaLocationArrow style={{fontSize: '20px'}}/>
                        <h2>MEXICO</h2>
                    </div>

                    <div className="icon flex">
                    <FaAddressCard style={{fontSize: '20px'}}/>
                        <h2>TREND & HYPE</h2>
                    </div>
                    <FaAngleRight style={{fontSize: '20px'}}/>
                </article>


            </div>
        </section>
    )
}

export default Community
