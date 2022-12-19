export type JobExperience = {
	company: string;
	jobTitle: string;
	startEnd: string;
	details: string[];
};

export const workExperience: JobExperience[] = [
	{
		company: "Bankless Consulting",
		jobTitle: "Web Developer",
		startEnd: "June 2022 - PRESENT",
		details: [
			"Worked closely with community members and designers to build wireframes and set customer expectations.",
			"Implemented the initial MedDAO community website with Typescript and NextJS to advertise the new community before launch.",
			"Created and integrated MedDAO community newsletter into the website to allow the community to monitor growth.",
		],
	},
	{
		company: "BanklessDAO",
		jobTitle: "Web Developer",
		startEnd: "April 2022 - June 2022",
		details: [
			"Co-lead developer for a team of four developers to redesign the BanklessDAO website.  The largest DAO community in web3.",
			"Performed code reviews for team members, Typescript",
			"Created a live view of snapshot community proposal voting by using the snapshot API to increase democratic visibility.",
			"Lead a research team exploring the ways to use Fleek, and IPFS for distributed website deployment.  Our findings lead to a 2nd place finish at HackFS`22.",
		],
	},
	{
		company: "Freelance/Self",
		jobTitle: "Software Developer",
		startEnd: "Dec 2021 - June 2022",
		details: [
			"Updated the navigation UI and added Discord OAuth login flow for the Bounty Board project at BanklessDAO.",
			"Created an eye-catching hero section countdown timer  to advertise the first astronauts launching with Blue Origin for MoonDAO.",
		],
	},
	{
		company: "G4 Precision",
		jobTitle: "Machinist",
		startEnd: "July 2019- Feb 2020",
		details: [
			"Prepared and operated CNC and lathe for part and prototype production.",
		],
	},
	{
		company: "Symbeo",
		jobTitle: "Technical Project Manager",
		startEnd: "July 2017- July 2019",
		details: [
			"Managed and organized sprints for five development teams.",
			"Implemented Agile and Scrum development processes.",
			"Managed multiple IT projects to update software versioning, security audits, including compliance updates for GDPR.",
		],
	},
];
