const app = require("../../app");
const supertest = require("supertest");
const expect = require("chai").expect;

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});
Mocha
describe("GET /api/v1/books", () => {
  before(async () => {
    response = await request.get("/api/v1/books");
  });

  it("is expected to respond with status 200", () => {
    expect(response.status)
    .to.equal(200);
  });

  it("is expected to respond with a collection of books", () => {
    const expectedResponseBody = {
      books: [
        {
          author: "Johan",
          title: "Getting started with NodeJS",
        },
        {
          author: "Johan Berglund",
          title: "NodeJS for Johan",
        },
      ],
    };

    expect(JSON.stringify(response.body))
    .to.equal(JSON.stringify(expectedResponseBody))
  });
});
