import ComponentHeader from "@/components/Shared/ComponentHeader";
import FailedToLoad from "@/components/Shared/FailedToLoad";
import Loader from "@/components/Shared/Loader";
import { fetcher } from "@/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

function UnitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/units/${id}?populate=*`, fetcher);
  if (error) return <FailedToLoad/>
  if (isLoading) return <Loader />;
  

  return (
    <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
       <Head>
        <title>{data?.data.attributes.title}</title>
      </Head>
      <ComponentHeader
        data={{
          title: `${data?.data.attributes.title}`,
          description: `Duration: ${data?.data.attributes.duration} Min`,
        }}
      />

      {/* unit video */}
      <div
      className=" p-2 flex items-center  overflow-hidden "
        dangerouslySetInnerHTML={{ __html: data?.data.attributes.description }}
      ></div>
      
    </div>
  );
}

export default UnitDetails;
