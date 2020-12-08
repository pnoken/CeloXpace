import Image from "next/image";
export default function Partners() {
  return (
    <div className="container">
      <div>
        <h5 className="text-uppercase text-center">Partners</h5>
      </div>
      <div className="row justify-content-around">
        <div className="col-3">
          <Image src="/static/celo.png" height={100} width={120} />
        </div>

        <div className="col-3">
          <Image src="/static/bsg.png" height={100} width={120} />
        </div>
      </div>
    </div>
  );
}
