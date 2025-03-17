export interface Game {
  title: string;
  imageSrc: string;
  slug: string;
  rating?: number;
  isHot?: boolean;
  isNew?: boolean;
  category?: string[]
  releaseDate?: string;
}

export const games: Game[] = [

    {
        title: 'Chill Guy Clicker',
        imageSrc: '/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg',
        slug: '/chill-guy-clicker',
        rating: 4.5,
        isHot: true,
        category: ['clicker'],
        releaseDate: '2024-12-09'
      },
  {
    title: 'Chill Girl Clicker',
    imageSrc: '/images/game-thumbnails/chill-girl-clicker-game-f220x175.png',
    slug: '/chill-girl-clicker',
    rating: 4.5,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2024-12-09'
  },
  {
    title: 'Roblox Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/568479962_480x360.png',
    slug: '/roblox-clicker',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2024-01-03'
  },
  {
    title: 'Pokemon Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png',
    slug: '/pokemon-clicker',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2016-07-16'
  },
  {
    title: 'Cookie Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/12575620_480x360.png',
    slug: '/cookie-clicker',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2014-03-01'
  },
  {
    title: 'Candy Clicker 2',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png',
    slug: '/candy-clicker-2',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2024-05-20'
  },
  {
    title: 'Money Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/208974963_480x360.png',
    slug: '/money-clicker',
    rating: 4.0,
    isHot: true, 
    category: ['clicker'],
    releaseDate: '2020-10-17'
  },
  {
    title: 'Minecraft Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/21610188_480x360.png',
    slug: '/minecraft-clicker',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2014-05-05'
  },
  {
    title: 'Whopper Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/834840279_480x360.png',
    slug: '/whopper-clicker',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2023-04-20'
  },
  {
    title: 'Pokemon Clicker V2',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/13878266_480x360.png',
    slug: '/pokemon-clicker-v2',
    rating: 4.0,
    isHot: true,
    category: ['clicker'],
    releaseDate: '2013-11-05'
  },
  {
    title: 'Fortnite Clicker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/284682486_480x360.png',
    slug: '/fortnite-clicker',
    rating: 4.0,
    isHot: true,    
    category: ['clicker'],
    releaseDate: '2020-07-06'
  },
  {
    title: 'Sprunki Retake Friendly',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1104542703_480x360.png',
    slug: '/sprunki-retake-friendly',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2024-12-01'
  },
  {
    title: 'Sprunki Interactive Beta',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1090663998_480x360.png',
    slug: '/sprunki-interactive-beta',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2024-11-02'
  },
  {
    title: 'Sprunki Maker Big Update',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png',
    slug: '/sprunki-maker-big-update',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2025-03-15'
  },
  {
    title: 'Incredibox Sprunki Babies',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png',
    slug: '/incredibox-sprunki-babies',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2024-11-15'
  },
  {
    title: 'Sprunki OC Maker',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1094541597_480x360.png',
    slug: '/sprunki-oc-maker',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2024-11-11'
  },
  {
    title: 'Sprunki',
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1088280075_480x360.png',
    slug: '/sprunki',
    rating: 3.5,
    isHot: false,
    isNew: true,
    category: ['Sprunki'],
    releaseDate: '2024-10-29'
  },
  
  
  
  
  
  
  
  
  

  // Add more games...
]; 