import journalApi from '@/api/journalApi'

// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/all')
    commit('setEntries', data.entries)
}

export const updateEntry = async (/*{ commit }*/) => {

}


export const createEntry = async (/*{ commit }*/) => {

}
