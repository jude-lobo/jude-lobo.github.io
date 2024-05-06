import{A as i}from"./UIcon.99fee705.js";function u(e,...n){const r=Object.assign({},e);return Object.keys(r).forEach(o=>{n.includes(o)&&delete r[o]}),r}const a=e=>e,d=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],t=e=>{const n=u(e,"category");return e.category&&(n.category=d.find(r=>r.slug===e.category)),n},l=[t({slug:"php",color:"purple",description:"Proficient in developing dynamic web applications, creating efficient and scalable backend modules, and integrating with databases.",logo:i.PHP,name:"PHP",category:"pro-lang"}),t({slug:"js",color:"yellow",description:"Capable of developing interactive and dynamic user interfaces, handling client-side functionalities, and integrating with backend systems.",logo:i.JavaScript,name:"Javascript",category:"pro-lang"}),t({slug:"laravel",color:"orange",description:"Experienced in leveraging Laravel's MVC architecture, ORM, and powerful features for rapid and robust web development.",logo:i.Laravel,name:"Laravel",category:"framework"}),t({slug:"codeigniter",color:"orange",description:"Skilled in using CodeIgniter's lightweight framework for building high-performance web applications with ease.",logo:i.CodeIgniter,name:"CodeIgniter",category:"framework"}),t({slug:"mysql",color:"orange",description:"Proficient in designing and optimizing MySQL databases, writing complex queries, and ensuring data integrity and security.",logo:i.MySQL,name:"MySQL",category:"pro-lang"}),t({slug:"css",color:"blue",description:"Skilled in creating responsive and visually appealing web designs, implementing styles, layouts, and animations for modern user experiences.",logo:i.CSS,name:"CSS",category:"markup-style"}),t({slug:"html",color:"orange",description:"Strong understanding of HTML markup language for structuring web pages and integrating content with CSS and JavaScript.",logo:i.HTML,name:"HTML",category:"markup-style"}),t({slug:"jquery",color:"blue",description:"Experienced in utilizing jQuery for DOM manipulation, event handling, AJAX interactions, and simplifying JavaScript code.",logo:i.jQuery,name:"jQuery",category:"library"})],m="Skills",y=(...e)=>l.filter(n=>e.includes(n.slug)),f=e=>{const n=[],r=[];return l.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!o.category){console.log(o.category),r.push(o);return}let s=n.find(c=>{var g;return c.category.slug===((g=o.category)==null?void 0:g.slug)});s||(s={items:[],category:o.category},n.push(s)),s.items.push(o)}),r.length!==0&&n.push({category:{name:"Others",slug:"others"},items:r}),n};export{f as a,y as g,l as i,m as t};
