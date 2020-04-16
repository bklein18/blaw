import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx global>{`
        .header {
          margin-left: -5px;
        }

        .header ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
          position: fixed;
          top: 0;
          width: 100%;
        }

        .header li {
          float: left;
        }

        .header li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        /* Change the link color to #111 (black) on hover */
        .header li a:hover {
          background-color: #111;
        }
      `}</style>
    </>
  );
}
