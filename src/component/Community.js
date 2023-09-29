import Button from "./Button"

const Community = () => {
    return (
        <section className='community'>
            <h1>OUR COMMUNITY</h1>
            <div className='button flex'>
                <Button text= 'INTERVIEW' color= "transparent" border= "white" margin= "10px"/>
                <Button text= 'ROADMAP' color= "transparent" border= "white" margin= "10px"/>
                <Button text= 'EXHIBATION' color= "transparent" border= "white" margin= "10px"/>
            </div>
            <div className="community_wrapper">
                <article className="community_details flex">
                    <p>2023</p>
                    <h2>BUMP FESTIVALS</h2>
                    <div className="icon flex">
                        <span></span>
                        <h2>PARIS</h2>
                    </div>

                    <div className="icon flex">
                        <span></span>
                        <h2>DESIGN TOOL</h2>
                    </div>
                    <span></span>
                </article>
            </div>
        </section>
    )
}

export default Community
