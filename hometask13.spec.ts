
import { test, expect } from '@playwright/test';

// hometask 13.1
test('GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');

    expect(response).toBeOK();
    
    const body = await response.json();
    console.log(await body);

    expect(body).toHaveProperty('data');

    expect(body.data.first_name).toBe('Janet');
    expect(body.data.last_name).toBe('Weaver');
    expect(body.data.email).toBe('janet.weaver@reqres.in');

    });


    // hometask 13.2
test('NewPost', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/posts/add', {
        data: {
            title: "Awesome title",
            userId: 10
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(await body);
    expect(body.title).toBe("Awesome title");
    expect(body.userId).toBe(10);
});



// hometask 13.3
test('GET request wit params', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products', {
        params: {
            skip: 10,
            limit: 5
        }
    });
    
    const body = await response.json();
    console.log(await body);
    expect(response).toBeOK();

    expect(body.products.length).toBe(5);
    expect(body.products[0].price).toBe(1899.99);
    expect(body.products[1].rating).toBeLessThan(4);
    expect(body.products[4].stock).toBeGreaterThan(10);
    expect(body.products[0]).toHaveProperty("returnPolicy");
});