import Image from "next/image";
export default function Partners(){
return (
    <>
    <div>
          <h5 className="text-uppercase text-center">Partners</h5>
        </div>
        <div className="flex-row  d-flex">
            <div className="align-items-start mx-auto">
              <Image src="/static/celo.png" height={100} width={120} />

            </div>

            <div className="align-items-end mx-auto p-2">
              <Image src="/static/bsg.png" height={100} width={120} />
            
            </div>
          </div>
    </>
)
};