import Image from "next/image";
import ComponentHeader from "./ComponentHeader";

function FailedToLoad() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader
          data={{
            title: "Ooops!",
            description: "Failed To Load Data",
          }}
        />

        <Image
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sync-error-5779521-4833802.png"
          alt=""
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}

export default FailedToLoad;
