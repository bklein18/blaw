import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <>
      <MainLayout title="ACID RAIN AND SMOKE CLOUDS">
        <h1>ACID RAIN AND SMOKE CLOUDS</h1>
        <h2>Ethical Problems</h2>
        <div className="parallax1" />
        <h2>Potential Solutions</h2>
        <div className="parallax2" />
        <h2>Policy Proposals</h2>
        <p>
          There are three primary areas in which public policy needs to
          progress:
        </p>
        <h3>Real Estate Investment Trusts and Data Centers</h3>
        <p>
          The problem of real estate trusts doesn't really lie with the data
          centers themselves, it rather is a problem with America's tax code. By
          reorganizing themselves as real estate investment trusts (REIT), data
          center companies are able to get out of taxes, with one company
          getting out of more than{" "}
          <a href="https://www.nytimes.com/2013/05/14/technology/north-jersey-data-center-industry-blurs-utility-real-estate-boundaries.html">
            100 million
          </a>{" "}
          in taxes annually.
        </p>
        <p>
          A company in a capitalist society has an obligation to make as much
          money in profits as possible, so the data centers can't be faulted for
          wanting to reorganize. However, the government has an obligation to
          hold the corporations to their full tax burden. To this end, there is
          one primary course that the government ought to take: disallowing data
          centers from being classified as real estate investment trusts.
        </p>
        <hr />
        <h3>
          <em>
            ...THE GOVERNMENT HAS AN OBLIGATION TO HOLD THE CORPORATIONS TO
            THEIR FULL TAX BURDEN
          </em>
        </h3>
        <hr />
        <p>
          The government has this obligation because companies are given
          specific tax rates by democratically elected representatives, and, if
          through adminsitrative loopholes, companies manage to skirt their
          taxes, the administrative branch of the govenment has a duty to close
          that loophole.
        </p>
        <h3>Minimum Efficiency Standards</h3>
        <p>
          Some companies ran their server farms with as low as{" "}
          <a href="https://www.nytimes.com/2012/09/23/technology/data-centers-waste-vast-amounts-of-energy-belying-industry-image.html?auth=login-email&login=email">
            10% utilization of their total uptime
          </a>{" "}
          during 2008 and the numbers haven't improved much in recent years,
          despite an abundance of optimization algorithms designed to help
          companies run their servers with much higher utilization.
        </p>
        <p>
          With the looming threat of climate change, this wasted energy usage is
          an outrage. Companies not only have a categorical imperative to
          protect the Earth as inhabitants of it, but additionally there are
          utilitarian reasons why companies should waste less energy (lower
          energy bills, prolonging the lifespans of their consumers, protecting
          their investment in real estate, etc.).
        </p>
        <p>
          With these ethical reasons why the companies should not behave in the
          way they are, a casual observer is left with no other assumption that
          the companies are behaving unethically by managing their servers in
          the current fashion. Because of this, governments at some level must
          intervene to create minimum efficiency standards for these companies.
          The standards need not be too drastic even. Mandating a standard as
          low as 50% utilization would allow companies to maintain high levels
          of service uptime, and would lower the total wasted energy by a factor
          of more than 500% in some cases.
        </p>
        <hr />
        <h3>
          <em>
            A STANDARD AS LOW AS 50% UTILIZATION ... WOULD LOWER THE TOTAL
            WASTED ENERGY BY A FACTOR OF MORE THAN 500% IN SOME CASES.
          </em>
        </h3>
        <hr />
        <h3>More Thorough Regulations</h3>
        <p>
          This goes hand in hand with the previous point, but many companies can
          and would{" "}
          <a href="https://www.nytimes.com/2012/09/24/technology/data-centers-in-rural-washington-state-gobble-power.html">
            absorb the cost of a fine
          </a>{" "}
          rather than comply with legal restrictions because the penalties for
          violating energy usage laws are not thorough enough to ensure
          compliance. In one example, Microsoft incurred a $210,000 penalty for
          drastically overestimating its energy usage. It could, rather than pay
          the penalty, increase its usage wastefully by $70,000 to avoid the
          penalty.
        </p>
        <p>
          Though that specific situation may not have been fixed by larger
          penalties (in fact, it would have exacerbated the problem), more
          thorough regulations including minimum efficiency standards would have
          prevented the problem. To close loopholes, local, state, and federal
          governments would have to cooperate on a large scale, but such is the
          necessity of an emergency like climate change. An example plan might
          include:
        </p>
        <ol>
          <li>
            Local utility boards keeping financial penalties at reasonable
            levels, in order to prevent situations such as what happened with
            Microsoft in Quincy, WA. This step can be taken unilaterally and
            first while waiting on a response from state and federal
            authorities.
          </li>
          <li>
            Many state authorities already regulate minimum efficiency standards
            for motor vehicles, so they can institute minimum utilization
            standards for companies as well. As mentioned previously, these
            standards do not have to be much to improve over the current state
            of the industry.
          </li>
          <li>
            Federal authorities need to do more to ensure that the companies
            that run these data centers cannot escape the liability that they do
            have with reorganization. As mentioned previously, companies can
            escape tax liability through changing their classification under tax
            law. By making more stringent regulations as to what types of
            business can be considered REITs, the government can use the tax
            revenues to actually improve the environment, in whatever way the
            democratically elected leaders see fit for the country.
          </li>
        </ol>
      </MainLayout>
      <style jsx>{`
        p {
          margin: 0 10% 1em;
          text-align: justify;
        }

        ol {
          margin: 0 12.5% 1em;
          text-align: justify;
        }

        ol > li {
          margin-bottom: 1em;
        }

        a {
          text-decoration: none;
        }

        .parallax1 {
          /* The image used */
          background-image: url("https://media.gettyimages.com/photos/data-center-in-a-large-bright-room-picture-id122358799?s=2048x2048");

          /* Set a specific height */
          height: 750px;

          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          margin-bottom: 1em;
        }

        .parallax2 {
          /* The image used */
          background-image: url("https://media.gettyimages.com/photos/binary-code-picture-id122204403?s=2048x2048");

          /* Set a specific height */
          height: 750px;

          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          margin-bottom: 1em;
        }
      `}</style>
    </>
  );
}
