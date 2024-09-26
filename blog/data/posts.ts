export interface Post{
    id:string;
    title:string;
    content:string
}


export const posts:Post[]=
[
    {
       id:'1',
       title:' My first Post About Next.js',
       content:' Next.js is a React framework that enables developers to build fast, dynamic, and scalable web applications with ease',
    },
    {
        id:'2',
        title:' My Second Post About component',
        content:'In Next.js, components are the building blocks of your UI, making your development modular and scalable',
    },
    {
        id:'3',
        title:'My third Post About Routing',
        content:'One of the best features of Next.js is its file-based routing system. No need for complex configurations—just create files, and they automatically become routes. you can say its page or route',
    },
    {
        id:'4',
        title:'My Four Post About Static VS Dynamic Page',
        content:' Pre-rendered at build time. These pages are fast, cached, and ideal for content that doesnt change often, like blogs or marketing pages. VS Perfect for content that changes frequently or is user-specific, like dashboards or e-commerce product pages.',
    },
    {
        id:'5',
        title:'My Five Posts About Rendering',
        content:'Static Rendering: Pages are generated at build time and served as static files.Vs Dynamic Rendering: Pages are generated on the server for each request, allowing real-time data updates.',
    },
    {
        id:'6',
        title:'My Six Posts About States',
        content:'State in   Next.js refers to an object that holds information about a components current situation. It allows components to create dynamic and interactive UIs by managing data that can change over time.',
    },
]
