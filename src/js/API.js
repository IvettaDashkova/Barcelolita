// import { createClient } from '@sanity/client';
import axios from 'axios';
import iziToast from 'izitoast';

// createClient({
//   projectId: import.meta.env.VITE_ADMIN_PROJECT_ID,
//   dataset: import.meta.env.VITE_ADMIN_DATASET,
//   apiVersion: import.meta.env.VITE_ADMIN_API_VERSION,
//   token: import.meta.env.VITE_ADMIN_TOKEN,
//   useCdn: true,
// });

async function fetchPortfolio() {
  try {
    const data = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*%5B_type%3D%3D%22portfolio%22%5D%20%7C%20order(id%20asc)`
    );
    return data;
  } catch (error) {
    iziToast.error({
      title: 'Oops...',
      message: 'Network response was not ok',
      backgroundColor: 'var(--accent-color)',
      titleColor: 'var(--primary-color)',
      messageColor: 'var(--primary-color)',
    });
    return;
  }
}
fetchPortfolio();
