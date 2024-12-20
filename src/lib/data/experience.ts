import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-stack-developer',
		company: 'Kanguru Digital',
		description: "At Kanguru Digital Agency, I contribute to the development and deployment of scalable digital solutions for various client projects. Using PHP 7/8, Laravel, and Vue.js (Typescript, Composition API), I assist in building robust back-end systems and dynamic Single Page Applications (SPAs). My role involves designing and implementing RESTful APIs, managing Postgres databases, and optimizing data queries. I also work with Nginx and Apache to maintain stable hosting environments and use Docker for consistent development and deployment workflows.</br>I utilize Git for version control and manage dependencies with Composer and npm. My familiarity with the Linux shell helps in automating routine tasks and handling basic server maintenance. I participate in troubleshooting and debugging to ensure smooth system performance and a positive user experience. Additionally, I collaborate closely with team members to understand client requirements and translate them into effective technical solutions, contributing to the overall success of each project.",
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Toronto, Ontario, Canada',
		period: { from: new Date(2024, 8, 30) },
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html', 'vuejs', 'jquery', 'docker', 'git'),
		name: 'Full Stack Developer',
		color: '#15bf74',
		links: [],
		logo: Assets.Kanguru,
		shortDescription: "At Kanguru Digital Agency, I contribute to the development and deployment of scalable digital solutions for various client projects. Using PHP 7/8, Laravel, and Vue.js (Typescript, Composition API), I assist in building robust back-end systems and dynamic Single Page Applications (SPAs). My role involves designing and implementing RESTful APIs, managing Postgres databases, and optimizing data queries. I also work with Nginx and Apache to maintain stable hosting environments and use Docker for consistent development and deployment workflows.",
	},
	{
		slug: 'backend-developer',
		company: 'Symmetry Digital',
		description: 'As a PHP Developer at Symmetry Digital, I developed and integrated efficient PHP modules for web application back-end functionality. Leveraging JavaScript and jQuery, I created engaging user experiences. Managed MySQL databases for data storage and functionality. Contributed to research for technology improvements. Conducted troubleshooting for optimal performance. Monitored site performance, collaborated with front-end teams, and enhanced features for better user experience.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Karachi, Pakistan',
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html', 'jquery', 'git'),
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
		skills: getSkills('php', 'js', 'laravel', 'mysql', 'css', 'html', 'jquery', 'git'),
		name: 'Junior Backend Developer',
		color: 'blue',
		links: [],
		logo: Assets.Horizon,
		shortDescription: 'At Horizon Technologies, during my internship as a Backend Web Developer, I optimized PHP modules, integrated RESTful APIs into Laravel applications, and conducted code reviews to improve performance. Utilizing JavaScript and jQuery, I crafted engaging user experiences and ensured streamlined data management with MySQL. I diagnosed and resolved bugs, managed version control with Git, and created comprehensive documentation for seamless knowledge transfer.'
	},
];

export const title = 'Experience';
