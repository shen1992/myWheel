const localParam = () => {
  const {search} = window.location;
  const reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g');
  const data = {};
  if (search) {
      search.replace(reg, ($0, $1, $2, $3) => {
          data[$1] = $3;
      });
  }
  return data;
}

