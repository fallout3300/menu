import $, { error } from 'jquery'

import playAnimation from '@/helpers/playAnimation'
import { getData } from '@/components/loadData/loadData'
import { saveGist } from '@/components/api/gist/gist'
import { gistId } from '@/components/api/gist/tables/gistId'

// import setData from '@/components/loadData/helpers/setData'

export default function saveBtn() {
    $('#save-btn').click(function(event) {
        try {
            const data = getData()
            saveGist(data, gistId)
                .then(() => {
                    playAnimation($(this), 'succsess')
                })
                .catch(error => {
                    throw error
                })
        } catch (error) {
            console.error(error)
            playAnimation($(this), 'error')
        }
    })
}

// getDialogInput('Введите Имя Таблицы: ').then(tableName => {
//     if (!tableName) {
//         throw new Error('имя таблицы не получено')
//     }
//     loadGist(tableId).then(oldData => {
//         debugger
//         oldData[tableName] = data

//         saveGist(oldData)
//             .then(() => {
//                 playAnimation($(this), 'succsess')
//             })
//             .catch(error => {
//                 throw error
//             })                    
//     }) 
// })