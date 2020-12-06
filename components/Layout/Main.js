import Navbar from '../Headers/Navbar'
import Head from "next/head"

export default function Main({ title }){
return (
    <div className="container-lg">
    <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    ></link>
  </Head>
  <Navbar />

    </div>
)
}