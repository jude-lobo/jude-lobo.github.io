import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Jude';

export const lastName = 'Lobo';

export const descriptionHeading = 'Full Stack Developer';

export const description = 'specializing in developing secure, high-performance backend solutions using PHP (Laravel, CodeIgniter), SQL, and JavaScript. With extensive experience working on scalable web applications, I focus on optimizing performance, enhancing security, and ensuring clean, maintainable code. Skilled in integrating Vue.js components, utilizing Docker for consistent development environments, and collaborating in agile teams using Git and JIRA. Dedicated to building robust systems that meet technical standards while solving complex problems efficiently.'

// export const description =
// 	'An experienced Web Developer with 4 years of proficient experience in PHP Programming, specializing in Laravel, and CodeIgniter Frameworks. Seeking to leverage my expertise in JavaScript (JS), jQuery MySQL, and API Development to contribute to innovative web projects. Dedicated to optimizing web application performance and enhancing user experience through collaborative problem-solving and continuous learning of emerging technologies. Committed to delivering high-quality, scalable solutions while fostering teamwork and creativity in a dynamic work environment.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/jude-jonathan-lobo/'
	},
	{
		platform: Platform.Email,
		link: 'judejonathan.lobo@gmail.com'
	},
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/jude-lobo/' 
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/24446792'
	},	
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/JudeJLobo'
	},
];

export const skills = getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'vuejs', 'git', 'docker');
