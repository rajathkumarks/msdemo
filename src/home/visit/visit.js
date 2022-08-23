import "./visit.scss";

export default function Visit({ inView }) {
  return (
    <section
      className={`section section-visit bg-white text-center pt-0 ${
        inView ? "inView" : "outView"
      }`}
    >
      <div className="content">
        <h2 className="sub-heading fc-black">
          Visit us. We promise to make the first step towards buying your {" "}
          <span className="fw-bold">dream home worthwhile.</span>
        </h2>
        <button className="app-btn--solid--primary app-btn--big mt-3 mb-5">
          <span className="app-btn-text">Get in touch</span>
        </button>
        <div className="contacts fc-black d-flex">
          <span className="flex-1 text-right number">+91 99800 62323</span>
          <span className="mr-5 ml-5">
            <i className="separator"></i>
          </span>
          <span className="flex-1 text-left email">
            sales@modernspaaces.com
          </span>
        </div>
      </div>
    </section>
  );
}
