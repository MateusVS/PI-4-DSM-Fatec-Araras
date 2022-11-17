describe('Testing auth use case implementation', () => {
  test('Should valid user entry, return an valid token', () => {
    const object = {
      user_id: 12,
      user_name: 'name',
      token: 'token123456789',
    };

    expect(object).toBe({
      user_id: 12,
      user_name: 'name',
      token: 'token123456789',
    });
  });

  // test('generate an valid token', () => {

  // });
});


// todo criar mocks, focando nos testes unitarios em si
