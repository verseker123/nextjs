import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header
  className="g s r vd ya cj"
>
  <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
    <div className="vd to/4 tc wf yf">
      <a href="index.html">
        <Image className="om" src="images/logotrilce.png" alt="Logo Light" />
        <Image className="xc nm" src="images/logo-dark.svg" alt="Logo Dark" />
      </a>

      <button className="po rc">
        <span className="rc i pf re pd">
          <span className="du-block h q vd yc">
            <span className="rc i r s eh um tg te rd eb ml jl dl" ></span>
            <span className="rc i r s eh um tg te rd eb ml jl fl" ></span>
            <span className="rc i r s eh um tg te rd eb ml jl gl" ></span>
          </span>
          <span className="du-block h q vd yc lf">
            <span className="rc eh um tg ml jl el h na r ve yc" ></span>
            

            <span className="rc eh um tg ml jl qr h s pa vd rd" ></span>
          </span>
        </span>
      </button>
    </div>

    <div
      className="vd wo/4 sd qo f ho oo wf yf"
    >
    

    <nav>
        <ul className="tc _o sf yo cg ep">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="index.html#features" className="xl">Primaria</a></li>
          <li className="c i" x-data="{ dropdown: false }">
            <a
              href="#"
              className="xl tc wf yf bg"
              
            >
              Secundaria

              <svg
              
              className="th mm we fd pf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </a>

            <ul className="a" >
              <li><a href="blog-grid.html" >Blog Grid</a></li>
              <li><a href="blog-single.html" className="xl" >Blog Single</a></li>
              <li><a href="signin.html" className="xl" >Sign In</a></li>
              <li><a href="signup.html" className="xl" >Sign Up</a></li>
              <li><a href="404.html" className="xl" >404</a></li>
            </ul>
          </li>
          <li><a href="index.html#support" className="xl">Ayuda</a></li>
        </ul>
      </nav>
       
    </div>
  </div>
</header>
     <main>

<section className="gj do ir hj sp jr i pg">
  <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
    <Image src="images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
    <Image src="images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
    <Image src="images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
    <Image src="images/shape-04.svg" alt="shape" className="h q r" />
    <Image src="images/herp.png" alt="Woman" className="h q r ua" />
  </div>

  <div className="bb ze ki xn 2xl:ud-px-0">
    <div className="tc _o">
      <div className="animate_left jn/2">
        <h1 className="fk vj zp or kk wm wb">TRILCE: Portal de Tareas.</h1>
        <p className="fq"  style={{ textAlign: 'justify' }}>
        Educación de excelencia, forjando el futuro juntos.
        Nuestro enfoque no solo es académico, sino también en el crecimiento personal y la adquisición de habilidades que serán fundamentales en la vida de nuestros estudiantes. En el Colegio Trilce, fomentamos la curiosidad, la creatividad y el espíritu crítico, todo en un entorno de apoyo y respeto mutuo.

        </p>

        <div className="tc tf yo zf mb">
          <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l"
            >Empieza Ahora </a>

          <span className="tc sf">
            <a href="#" className="inline-block ek xj kk wm"> Lamanos (0123) 456 – 789 </a>
            <span className="inline-block">Para cualquier pregunta o inquietud</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

</main>
    </>
  
  
  
  )
}
