import { test, expect } from "@playwright/test";

test("api testing here (GET)", async ({ request }) => {
  const responce = await request.get("https://reqres.in/api/users/2");
  expect(responce.status()).toBe(200);

  const name = await responce.text();
  expect(name).toContain("Janet");
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
});
