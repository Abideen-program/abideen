import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../public/images/pic-one.png";

const Home = () => {
  return (
    <>
      <Head>
        <title>Devdeen</title>
        <meta name="description" content="seasonal frontend developer" />
      </Head>
      <main className="flex items-center min-h-screen text-dark border border-red-500">
        <Layout className="border border-blue-500">
          <div className="flex items-center justify-between w-full border border-yellow-500">
            <div className="border border-purple-800 w-[400px]">
              <Image
                width={0}
                height={0}
                src={ProfilePic}
                alt="DevDeen"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
