// import { createClient }from '@sanity/client';

// const client = createClient({
//   projectId: 'drd3cmm3',
//   dataset: 'production',
//   apiVersion: '2023-03-07', // use a UTC date string
//   token:
//     'skj4JRPRcBgK6YMJFLCYhP0IN94299xi24wCpzX2i3PFVAmIwumtnqnOo405tDIKmSYMcLYWoFpIpiGXPdj4k395g75uNxMjyMTIFzxsYgJ0gCLLnYH1Uu9iKwiGiOoCv9NVDb3uWp19fhy9eyVib4CGdyYoXAUrkModKOrimcAvyhZfferG', // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// });

function fetchPortfolio() {
    const qwe = fetch(
      'https://drd3cmm3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22portfolio%22%5D%20%7C%20order(id%20asc)',
      {
        method: 'GET',
        headers: {
          // 'Authorization': `Bearer skj4JRPRcBgK6YMJFLCYhP0IN94299xi24wCpzX2i3PFVAmIwumtnqnOo405tDIKmSYMcLYWoFpIpiGXPdj4k395g75uNxMjyMTIFzxsYgJ0gCLLnYH1Uu9iKwiGiOoCv9NVDb3uWp19fhy9eyVib4CGdyYoXAUrkModKOrimcAvyhZfferG`,
          'Content-Type': 'application/json',
        },
      }
    ).then(response => {
      // Check if the response is successful (status 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    });
}
qwe();