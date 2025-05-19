export const UrlToCode = (row) => {
  const queryRow = {};
  for (const key in row) {
    queryRow[key] = encodeURIComponent(row[key]);
  }
  return queryRow;
};
export const CodeToUrl = (row) => {
  const queryRow = {};
  for (const key in row) {
    queryRow[key] = decodeURIComponent(row[key]);
  }
  return queryRow;
};

export const loadFile = async (fileName, url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: response.type });
    return file;
  } catch (error) {
    console.error('Failed to load file:', error);
  }
};

export const loadFileArray = (list) => {
  return new Promise((resolve) => {
    const arr = [];
    for (const item of list) {
      fetchData(item).then((res) => {
        arr.push(res);
      });
    }
    resolve(arr);
  });
};

const fetchData = async (item) => {
  try {
    // 使用 async/await 模拟同步调用
    const response = await new Promise((resolve) => {
      fetch(item.url)
        .then((res) => res.blob())
        .then((data) => resolve(data));
    });
    const file = new File([response], item.name, { type: response.type });
    return {
      id: item.url,
      name: item.name,
      url: item.url,
      status: 'finished',
      file,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
