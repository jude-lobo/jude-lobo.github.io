import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'Proficient in developing dynamic web applications, creating efficient and scalable backend modules, and integrating with databases.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Capable of developing interactive and dynamic user interfaces, handling client-side functionalities, and integrating with backend systems.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'orange',
		description:
			"Experienced in leveraging Laravel's MVC architecture, ORM, and powerful features for rapid and robust web development.",
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'codeigniter',
		color: 'orange',
		description:
			"Skilled in using CodeIgniter's lightweight framework for building high-performance web applications with ease.",
		logo: Assets.CodeIgniter,
		name: 'CodeIgniter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description:
			'Proficient in designing and optimizing MySQL databases, writing complex queries, and ensuring data integrity and security.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Skilled in creating responsive and visually appealing web designs, implementing styles, layouts, and animations for modern user experiences.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Strong understanding of HTML markup language for structuring web pages and integrating content with CSS and JavaScript.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'jquery',
		color: 'blue',
		description:
			'Experienced in utilizing jQuery for DOM manipulation, event handling, AJAX interactions, and simplifying JavaScript code.',
		logo: Assets.jQuery,
		name: 'jQuery',
		category: 'library'
	}),
	defineSkill({
		slug: 'vuejs',
		color: '#08bf86',
		description:
			'Experienced in using Vue.js for building dynamic user interfaces, component-based architecture, state management, and handling routing for Single Page Applications (SPAs).',
		logo: Assets.VueJs,
		name: 'VueJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'docker',
		color: '#2496ED',
		description:
			'Experienced in leveraging Docker to create consistent development environments, containerize applications, and streamline testing processes. Skilled in writing and managing Dockerfiles, orchestrating multi-container setups using Docker Compose, and optimizing workflows for local development and debugging.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: '#F05032',
		description:
			'Proficient in using Git for version control, branch management, and collaborative development. Experienced in managing repositories, resolving merge conflicts, and utilizing Git workflows (e.g., Git Flow) to maintain code quality and track project history effectively.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
