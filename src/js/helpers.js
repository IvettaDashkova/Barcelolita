export function formImgURL(img) {
  const imgData = img.asset._ref.split('-');

  return `https://cdn.sanity.io/images/${
    import.meta.env.VITE_ADMIN_PROJECT_ID
  }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
    imgData[3]
  }`;
}

export function formatDate(isoDate, lng) {
  const months = {
    en: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    ua: [
      'Січ',
      'Лют',
      'Бер',
      'Квіт',
      'Трав',
      'Черв',
      'Лип',
      'Серп',
      'Верес',
      'Жовт',
      'Лист',
      'Груд',
    ],
  };
  const date = new Date(isoDate);

  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${months[lng][monthIndex]} ${day.toString().padStart(2, '0')}, ${year}`;
}