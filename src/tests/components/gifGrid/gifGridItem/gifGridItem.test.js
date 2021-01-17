
import { shallow } from 'enzyme'
import GifGridItem from '../../../../components/gifGrid/gifGridItem'

describe('Pruebas de <GifGridItem />', () => {
    let wrapper
    const title = 'prueba'
    const url = 'https://i.pinimg.com/236x/32/d8/f2/32d8f2a21522aa45fc755ee378e45e41.jpg'

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />)
    })

    test('debe de mostrar <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
        /* expect( div.prop('className') ).toContain( 'animate__fadeIn' ) */
    })
})
