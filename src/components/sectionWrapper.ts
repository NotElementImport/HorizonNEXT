import { comp } from '../horizon/index'

interface Props {
    title: string
    desc: string
}

export default comp<Props>(async ({ title, desc }, { section, onlyServer, slot, text }) => {
    section({ class: 'island' }, _ => {
        onlyServer(() => {
            section({ class: 'section__title' }, _ => {
                text(title)
            })
        
            section({ class: 'section__desc' }, _ => {
                text(desc)
            })
        })
    
        section({ class: 'section__wrapper'} , _ => {
            // Demo Playground :
            slot()
        })
    })
})