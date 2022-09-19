import { defineStore } from 'pinia'
const useIndexStore = defineStore('index', {
    state: () => {
        return {
            loading: 0
        }
    },
    actions: {
        addLoading() {
            this.loading++
        },
        subLoading() {
            if (this.loading <= 0) {
                this.loading = 0
                return
            }
            this.loading--
        }
    }
})
export default useIndexStore
