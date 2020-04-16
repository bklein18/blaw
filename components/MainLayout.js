import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Header />
        {props.children}
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
