function AboutMe() {
    return (
        <div className="homeimg_description">
            <div className="home_des">
                <section className="greet">
                    <h1>About me</h1>
                </section>
                <section className="About">
                    <p> I'm a passionate <b>AI engineer</b> who is a student and building  project's.</p>
                </section>
            </div>
            <div className="home_img">
                <img src="https://help.rapid7.com/insightidr/content/resources/images/json/nested-json.png" alt="Image to be fitted"/>
            </div>
        </div>
    );
}

// function Projects(){
//     return(

//     ); 
// }

export default function Main() {
    return (
        <>
            <AboutMe />
        </>
    );
}