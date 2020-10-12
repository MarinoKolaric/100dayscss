exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "days" } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Error loading days!', reporter.errors);
  }

  result.data.allFile.edges.forEach(day => {
    actions.createPage({
      path: `/days/${day.node.name}`,
      component: require.resolve('./src/templates/day.tsx'),
      context: {
        dayId: day.node.id,
      },
    });
  });
};
