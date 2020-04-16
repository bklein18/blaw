import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <MainLayout>
          <p>Hello Next.js</p>
        </MainLayout>
      </div>
      <style jsx>{`
        div {
          font-family: "Montserrat", sans-serif;
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
