import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'mobits',
		color: '#5e95e3',
		description:
			"<p>mobits is a cloud-based platform to manage mobile marketing, reporting and user engagement. it enables clients to manage mobile marketing campaigns, run analytics & reports in real-time and deliver push notifications to users. the platform is a unique, white label, saas on-premise solution that can leverage your existing infrastructure to deliver real-time alerts, information, and communication from customers to enterprise. this solution will improve any company's business allowing them to reach consumers with targeted content, messaging, coupons and alerts regarding new products or sales coupons</p><h4>Responsibilities:</h4><ul><li>Developed and implemented a comprehensive campaign creation platform within the Mobits domain, allowing clients to efficiently create and manage SMS campaigns for their users.</li><li>Designed and built multiple portals tailored to different client needs under the Mobits umbrella, enhancing overall platform functionality and user accessibility.</li><ul>",
		shortDescription:
			"mobits is a cloud-based platform to manage mobile marketing, reporting and user engagement. it enables clients to manage mobile marketing campaigns, run analytics & reports in real-time and deliver push notifications to users. the platform is a unique, white label, saas on-premise solution that can leverage your existing infrastructure to deliver real-time alerts, information, and communication from customers to enterprise. this solution will improve any company's business allowing them to reach consumers with targeted content, messaging, coupons and alerts regarding new products or sales coupons.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: '#', label: 'In-house' }],
		logo: Assets.Mobits,
		name: 'Mobits',
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html', 'jquery'),
		type: 'In-house Project'
	},
	{
		slug: 'survit',
		color: '#ff3e00',
		description:
			'<p>survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.</p>',
		shortDescription:
			'survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.',
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: '#', label: 'In-house' }],
		logo: Assets.Survit,
		name: 'Survit',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html', 'jquery'),
		type: 'In-house Project',
	},
	{
		slug: 'unilever',
		color: '#1d4d8f',
		description:
			"<p>Unilever's website showcases its diverse range of products, brand information, and corporate initiatives. It offers an interactive platform for consumers to explore Unilever's offerings and engage with the brand.</p><h4>Responsibilities:</h4><ul><li>Contributed to various aspects of the website, implementing new features and enhancements.</li><li>Collaborated with the team to integrate marketing strategies and brand elements seamlessly into the website's design and functionality.</li></ul>",
		shortDescription:
			"Unilever's website showcases its diverse range of products, brand information, and corporate initiatives. It offers an interactive platform for consumers to explore Unilever's offerings and engage with the brand.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.unilever.pk/', label: 'Unilever' }],
		logo: Assets.Unilever,
		name: 'Unilever',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'knorr',
		color: '#92B800',
		description:
			"<p>Knorr's website features recipes, cooking tips, and product information related to Knorr's food products. It offers a platform for users to discover new recipes and engage with the Knorr brand.</p><h4>Responsibilities:</h4><ul><li>Designed and implemented various website features and modules.</li><li>Enhanced user engagement and brand visibility.</li></ul>",
		shortDescription:
			"Knorr's website features recipes, cooking tips, and product information related to Knorr's food products. It offers a platform for users to discover new recipes and engage with the Knorr brand.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.unilever.pk/brands/nutrition/knorr/', label: 'Knorr' }],
		logo: Assets.Knorr,
		name: 'Knorr',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'lipton',
		color: '#F7D300',
		description:
			"<p>Lipton's website is focused on tea products, offering information about Lipton's tea varieties, recipes, and health benefits. It provides users with resources to explore tea-related content and promotions.</p><h4>Responsibilities:</h4><ul><li>Utilized AEM to create and integrate multiple modules.</li><li>Collaborated with design and marketing teams.</li></ul>",
		shortDescription:
			"Lipton's website is focused on tea products, offering information about Lipton's tea varieties, recipes, and health benefits. It provides users with resources to explore tea-related content and promotions.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.lipton.com.pk', label: 'Lipton' }],
		logo: Assets.Lipton,
		name: 'Lipton',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'jazz',
		color: '#FF003F',
		description:
			"<p>Jazz's website is a portal for telecom services, offering mobile plans, internet packages, and digital solutions. It provides users with access to account management tools and customer support.</p><h4>Responsibilities:</h4><ul><li>Managed backend portal and synchronized website.</li><li>Created and managed APIs for user transactions.</li></ul>",
		shortDescription:
			"Jazz's website is a portal for telecom services, offering mobile plans, internet packages, and digital solutions. It provides users with access to account management tools and customer support.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.jazz.com.pk', label: 'Jazz' }],
		logo: Assets.Jazz,
		name: 'Jazz',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'hbl',
		color: '#002F6C',
		description:
			"<p>HBL's website offers a wide range of banking services, including loans, account management, and financial solutions. It provides users with easy access to banking tools and resources.</p><h4>Responsibilities:</h4><ul><li>Developed custom modules for loan calculation, form submissions, and data display.</li><li>Managed content and updates on the CMS.</li></ul>",
		shortDescription:
			"HBL's website offers a wide range of banking services, including loans, account management, and financial solutions. It provides users with easy access to banking tools and resources.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.hbl.com/', label: 'HBL' }],
		logo: Assets.HBL,
		name: 'HBL',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'psx',
		color: '#006F9A',
		description:
			"<p>The PSX website serves as a hub for stock market analysis, trading, and information related to Pakistan's stock exchange. It provides tools for market analysis, glossaries for stock exchange terms, and a comprehensive gallery of stock-related content.</p><h4>Responsibilities:</h4><ul><li>Managed and optimized the backend logic using ExpressionEngine CMS, ensuring smooth operations and performance.</li><li>Conducted regular maintenance tasks, including bug fixing and performance tuning, to uphold the website's reliability and user experience.</li><li>Developed key features such as market analysis tools, a comprehensive glossary for stock exchange terms, an interactive gallery, and otfunctionalities essential to stock exchange operations.</li></ul>",
		shortDescription:
			"The PSX website serves as a hub for stock market analysis, trading, and information related to Pakistan's stock exchange. It provides tools for market analysis, glossaries for stock exchange terms, and a comprehensive gallery of stock-related content.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.psx.com.pk/', label: 'PSX' }],
		logo: Assets.PSX,
		name: 'PSX',
		skills: getSkills('php', 'js', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'mcb',
		color: '#003B49',
		description:
			"<p>MCB's website is a comprehensive platform for banking services, including online banking, account management, and financial products. It provides users with tools to manage their finances efficiently.</p><h4>Responsibilities:</h4><ul><li>Managed backend features, maintenance, and development.</li><li>Developed and maintained specific backend functionalities for MCB.</li><li>Conducted rigorous testing and debugging.</li></ul>",
		shortDescription:
			"MCB's website is a comprehensive platform for banking services, including online banking, account management, and financial products. It provides users with tools to manage their finances efficiently.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.mcb.com.pk', label: 'MCB' }],
		logo: Assets.MCB,
		name: 'MCB',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'faysal',
		color: '#004F9F',
		description:
			"<p>Faysal Bank's website offers banking services, loan options, and financial solutions. It provides users with tools for online banking and account management.</p><h4>Responsibilities:</h4><ul><li>Worked on backend features critical to online banking.</li><li>Collaborated with stakeholders to gather requirements.</li></ul>",
		shortDescription:
			"Faysal Bank's website offers banking services, loan options, and financial solutions. It provides users with tools for online banking and account management.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.faysalbank.com/', label: 'Faysal' }],
		logo: Assets.Faysal,
		name: 'Faysal Bank',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'iobm',
		color: 'blue',
		description:
			"<p>IoBM's website features information about the institute, academic programs, and student resources. It offers users tools for exploring educational opportunities and engaging with IoBM's community.</p><h4>Responsibilities:</h4><ul><li>Managed backend features, maintenance, and development related to IoBM's services.</li><li>Collaborated with IoBM to enhance backend functionalities, improving overall operational efficiency and user experience.</li></ul>",
		shortDescription:
			"IoBM's website features information about the institute, academic programs, and student resources. It offers users tools for exploring educational opportunities and engaging with IoBM's community.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.iobm.edu.pk', label: 'IoBM' }],
		logo: Assets.IoBM,
		name: 'IoBM',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'ebm',
		color: '#F4A300',
		description:
			"<p>EBM's website features information about its food products, recipes, and nutritional content. It offers users a platform to discover EBM's offerings and engage with food-related content.</p><h4>Responsibilities:</h4><ul><li>Developed and maintained backend functionalities.</li><li>Conducted thorough testing and quality assurance.</li></ul>",
		shortDescription:
			"EBM's website features information about its food products, recipes, and nutritional content. It offers users a platform to discover EBM's offerings and engage with food-related content.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.ebm.com.pk/', label: 'EBM' }],
		logo: Assets.EBM,
		name: 'EBM',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'martindow',
		color: 'blue',
		description:
			"<p>MartinDow's website showcases its pharmaceutical products, research initiatives, and corporate information. It offers users resources to explore MartinDow's healthcare offerings.</p><h4>Responsibilities:</h4><ul><li>Led redesign and redevelopment efforts.</li><li>Conducted user testing and feedback sessions.</li></ul>",
		shortDescription:
			"MartinDow's website showcases its pharmaceutical products, research initiatives, and corporate information. It offers users resources to explore MartinDow's healthcare offerings.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.martindow.com/', label: 'MartinDow' }],
		logo: Assets.Martin,
		name: 'MartinDow',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'searle',
		color: '#0C3C56',
		description:
			"<p>Searle's website features information about its pharmaceutical products, medical research, and healthcare services. It provides users with resources to learn about Searle's healthcare solutions.</p><h4>Responsibilities:</h4><ul><li>Managed backend features and integrations.</li><li>Implemented data management solutions.</li></ul>",
		shortDescription:
			"Searle's website features information about its pharmaceutical products, medical research, and healthcare services. It provides users with resources to learn about Searle's healthcare solutions.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.searlepakistan.com/', label: 'Searle' }],
		logo: Assets.Searle,
		name: 'Searle',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
	{
		slug: 'khaadi',
		color: '#C72C41',
		description:
			"<p>Khaadi's website is focused on fashion products, offering clothing, accessories, and home decor. It provides users with a platform to shop for Khaadi's products and engage with fashion trends.</p><h4>Responsibilities:</h4><ul><li>Contributed to the development of specific website features.</li><li>Enhanced user engagement and sales efforts.</li></ul>",
		shortDescription:
			"Khaadi's website is focused on fashion products, offering clothing, accessories, and home decor. It provides users with a platform to shop for Khaadi's products and engage with fashion trends.",
		period: { from: new Date(2020, 0, 29), to: new Date(2024, 1, 5) },
		links: [{ to: 'https://www.khaadi.com/', label: 'Khaadi' }],
		logo: Assets.Khaadi,
		name: 'Khaadi',
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html', 'jquery'),
		type: 'Client Website',
	},
];

export const title = 'Projects';
