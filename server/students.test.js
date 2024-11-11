const request = require('supertest');
const express = require('express');
const app = require('./server'); 


jest.mock('../db', () => ({
  query: (sql, callback) => {
    // Test verisi döndürmek için
    const mockData = [
      { id: 1, tc: '2147483647', ad: 'berkay', soyad: 'muratli', okul_adi: 'beykent', okul_no: '1234' }
    ];
    callback(null, mockData);
  }
}));

describe('GET /students', () => {
  it('should return all students data', async () => {
    const res = await request(app).get('/students');

  
    expect(res.statusCode).toEqual(200); //checking status code

    expect(res.body).toEqual([
      { id: 1, tc: '2147483647', ad: 'berkay', soyad: 'muratli', okul_adi: 'beykent', okul_no: '1234' }
    ]);

  it('handle server error', async () => {
    
    jest.spyOn(require('../db'), 'query').mockImplementation((sql, callback) => {
      callback(new Error('Server error'), null);
    });

    const res = await request(app).get('/students');

  
    expect(res.body).toEqual({ message: 'Server error' });
  });
});