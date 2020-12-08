import Image from "next/image";

export default function StoresAndApisCard() {
  return (
    <>
      <div className="row">
        <button
          type="button"
          className="btn btn-lg col-4"
          style={{ backgroundColor: "#21F01D" }}
        >
          Sign Up for API key
        </button>
        <div className="col-4"></div>

        <button
          className="btn btn-lg col-4"
          type="button"
          style={{ backgroundColor: "#21F01D" }}
        >
          API Doc
        </button>
      </div>

      <div className="vh-100">
        <div className="row">
          <div className="box shadow col-4">
            <Image src="/static/cusd.png" height={400} width={550} />

            <h5>Check out Celo Accepted Stores here</h5>
          </div>
          <div className="col-4"></div>

          <div className="box shadow col-4">
            <Image src="/static/celddd.jpg" height={300} width={350} />

            <h5>Check out CUSD Accepted Stores here</h5>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="box shadow col-4">
            <Image src="/static/apps.jpg" height={300} width={350} />

            <h5>Explore apps built on celo</h5>
          </div>
        </div>
      </div>
    </>
  );
}
