import { shallow } from "enzyme"
import GifGrid from "../../../components/gifGrid"
import { useFetchGifs } from "../../../hooks/useFetchGifs"
import '@testing-library/jest-dom'
jest.mock("../../../hooks/useFetchGifs")

describe('Prueba de <GifGrid />', () => {
    
    const category = 'One Punch'
    /* let wrapper = shallow( <GifGrid category={ category }/>) */

    test('debe funcionar correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes con el useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            url: 'https://localhskafdgjkashgdkjh',
            title:'Prueba'
        },
        {
            id:'ABC4u',
            url: 'https://localhskafdgjkashgdkjh',
            title:'Prueba'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe( true )
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length )
    })
})
