export default function TextContent({ inView }) {
  return (
    <section
      className={`section section-textcontent bg-white ${
        inView ? "inView" : "outView"
      }
      `}
    >
      <div className="content h-100 position-relative pt-5 mt-5">
        <h2 className="sub-heading fc-black bg-white pb-2">
          Disclaimer
        </h2>
        <p>
            By using or accessing the Website you agree with the Disclaimer
            without any qualification or limitation. The Company reserves the
            right to add, alter or delete material from the Website at any time
            and may, at any time, revise these terms without notifying you. You
            are bound by any such amendments and the Company, therefore, advise
            that you periodically visit this page to review the current Terms.
          </p>

          <p>
            The website and all its content are provided on an “as is” and “as
            available” basis. No information given under this website creates a
            warranty or expand the scope of any warranty that cannot be
            disclaimed under the applicable laws. This website is for guidance
            only. It does not constitute part of an offer or contract. Design
            and specifications are subject to change without prior notice.
            Computer-generated images are the artist’s impression and are an
            indication of the actual designs. Further, the actual
            design/construction may vary in fit and finish from the one
            displayed in the information and material displayed on this website.
          </p>

          <p>
            The particulars contained or the details mentioned in respect of the
            projects/ developments undertaken by the Company including depicting
            banners/posters of the project/development are being modified in
            terms of the stipulations/ recommendations under the Real Estate
            (Regulation and Development) Act 2016 and Rules/ Regulations made
            thereunder (“RERA”) and accordingly may not be fully in line thereof
            as of date. You are, therefore, required to verify all the details,
            including but not limited to area, amenities, services, terms of
            sales, payments and other relevant terms independently with the
            sales team prior to concluding any decision for buying any unit(s)
            in any of our projects/ developments. Till such time the details are
            fully updated, the said information should not be construed as an
            advertisement. To find out more about our projects/ developments,
            please call our marketing centres or visit our sales office and
            speak with our sales staff.
          </p>

          <p>
            In no event will the Company, its management, its associate
            companies and /or its employees be liable for a claim made by the
            users including seeking any cancellation for any of the inaccuracies
            in the information provided in this Website, though all efforts have
            to be made to ensure accuracy. The Company under no circumstances
            will be liable for any expense, loss or damage including, without
            limitation, indirect or consequential loss or damage, or any
            expense, loss or damage whatsoever arising from use, or loss of use,
            of data, arising out of or in connection with the use of this
            website.
          </p>

          <p>
            This website is currently being updated. While enough care is taken
            by the Company to ensure that information on the website is up to
            date, accurate and correct, readers are requested to make their
            independent enquiry before relying upon the same.
          </p>
      </div>
    </section>
  );
}
