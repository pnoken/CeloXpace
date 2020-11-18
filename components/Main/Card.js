import Image from "next/image"

export default function Card() {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
        <Image src="/static/changes.png" height={80} width={40}/>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
        <Image src="/static/price.png" height={80} width={40} />
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
        <Image src="/static/market_cap.png" height={80} width={40} />
      </div>
    </div>
  );
}
