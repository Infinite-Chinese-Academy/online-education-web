/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Carousel from 'antd/lib/carousel'
import Head from 'next/head'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Page() {
  const popularCoursesImages = new Array(10).fill(0)

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
          <h1 className="single">Popular Courses</h1>
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
                {popularCoursesImages.map((item, index) => (
                  <div
                    style={{
                      transform: `rotateY(${(360 / popularCoursesImages.length) * index}deg) translateZ(280px)`,
                    }}
                    key={index}
                    className="item"
                  >
                    <img
                      src={`images/courses/1${index === 0 ? '' : '_' + (index + 1)}.png`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1.png" alt="" />
            </div>
            <div className="info">
              <h3>从零开始学英音</h3>
              <p>
                通过系统学习发音知识，并结合大量的词汇、短语和句子练习，你不仅可以建立系统的发音知识结构，还可以重塑语音面貌，
                从而提升英语学习信心。
                从零开始学英式发音，学的不只是44个音标，还有中国学生经常忽略的单词重音、连读、弱读、同
                化等语音技巧，以及节奏、语调、重音等语音现象。
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_2.png" alt="" />
            </div>
            <div className="info">
              <h3>从零开始学美音</h3>
              <p>
                如果你钟爱轻快、自由、热情的美音，希望从头开始系统性学习发音技巧、细致纠正错误的发音方式，迅速摆脱土味口音和哑巴英语。
                让自己听起来不仅是发对音的中国人，而更像是美国人，那么，请从这门课开始，听友邻标准美音发音者的方法和经验，get美音的正
                确打开方式。本课程覆盖 30 个以上发音技巧，拒绝知识学术化。
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_5.png" alt="" />
            </div>
            <div className="info">
              <h3>孔子：至圣之道</h3>
              <p>
                文本精读课程，所用文本是由《时代周刊》和美国专业教育出版社
                Teacher Created Materials 合作推出的书籍 Confucius Chinese
                Philosopher。本书共有1820个单词，相当于美国3年级水平（相当于中国初中3年级水平）。在讲解语法和句式的同时，
                大量补充孔子的背景知识，尽可能找到文中思想的《论语》出处，帮助大家提升英语之外，从根源上理解孔子和他的思想。{' '}
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_11.png" alt="" />
            </div>
            <div className="info">
              <h3>世界杯英语扫盲指南</h3>
              <p>
                全球四年一度的狂欢盛世，不仅仅吸引着足球爱好者的目光，而且世界杯早已与我们的生活息息相关。让我们一起多角度玩转世界杯，
                品味世界杯背后的“足球精神”，共赏世界杯欢愉，同时提升英语内功！
                在本门课中，我们一起恶补下足球和世界杯的知识；我们一起
                全方位聊聊足球巨星的艺术特长，他们成长历程；我们一起解析下世界杯历史上的“尴尬
                往事”，预测本届世界杯的期待看点……
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_4.png" alt="" />
            </div>
            <div className="info">
              <h3>马克·吐温：美国的一面镜子</h3>
              <p>
                《马克·吐温：美国的一面镜子》为文本精读课程，本课程所用文本是由《时代周刊》和美国专业教育出版社
                Teacher Created Materials合作推出的书籍 Stepping Into Mark
                Twain’s World。本书共有3370个单词，相当于美国7年级水平（相当于
                中国大学2年级水平）。
                我们通常在读英语文本的时候，看到的可能是冷冰冰，干巴巴的句子。除了帮助大家理解文本外，还会教
                大家更进一步地了解美国的社会文化。
                本课程全文配有官方朗读版音频。
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_7.png" alt="" />
            </div>
            <div className="info">
              <h3>大品牌小故事II</h3>
              <p>
                《大品牌小故事》是友邻经典系列课程之一。第一季曾受到无数友邻同学的热捧。Q老师及制作团队匠心打磨三年，《大品牌小故事II》
                终于与大家见面了。
                和第一季一样，文本全部选自品牌英文官网和外媒专题报道。你会学到400+个地道的英文表达，能够用英文对品
                牌故事如数家珍。
                但与第一季有所不同的是，《大品牌小故事II》课程内容全面升级：
                这一季，品牌更多样： 不止有时尚大牌，还
                有酒店、航空、汽车多个领域的顶尖品牌。
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="posts">
        <div className="container">
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_8.png" alt="" />
            </div>
            <div className="info">
              <h3>英伦文化知多少 | MAT 专栏</h3>
              <p>
                学了英语很多年，却依然没法和歪果仁朋友谈笑风生？口语考试在即，可是背模板似乎总拿不了高分？这一次，让我们告别英文尬
                聊，一起领略各种有趣的英伦文化与科普小知识，丰富自己的谈资；这一次，让我们摆脱陈旧模板，一起掌握最精准的表达方式，
                提高自己的表达；这一次，让资深雅思考官、正宗伦敦土著 Mat
                为你保驾护航，实现口语新突破！
              </p>
            </div>
          </article>
          <article>
            <div className="pic">
              <img width="121" src="images/courses/1_10.png" alt="" />
            </div>
            <div className="info">
              <h3>日常礼仪12讲</h3>
              <p>
                在当今快节奏的社会里，礼节这个概念似乎已经淡出人们的印象，仿佛成了贵族的专属概念。但其实，礼节就在我们身边，且在我们
                的生活中扮演着重要的角色。小到帮后面的人扶门，大到国家领导人会见握手，都体现着礼节。但在日常生活中，我们经常会遇到一些
                不知道该怎么处理的场景，稍不注意，就会很尴尬。我们想做个有礼的人，但是有时候的确不知道怎么做到，我们需要正确的指导。
              </p>
            </div>
          </article>
        </div>
      </section>

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
