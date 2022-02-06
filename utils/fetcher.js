const fetcher = async (url, token) => {
  const res = await fetch({
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json', token }),
    credentials: 'same-origin',
  });

  return res.json();
};

export default fetcher;
