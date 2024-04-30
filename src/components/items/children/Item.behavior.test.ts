import {render, screen, fireEvent} from '@/test-utils'
import {ItemInterface} from '@/models/items'
import ItemComponent from './Item.component.vue'

describe('Item.component: behavior', () => {
    // test our component click event
    it('click event invokes selectItem handler as expected', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const testid = 'unit-test-behavior-1'

        // render component
        const {emitted} = render<typeof ItemComponent>(ItemComponent, {
            props: {
                testid,
                model
            }
        })

        // get element reference by testid
        const liElement = screen.getByTestId(testid)

        // fire click
        fireEvent.click(liElement)

        // check that it emitted the "selected" event and passed the expected param value (the model of type ItemInterface)
        // this will be an object like {"selectItem":[[1]],"click":[[{"isTrusted":false}]]}
        const result = emitted() as { selectItem: any[][] }
        // console.log('emitted result', JSON.stringify(result))
        expect(result.selectItem).not.toBeUndefined
        const expectedParam = result.selectItem[0][0]
        expect(expectedParam).not.toBeUndefined
        expect(expectedParam).toEqual(model.id)
    })
})
