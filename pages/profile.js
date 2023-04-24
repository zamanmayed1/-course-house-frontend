import MyCourses from "@/components/Courses/MyCourses";
import userSlice, { logoutUser } from "@/src/features/userSlice";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  let id = user?.id;
  useEffect(() => {
    if (!user.email) {
      router.push("/register");
    }
  }, [user , router]);

  return (
    <div className="profile-page">
      <Head>
        <title>Profile</title>
      </Head>
      {user?.email && (
        <div>
          <section className="relative block h-[300px]">
            <div className="absolute top-0 w-full h-full bg-center bg-[url('https://res.cloudinary.com/dpr7otqhn/image/upload/v1682307554/thumbnail_360_F_513430530_ihr1_S_Oz8_Dz_Es_DH_9_IB_Jt_JYQWC_Xpv_Xwv2_F_a5bda4b271.jpg')] bg-cover">
              <div
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <Image
                         width={800}
                         height={500}
                          alt="Profile"
                          src="https://res.cloudinary.com/dpr7otqhn/image/upload/v1682307192/user_318_159711_7355c57277.avif"
                          className="shadow-xl w-40 h-40 rounded-full  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          onClick={() => dispatch(logoutUser())}
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                       
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                      {user?.fullname}
                    </h3>
                    <div className="text-sm -mt-4 leading-normal  mb-2 text-blueGray-400 font-bold ">
                      <i className="fas  mr-2 text-lg text-blueGray-400"></i>
                      {user?.email}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <MyCourses id={id} />
                  </div>
                </div>
              </div>
            </div>
           
          </section>
        </div>
      )}
    </div>
  );
}

export default Profile;
