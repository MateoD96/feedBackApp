async function getData(options, actionCallback) {
  const res = {};
  try {
    const resp = await actionCallback(options);
    if (!resp) {
      throw "Error al acceder a la información";
    }
    res.data = resp;
  } catch (err) {
    res.error = err;
    console.error(err);
  }
  return res;
}

export default getData;
