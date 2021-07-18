export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ef8cdd8dfd8d66f3812dad",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-studio-2noxpi8t",
                  apiId: "c88138d4-c876-4af1-a834-8cec58b272ec",
                },
                {
                  buildHookId: "60ef8cdd71bb8569f1eb3496",
                  title: "Blog Website",
                  name: "sanity-gatsby-web-xprdyfb4",
                  apiId: "8a7bb2fa-2cfb-46f6-baf4-fffb677cbd79",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NoorMosia/sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://footyza.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
