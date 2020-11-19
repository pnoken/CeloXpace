import Image from "next/image"

export default function Card() {
  return (
    <div className="row m-5">
      <div className="box shadow">
        <div>
          <h5>Card title</h5>
        </div>
        <Image src="/static/changes.png" height={150} width={150}/>
      </div>
      <div className="box shadow">
        <div>
          <h5>Card title</h5>
        </div>
        <Image src="/static/price.png" height={150} width={150} />
      </div>
      <div className="box shadow">
        <div>
          <h5>Card title</h5>
        </div>
        <Image src="/static/market_cap.png" height={150} width={150} />
      </div>
    </div>
  );
}
