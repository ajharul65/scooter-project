const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  // tests here!
const y = new Scooter();

  // rent method
  test('rent',()=>{
    const response = y.rent('joe')
    expect(response).toBeInstanceOf(User)
    expect(y.user).toBe('joe')
})
  // dock method
  test('dock',()=>{
    y.dock('station')
    expect(y.station).toBe('station');
    expect(y.user).toBe(null)
})
  // requestRepair method

  // charge method

})
