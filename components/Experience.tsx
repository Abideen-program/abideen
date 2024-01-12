import { DetailsProps } from "@/types";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  workTwo,
  className,
}: DetailsProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold capitalize">
          {position}&nbsp;{" "}
          <a href={companyLink} className="text-[#B95328]">
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
        <p className={`font-medium w-full ${className}`}>{workTwo}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-32 border border-emerald-600">
      <h2 className="font-bold text-center text-7xl w-full mb-20">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative border border-red-950">
        <ul className="w-full flex flex-col items-center justify-between">
          <Details
            position="Frontend Dev."
            company="Complanet"
            companyLink="/"
            address="Abeokuta, Nigeria"
            time="06/2023 - Present"
            work="Worked on a team responsible for developing grant application and approving system for a popular betting company, including onboarding of users down to approval by the admin team of the betting company."
          />

          <Details
            position="Intern"
            company="Iobotech"
            companyLink="/"
            address="Lagos, Nigeria"
            time="01/2023 - 06/2023"
            work="Worked on a team responsible for developing a system that enables customers to embrace predictive analytics and ensure effective maintenance of their building around the clock and from anywhere."
            workTwo="Helped about 2000 customers to achieve a drastic reduction of about 50% in their operational costs and stricter security on their building maintenance."
            className="mt-2"
          />

          <Details
            position="Frontend Dev. Intern"
            company="100Devs"
            companyLink="/"
            address="Los Angeles, USA"
            time="01/2022 - 02/2023"
            work="Rebuilt a 4-year-old vanilla JavaScript-powered e-commerce website using React 18 and the React Context API for a better full-user experience. Rebuilt a 2-year-old prototype vanilla JavaScript-powered restaurant website using React 18, React Redux, and the Redux toolkit."
            workTwo="Built an Amazon clone using React 18, React Redux, the Redux toolkit, and Firebase to manage the state of users."
            className="mt-2"
          />

          <Details
            position="Web Developer"
            company="DevDeen"
            companyLink="/"
            address="Abeokuta, Nigeria"
            time="01/2021 - Present"
            work="Created web applications and static websites for different clients across small and medium-sized businesses. Developed a fashion e-commerce app prototype. Gained excellent skills in using continuous integration tools."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
