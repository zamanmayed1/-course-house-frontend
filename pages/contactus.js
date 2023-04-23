import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
import Head from "next/head";
   
  export default function ContuctUs() {
    return (
      <Card className="mx-auto bg-white max-w-max p-4 my-16 md:my-28 "  shadow={false}>
        <Head>
        <title>Contact Us</title>
      </Head>
        <Typography className="text-blue-gray-700" variant="h4" >
          Contact Us
        </Typography>
        <Typography  className="mt-1 font-normal text-blue-gray-700">
          Contact Us Before Buy a Course
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Textarea label="Message" />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-blue-gray-700"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Send
          </Button>
          
        </form>
      </Card>
    );
  }