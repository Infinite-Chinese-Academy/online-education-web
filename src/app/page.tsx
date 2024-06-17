/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { Carousel } from 'antd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className="slider">
        <ul className="bxslider">
          <Carousel autoplay>
            <li>
              <div className="container">
                <div className="info">
                  <h2>
                    It’s Time to <br />
                    <span>Get back to school</span>
                  </h2>
                  <a href="#">Check out our new programs</a>
                </div>
              </div>
            </li>
            <li>
              <div className="container">
                <div className="info">
                  <h2>
                    It’s Time to <br />
                    <span>Get back to school</span>
                  </h2>
                  <a href="#">Check out our new programs</a>
                </div>
              </div>
            </li>
            <li>
              <div className="container">
                <div className="info">
                  <h2>
                    It’s Time to <br />
                    <span>Get back to school</span>
                  </h2>
                  <a href="#">Check out our new programs</a>
                </div>
              </div>
            </li>
          </Carousel>
        </ul>
        <div className="bg-bottom"></div>
      </div>
      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/2.png" alt="" />
            </div>
            <div className="info">
              <h3>The best learning methods</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis quasi architecto beatae vitae
                dicta sunt explicabo.{' '}
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/3.png" alt="" />
            </div>
            <div className="info">
              <h3>Awesome results of our students</h3>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/2.png" alt="" />
            </div>
            <div className="info">
              <h3>The best learning methods</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis quasi architecto beatae vitae
                dicta sunt explicabo.{' '}
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/3.png" alt="" />
            </div>
            <div className="info">
              <h3>Awesome results of our students</h3>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <h2>Latest news</h2>
          <article>
            <div className="pic">
              <img src="images/1.png" alt="" />
            </div>
            <div className="info">
              <h4>Omnis iste natus error sit voluptatem accusantium </h4>
              <p className="date">14 APR 2014, Jason Bang</p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores (...)
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <article>
            <div className="pic">
              <img src="images/1_1.png" alt="" />
            </div>
            <div className="info">
              <h4>Omnis iste natus error sit voluptatem accusantium </h4>
              <p className="date">14 APR 2014, Jason Bang</p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores (...)
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <div className="btn-holder">
            <a className="btn" href="#">
              See archival news
            </a>
          </div>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <h2>Upcoming events</h2>
          <article>
            <div className="current-date">
              <p>April</p>
              <p className="date">15</p>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <article>
            <div className="current-date">
              <p>April</p>
              <p className="date">17</p>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <article>
            <div className="current-date">
              <p>April</p>
              <p className="date">25</p>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <article>
            <div className="current-date">
              <p>April</p>
              <p className="date">29</p>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad.
              </p>
              <a className="more" href="#">
                Read more
              </a>
            </div>
          </article>
          <div className="btn-holder">
            <a className="btn blue" href="#">
              See all upcoming events
            </a>
          </div>
        </div>
      </section>
      <div className="container">
        <a href="#fancy" className="info-request">
          <span className="holder">
            <span className="title">Request information</span>
            <span className="text">
              Do you have some questions? Fill the form and get an answer!
            </span>
          </span>
          <span className="arrow"></span>
        </a>
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
