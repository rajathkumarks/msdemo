import "./blogs.scss";
import { Card, CardDeck } from "react-bootstrap";
import img1 from "../../images/home/blog-img-1.webp";
import img2 from "../../images/home/blog-img-2.webp";
import img3 from "../../images/home/blog-img-3.webp";
import Fade from "react-reveal";

export default function Blogs({ inView }) {
  const items = [
    {
      name: "12 Smart Home Hacks That Can Save You Big",
      img: img1,
      desc: "95% of water that enters the home goes down the drain daily.",
      date: "Jun,2020",
      time: "10 min read",
    },
    {
      name: "Smart home hacked? Do these 7 things right now",
      img: img2,
      desc: "Smart home hacked? It’s fairly common and can lead to some frightening encounters. Here’s what you need to do right away.",
      date: "Jun,2020",
      time: "10 min read",
    },
    {
      name: "DIY House Hacks - One Crazy House - Tips and Organization",
      img: img3,
      desc: "Tips and Organization Ideas for Your Home. Cleaning Hacks & Tips. How to cure a stinky fridge 101 So far we've covered ...",
      date: "Jun,2020",
      time: "10 min read",
    },
  ];

  return (
    <section
      className={`section section-blogs bg-black ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <div className="content h-100">
        <h2 className="sub-heading text-center m-auto pb-5 fc-white">Blogs</h2>
        <CardDeck className="blogs pb-2">
          {items.map((item, idx) => {
            return (
              <Card key={idx} className="blog fc-white bg-dark-4">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Fade bottom>
                    <Card.Title className="name">{item.name}</Card.Title>
                    <Card.Text className="desc">{item.desc}</Card.Text>
                  </Fade>
                </Card.Body>
                <Card.Footer>
                  <Fade bottom>
                    <div className="separator mb-3"></div>
                    <small className="date float-left">{item.date}</small>
                    <small className="time float-right">{item.time}</small>
                  </Fade>
                </Card.Footer>
              </Card>
            );
          })}
        </CardDeck>
        <div className="text-center mt-5">
          <button className="app-btn--hollow--primary">
            <span className="app-btn-text">View more</span>
          </button>
        </div>
      </div>
    </section>
  );
}
