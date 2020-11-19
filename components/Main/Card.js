import Image from "next/image";

export default function Card() {
  return (
    <div className="d-flex flex-column" style={{ zIndex: "1" }}>
      <div class="mx-auto">
        <button
          type="button"
          className="btn btn-lg m-3 justify-center"
          style={{
            borderRadius: "25px",
            width: "300px",
            height: "50px",
            backgroundColor: "#21F01D",
          }}
        ></button>
      </div>
      <div className="flex-row  d-flex">
        <div
          className="box shadow align-items-start  m-5"
          style={{ borderRadius: "40px" }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">24hr Change</h5>
            <div style={{ margin: "40px" }}>
              <Image src="/static/changes.png" height={200} width={350} />
            </div>
          </div>
        </div>

        <div
          className="box shadow align-items-start  m-5"
          style={{ borderRadius: "40px" }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">Price</h5>
            <div style={{ margin: "40px" }}>
              <Image src="/static/price.png" height={200} width={350} />
            </div>
          </div>
        </div>

        <div
          className="box shadow align-items-start m-5"
          style={{ borderRadius: "40px" }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">Market cap</h5>
            <div style={{ margin: "40px" }}>
              <Image src="/static/market_cap.png" height={200} width={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
