import Image from 'next/image'

export default function Home() {
  return (
   <main>
      <section className="gj do ir hj sp jr i pg">
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <Image src="images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
          <Image src="images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
          <Image src="images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
          <Image src="images/shape-04.svg" alt="shape" className="h q r" />
          <Image src="images/hero.png" alt="Woman" className="h q r ua" />
        </div>

        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb">We specialize in UI/UX, Web Development, Digital Marketing.</h1>
              <p className="fq">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
              </p>

              <div className="tc tf yo zf mb">
                <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l"
                  >Get Started Now </a>

                <span className="tc sf">
                  <a href="#" className="inline-block ek xj kk wm"> Call us (0123) 456 – 789 </a>
                  <span className="inline-block">For any question or concern</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

   </main>
  
  
  )
}
