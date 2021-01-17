import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs.js', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Samurai')
        expect( gifs.length ).toBe( 10 )
    })
    test('debe de traer un arreglo vacío si no se envia una categoria', async () => {
        const gifs = await getGifs('')
        expect( gifs.length ).toBe( 0 )
    })
})
