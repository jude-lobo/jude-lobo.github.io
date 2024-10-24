import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-stack-developer',
		company: 'Kanguru Digital',
		description: "At Kanguru Digital Agency, I lead the development and deployment of scalable digital solutions that drive our clients' long-term success. My role covers all phases of development, from analysis and design to testing, documentation, and deployment. Using PHP 7/8, Laravel, and Vue.js (Typescript, Composition API), I build robust backend systems and dynamic Single Page Applications (SPAs). I design and implement RESTful APIs, manage Postgres databases, and optimize performance through efficient queries and data integrity. My expertise with Nginx and Apache ensures stable server environments, while Docker streamlines development processes across various deployment stages.",
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		name: 'Senior Backend Developer',
		color: 'red',
		links: [],
		logo: Assets.Symmetry,
		shortDescription: "At Kanguru Digital Agency, I lead the development and deployment of scalable digital solutions that drive our clients' long-term success. My role covers all phases of development, from analysis and design to testing, documentation, and deployment. Using PHP 7/8, Laravel, and Vue.js (Typescript, Composition API), I build robust backend systems and dynamic Single Page Applications (SPAs). I design and implement RESTful APIs, manage Postgres databases, and optimize performance through efficient queries and data integrity. My expertise with Nginx and Apache ensures stable server environments, while Docker streamlines development processes across various deployment stages.</br>I utilize Git for version control, and manage dependencies with Composer and npm. My proficiency in the Linux shell allows me to automate processes and handle server maintenance. I actively troubleshoot and debug issues, ensuring high performance and smooth user experiences. I also collaborate closely with clients to understand their needs and translate those into effective technical solutions, combining my technical expertise with a strategic approach to deliver impactful results.",
	},
	{
		slug: 'backend-developer',
		company: 'Symmetry Digital',
		description: 'As a PHP Developer at Symmetry Digital, I developed and integrated efficient PHP modules for web application back-end functionality. Leveraging JavaScript and jQuery, I created engaging user experiences. Managed MySQL databases for data storage and functionality. Contributed to research for technology improvements. Conducted troubleshooting for optimal performance. Monitored site performance, collaborated with front-end teams, and enhanced features for better user experience.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		name: 'Senior Backend Developer',
		color: 'red',
		links: [],
		logo: Assets.Symmetry,
		shortDescription: 'As a PHP Developer at Symmetry Digital, I developed and integrated efficient PHP modules for web application back-end functionality. Leveraging JavaScript and jQuery, I created engaging user experiences. Managed MySQL databases for data storage and functionality. Contributed to research for technology improvements. Conducted troubleshooting for optimal performance. Monitored site performance, collaborated with front-end teams, and enhanced features for better user experience.'
	},
	{
		slug: 'backend-intern',
		company: 'Horizon Technologies',
		description: 'At Horizon Technologies, during my internship as a Backend Web Developer, I optimized PHP modules, integrated RESTful APIs into Laravel applications, and conducted code reviews to improve performance. Utilizing JavaScript and jQuery, I crafted engaging user experiences and ensured streamlined data management with MySQL. I diagnosed and resolved bugs, managed version control with Git, and created comprehensive documentation for seamless knowledge transfer.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2019, 8, 2), to: new Date(2020, 0, 1)},
		skills: getSkills('php', 'js', 'laravel', 'mysql', 'css', 'html'),
		name: 'Junior Backend Developer',
		color: 'blue',
		links: [],
		logo: Assets.Horizon,
		shortDescription: 'At Horizon Technologies, during my internship as a Backend Web Developer, I optimized PHP modules, integrated RESTful APIs into Laravel applications, and conducted code reviews to improve performance. Utilizing JavaScript and jQuery, I crafted engaging user experiences and ensured streamlined data management with MySQL. I diagnosed and resolved bugs, managed version control with Git, and created comprehensive documentation for seamless knowledge transfer.'
	},
];

export const title = 'Experience';
