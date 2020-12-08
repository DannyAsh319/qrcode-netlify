// functions/hello.js
exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        name: "meatballs",
        date: "2020-04-01T23:28:56.782Z",
        photo:
          "https://www.oakhousefoods.co.uk/media/catalog/product/cache/336111bc363ebdc007831e2145326566/8/7/875.jpg",
      },
      {
        name: "chilli",
        date: "2020-06-01T23:28:56.782Z",
        photo:
          "https://static01.nyt.com/images/2014/02/12/dining/12JPCHILI2/12JPCHILI2-articleLarge-v3.jpg",
      },
    ]),
  };
};
