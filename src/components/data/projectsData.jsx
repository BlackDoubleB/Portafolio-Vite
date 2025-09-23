export const projectsData = [
	{
		imgSrc: 'https://res.cloudinary.com/doublebl/image/upload/v1757639628/portada_reyno_verde_gqwe51.png',
		title: 'Tienda de Plantas',
		skills: ['Tailwind','Typescript','Angular', 'CS', 'NET', 'SQL'],
		descripcion: "Reyno Verde es una aplicación web enfocada en la venta y gestión de plantas. El proyecto ofrece un catálogo variado de plantas, donde los usuarios pueden explorar, elegir y comprar de manera sencilla.",
		demoURL: 'https://reyno-verde-front-iyvu.vercel.app',
		repoURL: 'https://github.com/BlackDoubleB/ReynoVerde-Front.git',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://res.cloudinary.com/doublebl/image/upload/v1758577698/favoribooks_gu1lgk.png',
		title: 'Tienda de Libros',
		skills: ['Tailwind','Typescript','Angular','Firebase'],
		descripcion:
			"FavoriBooks es tu espacio personal para organizar, guardar y descubrir libros. Crea listas privadas con tus títulos favoritos, lleva un control de tus lecturas y explora nuevas recomendaciones para expandir tu colección.",
		demoURL: 'https://favoribooks.vercel.app',
		repoURL: 'https://github.com/BlackDoubleB/FavoriBooks.git',
		anim: 'fade-right',
	},
	
	{
		imgSrc: 'https://res.cloudinary.com/doublebl/image/upload/v1758496346/project-market_omvrcx.png',
		title: 'Tienda de Variados',
		skills: ['NextJs', 'Typescript','postgresql'],
		descripcion:
			'Market es un panel administrativo para gestionar tu negocio de forma rápida y centralizada. Controla productos, precios, stock y ventas en un solo lugar. Automatiza tareas repetitivas',
		demoURL: 'https://project-market-pi.vercel.app',
		repoURL: 'https://github.com/BlackDoubleB/project-market.git',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	Typescript: 'skill-icons:typescript',
	React: 'skill-icons:react-dark',
	Angular: 'skill-icons:angular-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	CS: 'skill-icons:cs',
	NET: 'skill-icons:dotnet',
	SQL: 'vscode-icons:file-type-sql',
	Firebase:'material-icon-theme:firebase',
	NextJs: 'skill-icons:nextjs-light',
	postgresql: 'skill-icons:postgresql-dark',
};

export const getProjectsData = projectsData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => 
			skillIcons[skill]),	
	};
});
