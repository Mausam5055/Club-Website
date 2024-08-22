import Image from 'next/image'
import React from 'react'
import './newcomp.css'

export default function NewComp() {
  return (
   <>
     <div className="progress-wrapper">
      <div className="progress-line-wrapper">
        <span className="progress-line" id="progress-bar"></span>
      </div>
  </div>
  <div className="arrow">
    <div className="arrow-Image-wrapper">
      <Image src="https://www.yudiz.com/codepen/gsap-slider/left-arrow.png" alt="arrow" className="Image-fluid dark-arrow" width={1400 } height={1400}/>
    </div>
  </div>
  <header>
    <div className="header-inner">
      <a href="index.html" className="logo">Tior</a>
      <ul className="nav-links">
        <li><a href="#"> home
          </a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </div>
  </header>

  <div className="slider">
    <div className="content-slider">
      <ul>
        <li className="active">
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kwon nara</h1>
              <h1>kwon nara</h1>
              <h1 className="t-stroke italic">kwon nara</h1>
              <h1>kwon nara</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kwon nara</h1>
              <h1>kwon nara</h1>
              <h1 className="t-stroke italic">kwon nara</h1>
              <h1>kwon nara</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">han so-hee</h1>
              <h1>han so-hee</h1>
              <h1 className="t-stroke italic">han so-hee</h1>
              <h1>han so-hee</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">han so-hee</h1>
              <h1>han so-hee</h1>
              <h1 className="t-stroke italic">han so-hee</h1>
              <h1>han so-hee</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Go Yoon Jung</h1>
              <h1>Go Yoon Jung</h1>
              <h1 className="t-stroke italic">Go Yoon Jung</h1>
              <h1>Go Yoon Jung</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Go Yoon Jung</h1>
              <h1>Go Yoon Jung</h1>
              <h1 className="t-stroke italic">Go Yoon Jung</h1>
              <h1>Go Yoon Jung</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Han Hyo-joo</h1>
              <h1>Han Hyo-joo</h1>
              <h1 className="t-stroke italic">Han Hyo-joo</h1>
              <h1>Han Hyo-joo</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Han Hyo-joo</h1>
              <h1>Han Hyo-joo</h1>
              <h1 className="t-stroke italic">Han Hyo-joo</h1>
              <h1>Han Hyo-joo</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kim So-eun</h1>
              <h1>kim So-eun</h1>
              <h1 className="t-stroke italic">kim So-eun</h1>
              <h1>kim So-eun</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kim So-eun</h1>
              <h1>kim So-eun</h1>
              <h1 className="t-stroke italic">kim So-eun</h1>
              <h1>kim So-eun</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Song Hye-Kyo</h1>
              <h1>Song Hye-Kyo</h1>
              <h1 className="t-stroke italic">Song Hye-Kyo</h1>
              <h1>Song Hye-Kyo</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">Song Hye-Kyo</h1>
              <h1>Song Hye-Kyo</h1>
              <h1 className="t-stroke italic">Song Hye-Kyo</h1>
              <h1>Song Hye-Kyo</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">seol in-ah</h1>
              <h1>seol in-ah</h1>
              <h1 className="t-stroke italic">seol in-ah</h1>
              <h1>seol in-ah</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">seol in-ah</h1>
              <h1>seol in-ah</h1>
              <h1 className="t-stroke italic">seol in-ah</h1>
              <h1>seol in-ah</h1>
            </div>
          </div>
        </li>
        <li>
          <div className="title-main">
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kim sejeong</h1>
              <h1>kim sejeong</h1>
              <h1 className="t-stroke italic">kim sejeong</h1>
              <h1>kim sejeong</h1>
            </div>
            <div className="title-wrapper">
              <h1 className="t-stroke italic">kim sejeong</h1>
              <h1>kim sejeong</h1>
              <h1 className="t-stroke italic">kim sejeong</h1>
              <h1>kim sejeong</h1>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="third-Image-slider">
      <ul>
        <li className="active">
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kwon-nara.jpg" alt="images" className="Image-fluid" width={1400} height={1400}/>
          <div className="Image-details">
            <h6>Kwon Nara</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-soo-hee.jpg" alt="images" className="Image-fluid " width={1400} height={1400}/>
          <div className="Image-details">
            <h6>Han So-hee</h6>
            <span>Profession:- Actress </span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/go-yoon-jung.jpg" alt="images" className="Image-fluid "  width={1400} height={1400} />
          <div className="Image-details">
            <h6>Go Yoon Jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-hyo-joo.jpg" alt="images" className="Image-fluid " width={1400} height={1400} />
          <div className="Image-details">
            <h6>Han hyo-Joo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-yoo-jung.jpg" alt="images" className="Image-fluid " width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim yoo-jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/song-hye-kyo.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Song Hye-Kyo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/seol-in-ah.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Seol in-ah</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-sejeong.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim sejeong</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
      </ul>
    </div>
    <div className="Image-slider">
      <ul>
        <li className="active show_className">
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kwon-nara.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kwon Nara</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-soo-hee.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Han So-hee</h6>
            <span>Profession:- Actress </span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/go-yoon-jung.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Go Yoon Jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-hyo-joo.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Han hyo-Joo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-yoo-jung.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim yoo-jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/song-hye-kyo.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Song Hye-Kyo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/seol-in-ah.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Seol in-ah</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-sejeong.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim sejeong</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
      </ul>
    </div>
    <div className="second-Image-slider">
      <ul>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kwon-nara.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kwon Nara</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li className="active">
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-soo-hee.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Han So-hee</h6>
            <span>Profession:- Actress </span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/go-yoon-jung.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Go Yoon Jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/han-hyo-joo.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Han hyo-Joo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-yoo-jung.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim yoo-jung</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/song-hye-kyo.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Song Hye-Kyo</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/seol-in-ah.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Seol in-ah</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
        <li>
          <Image src="https://www.yudiz.com/codepen/gsap-slider/kim-sejeong.jpg" alt="images" className="Image-fluid" width={1400} height={1400} />
          <div className="Image-details">
            <h6>Kim sejeong</h6>
            <span>Profession:- Actress</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

   </>
  )
}
