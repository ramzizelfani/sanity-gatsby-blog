export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f900b6fb7aec119cb4bf74d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s7oea7xa',
                  apiId: '31c29851-99aa-4e32-87fc-4a107efc8530'
                },
                {
                  buildHookId: '5f900b70ec868925e73e71e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hi9f71iv',
                  apiId: '3f83fb29-8fc0-4ff9-8411-3c8fcbe9be2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramzizelfani/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hi9f71iv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
