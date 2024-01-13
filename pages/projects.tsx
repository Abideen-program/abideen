import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title>DevDeen | Projects Page</title>
        <meta name="description" content="projects done by DevDeen" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center border border-yellow-600">
        <Layout className="pt-16">
          <AnimatedText
            text="The mind surpasses the intellect!"
            className="!text-7xl"
          />

          <div className="grid grid-cols-12 gap-24 border border-red-700">
            <div className="col-span-12 border border-green-600">
              Feature Projects
            </div>

            <div className="col-span-6 border border-green-600">project 1</div>
            <div className="col-span-6 border border-green-600">project 2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
