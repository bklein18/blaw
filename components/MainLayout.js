import Header from "./Header";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Header />
        <div className="content">{props.children}</div>
      </div>
      <style jsx>{`
        div {
          font-family: "Montserrat", sans-serif;
          margin-top: 60px;
        }

        .content {
          margin: 0% 10%;
          padding: 20px;
          border: 1px solid #ddd;
          text-align: center;
        }
      `}</style>
    </>
  );
}
