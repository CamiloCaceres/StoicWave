import { defineStore } from 'pinia'

export const useList = defineStore('list', () =>{
    const items = reactive<String[]>([])
    
    function addItem (newItem: string){
            items.push(newItem)
        }    
    
    return{
        items,
        addItem,
    }
})