import './text-content.scss';

export default function TextContent({ inView }) {
  return (
    <section
      className={`section section-textcontent bg-white ${
        inView ? "inView" : "outView"
      }
      `}
    >
      <div className="content h-100 position-relative pt-5 mt-5">
        <h2 className="sub-heading fc-black bg-white pb-2">Privacy Policy</h2>
        <p>
          Bricks &amp; Milestones Ltd. makes every effort to treat your personal
          information as safely and securely as reasonably possible.
        </p>

        <p>
          Please read the following privacy policy to better understand how your
          personal information may be collected and used as you access various
          areas of our website.
        </p>

        <p>
          As described below, your information may be collected by Bricks &amp;
          Milestones Limited, disclosed to third parties, and used by third
          parties and Bricks &amp; Milestones Limited. This Privacy Policy describes
          the information we collect from you and how we may use that
          information. Some of the reasons why we collect your personal
          information include:
        </p>
        <div className="my-3">
          <ul className="list">
            <li className="item">
              To register you so that you access certain parts of the Bricks &amp;
              Milestones site
            </li>
            <li>
              To register you so that you may subscribe to our newsletters
            </li>
            <li>
              So that you may participate in discussion forums on our site and
            </li>
            <li>
              To provide you with a more personalized and meaningful experience
              on the Bricks and Milestones site.
            </li>
          </ul>
        </div>
        <p>
          We occasionally employ other companies and individuals to perform
          functions on our behalf. For example, other companies and individuals
          may fulfil your orders from us, send you postal mail and e-mail,
          removing repetitive information from our customer lists, analyze our
          data, provide us with marketing assistance, and process credit card
          payments. These third-party service providers have access to personal
          information needed to perform their functions but may not use it for
          other purposes. We do not sell, rent, share, or otherwise disclose
          personally identifiable information from customers for commercial
          purposes. We do not intend to disclose any personal information of
          yours without your consent to any third party who is not bound to act
          on our behalf unless such disclosure is required by law.
        </p>
      </div>
    </section>
  );
}
