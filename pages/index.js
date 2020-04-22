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
      </MainLayout>
      <style jsx>{`
        p {
          margin: 0 10% 1em;
          text-align: justify;
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
