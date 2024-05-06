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
		links: [{ to: '#', label: 'In-house' }],
		logo: Assets.Mobits,
		name: 'Mobits',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'laravel', 'mysql', 'css', 'html'),
		type: 'In-house Project'
	},
	{
		slug: 'survit',
		color: '#ff3e00',
		description:
			'<p>survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.</p>',
		shortDescription:
			'survit is an end-to-end saas solution that enables organizations to measure satisfaction level of their customers at scale. the solution is based on csat method of measuring customer satisfaction levels at sales & service touchpoints.',
		links: [],
		logo: Assets.Survit,
		name: 'Survit',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house Project',
		screenshots: [
			// {
			// 	label: 'screen 1',
			// 	src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '2',
			// 	src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '3',
			// 	src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '4',
			// 	src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '5',
			// 	src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '6',
			// 	src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// }
		]
	},
	{
		slug: 'psx',
		color: '#ff3e00',
		description:
			"<p>The PSX website serves as a hub for stock market analysis, trading, and information related to Pakistan's stock exchange. It provides tools for market analysis, glossaries for stock exchange terms, and a comprehensive gallery of stock-related content.</p><h4>Responsibilities:</h4><ul><li>Managed and optimized the backend logic using ExpressionEngine CMS, ensuring smooth operations and performance.</li><li>Conducted regular maintenance tasks, including bug fixing and performance tuning, to uphold the website's reliability and user experience.</li><li>Developed key features such as market analysis tools, a comprehensive glossary for stock exchange terms, an interactive gallery, and otfunctionalities essential to stock exchange operations.</li></ul>",
		shortDescription:
			"The PSX website serves as a hub for stock market analysis, trading, and information related to Pakistan's stock exchange. It provides tools for market analysis, glossaries for stock exchange terms, and a comprehensive gallery of stock-related content.",
		links: [],
		logo: Assets.PSX,
		name: 'PSX',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'unilever',
		color: '#ff3e00',
		description:
			"<p>Unilever's website showcases its diverse range of products, brand information, and corporate initiatives. It offers an interactive platform for consumers to explore Unilever's offerings and engage with the brand.</p><h4>Responsibilities:</h4><ul><li>Contributed to various aspects of the website, implementing new features and enhancements.</li><li>Collaborated with the team to integrate marketing strategies and brand elements seamlessly into the website's design and functionality.</li></ul>",
		shortDescription:
			"<p>Unilever's website showcases its diverse range of products, brand information, and corporate initiatives. It offers an interactive platform for consumers to explore Unilever's offerings and engage with the brand.</p>",
		links: [],
		logo: Assets.Unilever,
		name: 'Unilever',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'mcb',
		color: '#ff3e00',
		description:
			"<p>MCB's website is a comprehensive platform for banking services, including online banking, account management, and financial products. It provides users with tools to manage their finances efficiently.</p><h4>Responsibilities:</h4><ul><li>Managed backend features, maintenance, and development.</li><li>Developed and maintained specific backend functionalities for MCB.</li><li>Conducted rigorous testing and debugging.</li></ul>",
		shortDescription:
			"<p>MCB's website is a comprehensive platform for banking services, including online banking, account management, and financial products. It provides users with tools to manage their finances efficiently.</p>",
		links: [],
		logo: Assets.MCB,
		name: 'MCB',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'hbl',
		color: '#ff3e00',
		description:
			"<p>HBL's website offers a wide range of banking services, including loans, account management, and financial solutions. It provides users with easy access to banking tools and resources.</p><h4>Responsibilities:</h4><ul><li>Developed custom modules for loan calculation, form submissions, and data display.</li><li>Managed content and updates on the CMS.</li></ul>",
		shortDescription:
			"<p>HBL's website offers a wide range of banking services, including loans, account management, and financial solutions. It provides users with easy access to banking tools and resources.</p>",
		links: [],
		logo: Assets.HBL,
		name: 'HBL',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'jazz',
		color: '#ff3e00',
		description:
			"<p>Jazz's website is a portal for telecom services, offering mobile plans, internet packages, and digital solutions. It provides users with access to account management tools and customer support.</p><h4>Responsibilities:</h4><ul><li>Managed backend portal and synchronized website.</li><li>Created and managed APIs for user transactions.</li></ul>",
		shortDescription:
			"<p>Jazz's website is a portal for telecom services, offering mobile plans, internet packages, and digital solutions. It provides users with access to account management tools and customer support.</p>",
		links: [],
		logo: Assets.Jazz,
		name: 'Jazz',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'Knorr',
		color: '#ff3e00',
		description:
			"<p>Knorr's website features recipes, cooking tips, and product information related to Knorr's food products. It offers a platform for users to discover new recipes and engage with the Knorr brand.</p><h4>Responsibilities:</h4><ul><li>Designed and implemented various website features and modules.</li><li>Enhanced user engagement and brand visibility.</li></ul>",
		shortDescription:
			"<p>Knorr's website features recipes, cooking tips, and product information related to Knorr's food products. It offers a platform for users to discover new recipes and engage with the Knorr brand.</p>",
		links: [],
		logo: Assets.Knorr,
		name: 'Knorr',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'Lipton',
		color: '#ff3e00',
		description:
			"<p>Lipton's website is focused on tea products, offering information about Lipton's tea varieties, recipes, and health benefits. It provides users with resources to explore tea-related content and promotions.</p><h4>Responsibilities:</h4><ul><li>Utilized AEM to create and integrate multiple modules.</li><li>Collaborated with design and marketing teams.</li></ul>",
		shortDescription:
			"<p>Lipton's website is focused on tea products, offering information about Lipton's tea varieties, recipes, and health benefits. It provides users with resources to explore tea-related content and promotions.</p>",
		links: [],
		logo: Assets.Lipton,
		name: 'Lipton',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'EBM',
		color: '#ff3e00',
		description:
			"<p>EBM's website features information about its food products, recipes, and nutritional content. It offers users a platform to discover EBM's offerings and engage with food-related content.</p><h4>Responsibilities:</h4><ul><li>Developed and maintained backend functionalities.</li><li>Conducted thorough testing and quality assurance.</li></ul>",
		shortDescription:
			"<p>EBM's website features information about its food products, recipes, and nutritional content. It offers users a platform to discover EBM's offerings and engage with food-related content.</p>",
		links: [],
		logo: Assets.EBM,
		name: 'EBM',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'js',
		color: '#ff3e00',
		description:
			"<p>JS Bank's website provides banking services, financial products, and investment solutions. It offers users tools for managing their finances and accessing banking resources.</p><h4>Responsibilities:</h4><ul><li>Contributed to backend development tasks.</li><li>Implemented optimizations and enhancements.</li></ul>",
		shortDescription:
			"<p>JS Bank's website provides banking services, financial products, and investment solutions. It offers users tools for managing their finances and accessing banking resources.</p>",
		links: [],
		logo: Assets.JSB,
		name: 'JS Bank',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'faysal',
		color: '#ff3e00',
		description:
			"<p>Faysal Bank's website offers banking services, loan options, and financial solutions. It provides users with tools for online banking and account management.</p><h4>Responsibilities:</h4><ul><li>Worked on backend features critical to online banking.</li><li>Collaborated with stakeholders to gather requirements.</li></ul>",
		shortDescription:
			"<p>Faysal Bank's website offers banking services, loan options, and financial solutions. It provides users with tools for online banking and account management.</p>",
		links: [],
		logo: Assets.Faysal,
		name: 'Faysal Bank',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'MartinDow',
		color: '#ff3e00',
		description:
			"<p>MartinDow's website showcases its pharmaceutical products, research initiatives, and corporate information. It offers users resources to explore MartinDow's healthcare offerings.</p><h4>Responsibilities:</h4><ul><li>Led redesign and redevelopment efforts.</li><li>Conducted user testing and feedback sessions.</li></ul>",
		shortDescription:
			"<p>MartinDow's website showcases its pharmaceutical products, research initiatives, and corporate information. It offers users resources to explore MartinDow's healthcare offerings.</p>",
		links: [],
		logo: Assets.Martin,
		name: 'MartinDow',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'Searle',
		color: '#ff3e00',
		description:
			"<p>Searle's website features information about its pharmaceutical products, medical research, and healthcare services. It provides users with resources to learn about Searle's healthcare solutions.</p><h4>Responsibilities:</h4><ul><li>Managed backend features and integrations.</li><li>Implemented data management solutions.</li></ul>",
		shortDescription:
			"<p>Searle's website features information about its pharmaceutical products, medical research, and healthcare services. It provides users with resources to learn about Searle's healthcare solutions.</p>",
		links: [],
		logo: Assets.Searle,
		name: 'Searle',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'Khaadi',
		color: '#ff3e00',
		description:
			"<p>Khaadi's website is focused on fashion products, offering clothing, accessories, and home decor. It provides users with a platform to shop for Khaadi's products and engage with fashion trends.</p><h4>Responsibilities:</h4><ul><li>Contributed to the development of specific website features.</li><li>Enhanced user engagement and sales efforts.</li></ul>",
		shortDescription:
			"<p>Khaadi's website is focused on fashion products, offering clothing, accessories, and home decor. It provides users with a platform to shop for Khaadi's products and engage with fashion trends.</p>",
		links: [],
		logo: Assets.Khaadi,
		name: 'Khaadi',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	},
	{
		slug: 'IoBM',
		color: '#ff3e00',
		description:
			"<p>IoBM's website features information about the institute, academic programs, and student resources. It offers users tools for exploring educational opportunities and engaging with IoBM's community.</p><h4>Responsibilities:</h4><ul><li>Managed backend features, maintenance, and development related to IoBM's services.</li><li>Collaborated with IoBM to enhance backend functionalities, improving overall operational efficiency and user experience.</li></ul>",
		shortDescription:
			"<p>IoBM's website features information about the institute, academic programs, and student resources. It offers users tools for exploring educational opportunities and engaging with IoBM's community.</p>",
		links: [],
		logo: Assets.IoBM,
		name: 'IoBM',
		period: {
			from: new Date()
		},
		skills: getSkills('php', 'js', 'codeigniter', 'mysql', 'css', 'html'),
		type: 'In-house Project',
	}
];

export const title = 'Projects';
