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
];

export const title = 'Projects';
