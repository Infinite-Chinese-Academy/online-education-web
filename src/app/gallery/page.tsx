/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Carousel from 'antd/lib/carousel'
import Head from 'next/head'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Page() {
  const meritStudentsImages = new Array(10).fill(0)

  return (
    <>
      <Head>
        <title>Infinite Chinese Academy</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script src="/js/jquery-1.11.1.min.js" key="jq"></script>
        <script src="/js/main.js" key="main"></script>
      </Head>

      <Header />

      <div className="divider"></div>

      <div className="content">
        <div className="container">
          <h1 className="single">merit student</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 300,
            }}
          >
            <div className="gallery-box">
              <div className="items">
                {meritStudentsImages.map((item, index) => (
                  <div
                    style={{
                      transform: `rotateY(${(360 / meritStudentsImages.length) * index}deg) translateZ(280px)`,
                    }}
                    key={index}
                    className="item"
                  >
                    <img
                      src={`images/5${index === 0 ? '' : '_' + (index + 1)}.png`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h1 className="single">Photos of the selected category</h1>

          <div className="main-content">
            <div className="slider-con">
              <ul className="bxslider">
                <Carousel autoplay effect="fade" dots={false}>
                  <li>
                    <div className="slide">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/5.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_3.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_4.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_5.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_6.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_7.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_8.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_9.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_10.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_11.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_12.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_13.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_14.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_15.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_16.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="slide">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/5.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_3.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_4.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_5.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_6.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_7.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_8.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_9.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_10.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_11.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_12.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_13.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_14.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_15.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/5_16.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </Carousel>
              </ul>
            </div>
          </div>

          <aside id="sidebar">
            <div className="widget sidemenu">
              <ul>
                <li>
                  <a href="#">
                    Day of teacher<span className="nr">142</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Student olympics<span className="nr">98</span>
                  </a>
                </li>
                <li className="current">
                  <a href="#">
                    The best students in 2014<span className="nr">16</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Halloween party<span className="nr">63</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    School party<span className="nr">49</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Miss of university<span className="nr">175</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Karaoke party<span className="nr">87</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />

      <div id="fancy">
        <h2>Request information</h2>
        <form action="#">
          <div className="left">
            <fieldset className="mail">
              <input placeholder="Email address..." type="text" />
            </fieldset>
            <fieldset className="name">
              <input placeholder="Name..." type="text" />
            </fieldset>
            <fieldset className="subject">
              <select>
                <option>Choose subject...</option>
                <option>Choose subject...</option>
                <option>Choose subject...</option>
              </select>
            </fieldset>
          </div>
          <div className="right">
            <fieldset className="question">
              <textarea placeholder="Question..."></textarea>
            </fieldset>
          </div>
          <div className="btn-holder">
            <button className="btn blue" type="submit">
              Send request
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
