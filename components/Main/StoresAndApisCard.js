import Image from "next/image"

export default function StoresAndApisCard({img, title}){
    return(
        <div className="card">
            <Image src={img} height={80} width={40}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        </div>
      </div>
    )
}