import{A as i}from"./UIcon.0e016cf8.js";function u(e,...o){const t=Object.assign({},e);return Object.keys(t).forEach(r=>{o.includes(r)&&delete t[r]}),t}const n=e=>e,d=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Langauges",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],a=e=>{const o=u(e,"category");return e.category&&(o.category=d.find(t=>t.slug===e.category)),o},l=[a({slug:"php",color:"purple",description:"Proficient in developing dynamic web applications, creating efficient and scalable backend modules, and integrating with databases.",logo:i.PHP,name:"PHP",category:"pro-lang"}),a({slug:"js",color:"yellow",description:"Capable of developing interactive and dynamic user interfaces, handling client-side functionalities, and integrating with backend systems.",logo:i.JavaScript,name:"Javascript",category:"pro-lang"}),a({slug:"laravel",color:"orange",description:"Experienced in leveraging Laravel's MVC architecture, ORM, and powerful features for rapid and robust web development.",logo:i.Laravel,name:"Laravel",category:"framework"}),a({slug:"codeigniter",color:"orange",description:"Skilled in using CodeIgniter's lightweight framework for building high-performance web applications with ease.",logo:i.CodeIgniter,name:"CodeIgniter",category:"framework"}),a({slug:"mysql",color:"orange",description:"Proficient in designing and optimizing MySQL databases, writing complex queries, and ensuring data integrity and security.",logo:i.MySQL,name:"MySQL",category:"db"}),a({slug:"css",color:"blue",description:"Skilled in creating responsive and visually appealing web designs, implementing styles, layouts, and animations for modern user experiences.",logo:i.CSS,name:"CSS",category:"markup-style"}),a({slug:"html",color:"orange",description:"Strong understanding of HTML markup language for structuring web pages and integrating content with CSS and JavaScript.",logo:i.HTML,name:"HTML",category:"markup-style"}),a({slug:"jquery",color:"blue",description:"Experienced in utilizing jQuery for DOM manipulation, event handling, AJAX interactions, and simplifying JavaScript code.",logo:i.jQuery,name:"jQuery",category:"library"}),a({slug:"vuejs",color:"#08bf86",description:"Experienced in using Vue.js for building dynamic user interfaces, component-based architecture, state management, and handling routing for Single Page Applications (SPAs).",logo:i.VueJs,name:"VueJs",category:"framework"}),a({slug:"docker",color:"#2496ED",description:"Experienced in leveraging Docker to create consistent development environments, containerize applications, and streamline testing processes. Skilled in writing and managing Dockerfiles, orchestrating multi-container setups using Docker Compose, and optimizing workflows for local development and debugging.",logo:i.Docker,name:"Docker",category:"devtools"}),a({slug:"git",color:"#F05032",description:"Proficient in using Git for version control, branch management, and collaborative development. Experienced in managing repositories, resolving merge conflicts, and utilizing Git workflows (e.g., Git Flow) to maintain code quality and track project history effectively.",logo:i.Git,name:"Git",category:"devtools"})],m="Skills",y=(...e)=>l.filter(o=>e.includes(o.slug)),f=e=>{const o=[],t=[];return l.forEach(r=>{if(e.trim()&&!r.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!r.category){console.log(r.category),t.push(r);return}let s=o.find(c=>{var g;return c.category.slug===((g=r.category)==null?void 0:g.slug)});s||(s={items:[],category:r.category},o.push(s)),s.items.push(r)}),t.length!==0&&o.push({category:{name:"Others",slug:"others"},items:t}),o};export{f as a,y as g,l as i,m as t};
