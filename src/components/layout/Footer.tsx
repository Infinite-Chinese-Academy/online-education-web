'use client'

/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import React from 'react'
import '@/styles/globals.css'
import '../../../public/css/style.css'

export default function Footer() {
  return (
    <>
      {/* <Head>
        <meta
          key="description"
          name="description"
          content="Online Education System"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/css/style.css" type="text/css" rel="stylesheet"></link>
        <script src="/js/jquery-1.11.1.min.js" key="jq"></script>
        <script src="/js/main.js" key="main"></script>
      </Head> */}
      <footer id="footer">
        <div className="container">
          <section>
            <article className="col-1">
              <h3>Contact</h3>
              <ul>
                <li className="address">
                  <a href="https://www.ica.com/">
                    18 Grote St
                    <br />
                    Adelaide SA 5000
                  </a>
                </li>
                <li className="mail">
                  <a href="https://www.ica.com/">contact@ica.com</a>
                </li>
                <li className="phone last">
                  <a href="https://www.ica.com/">(61) 416384184</a>
                </li>
              </ul>
            </article>
            <article className="col-2">
              <h3>Forum topics</h3>
              <ul>
                <li>
                  <a href="#">Omnis iste natus error sit</a>
                </li>
                <li>
                  <a href="#">Nam libero tempore cum soluta</a>
                </li>
                <li>
                  <a href="#">Totam rem aperiam eaque </a>
                </li>
                <li>
                  <a href="#">Ipsa quae ab illo inventore veritatis </a>
                </li>
                <li className="last">
                  <a href="#">Architecto beatae vitae dicta sunt </a>
                </li>
              </ul>
            </article>
            <article className="col-3">
              <h3>Social media</h3>
              <p>
                Temporibus autem quibusdam et aut debitis aut rerum
                necessitatibus saepe.
              </p>
              <ul>
                <li className="facebook">
                  <a href="#">Facebook</a>
                </li>
                <li className="google-plus">
                  <a href="#">Google+</a>
                </li>
                <li className="twitter">
                  <a href="#">Twitter</a>
                </li>
                <li className="pinterest">
                  <a href="#">Pinterest</a>
                </li>
              </ul>
            </article>
            <article className="col-4">
              <h3>Newsletter</h3>
              <p>
                Assumenda est omnis dolor repellendus temporibus autem
                quibusdam.
              </p>
              <form action="#">
                <input placeholder="Email address..." type="text" />
                <button type="submit">Subscribe</button>
              </form>
              <ul>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </article>
          </section>
          <p className="copy">
            Copyright 2024 Infinite Chinese Academy. Designed by{' '}
            <a
              href="http://www.vandelaydesign.com/"
              title="Designed by Vandelay Design"
              target="_blank"
            >
              Vandelay Design
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
