import SomeDummyService from "../services/SomeDummyService";

describe('Some test suite', () => {
    test('Some unit test here', () => {
        expect(1).toBe(1);
    })

    test('Some unit test that access a service', () => {
        const target = new SomeDummyService()

        const actual = target.doSomething(1, 2)

        expect(actual).toBe(3)
    })
})