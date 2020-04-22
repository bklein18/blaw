import MainLayout from "../components/MainLayout";

export default function About() {
  return (
    <MainLayout title="About">
      <h1>ABOUT ACID RAIN AND SMOKE CLOUDS</h1>
      <p className="headerFont">
        In both small towns and large metropolises, there will always be a need
        to store data. Many products which rely on “the cloud” need massive data
        centers to process and store the information needed to run the products.
      </p>
      <p>
        However, “the cloud” has a much greater physical and environmental
        impact than most think. Despite claiming to be more environmentally
        friendly by eliminating the use of paper, cloud computing causes more
        environmental harm than prior methods of data collection and storage.
        Further, of the energy required for these massive data centers, as much
        as 94% serves no purpose. The acres upon acres of computers generally
        see no more than 10% utilization of their total uptime. Though companies
        which provide cloud services say that all of this is in the name of
        reliability, there is software which can manage server usage to be more
        efficient. Large companies would rather continue wasting massive amounts
        of energy rather than risk even milliseconds of downtime.
      </p>
      <hr />
      <h2>
        ACRES OF COMPUTERS GENERALLY SEE NO MORE THAN 10% UTILIZATION OF THEIR
        TOTAL UPTIME
      </h2>
      <hr />
      <p>
        Beyond the technical requirements for running these data centers, they
        often have invaded vulnerable, small communities, where a single large
        datacenter can consume more than the entire residential energy usage.
        Because of this inordinate amount of power consumption, utility
        companies are often happy to have such reliable energy consumers to
        reduce ebbs and flows in the power they need to produce. Companies
        routinely bully small communities to exist outside the law. This
        investigation focuses on the impacts of these computing farms on the
        physical, social, ecological, and legal environments of the communities
        they reside in.{" "}
      </p>
      <style jsx>{`
        .headerFont {
          font-size: 22px;
        }

        p {
          line-height: 30px;
          text-align: justify;
        }
      `}</style>
    </MainLayout>
  );
}
