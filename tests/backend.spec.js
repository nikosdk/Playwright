const { test, expect, request } = require('@playwright/test');

const payload = { "name": "Jane Doe", "username": "jdoe", "email": "janedoe@april.biz", "address": { "street": "Test Street", "suite": "Apt. 55", "city": "Athens", "zipcode": "11141", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56331", "website": "ministryOfTesting.org", "company": { "name": "Pixel Services", "catchPhrase": "check yourself before you wreck yourself", "bs": "testing" } };

test('Automation of back-end functionality - GET operation', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const jsonResponse = await response.json();
    validateJsonSchema(jsonResponse);
  });

  test('Automation of back-end functionality - POST operation', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {data:payload});
    expect(response.status()).toBe(201);
    const jsonResponse = await response.json();
    validateJsonSchema(jsonResponse);
  });

  test('Automation of back-end functionality - PUT operation', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/users/10', {data:payload});
    expect(response.status()).toBe(200);
    const jsonResponse = await response.json();
    validateJsonSchema(jsonResponse);
  });

  test('Automation of back-end functionality - DELETE operation', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/10');
    expect(response.status()).toBe(200);
  });

  async function validateJsonSchema(jsonObject) {
    if(Array.isArray(jsonObject)) {
        // Extract the schema values
        const ids = jsonObject.map(item => item.id);
        const names = jsonObject.map(item => item.name);
        const usernames = jsonObject.map(item => item.username);
        const emails = jsonObject.map(item => item.email);
        const addresses = jsonObject.map(item => item.address);
        const phones = jsonObject.map(item => item.phone);
        const websites = jsonObject.map(item => item.website);
        const companies = jsonObject.map(item => item.company);
    
        expect(ids[0]).not.toBeNull();
        expect(names[0]).not.toBeNull();
        expect(usernames[0]).not.toBeNull();
        expect(emails[0]).not.toBeNull();
        expect(addresses[0]).not.toBeNull();
        expect(phones[0]).not.toBeNull();
        expect(websites[0]).not.toBeNull();
        expect(companies[0]).not.toBeNull();
    }
    else {
        expect(jsonObject.id).not.toBeNull();
        expect(jsonObject.name).not.toBeNull();
        expect(jsonObject.username).not.toBeNull();
        expect(jsonObject.email).not.toBeNull();
        expect(jsonObject.address).not.toBeNull();
        expect(jsonObject.phone).not.toBeNull();
        expect(jsonObject.website).not.toBeNull();
        expect(jsonObject.company).not.toBeNull();
    }
  };