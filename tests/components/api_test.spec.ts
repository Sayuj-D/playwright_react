import { test, expect } from "@playwright/test";

test("api testing here (GET)", async ({ request }) => {
  const responce = await request.get("https://reqres.in/api/users/2");
  expect(responce.status()).toBe(200);

  const name = await responce.text();
  expect(name).toContain("Janet");
  console.log(await responce.json());
});

test("api testing here(POST)", async ({ request }) => {
  const responce = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Sayujya",
      job: "leader",
    },
  });
  expect(responce.status()).toBe(201);

  const text = await responce.text();
  expect(text).toContain("Sayujya");
  console.log(await responce.json());
});

test("api testing here(PUT)", async ({ request }) => {
  const responce = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Sayujya",
      job: "leader",
    },
  });
  expect(responce.status()).toBe(200);

  const text = await responce.text();
  expect(text).toContain("Sayujya");
  console.log(await responce.json());
});

test("api testing here(Delete)", async ({ request }) => {
  const responce = await request.delete("https://reqres.in/api/users/2", {
    data: {
      name: "Sayujya",
      job: "leader",
    },
  });
  expect(responce.status()).toBe(204);
});
