import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => {

    const inputList = reactive<string[]>([])

    interface outuputList {
        name: String,
        canControl: Boolean
    }
    const outuputList = reactive<outuputList[]>([])

    function addItem(newItem: string) {
        inputList.push(newItem)
    }
    function reset() {
        inputList.length = 0
    }


    return {
        inputList,
        outuputList,
        addItem,
        reset
    }
})