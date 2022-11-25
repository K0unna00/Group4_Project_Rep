import './Hero.scss'
import HeroTitle from './HeroTitle.png'
import HeroImage from './HeroImage.png'


export const Hero = () =>{
    return(
        <section className="hero">
            <div className="container">
                <div className="left">
                    <div className="title">
                        <img src={HeroTitle} alt="" />
                    </div>
                    <div className="text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                    <button>
                        Contact Us
                    </button>
                </div>
                <div className="right">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
            <ul className="media">
                <li className="active"><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-facebook-f"></i></li>
            </ul>
        </section>
    )
} 