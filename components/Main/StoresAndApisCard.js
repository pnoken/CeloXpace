import Image from "next/image";

export default function StoresAndApisCard() {
  return (
    <>
    <div className="row">
      <button
        type="button"
        className="btn btn-lg col"
        style={{ backgroundColor: "#21F01D" }}
      >
        Sign Up for API key
      </button>

      <button
        className="btn btn-lg col float-right"
        type="button"
        style={{ backgroundColor: "#21F01D" }}
      >
        API Documentation
      </button>
      </div>

      <div className="d-flex flex-column" style={{ height: "820px" }}>
        <div className="flex-row  d-flex">
          <div className="box shadow align-items-start rounded mr-auto">
            <Image src="/static/cusd.png" height={300} width={450} />
            <div className="card-body">
              <h5 className="card-title">
                Check out Celo Accepted Stores here
              </h5>
            </div>
          </div>

          <div className="box shadow align-items-end mb-auto p-2 rounded">
            <Image src="/static/celddd.jpg" height={300} width={350} />
            <div className="card-body">
              <h5 className="card-title">
                Check out CUSD Accepted Stores here
              </h5>
            </div>
          </div>
        </div>

        <div className="flex-row d-flex justify-content-center mt-auto">
          <div className="box shadow">
            <Image src="/static/apps.jpg" height={300} width={350} />
            <div className="card-body">
              <h5 className="card-title">Explore apps built on celo</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
