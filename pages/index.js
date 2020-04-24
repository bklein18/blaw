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
        {/* <h3>Minimum Efficiency Standards</h3>
        <p>Companies </p> */}
      </MainLayout>
      <style jsx>{`
        p {
          margin: 0 10% 1em;
          text-align: justify;
        }

        ol {
          margin: 0 10% 1em;
          text-align: justify;
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
