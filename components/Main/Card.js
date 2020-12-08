import Image from "next/image";

export default function Card() {
  return (
    <div className="d-flex flex-column" style={{ zIndex: "1" }}>
      <div className="flex-row  d-flex">
        <div className="mx-auto">
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
      </div>
      <div className="row justify-content-around">
        <div className="box shadow col-3" style={{ borderRadius: "40px" }}>
          <h5 className="text-center">24hr Change</h5>
          <div className="m-5">
            <Image src="/static/changes.png" height={200} width={350} />
          </div>
        </div>

        <div className="box shadow col-3" style={{ borderRadius: "40px" }}>
          <h5 className="text-center">Price</h5>
          <p className="text-center"> $1.45</p>
          <div className="m-5">
            <Image src="/static/price.png" height={300} width={450} />
          </div>
        </div>

        <div className="box shadow col-3" style={{ borderRadius: "40px" }}>
          <h5 className="text-center">Market cap</h5>
          <div className="m-5">
            <Image src="/static/market_cap.png" height={200} width={350} />
          </div>
        </div>
      </div>
    </div>
  );
}
