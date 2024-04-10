import axios from 'axios';
import iziToast from 'izitoast';

export async function fetchPortfolio() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="portfolio"]{ _id, id,nameEn,nameUa,imgURL,descriptionEn, descriptionUa, _updatedAt }|order(id asc)`
    );
    return result;
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
export async function fetchDataGallery(portfolioItemId) {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_id=="${portfolioItemId}"]{ _id,id,nameEn,nameUa,imgURL,descriptionEn, descriptionUa, img, _updatedAt }|order(id asc)`
    );
    return result[0];
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
export async function fetchPrice() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="price"]{id,titleEn, titleUa, USD,EUR, descriptionEn,descriptionUa}|order(id asc)`
      );
  
    return result;
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
export async function fetchVideo() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="video"]`
    );
    return result[0].url;
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

