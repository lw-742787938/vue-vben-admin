export const UrlToCode = (row: any) => {
  const queryRow: any = {};
  for (const key in row) {
    queryRow[key] = encodeURIComponent(row[key]);
  }
  return queryRow;
};
export const CodeToUrl = (row: any) => {
  const queryRow: any = {};
  for (const key in row) {
    queryRow[key] = decodeURIComponent(row[key]);
  }
  return queryRow;
};

export const loadFile = async (fileName: string, url: string) => {
  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   const blob = await response.blob();
  //   const file = new File([blob], fileName, { type: blob.type });
  //   return file;
  // } catch (error) {
  //   console.error('Failed to load file:', error);
  // }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  } catch (error) {
    console.error('Failed to load file:', error);
  }
};

export const loadFileArray = (list: []) => {
  return new Promise(async (resolve) => {
    const arr: any[] = [];
    for (const item of list) {
      await fetchData(item).then((res: any) => {
        arr.push(res);
      });
    }
    resolve(arr);
  });
};

const fetchData = async (item: any) => {
  try {
    // 使用 async/await 模拟同步调用
    const response: Blob = await new Promise((resolve) => {
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
