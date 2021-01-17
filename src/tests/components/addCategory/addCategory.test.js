import { shallow } from "enzyme"
import AddCategory from "../../../components/addCategory"

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> )

    beforeEach( ()=>{
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={setCategories}/> )
    })

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'hola mundo'
        //simular un cambio
        input.simulate('change', { target: { value } })
    })

    test('No debe de postear la información onSubmit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'

        //1- simular el inputChange
        input.simulate('change', { target: { value } })

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}})

        //3. setCategories se debe de haber llamado
        // toHaveBeenCalled() == evalua si la funcion fue llamada 
/*         expect( setCategories ).toHaveBeenCalled() */
        // toHaveBeenCalledTimes(n) == evalua si la funcion fue llamada n cantidad de veces (n = a un numero)
        /* expect( setCategories ).toHaveBeenCalledTimes(1) */
        // toHaveBeenCalledWith( expect.any(Function) ) == evalua si fue llamada la funcion con cualquier tipo de funcion 
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        //4. el valor del input debe estar ''
        expect( input.prop('value') ).toBe( '' )
    })
    
    
    
    
})
