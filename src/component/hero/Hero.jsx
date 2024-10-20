import './hero.css'
import Quote from '../../assets/quote-up.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <header className='flex items-center pt-10 justify-center gap-6'>
            <img src="https://github.com/Elite-tch/NkemPerpee-Project/blob/main/src/assets/hand.gif?raw=true" alt="wave" className='hand' />
       <h1> I’m <span className="orange-text">Nkem</span>, the careerGirl Product Designer
        </h1></header>

        <div className="quote">
      <div className="top"><img src={Quote} alt="text" />
      <p>Nkem is a curious Product Designer always ready and open to challenges with a
         demonstrated history of success. Excellent at communication
          and hove developed proficiency
         in strategy, UX research and experience design.</p>
      </div>

      <div className="bottom"><h2><span className='big-text'>2+</span> <span className='years'>Years <span className='small-text'>Experience</span></span></h2></div>
    </div>
    <div className="semi-circle"></div>
    <div className="portrait"><img src="https://github.com/Elite-tch/NkemPerpee-Project/blob/main/src/assets/image1.png?raw=true" alt="portrait" /></div>
    </div>
    

  )
}
