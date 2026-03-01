import $ from 'jquery';

import { setData } from '@/components/loadData/loadData';
import { loadGist } from '@/components/api/gist/gist';
import { gistId } from '@/components/api/gist/tables/gistId';

export default function autoload() {
    return new Promise((resolve, reject) => {  
        loadGist(gistId)
            .then(data => {
                console.log(data)
                setData(data)
                resolve(true)
            }) 
            .catch(error => {
                // reject(new Error('Ошибка при загрузке данных'))
                reject(error)
                console.error(error)
            })
            .finally(() => {
                $('main').removeClass('loader')
            }) 
    })
}