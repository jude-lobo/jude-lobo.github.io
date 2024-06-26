import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
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
